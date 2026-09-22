import React, { useState } from "react";
import { CheckCircle2, ArrowRight, RefreshCw, Check, Sparkles, Building, Database, Zap, FileSpreadsheet } from "lucide-react";

interface Transaction {
  id: string;
  sender: string;
  amount: number;
  date: string;
  status: "matched" | "pending";
  matchedTo?: string;
  source: string;
}

export const OperationsDemo: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "TRX-8901",
      sender: "Apex Retainer Corp",
      amount: 14500,
      date: "Today, 10:14 AM",
      status: "matched",
      matchedTo: "Monthly Advisory Retainer (#INV-2026-084)",
      source: "Chase Commercial Wire",
    },
    {
      id: "TRX-8902",
      sender: "Vance Global Partners",
      amount: 8750,
      date: "Today, 11:30 AM",
      status: "matched",
      matchedTo: "Tax Restructuring Phase 2 (#INV-2026-089)",
      source: "Fedwire Transfer",
    },
    {
      id: "TRX-8903",
      sender: "Meridian Holdings",
      amount: 19200,
      date: "Today, 1:45 PM",
      status: "pending",
      source: "Direct ACH Deposit",
    },
  ]);

  const [filterPeriod, setFilterPeriod] = useState<"week" | "month">("week");
  const [digestPublished, setDigestPublished] = useState<boolean>(false);
  const [digestPublishedTime, setDigestPublishedTime] = useState<string>("");

  const handleMatchPending = (id: string) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: "matched",
              matchedTo: "Enterprise M&A Scope (#INV-2026-092)",
            }
          : t
      )
    );
  };

  const handleSimulateNewWire = () => {
    const newId = `TRX-${Math.floor(9000 + Math.random() * 999)}`;
    const newTx: Transaction = {
      id: newId,
      sender: "Pacific Capital LLC",
      amount: 11400,
      date: "Just now",
      status: "matched",
      matchedTo: "Quarterly Retainer (#INV-2026-095)",
      source: "Automated Bank Feed",
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const handlePublishDigest = () => {
    setDigestPublished(true);
    const now = new Date();
    setDigestPublishedTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  const totalCollected = transactions.reduce((sum, t) => sum + (t.status === "matched" ? t.amount : 0), 0);
  const totalPending = transactions.reduce((sum, t) => sum + (t.status === "pending" ? t.amount : 0), 0);
  const reconciliationRate = ((totalCollected / (totalCollected + totalPending)) * 100).toFixed(1);

  return (
    <div className="bg-[#FAFBFD] rounded-2xl border border-[#D8E0EA] overflow-hidden">
      {/* Workspace Top Bar */}
      <div className="bg-[#111827] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-[15px]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-bold tracking-tight text-[16px]">Interactive Workspace: Financial Reconciliation & Cross-Tool Sync</span>
        </div>
        <div className="flex items-center gap-3 text-[14px] text-zinc-300">
          <span className="hidden sm:inline font-medium">Sync Bridge: QuickBooks & Bank Feed</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-700 font-mono text-[13px] font-semibold">
            ONLINE • LIVE RECONCILIATION
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-[#D8E0EA] shadow-2xs">
            <span className="text-[13px] font-bold text-[#374151] uppercase tracking-wider block mb-1.5">
              Reconciled Cash ({filterPeriod === "week" ? "This Week" : "This Month"})
            </span>
            <div className="text-[32px] sm:text-[36px] font-bold text-[#111827] tracking-tight">
              ${totalCollected.toLocaleString()}
            </div>
            <span className="text-[14px] text-emerald-700 font-bold mt-1.5 inline-block">
              {reconciliationRate}% Auto-Matched
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D8E0EA] shadow-2xs">
            <span className="text-[13px] font-bold text-[#374151] uppercase tracking-wider block mb-1.5">
              Cross-Tool Status
            </span>
            <div className="flex items-center gap-2.5 text-[17px] font-bold text-[#111827] mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>QuickBooks & CRM in Sync</span>
            </div>
            <span className="text-[14px] text-[#4B5563] font-medium mt-1.5 inline-block">
              Zero manual spreadsheet export needed
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D8E0EA] shadow-2xs">
            <span className="text-[13px] font-bold text-[#374151] uppercase tracking-wider block mb-1.5">
              Admin Hours Saved
            </span>
            <div className="text-[32px] sm:text-[36px] font-bold text-[#111827] tracking-tight">
              14.5 hrs / wk
            </div>
            <span className="text-[14px] text-[#4B5563] font-medium mt-1.5 inline-block">
              Per partner & administrative staff
            </span>
          </div>
        </div>

        {/* Live Incoming Feed Simulation */}
        <div className="bg-white rounded-2xl border border-[#D8E0EA] p-6 sm:p-7 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E7EDF5]">
            <div>
              <h4 className="font-bold text-[19px] text-[#111827]">
                Live Bank Feed & Inbound Wire Queue
              </h4>
              <p className="text-[15px] text-[#4B5563] mt-1 font-medium">
                Incoming bank transfers match open invoice receivables and update CRM records automatically.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSimulateNewWire}
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1F2937] text-white text-[14px] font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer self-start sm:self-auto shadow-xs"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Simulate Inbound Wire</span>
            </button>
          </div>

          {/* Transaction items */}
          <div className="space-y-3">
            {transactions.map((t) => (
              <div
                key={t.id}
                className="p-4 sm:p-5 rounded-xl border border-[#D8E0EA] bg-[#FAFBFD] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      t.status === "matched"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {t.status === "matched" ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-[#111827] text-[16px]">
                        {t.sender}
                      </span>
                      <span className="font-mono text-[13px] font-bold text-[#374151] bg-white px-2 py-0.5 rounded-md border border-[#D8E0EA]">
                        {t.id}
                      </span>
                    </div>
                    <div className="text-[14px] text-[#4B5563] mt-1 font-medium">
                      {t.status === "matched" ? (
                        <span className="text-emerald-800 font-semibold">
                          ✓ Auto-reconciled: {t.matchedTo}
                        </span>
                      ) : (
                        <span className="text-amber-800 font-semibold">
                          Awaiting match: Potential match found with open M&A invoice
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <div className="text-right">
                    <span className="block font-bold text-[18px] text-[#111827]">
                      +${t.amount.toLocaleString()}
                    </span>
                    <span className="text-[13px] text-[#4B5563] font-medium">{t.source}</span>
                  </div>

                  {t.status === "pending" && (
                    <button
                      type="button"
                      onClick={() => handleMatchPending(t.id)}
                      className="inline-flex items-center gap-2 bg-[#617594] hover:bg-[#50637F] text-white text-[14px] font-bold px-5 py-2.5 rounded-full transition-all duration-150 shadow-[0_3px_10px_rgba(97,117,148,0.25)] cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>One-Click Reconcile</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Friday Automated Executive Digest Generator */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D8E0EA] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <FileSpreadsheet className="w-5 h-5 text-[#617594]" />
              <h4 className="font-bold text-[18px] text-[#111827]">
                Automated Friday Executive Brief
              </h4>
            </div>
            <p className="text-[15px] text-[#4B5563] font-medium max-w-xl leading-relaxed">
              Every Friday at 5:00 PM, the system compiles collected billings, open retainers, and bank balances directly for the managing partners—without chasing anyone for reports.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <button
              type="button"
              onClick={handlePublishDigest}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-bold transition-all cursor-pointer ${
                digestPublished
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-[#617594] text-white hover:bg-[#50637F] shadow-[0_4px_14px_rgba(97,117,148,0.25)] hover:shadow-[0_6px_18px_rgba(97,117,148,0.35)]"
              }`}
            >
              {digestPublished ? (
                <>
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <span>Digest Dispatched to Partners</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Executive Digest</span>
                </>
              )}
            </button>

            {digestPublished && (
              <span className="text-[13px] text-emerald-800 font-bold">
                ✓ Sent to managing partners at {digestPublishedTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
