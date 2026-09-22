/**
 * Server-side contact request handler compatible with Vercel Serverless Functions.
 * 
 * Enforces:
 * - Strict HTTP POST
 * - Schema validation & character limits
 * - Honeypot spam defense (hidden 'website' field)
 * - Explicit 5-second downstream timeout
 * - Safe error handling (never logs request body or secrets)
 * - Honest unconfigured state (HTTP 503) when CONTACT_WEBHOOK_URL is not set
 */

export interface ValidatedContactPayload {
  name: string;
  email: string;
  company?: string;
  processDescription: string;
  marketingConsent?: boolean;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function processContactRequest(body: Record<string, unknown>): Promise<{
  status: number;
  data: {
    success: boolean;
    code: "SUCCESS" | "VALIDATION_FAILED" | "SPAM_DETECTED" | "UNCONFIGURED_DOWNSTREAM" | "TIMEOUT" | "SERVER_ERROR";
    message: string;
    timestamp: string;
  };
}> {
  const timestamp = new Date().toISOString();

  // 1. Honeypot check: 'website' field must be completely absent or empty
  if (body.website && typeof body.website === "string" && body.website.trim().length > 0) {
    // Honeypot triggered
    return {
      status: 400,
      data: {
        success: false,
        code: "SPAM_DETECTED",
        message: "Automated submission rejected.",
        timestamp
      }
    };
  }

  // 2. Field validation
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const processDescription = typeof body.processDescription === "string" ? body.processDescription.trim() : "";
  const marketingConsent = Boolean(body.marketingConsent);

  if (!name || name.length < 2 || name.length > 100) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please provide a valid contact name (2 to 100 characters).",
        timestamp
      }
    };
  }

  if (!email || email.length > 120 || !EMAIL_REGEX.test(email)) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please provide a valid work email address.",
        timestamp
      }
    };
  }

  if (company && company.length > 120) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Company name must not exceed 120 characters.",
        timestamp
      }
    };
  }

  if (!processDescription || processDescription.length < 10 || processDescription.length > 3000) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please describe the process you would like to improve (10 to 3,000 characters).",
        timestamp
      }
    };
  }

  // 3. Check for downstream webhook configuration
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.trim() === "") {
    // Honest unconfigured state - strictly do NOT pretend request was sent
    return {
      status: 503,
      data: {
        success: false,
        code: "UNCONFIGURED_DOWNSTREAM",
        message: "Online requests are not available yet. The contact delivery integration (CONTACT_WEBHOOK_URL) has not been configured by the site administrator.",
        timestamp
      }
    };
  }

  // 4. Forward to downstream webhook with 5000ms explicit timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const payload: ValidatedContactPayload = {
      name,
      email,
      company: company || undefined,
      processDescription,
      marketingConsent
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "DroppflowwSystems-ContactProxy/1.0"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return {
        status: 200,
        data: {
          success: true,
          code: "SUCCESS",
          message: "Thank you. Your request for a workflow review has been received. Our team will review your notes and be in touch.",
          timestamp
        }
      };
    } else {
      return {
        status: 502,
        data: {
          success: false,
          code: "SERVER_ERROR",
          message: "Downstream notification service rejected the submission. Please try again later.",
          timestamp
        }
      };
    }
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const isAbort = err instanceof Error && err.name === "AbortError";
    return {
      status: isAbort ? 504 : 500,
      data: {
        success: false,
        code: isAbort ? "TIMEOUT" : "SERVER_ERROR",
        message: isAbort
          ? "Request timed out while contacting delivery service. Please try again."
          : "Delivery service temporarily unavailable. Please try again later.",
        timestamp
      }
    };
  }
}

// Vercel Serverless Function entry point
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      code: "VALIDATION_FAILED",
      message: "Method Not Allowed. Use POST.",
      timestamp: new Date().toISOString()
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const result = await processContactRequest(body);
    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(400).json({
      success: false,
      code: "VALIDATION_FAILED",
      message: "Malformed JSON payload.",
      timestamp: new Date().toISOString()
    });
  }
}
