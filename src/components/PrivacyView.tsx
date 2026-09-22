import React, { useMemo } from "react";
import { CONFIG } from "../config";
import { ArrowLeft } from "lucide-react";
import { DfLogo } from "./DfLogo";
import { useLanguage } from "../i18n/LanguageContext";

interface PrivacyViewProps {
  onBack: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onBack }) => {
  const { language } = useLanguage();

  const copy = useMemo(() => {
    const data: Record<
      string,
      {
        backBtn: string;
        badge: string;
        title: string;
        effective: string;
        domain: string;
        sec1Title: string;
        sec1Lead: string;
        sec1Items: string[];
        sec2Title: string;
        sec2Lead: string;
        sec2Items: string[];
        sec2Note: string;
        sec3Title: string;
        sec3Body: string;
        sec4Title: string;
        sec4Body: string;
        sec5Title: string;
        sec5Body: string;
        backBottom: string;
      }
    > = {
      en: {
        backBtn: "Back to main site",
        badge: "Information & Security",
        title: "Privacy Information",
        effective: "Effective Date",
        domain: "Domain",
        sec1Title: "1. What information we collect",
        sec1Lead:
          "We collect information directly provided when you request a workflow review through our website:",
        sec1Items: [
          "Your name and business email address.",
          "Your organization name (if optionally provided).",
          "The operational process description and pain points you submit for consulting review.",
        ],
        sec2Title: "2. How we use your information",
        sec2Lead: "We use this information exclusively for:",
        sec2Items: [
          "Evaluating initial technical feasibility of your operational workflow request.",
          "Responding directly with technical notes and discussing potential scoping.",
          "Communicating regarding scheduled review calls or agreed milestones.",
        ],
        sec2Note:
          "We do not sell, rent, or trade your contact details or process descriptions to any third-party marketing brokers.",
        sec3Title: "3. Web analytics & cookies",
        sec3Body:
          "By default, this website does not deploy invasive tracking cookies or cross-site advertising pixels. A lightweight, privacy-focused analytics adapter is integrated to measure aggregate interactions without collecting personal identifiers (PII).",
        sec4Title: "4. Server processing & transmission",
        sec4Body:
          "When submitted, your enquiry payload is validated by our server-side function. Form payloads are processed securely and never written to public client logs.",
        sec5Title: "5. Contacting us",
        sec5Body:
          "For inquiries regarding data retention, scope confidentiality, or to request deletion of previously submitted review inquiries, contact us directly via our published operational communication channels.",
        backBottom: "Back to Droppfloww Systems",
      },
      id: {
        backBtn: "Kembali ke beranda",
        badge: "Informasi & Keamanan",
        title: "Pemberitahuan Privasi",
        effective: "Tanggal Berlaku",
        domain: "Domain",
        sec1Title: "1. Data apa yang kami kumpulkan",
        sec1Lead:
          "Kami hanya mengumpulkan data yang Anda berikan secara langsung saat mengajukan tinjauan alur kerja:",
        sec1Items: [
          "Nama lengkap dan alamat email bisnis Anda.",
          "Nama perusahaan atau praktik (jika diisi).",
          "Deskripsi proses kerja dan kendala operasional yang ingin Anda konsultasikan.",
        ],
        sec2Title: "2. Bagaimana data digunakan",
        sec2Lead: "Kami menggunakan informasi ini hanya untuk:",
        sec2Items: [
          "Mengevaluasi kelayakan teknis awal atas permintaan alur operasional Anda.",
          "Membalas langsung dengan catatan teknis dan mendiskusikan lingkup proyek.",
          "Menghubungi Anda terkait jadwal konsultasi atau tonggak capaian yang disepakati.",
        ],
        sec2Note:
          "Kami tidak menjual, menyewakan, atau memperjualbelikan kontak maupun rahasia alur kerja Anda ke pihak broker pemasaran manapun.",
        sec3Title: "3. Analitik web & cookie",
        sec3Body:
          "Situs ini tidak memasang cookie pelacak invasif atau piksel iklan pihak ketiga. Kami hanya mengukur agregat interaksi navigasi tanpa mengambil data pengenal pribadi (PII).",
        sec4Title: "4. Pemrosesan & transmisi server",
        sec4Body:
          "Data formulir divalidasi dengan aman di sisi server dan tidak pernah diekspos ke log publik peramban pengguna.",
        sec5Title: "5. Menghubungi kami",
        sec5Body:
          "Untuk pertanyaan seputar retensi data, kerahasiaan NDA, atau permohonan penghapusan riwayat pengajuan, hubungi kami melalui saluran resmi Droppfloww.",
        backBottom: "Kembali ke Droppfloww Systems",
      },
      zh: {
        backBtn: "返回主站",
        badge: "信息与安全规范",
        title: "隐私政策声明",
        effective: "生效年份",
        domain: "运营域名",
        sec1Title: "1. 我们收集的信息类型",
        sec1Lead: "我们仅收集您在网站提交评估或预约演示时主动提供的信息：",
        sec1Items: [
          "您的真实姓名与工作电子邮箱。",
          "您所在的企业或机构名称（选填）。",
          "您提交的关于业务卡点、痛点环节与系统诉求的技术描述。",
        ],
        sec2Title: "2. 信息的具体用途",
        sec2Lead: "上述信息将严格且仅用于：",
        sec2Items: [
          "先期评估您提出的系统流程的技术实现可行性与研发路线。",
          "直接由创始人 Kentley 答复技术建议并与您探讨工程范围。",
          "就约定的在线演示时间与后续交付里程碑保持工作联系。",
        ],
        sec2Note: "我们绝不向任何第三方数据经纪商出售、出租或交易您的联系方式或商业机密。",
        sec3Title: "3. 网站分析与 Cookies 规范",
        sec3Body:
          "本网站绝不植入任何跨站广告追踪像素或侵入性 Cookie。仅集成轻量级指标监测，不记录个人身份标识符 (PII)。",
        sec4Title: "4. 服务器端安全传输与处理",
        sec4Body:
          "提交的所有数据均经由严密加密的服务器端校验转发，绝不在公开的前端控制台中泄露敏感负载。",
        sec5Title: "5. 隐私与数据权利咨询",
        sec5Body:
          "如需了解商业保密协议 (NDA)、请求彻底删除历史提交记录，请随时通过公布的官方渠道与我们直联。",
        backBottom: "返回 Droppfloww 官方网站",
      },
      es: {
        backBtn: "Volver al sitio principal",
        badge: "Información y Seguridad",
        title: "Aviso de Privacidad",
        effective: "Fecha de vigencia",
        domain: "Dominio",
        sec1Title: "1. Información que recopilamos",
        sec1Lead:
          "Recopilamos la información proporcionada directamente al solicitar una revisión de flujo de trabajo:",
        sec1Items: [
          "Su nombre y dirección de correo corporativo.",
          "El nombre de su empresa u organización (si se indica).",
          "La descripción de los procesos y cuellos de botella que envía para evaluación.",
        ],
        sec2Title: "2. Cómo utilizamos su información",
        sec2Lead: "Utilizamos esta información exclusivamente para:",
        sec2Items: [
          "Evaluar la viabilidad técnica inicial de sus requerimientos operativos.",
          "Responder directamente con notas técnicas y definir el alcance potencial.",
          "Comunicarnos respecto a llamadas de revisión agendadas o hitos del proyecto.",
        ],
        sec2Note:
          "No vendemos, alquilamos ni comercializamos sus datos de contacto ni detalles de procesos con terceros intermediarios.",
        sec3Title: "3. Analítica web y cookies",
        sec3Body:
          "Este sitio no emplea cookies de seguimiento invasivas ni píxeles publicitarios de terceros. Integramos una analítica ligera sin recopilar datos de identificación personal (PII).",
        sec4Title: "4. Procesamiento seguro en el servidor",
        sec4Body:
          "La información enviada se procesa de forma segura a través de nuestro backend y nunca se expone en registros públicos de clientes.",
        sec5Title: "5. Contacto sobre privacidad",
        sec5Body:
          "Para consultas sobre acuerdos de confidencialidad o para solicitar la eliminación de datos enviados previamente, contáctenos directamente a través de nuestros canales oficiales.",
        backBottom: "Volver a Droppfloww Systems",
      },
    };

    return data[language] || data.en;
  }, [language]);

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] py-12 md:py-20">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Brand Lockup & Back navigation */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            id="privacy-back-btn"
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#617594] hover:text-[#0B1728] p-1 focus:outline-none cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#617594]" />
            <span>{copy.backBtn}</span>
          </button>

          <DfLogo markSize={34} idPrefix="privacy" />
        </div>

        {/* Title & Metadata */}
        <div className="border-b border-[#CBDDEB] pb-8 mb-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[11px] sm:text-[12px] font-bold text-[#617594] uppercase tracking-[0.18em]">
              <span>{copy.badge}</span>
            </span>
          </div>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight mb-3">
            {copy.title}
          </h1>
          <p className="text-[15px] text-[#52667A] font-normal">
            {copy.effective}: {new Date().getFullYear()} • {copy.domain}: {CONFIG.WORKING_DOMAIN}
          </p>
        </div>

        {/* Editorial Body */}
        <div className="space-y-8 text-[15px] sm:text-[16px] leading-[1.75] text-[#475A70] font-normal">
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              {copy.sec1Title}
            </h2>
            <p className="mb-3">{copy.sec1Lead}</p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#0B1728] font-medium">
              {copy.sec1Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              {copy.sec2Title}
            </h2>
            <p className="mb-3">{copy.sec2Lead}</p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#0B1728] font-medium">
              {copy.sec2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">{copy.sec2Note}</p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              {copy.sec3Title}
            </h2>
            <p>{copy.sec3Body}</p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              {copy.sec4Title}
            </h2>
            <p>{copy.sec4Body}</p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              {copy.sec5Title}
            </h2>
            <p>{copy.sec5Body}</p>
          </section>
        </div>

        {/* Back Button Footer */}
        <div className="mt-12 pt-8 border-t border-[#CBDDEB]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center bg-[#617594] text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#50637F] transition-colors border border-[#617594] cursor-pointer shadow-xs"
          >
            {copy.backBottom}
          </button>
        </div>
      </div>
    </div>
  );
};
