import React, { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { analytics } from "../config";
import { useLanguage } from "../i18n/LanguageContext";

export const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = useMemo(() => {
    const data: Record<
      string,
      {
        badge: string;
        heading: string;
        lead: string;
        callout: string;
        faqs: { q: string; a: string }[];
      }
    > = {
      en: {
        badge: "Frequently Asked Questions",
        heading: "Clear answers on how we operate.",
        lead: "Straightforward answers about our scoping, software ownership, data security, and consulting process.",
        callout:
          "Have a specific workflow or question not covered here? We discuss technical feasibility directly during your walkthrough.",
        faqs: [
          {
            q: "Do we need to replace our existing software?",
            a: "Not necessarily. We first look at what can be connected or improved. If replacement makes sense, we'll explain why.",
          },
          {
            q: "Is every project an AI project?",
            a: "No. Some problems need better workflows or straightforward software. We use AI where it adds useful capability.",
          },
          {
            q: "What happens in a workflow review?",
            a: "We discuss one process, the tools involved, where it gets stuck and what a useful first improvement could be.",
          },
          {
            q: "How long does a project take?",
            a: "It depends on the scope, integrations and review requirements. We agree on milestones after understanding the work.",
          },
          {
            q: "What does it cost?",
            a: "We scope the project before quoting. Any ongoing hosting, software or model costs should be made clear separately.",
          },
          {
            q: "How do you handle sensitive information?",
            a: "Access and data requirements are agreed before implementation. We aim to use only the information the workflow needs.",
          },
          {
            q: "Who owns the code and provides support?",
            a: "Ownership, access, documentation and support are agreed in the project scope and contract.",
          },
        ],
      },
      id: {
        badge: "Pertanyaan yang Sering Diajukan",
        heading: "Jawaban transparan tentang cara kerja kami.",
        lead: "Penjelasan langsung mengenai penentuan ruang lingkup, kepemilikan kode sumber, keamanan data, dan proses konsultasi kami.",
        callout:
          "Memiliki alur kerja atau pertanyaan spesifik yang belum terjawab di sini? Kami membahas kelayakan teknis langsung dalam sesi walkthrough.",
        faqs: [
          {
            q: "Apakah kami harus mengganti software yang sudah ada?",
            a: "Tidak harus. Kami memprioritaskan integrasi atau peningkatan sistem yang sudah berjalan. Jika penggantian memang dibutuhkan, kami akan menjelaskan alasannya secara transparan.",
          },
          {
            q: "Apakah setiap proyek harus menggunakan AI?",
            a: "Tidak. Sebagian besar hambatan hanya memerlukan alur kerja yang lebih rapi atau perangkat lunak sederhana. Kami menggunakan AI hanya jika terbukti memberi nilai tambah nyata.",
          },
          {
            q: "Apa yang terjadi dalam sesi evaluasi alur kerja?",
            a: "Kita mendiskusikan satu alur operasional tertentu, alat yang terlibat, titik kemacetan data, dan perbaikan awal yang paling berdampak langsung.",
          },
          {
            q: "Berapa lama pengerjaan satu proyek?",
            a: "Tergantung cakupan, integrasi API, dan kebutuhan validasi. Kami menyepakati jadwal tonggak capaian (milestone) setelah membedah alur pekerjaan.",
          },
          {
            q: "Berapa biayanya?",
            a: "Kami menentukan cakupan proyek terlebih dahulu sebelum memberikan penawaran tetap. Biaya hosting, lisensi software, atau kuota model komputasi selalu dipisahkan secara transparan.",
          },
          {
            q: "Bagaimana Anda menjaga kerahasiaan data sensitif?",
            a: "Akses dan persyaratan data disepakati sebelum pengerjaan. Kami hanya memproses informasi yang benar-benar esensial bagi alur kerja yang dibangun.",
          },
          {
            q: "Siapa pemilik kode sumber dan bagaimana dukungannya?",
            a: "Kepemilikan hak cipta, akses repositori, dokumentasi lengkap, dan skema dukungan pemeliharaan disepakati dengan jelas dalam perjanjian kontrak proyek.",
          },
        ],
      },
      zh: {
        badge: "常见问题答疑",
        heading: "开诚布公，详析我们的合作方式。",
        lead: "关于项目范围界定、代码资产归属、商业数据安全与技术顾问流程的清晰解答。",
        callout:
          "有此处未涵盖的特殊业务流程或疑问？在我们的 30 分钟系统演示中，我们将与您直接论证技术可行性。",
        faqs: [
          {
            q: "我们必须废弃或替换现有软件吗？",
            a: "完全不需要。我们首先评估现有工具的连接与改良方案。只有当全面重构能产生显著更高的商业回报时，我们才会详尽阐述原因并提供方案。",
          },
          {
            q: "每个交付项目都必须依托人工智能 (AI) 吗？",
            a: "并非如此。许多业务痛点通过扎实的逻辑流程或直接的工程软件即可完美化解。我们仅在 AI 真正能赋能增效的关键环节审慎引入。",
          },
          {
            q: "在业务流程专项评估中会包含哪些内容？",
            a: "我们将深入探讨您的一处核心痛点流程、关联软件、数据卡点，并厘定首期最具可量化成效的改进切入点。",
          },
          {
            q: "系统开发与交付通常需要多长时间？",
            a: "周期取决于系统范围、接口集成复杂度与验收标准。在充分理解业务后，我们将制定清晰透明的分阶段里程碑计划。",
          },
          {
            q: "项目的收费标准是怎样的？",
            a: "我们在深度明确范围后提供固化报价。所有持续性的云服务器托管、第三方软件许可或计算模型消耗成本均会独立列明，透明无隐藏。",
          },
          {
            q: "如何确保我们的商业敏感信息与数据安全？",
            a: "数据权限与安全标准在工程实施前即已全面敲定。我们遵循最小权限原则，仅调取流程运转所必需的核心数据。",
          },
          {
            q: "系统源代码的所有权归谁？后续如何提供维护？",
            a: "全部源代码产权、部署文档、管理访问权限与持续运维支持条款，均会在双方签署的正式项目合同中明确归属于您。",
          },
        ],
      },
      es: {
        badge: "Preguntas Frecuentes",
        heading: "Respuestas claras sobre cómo operamos.",
        lead: "Respuestas transparentes sobre alcance, propiedad del código, seguridad de datos y proceso de consultoría.",
        callout:
          "¿Tiene un flujo de trabajo o consulta que no figure aquí? Analizamos la viabilidad técnica directamente durante su demostración.",
        faqs: [
          {
            q: "¿Debemos reemplazar nuestro software actual?",
            a: "No necesariamente. Primero analizamos qué se puede conectar o mejorar. Si un reemplazo tiene sentido económico y operativo, le explicaremos las razones claramente.",
          },
          {
            q: "¿Cada proyecto es un proyecto de IA?",
            a: "No. Algunos problemas simplemente requieren mejores flujos de trabajo o software directo y robusto. Solo aplicamos IA donde aporta un valor medible.",
          },
          {
            q: "¿Qué sucede en una revisión de flujo de trabajo?",
            a: "Examinamos un proceso específico, las herramientas involucradas, los cuellos de botella y cuál sería la primera mejora de alto impacto.",
          },
          {
            q: "¿Cuánto tiempo toma un proyecto?",
            a: "Depende del alcance, las integraciones requeridas y los hitos de validación. Acordamos un cronograma por etapas tras entender a fondo el trabajo.",
          },
          {
            q: "¿Cuál es el costo?",
            a: "Definimos el alcance antes de cotizar. Cualquier costo continuo de infraestructura en la nube o licencias se desglosa por separado con total transparencia.",
          },
          {
            q: "¿Cómo gestionan la información confidencial?",
            a: "Los requerimientos de acceso y privacidad se estipulan antes de la implementación. Solo utilizamos la información estrictamente necesaria para el flujo operativo.",
          },
          {
            q: "¿Quién es dueño del código y qué soporte ofrecen?",
            a: "La propiedad intelectual del código, la documentación, los accesos y el soporte continuo quedan plenamente establecidos en el contrato del proyecto.",
          },
        ],
      },
    };

    return data[language] || data.en;
  }, [language]);

  const toggleAccordion = (idx: number) => {
    const nextVal = openIndex === idx ? null : idx;
    setOpenIndex(nextVal);
    if (nextVal !== null) {
      analytics.trackCtaClick(`faq_opened_${idx}`);
    }
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-36 border-b border-[#D7E3EE] bg-white scroll-mt-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Heading Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
                <span>{faqData.badge}</span>
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-[40px] sm:text-[52px] lg:text-[58px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.05] mb-5"
            >
              {faqData.heading}
            </h2>
            <p className="text-[19px] sm:text-[20px] leading-[1.7] text-[#1E2E42] font-normal mb-8">
              {faqData.lead}
            </p>
            <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-[#CBDDEB] text-[15px] sm:text-[16px] text-[#1E2E42] leading-relaxed font-normal shadow-xs">
              {faqData.callout}
            </div>
          </motion.div>

          {/* Right Accordions Column */}
          <div className="lg:col-span-8 divide-y divide-[#CBDDEB] border-t border-b border-[#CBDDEB]">
            {faqData.faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="py-7"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] rounded-lg py-1 cursor-pointer"
                  >
                    <span className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] group-hover:text-[#617594] transition-colors leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#617594] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-4 text-[17px] sm:text-[18px] leading-[1.75] text-[#2A3F5B] font-normal max-w-[68ch]"
                      >
                        <p className="pb-2">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

