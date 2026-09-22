import { Language } from "../types";
import { en } from "./en";
import { id } from "./id";
import { zh } from "./zh";
import { es } from "./es";

export const translations = {
  en,
  id,
  zh,
  es,
};

export type TranslationSchema = typeof en;

// Helper to retrieve nested keys using dot notation like "hero.title"
export function getNestedTranslation(obj: any, path: string): string | undefined {
  const parts = path.split(".");
  let current: any = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

// Phrase dictionary for on-the-fly dynamic string translation across pages
export const PHRASE_DICTIONARY: Record<Language, Record<string, string>> = {
  en: {},
  id: {
    "Overview": "Ringkasan",
    "What We Build": "Solusi Kami",
    "How We Work": "Cara Kerja",
    "Why Droppfloww": "Mengapa Droppfloww",
    "Client Reviews": "Ulasan Klien",
    "Schedule a walkthrough": "Jadwalkan konsultasi",
    "Schedule an exploratory session": "Jadwalkan sesi eksplorasi",
    "Schedule an architectural review": "Jadwalkan review arsitektur",
    "Schedule a system scoping call": "Jadwalkan sesi scoping sistem",
    "Schedule an operational review with Kentley": "Jadwalkan review operasional bersama Kentley",
    "Discuss your operational bottlenecks": "Diskusikan hambatan operasional Anda",
    "Learn our consulting process": "Pelajari proses konsultasi kami",
    "Explore systems we build": "Jelajahi sistem yang kami bangun",
    "Explore all system architectures": "Jelajahi seluruh arsitektur sistem",
    "Read client case studies": "Baca studi kasus klien",
    "See case study implementations": "Lihat implementasi studi kasus",
    "Request a system consultation": "Minta konsultasi sistem",
    "Request a walkthrough of this architecture": "Minta penjelasan arsitektur ini",
    "Speak directly with our founder": "Bicara langsung dengan pendiri kami",
    "Verified Client Engagements": "Kemitraan Klien Terverifikasi",
    "All Industries": "Semua Industri",
    "Construction & Trade": "Konstruksi & Kontraktor",
    "Equipment & Rental": "Peralatan & Rental",
    "Professional Services": "Jasa Profesional",
    "Field Logistics": "Logistik & Lapangan",
    "Healthcare Ops": "Operasional Kesehatan",
    "Wholesale Distribution": "Distribusi Grosir",
    "Direct Founder Engineering": "Dikerjakan Langsung oleh Pendiri",
    "Zero Monthly Seat Penalties": "Tanpa Biaya Tambahan Per Karyawan",
    "100% Tailored to Your Workflows": "100% Sesuai Alur Kerja Anda",
    "Full IP Ownership": "100% Hak Milik Kode & Sistem",
    "Rapid 10-Day Prototype": "Prototipe Cepat 10 Hari Kerja",
    "Zero License Tax": "Bebas Biaya Lisensi Per Orang",
  },
  zh: {
    "Overview": "概览",
    "What We Build": "解决方案",
    "How We Work": "合作流程",
    "Why Droppfloww": "为什么选择我们",
    "Client Reviews": "客户案例与评价",
    "Schedule a walkthrough": "预约系统演示",
    "Schedule an exploratory session": "预约探索咨询",
    "Schedule an architectural review": "预约系统架构研讨",
    "Schedule a system scoping call": "预约系统需求评估会议",
    "Schedule an operational review with Kentley": "与创始人 Kentley 预约业务运营梳理",
    "Discuss your operational bottlenecks": "与我们探讨您的业务瓶颈",
    "Learn our consulting process": "了解我们的咨询交付流程",
    "Explore systems we build": "探索我们构建的系统",
    "Explore all system architectures": "浏览所有系统架构方案",
    "Read client case studies": "阅读客户真实案例",
    "See case study implementations": "查看案例系统落地效果",
    "Request a system consultation": "申请系统定制咨询",
    "Request a walkthrough of this architecture": "申请本架构详细解读",
    "Speak directly with our founder": "直接对接创始人",
    "Verified Client Engagements": "已验证真实客户案例",
    "All Industries": "全部行业",
    "Construction & Trade": "建筑与工程承包",
    "Equipment & Rental": "工程设备与租赁",
    "Professional Services": "专业服务机构",
    "Field Logistics": "外勤作业与物流",
    "Healthcare Ops": "医疗与健康管理",
    "Wholesale Distribution": "批发贸易与供应链",
    "Direct Founder Engineering": "创始人亲自操刀研发",
    "Zero Monthly Seat Penalties": "零按人头月租陷阱",
    "100% Tailored to Your Workflows": "100% 深度贴合自身流程",
    "Full IP Ownership": "100% 源码与知识产权归属",
    "Rapid 10-Day Prototype": "10个工作日快速原型",
    "Zero License Tax": "免除按人头授权费",
  },
  es: {
    "Overview": "Resumen",
    "What We Build": "Lo Que Construimos",
    "How We Work": "Cómo Trabajamos",
    "Why Droppfloww": "Por Qué Droppfloww",
    "Client Reviews": "Casos y Opiniones",
    "Schedule a walkthrough": "Agendar una demostración",
    "Schedule an exploratory session": "Agendar sesión exploratoria",
    "Schedule an architectural review": "Agendar revisión de arquitectura",
    "Schedule a system scoping call": "Agendar llamada de evaluación de sistema",
    "Schedule an operational review with Kentley": "Agendar revisión operativa con Kentley",
    "Discuss your operational bottlenecks": "Analice sus cuellos de botella operativos",
    "Learn our consulting process": "Conozca nuestro proceso de consultoría",
    "Explore systems we build": "Explorar sistemas que construimos",
    "Explore all system architectures": "Explorar todas las arquitecturas de sistemas",
    "Read client case studies": "Leer casos de estudio de clientes",
    "See case study implementations": "Ver implementaciones de casos de estudio",
    "Request a system consultation": "Solicitar consulta de sistemas",
    "Request a walkthrough of this architecture": "Solicitar recorrido por esta arquitectura",
    "Speak directly with our founder": "Hable directamente con el fundador",
    "Verified Client Engagements": "Compromisos de Clientes Verificados",
    "All Industries": "Todas las Industrias",
    "Construction & Trade": "Construcción y Contratistas",
    "Equipment & Rental": "Equipos y Alquiler",
    "Professional Services": "Servicios Profesionales",
    "Field Logistics": "Logística y Operaciones de Campo",
    "Healthcare Ops": "Operaciones Médicas y de Salud",
    "Wholesale Distribution": "Distribución Mayorista",
    "Direct Founder Engineering": "Ingeniería Directa con el Fundador",
    "Zero Monthly Seat Penalties": "Cero Cobros por Usuario Mensual",
    "100% Tailored to Your Workflows": "100% Adaptado a sus Procesos",
    "Full IP Ownership": "Propiedad Total del Código",
    "Rapid 10-Day Prototype": "Prototipo Rápido en 10 Días",
    "Zero License Tax": "Sin Impuestos de Licenciamiento",
  },
};
