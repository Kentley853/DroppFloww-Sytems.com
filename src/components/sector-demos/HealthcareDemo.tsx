import React, { useState } from "react";
import { Stethoscope, Calendar, CheckCircle2, MessageCircle, Clock, Check, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

interface TreatmentRoom {
  id: string;
  name: string;
  doctor: string;
  specialty: string;
  status: "in-session" | "ready" | "sanitizing";
  currentPatient?: string;
}

interface PatientIntake {
  id: string;
  name: string;
  appointmentTime: string;
  procedure: string;
  intakeStatus: "completed" | "arrived" | "sent";
  insuranceVerified: boolean;
}

interface RecallPatient {
  id: string;
  name: string;
  lastVisit: string;
  dueFor: string;
  status: "queued" | "sent" | "booked";
  bookedTime?: string;
}

export const HealthcareDemo: React.FC = () => {
  const [rooms, setRooms] = useState<TreatmentRoom[]>([
    {
      id: "r1",
      name: "Operatory 1 (Orthodontics)",
      doctor: "Dr. Sarah Alatas",
      specialty: "Orthodontics",
      status: "in-session",
      currentPatient: "Claire W. (Aligner Milestone Check)",
    },
    {
      id: "r2",
      name: "Operatory 2 (General)",
      doctor: "Dr. Edwin Tan",
      specialty: "Restorative Dentistry",
      status: "ready",
    },
    {
      id: "r3",
      name: "Hygiene Suite 3",
      doctor: "Nurse Jessica H.",
      specialty: "Preventive Care",
      status: "sanitizing",
    },
  ]);

  const [patients, setPatients] = useState<PatientIntake[]>([
    {
      id: "p1",
      name: "Maya Kusuma",
      appointmentTime: "10:30 AM",
      procedure: "Root Canal Consultation",
      intakeStatus: "completed",
      insuranceVerified: true,
    },
    {
      id: "p2",
      name: "Reza Pratama",
      appointmentTime: "11:15 AM",
      procedure: "Routine 6-Mo Prophylaxis",
      intakeStatus: "arrived",
      insuranceVerified: true,
    },
    {
      id: "p3",
      name: "Nadia Santoso",
      appointmentTime: "11:45 AM",
      procedure: "Pediatric Dental Sealant",
      intakeStatus: "sent",
      insuranceVerified: false,
    },
  ]);

  const [recalls, setRecalls] = useState<RecallPatient[]>([
    {
      id: "rc1",
      name: "Budi Santoso",
      lastVisit: "6 months ago",
      dueFor: "Semi-Annual Periodontal Cleaning",
      status: "queued",
    },
    {
      id: "rc2",
      name: "Amina Yusuf",
      lastVisit: "6 months ago",
      dueFor: "Routine Preventative Examination",
      status: "queued",
    },
    {
      id: "rc3",
      name: "Jonathan Lee",
      lastVisit: "7 months ago",
      dueFor: "Follow-Up Bite Alignment Assessment",
      status: "queued",
    },
  ]);

  const [recallsTriggered, setRecallsTriggered] = useState<boolean>(false);

  const handleSanitize = (roomId: string) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === roomId ? { ...r, status: "ready" } : r))
    );
  };

  const handlePatientArrived = (patientId: string) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === patientId ? { ...p, intakeStatus: "arrived", insuranceVerified: true } : p
      )
    );
  };

  const handleTriggerRecalls = () => {
    setRecallsTriggered(true);
    // Mark as sent and simulate 1 instant booking
    setRecalls((prev) =>
      prev.map((rc, idx) =>
        idx === 0
          ? { ...rc, status: "booked", bookedTime: "Confirmed: Thu 10:00 AM" }
          : { ...rc, status: "sent" }
      )
    );
  };

  return (
    <div className="bg-[#FAFBFD] rounded-2xl border border-[#D8E0EA] overflow-hidden">
      {/* Workspace Top Bar */}
      <div className="bg-[#111827] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-[15px]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-bold tracking-tight text-[16px]">Interactive Workspace: Clinic Intake & Automated Care Recalls</span>
        </div>
        <div className="flex items-center gap-3 text-[14px] text-zinc-300">
          <span className="hidden sm:inline font-medium">Practice Core: Paperless Reception Hub</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-100 border border-zinc-700 font-mono text-[13px] font-semibold">
            ACTIVE CLINICAL SYNC
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Treatment Room Status Strip */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="font-bold text-[18px] text-[#111827]">
              Live Operatory & Practitioner Status
            </h4>
            <span className="text-[14px] font-semibold text-[#4B5563]">
              Synchronized with Doctor Calendars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white p-5 rounded-2xl border border-[#D8E0EA] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-[16px] text-[#111827]">
                      {room.name}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold ${
                        room.status === "in-session"
                          ? "bg-blue-50 text-blue-800 border border-blue-200"
                          : room.status === "ready"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {room.status === "in-session" && "IN SESSION"}
                      {room.status === "ready" && "READY"}
                      {room.status === "sanitizing" && "SANITIZING"}
                    </span>
                  </div>
                  <div className="text-[15px] text-[#111827] font-bold">
                    {room.doctor}
                  </div>
                  <div className="text-[14px] text-[#4B5563] font-medium mt-0.5">
                    {room.currentPatient || "No active patient in chair"}
                  </div>
                </div>

                {room.status === "sanitizing" && (
                  <button
                    type="button"
                    onClick={() => handleSanitize(room.id)}
                    className="mt-4 w-full py-2.5 px-3 bg-[#617594] hover:bg-[#50637F] text-white text-[13px] font-bold rounded-xl transition-all duration-150 shadow-[0_2px_8px_rgba(97,117,148,0.25)] cursor-pointer"
                  >
                    Complete Sanitation Protocol
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Digital Patient Intake Queue (No Paper Clipboards) */}
        <div className="bg-white rounded-2xl border border-[#D8E0EA] p-6 sm:p-7 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E7EDF5]">
            <div>
              <h4 className="font-bold text-[19px] text-[#111827]">
                Today's Digital Intake Queue
              </h4>
              <p className="text-[15px] text-[#4B5563] mt-1 font-medium">
                Patients submit medical history, allergy alerts, and insurance prior to stepping into the reception area.
              </p>
            </div>
            <span className="text-[13px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-full font-bold self-start sm:self-auto">
              12 min saved per patient
            </span>
          </div>

          <div className="space-y-3">
            {patients.map((p) => (
              <div
                key={p.id}
                className="p-4 sm:p-5 rounded-xl border border-[#D8E0EA] bg-[#FAFBFD] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] shrink-0 ${
                      p.intakeStatus === "arrived"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-[#111827] text-[16px]">
                        {p.name}
                      </span>
                      <span className="text-[14px] text-[#4B5563] font-semibold">
                        ({p.appointmentTime})
                      </span>
                    </div>
                    <div className="text-[14px] text-[#4B5563] mt-0.5 font-medium">
                      {p.procedure} •{" "}
                      {p.insuranceVerified ? (
                        <span className="text-emerald-700 font-bold">
                          Insurance Verified
                        </span>
                      ) : (
                        <span className="text-amber-700 font-bold">
                          Self-Pay / Form Pending
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {p.intakeStatus === "sent" ? (
                    <button
                      type="button"
                      onClick={() => handlePatientArrived(p.id)}
                      className="inline-flex items-center gap-2 bg-[#617594] hover:bg-[#50637F] text-white text-[13px] sm:text-[14px] font-bold px-4.5 py-2 rounded-full transition-all shadow-[0_2px_8px_rgba(97,117,148,0.25)] cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Simulate Patient Arrival</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-white border border-emerald-200 px-3.5 py-1.5 rounded-full text-[13px] font-bold">
                      <Check className="w-4 h-4" />
                      <span>{p.intakeStatus === "arrived" ? "Checked In & Chart Ready" : "Form Pre-Filled"}</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automated Preventive Care Recall Engine */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#D8E0EA] flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MessageCircle className="w-5 h-5 text-[#617594]" />
              <h4 className="font-bold text-[17px] text-[#111827]">
                Automated 6-Month Preventive Recall Engine
              </h4>
            </div>
            <p className="text-[14px] text-[#4B5563] font-medium max-w-xl leading-relaxed">
              Patients due for routine cleanings receive automated WhatsApp reminders with 1-tap booking, cutting clinic empty-chair no-shows by 68%.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-[#4B5563]">
              {recalls.map((rc) => (
                <span
                  key={rc.id}
                  className={`px-2.5 py-1 rounded-full border ${
                    rc.status === "booked"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-bold"
                      : "bg-[#FAFBFD] border-[#D8E0EA] text-[#4B5563] font-medium"
                  }`}
                >
                  {rc.name}: {rc.bookedTime || rc.status.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <button
              type="button"
              onClick={handleTriggerRecalls}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-bold transition-all cursor-pointer ${
                recallsTriggered
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-[#617594] text-white hover:bg-[#50637F] shadow-[0_4px_14px_rgba(97,117,148,0.25)] hover:shadow-[0_6px_18px_rgba(97,117,148,0.35)]"
              }`}
            >
              {recallsTriggered ? (
                <>
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <span>3 Recalls Dispatched (1 Booked)</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4.5 h-4 text-amber-300" />
                  <span>Dispatch Overdue Recalls Batch</span>
                </>
              )}
            </button>

            {recallsTriggered && (
              <span className="text-[13px] text-emerald-800 font-bold">
                ✓ WhatsApp recall batch delivered with 0 clinic staff labor
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
