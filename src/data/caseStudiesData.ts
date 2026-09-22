export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  location: string;
  headline: string;
  metricHero: string;
  metricLabel: string;
  problem: string;
  problemDetails: string[];
  systemBuilt: string;
  systemArchitecture: string[];
  outcome: string;
  outcomeStats: { label: string; value: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

export function getCaseStudies(language: string): CaseStudy[] {
  if (language === "id") {
    return [
      {
        id: "bestindo-logistics",
        client: "PT Bestindo Central Logistics",
        industry: "Logistik Kargo Antar-Pulau & Rantai Dingin",
        location: "Jakarta & Surabaya, Indonesia",
        headline: "Menghapus 32 jam kerja admin manual setiap minggu untuk 140 unit armada komersial.",
        metricHero: "Pengurangan 82%",
        metricLabel: "Dalam pengetikan ulang data surat jalan dan waktu tunggu dispatch",
        problem:
          "Empat belas staf operasional dispatch menghabiskan pagi dengan mengetik ulang data manifes dari laporan terminal AS400 ke grup obrolan pengemudi dan spreadsheet. Ketika terjadi keterlambatan di pelabuhan atau jalur darat, pembaruan tercecer di pesan instan, menyebabkan klaim lembur pengemudi dan keterlambatan penagihan.",
        problemDetails: [
          "Komunikasi terfragmentasi di lebih dari 40 grup chat tanpa pengawasan sistem.",
          "Manifes perjalanan diketik ulang manual 3 kali sebelum bisa ditagihkan ke klien.",
          "Sengketa dan keterlambatan faktur melebihi 18 hari per siklus pengiriman.",
        ],
        systemBuilt:
          "Droppfloww merancang dan membangun Hub Orkestrasi Dispatch terpadu yang terhubung langsung ke database ERP transport Bestindo. Surat jalan diproses otomatis, dialokasikan ke antrean rute optimal, dan dikirim langsung ke ponsel pengemudi melalui antarmuka web ringan dengan konfirmasi satu sentuhan dan penanda waktu GPS.",
        systemArchitecture: [
          "Konektor otomatis database AS400 dengan normalisasi skema data.",
          "Konsol mobile dispatch pengemudi dengan cache offline hemat kuota.",
          "Mesin peringatan anomali dua arah untuk tindakan cepat supervisor operasional.",
          "Pencocokan tanda terima digital (POD) otomatis langsung terhubung ke sistem invoicing.",
        ],
        outcome:
          "Waktu persiapan dispatch terpangkas dari 4,5 jam menjadi 18 menit per shift. Waktu rekonsiliasi faktur turun dari 18 hari menjadi 48 jam. Bestindo menambah armada operasional sebesar 24% tanpa perlu menambah karyawan klerikal baru.",
        outcomeStats: [
          { label: "Waktu Dispatch Harian", value: "18 mnt (sebelumnya 4,5 jam)" },
          { label: "Penghematan Lembur", value: "Rp 210 juta / bln" },
          { label: "Tingkat Kesalahan Data", value: "0,02% (turun dari 7,4%)" },
        ],
        quote: {
          text: "Droppfloww tidak mencoba menjual ERP raksasa atau memaksa kami mengubah cara kerja gudang kami. Mereka mengamati lantai dispatch kami selama tiga hari, memahami hambatan nyata kami, dan membangun software kustom yang langsung diadopsi tim dalam 48 jam. Armada kami tumbuh dari 110 ke 140 truk tanpa biaya overhead tambahan.",
          author: "Hendra Wijaya",
          role: "Kepala Operasional Armada, PT Bestindo Central",
        },
        imageSrc: "/src/assets/images/logistics_system_1789312508098.jpg",
        imageAlt: "Konsol Operasional Logistik & Dispatch Droppfloww untuk PT Bestindo",
        tags: ["Mesin Dispatch Kustom", "Konektor ERP Warisan", "Pelacakan Real-Time", "POD Otomatis"],
      },
      {
        id: "apex-civil",
        client: "Apex Civil Infrastructure",
        industry: "Kontraktor Sipil Berat & Rekayasa Struktur",
        location: "Singapura & Johor Bahru",
        headline: "Otomatisasi ekstraksi spesifikasi gambar tender dan kalkulasi Bill of Quantities (BOQ).",
        metricHero: "6,2x Lebih Cepat",
        metricLabel: "Penyusunan estimasi tender dari 21 hari menjadi hanya 3,5 hari",
        problem:
          "Estimator struktur senior menghabiskan ratusan jam mengaudit 500+ set gambar CAD dan berkas spesifikasi teknis untuk menyusun Bill of Quantities (BOQ). Kesalahan pengetikan manual dan material yang terlewat mengakibatkan tawaran tender tidak kompetitif atau risiko kerugian besar.",
        problemDetails: [
          "Setiap tender menyita 3 teknisi senior selama 80 jam kerja hanya untuk mencocokkan dokumen.",
          "Katalog harga pemasok diperbarui mingguan di 12 file Excel terpisah.",
          "Kesalahan harga satu proyek infrastruktur berisiko merugikan miliaran rupiah.",
        ],
        systemBuilt:
          "Droppfloww membangun Konsol Ekstraksi Spesifikasi & Kalkulasi Biaya Teknik presisi tinggi. Platform ini menerima set gambar CAD, lampiran PDF, dan denah struktur, mengekstrak dimensi dan kebutuhan besi beton, mencocokkannya dengan indeks harga terkini, dan memberi peringatan anomali margin sebelum dokumen tender diserahkan.",
        systemArchitecture: [
          "Parser gambar CAD cerdas yang mengekstrak item baris material dimensional.",
          "Pencocokan silang otomatis spesifikasi dengan daftar harga pemasok material aktif.",
          "Kalkulator varians margin deterministik untuk menyorot selisih di atas batas toleransi.",
          "Laporan jejak audit satu klik untuk rincian penawaran teknis yang teruji.",
        ],
        outcome:
          "Waktu tanggapan tender dipangkas dari 3 minggu menjadi 3,5 hari kerja. Tim estimasi mampu berpartisipasi dalam tender 4 kali lebih banyak setiap kuartal dengan kepastian margin yang sangat terlindungi.",
        outcomeStats: [
          { label: "Waktu Penyusunan Tender", value: "3,5 hari (dari 21 hari)" },
          { label: "Kapasitas Volume Tender", value: "+380% Tahunan" },
          { label: "Pencegahan Margin Bocor", value: "$420.000 / thn" },
        ],
        quote: {
          text: "Untuk proyek bernilai puluhan juta dolar, kesalahan rumus spreadsheet adalah mimpi buruk. Droppfloww memberi kami sistem yang terverifikasi dan patuh audit. Insinyur kami kembali fokus pada rekayasa teknik dan analisis nilai, bukan pekerjaan fotokopi dan pencatatan klerikal.",
          author: "Ir. Marcus Tan",
          role: "Direktur Estimasi Teknik, Apex Civil",
        },
        imageSrc: "/src/assets/images/infrastructure_case_study.jpg",
        imageAlt: "Konsol Rekayasa Estimasi BOQ Droppfloww untuk Apex Civil Infrastructure",
        tags: ["Parser Gambar CAD", "Otomatisasi BOQ", "Kalkulasi Biaya Presisi", "Pemeriksaan Kepatuhan"],
      },
      {
        id: "lumina-health",
        client: "Lumina Specialty Health Group",
        industry: "Jaringan Klinik Spesialis & Pusat Bedah Rawat Jalan",
        location: "Kuala Lumpur, Malaysia",
        headline: "Validasi pra-otorisasi asuransi otomatis di 6 fasilitas bedah.",
        metricHero: "Penerimaan 96,4%",
        metricLabel: "Tingkat persetujuan klaim asuransi klinis pada pengajuan pertama",
        problem:
          "Koordinator pasien dan staf penagihan menghadapi penolakan klaim yang tinggi akibat ketidaksesuaian kode ICD, catatan dokter yang kurang lengkap, dan aturan polis yang rumit. Hal ini menyebabkan penundaan jadwal operasi serta piutang tertahan hingga $1,8 juta.",
        problemDetails: [
          "Lebih dari 22% pra-otorisasi bedah awal ditolak atau diminta keterangan ulang.",
          "Staf menghabiskan 35+ jam seminggu menelepon bagian verifikasi asuransi swasta.",
          "Keterlambatan verifikasi memicu antrean tegang pada hari tindakan operasi.",
        ],
        systemBuilt:
          "Droppfloww merancang Mesin Kepatuhan Klinis & Pra-Otorisasi terpusat yang menghubungkan jadwal medis dengan matriks aturan asuransi secara real-time. Sistem memeriksa kelengkapan berkas sebelum dikirim dan mengingatkan manajer klinik jika ada lampiran yang kurang.",
        systemArchitecture: [
          "Sinkronisasi API HL7 & REST dengan sistem rekam medis elektronik (EHR).",
          "Pemeriksa kelengkapan pra-otorisasi berbasis aturan terotomatisasi.",
          "Konektor portal pengajuan asuransi langsung dengan polling status mandiri.",
          "Layanan estimasi biaya transparan kepada pasien melalui SMS dan WhatsApp.",
        ],
        outcome:
          "Tingkat persetujuan klaim pertama naik dari 78% menjadi 96,4%. Waktu tunggu piutang turun drastis dari 44 hari menjadi 11 hari. Koordinator klinik kini sepenuhnya fokus merawat pasien, bukan mengejar urusan klaim.",
        outcomeStats: [
          { label: "Persetujuan Awal", value: "96,4% (dari 78%)" },
          { label: "Siklus Piutang", value: "11 hari (dari 44 hari)" },
          { label: "Waktu Admin Hemat", value: "-40 jam / klinik / mgg" },
        ],
        quote: {
          text: "Droppfloww membawa ketelitian rekayasa sistem yang andal ke dalam operasional administrasi klinik kami. Kami memiliki visibilitas utuh dari pendaftaran tindakan hingga penggantian biaya asuransi.",
          author: "Dr. Soraya Al-Hadi",
          role: "Chief Operating Officer, Lumina Health Group",
        },
        imageSrc: "/src/assets/images/operations_hub_1789312544601.jpg",
        imageAlt: "Pusat Rekam Medis & Pra-Otorisasi Klinis Terpusat oleh Droppfloww",
        tags: ["Kepatuhan Klinis", "Konektor API Asuransi", "Sinkronisasi EHR", "Audit Finansial"],
      },
    ];
  }

  if (language === "zh") {
    return [
      {
        id: "bestindo-logistics",
        client: "PT Bestindo Central Logistics",
        industry: "跨岛大宗货运与冷链干线物流",
        location: "印度尼西亚·雅加达与泗水",
        headline: "为 140 辆商业营运车队消除每周 32 小时的人工派单二次录入。",
        metricHero: "削减 82%",
        metricLabel: "人工文书数据二次誊录与调度排单时滞大幅降低",
        problem:
          "14 名一线调度员每个早班都必须在老旧 AS400 终端与 WhatsApp 司机群聊、排班纸质单据及数十张电子表格之间机械搬运运单数据。遭遇道路封堵或码头压港时，变更指令在冗长群聊中沉底遗漏，导致交货脱靶、运费对账纠纷与司机加班争议频发。",
        problemDetails: [
          "运力沟通分散在 40 多个缺乏监管的即时通讯聊天群中。",
          "单趟运单行程在开具发票前需手工二次转录 3 遍。",
          "每个物流周期的运费账单争议处理时滞超过 18 天。",
        ],
        systemBuilt:
          "Droppfloww 精密设计并交付了统一的智能调度协同调度中心，通过轻量级服务器端连接器直接打通 Bestindo 既有的运输 ERP 数据库。运单自动解析、排入路线优化队列，并通过移动端极速网页界面直接推送至司机终端，支持一键状态打卡与 GPS 时间戳验真。",
        systemArchitecture: [
          "老旧 AS400 数据库自动化拉取中间件与模式归一化引擎。",
          "支持弱网离线缓存的移动端轻量司机调度工作台。",
          "双向异常在途告警引擎，毫秒级提醒调度主管介入处理。",
          "数字化电子签收回单 (POD) 自动校核并直联开票结算流水线。",
        ],
        outcome:
          "每个班次的派车调度准备时间从 4.5 小时骤降至 18 分钟。对账结算周期从 18 天缩减至 48 小时。在未扩充任何文员人手的前提下，Bestindo 的活跃在运车队规模平稳扩容 24%。",
        outcomeStats: [
          { label: "日常派单准备耗时", value: "18 分钟 (此前为 4.5 小时)" },
          { label: "月度减少加班支出", value: "14,200 美元 / 月" },
          { label: "首月录入错误率", value: "0.02% (此前为 7.4%)" },
        ],
        quote: {
          text: "Droppfloww 从不试图推销带有几百页说明书的臃肿 ERP，也没有强迫我们改变仓库运转的既有习惯。他们的工程师在我们的调度中心现场跟班调研了三天，直击核心痛点，交付的定制工具团队在 48 小时内便全员上手。我们车队从 110 台跃升至 140 台，管理成本零新增。",
          author: "Hendra Wijaya",
          role: "车队营运总监, PT Bestindo Central",
        },
        imageSrc: "/src/assets/images/logistics_system_1789312508098.jpg",
        imageAlt: "Droppfloww 为 PT Bestindo 打造的车队调度集约管控控制台",
        tags: ["定制调度引擎", "老旧系统打通", "实时在途追踪", "数字化 POD 回单"],
      },
      {
        id: "apex-civil",
        client: "Apex Civil Infrastructure",
        industry: "重大市政基础设施承包与结构工程",
        location: "新加坡与新山",
        headline: "实现工程招标文件规格解析与工程量清单 (BOQ) 智能自动对账。",
        metricHero: "提速 6.2 倍",
        metricLabel: "投标预算测算周期从 21 天大幅缩减至 3.5 天",
        problem:
          "资深结构造价预算师花费数百小时人工核验 500 多套 CAD 施工图纸与市政规格附录，以编制工程量清单 (BOQ)。不可避免的人工抄录失误和遗漏条目，往往导致投标报价失去竞争力，或在中标后遭遇严重亏损。",
        problemDetails: [
          "每次重大投标需 3 位资深高级工程师耗费 80 工时仅用于图纸与文档交叉比对。",
          "材料供应商报价表每周更新，散落在 12 个互不联通的 Excel 表格中。",
          "单个市政工程中的微小算量纰漏可能导致超过 24 万美元的利润流失风险。",
        ],
        systemBuilt:
          "Droppfloww 研发了高精度工程规格提取与造价算量控制台。系统能自动接入建筑 CAD 图纸集、PDF 规范及结构附录，高精提取几何尺寸与钢筋规格，与供应商实时物价指数实现行级精准比对，并在截标前智能标注潜在利润波动敞口。",
        systemArchitecture: [
          "智能 CAD 与施工图纸规格解析器，精准提取尺寸算量清单。",
          "自动化材料交叉校验引擎，无缝匹配最新钢材/混凝土供应商行情底册。",
          "确定性利润方差计算器，主动标识超出 2.5% 容差范围的异常项。",
          "一键生成严谨可抗辩的工程投标文件审计追踪报告。",
        ],
        outcome:
          "投标算量响应周期从 3 周断崖式压缩至 3.5 个工作日。估价团队每季度能够参与的政府与市政投标数量提升了 4 倍，且利润底线拥有严谨的数据底气。",
        outcomeStats: [
          { label: "投标编制周期", value: "3.5 天 (此前为 21 天)" },
          { label: "季度投标承接量", value: "+380% 同比提升" },
          { label: "保护潜在利润敞口", value: "420,000 美元 / 年" },
        ],
        quote: {
          text: "对于千万级别的重大工程，表格算量公式哪怕错一位小数都是灭顶之灾。Droppfloww 为我们交付了一套具备完整审计追踪能力的系统。我们的工程师终于能够把精力重新集中在技术优化和价值工程上，而非枯燥疲惫的文书抄写。",
          author: "Ir. Marcus Tan",
          role: "技术估价总监, Apex Civil",
        },
        imageSrc: "/src/assets/images/infrastructure_case_study.jpg",
        imageAlt: "Droppfloww 为 Apex Civil Infrastructure 打造的工程造价与算量控制台",
        tags: ["CAD 图纸解析", "BOQ 自动化算量", "高精度成本测算", "工程合规审计"],
      },
      {
        id: "lumina-health",
        client: "Lumina Specialty Health Group",
        industry: "专科诊所连锁与日间手术医疗集团",
        location: "马来西亚·吉隆坡",
        headline: "为 6 家专科手术中心实现医疗保险理赔预授权自动化校验。",
        metricHero: "96.4% 获批率",
        metricLabel: "临床医疗保险初次申报即获批准比例",
        problem:
          "患者服务专员与财务核算团队经常因诊断 ICD 编码不一致、缺少主治医生病程记录或未遵循特定保司细则而遭遇拒赔。这不仅给待手术患者带来焦虑延误，更造成高达 180 万美元的应收账款周转悬滞。",
        problemDetails: [
          "超过 22% 的初步手术预授权申请初审即遭拒或被退回补充材料。",
          "行政人员每周耗费 35+ 小时在线反复致电各商业保险核保中心。",
          "核保确认滞后导致手术日早晨候诊大厅经常产生严重沟通堵点。",
        ],
        systemBuilt:
          "Droppfloww 研发了集中的预授权与临床合规校验引擎，将诊疗排班计划与保司规则库实现实时互联。系统在申报前自动核验病例附件完整度，并实时向诊所主管预警材料缺失风险。",
        systemArchitecture: [
          "通过 HL7 与 REST 协议打通既有电子病历 (EHR) 与挂号系统。",
          "基于专家规则库的自动化预授权材料完整度审查引擎。",
          "直连主要商业保险申报网关并支持自动轮询状态追踪。",
          "透明账单明细服务，通过微信/短信为患者提供实时费用预估。",
        ],
        outcome:
          "初审获批率从 78% 飙升至 96.4%。应收账款账龄从 44 天锐减至 11 天，诊所协调员从无休止的文书催收中解脱，将精力全力聚焦于患者护理。",
        outcomeStats: [
          { label: "初审通过率", value: "96.4% (此前 78%)" },
          { label: "账款回款周期", value: "11 天 (此前 44 天)" },
          { label: "每周节省行政工时", value: "-40 小时 / 门诊" },
        ],
        quote: {
          text: "Droppfloww 将高可靠工业软件的严谨标准带入了我们的医疗行政。整个流程清晰透彻，我们第一次实现了从门诊诊断到保司赔付的全流程闭环管控。",
          author: "Dr. Soraya Al-Hadi",
          role: "首席运营官, Lumina Health Group",
        },
        imageSrc: "/src/assets/images/operations_hub_1789312544601.jpg",
        imageAlt: "Droppfloww 打造的集中式专科临床预授权与电子病历控制中心",
        tags: ["医疗合规", "保司系统打通", "EHR 互联", "财务审计流"],
      },
    ];
  }

  if (language === "es") {
    return [
      {
        id: "bestindo-logistics",
        client: "PT Bestindo Central Logistics",
        industry: "Transporte Interurbano y Logística de Cadena de Frío",
        location: "Yakarta y Surabaya, Indonesia",
        headline: "Eliminación de 32 horas semanales de reingreso manual de despachos en 140 unidades de transporte comercial.",
        metricHero: "Reducción del 82%",
        metricLabel: "En reingreso clerical de datos y latencia de despacho",
        problem:
          "Catorce despachadores operativos pasaban sus mañanas reingresando órdenes manualmente desde terminales AS400 hacia grupos de chat y hojas de cálculo. Cuando ocurrían demoras en carretera o puertos, las actualizaciones se perdían en las cadenas de mensajes, causando discrepancias de facturación y disputas de horas extra.",
        problemDetails: [
          "Comunicación fragmentada en más de 40 grupos de chat sin supervisión centralizada.",
          "Los manifiestos de ruta se reescribían 3 veces antes de la facturación.",
          "El desfase promedio en resolución de disputas de facturas superaba los 18 días.",
        ],
        systemBuilt:
          "Droppfloww diseñó un Centro de Despacho Unificado que se conecta directamente al ERP de transporte mediante adaptadores de servidor dedicados. Las hojas de ruta se procesan automáticamente, se asignan a colas de optimización y se envían a conductores mediante una interfaz web ligera con confirmación en un toque y marcas GPS.",
        systemArchitecture: [
          "Conector automatizado con la base de datos AS400 con normalización de esquemas.",
          "Consola móvil de despacho para conductores con almacenamiento en caché sin conexión.",
          "Motor de alertas de excepciones bidireccional para intervención de supervisores.",
          "Conciliación automática de recibos de entrega (POD) vinculada a facturación.",
        ],
        outcome:
          "La preparación del despacho bajó de 4,5 horas a 18 minutos por turno. El tiempo de conciliación de facturas se redujo de 18 días a 48 horas. Bestindo amplió su flota operativa activa un 24% sin contratar personal administrativo adicional.",
        outcomeStats: [
          { label: "Tiempo Diario de Despacho", value: "18 min (antes 4,5 hrs)" },
          { label: "Ahorro Mensual en Horas Extra", value: "$14.200 / mes" },
          { label: "Tasa de Error Primer Mes", value: "0,02% (antes 7,4%)" },
        ],
        quote: {
          text: "Droppfloww no intentó vendernos un ERP inflado de 500 páginas ni decirnos cómo manejar nuestro almacén. Observaron nuestra operativa durante tres días, comprendieron los obstáculos reales y crearon una herramienta adaptada que adoptamos en 48 horas. Crecimos de 110 a 140 camiones sin sumar costos fijos.",
          author: "Hendra Wijaya",
          role: "Jefe de Operaciones de Flota, PT Bestindo Central",
        },
        imageSrc: "/src/assets/images/logistics_system_1789312508098.jpg",
        imageAlt: "Consola de Despacho y Logística Droppfloww para PT Bestindo",
        tags: ["Motor de Despacho a Medida", "Conector ERP", "Rastreo en Tiempo Real", "POD Automatizado"],
      },
      {
        id: "apex-civil",
        client: "Apex Civil Infrastructure",
        industry: "Contratación de Obras Civiles e Ingeniería Estructural",
        location: "Singapur y Johor Bahru",
        headline: "Automatización de la extracción de especificaciones de planos de licitación y conciliación de BOQ.",
        metricHero: "6,2x Más Rápido",
        metricLabel: "Plazo de estimación de licitaciones de 21 días a solo 3,5 días",
        problem:
          "Estimadores estructurales experimentados dedicaban cientos de horas a auditar manualmente más de 500 planos CAD y anexos técnicos para elaborar mediciones de obra (BOQ). Los inevitables errores de transcripción conducían a ofertas no competitivas o riesgos de pérdidas significativas.",
        problemDetails: [
          "Cada licitación requería que 3 ingenieros seniors dedicaran 80 horas a cotejar documentos.",
          "Los catálogos de proveedores se actualizaban semanalmente en 12 archivos de Excel inconexos.",
          "Los errores en un solo proyecto de infraestructura podían poner en riesgo más de $240.000.",
        ],
        systemBuilt:
          "Droppfloww creó una Consola de Extracción de Especificaciones de Ingeniería y Costos de alta precisión. La plataforma procesa conjuntos de planos CAD, archivos PDF y memorias estructurales, extrayendo dimensiones y especificaciones, estandarizando partidas frente a listas de precios vigentes y detectando riesgos de margen antes de la entrega.",
        systemArchitecture: [
          "Analizador inteligente de especificaciones y planos CAD para extracción de partidas.",
          "Cotejo automatizado de especificaciones contra índices de proveedores en tiempo real.",
          "Calculadora de varianza de margen que resalta discrepancias por encima del 2,5%.",
          "Informe de auditoría en un clic para desgloses técnicos de licitación auditables.",
        ],
        outcome:
          "El tiempo de respuesta de licitaciones se redujo de 3 semanas a 3,5 días laborables. El equipo de presupuestos pudo participar en 4 veces más licitaciones municipales por trimestre con total seguridad en sus márgenes.",
        outcomeStats: [
          { label: "Plazo de Licitación", value: "3,5 días (antes 21 días)" },
          { label: "Capacidad de Licitaciones", value: "+380% Interanual" },
          { label: "Protección de Márgenes", value: "$420.000 / año" },
        ],
        quote: {
          text: "En proyectos multimillonarios, un error en una fórmula de hoja de cálculo es una pesadilla. Droppfloww nos entregó un sistema con respaldo auditable. Nuestros ingenieros volvieron a centrarse en el diseño estructural y el valor técnico, no en tareas de transcripción.",
          author: "Ir. Marcus Tan",
          role: "Director de Estimaciones Técnicas, Apex Civil",
        },
        imageSrc: "/src/assets/images/infrastructure_case_study.jpg",
        imageAlt: "Consola de Estimación de BOQ Droppfloww para Apex Civil Infrastructure",
        tags: ["Extractor de Planos CAD", "Automatización de BOQ", "Cálculo de Costos", "Auditoría Técnica"],
      },
      {
        id: "lumina-health",
        client: "Lumina Specialty Health Group",
        industry: "Centros Quirúrgicos Ambulatorios y Diagnóstico",
        location: "Kuala Lumpur, Malasia",
        headline: "Validación automatizada de preautorizaciones de seguros en 6 instalaciones quirúrgicas.",
        metricHero: "96,4% Aprobación",
        metricLabel: "Tasa de aceptación de reclamos en la primera presentación",
        problem:
          "Los coordinadores de pacientes y el personal de facturación enfrentaban rechazos recurrentes de seguros por discrepancias en códigos diagnósticos y notas clínicas faltantes, generando demoras para pacientes y un saldo pendiente de $1,8M.",
        problemDetails: [
          "Más del 22% de las solicitudes iniciales eran rechazadas o requerían aclaraciones.",
          "El personal pasaba más de 35 horas a la semana esperando en línea con aseguradoras.",
          "Los retrasos generaban fricciones en las salas de espera los días de cirugía.",
        ],
        systemBuilt:
          "Droppfloww desarrolló un Motor Centralizado de Preautorización y Cumplimiento Clínico que integra agendas médicas con matrices de pólizas de aseguradoras, validando la documentación antes de su envío.",
        systemArchitecture: [
          "Sincronización mediante API HL7 y REST con sistemas de expedientes EHR.",
          "Verificador de integridad de preautorizaciones basado en reglas automatizadas.",
          "Conector directo con portales de aseguradoras y sondeo de estados en tiempo real.",
          "Notificaciones transparentes de costos estimados a pacientes por mensaje y correo.",
        ],
        outcome:
          "La aprobación en primera instancia aumentó del 78% al 96,4%. El rezago de cuentas por cobrar disminuyó de 44 a 11 días, permitiendo al personal enfocarse en la atención del paciente.",
        outcomeStats: [
          { label: "Aprobación Inicial", value: "96,4% (antes 78%)" },
          { label: "Días de Cobro", value: "11 días (antes 44 días)" },
          { label: "Horas Ahorradas", value: "-40 hrs / clínica / sem" },
        ],
        quote: {
          text: "Droppfloww aportó la disciplina de ingeniería de sistemas de alta fiabilidad a nuestra administración de pacientes. Ahora tenemos control integral desde el diagnóstico hasta el reembolso.",
          author: "Dra. Soraya Al-Hadi",
          role: "Directora de Operaciones, Lumina Health Group",
        },
        imageSrc: "/src/assets/images/operations_hub_1789312544601.jpg",
        imageAlt: "Centro Clínico de Preautorización y Registros creado por Droppfloww",
        tags: ["Cumplimiento Clínico", "Conector Aseguradoras", "Sincronización EHR", "Auditoría"],
      },
    ];
  }

  // English default
  return [
    {
      id: "bestindo-logistics",
      client: "PT Bestindo Central Logistics",
      industry: "Inter-island Freight & Cold-Chain Logistics",
      location: "Jakarta & Surabaya, Indonesia",
      headline: "Eliminating 32 weekly hours of manual dispatch re-entry across 140 commercial transport units.",
      metricHero: "82% Reduction",
      metricLabel: "In clerical data re-entry and dispatch turnaround latency",
      problem:
        "Fourteen operational dispatchers spent their morning shifts re-entering manifest orders manually from legacy AS400 terminal reports into WhatsApp driver broadcast groups, driver trip sheets, and spreadsheets. When road delays or port congestion occurred, updates were lost in message chains, causing missed delivery windows, billing discrepancies, and driver overtime disputes.",
      problemDetails: [
        "Fragmented communication across 40+ unmonitored messaging chats.",
        "Driver trip manifests were physically re-keyed 3 times before invoicing.",
        "Average invoice dispute lag exceeded 18 days per logistics cycle.",
      ],
      systemBuilt:
        "Droppfloww designed and engineered a unified Dispatch Orchestration Hub that interfaces directly with Bestindo's legacy transport ERP via custom server adapters. Waybills are parsed automatically, assigned to route optimization queues, and delivered directly to drivers through a lightweight web interface with one-tap status confirmation and GPS timestamping.",
      systemArchitecture: [
        "Automated AS400 database polling connector with schema normalization.",
        "Real-time driver dispatch mobile console with low-bandwidth offline caching.",
        "Two-way exception alert engine triggering dispatch supervisor intervention.",
        "Automated proof-of-delivery (POD) receipt reconciliation linked to customer invoicing.",
      ],
      outcome:
        "Dispatch preparation dropped from 4.5 hours to 18 minutes per shift. Invoice reconciliation time decreased from 18 days to 48 hours. Bestindo grew its active operational fleet by 24% without hiring a single additional clerical employee.",
      outcomeStats: [
        { label: "Daily Dispatch Time", value: "18 mins (was 4.5 hrs)" },
        { label: "Monthly Overtime Saved", value: "$14,200 / mo" },
        { label: "First-Month Error Rate", value: "0.02% (down from 7.4%)" },
      ],
      quote: {
        text: "Droppfloww did not try to sell us a bloated 500-page ERP or tell us to change how our warehouse works. They spent three days observing our dispatch floor, understood our real bottlenecks, and built a tailored tool our team adopted within 48 hours. We scaled from 110 to 140 trucks without adding overhead.",
        author: "Hendra Wijaya",
        role: "Head of Fleet Operations, PT Bestindo Central",
      },
      imageSrc: "/src/assets/images/logistics_system_1789312508098.jpg",
      imageAlt: "Droppfloww Dispatch & Logistics Operating Console for PT Bestindo",
      tags: ["Custom Dispatch Engine", "Legacy ERP Connector", "Real-Time Tracking", "Automated POD"],
    },
    {
      id: "apex-civil",
      client: "Apex Civil Infrastructure",
      industry: "Heavy Civil Contracting & Structural Engineering",
      location: "Singapore & Johor Bahru",
      headline: "Automating tender drawing specification extraction and Bill of Quantities reconciliation.",
      metricHero: "6.2x Faster",
      metricLabel: "Tender estimation turnaround from 21 days down to 3.5 days",
      problem:
        "Senior structural estimators spent hundreds of hours manually auditing 500+ CAD drawing sets and municipal specification annexes to construct itemized Bill of Quantities (BOQs). Inevitable transposition mistakes and overlooked line items led to either uncompetitive bid margins or costly project under-pricing.",
      problemDetails: [
        "Each tender required 3 senior engineers working 80 hours solely on document cross-referencing.",
        "Supplier pricing catalogs were updated weekly across 12 discordant Excel files.",
        "Bidding errors on a single municipal project could jeopardize $240K+ in projected margins.",
      ],
      systemBuilt:
        "Droppfloww built a high-precision Engineering Specification Extraction & Costing Console. The platform ingests architectural CAD sets, PDF schedules, and structural annexes, extracting geometry and rebar specifications, standardizing line items against live supplier price indices, and surfacing potential margin risks before submission.",
      systemArchitecture: [
        "Intelligent CAD & drawing specification parser extracting dimensional line items.",
        "Automated material cross-referencer matching specifications to live steel/concrete supplier lists.",
        "Deterministic margin variance calculator highlighting discrepancies beyond 2.5% tolerance.",
        "One-click audit trail report generating defensible engineering tender breakdowns.",
      ],
      outcome:
        "Tender response time was slashed from 3 weeks to 3.5 business days. The estimation team was able to participate in 4x more municipal bids per quarter with higher confidence in margin defensibility.",
      outcomeStats: [
        { label: "Tender Turnaround", value: "3.5 days (was 21 days)" },
        { label: "Bid Volume Capacity", value: "+380% Year-over-Year" },
        { label: "Protected Margin Risk", value: "$420,000 / yr" },
      ],
      quote: {
        text: "On multi-million dollar public tenders, a formula error in a spreadsheet is catastrophic. Droppfloww gave us an audited, repeatable system. Our senior engineers are back to doing actual structural engineering and value engineering instead of clerical copy-pasting.",
        author: "Ir. Marcus Tan",
        role: "Director of Estimation, Apex Civil Infrastructure",
      },
      imageSrc: "/src/assets/images/infrastructure_case_study.jpg",
      imageAlt: "Droppfloww Engineering Specification & BOQ Costing Console for Apex Civil",
      tags: ["CAD Drawing Parser", "BOQ Automation", "Precision Costing", "Engineering Compliance"],
    },
    {
      id: "lumina-health",
      client: "Lumina Specialty Health Group",
      industry: "Multi-Clinic Diagnostic & Surgical Centers",
      location: "Kuala Lumpur, Malaysia",
      headline: "Automated insurance pre-authorization validation across 6 surgical facilities.",
      metricHero: "96.4% Acceptance",
      metricLabel: "First-pass clinical insurance claim acceptance rate",
      problem:
        "Front-desk patient coordinators and billing staff struggled with frequent insurance rejections due to mismatched diagnostic ICD codes, missing physician clinical notes, and insurer-specific approval guidelines. This created stressful delays for surgical patients and a $1.8M rolling accounts receivable backlog.",
      problemDetails: [
        "Over 22% of preliminary surgical pre-authorizations initially rejected or queried.",
        "Staff spent 35+ hours each week on hold with private insurance adjudicators.",
        "Patient check-in delays created severe waiting room friction on surgery days.",
      ],
      systemBuilt:
        "Droppfloww engineered a centralized Pre-Authorization & Clinical Compliance Engine that integrates clinical scheduling with regional insurer policy matrices. The system validates documentation completeness prior to submission and alerts clinic managers of missing diagnostic attachments in real time.",
      systemArchitecture: [
        "HL7 and REST API synchronization with clinical management and EHR systems.",
        "Automated rule-based pre-authorization completeness checker.",
        "Direct insurer portal submission connector with automated status polling.",
        "Patient communication service providing transparent cost estimates via SMS/Email.",
      ],
      outcome:
        "First-pass claim acceptance rose from 78% to 96.4%. Accounts receivable lag fell from 44 days to 11 days, freeing up clinic coordinators to focus entirely on patient care rather than administrative chasing.",
      outcomeStats: [
        { label: "First-Pass Approval", value: "96.4% (was 78%)" },
        { label: "A/R Aging Lag", value: "11 days (was 44 days)" },
        { label: "Weekly Admin Hours", value: "-40 hrs per clinic" },
      ],
      quote: {
        text: "Droppfloww brought the engineering discipline of high-reliability systems to our patient administration. The clarity of their work was unmatched—we now have full visibility from diagnosis to reimbursement.",
        author: "Dr. Soraya Al-Hadi",
        role: "Chief Operating Officer, Lumina Health Group",
      },
      imageSrc: "/src/assets/images/operations_hub_1789312544601.jpg",
      imageAlt: "Centralized Clinical Pre-Authorization and Records Hub built by Droppfloww",
      tags: ["Clinical Compliance", "Insurer API Connector", "EHR Sync", "Audit Pipeline"],
    },
  ];
}
