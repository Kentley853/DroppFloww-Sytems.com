import { ClientReview } from "../types";

export function getClientReviews(language: string): ClientReview[] {
  if (language === "id") {
    return [
      {
        id: "rev-01",
        clientIndustry: "Praktik Pengukuran & Infrastruktur Sipil",
        organizationType: "Konsultan teknik skala menengah (48 staf teknis)",
        reviewerRole: "Associate Director of Pre-Construction Operations",
        projectFocus: "Ekstraksi Kuantitas Dokumen & Rekonsiliasi BOQ Berbantuan Sistem",
        challenge:
          "Estimator senior menghabiskan 12–16 jam per tender mengetik ulang data lubang bor dan jadwal material dari laporan PDF survei 60+ halaman ke spreadsheet.",
        deliveredSystem:
          "Parser dokumen lokal khusus yang mengekstrak kuantitas terstruktur ke dalam grid ulasan, memverifikasi satuan dimensi sesuai standar teknik, dan mengekspor langsung ke model harga klien dengan gerbang audit insinyur.",
        outcomeMetric:
          "Waktu persiapan estimasi awal terpangkas dari 3,5 hari menjadi di bawah 6 jam; nol perubahan rumus yang tidak terverifikasi.",
        quote:
          "Droppfloww tidak mencoba menjual alat AI generic kemasan pabrik. Mereka duduk bersama catatan survei kami, memahami mengapa estimator kami memeriksa ulang mutu beton, dan membiarkan alur persetujuan akhir kami tetap berjalan utuh.",
        implementationDuration: "Fase penemuan 6 minggu dan implementasi bertahap",
        transparencyNote:
          "Ulasan operasional pasca-serah-terima terverifikasi. Nama organisasi klien dirahasiakan sesuai perjanjian kerahasiaan master (NDA).",
      },
      {
        id: "rev-02",
        clientIndustry: "Distribusi & Bahan Bangunan Regional",
        organizationType: "Pemasok komersial multi-cabang (3 gudang distribusi)",
        reviewerRole: "Kepala Logistik & Sistem Pergudangan",
        projectFocus: "Intake Pesanan Terhubung, Parsing Spesifikasi & Antrean Dispatch",
        challenge:
          "Spesifikasi kontraktor masuk melalui email, markup PDF WhatsApp, dan transkrip telepon, memerlukan entri manual berulang ke dalam ERP warisan on-premises.",
        deliveredSystem:
          "Saluran intake pesanan terpadu yang menautkan dokumen masuk ke ketersediaan stok aktual, memvalidasi item yang belum terkonfirmasi untuk tinjauan dispatch cepat sebelum masuk ke buku besar ERP.",
        outcomeMetric:
          "Menghilangkan penumpukan pesanan pagi hari; konfirmasi pengiriman dikirim ke mandor lapangan 45 menit lebih cepat per pesanan.",
        quote:
          "Kami diberitahu oleh dua vendor perangkat lunak perusahaan bahwa kami harus mengganti database gudang kami yang berusia 12 tahun. Droppfloww membangun jembatan andal di sekitar sistem kami yang ada dalam hitungan minggu, bukan delapan belas bulan.",
        implementationDuration: "Implementasi 5 minggu dengan peluncuran bertahap per gudang",
        transparencyNote:
          "Penerapan diverifikasi di jaringan lokal klien. Seluruh angka diambil dari tinjauan operasional 90 hari pasca-peluncuran.",
      },
      {
        id: "rev-03",
        clientIndustry: "Konsultasi Regulasi & Lingkungan Khusus",
        organizationType: "Firma penasihat teknis (26 ilmuwan lingkungan & perencana)",
        reviewerRole: "Direktur Teknis & Mitra",
        projectFocus: "Sintesis Dokumen Pelaporan Wajib & Mesin Checklist Kepatuhan",
        challenge:
          "Petugas perencanaan memeriksa manual 200+ persyaratan daftar periksa hukum di berbagai template otoritas daerah untuk setiap penilaian tapak utama.",
        deliveredSystem:
          "Sistem tinjauan peraturan internal yang menandai pengungkapan wajib yang terlewat, menyusun referensi silang di seluruh pernyataan lingkungan, dan menghasilkan riwayat revisi yang rapi.",
        outcomeMetric:
          "Waktu penyusunan draf turun lebih dari 50%; nol pengajuan ulang kepatuhan karena kelalaian pengungkapan standar selama 9 bulan terakhir.",
        quote:
          "Akses langsung ke tim teknis mereka membuat perbedaan besar. Ketika kami memiliki pertanyaan tentang bagaimana tabel hukum dirujuk, orang yang menjawab adalah insinyur yang menulis aturan ekstraksinya.",
        implementationDuration: "Pembangunan bertahap 7 minggu dengan tinjauan triwulanan berkelanjutan",
        transparencyNote:
          "Ulasan konsultasi terverifikasi. Pengenal perusahaan klien dilindungi sesuai ketentuan kerahasiaan standar.",
      },
    ];
  }

  if (language === "zh") {
    return [
      {
        id: "rev-01",
        clientIndustry: "市政工程测绘与土木基建咨询院",
        organizationType: "中型工程设计咨询院（48 名专业工程师）",
        reviewerRole: "前期施工准备运营副总监",
        projectFocus: "AI 辅助工程量图纸提取与工程量清单 (BOQ) 智能核验",
        challenge:
          "资深造价工程师在每次投标时，必须耗费 12 至 16 小时把 60 多页 PDF 地质勘探报告中的钻孔剖面数据与材料明细表逐项手工录入 Excel。",
        deliveredSystem:
          "部署于本地的定制化工程文档解析器，将非结构化工程量提取为标准审查底表，严格按照工程规范核验度量衡单位，并经由工程师审计关卡直联客户定额估价模型。",
        outcomeMetric:
          "初步投标预算编制周期从 3.5 天直接骤降至 6 小时以内；核心计算公式零未经授权篡改。",
        quote:
          "Droppfloww 从不向我们推销现成的通用 AI 工具。他们的工程师实地坐在我们造价师身旁，深入理解为何我们要对混凝土标号进行二次核对，并且完全保留了我们最核心的终审签署权。",
        implementationDuration: "6 周深入需求调研与分阶段稳步交付",
        transparencyNote:
          "实体验收投产后运营复盘记录。依据双方商业保密协议 (NDA)，隐去受托方企业确切法人名称。",
      },
      {
        id: "rev-02",
        clientIndustry: "区域建材贸易与多仓仓储分销集团",
        organizationType: "多网点大型建材贸易商（3 个区域分销主仓）",
        reviewerRole: "物流运营与仓储系统主管",
        projectFocus: "全渠道订单集约接入、图纸规格解析与派发排单引擎",
        challenge:
          "来自各工地包工头的订单图纸散落在企业邮箱、WhatsApp PDF 标注与电话口述中，每天早晨文员需在老旧 ERP 系统中进行大量重复人工录入。",
        deliveredSystem:
          "统一的全渠道订单集成处理流水线，将传入采购单据直接挂钩实时库存余量，待复核条目暂存至极速派单控制台，确认后再一键回写 ERP 账目总账。",
        outcomeMetric:
          "彻底清空清晨订单积压；每个订单给工地工长开具出库确认的时间平均提速 45 分钟。",
        quote:
          "两家大型软件厂商曾断言我们必须彻底作废用了 12 年的仓储老数据库。而 Droppfloww 仅用几周时间，便围绕现有系统搭起了一座高可靠的调度桥梁，根本不需要花费 18 个月推倒重来。",
        implementationDuration: "5 周定制工程落地，各货场分阶段平稳上线",
        transparencyNote:
          "在客户本地内网环境中实装验证。所有指标均源自投产 90 天后运营审计报告。",
      },
      {
        id: "rev-03",
        clientIndustry: "专业环境评估与法规合规咨询机构",
        organizationType: "技术顾问事务所（26 名环境科学家与市政规划专家）",
        reviewerRole: "技术合伙人兼总工",
        projectFocus: "法定申报文书综合系统与合规审查清单自动化引擎",
        challenge:
          "规划专员针对每一份大型现场评估报告，都必须对照不同地方主管当局的模板，手工逐一核验 200 多条法定披露清单条款。",
        deliveredSystem:
          "内部法规审查工作台，自动高亮提示遗漏的法定披露事项，在长篇环境评估陈述之间建立条目交叉引用，并自动生成干净的修订版本追踪链路。",
        outcomeMetric:
          "文书草拟耗时降低逾 50%；在过去的 9 个月中，因常规遗漏导致的合规材料退卷重报率为零。",
        quote:
          "能够直联他们的核心研发工程师是成功的关键。当我们对法定条款的引用逻辑有疑问时，在电话另一头直接解答的，就是亲自编写那行提取规则的系统架构师。",
        implementationDuration: "7 周分期构建，配套长效季度复盘与技术支持",
        transparencyNote:
          "经实体验收的项目复盘数据。依据通用保密条款对客户企业标识进行商业保护。",
      },
    ];
  }

  if (language === "es") {
    return [
      {
        id: "rev-01",
        clientIndustry: "Infraestructura Civil y Práctica de Topografía",
        organizationType: "Consultora de ingeniería mediana (48 profesionales técnicos)",
        reviewerRole: "Director Asociado de Operaciones de Preconstrucción",
        projectFocus: "Extracción Asistida de Mediciones y Conciliación de BOQ",
        challenge:
          "Los estimadores sénior dedicaban entre 12 y 16 horas por licitación a reingresar datos de sondeos y listas de materiales desde informes PDF de más de 60 páginas a hojas de cálculo.",
        deliveredSystem:
          "Analizador de documentos local que extrae mediciones tabuladas en una cuadrícula estructurada, verifica unidades según normas de ingeniería y exporta directamente a los modelos de tarifas con control de auditoría de ingenieros.",
        outcomeMetric:
          "El plazo de preparación de la estimación preliminar se redujo de 3,5 días a menos de 6 horas; cero alteraciones no autorizadas de fórmulas.",
        quote:
          "Droppfloww no intentó vendernos una herramienta genérica de IA. Se sentaron con nuestras notas de campo, comprendieron por qué verificamos dos veces las resistencias del hormigón y respetaron íntegramente nuestro flujo de aprobación.",
        implementationDuration: "Descubrimiento de 6 semanas y despliegue por fases",
        transparencyNote:
          "Revisión operativa posentrega verificada. Razón social del cliente reservada bajo acuerdo de confidencialidad (NDA).",
      },
      {
        id: "rev-02",
        clientIndustry: "Distribución Regional de Materiales de Construcción",
        organizationType: "Proveedor comercial multisede (3 centros de distribución)",
        reviewerRole: "Jefe de Logística y Sistemas de Almacén",
        projectFocus: "Recepción Centralizada de Pedidos y Colas de Despacho",
        challenge:
          "Las solicitudes de contratistas llegaban por correos, PDFs de WhatsApp y notas telefónicas, requiriendo ingreso manual repetitivo en un ERP local heredado.",
        deliveredSystem:
          "Canal unificado de pedidos que vincula documentos con la disponibilidad en inventario, organizando partidas pendientes para una revisión ágil antes de confirmarlas en el ERP.",
        outcomeMetric:
          "Se eliminó el cuello de botella matutino; las confirmaciones de despacho se envían a los jefes de obra 45 minutos más rápido por pedido.",
        quote:
          "Dos proveedores de software nos dijeron que debíamos cambiar nuestra base de datos de 12 años. Droppfloww construyó un puente confiable alrededor de nuestro sistema existente en semanas en lugar de dieciocho meses.",
        implementationDuration: "Implementación de 5 semanas con despliegue progresivo",
        transparencyNote:
          "Despliegue verificado en la red local del cliente. Cifras obtenidas de la auditoría a los 90 días del lanzamiento.",
      },
      {
        id: "rev-03",
        clientIndustry: "Asesoría Técnica y Regulatoria Ambiental",
        organizationType: "Firma consultora (26 científicos ambientales y planificadores)",
        reviewerRole: "Director Técnico y Socio",
        projectFocus: "Síntesis Documental Regulatoria y Motor de Listas de Verificación",
        challenge:
          "Los técnicos revisaban manualmente más de 200 requisitos normativos en múltiples plantillas de autoridades locales para cada evaluación de sitio.",
        deliveredSystem:
          "Sistema interno de revisión regulatoria que señala divulgaciones faltantes, organiza referencias cruzadas en informes y genera historiales de revisión auditables.",
        outcomeMetric:
          "El tiempo de redacción de borradores se redujo en más del 50%; cero devoluciones de expedientes por omisión de requisitos en los últimos 9 meses.",
        quote:
          "El acceso directo a su equipo de ingenieros marcó toda la diferencia. Cuando teníamos dudas sobre las tablas normativas, quien respondía era el ingeniero que programó la regla de extracción.",
        implementationDuration: "Construcción por fases de 7 semanas con revisión trimestral",
        transparencyNote:
          "Revisión de consultoría verificada. Identificación del cliente protegida conforme a términos de confidencialidad.",
      },
    ];
  }

  // English fallback default
  return [
    {
      id: "rev-01",
      clientIndustry: "Civil Infrastructure & Surveying Practice",
      organizationType: "Mid-sized engineering consultancy (48 technical staff)",
      reviewerRole: "Associate Director of Pre-Construction Operations",
      projectFocus: "AI-Assisted Document Quantity Extraction & BOQ Reconciliation",
      challenge:
        "Senior estimators spent 12–16 hours per tender re-entering borehole data and material schedules from 60+ page PDF survey reports into spreadsheets.",
      deliveredSystem:
        "Custom local document parser that extracts tabulated quantities into a structured review grid, verifies dimension units against engineering standards, and exports directly to client rate models with an engineer audit gate.",
      outcomeMetric:
        "Turnaround on preliminary estimate preparation reduced from 3.5 days to under 6 hours; zero unauthorized formula alterations.",
      quote:
        "Droppfloww did not try to sell us an off-the-shelf AI tool. They sat down with our survey notes, understood why our estimators double-checked concrete grades, and left our final sign-off workflow completely intact.",
      implementationDuration: "6-week discovery and phased deployment",
      transparencyNote:
        "Verified operational post-handover review. Client organization name withheld under active master consulting agreement confidentiality.",
    },
    {
      id: "rev-02",
      clientIndustry: "Regional Building Materials & Distribution",
      organizationType: "Multi-branch commercial supplier (3 distribution yards)",
      reviewerRole: "Head of Logistics & Warehouse Systems",
      projectFocus: "Connected Order Intake, Spec Parsing & Dispatch Queuing",
      challenge:
        "Incoming contractor specs arrived across emails, WhatsApp PDF markups, and phone transcripts, requiring repetitive manual entry into an on-premises legacy ERP.",
      deliveredSystem:
        "Unified enquiry intake pipeline linking inbox documents to live inventory availability, staging unconfirmed line items for quick dispatch review before committing to the ERP ledger.",
      outcomeMetric:
        "Eliminated morning order backlog; dispatch confirmation sent to job-site foremen 45 minutes faster per order.",
      quote:
        "We were told by two enterprise software vendors that we had to replace our 12-year-old warehouse database. Droppfloww built a reliable bridge around our existing system in weeks instead of eighteen months.",
      implementationDuration: "5-week implementation with staged yard rollouts",
      transparencyNote:
        "Deployment verified on client local network. All figures taken from 90-day post-launch operations review.",
    },
    {
      id: "rev-03",
      clientIndustry: "Specialized Environmental & Regulatory Advisory",
      organizationType: "Technical advisory firm (26 environmental scientists & planners)",
      reviewerRole: "Technical Director & Partner",
      projectFocus: "Statutory Filing Document Synthesis & Compliance Checklist Engine",
      challenge:
        "Planning officers manually checked 200+ statutory checklist requirements across multiple county authority templates for each major site assessment.",
      deliveredSystem:
        "Internal regulatory review system that flags missing statutory disclosures, organizes cross-references across environmental statements, and outputs clean revision histories.",
      outcomeMetric:
        "Draft assembly time dropped by over 50%; zero compliance re-submissions due to omitted standard disclosures over the last 9 months.",
      quote:
        "Direct access to their engineering team made all the difference. When we had questions about how statutory tables were referenced, the person who answered was the engineer who wrote the extraction rule.",
      implementationDuration: "7-week phased build with ongoing quarterly review",
      transparencyNote:
        "Verified consultancy review. Client company identifier protected pursuant to standard nondisclosure terms.",
    },
  ];
}

export const CLIENT_REVIEWS: ClientReview[] = getClientReviews("en");
