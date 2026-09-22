/**
 * Droppfloww Systems - Central Configuration Module
 * 
 * Centralizes site domain, scheduling links, API endpoints,
 * validation constraints, and privacy/analytics adapters.
 */

export const CONFIG = {
  SITE_NAME: "Droppfloww Systems",
  TAGLINE: "Custom systems for real operations.",
  WORKING_DOMAIN: "droppflowwsystems.com",
  SITE_URL: "https://droppflowwsystems.com",
  
  // Founder & CEO Contact Information
  FOUNDER_NAME: "Kentley",
  FOUNDER_TITLE: "Founder & CEO",
  FOUNDER_PHONE: "+62 858-2046-7085",
  FOUNDER_PHONE_RAW: "+6285820467085",
  WHATSAPP_URL: "https://wa.me/6285820467085",
  DIRECT_CONTACT_EMAIL: "wongkentley@gmail.com",

  // External scheduling URL (e.g. Cal.com or Calendly if integrated in future).
  BOOKING_URL: "",

  // Form field limits for robust validation & security
  LIMITS: {
    NAME_MAX: 100,
    EMAIL_MAX: 120,
    COMPANY_MAX: 120,
    PROCESS_MIN: 10,
    PROCESS_MAX: 3000,
    TOPIC_MAX: 500,
  },

  // Navigation anchors
  NAV_LINKS: [
    { label: "What we build", href: "#services" },
    { label: "How we work", href: "#process" },
    { label: "Schedule a demo", href: "#book-call" },
    { label: "Why Droppfloww", href: "#why-droppfloww" },
    { label: "FAQ", href: "#faq" },
  ]
};

export const BRAND_COLORS = {
  navy: "#0B1728",
  navyDark: "#060E1A",
  signatureBlue: "#617594", // Droppfloww signature slate blue
  signatureBlueHover: "#50637F",
  signatureBlueActive: "#43546D",
  signatureBlueLight: "#E7EDF5", // Droppfloww signature soft ice blue
  signatureBlueBorder: "#CBDDEB",
  slate: "#617594",
  slateDark: "#1E2E42",
  slateBorder: "#CBDDEB",
  accent: "#617594",
  lightBg: "#FAFBFD",
  white: "#FFFFFF",
};

/**
 * Privacy-safe analytics adapter.
 * Strict constraint: NEVER forward PII (names, emails, form text) to analytics.
 * Disabled by default until the site owner configures a compliant provider.
 */
interface AnalyticsEvent {
  eventName: string;
  category: string;
  timestamp: string;
  metadata?: Record<string, string | number | boolean>;
}

class SafeAnalytics {
  private enabled = false;

  public enable() {
    this.enabled = true;
    console.info("[Analytics] Safe analytics adapter enabled.");
  }

  public trackCtaClick(label: string) {
    if (!this.enabled) return;
    const evt: AnalyticsEvent = {
      eventName: "cta_click",
      category: "engagement",
      timestamp: new Date().toISOString(),
      metadata: { cta_label: label }
    };
    this.dispatch(evt);
  }

  public trackEnquirySuccess() {
    if (!this.enabled) return;
    const evt: AnalyticsEvent = {
      eventName: "enquiry_submitted",
      category: "conversion",
      timestamp: new Date().toISOString(),
    };
    this.dispatch(evt);
  }

  private dispatch(event: AnalyticsEvent) {
    // Forward to configured provider if present
    if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push(event);
    }
    console.debug("[Analytics Event]", event);
  }
}

export const analytics = new SafeAnalytics();
