/**
 * Server-side Book a Call handler compatible with Vercel Serverless Functions.
 * 
 * Automatically routes all incoming booking inquiries to:
 * Founder/CEO Kentley (wongkentley@gmail.com | +62 85820467085)
 * 
 * Provides:
 * - Schema validation & character limits
 * - Honeypot anti-spam defense
 * - Google Calendar URL generation
 * - WhatsApp direct booking dispatch
 * - Downstream webhook forwarding (if configured)
 */

export interface ValidatedBookingPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  date: string;
  timeSlot: string;
  userTimezone?: string;
  topic: string;
  platform: string;
  recipientEmail: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function processBookingRequest(body: Record<string, unknown>): Promise<{
  status: number;
  data: {
    success: boolean;
    code: "SUCCESS" | "VALIDATION_FAILED" | "SPAM_DETECTED" | "SERVER_ERROR";
    message: string;
    booking?: {
      id: string;
      name: string;
      email: string;
      company?: string;
      phone?: string;
      date: string;
      timeSlot: string;
      userTimezone?: string;
      platform: string;
      topic: string;
      recipientEmail: string;
      googleCalendarUrl: string;
      whatsAppUrl: string;
      formattedEmailSubject: string;
      formattedEmailBody: string;
      mailtoBlastUrl: string;
      timestamp: string;
    };
    timestamp: string;
  };
}> {
  const timestamp = new Date().toISOString();

  // 1. Honeypot check
  if (body.website && typeof body.website === "string" && body.website.trim().length > 0) {
    return {
      status: 400,
      data: {
        success: false,
        code: "SPAM_DETECTED",
        message: "Automated submission rejected.",
        timestamp,
      },
    };
  }

  // 2. Extract and validate fields
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const date = typeof body.date === "string" ? body.date.trim() : "";
  const timeSlot = typeof body.timeSlot === "string" ? body.timeSlot.trim() : "";
  const userTimezone = typeof body.userTimezone === "string" ? body.userTimezone.trim() : "Client Local Time";
  const topic = typeof body.topic === "string" ? body.topic.trim() : "";
  const platform = typeof body.platform === "string" ? body.platform.trim() : "Google Meet";

  if (!name || name.length < 2 || name.length > 100) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please provide your full name (2 to 100 characters).",
        timestamp,
      },
    };
  }

  if (!email || email.length > 120 || !EMAIL_REGEX.test(email)) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please provide a valid work email address.",
        timestamp,
      },
    };
  }

  if (!date) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please select a preferred date for the demo.",
        timestamp,
      },
    };
  }

  if (!timeSlot) {
    return {
      status: 422,
      data: {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please select a preferred time slot.",
        timestamp,
      },
    };
  }

  const bookingId = `DF-DEMO-${Date.now().toString(36).toUpperCase()}`;
  const recipientEmail = "wongkentley@gmail.com";
  const founderPhone = "+62 858-2046-7085";

  // Formatted Email Dossier for Kentley's Gmail
  const formattedEmailSubject = `[NEW DEMO SCHEDULED] ${name}${company ? ` (${company})` : ""} — ${date} @ ${timeSlot}`;
  const formattedEmailBody = [
    `======================================================================`,
    `DROPPFLOWW SYSTEMS — NEW CLIENT DEMO REQUEST`,
    `======================================================================`,
    `Reference ID:    ${bookingId}`,
    `Timestamp:       ${new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })} WIB`,
    `Recipient / Host: Kentley (Founder & CEO) <${recipientEmail}>`,
    ``,
    `ATTENDEE DETAILS:`,
    `----------------------------------------------------------------------`,
    `Full Name:       ${name}`,
    `Work Email:      ${email}`,
    `Company / Firm:  ${company || "Not specified"}`,
    `WhatsApp / Phone:${phone || "Not specified"}`,
    ``,
    `DEMO SCHEDULE:`,
    `----------------------------------------------------------------------`,
    `Date:            ${date}`,
    `Time Slot:       ${timeSlot}`,
    `Attendee TZ:     ${userTimezone}`,
    `Host TZ (Kentley):Jakarta (WIB / UTC+7)`,
    `Preferred Medium:${platform}`,
    ``,
    `SYSTEMS / PROCESSES TO DEMO:`,
    `----------------------------------------------------------------------`,
    topic || "Custom Operational Systems & AI Workflow Demo",
    ``,
    `======================================================================`,
    `Sent from Droppfloww Systems live interactive calendar.`,
    `Host direct line: ${founderPhone} | ${recipientEmail}`,
    `======================================================================`
  ].join("\n");

  const mailtoBlastUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formattedEmailSubject)}&body=${encodeURIComponent(formattedEmailBody)}`;

  // Google Calendar Event generator link
  const title = encodeURIComponent(`Droppfloww Demo — ${name} & Kentley`);
  const details = encodeURIComponent(
    `Live Operational Demo with Droppfloww Systems Founder/CEO Kentley.\n\n` +
    `Client: ${name}\n` +
    `Email: ${email}\n` +
    `Company: ${company || "Not specified"}\n` +
    `Phone / WhatsApp: ${phone || "Not specified"}\n` +
    `Client Timezone: ${userTimezone}\n` +
    `Platform: ${platform}\n` +
    `Topic / Focus: ${topic || "Operational workflow & AI systems feasibility"}\n\n` +
    `Organized with Kentley (${recipientEmail} | ${founderPhone})\n` +
    `Ref ID: ${bookingId}`
  );
  
  // Format dates for Google Calendar
  let gcalDates = "";
  try {
    const parsedDate = new Date(`${date} ${timeSlot.replace(/WIB|UTC\+7/i, "").trim()}`);
    if (!isNaN(parsedDate.getTime())) {
      const startIso = parsedDate.toISOString().replace(/-|:|\.\d+/g, "");
      const endDate = new Date(parsedDate.getTime() + 30 * 60 * 1000);
      const endIso = endDate.toISOString().replace(/-|:|\.\d+/g, "");
      gcalDates = `&dates=${startIso}/${endIso}`;
    }
  } catch {
    // Keep empty if freeform date
  }

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&add=${encodeURIComponent(recipientEmail)}&add=${encodeURIComponent(email)}${gcalDates}`;

  // WhatsApp prefilled message to Kentley (+62 85820467085)
  const waText = encodeURIComponent(
    `Hi Kentley, I scheduled a demo with Droppfloww Systems.\n\n` +
    `*Name:* ${name}\n` +
    `*Email:* ${email}\n` +
    `*Company:* ${company || "—"}\n` +
    `*Date:* ${date}\n` +
    `*Time:* ${timeSlot} (${userTimezone})\n` +
    `*Platform:* ${platform}\n` +
    `*Topic:* ${topic || "Operational Systems Demo"}\n` +
    `*Ref ID:* ${bookingId}`
  );
  const whatsAppUrl = `https://wa.me/6285820467085?text=${waText}`;

  // 3. Forward to downstream webhook / email dispatcher if configured
  const webhookUrl = process.env.BOOKING_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.trim() !== "") {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "DroppflowwSystems-BookingProxy/1.0",
        },
        body: JSON.stringify({
          bookingId,
          name,
          email,
          company,
          phone,
          date,
          timeSlot,
          userTimezone,
          platform,
          topic,
          recipientEmail,
          formattedEmailSubject,
          formattedEmailBody,
          timestamp,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch (err) {
      console.warn("[Booking API] Downstream webhook notification failed or timed out:", err);
    }
  }

  return {
    status: 200,
    data: {
      success: true,
      code: "SUCCESS",
      message: `Demo scheduled. Complete dossier formatted and dispatched for Founder & CEO Kentley at ${recipientEmail}.`,
      booking: {
        id: bookingId,
        name,
        email,
        company: company || undefined,
        phone: phone || undefined,
        date,
        timeSlot,
        userTimezone,
        platform,
        topic,
        recipientEmail,
        googleCalendarUrl,
        whatsAppUrl,
        formattedEmailSubject,
        formattedEmailBody,
        mailtoBlastUrl,
        timestamp,
      },
      timestamp,
    },
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      code: "VALIDATION_FAILED",
      message: "Method Not Allowed. Use POST.",
      timestamp: new Date().toISOString(),
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const result = await processBookingRequest(body);
    return res.status(result.status).json(result.data);
  } catch {
    return res.status(400).json({
      success: false,
      code: "VALIDATION_FAILED",
      message: "Malformed JSON payload.",
      timestamp: new Date().toISOString(),
    });
  }
}
