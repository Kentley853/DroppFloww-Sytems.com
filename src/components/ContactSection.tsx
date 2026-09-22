import React, { useState, useMemo } from "react";
import { CONFIG, analytics } from "../config";
import { ContactFormData, ContactFormErrors, ContactApiResponse } from "../types";
import { CheckCircle2, AlertCircle, Calendar, ArrowRight, RefreshCw } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  const { language } = useLanguage();

  const copy = useMemo(() => {
    const data: Record<
      string,
      {
        badge: string;
        heading: string;
        lead: string;
        point1: string;
        point2: string;
        point3: string;
        walkthroughTitle: string;
        walkthroughDesc: string;
        walkthroughBtn: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        companyLabel: string;
        companyPlaceholder: string;
        optionalLabel: string;
        processLabel: string;
        processHint: string;
        processPlaceholder: string;
        minChars: string;
        chips: { label: string; prefix: string }[];
        consentText: string;
        submitBtn: string;
        submittingBtn: string;
        privacyText: string;
        privacyLink: string;
        errName: string;
        errEmail: string;
        errProcess: string;
      }
    > = {
      en: {
        badge: "Direct Scoping & Feasibility",
        heading: "Tell us what slows your business down.",
        lead: "Start with one process. We'll discuss where it gets stuck and whether a custom system could help.",
        point1: "No phone numbers, budget commitments, or long questionnaires required.",
        point2: "Submitting this request evaluates initial technical feasibility before scheduling.",
        point3: "Direct delivery to Founder & CEO Kentley (wongkentley@gmail.com).",
        walkthroughTitle: "Prefer a live walkthrough?",
        walkthroughDesc: `Choose an available slot on our calendar, or reach out directly on WhatsApp (${CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"}).`,
        walkthroughBtn: "Schedule walkthrough",
        nameLabel: "Full name",
        namePlaceholder: "e.g. Alex Morgan",
        emailLabel: "Work email",
        emailPlaceholder: "name@company.com",
        companyLabel: "Company or practice",
        companyPlaceholder: "e.g. Apex Civil Partners",
        optionalLabel: "Optional",
        processLabel: "What process would you like to improve?",
        processHint: "Tap a sector to start:",
        processPlaceholder:
          "Tell us what takes up unnecessary time—e.g. re-typing contractor drawing specs, coordinating job dispatch across emails, or compiling weekly client reports...",
        minChars: "Minimum 10 characters",
        chips: [
          { label: "Offices & Operations", prefix: "We need to improve our office & operational workflows: " },
          { label: "Engineering & Infrastructure", prefix: "We need to improve our engineering and BOQ workflows: " },
          { label: "Education & Academies", prefix: "We need to improve our scheduling and tuition workflows: " },
          { label: "Healthcare & Clinics", prefix: "We need to improve our appointment intake and recall workflows: " },
          { label: "Logistics & Fleet", prefix: "We need to improve our dispatch and proof of delivery workflows: " },
        ],
        consentText: "Optional: Keep me informed of future case studies and engineering notes on operational systems.",
        submitBtn: "Request a workflow review",
        submittingBtn: "Transmitting review request...",
        privacyText: "We treat your details respectfully. Review our",
        privacyLink: "Privacy Notice",
        errName: "Please enter your full name.",
        errEmail: "Please provide a valid work email address.",
        errProcess: "Please describe the process in at least 10 characters.",
      },
      id: {
        badge: "Cakupan & Kelayakan Langsung",
        heading: "Beri tahu kami apa yang memperlambat bisnis Anda.",
        lead: "Mulai dari satu proses. Kami akan membedah di mana letak kemacetannya dan apakah sistem kustom dapat menyelesaikannya.",
        point1: "Tanpa nomor telepon wajib, komitmen anggaran, atau kuesioner panjang yang melelahkan.",
        point2: "Pengajuan ini mengevaluasi kelayakan teknis awal sebelum menjadwalkan sesi konsultasi.",
        point3: "Terkirim langsung ke Founder & CEO Kentley (wongkentley@gmail.com).",
        walkthroughTitle: "Lebih suka sesi walkthrough langsung?",
        walkthroughDesc: `Pilih jadwal kosong di kalender kami, atau hubungi kami langsung via WhatsApp (${CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"}).`,
        walkthroughBtn: "Jadwalkan walkthrough",
        nameLabel: "Nama lengkap",
        namePlaceholder: "contoh: Budi Santoso",
        emailLabel: "Email kerja",
        emailPlaceholder: "nama@perusahaan.com",
        companyLabel: "Nama perusahaan atau praktik",
        companyPlaceholder: "contoh: PT Mahakarya Teknik",
        optionalLabel: "Opsional",
        processLabel: "Proses apa yang ingin Anda tingkatkan?",
        processHint: "Pilih sektor untuk memulai:",
        processPlaceholder:
          "Jelaskan apa yang menghabiskan waktu berulang—misalnya mengetik ulang spesifikasi material dari CAD, koordinasi surat jalan via chat, atau menyusun laporan mingguan secara manual...",
        minChars: "Minimal 10 karakter",
        chips: [
          { label: "Operasional Kantor", prefix: "Kami butuh merapikan alur operasional kantor: " },
          { label: "Teknik & Konstruksi", prefix: "Kami butuh menyederhanakan perhitungan BOQ dan gambar teknik: " },
          { label: "Pendidikan & Bimbel", prefix: "Kami butuh mengotomatisasi jadwal kelas dan pembayaran SPP: " },
          { label: "Klinik & Kesehatan", prefix: "Kami butuh memangkas antrean dan pendaftaran pasien: " },
          { label: "Logistik & Armada", prefix: "Kami butuh melacak surat jalan dan pengiriman armada: " },
        ],
        consentText: "Opsional: Beri tahu saya seputar studi kasus sistem baru dan catatan rekayasa operasional.",
        submitBtn: "Ajukan peninjauan alur kerja",
        submittingBtn: "Mengirim permintaan...",
        privacyText: "Kami menghormati kerahasiaan data Anda. Baca",
        privacyLink: "Pemberitahuan Privasi",
        errName: "Harap masukkan nama lengkap Anda.",
        errEmail: "Harap berikan alamat email kerja yang valid.",
        errProcess: "Harap jelaskan proses minimal dalam 10 karakter.",
      },
      zh: {
        badge: "项目范围与可行性评估",
        heading: "告诉我们哪些繁杂琐事拖慢了您的业务运转。",
        lead: "从一个具体流程切入。我们将剖析其卡点症结，并论证定制化软件系统是否是最佳解法。",
        point1: "无需提供私人电话，无预算承诺压力，亦无冗长问卷。",
        point2: "提交本评估表可先期测算技术可行性，再进入演示日程。",
        point3: "信息直接发送给创始人兼 CEO Kentley (wongkentley@gmail.com)。",
        walkthroughTitle: "更倾向于即刻在线演示？",
        walkthroughDesc: `直接在我们的系统日历中挑选空闲时段，或通过 WhatsApp 直接联系 (${CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"})。`,
        walkthroughBtn: "预约在线演示",
        nameLabel: "全名",
        namePlaceholder: "例如：张明远",
        emailLabel: "工作邮箱",
        emailPlaceholder: "name@company.com",
        companyLabel: "公司或组织名称",
        companyPlaceholder: "例如：华建工程设计事务所",
        optionalLabel: "选填",
        processLabel: "您希望优化改进哪项业务流程？",
        processHint: "点击行业快速填充：",
        processPlaceholder:
          "请描述耗费过多机械时间的环节——例如重复抄写施工图纸算量参数、在各类群聊中反复核对派单，或手工汇总周度经营报表...",
        minChars: "最少输入 10 个字符",
        chips: [
          { label: "综合行政与运营", prefix: "我们需要理顺日常办公运营与财税台账： " },
          { label: "工程与基础设施", prefix: "我们需要优化工程算量与图纸审批流程： " },
          { label: "教育与培训学院", prefix: "我们需要实现智能排课与学费自动对账： " },
          { label: "医疗与专科门诊", prefix: "我们需要解决患者爽约与无纸化问卷采集： " },
          { label: "物流与运输车队", prefix: "我们需要打通车队调度与电子回单结算： " },
        ],
        consentText: "选填：允许向我发送未来的工程实践案例分析与系统架构手记。",
        submitBtn: "申请业务流程专项评估",
        submittingBtn: "正在加密提交评估申请...",
        privacyText: "我们严谨敬畏您的商业隐私。查阅我们的",
        privacyLink: "隐私政策声明",
        errName: "请输入您的真实姓名。",
        errEmail: "请输入有效的工作电子邮箱。",
        errProcess: "请至少输入 10 个字符阐述业务痛点。",
      },
      es: {
        badge: "Alcance y Viabilidad Directa",
        heading: "Cuéntenos qué ralentiza las operaciones de su negocio.",
        lead: "Comience con un proceso. Evaluaremos dónde se atasca y si un sistema a medida es la solución adecuada.",
        point1: "Sin números telefónicos obligatorios, sin compromisos de presupuesto ni cuestionarios extensos.",
        point2: "Este formulario evalúa la viabilidad técnica antes de coordinar una demostración.",
        point3: "Entrega directa al Fundador y CEO Kentley (wongkentley@gmail.com).",
        walkthroughTitle: "¿Prefiere una demostración en vivo?",
        walkthroughDesc: `Seleccione un horario en nuestro calendario o contáctenos por WhatsApp (${CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"}).`,
        walkthroughBtn: "Agendar demostración",
        nameLabel: "Nombre completo",
        namePlaceholder: "ej. Carlos Mendoza",
        emailLabel: "Correo corporativo",
        emailPlaceholder: "nombre@empresa.com",
        companyLabel: "Empresa o práctica",
        companyPlaceholder: "ej. Consultora Civil Andina",
        optionalLabel: "Opcional",
        processLabel: "¿Qué proceso desearía optimizar?",
        processHint: "Seleccione un sector para iniciar:",
        processPlaceholder:
          "Detalle qué tareas consumen tiempo innecesario—ej. transcribir especificaciones de planos CAD, coordinar albaranes por mensajes o compilar informes semanales a mano...",
        minChars: "Mínimo 10 caracteres",
        chips: [
          { label: "Oficinas y Operaciones", prefix: "Necesitamos optimizar las operaciones de oficina y facturación: " },
          { label: "Ingeniería e Infraestructura", prefix: "Necesitamos agilizar las mediciones de planos y BOQ: " },
          { label: "Educación y Academias", prefix: "Necesitamos automatizar la planificación de clases y matrículas: " },
          { label: "Salud y Clínicas", prefix: "Necesitamos reducir inasistencias y admisión de pacientes: " },
          { label: "Logística y Flota", prefix: "Necesitamos seguimiento de hojas de ruta y entregas: " },
        ],
        consentText: "Opcional: Mantenerme informado sobre casos de estudio y notas de ingeniería operativa.",
        submitBtn: "Solicitar revisión de flujo",
        submittingBtn: "Transmitiendo solicitud...",
        privacyText: "Tratamos su información con máxima confidencialidad. Revise nuestro",
        privacyLink: "Aviso de Privacidad",
        errName: "Por favor ingrese su nombre completo.",
        errEmail: "Por favor proporcione un correo corporativo válido.",
        errProcess: "Por favor describa el proceso con al menos 10 caracteres.",
      },
    };

    return data[language] || data.en;
  }, [language]);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    processDescription: "",
    marketingConsent: false,
    website: "", // Honeypot
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isPending, setIsPending] = useState(false);
  const [responseStatus, setResponseStatus] = useState<ContactApiResponse | null>(null);

  const validate = (): boolean => {
    const errs: ContactFormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = copy.errName;
    } else if (formData.name.length > CONFIG.LIMITS.NAME_MAX) {
      errs.name = `Name must not exceed ${CONFIG.LIMITS.NAME_MAX} characters.`;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = copy.errEmail;
    } else if (formData.email.length > CONFIG.LIMITS.EMAIL_MAX) {
      errs.email = `Email must not exceed ${CONFIG.LIMITS.EMAIL_MAX} characters.`;
    }

    if (formData.company && formData.company.length > CONFIG.LIMITS.COMPANY_MAX) {
      errs.company = `Company must not exceed ${CONFIG.LIMITS.COMPANY_MAX} characters.`;
    }

    if (
      !formData.processDescription.trim() ||
      formData.processDescription.trim().length < CONFIG.LIMITS.PROCESS_MIN
    ) {
      errs.processDescription = copy.errProcess;
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
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await res.json();
      setResponseStatus(data);

      if (res.ok && data.success) {
        analytics.trackEnquirySuccess();
        setFormData({
          name: "",
          email: "",
          company: "",
          processDescription: "",
          marketingConsent: false,
          website: "",
        });
        setErrors({});
      } else {
        console.warn(`[Contact Delivery Notice] [${data.timestamp}] Code: ${data.code} - ${data.message}`);
      }
    } catch (err) {
      const timestamp = new Date().toISOString();
      console.error(`[Contact Delivery Error] [${timestamp}] Network or fetch error:`, err);
      setResponseStatus({
        success: false,
        code: "SERVER_ERROR",
        message:
          "Unable to reach the server. Your entered details have been preserved. Please check your connection or reach out directly.",
        timestamp,
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#FAFBFD] border-b border-[#D7E3EE] scroll-mt-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
                <span>{copy.badge}</span>
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.08] mb-6"
            >
              {copy.heading}
            </h2>

            <p className="text-[19px] sm:text-[20px] leading-[1.7] text-[#1E2E42] font-normal mb-10 max-w-[50ch]">
              {copy.lead}
            </p>

            {/* Clear Scoping Reassurance */}
            <div className="space-y-4 mb-10 text-[15px] sm:text-[16px] text-[#1E2E42] leading-relaxed font-normal">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#617594] mt-2.5 shrink-0" />
                <span>{copy.point1}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#617594] mt-2.5 shrink-0" />
                <span>{copy.point2}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#617594] mt-2.5 shrink-0" />
                <span>
                  Direct delivery to Founder & CEO Kentley (
                  <strong className="text-[#0B1728] font-semibold">
                    {CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}
                  </strong>
                  ).
                </span>
              </div>
            </div>

            {/* Direct Interactive Calendar Scheduling Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#CBDDEB] mb-6 shadow-xs">
              <div className="text-[18px] font-bold text-[#0B1728] mb-2">
                {copy.walkthroughTitle}
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] mb-6 leading-relaxed font-normal">
                {copy.walkthroughDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#book-call"
                  className="inline-flex items-center gap-2 text-[15px] font-bold bg-[#617594] text-white px-6 py-3.5 rounded-full hover:bg-[#50637F] transition-colors shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>{copy.walkthroughBtn}</span>
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

          {/* Right Column: Accessible Form */}
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
                        <a
                          href={`mailto:${CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}`}
                          className="font-semibold underline"
                        >
                          {CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}
                        </a>
                        .
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
                  {copy.nameLabel} <span className="text-red-500">*</span>
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
                  placeholder={copy.namePlaceholder}
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
                  {copy.emailLabel} <span className="text-red-500">*</span>
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
                  placeholder={copy.emailPlaceholder}
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
                    {copy.companyLabel}
                  </label>
                  <span className="text-[13px] text-[#52667A]">{copy.optionalLabel}</span>
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
                  placeholder={copy.companyPlaceholder}
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
                    {copy.processLabel} <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[13px] text-[#52667A]">{copy.processHint}</span>
                </div>

                {/* Quick Sector Chips */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {copy.chips.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          processDescription: prev.processDescription
                            ? `${prev.processDescription} • ${chip.label}`
                            : chip.prefix,
                        }));
                      }}
                      className="text-[13px] px-3.5 py-1.5 bg-[#EAF2F8] hover:bg-[#DCE9F5] text-[#0B1728] font-medium rounded-full border border-[#CBDDEB] transition-colors cursor-pointer"
                    >
                      + {chip.label}
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
                  placeholder={copy.processPlaceholder}
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
                    <span>{copy.minChars}</span>
                  )}
                  <span>
                    {formData.processDescription.length} / {CONFIG.LIMITS.PROCESS_MAX}
                  </span>
                </div>
              </div>

              {/* Marketing Consent */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.marketingConsent}
                    onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-[#CBDDEB] text-[#617594] focus:ring-[#617594]"
                  />
                  <span className="text-[14px] text-[#52667A] leading-snug font-normal">
                    {copy.consentText}
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
                      <span>{copy.submittingBtn}</span>
                    </>
                  ) : (
                    <span>{copy.submitBtn}</span>
                  )}
                </button>
              </div>

              {/* Privacy Disclosure Notice */}
              <div className="pt-4 border-t border-[#CBDDEB] text-[13px] text-[#52667A] flex items-center justify-between">
                <span>
                  {copy.privacyText}{" "}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[#617594] font-bold underline hover:text-[#50637F] focus:outline-none cursor-pointer"
                  >
                    {copy.privacyLink}
                  </button>
                  .
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
