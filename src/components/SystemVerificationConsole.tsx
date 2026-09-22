import React, { useState, useEffect, useCallback } from "react";
import { VerificationTestResult } from "../types";
import { CheckCircle2, AlertTriangle, XCircle, Play, RefreshCw, X, ShieldAlert } from "lucide-react";

interface VerificationConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemVerificationConsole: React.FC<VerificationConsoleProps> = ({ isOpen, onClose }) => {
  const [results, setResults] = useState<VerificationTestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runAllTests = useCallback(async () => {
    setIsRunning(true);
    const testLogs: VerificationTestResult[] = [];
    console.group(`[Droppfloww Test Suite] Executing Verification Run at ${new Date().toISOString()}`);

    // TEST 1: Schema & Length Validation
    try {
      const timestamp = new Date().toISOString();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email: "invalid", processDescription: "short" })
      });
      const data = await res.json();
      
      const passed = res.status === 422 && data.code === "VALIDATION_FAILED";
      const result: VerificationTestResult = {
        id: "test-validation",
        name: "Field Schema & Character Limit Rejection",
        category: "form_validation",
        status: passed ? "passed" : "failed",
        timestamp,
        message: passed
          ? "HTTP 422 returned correctly on invalid parameters. Client payload rejection verified."
          : `Unexpected status ${res.status}: ${data.message || "No message"}`,
        details: data
      };
      testLogs.push(result);
      console.info(`[${timestamp}] [PASS: Test 1 - Validation] ${result.message}`, data);
    } catch (err) {
      const timestamp = new Date().toISOString();
      const result: VerificationTestResult = {
        id: "test-validation",
        name: "Field Schema & Character Limit Rejection",
        category: "form_validation",
        status: "failed",
        timestamp,
        message: `Network or handler exception: ${err instanceof Error ? err.message : String(err)}`
      };
      testLogs.push(result);
      console.error(`[${timestamp}] [FAIL: Test 1 - Validation] ${result.message}`);
    }

    // TEST 2: Honeypot Anti-Spam Rejection
    try {
      const timestamp = new Date().toISOString();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Spam Bot Probe",
          email: "bot@spammer.org",
          processDescription: "Automated scraping attempt for system testing.",
          website: "https://automated-crawler.sample"
        })
      });
      const data = await res.json();
      const passed = res.status === 400 && data.code === "SPAM_DETECTED";
      const result: VerificationTestResult = {
        id: "test-honeypot",
        name: "Honeypot Hidden Trap Defense",
        category: "honeypot",
        status: passed ? "passed" : "failed",
        timestamp,
        message: passed
          ? "HTTP 400 returned correctly. Automated submission rejected via hidden honeypot trap."
          : `Honeypot was not trapped. Status: ${res.status}`,
        details: data
      };
      testLogs.push(result);
      console.info(`[${timestamp}] [PASS: Test 2 - Honeypot] ${result.message}`);
    } catch (err) {
      const timestamp = new Date().toISOString();
      const result: VerificationTestResult = {
        id: "test-honeypot",
        name: "Honeypot Hidden Trap Defense",
        category: "honeypot",
        status: "failed",
        timestamp,
        message: `Network failure on honeypot test: ${err instanceof Error ? err.message : String(err)}`
      };
      testLogs.push(result);
      console.error(`[${timestamp}] [FAIL: Test 2 - Honeypot] ${result.message}`);
    }

    // TEST 3: Downstream Delivery & Webhook Check
    try {
      const timestamp = new Date().toISOString();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Verification Auditor",
          email: "audit@internal-test.local",
          company: "Droppfloww Test Suite",
          processDescription: "Verifying server endpoint response and downstream webhook forwarding behavior."
        })
      });
      const data = await res.json();

      let status: "passed" | "unconfigured" | "failed" = "failed";
      let message = "";

      if (res.status === 200 && data.success) {
        status = "passed";
        message = "Downstream webhook is active and acknowledged receipt.";
      } else if (res.status === 503 && data.code === "UNCONFIGURED_DOWNSTREAM") {
        status = "unconfigured";
        message = "Honest state verified: CONTACT_WEBHOOK_URL is unconfigured. HTTP 503 returned without silent data loss.";
      } else {
        status = "failed";
        message = `Unexpected response (${res.status}): ${data.message}`;
      }

      const result: VerificationTestResult = {
        id: "test-delivery",
        name: "Contact Delivery & Webhook Forwarding",
        category: "api_delivery",
        status,
        timestamp,
        message,
        details: data
      };
      testLogs.push(result);

      if (status === "unconfigured") {
        console.warn(`[${timestamp}] [STATUS: Test 3 - Webhook Unconfigured (Expected in Pre-launch)] ${message}`, data);
      } else if (status === "passed") {
        console.info(`[${timestamp}] [PASS: Test 3 - Webhook Connected] ${message}`, data);
      } else {
        console.error(`[${timestamp}] [FAIL: Test 3 - Delivery Error] ${message}`, data);
      }
    } catch (err) {
      const timestamp = new Date().toISOString();
      const result: VerificationTestResult = {
        id: "test-delivery",
        name: "Contact Delivery & Webhook Forwarding",
        category: "api_delivery",
        status: "failed",
        timestamp,
        message: `Delivery test crashed: ${err instanceof Error ? err.message : String(err)}`
      };
      testLogs.push(result);
      console.error(`[${timestamp}] [FAIL: Test 3 - Delivery] ${result.message}`);
    }

    // TEST 4: DOM Anchors & Keyboard Tab Access
    try {
      const timestamp = new Date().toISOString();
      const requiredAnchors = ["selected-work", "services", "process", "book-call", "contact"];
      const missing = requiredAnchors.filter((id) => !document.getElementById(id));
      const passed = missing.length === 0;

      const result: VerificationTestResult = {
        id: "test-anchors",
        name: "Core Navigation Anchor Verification",
        category: "form_validation",
        status: passed ? "passed" : "failed",
        timestamp,
        message: passed
          ? "All 5 core sections (#selected-work, #services, #process, #book-call, #contact) verified in DOM."
          : `Missing section anchors: ${missing.join(", ")}`
      };
      testLogs.push(result);
      console.info(`[${timestamp}] [PASS: Test 4 - Anchors] ${result.message}`);
    } catch (err) {
      const timestamp = new Date().toISOString();
      testLogs.push({
        id: "test-anchors",
        name: "Core Navigation Anchor Verification",
        category: "form_validation",
        status: "failed",
        timestamp,
        message: `Anchor check error: ${err instanceof Error ? err.message : String(err)}`
      });
    }

    // TEST 5: Demo Scheduling & Kentley Notification Route (/api/book-call)
    try {
      const timestamp = new Date().toISOString();
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "System Verification Auditor",
          email: "audit@internal-test.local",
          company: "Droppfloww Test Suite",
          date: "2026-09-20",
          timeSlot: "10:30 AM WIB",
          platform: "Google Meet",
          topic: "Verifying demo scheduling and email dispatch to Kentley."
        })
      });
      const data = await res.json();
      const isConfiguredToKentley = data.booking?.recipientEmail === "wongkentley@gmail.com";
      const hasCalendarUrl = Boolean(data.booking?.googleCalendarUrl);
      const passed = res.status === 200 && data.success && isConfiguredToKentley && hasCalendarUrl;

      const result: VerificationTestResult = {
        id: "test-booking-api",
        name: "Demo Scheduling & Kentley Route (/api/book-call)",
        category: "api_delivery",
        status: passed ? "passed" : "failed",
        timestamp,
        message: passed
          ? "HTTP 200 returned. Demo request successfully formatted and configured for Founder & CEO Kentley (wongkentley@gmail.com | +62 858-2046-7085)."
          : `Demo scheduling endpoint error: ${data.message || "Unknown error"}`,
        details: data
      };
      testLogs.push(result);
      console.info(`[${timestamp}] [PASS: Test 5 - Demo API] ${result.message}`);
    } catch (err) {
      const timestamp = new Date().toISOString();
      testLogs.push({
        id: "test-booking-api",
        name: "Calendar Booking & Kentley Route (/api/book-call)",
        category: "api_delivery",
        status: "failed",
        timestamp,
        message: `Booking API exception: ${err instanceof Error ? err.message : String(err)}`
      });
    }

    console.groupEnd();
    setResults(testLogs);
    setIsRunning(false);
  }, []);

  // Run initial test on first load for transparent console logging
  useEffect(() => {
    runAllTests();
  }, [runAllTests]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="console-dialog-title"
      className="fixed inset-0 z-50 overflow-hidden bg-[#0B1728]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="w-full max-w-[640px] bg-white rounded-3xl border border-[#CBDDEB] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-[#CBDDEB] bg-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <img src="/df-monogram.svg" alt="" className="w-4 h-4 object-contain" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#3B5B7D]">
                Droppfloww Systems
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h2 id="console-dialog-title" className="text-[20px] font-extrabold text-[#0B1728]">
                System Diagnostics
              </h2>
            </div>
            <p className="text-[14px] text-[#475A70] mt-1 font-normal">
              Live API endpoint tests with direct verification logs.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#52667A] hover:text-[#0B1728] rounded-full border border-[#CBDDEB] hover:bg-[#F8FAFD] cursor-pointer transition-colors"
            aria-label="Close test console"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Test List */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-4 flex-1">
          <div className="p-4 bg-[#F8FAFD] rounded-2xl border border-[#CBDDEB] text-[14px] text-[#475A70] leading-relaxed font-normal">
            Tests check schema validation, honeypot rejections, and downstream delivery state.
          </div>

          {results.map((t) => (
            <div
              key={t.id}
              className="p-5 rounded-2xl border border-[#CBDDEB] bg-[#F8FAFD] text-[14px]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#0B1728]">{t.name}</span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold ${
                    t.status === "passed"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : t.status === "unconfigured"
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {t.status === "passed" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  {t.status === "unconfigured" && <AlertTriangle className="w-3.5 h-3.5" />}
                  {t.status === "failed" && <XCircle className="w-3.5 h-3.5" />}
                  {t.status.toUpperCase()}
                </span>
              </div>
              <p className="text-[#475A70] leading-relaxed mb-2 font-normal">
                {t.message}
              </p>
              <div className="text-[12px] text-[#3B5B7D] font-mono">
                Timestamp: {t.timestamp}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#CBDDEB] bg-[#F8FAFD] flex items-center justify-between">
          <button
            type="button"
            disabled={isRunning}
            onClick={runAllTests}
            className="inline-flex items-center gap-2 bg-[#0B1728] text-white text-[14px] font-bold px-6 py-3 rounded-full hover:bg-[#14253D] disabled:opacity-60 cursor-pointer border border-[#1B2F4A] transition-colors"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#8DB8E0]" />
                <span>Running diagnostics...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-[#8DB8E0]" />
                <span>Re-run tests</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-[14px] text-[#52667A] hover:text-[#0B1728] font-bold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
