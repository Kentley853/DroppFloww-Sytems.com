import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Calendar as CalendarIcon,
  CalendarX,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Mail,
  RefreshCw,
  ExternalLink,
  Download,
  Check,
  Globe,
  Send,
  User,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CONFIG } from "../config";
import { useLanguage } from "../i18n/LanguageContext";
import { getBookCallTranslations } from "../data/bookCallTranslations";

interface BookCallSectionProps {
  id?: string;
}

interface BaseTimeSlot {
  id: string;
  hourWIB: number;
  minuteWIB: number;
}

const BASE_SLOTS_JAKARTA: BaseTimeSlot[] = [
  { id: "slot-0900", hourWIB: 9, minuteWIB: 0 },
  { id: "slot-1030", hourWIB: 10, minuteWIB: 30 },
  { id: "slot-1300", hourWIB: 13, minuteWIB: 0 },
  { id: "slot-1430", hourWIB: 14, minuteWIB: 30 },
  { id: "slot-1600", hourWIB: 16, minuteWIB: 0 },
  { id: "slot-1730", hourWIB: 17, minuteWIB: 30 },
  { id: "slot-1930", hourWIB: 19, minuteWIB: 30 },
];

const COMMON_TIMEZONES = [
  { id: "Asia/Jakarta", label: "Jakarta (WIB, UTC+7)", city: "Jakarta" },
  { id: "Asia/Singapore", label: "Singapore / Kuala Lumpur (SGT, UTC+8)", city: "Singapore" },
  { id: "Asia/Hong_Kong", label: "Hong Kong (HKT, UTC+8)", city: "Hong Kong" },
  { id: "Asia/Tokyo", label: "Tokyo (JST, UTC+9)", city: "Tokyo" },
  { id: "Australia/Sydney", label: "Sydney (AEST, UTC+10)", city: "Sydney" },
  { id: "Asia/Dubai", label: "Dubai (GST, UTC+4)", city: "Dubai" },
  { id: "Europe/London", label: "London (GMT / BST, UTC+1)", city: "London" },
  { id: "Europe/Paris", label: "Paris / Berlin / Amsterdam (CET, UTC+2)", city: "Paris" },
  { id: "America/New_York", label: "New York / Eastern (EDT, UTC-4)", city: "New York" },
  { id: "America/Chicago", label: "Chicago / Central (CDT, UTC-5)", city: "Chicago" },
  { id: "America/Denver", label: "Denver / Mountain (MDT, UTC-6)", city: "Denver" },
  { id: "America/Los_Angeles", label: "Los Angeles / Pacific (PDT, UTC-7)", city: "Los Angeles" },
];

function getOrdinalSuffix(day: number, language: string): string {
  if (language === "id") return `Tgl ${day}`;
  if (language === "zh") return `${day}日`;
  if (language === "es") return `${day}º`;
  const j = day % 10;
  const k = day % 100;
  if (j === 1 && k !== 11) return `${day}st`;
  if (j === 2 && k !== 12) return `${day}nd`;
  if (j === 3 && k !== 13) return `${day}rd`;
  return `${day}th`;
}

export const BookCallSection: React.FC<BookCallSectionProps> = ({ id = "book-call" }) => {
  const { language } = useLanguage();
  const trans = useMemo(() => getBookCallTranslations(language), [language]);

  // Calendar month state
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(9); // October
  const [selectedDay, setSelectedDay] = useState<number>(2); // Default to Friday 2nd
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");

  // User timezone detection
  const [userTimezone, setUserTimezone] = useState<string>("Asia/Jakarta");
  const [detectedTzName, setDetectedTzName] = useState<string>("Local Time");

  useEffect(() => {
    try {
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (detected) {
        setUserTimezone(detected);
        setDetectedTzName(detected.replace(/_/g, " "));
      }
    } catch {
      setUserTimezone("Asia/Jakarta");
    }
  }, []);

  const [selectedSlotId, setSelectedSlotId] = useState<string>("slot-1030");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Google Meet");
  const [isFormHighlighted, setIsFormHighlighted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    topic: "",
    website: "", // honeypot anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    name: string;
    email: string;
    company?: string;
    phone?: string;
    date: string;
    timeSlot: string;
    userTimezone: string;
    platform: string;
    topic: string;
    googleCalendarUrl: string;
    whatsAppUrl: string;
    formattedEmailSubject: string;
    formattedEmailBody: string;
    mailtoBlastUrl: string;
  } | null>(null);

  const attendeeCardRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Calendar math for the current month view
  const { blankDays, daysArray } = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const count = new Date(currentYear, currentMonth + 1, 0).getDate();
    return {
      firstDayOfWeek: firstDay,
      daysInMonth: count,
      blankDays: Array.from({ length: firstDay }, (_, i) => i),
      daysArray: Array.from({ length: count }, (_, i) => i + 1),
    };
  }, [currentYear, currentMonth]);

  // Selected date info
  const selectedDateObj = useMemo(() => {
    return new Date(currentYear, currentMonth, selectedDay);
  }, [currentYear, currentMonth, selectedDay]);

  const selectedWeekdayShort = useMemo(() => {
    const dayIdx = selectedDateObj.getDay();
    return trans.weekdays[dayIdx] || "DAY";
  }, [selectedDateObj, trans.weekdays]);

  const selectedDateHeader = useMemo(() => {
    return `${selectedWeekdayShort} ${getOrdinalSuffix(selectedDay, language)}`;
  }, [selectedWeekdayShort, selectedDay, language]);

  // Booked dates
  const isSelectedDayBooked = useMemo(() => {
    const isSunday = selectedDateObj.getDay() === 0;
    const isOct1st2026 = currentYear === 2026 && currentMonth === 9 && selectedDay === 1;
    const isSpecialBooked = currentYear === 2026 && currentMonth === 9 && (selectedDay === 15 || selectedDay === 22);
    return isOct1st2026 || isSunday || isSpecialBooked;
  }, [selectedDateObj, currentYear, currentMonth, selectedDay]);

  // Full date formatted for calendar invitation
  const formattedFullDate = useMemo(() => {
    const locale = language === "id" ? "id-ID" : language === "zh" ? "zh-CN" : language === "es" ? "es-ES" : "en-US";
    return selectedDateObj.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [selectedDateObj, language]);

  // Dynamic Time Slots converted to the user's timezone!
  const computedSlots = useMemo(() => {
    return BASE_SLOTS_JAKARTA.map((slot) => {
      const utcDate = new Date(Date.UTC(
        currentYear,
        currentMonth,
        selectedDay,
        slot.hourWIB - 7,
        slot.minuteWIB
      ));

      let localFormatted = "";
      try {
        const formatter = new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : language === "es" ? "es-ES" : language === "id" ? "id-ID" : "en-US", {
          timeZone: userTimezone,
          hour: "numeric",
          minute: "2-digit",
          hour12: timeFormat === "12h",
        });
        localFormatted = formatter.format(utcDate);
      } catch {
        const pad = (n: number) => n.toString().padStart(2, "0");
        if (timeFormat === "24h") {
          localFormatted = `${pad(slot.hourWIB)}:${pad(slot.minuteWIB)}`;
        } else {
          const h12 = slot.hourWIB % 12 || 12;
          const ampm = slot.hourWIB >= 12 ? "PM" : "AM";
          localFormatted = `${pad(h12)}:${pad(slot.minuteWIB)} ${ampm}`;
        }
      }

      const pad = (n: number) => n.toString().padStart(2, "0");
      const jakartaLabel = `${pad(slot.hourWIB)}:${pad(slot.minuteWIB)}`;

      return {
        id: slot.id,
        localLabel: localFormatted,
        jakartaLabel,
      };
    });
  }, [currentYear, currentMonth, selectedDay, userTimezone, timeFormat, language]);

  const activeSlot = useMemo(() => {
    return computedSlots.find((s) => s.id === selectedSlotId) || computedSlots[1];
  }, [computedSlots, selectedSlotId]);

  const selectedTimeSlotLabel = useMemo(() => {
    if (!activeSlot) return "10:30 AM";
    return `${activeSlot.localLabel} (${userTimezone.split("/").pop()?.replace(/_/g, " ") || "Local"})`;
  }, [activeSlot, userTimezone]);

  // Smooth scroll towards attendee details form
  const scrollToAttendeeDetails = () => {
    if (attendeeCardRef.current) {
      attendeeCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsFormHighlighted(true);
      setTimeout(() => {
        setIsFormHighlighted(false);
        if (nameInputRef.current) {
          nameInputRef.current.focus({ preventScroll: true });
        }
      }, 700);
    }
  };

  const handleSelectSlot = (slotId: string) => {
    setSelectedSlotId(slotId);
    scrollToAttendeeDetails();
  };

  // Direct WhatsApp prefill
  const directWhatsAppPrefill = useMemo(() => {
    const text = encodeURIComponent(
      trans.whatsAppMessagePrefill(formattedFullDate, selectedTimeSlotLabel, formData.name)
    );
    return `https://wa.me/6285820467085?text=${text}`;
  }, [formattedFullDate, selectedTimeSlotLabel, formData.name, trans]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (isSelectedDayBooked) {
      newErrors.date = trans.dateErrorFull;
    }
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = trans.nameError;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = trans.emailError;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || undefined,
      phone: formData.phone.trim() || undefined,
      date: formattedFullDate,
      timeSlot: selectedTimeSlotLabel,
      userTimezone,
      platform: selectedPlatform,
      topic: formData.topic.trim() || "Operational Systems Live Walkthrough",
      website: formData.website,
      recipientEmail: CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com",
    };

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setConfirmedBooking({
          id: data.booking?.id || `DF-DEMO-${Date.now().toString(36).toUpperCase()}`,
          name: payload.name,
          email: payload.email,
          company: payload.company,
          phone: payload.phone,
          date: payload.date,
          timeSlot: payload.timeSlot,
          userTimezone,
          platform: payload.platform,
          topic: payload.topic,
          googleCalendarUrl: data.booking?.googleCalendarUrl || "",
          whatsAppUrl: data.booking?.whatsAppUrl || directWhatsAppPrefill,
          formattedEmailSubject: data.booking?.formattedEmailSubject || `[NEW DEMO] ${payload.name} — ${payload.date}`,
          formattedEmailBody: data.booking?.formattedEmailBody || "",
          mailtoBlastUrl: data.booking?.mailtoBlastUrl || `mailto:wongkentley@gmail.com?subject=${encodeURIComponent(`[NEW DEMO] ${payload.name} — ${payload.date}`)}`,
        });
      } else {
        throw new Error(data.message || "Failed to schedule");
      }
    } catch {
      // Robust client fallback with full email dossier
      const subject = `[NEW DEMO SCHEDULED] ${payload.name} — ${payload.date} @ ${payload.timeSlot}`;
      const dossier = [
        `======================================================================`,
        `DROPPFLOWW SYSTEMS — NEW CLIENT DEMO REQUEST`,
        `======================================================================`,
        `Host / Organizer: Kentley (Founder & CEO) <wongkentley@gmail.com>`,
        `Ref ID:           DF-DEMO-${Date.now().toString(36).toUpperCase()}`,
        ``,
        `ATTENDEE DETAILS:`,
        `Name:             ${payload.name}`,
        `Work Email:       ${payload.email}`,
        `Company:          ${payload.company || "Not specified"}`,
        `Phone / WhatsApp: ${payload.phone || "Not specified"}`,
        ``,
        `SCHEDULE:`,
        `Date:             ${payload.date}`,
        `Time Slot:        ${payload.timeSlot}`,
        `Client Timezone:  ${userTimezone}`,
        `Host Timezone:    Jakarta (WIB / UTC+7)`,
        `Platform:         ${payload.platform}`,
        ``,
        `TOPIC / WORKFLOW:`,
        `${payload.topic}`,
        `======================================================================`,
      ].join("\n");

      const mailtoBlastUrl = `mailto:wongkentley@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(dossier)}`;
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Droppfloww Demo — ${payload.name} & Kentley`)}&details=${encodeURIComponent(`Live demo with Founder/CEO Kentley (wongkentley@gmail.com | +62 858-2046-7085).\nTopic: ${payload.topic}`)}&add=wongkentley@gmail.com&add=${encodeURIComponent(payload.email)}`;

      setConfirmedBooking({
        id: `DF-DEMO-${Date.now().toString(36).toUpperCase()}`,
        name: payload.name,
        email: payload.email,
        company: payload.company,
        phone: payload.phone,
        date: payload.date,
        timeSlot: payload.timeSlot,
        userTimezone,
        platform: payload.platform,
        topic: payload.topic,
        googleCalendarUrl: gcalUrl,
        whatsAppUrl: directWhatsAppPrefill,
        formattedEmailSubject: subject,
        formattedEmailBody: dossier,
        mailtoBlastUrl,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadIcsFile = () => {
    if (!confirmedBooking) return;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Droppfloww Systems//Demo Scheduler//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:REQUEST",
      "BEGIN:VEVENT",
      `SUMMARY:Droppfloww Systems Live Demo — ${confirmedBooking.name} & Kentley`,
      `DESCRIPTION:Operational discovery and live demo with Founder/CEO Kentley.\\nEmail: wongkentley@gmail.com\\nWhatsApp: +62 85820467085\\nTopic: ${confirmedBooking.topic}\\nTimezone: ${confirmedBooking.userTimezone}`,
      `ORGANIZER;CN=Kentley (Droppfloww Systems):mailto:wongkentley@gmail.com`,
      `ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${confirmedBooking.name}:mailto:${confirmedBooking.email}`,
      `STATUS:CONFIRMED`,
      `UID:${confirmedBooking.id}@droppflowwsystems.com`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `droppfloww-demo-${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id={id}
      className="py-28 md:py-36 border-b border-[#D7E3EE] bg-[#F4F8FB] scroll-mt-12"
      aria-labelledby="schedule-demo-heading"
    >
      <div id="schedule-demo" className="scroll-mt-16" aria-hidden="true" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mb-14"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
              <span>{trans.badge}</span>
            </span>
          </div>
          <h2
            id="schedule-demo-heading"
            className="text-[44px] sm:text-[58px] lg:text-[72px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.02] mb-6"
          >
            {trans.title}
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#1E2E42] font-normal">
            {trans.desc}
          </p>
        </motion.div>

        {/* Founder Direct Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 p-8 rounded-3xl bg-white border border-[#CBDDEB] shadow-[0_4px_24px_rgba(11,23,40,0.04)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#617594] text-white border border-[#617594] flex items-center justify-center font-bold text-[22px] shrink-0 shadow-sm">
              KW
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[22px] font-bold text-[#0B1728]">
                  {CONFIG.FOUNDER_NAME || "Kentley"}
                </span>
                <span className="text-[14px] font-bold text-[#617594]">
                  {trans.founderRole}
                </span>
              </div>
              <div className="flex items-center gap-5 text-[15px] text-[#475A70] font-medium mt-2 flex-wrap">
                <a
                  href={`mailto:${CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}`}
                  className="inline-flex items-center gap-2 hover:text-[#617594] font-semibold transition-colors"
                >
                  <Mail className="w-4.5 h-4.5 text-[#617594]" />
                  <span>{CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}</span>
                </a>
                <span className="text-[#CBDDEB] hidden sm:inline">•</span>
                <a
                  href={CONFIG.WHATSAPP_URL || "https://wa.me/6285820467085"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0B1728] font-bold hover:text-[#617594] transition-colors"
                >
                  <Phone className="w-4.5 h-4.5 text-[#617594]" />
                  <span>WhatsApp: {CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CONFIG.WHATSAPP_URL || "https://wa.me/6285820467085"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#E7EDF5] text-[#617594] text-[15px] font-bold px-7 py-3.5 rounded-full border border-[#617594] transition-colors shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-4.5 h-4.5 text-[#617594]" />
              <span>{trans.directWhatsApp}</span>
            </a>
          </div>
        </motion.div>

        {/* Confirmation Screen */}
        <AnimatePresence mode="wait">
          {confirmedBooking ? (
            <motion.div
              key="confirmed-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#CBDDEB] shadow-xl"
            >
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-2xl bg-[#0B1728] text-[#8DB8E0] border border-[#1B2F4A] flex items-center justify-center mb-6 shadow-xs">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>

                <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4 leading-tight">
                  {trans.confirmedTitle}
                </h3>
                <p className="text-[17px] sm:text-[18px] text-[#475A70] leading-relaxed mb-8 font-normal">
                  {trans.confirmedSubtitle}
                </p>

                {/* Booking Summary Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFD] border border-[#CBDDEB] mb-8 space-y-4 text-[15px] sm:text-[16px]">
                  <div className="flex justify-between items-center py-2 border-b border-[#E0EAF2]">
                    <span className="text-[#52667A] font-medium">{trans.summaryDateTime}</span>
                    <span className="font-bold text-[#0B1728]">
                      {confirmedBooking.date} • {confirmedBooking.timeSlot}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E0EAF2]">
                    <span className="text-[#52667A] font-medium">{trans.summaryAttendee}</span>
                    <span className="font-bold text-[#0B1728]">
                      {confirmedBooking.name} ({confirmedBooking.email})
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E0EAF2]">
                    <span className="text-[#52667A] font-medium">{trans.summaryHost}</span>
                    <span className="font-bold text-[#0B1728]">
                      Kentley (Droppfloww Systems)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E0EAF2]">
                    <span className="text-[#52667A] font-medium">{trans.summaryEmail}</span>
                    <span className="text-[15px] text-[#0B1728] font-bold">
                      wongkentley@gmail.com
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E0EAF2]">
                    <span className="text-[#52667A] font-medium">{trans.summaryWhatsApp}</span>
                    <span className="text-[15px] text-[#0B1728] font-bold">
                      +62 858-2046-7085
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#52667A] font-medium">{trans.summaryRef}</span>
                    <span className="text-[14px] text-[#3B5B7D] font-mono">
                      {confirmedBooking.id}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={confirmedBooking.mailtoBlastUrl}
                    className="inline-flex items-center gap-2.5 bg-[#0B1728] hover:bg-[#14253D] text-white text-[15px] font-bold px-7 py-3.5 rounded-full transition-all shadow-sm border border-[#1B2F4A] cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#8DB8E0]" />
                    <span>{trans.btnEmailKentley}</span>
                  </a>

                  {confirmedBooking.googleCalendarUrl && (
                    <a
                      href={confirmedBooking.googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#EAF2F8] hover:bg-[#DCE9F5] text-[#0B1728] text-[15px] font-bold px-6 py-3.5 rounded-full border border-[#CBDDEB] transition-colors cursor-pointer"
                    >
                      <CalendarIcon className="w-4 h-4 text-[#3E5F82]" />
                      <span>{trans.btnGoogleCalendar}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}

                  <a
                    href={confirmedBooking.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#EAF2F8] hover:bg-[#DCE9F5] text-[#0B1728] text-[15px] font-bold px-6 py-3.5 rounded-full border border-[#CBDDEB] transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#3E5F82]" />
                    <span>{trans.btnWhatsAppKentley}</span>
                  </a>

                  <button
                    type="button"
                    onClick={downloadIcsFile}
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAFD] text-[#0B1728] text-[14px] font-bold px-5 py-3.5 rounded-full border border-[#CBDDEB] transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#3E5F82]" />
                    <span>{trans.btnDownloadIcs}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConfirmedBooking(null)}
                    className="inline-flex items-center gap-1.5 text-[14px] text-[#52667A] hover:text-[#0B1728] px-3 py-3 cursor-pointer transition-colors"
                  >
                    <span>{trans.btnScheduleAnother}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleBookingSubmit} noValidate>
              
              {/* CALENDAR WIDGET */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 rounded-3xl bg-white border border-[#CBDDEB] text-[#0B1728] shadow-[0_8px_30px_rgba(11,23,40,0.05)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Month Matrix */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-white">
                    {/* Month Bar */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-[24px] sm:text-[26px] font-bold text-[#0B1728] tracking-tight">
                          {trans.months[currentMonth]} {currentYear}
                        </h3>
                        <p className="text-[14px] text-[#52667A] mt-1 font-normal">
                          {trans.selectDateSub}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          aria-label="Previous month"
                          className="p-2.5 rounded-full border border-[#CBDDEB] hover:bg-[#F0F5FA] text-[#0B1728] transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#3E5F82]" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          aria-label="Next month"
                          className="p-2.5 rounded-full border border-[#CBDDEB] hover:bg-[#F0F5FA] text-[#0B1728] transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-5 h-5 text-[#3E5F82]" />
                        </button>
                      </div>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3">
                      {trans.weekdays.map((name) => (
                        <div
                          key={name}
                          className="text-center text-[12px] font-bold text-[#62768D] py-1.5 uppercase tracking-wider"
                        >
                          {name}
                        </div>
                      ))}
                    </div>

                    {/* Day Cells */}
                    <div className="grid grid-cols-7 gap-y-2 gap-x-1 sm:gap-x-2 text-center">
                      {blankDays.map((i) => (
                        <div key={`blank-${i}`} className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                      ))}

                      {daysArray.map((day) => {
                        const isSelected = selectedDay === day;
                        const dateObj = new Date(currentYear, currentMonth, day);
                        const isSunday = dateObj.getDay() === 0;
                        const isOct1st = currentYear === 2026 && currentMonth === 9 && day === 1;
                        const isBooked = isOct1st || isSunday;

                        return (
                          <motion.button
                            key={`day-${day}`}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedDay(day);
                              if (errors.date) setErrors({ ...errors, date: "" });
                            }}
                            className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto flex flex-col items-center justify-center text-[15px] transition-all relative rounded-xl cursor-pointer ${
                              isSelected
                                ? "bg-[#0B1728] text-white font-bold shadow-md border border-[#1B2F4A]"
                                : isBooked
                                ? "text-[#94A3B8] hover:bg-[#F8FAFD] font-normal"
                                : "text-[#0B1728] hover:bg-[#EAF2F8] hover:text-[#0B1728] font-semibold"
                            }`}
                          >
                            <span>{day}</span>
                            {isBooked && (
                              <span className={`w-1 h-1 rounded-full ${isSelected ? "bg-white" : "bg-[#94A3B8]"}`} />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Legend & Timezone indicator */}
                    <div className="mt-8 pt-5 border-t border-[#CBDDEB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[14px] text-[#52667A]">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#3E5F82]" />
                        <span>{trans.detectedTimezone}: <strong className="text-[#0B1728] font-semibold">{detectedTzName}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-[13px]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0B1728]"></span>
                          <span className="font-medium text-[#0B1728]">{trans.legendSelected}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D7E3EE]"></span>
                          <span>{trans.legendOpen}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]"></span>
                          <span>{trans.legendBooked}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Timezone Adaptive Slots & Status */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-[#CBDDEB] bg-[#F8FAFD] flex flex-col justify-between">
                    <div>
                      {/* Day Header + 12h / 24h Toggle */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div>
                          <span className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] tracking-tight block">
                            {selectedDateHeader}
                          </span>
                          <span className="text-[13px] text-[#52667A] font-normal">
                            {trans.durationNote}
                          </span>
                        </div>

                        {/* 12h / 24h Segmented Pill */}
                        <div className="inline-flex items-center bg-white border border-[#CBDDEB] rounded-full p-1 text-[13px] font-medium shadow-2xs">
                          <button
                            type="button"
                            onClick={() => setTimeFormat("12h")}
                            className={`px-3.5 py-1 rounded-full transition-colors cursor-pointer ${
                              timeFormat === "12h"
                                ? "bg-[#0B1728] text-white font-bold shadow-xs"
                                : "text-[#52667A] hover:text-[#0B1728]"
                            }`}
                          >
                            12h
                          </button>
                          <button
                            type="button"
                            onClick={() => setTimeFormat("24h")}
                            className={`px-3.5 py-1 rounded-full transition-colors cursor-pointer ${
                              timeFormat === "24h"
                                ? "bg-[#0B1728] text-white font-bold shadow-xs"
                                : "text-[#52667A] hover:text-[#0B1728]"
                            }`}
                          >
                            24h
                          </button>
                        </div>
                      </div>

                      {/* Timezone Switcher Dropdown */}
                      <div className="mb-6 p-4 rounded-2xl bg-white border border-[#CBDDEB] shadow-2xs">
                        <label htmlFor="tz-select" className="block text-[12px] font-bold text-[#3B5B7D] uppercase tracking-wider mb-1">
                          {trans.timezoneDropdownLabel}
                        </label>
                        <select
                          id="tz-select"
                          value={userTimezone}
                          onChange={(e) => setUserTimezone(e.target.value)}
                          className="w-full bg-transparent text-[15px] font-bold text-[#0B1728] focus:outline-none cursor-pointer"
                        >
                          {COMMON_TIMEZONES.map((tz) => (
                            <option key={tz.id} value={tz.id}>
                              {tz.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Slots Content Area */}
                      {isSelectedDayBooked ? (
                        <div className="mt-4">
                          <div className="border border-[#CBDDEB] bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center shadow-2xs">
                            <CalendarX className="w-8 h-8 text-[#52667A]" />
                            <span className="text-[18px] font-bold text-[#0B1728]">
                              {trans.allBookedTitle}
                            </span>
                            <p className="text-[14px] text-[#52667A] max-w-xs leading-relaxed font-normal">
                              {trans.allBookedDesc(selectedDateHeader)}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-[13px] text-[#52667A] font-semibold mb-3 flex items-center justify-between">
                            <span>{trans.availableTimes}</span>
                            <span className="text-[#3B5B7D] font-bold">{trans.selectSlotPrompt}</span>
                          </div>

                          <div className="grid grid-cols-1 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                            {computedSlots.map((slot) => {
                              const isChosen = selectedSlotId === slot.id;
                              return (
                                <motion.button
                                  key={slot.id}
                                  type="button"
                                  whileHover={{ x: 3 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => handleSelectSlot(slot.id)}
                                  className={`w-full py-3.5 px-5 rounded-xl border text-[15px] font-medium flex items-center justify-between transition-all cursor-pointer ${
                                    isChosen
                                      ? "bg-[#0B1728] text-white border-[#0B1728] font-bold shadow-xs"
                                      : "bg-white hover:bg-[#EAF2F8] text-[#0B1728] border-[#CBDDEB] hover:border-[#3E5F82]"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    <Clock className={`w-4 h-4 ${isChosen ? "text-[#8DB8E0]" : "text-[#3E5F82]"}`} />
                                    <span className="font-bold">{slot.localLabel}</span>
                                    <span className={`text-[13px] ${isChosen ? "text-slate-300" : "text-[#52667A]"}`}>
                                      ({slot.jakartaLabel} WIB)
                                    </span>
                                  </div>

                                  {isChosen ? (
                                    <span className="inline-flex items-center gap-1 text-[13px] bg-white/20 px-2.5 py-1 rounded-full font-semibold">
                                      <Check className="w-3.5 h-3.5" />
                                      <span>{trans.selectedBadge}</span>
                                    </span>
                                  ) : (
                                    <span className="text-[13px] text-[#3B5B7D] font-semibold">
                                      {trans.selectArrow}
                                    </span>
                                  )}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Guide inside Right Panel */}
                    <div className="mt-8 pt-4 border-t border-[#CBDDEB] flex items-center justify-between text-[14px]">
                      <span className="text-[#52667A]">{trans.selectedSlotLabel}</span>
                      <span className="font-bold text-[#0B1728]">
                        {isSelectedDayBooked ? trans.dateIsFull : `${selectedDateHeader} • ${activeSlot?.localLabel}`}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Error banner if attempting to book on full day */}
              {errors.date && (
                <div className="mb-6 p-4 rounded-[4px] bg-red-50 border border-red-200 text-red-700 text-[14px] font-medium flex items-center gap-2">
                  <span>{errors.date}</span>
                </div>
              )}

              {/* ATTENDEE DETAILS FORM */}
              <div
                id="attendee-details-card"
                ref={attendeeCardRef}
                className={`p-8 sm:p-12 lg:p-14 rounded-3xl border transition-all duration-500 ${
                  isFormHighlighted
                    ? "bg-white border-[#0B1728] ring-4 ring-[#0B1728]/10 shadow-xl"
                    : "bg-white border-[#CBDDEB] shadow-sm"
                }`}
              >
                <div className="max-w-3xl">
                  
                  {/* Selection Indicator Banner */}
                  <div className="mb-8 p-5 rounded-2xl bg-[#F8FAFD] border border-[#CBDDEB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3E5F82]" />
                      <span className="text-[15px] font-bold text-[#0B1728]">
                        {trans.selectedTimeBanner(
                          selectedDateHeader,
                          activeSlot?.localLabel || "10:30 AM",
                          userTimezone.split("/").pop()?.replace(/_/g, " ") || "Local"
                        )}
                      </span>
                    </div>
                    <a
                      href="#schedule-demo-heading"
                      className="text-[14px] font-bold text-[#3B5B7D] hover:text-[#0B1728] underline cursor-pointer"
                    >
                      {trans.changeDateTime}
                    </a>
                  </div>

                  <h3 className="text-[28px] sm:text-[36px] font-extrabold text-[#0B1728] mb-3 leading-snug tracking-tight">
                    {trans.formTitle}
                  </h3>
                  <p className="text-[16px] text-[#475A70] mb-8 leading-relaxed font-normal">
                    {trans.formSubtitle}
                  </p>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="space-y-6">
                    {/* Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="demo-name"
                          className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2"
                        >
                          {trans.fullNameLabel} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-5 h-5 text-[#62768D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="demo-name"
                            ref={nameInputRef}
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            placeholder={trans.fullNamePlaceholder}
                            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82] ${
                              errors.name ? "border-red-400" : "border-[#CBDDEB]"
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-[13px] text-red-600 mt-1.5 font-medium">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="demo-email"
                          className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2"
                        >
                          {trans.workEmailLabel} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-5 h-5 text-[#62768D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="demo-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            placeholder={trans.workEmailPlaceholder}
                            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82] ${
                              errors.email ? "border-red-400" : "border-[#CBDDEB]"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[13px] text-red-600 mt-1.5 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="demo-company"
                          className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2"
                        >
                          {trans.companyLabel}
                        </label>
                        <div className="relative">
                          <Building2 className="w-5 h-5 text-[#62768D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="demo-company"
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            placeholder={trans.companyPlaceholder}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#CBDDEB] text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="demo-phone"
                          className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2"
                        >
                          {trans.phoneLabel}
                        </label>
                        <div className="relative">
                          <Phone className="w-5 h-5 text-[#62768D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="demo-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder={trans.phonePlaceholder}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#CBDDEB] text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E5F82]/30 focus:border-[#3E5F82]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Platform Selector */}
                    <div>
                      <label className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728] mb-2.5">
                        {trans.platformLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {trans.platforms.map((p) => {
                          const isSelected = selectedPlatform === p.id;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => setSelectedPlatform(p.id)}
                              className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${
                                isSelected
                                  ? "border-[#617594] bg-[#E7EDF5] ring-2 ring-[#617594]"
                                  : "border-[#CBDDEB] bg-white hover:bg-[#F8FAFD]"
                              }`}
                            >
                              <div className={`text-[15px] font-bold ${isSelected ? "text-[#617594]" : "text-[#0B1728]"}`}>
                                {p.label}
                              </div>
                              <div className="text-[13px] text-[#52667A] mt-1 font-normal">
                                {p.note}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Demo Focus Description */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <label
                          htmlFor="demo-topic"
                          className="block text-[14px] sm:text-[15px] font-bold text-[#0B1728]"
                        >
                          {trans.focusQuestion}
                        </label>
                        <span className="text-[13px] text-[#52667A]">
                          {trans.focusSectorHint}
                        </span>
                      </div>

                      {/* Quick Sector Chips */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {trans.sectorChips.map((chip) => (
                          <button
                            key={chip.id}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                topic: prev.topic
                                  ? `${prev.topic} • ${chip.full}`
                                  : `${chip.full}`,
                              }));
                            }}
                            className="text-[13px] px-3.5 py-1.5 bg-[#EAF2F8] hover:bg-[#DCE9F5] text-[#0B1728] font-medium rounded-full border border-[#CBDDEB] transition-colors cursor-pointer"
                          >
                            + {chip.label}
                          </button>
                        ))}
                      </div>

                      <textarea
                        id="demo-topic"
                        rows={3}
                        value={formData.topic}
                        onChange={(e) =>
                          setFormData({ ...formData, topic: e.target.value })
                        }
                        placeholder={trans.topicPlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#CBDDEB] text-[15px] sm:text-[16px] bg-[#F8FAFD] text-[#0B1728] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#617594]/30 focus:border-[#617594] resize-y font-normal"
                      />
                    </div>

                    {/* Dispatch Notice & Primary CTA */}
                    <div className="pt-6 border-t border-[#CBDDEB]">
                      <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#CBDDEB] mb-6 text-[14px] text-[#52667A] leading-relaxed font-normal">
                        {trans.dispatchNotice}
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <motion.button
                          id="submit-demo-button"
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          disabled={isSubmitting || isSelectedDayBooked}
                          className="inline-flex items-center justify-center gap-2.5 bg-[#617594] hover:bg-[#50637F] text-white text-[15px] sm:text-[16px] font-bold px-9 py-4 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <RefreshCw className="w-5 h-5 animate-spin text-white" />
                              <span>{trans.submittingButton}</span>
                            </>
                          ) : (
                            <>
                              <span>{trans.submitButton}</span>
                              <ArrowRight className="w-5 h-5 text-white" />
                            </>
                          )}
                        </motion.button>

                        <a
                          href={directWhatsAppPrefill}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 text-[15px] font-bold text-[#617594] hover:text-[#50637F] px-5 py-4 cursor-pointer transition-colors"
                        >
                          <MessageSquare className="w-4 h-4 text-[#617594]" />
                          <span>{trans.coordinateWhatsApp}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
