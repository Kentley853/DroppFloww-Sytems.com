import React, { useMemo } from "react";
import { ArrowRight, Check, Zap, ShieldCheck, Award, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getWhyDroppflowwContent } from "../data/pagesTranslations";

interface WhyDroppflowwPageProps {
  onNavigate: (page: string) => void;
}

export const WhyDroppflowwPage: React.FC<WhyDroppflowwPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const content = useMemo(() => getWhyDroppflowwContent(language), [language]);

  const cards = useMemo(() => {
    if (language === "id") {
      return [
        {
          title: "Tanpa Delegasi ke Staf Junior",
          desc: "Agensi besar mengirim direktur terbaik untuk presentasi, lalu diam-diam menyerahkan arsitektur teknis Anda ke staf junior. Di Droppfloww, setiap baris kode dan skema database dikerjakan langsung oleh insinyur sistem berpengalaman.",
          icon: Zap,
        },
        {
          title: "Software yang Tahan Lama",
          desc: "Kami menggunakan teknologi standar industri: TypeScript, Node.js, PostgreSQL, dan API REST/GraphQL yang bersih. Tanpa platform no-code aneh yang rentan rusak atau mengunci data Anda.",
          icon: ShieldCheck,
        },
        {
          title: "Keputusan Manusia Tetap Manusiawi",
          desc: "Kami mengotomatiskan entri ulang data klerikal, sinkronisasi, dan ekstraksi berkas agar staf Anda dapat fokus pada relasi klien, negosiasi vendor, dan keputusan strategis penting.",
          icon: Award,
        },
      ];
    }
    if (language === "zh") {
      return [
        {
          title: "绝无初级外包分包",
          desc: "大型外包公司派资深总监参与商务谈判，随后悄悄将技术架构甩给毫无实战经验的实习生。在 Droppfloww，每一行代码与数据库设计均由经验丰富的全栈系统工程师亲手编写。",
          icon: Zap,
        },
        {
          title: "历久弥坚的工业级技术栈",
          desc: "我们采用主流高可用标准技术：TypeScript、Node.js、PostgreSQL 和规范的 REST API。拒绝任何在接口升级时随时崩溃、将业务数据当做人质的封闭低代码平台。",
          icon: ShieldCheck,
        },
        {
          title: "人机协同，技术赋能专家",
          desc: "我们自动化消除机械数据录入、多端同步与单据抄写，让企业核心业务骨干将宝贵时间倾注于客户深度维系、供应商商务谈判及重大商业决策。",
          icon: Award,
        },
      ];
    }
    if (language === "es") {
      return [
        {
          title: "Sin Delegación en Perfiles Júnior",
          desc: "Las grandes agencias envían a directores para la venta y luego derivan el proyecto a analistas sin experiencia. En Droppfloww, cada línea de código y esquema de datos es creado por ingenieros consolidados.",
          icon: Zap,
        },
        {
          title: "Software Construido para Perdurar",
          desc: "Utilizamos estándares consolidados: TypeScript, Node.js, PostgreSQL y APIs REST limpias. Sin plataformas low-code cerradas que rompen al menor cambio o secuestran su información.",
          icon: ShieldCheck,
        },
        {
          title: "Decisiones Humanas con Criterio Propio",
          desc: "Automatizamos la transcripción mecánica y sincronización para que su personal se centre en la negociación con proveedores, relación con clientes y decisiones estratégicas.",
          icon: Award,
        },
      ];
    }
    return [
      {
        title: "No Junior Delegation",
        desc: "Big agencies send their best directors to pitch you, then quietly hand off your technical architecture to unvetted junior staff. At Droppfloww, every line of code and database schema is crafted by experienced systems engineers.",
        icon: Zap,
      },
      {
        title: "Software Built to Outlast Us",
        desc: "We use standard, enterprise-grade technologies: TypeScript, Node.js, PostgreSQL, and clean REST/GraphQL APIs. No weird proprietary low-code platforms that break when an API changes or hold your data hostage.",
        icon: ShieldCheck,
      },
      {
        title: "Human Decisions Stay Human",
        desc: "We automate clerical re-entry, data synchronization, and document extraction so your people can focus on customer relationships, supplier negotiations, and complex strategic judgments.",
        icon: Award,
      },
    ];
  }, [language]);

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Subtle Atmospheric Gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(62, 95, 130, 0.45) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              {content.title}
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              {content.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>{content.ctaSchedule}</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("client-reviews")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>{language === "id" ? "Baca ulasan klien" : language === "zh" ? "阅读客户评价" : language === "es" ? "Leer opiniones de clientes" : "Read client reviews"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Comparison */}
      <main className="py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          {/* Studio Principles Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#E7EDF5] flex items-center justify-center text-[#617594] font-bold mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Comparison Table */}
          <div className="mb-24">
            <div className="max-w-[760px] mb-12">
              <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight leading-[1.12] mb-4">
                {content.comparisonTitle}
              </h2>
              <p className="text-[19px] sm:text-[20px] text-[#1E2E42] font-normal leading-relaxed">
                {content.comparisonSubtitle}
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#CBDDEB] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="border-b border-[#CBDDEB] bg-[#F4F8FB]">
                      <th className="p-6 text-[15px] font-bold text-[#0B1728] w-1/4">
                        {language === "id" ? "Metrik Komparasi" : language === "zh" ? "核心评估维度" : language === "es" ? "Dimensión de Evaluación" : "Comparison Metric"}
                      </th>
                      <th className="p-6 text-[15px] font-extrabold text-[#617594] bg-[#E7EDF5] border-x border-[#CBDDEB] w-1/3">
                        {content.tableHeaderDroppfloww}
                      </th>
                      <th className="p-6 text-[15px] font-semibold text-[#52667A] w-1/5">
                        {content.tableHeaderTraditional}
                      </th>
                      <th className="p-6 text-[15px] font-semibold text-[#52667A] w-1/5">
                        {content.tableHeaderSaas}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CBDDEB]">
                    {content.comparisons.map((row) => (
                      <tr key={row.attribute} className="hover:bg-[#FBFDFF] transition-colors">
                        <td className="p-6 text-[16px] font-bold text-[#0B1728]">
                          {row.attribute}
                        </td>
                        <td className="p-6 text-[15px] sm:text-[16px] text-[#0B1728] bg-[#F8FAFD] border-x border-[#CBDDEB] font-medium leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <Check className="w-4.5 h-4.5 text-[#617594] shrink-0 mt-0.5" />
                            <span>{row.droppfloww}</span>
                          </div>
                        </td>
                        <td className="p-6 text-[15px] text-[#52667A] leading-relaxed">
                          {row.traditional}
                        </td>
                        <td className="p-6 text-[15px] text-[#52667A] leading-relaxed">
                          {row.genericSaas}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Founder Profile & Direct Line */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-16 border border-[#1B2F4A] mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-4">
                <div className="relative mx-auto lg:mx-0 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#0E1D31] border-2 border-[#617594] p-2 flex flex-col items-center justify-center text-center shadow-xl">
                  <div className="w-20 h-20 rounded-full bg-[#1B2F4A] flex items-center justify-center text-[#93C5FD] font-extrabold text-[32px] mb-3">
                    K
                  </div>
                  <div className="text-[20px] font-extrabold text-white">{content.founderName}</div>
                  <div className="text-[13px] text-[#93C5FD] font-medium mt-0.5">{content.founderRole}</div>
                  <div className="text-[12px] text-[#CBDDEB] mt-2 font-mono">wongkentley@gmail.com</div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="text-[12px] font-bold text-[#38BDF8] uppercase tracking-[0.16em] mb-3">
                  {content.founderBadge}
                </div>
                <h3 className="text-[28px] sm:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                  "{content.founderQuote}"
                </h3>
                <p className="text-[18px] sm:text-[19px] text-[#CBDDEB] leading-[1.8] font-normal mb-8">
                  {content.founderBio}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/6285820467085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B1728] text-[15px] font-bold px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct (+62 858-2046-7085)</span>
                  </a>

                  <a
                    href="mailto:wongkentley@gmail.com"
                    className="inline-flex items-center gap-2 bg-[#0E1D31] hover:bg-[#152943] text-white text-[15px] font-semibold px-6 py-3.5 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#93C5FD]" />
                    <span>wongkentley@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              {content.bottomTitle}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[58ch] mx-auto mb-8 leading-relaxed">
              {content.bottomDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                {content.bottomCta}
              </button>
              <button
                type="button"
                onClick={() => onNavigate("what-we-build")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                {content.ctaHowWeWork}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
