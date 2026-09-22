import React, { useState, useRef } from "react";
import { ExampleSystemTab, BOQItem } from "../types";
import { ENGINEERING_FIXTURES, CRM_ENQUIRY_FIXTURE, CRM_TIMELINE, SERVICE_JOB_FIXTURES } from "../data/examples";
import { analytics } from "../config";
import {
  FileSpreadsheet,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Building,
  UserCheck
} from "lucide-react";

export const ExampleSystems: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExampleSystemTab>("engineering");
  const tabListRef = useRef<HTMLDivElement>(null);

  // Engineering interactive sequence state: 0: Upload, 1: Review, 2: Estimate, 3: Approved
  const [engStep, setEngStep] = useState<number>(1);
  const [boqItems, setBoqItems] = useState<BOQItem[]>(ENGINEERING_FIXTURES.boqItems);

  // Office interactive state
  const [crmStep, setCrmStep] = useState<number>(2);

  // Service business interactive state
  const [selectedJob, setSelectedJob] = useState<string>("JOB-401");

  const handleKeyDown = (e: React.KeyboardEvent, currentTab: ExampleSystemTab) => {
    const tabs: ExampleSystemTab[] = ["engineering", "office", "service"];
    const currentIndex = tabs.indexOf(currentTab);
    let nextIndex = currentIndex;

    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[nextIndex];
    setActiveTab(nextTab);
    analytics.trackCtaClick(`tab_${nextTab}`);
    const nextBtn = document.getElementById(`tab-${nextTab}`);
    nextBtn?.focus();
  };

  const toggleBoqReview = (id: string) => {
    setBoqItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus = item.reviewStatus === "Verified" ? "Needs Review" : "Verified";
          return { ...item, reviewStatus: nextStatus };
        }
        return item;
      })
    );
  };

  return (
    <section
      id="examples"
      className="py-16 md:py-24 border-b border-[#D8E0EA] bg-[#FAFBFD]"
      aria-labelledby="examples-heading"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="max-w-[760px] mb-12">
          <div className="text-[12px] font-semibold uppercase tracking-wider text-[#617594] mb-3">
            Example systems
          </div>
          <h2
            id="examples-heading"
            className="text-[34px] sm:text-[46px] font-bold text-[#172334] tracking-[-0.025em] leading-[1.12] mb-4"
          >
            Make it concrete.
          </h2>
          <p className="text-[18px] sm:text-[20px] leading-[1.6] text-[#566274]">
            A few ways this could work inside a business.
          </p>
        </div>

        {/* Accessible Tab List */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Example workflow domain demonstrations"
          className="flex flex-wrap items-center gap-2 p-1.5 bg-[#E7EDF5]/70 rounded-[8px] border border-[#D8E0EA] max-w-fit mb-8"
        >
          <button
            id="tab-engineering"
            type="button"
            role="tab"
            aria-selected={activeTab === "engineering"}
            aria-controls="panel-engineering"
            tabIndex={activeTab === "engineering" ? 0 : -1}
            onClick={() => {
              setActiveTab("engineering");
              analytics.trackCtaClick("tab_engineering");
            }}
            onKeyDown={(e) => handleKeyDown(e, "engineering")}
            className={`px-4 py-2 text-[14px] sm:text-[15px] font-medium rounded-[6px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] ${
              activeTab === "engineering"
                ? "bg-white text-[#172334] font-semibold shadow-xs"
                : "text-[#566274] hover:text-[#172334]"
            }`}
          >
            Engineering workflow
          </button>

          <button
            id="tab-office"
            type="button"
            role="tab"
            aria-selected={activeTab === "office"}
            aria-controls="panel-office"
            tabIndex={activeTab === "office" ? 0 : -1}
            onClick={() => {
              setActiveTab("office");
              analytics.trackCtaClick("tab_office");
            }}
            onKeyDown={(e) => handleKeyDown(e, "office")}
            className={`px-4 py-2 text-[14px] sm:text-[15px] font-medium rounded-[6px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] ${
              activeTab === "office"
                ? "bg-white text-[#172334] font-semibold shadow-xs"
                : "text-[#566274] hover:text-[#172334]"
            }`}
          >
            Office & triage
          </button>

          <button
            id="tab-service"
            type="button"
            role="tab"
            aria-selected={activeTab === "service"}
            aria-controls="panel-service"
            tabIndex={activeTab === "service" ? 0 : -1}
            onClick={() => {
              setActiveTab("service");
              analytics.trackCtaClick("tab_service");
            }}
            onKeyDown={(e) => handleKeyDown(e, "service")}
            className={`px-4 py-2 text-[14px] sm:text-[15px] font-medium rounded-[6px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] ${
              activeTab === "service"
                ? "bg-white text-[#172334] font-semibold shadow-xs"
                : "text-[#566274] hover:text-[#172334]"
            }`}
          >
            Service business scheduling
          </button>
        </div>

        {/* Tab Panel 1: Engineering Tab */}
        {activeTab === "engineering" && (
          <div
            id="panel-engineering"
            role="tabpanel"
            aria-labelledby="tab-engineering"
            className="bg-white rounded-[10px] border border-[#D8E0EA] p-6 lg:p-8 shadow-xs"
          >
            {/* Context & Approved Copy */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#D8E0EA] mb-6">
              <div className="max-w-[760px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#617594] bg-[#E7EDF5] px-2 py-0.5 rounded-[4px]">
                    Illustrative workflow
                  </span>
                  <span className="text-[12px] text-[#566274] font-medium">
                    Demo only; no files are uploaded.
                  </span>
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#172334] tracking-tight mb-2">
                  From project documents to a reviewable estimate.
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#566274]">
                  Bring BOQ files, survey notes and drawings into one workflow. Prepare structured quantities and cost inputs, then keep the engineer's review and approval in place.
                </p>
              </div>

              {/* Stepper Control */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  id="eng-step-trigger"
                  type="button"
                  onClick={() => setEngStep((prev) => (prev + 1) % 4)}
                  className="inline-flex items-center gap-2 bg-[#FAFBFD] hover:bg-[#E7EDF5] text-[#172334] border border-[#D8E0EA] text-[13px] font-semibold px-3.5 py-2 rounded-[6px] transition-colors"
                >
                  <span>Next workflow step</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#617594]" />
                </button>
              </div>
            </div>

            {/* Sequence Indicator */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {[
                { idx: 0, label: "1. Upload documents" },
                { idx: 1, label: "2. Review extracted items" },
                { idx: 2, label: "3. Prepare estimate" },
                { idx: 3, label: "4. Approve & export" }
              ].map((st) => (
                <button
                  key={st.idx}
                  type="button"
                  onClick={() => setEngStep(st.idx)}
                  className={`p-2.5 text-left rounded-[6px] border text-[13px] font-medium transition-all ${
                    engStep === st.idx
                      ? "bg-[#202B3D] text-white border-[#202B3D]"
                      : engStep > st.idx
                      ? "bg-[#E7EDF5] text-[#202B3D] border-[#D8E0EA]"
                      : "bg-[#FAFBFD] text-[#566274] border-[#D8E0EA]"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Main Interactive Demo Layout: Documents List beside Extracted Table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Document Fixtures */}
              <div className="lg:col-span-4 bg-[#FAFBFD] p-4 rounded-[8px] border border-[#D8E0EA]">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D8E0EA]">
                  <span className="text-[12px] font-semibold text-[#172334] uppercase tracking-wider">
                    Source Documents (3)
                  </span>
                  <span className="text-[11px] text-[#566274]">Indexed</span>
                </div>
                <div className="space-y-2.5">
                  {ENGINEERING_FIXTURES.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-[6px] border border-[#D8E0EA] text-[13px]"
                    >
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-[#617594] shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="font-semibold text-[#172334] truncate" title={doc.name}>
                            {doc.name}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-[#566274] mt-0.5">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#D8E0EA] text-[12px] text-[#566274] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#617594]" />
                  <span>CAD layers verified; no structural logic inferred.</span>
                </div>
              </div>

              {/* Extracted BOQ Table */}
              <div className="lg:col-span-8 overflow-x-auto">
                <div className="border border-[#D8E0EA] rounded-[8px] overflow-hidden">
                  <table className="w-full text-left text-[13px]">
                    <thead className="bg-[#FAFBFD] border-b border-[#D8E0EA] text-[#566274] font-medium">
                      <tr>
                        <th className="py-2.5 px-3">Item description</th>
                        <th className="py-2.5 px-3">Source file</th>
                        <th className="py-2.5 px-3">Quantity</th>
                        <th className="py-2.5 px-3">Unit</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D8E0EA] bg-white">
                      {boqItems.map((item) => (
                        <tr key={item.id} className="hover:bg-[#FAFBFD]">
                          <td className="py-3 px-3 font-medium text-[#172334]">
                            {item.item}
                          </td>
                          <td className="py-3 px-3 text-[12px] text-[#566274]">
                            {item.sourceDoc}
                          </td>
                          <td className="py-3 px-3 font-mono font-semibold text-[#172334]">
                            {item.quantity}
                          </td>
                          <td className="py-3 px-3 text-[#566274]">
                            {item.unit}
                          </td>
                          <td className="py-3 px-3">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${
                                item.reviewStatus === "Verified"
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  : item.reviewStatus === "Needs Review"
                                  ? "bg-amber-50 text-amber-800 border border-amber-200"
                                  : "bg-[#E7EDF5] text-[#202B3D] border border-[#D8E0EA]"
                              }`}
                            >
                              {item.reviewStatus === "Verified" && <CheckCircle2 className="w-3 h-3" />}
                              {item.reviewStatus === "Needs Review" && <AlertCircle className="w-3 h-3" />}
                              {item.reviewStatus}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => toggleBoqReview(item.id)}
                              className="text-[12px] font-medium text-[#617594] hover:text-[#172334] underline focus:outline-none"
                            >
                              Toggle
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-[12px] text-[#566274] italic">
                  Note: Values shown are sample figures to illustrate quantity extraction and reviewer oversight.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Panel 2: Office Tab */}
        {activeTab === "office" && (
          <div
            id="panel-office"
            role="tabpanel"
            aria-labelledby="tab-office"
            className="bg-white rounded-[10px] border border-[#D8E0EA] p-6 lg:p-8 shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#D8E0EA] mb-6">
              <div className="max-w-[760px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#617594] bg-[#E7EDF5] px-2 py-0.5 rounded-[4px]">
                    Illustrative workflow
                  </span>
                  <span className="text-[12px] text-[#566274] font-medium">
                    Fictional company enquiry fixture.
                  </span>
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#172334] tracking-tight mb-2">
                  An enquiry that doesn't get lost between tools.
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#566274]">
                  Capture the request, update the customer record, assign the next action and keep reporting in sync.
                </p>
              </div>

              {/* Stepper Control */}
              <button
                type="button"
                onClick={() => setCrmStep((prev) => (prev + 1) % 4)}
                className="inline-flex items-center gap-2 bg-[#FAFBFD] hover:bg-[#E7EDF5] text-[#172334] border border-[#D8E0EA] text-[13px] font-semibold px-3.5 py-2 rounded-[6px] transition-colors self-start"
              >
                <span>Cycle triage status</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#617594]" />
              </button>
            </div>

            {/* Sequence Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {["Enquiry", "CRM", "Assigned task", "Review"].map((stepName, idx) => (
                <div
                  key={stepName}
                  className={`p-2.5 rounded-[6px] border text-[13px] font-medium ${
                    crmStep === idx
                      ? "bg-[#202B3D] text-white border-[#202B3D]"
                      : crmStep > idx
                      ? "bg-[#E7EDF5] text-[#202B3D] border-[#D8E0EA]"
                      : "bg-[#FAFBFD] text-[#566274] border-[#D8E0EA]"
                  }`}
                >
                  {idx + 1}. {stepName}
                </div>
              ))}
            </div>

            {/* Enquiry Card & History Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Enquiry Spec Card */}
              <div className="lg:col-span-5 bg-[#FAFBFD] p-5 rounded-[8px] border border-[#D8E0EA]">
                <div className="flex items-center justify-between pb-3 border-b border-[#D8E0EA] mb-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#617594]" />
                    <span className="font-bold text-[14px] text-[#172334]">
                      {CRM_ENQUIRY_FIXTURE.customer}
                    </span>
                  </div>
                  <span className="text-[12px] font-mono text-[#566274]">
                    {CRM_ENQUIRY_FIXTURE.id}
                  </span>
                </div>

                <div className="space-y-3 text-[13px]">
                  <div>
                    <span className="text-[#566274] block text-[11px] uppercase tracking-wider font-semibold">
                      Subject
                    </span>
                    <span className="text-[#172334] font-medium">
                      {CRM_ENQUIRY_FIXTURE.subject}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#566274] block text-[11px] uppercase tracking-wider font-semibold">
                      Assigned specialist
                    </span>
                    <span className="text-[#172334] font-medium flex items-center gap-1.5 mt-0.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#617594]" />
                      {CRM_ENQUIRY_FIXTURE.assignedTo}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#566274] block text-[11px] uppercase tracking-wider font-semibold">
                      System Notes
                    </span>
                    <p className="text-[#566274] bg-white p-2.5 rounded-[4px] border border-[#D8E0EA] mt-1 text-[12px] leading-relaxed">
                      {CRM_ENQUIRY_FIXTURE.notes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity History Timeline */}
              <div className="lg:col-span-7 bg-white p-5 rounded-[8px] border border-[#D8E0EA]">
                <div className="text-[13px] font-bold text-[#172334] uppercase tracking-wider mb-4 pb-2 border-b border-[#D8E0EA]">
                  Transparent Activity History
                </div>
                <div className="space-y-4">
                  {CRM_TIMELINE.map((evt, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[13px]">
                      <div className="mt-0.5">
                        {evt.status === "completed" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : evt.status === "active" ? (
                          <Clock className="w-4 h-4 text-[#617594] animate-pulse" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-[#D8E0EA]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between">
                          <span className="font-semibold text-[#172334]">{evt.title}</span>
                          <span className="text-[11px] font-mono text-[#566274]">{evt.time}</span>
                        </div>
                        <p className="text-[12px] text-[#566274] mt-0.5 leading-relaxed">
                          {evt.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab Panel 3: Service Business Tab */}
        {activeTab === "service" && (
          <div
            id="panel-service"
            role="tabpanel"
            aria-labelledby="tab-service"
            className="bg-white rounded-[10px] border border-[#D8E0EA] p-6 lg:p-8 shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#D8E0EA] mb-6">
              <div className="max-w-[760px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#617594] bg-[#E7EDF5] px-2 py-0.5 rounded-[4px]">
                    Illustrative workflow
                  </span>
                  <span className="text-[12px] text-[#566274] font-medium">
                    Illustrative scheduling fixture. No real booking made.
                  </span>
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#172334] tracking-tight mb-2">
                  Less back-and-forth around bookings.
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#566274]">
                  Connect incoming enquiries, scheduling and follow-ups so your team can focus on the conversation.
                </p>
              </div>
            </div>

            {/* Sequence Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {["Request", "Availability", "Team confirmation", "Follow-up"].map((step, idx) => (
                <div
                  key={step}
                  className="p-2.5 rounded-[6px] border border-[#D8E0EA] bg-[#FAFBFD] text-[13px] font-medium text-[#172334]"
                >
                  {idx + 1}. {step}
                </div>
              ))}
            </div>

            {/* Service Queue List */}
            <div className="space-y-3">
              {SERVICE_JOB_FIXTURES.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`p-4 rounded-[8px] border transition-all cursor-pointer ${
                    selectedJob === job.id
                      ? "bg-[#FAFBFD] border-[#617594] ring-1 ring-[#617594]/20"
                      : "bg-white border-[#D8E0EA] hover:border-[#617594]/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[11px] text-[#617594] font-semibold">
                          {job.id}
                        </span>
                        <span className="text-[14px] font-bold text-[#172334]">
                          {job.requestType}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#566274]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#617594]" />
                          {job.window}
                        </span>
                        <span>Zone: {job.serviceZone}</span>
                        <span>Specialist: {job.assignedSpecialist}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-[4px] bg-[#E7EDF5] text-[#202B3D] text-[12px] font-medium">
                        {job.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#D8E0EA] text-[12px] text-[#566274]">
              Connected system automatically dispatches calendar invitations, confirms technician van inventory, and logs client correspondence.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
