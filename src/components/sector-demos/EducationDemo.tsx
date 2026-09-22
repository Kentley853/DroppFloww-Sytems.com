import React, { useState } from "react";
import { GraduationCap, Calendar, CheckCircle2, AlertTriangle, Send, Check, Sparkles, BookOpen, Users } from "lucide-react";

interface ScheduleSlot {
  subject: string;
  teacher: string;
  time: string;
  room: string;
  hasConflict: boolean;
  conflictReason?: string;
  suggestedRoom?: string;
}

interface StudentFeeRow {
  id: string;
  name: string;
  grade: string;
  amount: number;
  status: "reconciled" | "installment" | "reminder_queued";
  paymentRef: string;
}

export const EducationDemo: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>("Year 11 AP Physics");
  const [selectedRoom, setSelectedRoom] = useState<string>("Science Lab 3");
  const [selectedSlot, setSelectedSlot] = useState<string>("Monday 09:00 - 10:30");
  const [conflictResolved, setConflictResolved] = useState<boolean>(false);

  const [broadcastSent, setBroadcastSent] = useState<boolean>(false);
  const [broadcastTime, setBroadcastTime] = useState<string>("");

  // Conflict logic: Science Lab 3 on Monday 09:00 has a conflict unless resolved
  const isConflict = !conflictResolved && selectedRoom === "Science Lab 3" && selectedSlot === "Monday 09:00 - 10:30";

  const [feeRows, setFeeRows] = useState<StudentFeeRow[]>([
    {
      id: "STU-1091",
      name: "Oliver Vance",
      grade: "Grade 11-A",
      amount: 4500,
      status: "reconciled",
      paymentRef: "Bank Feed #TX-7782 (Matched to Student ID)",
    },
    {
      id: "STU-1092",
      name: "Sophia Chen",
      grade: "Grade 10-B",
      amount: 4500,
      status: "reconciled",
      paymentRef: "Bank Feed #TX-7789 (Matched to Student ID)",
    },
    {
      id: "STU-1093",
      name: "Marcus Pratama",
      grade: "Grade 12-A",
      amount: 2250,
      status: "installment",
      paymentRef: "Installment 1 of 2 Verified ($2,250)",
    },
  ]);

  const handleAutoResolve = () => {
    setConflictResolved(true);
    setSelectedRoom("Science Lab 1");
  };

  const handleBroadcast = () => {
    setBroadcastSent(true);
    const now = new Date();
    setBroadcastTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <div className="bg-[#FAFBFD] rounded-2xl border border-[#D8E0EA] overflow-hidden">
      {/* Workspace Top Bar */}
      <div className="bg-[#111827] text-white px-5 sm:px-7 py-3.5 flex flex-wrap items-center justify-between gap-3 text-[14px]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-bold tracking-tight">Interactive Workspace: Timetable Optimization & Tuition Ledger</span>
        </div>
        <div className="flex items-center gap-3 text-[13px] text-zinc-300">
          <span className="hidden sm:inline">Academic Core: Cambridge Academy Network</span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-[12px]">
            SCHEDULE VERIFIER ONLINE
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Interactive Timetable Conflict Checker */}
        <div className="bg-white rounded-xl border border-[#D8E0EA] p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E7EDF5]">
            <div>
              <h4 className="font-bold text-[17px] text-[#111827]">
                Conflict-Free Timetable Verifier
              </h4>
              <p className="text-[13px] text-[#566274] mt-0.5">
                Automatically checks room allocations, laboratory capacities, and educator schedules across 1,200 students.
              </p>
            </div>
            <span className="text-[12px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-bold self-start sm:self-auto">
              Zero room clashes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            <div>
              <label className="block text-[12px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                Subject & Cohort
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
              >
                <option value="Year 11 AP Physics">Year 11 AP Physics (Dr. Henderson)</option>
                <option value="Year 10 Chemistry Lab">Year 10 Chemistry Lab (Prof. Miller)</option>
                <option value="Year 12 Pure Mathematics">Year 12 Pure Mathematics (Mr. Thorne)</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                Proposed Timetable Slot
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => {
                  setSelectedSlot(e.target.value);
                  setConflictResolved(false);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
              >
                <option value="Monday 09:00 - 10:30">Monday 09:00 - 10:30</option>
                <option value="Tuesday 11:00 - 12:30">Tuesday 11:00 - 12:30</option>
                <option value="Wednesday 14:00 - 15:30">Wednesday 14:00 - 15:30</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                Assigned Laboratory / Hall
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => {
                  setSelectedRoom(e.target.value);
                  setConflictResolved(false);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8E0EA] text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827] cursor-pointer"
              >
                <option value="Science Lab 3">Science Lab 3 (Capacity 28)</option>
                <option value="Science Lab 1">Science Lab 1 (Capacity 32)</option>
                <option value="Lecture Hall Alpha">Lecture Hall Alpha (Capacity 120)</option>
              </select>
            </div>
          </div>

          {/* Conflict Status Display */}
          <div
            className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isConflict
                ? "bg-red-50 border-red-200 text-red-950"
                : "bg-emerald-50 border-emerald-200 text-emerald-950"
            }`}
          >
            <div className="flex items-start gap-3">
              {isConflict ? (
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="font-bold text-[15px] block">
                  {isConflict
                    ? "TIMETABLE CONFLICT DETECTED"
                    : "VERIFIED: NO EDUCATOR OR ROOM CLASH"}
                </span>
                <p className="text-[13px] mt-0.5 opacity-90">
                  {isConflict
                    ? "Science Lab 3 is already reserved by Dr. Henderson for IB Biology during Monday 09:00 - 10:30. System recommends assigning Science Lab 1 (free & fully equipped)."
                    : `${selectedClass} allocated to ${selectedRoom} for ${selectedSlot}. Schedule verified against student master enrollment.`}
                </p>
              </div>
            </div>

            {isConflict && (
              <button
                type="button"
                onClick={handleAutoResolve}
                className="inline-flex items-center gap-1.5 bg-[#617594] hover:bg-[#50637F] text-white text-[13px] font-bold px-4.5 py-2.5 rounded-full transition-all duration-150 shadow-[0_2px_8px_rgba(97,117,148,0.25)] cursor-pointer shrink-0 self-start sm:self-auto"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Auto-Assign Science Lab 1</span>
              </button>
            )}
          </div>
        </div>

        {/* Tuition Ledger & Parent Broadcast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tuition Ledger */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-[#D8E0EA] shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7EDF5]">
              <div>
                <h4 className="font-bold text-[16px] text-[#111827]">
                  Tuition Ledger & Bank Feed Match
                </h4>
                <p className="text-[13px] text-[#566274]">
                  Institutional bank feeds auto-reconcile term tuition deposits.
                </p>
              </div>
              <span className="text-[12px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                100% Reconciled
              </span>
            </div>

            <div className="space-y-2.5">
              {feeRows.map((f) => (
                <div
                  key={f.id}
                  className="p-3.5 rounded-xl border border-[#D8E0EA] bg-[#FAFBFD] flex items-center justify-between text-[13px]"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#111827] text-[14px]">
                        {f.name}
                      </span>
                      <span className="text-[12px] text-[#617594]">({f.grade})</span>
                    </div>
                    <div className="text-[12px] text-emerald-800 font-medium mt-0.5">
                      ✓ {f.paymentRef}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#111827] font-mono">
                      ${f.amount.toLocaleString()}
                    </span>
                    <span className="block text-[11px] text-[#617594]">Term 2 Tuition</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent Announcement Broadcast */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-[#D8E0EA] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-[#617594]" />
                <h4 className="font-bold text-[16px] text-[#111827]">
                  Parent Broadcast Engine
                </h4>
              </div>
              <p className="text-[13px] text-[#566274] mb-4">
                Instant delivery of term schedules, exam alerts, and grade notices directly to verified guardians.
              </p>

              <div className="p-3.5 rounded-xl bg-[#FAFBFD] border border-[#D8E0EA] text-[13px] text-[#111827] mb-4">
                <span className="font-semibold block mb-1">Template:</span>
                "Term 2 Final Timetable has been released. No room overlaps. Please review your student's laboratory safety requirements in portal."
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleBroadcast}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                  broadcastSent
                    ? "bg-emerald-700 text-white"
                    : "bg-[#617594] text-white hover:bg-[#50637F] shadow-[0_4px_14px_rgba(97,117,148,0.25)]"
                }`}
              >
                {broadcastSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Broadcast Sent to 142 Parents</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Broadcast Timetable to Parents</span>
                  </>
                )}
              </button>

              {broadcastSent && (
                <span className="block text-center text-[12px] text-emerald-800 font-medium mt-2">
                  ✓ 142/142 delivered with read receipts enabled at {broadcastTime}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
