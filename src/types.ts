/**
 * Droppfloww Systems - Type Definitions
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  processDescription: string;
  marketingConsent?: boolean;
  website?: string; // Honeypot field - must remain empty
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  processDescription?: string;
  general?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  code?: "SUCCESS" | "VALIDATION_FAILED" | "SPAM_DETECTED" | "UNCONFIGURED_DOWNSTREAM" | "TIMEOUT" | "SERVER_ERROR";
  timestamp: string;
}

export interface ClientReview {
  id: string;
  clientIndustry: string;
  organizationType: string;
  reviewerRole: string;
  projectFocus: string;
  challenge: string;
  deliveredSystem: string;
  outcomeMetric: string;
  quote: string;
  implementationDuration: string;
  transparencyNote: string;
}

export type ExampleSystemTab = "engineering" | "office" | "service";

export interface BOQItem {
  id: string;
  item: string;
  sourceDoc: string;
  quantity: string;
  unit: string;
  reviewStatus: "Extracted" | "Needs Review" | "Verified";
  estimatedRate: string;
}

export interface CRMEnquiry {
  id: string;
  source: string;
  subject: string;
  customer: string;
  receivedAt: string;
  currentStep: "Enquiry" | "CRM" | "Assigned task" | "Review";
  assignedTo: string;
  notes: string;
}

export interface ServiceJobBooking {
  id: string;
  requestType: string;
  serviceZone: string;
  window: string;
  assignedSpecialist: string;
  status: "Request" | "Availability" | "Team confirmation" | "Follow-up";
  customerNoticeSent: boolean;
}

export interface VerificationTestResult {
  id: string;
  name: string;
  category: "form_validation" | "honeypot" | "api_delivery" | "timeout_guard";
  status: "pending" | "passed" | "failed" | "unconfigured";
  timestamp: string;
  message: string;
  details?: Record<string, unknown>;
}
