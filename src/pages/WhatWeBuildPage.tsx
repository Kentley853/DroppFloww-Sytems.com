import React, { useState, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";
import { analytics } from "../config";
import { useLanguage } from "../i18n/LanguageContext";
import { getWhatWeBuildCategories } from "../data/pagesTranslations";

interface WhatWeBuildPageProps {
  onNavigate: (page: string) => void;
}

export const WhatWeBuildPage: React.FC<WhatWeBuildPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const categories = useMemo(() => getWhatWeBuildCategories(language), [language]);
  const [selectedCategory, setSelectedCategory] = useState<string>("operational-engines");
  const activeItem = categories.find((c) => c.id === selectedCategory) || categories[0];

  const headerContent = useMemo(() => {
    if (language === "id") {
      return {
        badge: "Arsitektur & Solusi Rekayasa",
        title: "Sistem khusus yang dibangun mengikuti cara kerja bisnis Anda.",
        desc: "Kami tidak memaksa Anda meninggalkan alat kerja andalan atau membeli lisensi SaaS kaku. Kami merancang lapisan software khusus yang menghubungkan database, spreadsheet, dan tim Anda—mengotomatiskan pekerjaan administrasi yang berulang.",
        ctaSchedule: "Jadwalkan tinjauan arsitektur",
        ctaCaseStudies: "Baca studi kasus terverifikasi",
        introTitle: "Empat arsitektur sistem inti yang direkayasa oleh Droppfloww.",
        introDesc: "Setiap sistem yang kami serahkan dikodekan khusus dalam TypeScript modern, di-host dengan aman di cloud Anda atau server privat khusus, dan 100% menjadi milik perusahaan Anda.",
        specBadge: "Spesifikasi Arsitektur",
        coreCaps: "Kemampuan Teknis Utama:",
        verifiedDeploy: "Penerapan Terverifikasi",
        outcomeMetric: "Metrik Hasil",
        linkCaseStudy: "Lihat penerapan studi kasus",
        btnRequestConsult: "Minta konsultasi sistem",
        pipelineBadge: "Paradigma Integrasi Sistem",
        pipelineTitle: "Kami menghubungkan input dunia nyata ke output operasional otomatis.",
        pipelineDesc: "Sebagian besar perusahaan beroperasi dalam kenyataan yang berantakan: obrolan WhatsApp, surat jalan kertas, spreadsheet Excel, dan database ERP lama. Droppfloww membangun mesin tangguh di tengahnya.",
        step1Title: "Sumber Dunia Nyata yang Beragam",
        step1Items: ["Pesan WhatsApp pengemudi & vendor", "Faktur PDF & berkas BOQ tender", "Pencatatan database AS400 / SQL warisan", "Email pesanan pelanggan & spreadsheet"],
        step2Title: "Logika Ternormalisasi Khusus",
        step2Items: ["Normalisasi skema otomatis", "Audit aturan bisnis deterministik", "Penerusan pengecualian dua arah", "Konsol web khusus untuk staf Anda"],
        step3Title: "Tindakan Operasional Otomatis",
        step3Items: ["Konfirmasi surat jalan mobile satu ketukan", "Rekonsiliasi buku besar ERP real-time", "Notifikasi & pelacakan status pelanggan", "Faktur siap verifikasi akuntansi"],
        bottomTitle: "Ingin tahu apakah alur kerja Anda dapat diotomatiskan?",
        bottomDesc: "Kirimkan deskripsi bagaimana tim Anda menangani operasional hari ini. Kami akan mengevaluasi kelayakan teknis dan mengajukan arsitektur sistem yang konkret.",
        bottomCtaSchedule: "Jadwalkan konsultasi sistem",
        bottomCtaProcess: "Pelajari proses konsultasi kami",
      };
    }
    if (language === "zh") {
      return {
        badge: "系统工程架构与解决方案",
        title: "围绕企业实际业务运转方式定制的专属系统。",
        desc: "我们不会强制您放弃正在使用的工具，也不会向您推销臃肿僵化的标准 SaaS。我们为您工程化定制中间软件层，打通数据库、表格与业务团队，彻底自动化繁琐的重复黏合劳动。",
        ctaSchedule: "预约系统架构诊断",
        ctaCaseStudies: "阅读已验证的客户案例",
        introTitle: "Droppfloww 交付的四大核心业务系统架构。",
        introDesc: "我们交付的每套系统均采用现代 TypeScript 定制编码，安全托管在您的专属云环境或独立私有服务器上，代码及知识产权 100% 由贵司全资拥有。",
        specBadge: "架构技术规范",
        coreCaps: "核心技术交付能力：",
        verifiedDeploy: "已落地实测场景",
        outcomeMetric: "核心效益指标",
        linkCaseStudy: "查看案例落地详情",
        btnRequestConsult: "申请系统定制咨询",
        pipelineBadge: "系统集成范式",
        pipelineTitle: "打通真实业务输入端与自动化运营执行端。",
        pipelineDesc: "绝大多数企业都处在杂乱的现实业务中：微信/WhatsApp 聊天、纸质单据、Excel 电子表格与老旧 ERP。Droppfloww 在其间构建稳定静默的智能运转引擎。",
        step1Title: "多渠道非结构化现实输入",
        step1Items: ["司机与供应商即时消息", "供应商 PDF 发票与图纸工程量清单", "老旧 AS400 / SQL 主机数据记录", "客户采购邮件与分散的 Excel 表格"],
        step2Title: "专属标准化商业逻辑引擎",
        step2Items: ["自动化数据结构清洗与归一化", "确定性业务规章自动审核校验", "双向异常阻断与调度流转", "面向一线员工的极简专属 Web 工作台"],
        step3Title: "自动化业务履约执行",
        step3Items: ["司机移动端单键签收确认", "ERP 核心账目实时同步对账", "全流程客户物流追踪与动态通知", "财务审核即用级合规发票"],
        bottomTitle: "想评估您的业务流程是否适合自动化？",
        bottomDesc: "请向我们简要描述贵司当前的操作流程。我们将现场评估工程可行性，并为您出具清晰落地的系统架构方案。",
        bottomCtaSchedule: "预约系统架构排期研讨",
        bottomCtaProcess: "了解我们的开发咨询流程",
      };
    }
    if (language === "es") {
      return {
        badge: "Arquitectura y Soluciones de Ingeniería",
        title: "Sistemas a medida adaptados a cómo funciona su empresa.",
        desc: "No le obligamos a abandonar las herramientas de las que depende ni a pagar por plantillas SaaS rígidas. Desarrollamos capas de software personalizadas que conectan sus bases de datos, hojas de cálculo y equipos—automatizando las tareas administrativas repetitivas.",
        ctaSchedule: "Agendar revisión técnica",
        ctaCaseStudies: "Leer casos de estudio verificados",
        introTitle: "Cuatro arquitecturas de sistemas principales desarrolladas por Droppfloww.",
        introDesc: "Cada sistema entregado está programado a medida en TypeScript moderno, alojado de forma segura en su infraestructura cloud o servidores dedicados, y es 100% propiedad de su empresa.",
        specBadge: "Especificación de Arquitectura",
        coreCaps: "Capacidades Técnicas Principales:",
        verifiedDeploy: "Despliegue Verificado",
        outcomeMetric: "Métrica de Impacto",
        linkCaseStudy: "Ver casos de éxito",
        btnRequestConsult: "Solicitar consulta de sistemas",
        pipelineBadge: "Paradigma de Integración",
        pipelineTitle: "Conectamos entradas reales con salidas operativas automatizadas.",
        pipelineDesc: "La mayoría de las empresas operan en una realidad fragmentada: chats de WhatsApp, albaranes en papel, hojas de Excel y bases de datos tradicionales. Droppfloww construye el motor silencioso intermedio.",
        step1Title: "Entradas Reales Heterogéneas",
        step1Items: ["Mensajes de transportistas y proveedores", "Facturas PDF y mediciones de obra", "Registros en bases de datos AS400 / SQL", "Correos de pedidos y hojas de cálculo"],
        step2Title: "Lógica Normalizada a Medida",
        step2Items: ["Normalización automática de esquemas", "Auditoría determinista de reglas operativas", "Enrutamiento bidireccional de excepciones", "Consolas web a medida para su equipo"],
        step3Title: "Acciones Operativas Automatizadas",
        step3Items: ["Confirmación de entrega móvil en un toque", "Conciliación contable en tiempo real en ERP", "Notificaciones de seguimiento a clientes", "Facturación verificada lista para auditoría"],
        bottomTitle: "¿Desea saber si su operativa puede automatizarse?",
        bottomDesc: "Envíenos una descripción de cómo gestiona su operativa actualmente. Evaluaremos la viabilidad técnica y propondremos una arquitectura de sistemas concreta.",
        bottomCtaSchedule: "Agendar sesión de evaluación",
        bottomCtaProcess: "Conocer nuestro proceso de consultoría",
      };
    }
    return {
      badge: "Engineering Architecture & Solutions",
      title: "Custom systems built around how your business works.",
      desc: "We do not force you to abandon the tools you rely on or adopt bloated SaaS templates. We engineer custom software layers that sit between your databases, spreadsheets, and teams—automating the repetitive clerical glue.",
      ctaSchedule: "Schedule an architectural review",
      ctaCaseStudies: "Read verified case studies",
      introTitle: "Four core system architectures engineered by Droppfloww.",
      introDesc: "Every system we deliver is custom-coded in modern TypeScript, securely hosted in your cloud infrastructure or on private dedicated instances, and completely owned by your company.",
      specBadge: "Architecture Specification",
      coreCaps: "Core Technical Capabilities:",
      verifiedDeploy: "Verified Deployment",
      outcomeMetric: "Outcome Metric",
      linkCaseStudy: "See case study implementations",
      btnRequestConsult: "Request a system consultation",
      pipelineBadge: "System Integration Paradigm",
      pipelineTitle: "We connect your real-world inputs to automated operational outputs.",
      pipelineDesc: "Most companies operate in a messy reality: WhatsApp chats, paper manifests, Excel spreadsheets, and legacy ERP databases. Droppfloww builds the quiet engine in the middle.",
      step1Title: "Messy Real-World Sources",
      step1Items: ["WhatsApp driver/vendor messages", "PDF supplier invoices & BOQs", "Legacy AS400 / SQL database records", "Customer order emails & spreadsheets"],
      step2Title: "Custom Normalized Logic",
      step2Items: ["Automatic schema normalization", "Deterministic business rule audits", "Bidirectional exception routing", "Custom web consoles for your staff"],
      step3Title: "Automated Operational Actions",
      step3Items: ["One-tap mobile dispatch confirmations", "Real-time ERP ledger reconciliations", "Customer delivery notifications & tracking", "Verified accounting-ready invoices"],
      bottomTitle: "Wondering if your workflow can be automated?",
      bottomDesc: "Send us a description of how your team handles operations today. We will evaluate technical feasibility and propose a concrete system architecture.",
      bottomCtaSchedule: "Schedule a system scoping call",
      bottomCtaProcess: "Learn our consulting process",
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(62, 95, 130, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>{headerContent.badge}</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              {headerContent.title}
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              {headerContent.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>{headerContent.ctaSchedule}</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("client-reviews")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>{headerContent.ctaCaseStudies}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exploration Section */}
      <main className="py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          {/* Section Introduction */}
          <div className="max-w-[760px] mb-16">
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight leading-[1.12] mb-6">
              {headerContent.introTitle}
            </h2>
            <p className="text-[19px] sm:text-[20px] text-[#1E2E42] leading-relaxed font-normal">
              {headerContent.introDesc}
            </p>
          </div>

          {/* Interactive Category Grid / Detail View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
            
            {/* Category Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {categories.map((cat, idx) => {
                const isSelected = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      analytics.trackCtaClick(`what_we_build_cat_${cat.id}`);
                    }}
                    className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#0B1728] text-white border-[#617594] shadow-md ring-1 ring-[#617594]"
                        : "bg-white text-[#0B1728] border-[#CBDDEB] hover:bg-[#F0F5FA]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[12px] font-mono font-bold ${isSelected ? "text-[#38BDF8]" : "text-[#52667A]"}`}>
                        ARCHITECTURE 0{idx + 1}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />}
                    </div>
                    <div className="text-[19px] font-extrabold mb-1">
                      {cat.title}
                    </div>
                    <div className={`text-[14px] line-clamp-2 leading-relaxed ${isSelected ? "text-[#CBDDEB]" : "text-[#475A70]"}`}>
                      {cat.tagline}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Architecture Breakdown Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#CBDDEB] shadow-sm">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] text-[#617594] text-[12px] font-bold uppercase tracking-wider mb-6">
                <span>{headerContent.specBadge}</span>
              </div>

              <h3 className="text-[30px] sm:text-[40px] font-extrabold text-[#0B1728] tracking-tight leading-[1.15] mb-4">
                {activeItem.title}
              </h3>

              <p className="text-[18px] sm:text-[20px] text-[#617594] font-bold mb-6">
                {activeItem.tagline}
              </p>

              <p className="text-[18px] sm:text-[19px] leading-[1.8] text-[#2A3F5B] font-normal mb-8">
                {activeItem.description}
              </p>

              <div className="p-7 rounded-2xl bg-[#F4F8FB] border border-[#CBDDEB] mb-8">
                <div className="text-[13px] font-bold uppercase tracking-wider text-[#617594] mb-4">
                  {headerContent.coreCaps}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeItem.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#0B1728]">
                      <div className="w-5 h-5 rounded-full bg-[#E7EDF5] flex items-center justify-center text-[#617594] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact Snippet */}
              <div className="p-6 rounded-2xl bg-[#0B1728] text-white border border-[#1B2F4A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                    {headerContent.verifiedDeploy}
                  </div>
                  <p className="text-[15px] text-[#CBDDEB] leading-relaxed max-w-[50ch]">
                    {activeItem.realWorldExample}
                  </p>
                </div>
                <div className="shrink-0 bg-[#0E1D31] px-5 py-3.5 rounded-xl border border-[#1B2F4A]">
                  <div className="text-[11px] text-[#93C5FD] font-medium">{headerContent.outcomeMetric}</div>
                  <div className="text-[17px] font-bold text-white mt-0.5">{activeItem.stat}</div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-8 border-t border-[#CBDDEB] flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("client-reviews")}
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[#617594] hover:text-[#50637F] cursor-pointer"
                >
                  <span>{headerContent.linkCaseStudy}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("schedule-demo")}
                  className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[15px] sm:text-[16px] font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(97,117,148,0.3)] transition-colors cursor-pointer"
                >
                  {headerContent.btnRequestConsult}
                </button>
              </div>

            </div>

          </div>

          {/* Blueprint Visualization */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-16 border border-[#1B2F4A] mb-24 relative overflow-hidden">
            <div className="max-w-[720px] mb-12 relative z-10">
              <div className="text-[12px] font-bold text-[#8DB8E0] uppercase tracking-[0.16em] mb-3">
                {headerContent.pipelineBadge}
              </div>
              <h3 className="text-[32px] sm:text-[44px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                {headerContent.pipelineTitle}
              </h3>
              <p className="text-[16px] text-[#9CB5CE] leading-relaxed">
                {headerContent.pipelineDesc}
              </p>
            </div>

            {/* Pipeline Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              <div className="p-6 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A]">
                <div className="text-[11px] font-mono text-[#8DB8E0] uppercase tracking-wider mb-2">
                  01. INGESTION LAYER
                </div>
                <div className="text-[18px] font-bold text-white mb-3">
                  {headerContent.step1Title}
                </div>
                <ul className="space-y-2 text-[14px] text-[#CBDDEB]">
                  {headerContent.step1Items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#14253D] border border-[#3E5F82]/50 shadow-lg">
                <div className="text-[11px] font-mono text-[#8DB8E0] uppercase tracking-wider mb-2">
                  02. DROPPFLOWW ENGINE
                </div>
                <div className="text-[18px] font-bold text-white mb-3">
                  {headerContent.step2Title}
                </div>
                <ul className="space-y-2 text-[14px] text-white">
                  {headerContent.step2Items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A]">
                <div className="text-[11px] font-mono text-[#8DB8E0] uppercase tracking-wider mb-2">
                  03. EXECUTION LAYER
                </div>
                <div className="text-[18px] font-bold text-white mb-3">
                  {headerContent.step3Title}
                </div>
                <ul className="space-y-2 text-[14px] text-[#CBDDEB]">
                  {headerContent.step3Items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              {headerContent.bottomTitle}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[58ch] mx-auto mb-8 leading-relaxed">
              {headerContent.bottomDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                {headerContent.bottomCtaSchedule}
              </button>
              <button
                type="button"
                onClick={() => onNavigate("how-we-work")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                {headerContent.bottomCtaProcess}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
