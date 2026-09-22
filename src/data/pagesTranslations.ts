export interface WhatWeBuildCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  realWorldExample: string;
  stat: string;
}

export interface HowWeWorkPhase {
  step: string;
  title: string;
  timeline: string;
  summary: string;
  deliverables: string[];
}

export interface ComparisonRow {
  attribute: string;
  droppfloww: string;
  traditional: string;
  genericSaas: string;
}

export interface ScheduleDemoText {
  backToOverview: string;
  badge: string;
  title: string;
  desc: string;
  point1: string;
  point2: string;
  point3: string;
  helpTitle: string;
  helpDesc: string;
}

export function getWhatWeBuildCategories(language: string): WhatWeBuildCategory[] {
  if (language === "id") {
    return [
      {
        id: "operational-engines",
        title: "Mesin Operasional Khusus",
        tagline: "Satukan alur kerja terpecah yang tersebar di spreadsheet dan grup obrolan tim.",
        description:
          "Ketika bisnis berkembang melampaui 20 staf, spreadsheet mulai kewalahan. Status penting tenggelam di riwayat pesan, data ganda bermunculan, dan tim menghabiskan separuh minggu mencocokkan data alih-alih mengeksekusi pekerjaan. Kami membangun mesin operasional khusus yang mengonsolidasikan seluruh logika bisnis Anda ke dalam satu konsol web yang terpadu.",
        capabilities: [
          "Logika bisnis relasional khusus yang dipetakan persis dengan SOP operasional perusahaan.",
          "Hak akses multi-peran: dispatcher, kepala gudang, manajer keuangan, dan jajaran direksi.",
          "Papan status langsung pengganti kekacauan Google Sheets dan pembaruan WhatsApp terfragmentasi.",
          "Validasi otomatis mencegah kekeliruan administrasi sebelum data tersimpan.",
        ],
        realWorldExample:
          "Untuk perusahaan logistik regional, kami menggantikan 14 spreadsheet dengan mesin dispatch operasional yang memangkas waktu persiapan harian dari 4,5 jam menjadi 18 menit.",
        stat: "Pengurangan beban administrasi manual lebih dari 80%",
      },
      {
        id: "erp-connectors",
        title: "Integrasi ERP Warisan & Ekspedisi",
        tagline: "Hubungkan sistem software lama dengan API modern tanpa proyek perombakan mahal.",
        description:
          "Anda tidak perlu menghabiskan miliaran rupiah membongkar SAP, AS400, atau software akuntansi lama yang sudah stabil. Droppfloww membangun lapisan middleware tangguh dan konektor otomatis yang menstandarisasi serta memperbarui database inti secara real-time dengan antarmuka web modern bagi staf lapangan.",
        capabilities: [
          "Sinkronisasi dua arah dengan database warisan (SQL Server, Oracle, DB2, AS400).",
          "Webhooks otomatis dan pipa data real-time dengan antrean percobaan ulang.",
          "Konektor API pengiriman pihak ketiga, pelabuhan, bea cukai, dan pemasok.",
          "Nol gangguan terhadap sistem pencatatan utama yang sedang berjalan.",
        ],
        realWorldExample:
          "Membangun adapter polling AS400 untuk ekspedisi kargo yang secara otomatis mengekstrak manifes kontainer pagi hari dan mengirimkannya langsung ke ponsel pengemudi.",
        stat: "Penerapan tanpa henti (zero downtime) di atas backend warisan",
      },
      {
        id: "document-intelligence",
        title: "Parser Dokumen & Spesifikasi Teknis",
        tagline: "Ubah ratusan halaman PDF, gambar teknik, dan faktur menjadi database terstruktur.",
        description:
          "Tim teknik, legal, dan komersial bernilai tinggi membuang ribuan jam menyalin angka secara manual dari dokumen tender 200 halaman, gambar CAD, dan faktur vendor. Kami membangun mesin ekstraksi khusus yang membaca format multi-kolom rumit, memverifikasi rincian barang terhadap klausul kontrak, dan menandai selisih secara otomatis.",
        capabilities: [
          "Ekstraksi spesifikasi dimensi langsung dari gambar arsitektur dan CAD teknik sipil.",
          "Pencocokan silang otomatis dengan katalog harga pemasok aktif dan indeks material.",
          "Penguraian faktur komersial rumit dan pencocokan tiga arah (3-way match) terhadap PO.",
          "Jejak audit deterministik dengan penandaan halaman sumber terverifikasi untuk kepatuhan.",
        ],
        realWorldExample:
          "Perusahaan infrastruktur kini menyusun Bill of Quantities (BOQ) sipil dari spesifikasi struktural 500 halaman dalam 3,5 hari alih-alih 3 minggu.",
        stat: "Siklus estimasi tender 6,2x lebih cepat",
      },
      {
        id: "field-portals",
        title: "Konsol Lapangan & Portal Klien",
        tagline: "Alat web cepat dan sederhana yang dirancang untuk pekerja di proyek, armada, atau gudang.",
        description:
          "Pekerja garis depan enggan menggunakan software korporat yang rumit. Kami merancang aplikasi web ringan dengan kontras tinggi yang dioptimalkan untuk smartphone, tablet kerja, dan scanner gudang. Tanpa perlu unduh app store: memuat instan, cache offline, dan tombol sentuh besar untuk eksekusi cepat di lapangan.",
        capabilities: [
          "Web app mobile untuk pengemudi dan teknisi dengan presensi GPS dan penyimpanan offline.",
          "Bukti pengiriman (POD) foto satu ketukan dengan pengiriman email otomatis ke pelanggan.",
          "Portal pelacakan berjenjang untuk klien dengan tahapan langsung dan unduhan dokumen mandiri.",
          "Tampilan khusus peran yang menyembunyikan kerumitan teknis dari vendor eksternal.",
        ],
        realWorldExample:
          "Lebih dari 140 pengemudi truk komersial menggunakan konsol dispatch Droppfloww setiap hari untuk mengonfirmasi pengantaran kargo dengan satu ketukan pada koneksi 3G.",
        stat: "99,4% tingkat adopsi staf lapangan di minggu pertama",
      },
    ];
  }

  if (language === "zh") {
    return [
      {
        id: "operational-engines",
        title: "定制企业业务运营引擎",
        tagline: "彻底归集散落在电子表格和聊天群组中的碎片化业务流程。",
        description:
          "当企业规模突破 20 人，Excel 表格往往开始崩溃。关键进展沉底在聊天记录中，数字频繁重算，员工耗费半周核对表格而非推进实际业务。我们为您量身定制核心业务引擎，将企业独特的商业规则凝聚在清爽统一的 Web 控制台上。",
        capabilities: [
          "严格映射企业实操管理制度的关系型商业规则引擎。",
          "多角色细分权限：调度员、仓库主管、财务审核及高管驾驶舱。",
          "实时业务看板，全面取代繁杂的共享表格与碎片化即时沟通。",
          "内置前置自动校验机制，在记录入库前规避人为录入失误。",
        ],
        realWorldExample:
          "为一家区域干线物流企业替换了 14 张混乱的共享表格，每日排单调度耗时由 4.5 小时骤降至 18 分钟。",
        stat: "人工核对工作量降低 80% 以上",
      },
      {
        id: "erp-connectors",
        title: "旧版 ERP 与外部物流数据集成",
        tagline: "在不推倒重来已有资产的前提下，打通老旧主机系统与现代 API 接口。",
        description:
          "您无需耗费数百万推翻正在运行的 SAP、AS400 或传统财务数据库。Droppfloww 打造高可用中间件与自动化数据连接器，实时安全查询、标准化并更新核心库，同时为一线员工交付极速响应的现代 Web 交互界面。",
        capabilities: [
          "与老旧数据库（SQL Server、Oracle、DB2、AS400）实现双向同步。",
          "支持重试队列机制的自动化 Webhook 与实时事件流转通道。",
          "直连第三方航运船期、港口码头、海关通关与供应商 API。",
          "对底层核心记账数据库实现零业务中断、零停机平滑上线。",
        ],
        realWorldExample:
          "为货代企业部署 AS400 轮询连接器，每日清晨自动提取集装箱放箱单并实时推送到司机手机端。",
        stat: "老旧系统架构平滑叠加，业务零中断",
      },
      {
        id: "document-intelligence",
        title: "工程图纸与技术规范解析引擎",
        tagline: "将海量无结构 PDF、CAD 图纸和供应商单据秒级转化为结构化数据库。",
        description:
          "高薪的工程预算、法务合规及商务团队在繁冗的 200 页标书、工程图纸和发票中耗费大量重复手工抄录时间。我们构建专属提取引擎，解析复杂多列图纸与表格，对照合同规则严密核实细项，并自动标红偏差。",
        capabilities: [
          "从土木与建筑 CAD 图纸中精准提取几何尺度与工程量参数。",
          "自动关联实时物料价格库与行情指数进行动态单价核算。",
          "解析复杂商业发票并与采购订单及入库单进行三向交叉核对。",
          "全流程审计回溯机制，高亮标定源文件页码以供合规抽查。",
        ],
        realWorldExample:
          "某大型基础设施承包商现在从 500 页结构规范中自动生成工程量清单（BOQ）仅需 3.5 天，过去需要 3 周。",
        stat: "标书概算周期提速 6.2 倍",
      },
      {
        id: "field-portals",
        title: "一线移动作业台与客户门户",
        tagline: "专为施工工地、货车座舱和仓储装卸一线设计的极速轻量工具。",
        description:
          "一线作业人员抗拒繁琐的传统企业级软件。我们专为手机、三防平板和仓库手持扫码枪打造高对比度轻量 Web 应用。无需应用商店下载：瞬时加载、断网离线缓存、大尺寸触控按键，专为恶劣现场设计。",
        capabilities: [
          "适配司机与工程师的移动 Web 应用，支持 GPS 打卡与断网离线填报。",
          "单键拍照上传回单凭据（POD），自动触发客户邮件通知及签收状态变更。",
          "定制品牌专属的外部客户追踪门户，实时展示节点动态并支持文件自助下载。",
          "角色隔离视图，向外协单位与分包方隐藏内部核心管理机密。",
        ],
        realWorldExample:
          "140 多位货运卡车司机每天在 3G 弱网环境下通过 Droppfloww 移动控制台一键确认集装箱交付凭证。",
        stat: "首周一线人员实际上手使用率达到 99.4%",
      },
    ];
  }

  if (language === "es") {
    return [
      {
        id: "operational-engines",
        title: "Motores Operativos a Medida",
        tagline: "Centralice flujos fragmentados entre hojas de cálculo y grupos de mensajería.",
        description:
          "Cuando una empresa supera los 20 empleados, las hojas de cálculo colapsan. Los estados críticos se pierden en mensajes, se duplican registros y el equipo pasa la mitad de su jornada conciliando datos. Diseñamos motores operativos a medida que unifican su lógica de negocio en una consola web ágil y clara.",
        capabilities: [
          "Lógica de negocio relacional adaptada estrictamente a sus normas operativas.",
          "Permisos multinivel: despachadores, jefes de almacén, finanzas y dirección ejecutiva.",
          "Paneles de estado en tiempo real que eliminan la confusión de hojas compartidas.",
          "Validaciones automáticas que previenen errores administrativos antes del guardado.",
        ],
        realWorldExample:
          "Para un operador logístico, reemplazamos 14 hojas compartidas con un motor de despacho que redujo el tiempo diario de preparación de 4,5 horas a 18 minutos.",
        stat: "Reducción superior al 80% en carga administrativa manual",
      },
      {
        id: "erp-connectors",
        title: "Integración con ERPs Legados y Transportistas",
        tagline: "Conecte su software tradicional con APIs modernas sin costosas sustituciones completas.",
        description:
          "No necesita gastar presupuestos desorbitados en desechar su SAP, AS400 o sistema contable funcional. Droppfloww crea capas intermedias y conectores automatizados que sincronizan y normalizan sus bases de datos en tiempo real, exponiendo interfaces web modernas para su equipo.",
        capabilities: [
          "Sincronización bidireccional con bases de datos clásicas (SQL Server, Oracle, DB2, AS400).",
          "Webhooks automáticos y canalizaciones de eventos con cola de reintentos.",
          "Conectores de API con navieras, aduanas, puertos y proveedores de transporte.",
          "Cero interrupciones sobre sus sistemas de registro centrales.",
        ],
        realWorldExample:
          "Desarrollamos un adaptador de sondeo AS400 para un operador de carga que extrae manifiestos matutinos y los envía al teléfono de los conductores.",
        stat: "Despliegue con cero tiempo de inactividad sobre sistemas tradicionales",
      },
      {
        id: "document-intelligence",
        title: "Analizadores de Planos y Documentación Técnica",
        tagline: "Convierta cientos de PDFs, planos CAD y facturas en datos estructurados al instante.",
        description:
          "Los equipos de ingeniería, legal y licitaciones pierden cientos de horas transcribiendo cifras de pliegos de 200 páginas, planos CAD y facturas de proveedores. Construimos motores de extracción que interpretan formatos técnicos complejos, validan conceptos frente al contrato y alertan desvíos automáticamente.",
        capabilities: [
          "Extracción de medidas y cubicaciones de planos arquitectónicos y de ingeniería civil.",
          "Cruce automático con catálogos de precios de proveedores e índices de materiales.",
          "Procesamiento de facturas complejas y cotejo a tres bandas (3-way match) con órdenes de compra.",
          "Pistas de auditoría verificadas con resaltado de la página original para cumplimiento.",
        ],
        realWorldExample:
          "Una constructora de infraestructuras genera mediciones (BOQ) a partir de pliegos de 500 páginas en 3,5 días en lugar de 3 semanas.",
        stat: "Ciclos de estimación y oferta 6,2 veces más veloces",
      },
      {
        id: "field-portals",
        title: "Consolas Móviles de Campo y Portales de Clientes",
        tagline: "Herramientas web ligeras diseñadas para operarios en obra, camiones o almacenes.",
        description:
          "El personal operativo rechaza el software corporativo farragoso. Diseñamos aplicaciones web optimizadas para móviles, tablets de obra y terminales de almacén. Sin descargas de app store: carga inmediata, almacenamiento sin conexión y botones táctiles amplios.",
        capabilities: [
          "Aplicaciones web móviles para conductores y técnicos con registro GPS y modo sin conexión.",
          "Prueba de entrega con foto (POD) en un solo toque y envío automático por correo al cliente.",
          "Portales de seguimiento personalizados con hitos en vivo y descarga de albaranes.",
          "Vistas según perfil que ocultan la complejidad operativa interna a los proveedores externos.",
        ],
        realWorldExample:
          "Más de 140 transportistas utilizan a diario la consola de despacho de Droppfloww para confirmar entregas con un solo toque bajo cobertura 3G.",
        stat: "99,4% de adopción en campo durante la primera semana",
      },
    ];
  }

  // English default
  return [
    {
      id: "operational-engines",
      title: "Custom Operational Engines",
      tagline: "Centralize fragmented workflows that live across spreadsheets and team chats.",
      description:
        "When a business grows past 20 people, spreadsheets begin breaking down. Crucial statuses get lost in message threads, numbers are double-counted, and staff spend half their week maintaining trackers rather than executing work. We build tailored operational engines that consolidate your core business logic into a calm, single-source web console.",
      capabilities: [
        "Custom relational business logic mapped exactly to your company's operational rules.",
        "Multi-role permissions: dispatchers, warehouse leads, finance managers, and executives.",
        "Live status boards replacing chaotic Google Sheets and fragmented WhatsApp updates.",
        "Automatic validation checks preventing clerical mistakes before records are stored.",
      ],
      realWorldExample:
        "For a regional logistics company, we replaced 14 shared spreadsheets with an operational dispatch engine that cut daily dispatch prep from 4.5 hours to 18 minutes.",
      stat: "80%+ reduction in manual tracking overhead",
    },
    {
      id: "erp-connectors",
      title: "Legacy ERP & Carrier Integrations",
      tagline: "Bridge old mainframe software and modern APIs without expensive rip-and-replace projects.",
      description:
        "You don't need to spend millions ripping out your existing SAP, AS400, or legacy accounting systems. Droppfloww builds resilient middleware layers and automated connectors that safely query, normalize, and update your core databases in real time, exposing clean modern web interfaces for your frontline staff.",
      capabilities: [
        "Two-way synchronization with legacy databases (SQL Server, Oracle, DB2, AS400).",
        "Automated webhooks and real-time event pipelines with retry queues.",
        "Third-party shipping, port, customs, and supplier API connectors.",
        "Zero disruption to your underlying system of record.",
      ],
      realWorldExample:
        "Built an AS400 polling adapter for a freight provider that automatically extracts morning container manifests and pushes them to drivers' mobile phones.",
      stat: "Zero downtime deployment over legacy backends",
    },
    {
      id: "document-intelligence",
      title: "Document & Technical Spec Parsers",
      tagline: "Turn hundreds of unstructured PDFs, drawings, and invoices into structured databases.",
      description:
        "High-value engineering, legal, and commercial teams waste thousands of hours manually copying numbers out of 200-page tender documents, CAD drawings, and supplier invoices. We build custom extraction engines that read complex multi-column formats, verify line items against contract rules, and flag variances automatically.",
      capabilities: [
        "Extraction of dimensional specifications from architectural and civil CAD drawings.",
        "Automated cross-referencing against live supplier price catalogs and material indices.",
        "Complex commercial invoice parsing and three-way matching against purchase orders.",
        "Deterministic audit trails with verified source-page highlighting for compliance.",
      ],
      realWorldExample:
        "An infrastructure firm now generates civil Bill of Quantities (BOQs) from 500-page structural specifications in 3.5 days instead of 3 weeks.",
      stat: "6.2x faster tender estimation cycles",
    },
    {
      id: "field-portals",
      title: "Frontline Mobile Consoles & Client Portals",
      tagline: "Fast, simple web tools designed for workers on site, in trucks, or in the warehouse.",
      description:
        "Frontline workers reject complicated corporate software. We design lightweight, high-contrast web applications optimized for mobile phones, rugged tablets, and warehouse scanners. No app store downloads required: instant loading, offline caching, and large touch targets designed for fast field execution.",
      capabilities: [
        "Driver and technician mobile web apps with GPS check-ins and offline caching.",
        "One-tap photo proof-of-delivery (POD) capture with automatic customer email dispatch.",
        "Dedicated, branded client tracking portals with live milestones and self-serve documents.",
        "Role-specific views hiding technical complexity from external vendors.",
      ],
      realWorldExample:
        "Over 140 commercial truck drivers use Droppfloww's mobile dispatch interface daily to confirm cargo deliveries with one tap on 3G connections.",
      stat: "99.4% first-week frontline adoption rate",
    },
  ];
}

export function getScheduleDemoText(language: string): ScheduleDemoText {
  if (language === "id") {
    return {
      backToOverview: "Kembali ke Beranda",
      badge: "Konsultasi Langsung & Pemetaan Rekayasa",
      title: "Jadwalkan demonstrasi sistem operasional.",
      desc: "Tanpa presentasi penjualan klise. Anda akan berbicara langsung dengan Founder & CEO Kentley untuk menganalisis hambatan operasional tim Anda, mengevaluasi software saat ini, dan memastikan kelayakan ekonomi sistem baru.",
      point1: "30 menit tinjauan terstruktur",
      point2: "Kerahasiaan data terjamin ketat",
      point3: "Penilaian teknis langsung",
      helpTitle: "Butuh bantuan segera atau memiliki berkas alur kerja rahasia?",
      helpDesc: "Anda dapat terhubung langsung dengan pendiri kami melalui WhatsApp atau email aman.",
    };
  }
  if (language === "zh") {
    return {
      backToOverview: "返回总览首页",
      badge: "直联技术诊断与工程排期评估",
      title: "预约业务系统操作拆解演示。",
      desc: "没有销售套话，无需繁复 PPT。您将直接与创始人兼 CEO Kentley 对话，深入剖析贵司当下的业务瓶颈，评估已有系统，并论证定制研发的投资回报比。",
      point1: "30 分钟紧凑结构化复盘",
      point2: "严格的技术保密协议",
      point3: "现场给出工程可行性评定",
      helpTitle: "需要紧急技术协助或希望当面探讨涉密业务底稿？",
      helpDesc: "欢迎通过 WhatsApp 或加密邮件直接与创始人建立联系。",
    };
  }
  if (language === "es") {
    return {
      backToOverview: "Volver al Inicio",
      badge: "Diagnóstico Directo y Alcance de Ingeniería",
      title: "Agende una demostración operativa.",
      desc: "Sin discursos de ventas ni presentaciones genéricas. Hablará directamente con el Fundador y CEO Kentley para analizar sus cuellos de botella actuales, revisar su software y evaluar la viabilidad de un sistema a medida.",
      point1: "Sesión estructurada de 30 minutos",
      point2: "Confidencialidad rigurosa del alcance",
      point3: "Evaluación técnica inmediata",
      helpTitle: "¿Necesita asistencia inmediata o tiene documentación confidencial?",
      helpDesc: "Puede comunicarse directamente con nuestro fundador vía WhatsApp o correo seguro.",
    };
  }
  return {
    backToOverview: "Back to Overview",
    badge: "Direct Discovery & Engineering Scoping",
    title: "Schedule an operational walkthrough.",
    desc: "No sales pitches, no slide decks. You will speak directly with Founder & CEO Kentley to analyze your current operational bottlenecks, review existing software, and evaluate whether a custom system makes economic sense.",
    point1: "30-minute structured review",
    point2: "Strict scope confidentiality",
    point3: "Immediate technical assessment",
    helpTitle: "Need immediate assistance or have sensitive workflow files?",
    helpDesc: "You can connect directly with our founder via WhatsApp or secure email.",
  };
}

export interface HowWeWorkData {
  badge: string;
  title: string;
  desc: string;
  ctaSchedule: string;
  ctaSystems: string;
  phasesTitle: string;
  phasesSubtitle: string;
  phases: HowWeWorkPhase[];
  principlesTitle: string;
  principlesSubtitle: string;
  principles: { title: string; description: string }[];
  bottomTitle: string;
  bottomDesc: string;
  bottomCta: string;
}

export function getHowWeWorkContent(language: string): HowWeWorkData {
  if (language === "id") {
    return {
      badge: "Metodologi Rekayasa",
      title: "Pahami dahulu. Bangun kemudian. Tanpa kotak hitam.",
      desc: "Kami memperlakukan konsultasi seperti rekayasa software dengan keandalan tinggi. Kami tidak sekadar memberikan slide presentasi lalu pergi; kami merancang, membangun, menguji, dan menerapkan software khusus yang menyelesaikan kemacetan operasional nyata tim Anda.",
      ctaSchedule: "Jadwalkan tinjauan operasional",
      ctaSystems: "Jelajahi arsitektur sistem",
      phasesTitle: "Empat tahap dari diagnosa hingga peluncuran produksi.",
      phasesSubtitle: "Kami bekerja dalam sprint yang terstruktur ketat dengan capaian kerja yang dapat Anda uji langsung di setiap tahapnya.",
      phases: [
        {
          step: "01",
          title: "Diagnosa Operasional & Pemetaan Hambatan",
          timeline: "Minggu 1",
          summary: "Kami mengamati bagaimana tim Anda benar-benar bekerja di lapangan—bukan sekadar manual SOP di atas kertas. Kami mendampingi dispatcher, estimator, atau staf keuangan untuk memetakan titik gesekan yang berulang.",
          deliverables: [
            "Peta alur kerja operasional menyeluruh dengan sorotan titik hambatan klerikal.",
            "Audit integrasi teknis ERP yang ada, database, dan perangkat pihak ketiga.",
            "Spesifikasi teknis konkret dan batasan arsitektur dengan capaian bertahap pasti.",
          ],
        },
        {
          step: "02",
          title: "Prototipe Fungsional Cepat & Pengujian Alur",
          timeline: "Minggu 2 – 3",
          summary: "Dalam sepuluh hari kerja, kami menyerahkan prototipe software aktif yang dapat diklik dan terisi dengan data historis Anda yang sebenarnya. Tim operasional Anda mengujinya langsung sebelum kode produksi dikunci.",
          deliverables: [
            "Konsol web prototipe aktif yang terhubung dengan sampel catatan operasional riil.",
            "Siklus umpan balik staf garis depan untuk menjamin tingkat adopsi yang tinggi.",
            "Penanganan skenario ekstrem tervalidasi (koneksi putus, format tak terduga, pesanan parsial).",
          ],
        },
        {
          step: "03",
          title: "Rekayasa Produksi & Integrasi Mendalam",
          timeline: "Minggu 4 – 6",
          summary: "Kami membangun sistem produksi lengkap dalam TypeScript modern. Kami mengonfigurasi konektor database dua arah, parsing otomatis, hak akses keamanan berjenjang, dan antrean pengecualian tanpa downtime.",
          deliverables: [
            "Microservices backend dan konektor database siap produksi.",
            "Konsol web modern dan antarmuka mobile berkecepatan tinggi bagi staf lapangan.",
            "Pengujian unit otomatis, verifikasi API menyeluruh, dan penguatan keamanan.",
          ],
        },
        {
          step: "04",
          title: "Peluncuran, Pelatihan Lapangan & Evolusi",
          timeline: "Minggu 7 Seterusnya",
          summary: "Kami mengawal masa transisi live berdampingan dengan tim Anda. Kami melatih staf Anda, memantau log pengecualian real-time, dan menyediakan dukungan rekayasa berkesinambungan saat volume transaksi Anda berkembang.",
          deliverables: [
            "Sesi pelatihan langsung dan video panduan bagi manajer serta staf lapangan.",
            "Dokumentasi teknis lengkap, skema arsitektur sistem, dan buku panduan operasional.",
            "Dukungan pemantauan proaktif, perbaikan bug, dan pembaruan fitur berkelanjutan.",
          ],
        },
      ],
      principlesTitle: "Prinsip rekayasa Droppfloww.",
      principlesSubtitle: "Standar yang kami pegang teguh di setiap proyek.",
      principles: [
        {
          title: "100% Kepemilikan Kode & Kekayaan Intelektual",
          description: "Anda memiliki seluruh kode sumber, skema database, dan kekayaan intelektual sejak hari pertama. Jika Anda merekrut tim teknis internal, mereka menerima repositori TypeScript bersih tanpa ikatan vendor tertutup.",
        },
        {
          title: "Akses Langsung ke Para Insinyur",
          description: "Anda tidak pernah berbicara melalui perantara non-teknis atau koordinator junior. Anda berkomunikasi langsung dengan insinyur yang membangun sistem Anda, menjamin iterasi cepat tanpa kehilangan konteks.",
        },
        {
          title: "Capaian Pasti & Disiplin Ruang Lingkup",
          description: "Kami tidak menerapkan penagihan tarif per jam yang justru menguntungkan konsultan jika bekerja lebih lama. Kami menentukan ruang lingkup proyek dengan hasil teknis nyata dan harga tetap bertahap.",
        },
        {
          title: "Nol Gangguan Terhadap Alat Kerja Lama",
          description: "Kami tidak menuntut Anda mengganti ERP warisan, software akuntansi, atau database pelanggan yang sudah berjalan. Kami membangun jembatan di sekelilingnya sehingga tim dapat modernisasi bertahap.",
        },
      ],
      bottomTitle: "Siap membangun sistem operasional pertama Anda?",
      bottomDesc: "Mulai dengan diskusi teknis 30 menit. Kami akan mengkaji alur kerja Anda dan memberikan evaluasi kelayakan secara langsung.",
      bottomCta: "Jadwalkan sesi diagnostik",
    };
  }

  if (language === "zh") {
    return {
      badge: "工程落地方法论",
      title: "先深入剖析，再精准编码。绝无暗箱操作。",
      desc: "我们将管理咨询视同高可用软件工程。我们绝不向您扔下一叠 PPT 报告就抽身离场；我们为您现场设计、编码、测试并上线定制软件，切切实实消除一线团队的业务瓶颈。",
      ctaSchedule: "预约业务架构诊断",
      ctaSystems: "浏览核心系统架构",
      phasesTitle: "从痛点诊断到生产环境平滑上线的四大阶段。",
      phasesSubtitle: "我们按严密的敏捷周期交付，每一阶段您都能在真实业务场景中直观体验并检验成果。",
      phases: [
        {
          step: "01",
          title: "业务痛点现场诊断与流程断点测绘",
          timeline: "第 1 周",
          summary: "我们深入一线，观察您团队每天真实的操作手法——而不是停留在管理手册上的理论流程。我们陪同调度员、算量员或财务骨干，测算具体敲键动作，精准锁定频繁卡顿的环节。",
          deliverables: [
            "覆盖端到端操作流的业务拓扑图，高亮标注所有繁琐人工搬运环节。",
            "对企业既有 ERP、核心数据库与外部三方系统的技术连通性审查报告。",
            "具备明确里程碑的刚性技术规格书与实施架构设计图。",
          ],
        },
        {
          step: "02",
          title: "高保真功能原型与业务场景验证",
          timeline: "第 2 – 3 周",
          summary: "在 10 个工作日内，我们交付一套可交互、可真实点击并灌入贵司历史真实业务数据的原型。业务团队直接在实操中上手体验，在正式封版前解决所有别扭细节与边缘场景。",
          deliverables: [
            "直连样本业务记录的可交互原型控制台。",
            "一线关键员工面对面反馈迭代闭环，确保系统高采纳率。",
            "弱网断点、异常单据格式、部分拆单等边缘场景的工程预案验证。",
          ],
        },
        {
          step: "03",
          title: "生产级系统编码与深度集成",
          timeline: "第 4 – 6 周",
          summary: "我们采用现代 TypeScript 编写完整的生产级系统。配置双向数据库连接器、自动化解析流水线、基于角色的权限安全体系及全自动异常容灾队列，对当前业务实现零中断切换。",
          deliverables: [
            "高可用的生产级后端微服务与数据库适配器。",
            "面向一线员工的高对比度极速响应 Web 与移动作业台。",
            "自动化单元测试、API 链路全自动化验证及企业级安全加固。",
          ],
        },
        {
          step: "04",
          title: "全量投产上线、一线实操培训与持续演进",
          timeline: "第 7 周及以后",
          summary: "我们与您的团队并肩坐在一起现场见证业务切流。我们培训员工，实时监控异常报警日志，并在贵司业务单量持续激增时提供坚实的后端工程守护。",
          deliverables: [
            "面向管理层与一线用户的现场与视频操作实训。",
            "完备的系统开发文档、底层架构拓扑图及生产运维手册。",
            "主动健康巡检、持续缺陷修复与新业务模块演进保障支持。",
          ],
        },
      ],
      principlesTitle: "Droppfloww 坚守的工程原则。",
      principlesSubtitle: "我们在每一个落地项目中恪守的标准与承诺。",
      principles: [
        {
          title: "100% 源码与知识产权全资归属",
          description: "从项目第一天起，所有源代码、数据库设计与知识产权均完全归贵司所有。即使您未来组建自研技术团队，接收的也是规范纯净、无任何闭源绑定的 TypeScript 仓库。",
        },
        {
          title: "直面研发工程师，绝无传话中间人",
          description: "您永远不会面对不懂技术的话术客服或初级销售。您直接与为您编写代码的核心工程师沟通，确保业务意图毫秒级传达，零信息失真。",
        },
        {
          title: "固定里程碑交付与严谨排期",
          description: "我们拒绝无休止的按人天工时计费模式——那种模式本质上是在奖励拖延。我们以确定性的技术交付物和固定节点定价与您携手共赢。",
        },
        {
          title: "绝不强行推翻既有资产",
          description: "我们不要求您拆除已稳定运行的旧版 ERP、财务软件或客户底库。我们在其外部修筑坚固的高速连接桥梁，让系统平稳实现渐进式现代化升级。",
        },
      ],
      bottomTitle: "准备好定制属于您企业的专属业务引擎了吗？",
      bottomDesc: "只需 30 分钟技术诊断交流。我们将现场剖析贵司业务流程，并给出切实的工程可行性落地建议。",
      bottomCta: "预约工程诊断沟通",
    };
  }

  if (language === "es") {
    return {
      badge: "Metodología de Ingeniería",
      title: "Entender primero. Construir después. Sin cajas negras.",
      desc: "Afrontamos la consultoría como ingeniería de software de alta fiabilidad. No entregamos una presentación para luego desentendernos; diseñamos, programamos, probamos y desplegamos software a medida que resuelve cuellos de botella reales.",
      ctaSchedule: "Agendar revisión operativa",
      ctaSystems: "Ver arquitecturas de sistemas",
      phasesTitle: "Cuatro etapas desde el diagnóstico hasta el despliegue en producción.",
      phasesSubtitle: "Trabajamos en ciclos estructurados con entregables tangibles que su equipo puede validar directamente en cada paso.",
      phases: [
        {
          step: "01",
          title: "Diagnóstico Operativo y Mapeo de Cuellos de Botella",
          timeline: "Semana 1",
          summary: "Observamos cómo trabaja su equipo en la práctica, no sobre el papel. Acompañamos a despachadores, calculistas o finanzas para registrar cada paso y detectar fricciones recurrentes.",
          deliverables: [
            "Mapa operativo de extremo a extremo identificando cuellos de botella administrativos.",
            "Auditoría técnica de integración de ERPs, bases de datos y herramientas de terceros.",
            "Especificación técnica rigurosa y arquitectura con hitos cerrados.",
          ],
        },
        {
          step: "02",
          title: "Prototipo Funcional Rápido y Pruebas Reales",
          timeline: "Semanas 2 – 3",
          summary: "En diez días laborables entregamos un prototipo interactivo poblado con sus datos históricos reales. El equipo operativo lo prueba directamente para validar el flujo antes de consolidar el código.",
          deliverables: [
            "Consola web interactiva conectada a registros operativos de muestra.",
            "Bucles de retroalimentación directa con operarios para asegurar máxima adopción.",
            "Casos límite validados (caídas de red, formatos inesperados, pedidos fraccionados).",
          ],
        },
        {
          step: "03",
          title: "Ingeniería de Producción e Integración Profunda",
          timeline: "Semanas 4 – 6",
          summary: "Desarrollamos el sistema de producción completo en TypeScript moderno. Configuramos sincronizaciones bidireccionales, procesamiento automático, seguridad por roles y colas tolerantes a fallos sin tiempos de inactividad.",
          deliverables: [
            "Microservicios de backend y conectores de bases de datos listos para producción.",
            "Consola web moderna y ágil junto con interfaces móviles para el personal de campo.",
            "Pruebas automáticas, verificación completa de APIs y endurecimiento de seguridad.",
          ],
        },
        {
          step: "04",
          title: "Puesta en Marcha, Formación y Evolución Continua",
          timeline: "Semana 7 en adelante",
          summary: "Acompañamos la transición en vivo codo a codo con su personal. Capacitamos a su equipo, monitorizamos incidencias en tiempo real y ofrecemos soporte de ingeniería conforme su volumen crece.",
          deliverables: [
            "Sesiones de formación presenciales y grabadas para responsables y operarios.",
            "Documentación técnica exhaustiva, diagramas arquitectónicos y manuales de uso.",
            "Supervisión proactiva, resolución de incidencias y evolución continua del sistema.",
          ],
        },
      ],
      principlesTitle: "Nuestros principios de ingeniería.",
      principlesSubtitle: "Estándares que aplicamos rigurosamente en cada proyecto.",
      principles: [
        {
          title: "100% Propiedad del Código y la Propiedad Intelectual",
          description: "Usted es el único dueño del código fuente, esquemas de bases de datos y propiedad intelectual. Si contrata desarrolladores internos, recibirán un repositorio TypeScript limpio y sin dependencias propietarias.",
        },
        {
          title: "Trato Directo con los Desarrolladores",
          description: "Nunca hablará con gestores de cuentas comerciales. Se comunica directamente con los ingenieros que programan su sistema, logrando respuestas rápidas y cero pérdidas de contexto.",
        },
        {
          title: "Hitos Cerrados y Alcance Riguroso",
          description: "No creemos en la facturación por horas indefinidas que premia la lentitud. Delimitamos proyectos con entregables medibles y precios cerrados por hitos.",
        },
        {
          title: "Cero Disrupción de sus Herramientas Actuales",
          description: "No exigimos desmantelar su ERP actual ni bases de datos consolidadas. Construimos puentes a su alrededor, facilitando una modernización progresiva y sin sobresaltos.",
        },
      ],
      bottomTitle: "¿Preparado para crear su primer sistema a medida?",
      bottomDesc: "Comience con una consulta técnica de 30 minutos. Analizaremos su operativa y ofreceremos una evaluación directa de viabilidad.",
      bottomCta: "Agendar sesión de diagnóstico",
    };
  }

  // English default
  return {
    badge: "Engineering Methodology",
    title: "Understand first. Build second. No black boxes.",
    desc: "We approach consulting like high-reliability software engineering. We don't hand you a slide deck and walk away; we design, build, test, and deploy custom software that solves your team's real operational bottlenecks.",
    ctaSchedule: "Schedule an operational walkthrough",
    ctaSystems: "Explore system architectures",
    phasesTitle: "Four phases from diagnostic to live production.",
    phasesSubtitle: "We work in structured sprints with tangible deliverables you can test at every single stage.",
    phases: [
      {
        step: "01",
        title: "Operational Diagnostic & Bottleneck Mapping",
        timeline: "Week 1",
        summary: "We spend time observing how your team actually works—not how an executive manual says they work. We shadow dispatchers, estimators, or finance leads, map their exact keystrokes, and identify the repetitive friction points.",
        deliverables: [
          "End-to-end operational workflow map highlighting manual clerical bottlenecks.",
          "Technical integration audit of existing ERPs, databases, and third-party tools.",
          "Concrete technical specification and architectural scope with fixed milestones.",
        ],
      },
      {
        step: "02",
        title: "Rapid Functional Prototype & Workflow Testing",
        timeline: "Weeks 2 – 3",
        summary: "Within ten business days, we deliver a working, clickable software prototype populated with your actual historical data. Your operational team tests the interface directly, providing feedback on friction and edge cases before production code is locked in.",
        deliverables: [
          "Working prototype web console connected to sample operational records.",
          "Direct frontline feedback loops ensuring high user adoption.",
          "Validated edge case handling (e.g. network drops, unexpected formats, partial orders).",
        ],
      },
      {
        step: "03",
        title: "Production Engineering & Deep Integration",
        timeline: "Weeks 4 – 6",
        summary: "We build the complete production system in modern TypeScript. We configure bidirectional database connectors, automated parsing routines, role-based security access, and fail-safe exception queues with zero downtime to your existing operations.",
        deliverables: [
          "Production-ready backend microservices and database connectors.",
          "Modern, fast web console and mobile interfaces for frontline staff.",
          "Automated unit testing, end-to-end API verification, and security hardening.",
        ],
      },
      {
        step: "04",
        title: "Deployment, Frontline Training & Evolution",
        timeline: "Week 7 Onward",
        summary: "We supervise live system cutover side-by-side with your team. We train your staff, monitor real-time exception logs, and provide dedicated engineering support as your transaction volume expands.",
        deliverables: [
          "On-site and live video training sessions for managers and frontline users.",
          "Complete technical documentation, architecture schematics, and runbooks.",
          "Ongoing proactive monitoring, bug fixes, and feature evolution retainer.",
        ],
      },
    ],
    principlesTitle: "Droppfloww studio principles.",
    principlesSubtitle: "The standards we uphold across every single project.",
    principles: [
      {
        title: "100% Code & IP Ownership",
        description: "You own all source code, database schemas, and intellectual property from day one. If you ever hire in-house engineers, they receive a clean, well-documented TypeScript repository with zero proprietary vendor lock-in.",
      },
      {
        title: "Direct Access to Engineers",
        description: "You never speak through non-technical account managers or junior coordinators. You communicate directly with the engineers building your software, ensuring fast iterations and zero lost context.",
      },
      {
        title: "Fixed Milestones & Scope Rigor",
        description: "We do not believe in open-ended hourly billing that rewards consultants for taking longer. We scope projects with clear technical deliverables and fixed milestone pricing.",
      },
      {
        title: "Zero Disruption to Existing Tools",
        description: "We don't demand that you replace your legacy ERP, accounting software, or customer database. We build bridges around them, allowing your team to modernize incrementally without operational panic.",
      },
    ],
    bottomTitle: "Ready to engineer your first operational system?",
    bottomDesc: "Start with a 30-minute discovery call. We will review your current workflow and provide an honest assessment of feasibility.",
    bottomCta: "Schedule an operational review",
  };
}

export interface WhyDroppflowwData {
  badge: string;
  title: string;
  desc: string;
  ctaSchedule: string;
  ctaHowWeWork: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  tableHeaderDroppfloww: string;
  tableHeaderTraditional: string;
  tableHeaderSaas: string;
  comparisons: ComparisonRow[];
  founderBadge: string;
  founderQuote: string;
  founderBio: string;
  founderRole: string;
  founderName: string;
  bottomTitle: string;
  bottomDesc: string;
  bottomCta: string;
}

export function getWhyDroppflowwContent(language: string): WhyDroppflowwData {
  if (language === "id") {
    return {
      badge: "Filosofi & Keunggulan Studio",
      title: "Anda bekerja langsung dengan insinyur yang membangun sistem Anda.",
      desc: "Droppfloww adalah studio teknologi butik yang didirikan atas satu keyakinan: bisnis yang sedang tumbuh tidak membutuhkan langganan SaaS kaku berikutnya atau barisan konsultan junior. Mereka membutuhkan software operasional khusus yang dibangun oleh para insinyur yang memahami bisnis riil.",
      ctaSchedule: "Jadwalkan tinjauan operasional",
      ctaHowWeWork: "Pelajari cara kami bekerja",
      comparisonTitle: "Perbandingan pendekatan: Droppfloww vs. Alternatif Lain.",
      comparisonSubtitle: "Bagaimana cara kerja studio rekayasa langsung kami jika dibandingkan dengan konsultan tradisional dan platform SaaS siap pakai.",
      tableHeaderDroppfloww: "Studio Rekayasa Droppfloww",
      tableHeaderTraditional: "Konsultan Manajemen Tradisional",
      tableHeaderSaas: "SaaS Siap Pakai Umum",
      comparisons: [
        {
          attribute: "Komposisi Tim",
          droppfloww: "Insinyur software senior & arsitek sistem langsung menangani proyek Anda.",
          traditional: "Partner senior menjual proyek; staf junior yang mengeksekusi kode.",
          genericSaas: "Tanpa tim kustom; Anda yang harus menyesuaikan bisnis ke software kaku.",
        },
        {
          attribute: "Waktu Pengerjaan",
          droppfloww: "Prototipe aktif dalam 10 hari kerja. Penerapan produksi dalam 4–6 minggu.",
          traditional: "6–12 bulan pengumpulan dokumen kebutuhan awal dan presentasi.",
          genericSaas: "Daftar instan, namun butuh 6+ bulan kustomisasi berbelit dan plugin rentan rusak.",
        },
        {
          attribute: "Kepemilikan Kode & HKI",
          droppfloww: "100% kepemilikan kode sumber penuh. TypeScript bersih, hosting cloud standar.",
          traditional: "Seringkali terikat framework berbayar tertutup dengan biaya lisensi tahunan.",
          genericSaas: "Nol kepemilikan. Jika Anda berhenti berlangganan bulanan, alat dan data hilang.",
        },
        {
          attribute: "Pendekatan Integrasi",
          droppfloww: "Direkayasa khusus menghubungkan software lama tanpa merombak total.",
          traditional: "Sering menuntut pembongkaran sistem lama demi ERP baru berbiaya miliaran rupiah.",
          genericSaas: "Terbatas pada plugin pasar yang didukung; kasus khusus tidak dapat ditangani.",
        },
        {
          attribute: "Struktur Biaya",
          droppfloww: "Harga tetap per capaian transparan sesuai hasil sistem yang diserahkan.",
          traditional: "Tarif jam terbuka yang menguntungkan konsultan jika pengerjaan berlarut-larut.",
          genericSaas: "Biaya langganan per pengguna bulanan yang menghukum pertumbuhan perusahaan.",
        },
      ],
      founderBadge: "Komitmen Pendiri",
      founderQuote: "Software yang baik tidak boleh menuntut perusahaan Anda berubah. Software yang baik harus menghilangkan friksi klerikal membosankan sehingga para ahli Anda dapat mencurahkan energinya pada pertumbuhan.",
      founderBio: "Didirikan oleh Kentley Wong, Droppfloww dibangun untuk menjembatani jurang pemisah antara rekayasa perangkat lunak modern dan operasional bisnis nyata. Setiap klien kami berdiskusi langsung dengan tim pembangun teknis.",
      founderRole: "Pendiri & Kepala Arsitek Sistem",
      founderName: "Kentley Wong",
      bottomTitle: "Ingin mendiskusikan sistem operasional Anda?",
      bottomDesc: "Mari berbincang selama 30 menit mengenai operasional Anda hari ini. Tanpa tekanan penjualan—hanya analisis rekayasa yang jujur.",
      bottomCta: "Jadwalkan sesi bersama pendiri",
    };
  }

  if (language === "zh") {
    return {
      badge: "工作室理念与核心优势",
      title: "您将直接与亲手打造系统的资深工程师并肩协作。",
      desc: "Droppfloww 是一家精品技术工程工作室，恪守同一信念：高速成长的企业不需要又一份僵化的标准 SaaS 订阅，也不需要浩浩荡荡的初级管理咨询顾问。企业真正需要的是由透彻理解实操商业逻辑的资深工程师量身打造的专属业务系统。",
      ctaSchedule: "预约业务技术诊断",
      ctaHowWeWork: "了解我们的开发流程",
      comparisonTitle: "模式对比：Droppfloww vs. 其他备选路径。",
      comparisonSubtitle: "了解我们直接深入代码落地的工程工作室与传统咨询公司及通用标准软件的本质差异。",
      tableHeaderDroppfloww: "Droppfloww 专属工程工作室",
      tableHeaderTraditional: "传统管理咨询公司",
      tableHeaderSaas: "通用标准 SaaS 平台",
      comparisons: [
        {
          attribute: "项目团队配置",
          droppfloww: "资深软件工程师与系统架构师直接进驻并负责您的项目。",
          traditional: "资深合伙人负责推销立项，初级实习生接手实际代码交付。",
          genericSaas: "无定制团队支持，强迫您的企业流程去削足适履迁就现成软件。",
        },
        {
          attribute: "交付周期与节奏",
          droppfloww: "10 个工作日交付可交互原型。4 至 6 周全面上线生产环境。",
          traditional: "动辄 6 到 12 个月停留在需求调研与 PPT 报告汇总阶段。",
          genericSaas: "开通即用，但需要 6 个月以上繁复的外挂插件拼凑且极易故障。",
        },
        {
          attribute: "源码与知识产权",
          droppfloww: "100% 完整源代码全权归属客户。规范 TypeScript，托管于公有云。",
          traditional: "通常采用闭源专有框架，收取持续性高额软件授权维护费。",
          genericSaas: "零产权。一旦停止按月交租，您的所有定制工具与数据将被封锁。",
        },
        {
          attribute: "系统集成思路",
          droppfloww: "量身定制打通既有软件资产，绝不进行激进盲目的推翻重建。",
          traditional: "往往强制要求报废已有系统，推销耗资千万元级的单一笨重 ERP。",
          genericSaas: "仅局限于官方应用市场已有的插件，无法满足非标独特业务场景。",
        },
        {
          attribute: "计费与成本结构",
          droppfloww: "清晰透明的按固定里程碑定价，结果交付与资金节点严格绑定。",
          traditional: "按人天工时敞口计费，项目工期拖得越久顾问收益反而越高。",
          genericSaas: "按账号坐席按月阶梯收费，企业规模扩大反而遭遇成本惩罚。",
        },
      ],
      founderBadge: "创始人承诺",
      founderQuote: "真正优秀的软件绝不应强迫企业削足适履。它应当润物细无声地消除繁冗的日常机械抄录，让您的业务专家把宝贵的才智投入到真正的价值增长中。",
      founderBio: "由 Kentley Wong 创立，Droppfloww 致力于弥合现代前沿软件工程与复杂实体业务实操之间的巨大鸿沟。我们的每位客户都直接与编写核心代码的技术决策者深入对话。",
      founderRole: "创始人兼首席系统架构师",
      founderName: "Kentley Wong",
      bottomTitle: "想与我们的工程师探讨您的业务系统？",
      bottomDesc: "欢迎预约 30 分钟技术研讨。没有销售套话与签约压力，只做客观扎实的工程可行性复盘。",
      bottomCta: "预约创始人面对面诊断",
    };
  }

  if (language === "es") {
    return {
      badge: "Filosofía del Estudio y Ventaja",
      title: "Trabaja directamente con los ingenieros que construyen su sistema.",
      desc: "Droppfloww es un estudio tecnológico boutique fundado bajo una convicción: las empresas en crecimiento no necesitan otra suscripción genérica a un SaaS rígido ni ejércitos de consultores júnior. Necesitan software operativo a medida creado por ingenieros que comprenden la realidad del negocio.",
      ctaSchedule: "Agendar revisión técnica",
      ctaHowWeWork: "Conocer nuestra metodología",
      comparisonTitle: "Comparativa de enfoques: Droppfloww frente a otras alternativas.",
      comparisonSubtitle: "Vea cómo nuestro modelo de ingeniería directa contrasta con la consultoría tradicional y las plataformas SaaS prediseñadas.",
      tableHeaderDroppfloww: "Estudio de Ingeniería Droppfloww",
      tableHeaderTraditional: "Consultoría Tradicional",
      tableHeaderSaas: "SaaS Genérico Comercial",
      comparisons: [
        {
          attribute: "Composición del Equipo",
          droppfloww: "Ingenieros de software senior y arquitectos de sistemas en su proyecto.",
          traditional: "Los socios venden el proyecto; analistas júnior escriben el código.",
          genericSaas: "Sin equipo a medida; su empresa debe adaptarse al software cerrado.",
        },
        {
          attribute: "Plazos de Entrega",
          droppfloww: "Prototipo funcional en 10 días. Despliegue en producción en 4–6 semanas.",
          traditional: "De 6 a 12 meses de especificaciones preliminares y presentaciones.",
          genericSaas: "Alta inmediata, pero 6+ meses de configuraciones y plugins inestables.",
        },
        {
          attribute: "Propiedad de Código y PI",
          droppfloww: "100% de propiedad del código fuente. TypeScript limpio y cloud estándar.",
          traditional: "Frecuente dependencia de plataformas cerradas con licencias continuas.",
          genericSaas: "Cero propiedad. Si deja de pagar la cuota mensual, sus datos y herramientas desaparecen.",
        },
        {
          attribute: "Estrategia de Integración",
          droppfloww: "Diseñado para conectar sus herramientas sin sustituciones traumáticas.",
          traditional: "Suele exigir el desmantelamiento de sistemas para implantar un ERP millonario.",
          genericSaas: "Limitado a plugins oficiales; no admite casos operativos específicos.",
        },
        {
          attribute: "Estructura de Costes",
          droppfloww: "Precios fijos por hitos transparentes ligados a entregables reales.",
          traditional: "Tarifas por horas abiertas que premian la ineficiencia del consultor.",
          genericSaas: "Precios mensuales por usuario que penalizan el crecimiento de su plantilla.",
        },
      ],
      founderBadge: "Compromiso del Fundador",
      founderQuote: "El buen software no debe exigir que su empresa cambie sus métodos de éxito. Debe eliminar la fricción mecánica para que sus especialistas se concentren en lo que genera valor.",
      founderBio: "Fundado por Kentley Wong, Droppfloww nació para unir la ingeniería de software moderna con las realidades operativas de la empresa. Cada cliente dialoga directamente con los desarrolladores que ejecutan el proyecto.",
      founderRole: "Fundador y Arquitecto Jefe de Sistemas",
      founderName: "Kentley Wong",
      bottomTitle: "¿Desea analizar su infraestructura operativa?",
      bottomDesc: "Conversemos 30 minutos sobre sus procesos actuales. Sin compromisos comerciales: únicamente un diagnóstico de ingeniería honesto.",
      bottomCta: "Agendar sesión con el fundador",
    };
  }

  // English default
  return {
    badge: "Studio Philosophy & Advantage",
    title: "You work with the engineers who actually build your system.",
    desc: "Droppfloww is a boutique technology studio founded on a single conviction: growing companies don't need another generic SaaS subscription or an army of junior management consultants. They need serious custom operational software built by engineers who understand real business.",
    ctaSchedule: "Schedule an operational review",
    ctaHowWeWork: "Learn how we work",
    comparisonTitle: "Comparing approaches: Droppfloww vs. Alternatives.",
    comparisonSubtitle: "How our direct engineering studio model compares against traditional management consultants and off-the-shelf software.",
    tableHeaderDroppfloww: "Droppfloww Engineering Studio",
    tableHeaderTraditional: "Traditional Management Consultants",
    tableHeaderSaas: "Generic Off-the-Shelf SaaS",
    comparisons: [
      {
        attribute: "Team Composition",
        droppfloww: "Senior software engineers & systems architects directly on your project.",
        traditional: "Senior partners sell the project; junior associates execute the code.",
        genericSaas: "No custom team; you adapt your company to rigid off-the-shelf software.",
      },
      {
        attribute: "Turnaround Time",
        droppfloww: "Working prototype in 10 days. Production deployment in 4–6 weeks.",
        traditional: "6–12 months of preliminary requirements gathering and slide decks.",
        genericSaas: "Instant sign-up, but 6+ months of messy customization and plugin hacking.",
      },
      {
        attribute: "Code & IP Ownership",
        droppfloww: "100% full source code ownership. Clean TypeScript, standard cloud hosting.",
        traditional: "Often proprietary framework lock-in with ongoing licensing fees.",
        genericSaas: "Zero ownership. If you stop paying monthly, your tools and data vanish.",
      },
      {
        attribute: "Integration Approach",
        droppfloww: "Engineered specifically to connect your existing tools without rip-and-replace.",
        traditional: "Typically demands ripping out your existing stack for a single $1M+ ERP.",
        genericSaas: "Limited to supported marketplace plugins; custom edge cases unsupported.",
      },
      {
        attribute: "Cost Structure",
        droppfloww: "Transparent fixed-milestone pricing tied to tangible system deliverables.",
        traditional: "Open-ended billable hourly rates that punish efficiency.",
        genericSaas: "Per-seat recurring monthly pricing that penalizes company growth.",
      },
    ],
    founderBadge: "Founder Commitment",
    founderQuote: "Good software shouldn't require your company to change. Good software should quietly eliminate clerical friction so your experts can spend their energy on real growth.",
    founderBio: "Founded by Kentley Wong, Droppfloww was built to close the gap between modern software engineering and real operational business. Every client works directly with the technical builders.",
    founderRole: "Founder & Chief Systems Architect",
    founderName: "Kentley Wong",
    bottomTitle: "Want to discuss your operational system?",
    bottomDesc: "Let's speak for 30 minutes about how your team works today. No sales pressure—just an honest engineering feasibility assessment.",
    bottomCta: "Schedule a call with our founder",
  };
}

