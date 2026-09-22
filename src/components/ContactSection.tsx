import React, { useState } from "react";
import { CONFIG, analytics } from "../config";
import { ContactFormData, ContactFormErrors, ContactApiResponse } from "../types";
import { CheckCircle2, AlertCircle, Calendar, ArrowRight, RefreshCw } from "lucide-react";

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    processDescription: "",
    marketingConsent: false,
    website: "" // Honeypot
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isPending, setIsPending] = useState(false);
  const [responseStatus, setResponseStatus] = useState<ContactApiResponse | null>(null);

  const validate = (): boolean => {
    const errs: ContactFormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    } else if (formData.name.length > CONFIG.LIMITS.NAME_MAX) {
      errs.name = `Name must not exceed ${CONFIG.LIMITS.NAME_MAX} characters.`;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid work email address.";
    } else if (formData.email.length > CONFIG.LIMITS.EMAIL_MAX) {
      errs.email = `Email must not exceed ${CONFIG.LIMITS.EMAIL_MAX} characters.`;
    }

    if (formData.company && formData.company.length > CONFIG.LIMITS.COMPANY_MAX) {
      errs.company = `Company must not exceed ${CONFIG.LIMITS.COMPANY_MAX} characters.`;
    }

    if (!formData.processDescription.trim() || formData.processDescription.trim().length < CONFIG.LIMITS.PROCESS_MIN) {
      errs.processDescription = `Please describe the process in at least ${CONFIG.LIMITS.PROCESS_MIN} characters.`;
    } else if (formData.processDescription.length > CONFIG.LIMITS.PROCESS_MAX) {
      errs.processDescription = `Description must not exceed ${CONFIG.LIMITS.PROCESS_MAX} characters.`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isPending) return;

    if (!validate()) {
      return;
    }

    setIsPending(true);
    setResponseStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data: ContactApiResponse = await res.json();
      setResponseStatus(data);

      if (res.ok && data.success) {
        // Track success only after genuine downstream confirmation
        analytics.trackEnquirySuccess();
        // Reset form on verified success
        setFormData({
          name: "",
          email: "",
          company: "",
          processDescription: "",
          marketingConsent: false,
          website: ""
        });
        setErrors({});
      } else {
        // Form inputs are strictly preserved on error so user doesn't lose their input
        console.warn(`[Contact Delivery Notice] [${data.timestamp}] Code: ${data.code} - ${data.message}`);
      }
    } catch (err) {
      const timestamp = new Date().toISOString();
      console.error(`[Contact Delivery Error] [${timestamp}] Network or fetch error:`, err);
      setResponseStatus({
        success: false,
        code: "SERVER_ERROR",
        message: "Unable to reach the server. Your entered details have been preserved. Please check your connection or reach out directly.",
        timestamp
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#F4F8FB] border-b border-[#D7E3EE] scroll-mt-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, Guidelines & Optional Direct Scheduling */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
                <span>Direct Scoping & Feasibility</span>
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.08] mb-6"
            >
              Tell us what slows your business down.
            </h2>

            <p className="text-[19px] sm:text-[20px] leading-[1.7] text-[#1E2E42] font-normal mb-10 max-w-[50ch]">
              Start with one process. We'll discuss where it gets stuck and whether a custom system could help.
            </p>

            {/* Clear Scoping Reassurance */}
            <div className="space-y-4 mb-10 text-[16px] sm:text-[17px] text-[#1E2E42] leading-relaxed font-normal">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#617594] mt-2.5 shrink-0" />
                <span>No phone numbers, budget commitments, or long questionnaires required.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#617594] mt-2.5 shrink-0" />
                <span>Submitting this request evaluates initial technical feasibility before scheduling.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#617594] mt-2.5 shrink-0" />
                <span>Direct delivery to Founder & CEO Kentley (<strong className="text-[#0B1728] font-semibold">{CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}</strong>).</span>
              </div>
            </div>

            {/* Direct Interactive Calendar Scheduling Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#CBDDEB] mb-6 shadow-xs">
              <div className="text-[18px] font-bold text-[#0B1728] mb-2">
                Prefer a live walkthrough?
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] mb-6 leading-relaxed font-normal">
                Choose an available slot on our calendar, or reach out directly on WhatsApp ({CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"}).
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#book-call"
                  className="inline-flex items-center gap-2 text-[15px] font-bold bg-[#617594] text-white px-6 py-3.5 rounded-full hover:bg-[#50637F] transition-colors shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Schedule walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </a>
                <a
                  href={CONFIG.WHATSAPP_URL || "https://wa.me/6285820467085"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[#617594] bg-white px-6 py-3.5 rounded-full border border-[#617594] hover:bg-[#E7EDF5] transition-colors cursor-pointer"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Form with Preserved Values and Honest Feedback */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#CBDDEB] shadow-[0_4px_25px_rgba(11,23,40,0.03)]">
            
            {/* Status Notifications */}
            {responseStatus && responseStatus.success && (
              <div
                role="status"
                className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[15px] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{responseStatus.message}</p>
                </div>
              </div>
            )}

            {responseStatus && !responseStatus.success && (
              <div
                role="alert"
                className="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-[15px]"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">
                      {responseStatus.code === "UNCONFIGURED_DOWNSTREAM"
                        ? "Online requests are not available yet"
                        : "Enquiry could not be dispatched"}
                    </p>
                    <p className="text-[14px] text-amber-800 mt-1 leading-relaxed">
                      {responseStatus.message}
                    </p>
                    {responseStatus.code === "UNCONFIGURED_DOWNSTREAM" && (
                      <div className="mt-3 pt-2 border-t border-amber-200/80 text-[13px] text-amber-900">
                        <span>Please reach out directly at </span>
                        <a href={`mailto:${CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}`} className="font-semibold underline">
                          {CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}
                        </a>.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Form Element */}
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="form-website-trap">Leave this field blank</label>
                <input
                  id="form-website-trap"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website || ""}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2"
                >
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={CONFIG.LIMITS.NAME_MAX}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Alex Morgan"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  className={`w-full px-4 py-3.5 rounded-xl border text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82] ${
                    errors.name ? "border-red-400" : "border-[#CBDDEB]"
                  }`}
                />
                {errors.name && (
                  <p id="error-name" className="text-[13px] text-red-600 mt-1.5 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Work Email Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2"
                >
                  Work email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={CONFIG.LIMITS.EMAIL_MAX}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  className={`w-full px-4 py-3.5 rounded-xl border text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82] ${
                    errors.email ? "border-red-400" : "border-[#CBDDEB]"
                  }`}
                />
                {errors.email && (
                  <p id="error-email" className="text-[13px] text-red-600 mt-1.5 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="contact-company"
                    className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728]"
                  >
                    Company or practice
                  </label>
                  <span className="text-[13px] text-[#52667A]">Optional</span>
                </div>
                <input
                  id="contact-company"
                  type="text"
                  maxLength={CONFIG.LIMITS.COMPANY_MAX}
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: undefined });
                  }}
                  placeholder="e.g. Apex Civil Partners"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#CBDDEB] text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82]"
                />
              </div>

              {/* Process Description (Required) */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <label
                    htmlFor="contact-process"
                    className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728]"
                  >
                    What process would you like to improve? <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[13px] text-[#52667A]">
                    Tap a sector to start:
                  </span>
                </div>

                {/* Quick Sector Chips */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Offices & Operations (admin, finance, CRM)",
                    "Engineering & Infrastructure (BOQ, drawings, field)",
                    "Education (schools, admissions, timetables)",
                    "Healthcare & Clinics (reception, appointments)",
                    "Logistics (inventory, dispatch, order flow)",
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          processDescription: prev.processDescription
                            ? `${prev.processDescription} • ${chip}`
                            : `We need to improve our workflows in ${chip}: `,
                        }));
                      }}
                      className="text-[13px] px-3.5 py-1.5 bg-[#EAF2F8] hover:bg-[#DCE9F5] text-[#0B1728] font-medium rounded-full border border-[#CBDDEB] transition-colors cursor-pointer"
                    >
                      + {chip.split(" (")[0]}
                    </button>
                  ))}
                </div>

                <textarea
                  id="contact-process"
                  required
                  rows={4}
                  maxLength={CONFIG.LIMITS.PROCESS_MAX}
                  value={formData.processDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, processDescription: e.target.value });
                    if (errors.processDescription) setErrors({ ...errors, processDescription: undefined });
                  }}
                  placeholder="Tell us what takes up unnecessary time—e.g. re-typing contractor drawing specs, coordinating job dispatch across emails, or compiling weekly client reports..."
                  aria-invalid={Boolean(errors.processDescription)}
                  aria-describedby={errors.processDescription ? "error-process" : undefined}
                  className={`w-full px-4 py-3.5 rounded-xl border text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#617594]/30 focus:border-[#617594] font-normal ${
                    errors.processDescription ? "border-red-400" : "border-[#CBDDEB]"
                  }`}
                />
                <div className="flex items-center justify-between text-[13px] text-[#52667A] mt-1.5">
                  {errors.processDescription ? (
                    <p id="error-process" className="text-red-600 font-medium">
                      {errors.processDescription}
                    </p>
                  ) : (
                    <span>Minimum 10 characters</span>
                  )}
                  <span>{formData.processDescription.length} / {CONFIG.LIMITS.PROCESS_MAX}</span>
                </div>
              </div>

              {/* Separate Unchecked Future Marketing Consent */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.marketingConsent}
                    onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-[#CBDDEB] text-[#617594] focus:ring-[#617594]"
                  />
                  <span className="text-[14px] text-[#52667A] leading-snug font-normal">
                    Optional: Keep me informed of future case studies and engineering notes on operational systems.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#617594] hover:bg-[#50637F] disabled:bg-[#52667A] text-white text-[15px] sm:text-[16px] font-bold px-9 py-4 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)]"
                >
                  {isPending ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-white" />
                      <span>Transmitting review request...</span>
                    </>
                  ) : (
                    <span>Request a workflow review</span>
                  )}
                </button>
              </div>

              {/* Privacy Disclosure Notice with direct view link */}
              <div className="pt-4 border-t border-[#CBDDEB] text-[13px] text-[#52667A] flex items-center justify-between">
                <span>
                  We treat your details respectfully. Review our{" "}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[#617594] font-bold underline hover:text-[#50637F] focus:outline-none cursor-pointer"
                  >
                    Privacy Notice
                  </button>.
                </span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
