export interface SelectedSystem {
  id: string;
  num: string;
  tabLabel: string;
  tag: string;
  headline: string;
  summary: string;
  beforeHeadline: string;
  beforeDetail: string;
  afterHeadline: string;
  afterDetail: string;
  capabilities: string[];
  philosophy: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  keyMetric: string;
  keyMetricLabel: string;
}

export function getSelectedSystems(language: string): SelectedSystem[] {
  if (language === "id") {
    return [
      {
        id: "infrastructure",
        num: "01",
        tabLabel: "Infrastruktur",
        tag: "SISTEM PILIHAN: INFRASTRUKTUR",
        headline: "Dari pekerjaan teknik yang terfragmentasi menjadi satu alur kerja terpadu.",
        summary:
          "Droppfloww membantu tim rekayasa dan infrastruktur menyatukan gambar kerja, estimasi anggaran, persetujuan, data proyek, dan pelaporan ke dalam satu sistem terpusat, mengurangi kerja berulang dan mempermudah peninjauan.",
        beforeHeadline:
          "Gambar teknis, spreadsheet harga, persetujuan, dan berkas proyek terpecah di berbagai aplikasi.",
        beforeDetail:
          "Estimator menelusuri gambar CAD lembar demi lembar secara manual, mengetik ulang spesifikasi material ke spreadsheet, dan mengejar persetujuan email menjelang tenggat tender. Ketidaksesuaian versi menimbulkan risiko serius pada kontrak bernilai miliaran rupiah.",
        afterHeadline:
          "Data mengalir melalui satu sistem terstruktur, sementara teknisi tetap memegang kendali keputusan penting.",
        afterDetail:
          "Kuantitas material diekstrak langsung dari gambar kerja, rumus biaya terkunci secara akurat, dan persetujuan digital tercatat lengkap dengan jejak audit.",
        capabilities: [
          "Penerimaan gambar & dokumen kerja",
          "Penyusunan BOQ otomatis",
          "Kalkulasi biaya presisi",
          "Alur kerja persetujuan berjenjang",
          "Pelaporan proyek real-time",
        ],
        philosophy:
          "Dibangun menyesuaikan proses bisnis Anda yang sudah berjalan, bukan sebaliknya. Kami mempelajari cara estimator dan direktur Anda meninjau kalkulasi saat ini. Kami tidak menggantikan pertimbangan teknis Anda; kami meniadakan friksi klerikal agar tim dapat fokus pada presisi teknis.",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Insinyur sipil meninjau denah dan spesifikasi infrastruktur",
        imageCaption:
          "Gambar teknik, spesifikasi, dan perhitungan BOQ terhubung dalam satu ruang kerja yang teruji.",
        keyMetric: "30 mnt",
        keyMetricLabel: "Rata-rata waktu penyusunan dari layer CAD ke anggaran tender final",
      },
      {
        id: "operations",
        num: "02",
        tabLabel: "Operasional Bisnis",
        tag: "SISTEM PILIHAN: OPERASIONAL BISNIS",
        headline: "Dari tugas kantor yang berserakan menjadi tulang punggung operasional yang handal.",
        summary:
          "Droppfloww membantu tim kantor mengurangi kerja admin berulang, menyatukan alat yang terpisah, dan menjaga laporan keuangan, jadwal, serta data pelanggan bergerak lancar.",
        beforeHeadline:
          "Data pelanggan, faktur, mutasi bank, dan catatan proyek terjebak dalam dokumen terpisah.",
        beforeDetail:
          "Rincian tugas datang lewat email, disalin ke spreadsheet, dipindahkan ke software akuntansi, dan dikompilasi ulang secara manual untuk laporan akhir minggu.",
        afterHeadline:
          "Data mengalir antar sistem secara otomatis sementara staf Anda tetap memiliki pengawasan penuh.",
        afterDetail:
          "Faktur dicocokkan otomatis dengan pembayaran bank, data pelanggan tersinkronisasi tanpa entri ganda, dan ringkasan eksekutif mingguan tersaji tepat waktu.",
        capabilities: [
          "Pencocokan faktur otomatis",
          "Sinkronisasi lintas aplikasi",
          "Perutean persetujuan cerdas",
          "Ringkasan eksekutif mingguan",
          "Portal operasional terpusat",
        ],
        philosophy:
          "Dibangun mengikuti proses Anda, bukan sebaliknya. Kami tidak meminta tim Anda meninggalkan alat yang sudah berjalan atau beradaptasi dengan software yang rumit. Kami membangun lapisan cepat dan bersih yang menjaga informasi mengalir lancar.",
        imageUrl:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Ruang kerja operasional modern yang rapi",
        imageCaption:
          "Tulang punggung operasional terpusat yang menghubungkan catatan pelanggan, keuangan, dan penjadwalan tim.",
        keyMetric: "12+ jam",
        keyMetricLabel: "Dihemat per staf setiap minggu dari tugas administrasi berulang",
      },
      {
        id: "logistics",
        num: "03",
        tabLabel: "Logistik & Armada",
        tag: "SISTEM PILIHAN: LOGISTIK & ARMADA",
        headline: "Dari grup obrolan pengemudi yang riuh ke visibilitas armada real-time.",
        summary:
          "Droppfloww membantu operator pengiriman dan armada mengelola surat jalan, bukti pengiriman, dan status kendaraan dalam satu alur kerja transparan.",
        beforeHeadline:
          "Pemberitahuan pengemudi hilang dalam ratusan pesan chat tanpa catatan status resmi.",
        beforeDetail:
          "Staf dispatch menghabiskan pagi dengan membagikan surat jalan via foto chat, pengemudi terlambat menerima rute baru, dan tanda terima fisik memakan waktu berminggu-minggu sebelum dapat ditagihkan.",
        afterHeadline:
          "Setiap muatan terpantau dari penugasan hingga tanda terima digital yang langsung terhubung ke invoice.",
        afterDetail:
          "Pengemudi mengonfirmasi status lewat antarmuka web ringan yang hemat kuota, bukti pengiriman foto tersimpan instan, dan penagihan ke klien berjalan tanpa sengketa dokumen.",
        capabilities: [
          "Konsol dispatch pengemudi",
          "Bukti pengiriman digital (POD)",
          "Pelacakan armada real-time",
          "Otomatisasi invoice angkutan",
          "Audit rute & konsumsi BBM",
        ],
        philosophy:
          "Dibangun untuk keandalan di lapangan. Sistem dirancang ringan, mudah digunakan di ponsel dengan sinyal minim, dan dapat langsung dipahami oleh pengemudi tanpa pelatihan rumit.",
        imageUrl:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Pusat logistik armada transportasi",
        imageCaption:
          "Manajemen armada terpadu: dari penugasan jalan hingga bukti tanda terima digital.",
        keyMetric: "100%",
        keyMetricLabel: "Rute perjalanan terverifikasi sesuai aturan margin dan kepatuhan BBM",
      },
      {
        id: "healthcare",
        num: "04",
        tabLabel: "Layanan Kesehatan & Klinik",
        tag: "SISTEM PILIHAN: LAYANAN KESEHATAN",
        headline: "Dari tumpukan formulir kertas dan telepon berdering ke alur pasien yang tertib.",
        summary:
          "Droppfloww membantu klinik medis, praktik dokter gigi, dan penyedia layanan memangkas ketidakhadiran, mengumpulkan formulir sebelum pasien tiba, dan mengatur jadwal kunjungan kembali.",
        beforeHeadline:
          "Staf resepsionis kewalahan menjawab telepon, mengelola berkas fisik, dan mencatat jadwal secara manual.",
        beforeDetail:
          "Pagi dihabiskan menelepon konfirmasi pasien satu per satu, formulir kertas harus diketik ulang ke komputer, dan pembatalan mendadak meninggalkan kursi dokter kosong.",
        afterHeadline:
          "Pasien mengonfirmasi jadwal lewat ponsel dan staf klinis fokus sepenuhnya pada pelayanan medis.",
        afterDetail:
          "Pasien mengisi formulir sebelum tiba, pengingat WhatsApp otomatis menjaga kehadiran tetap tinggi, dan jadwal kontrol teratur meningkatkan kepuasan pasien.",
        capabilities: [
          "Kalender penjadwalan praktisi",
          "Pengingat WhatsApp otomatis",
          "Formulir masuk digital mobile",
          "Pengingat kontrol berkala",
          "Koordinasi ruang perawatan",
        ],
        philosophy:
          "Dibangun mengikuti standar klinis Anda. Protokol medis Anda tetap menjadi prioritas utama. Kami meringankan beban administrasi meja depan agar staf dapat menyambut pasien dengan ramah dan penuh perhatian.",
        imageUrl:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Ruang konsultasi klinik modern",
        imageCaption:
          "Formulir digital tanpa kertas, konfirmasi janji temu otomatis, dan kalender dokter terpadu.",
        keyMetric: "68%",
        keyMetricLabel: "Penurunan pembatalan sepihak berkat konfirmasi otomatis",
      },
      {
        id: "education",
        num: "05",
        tabLabel: "Pendidikan & Akademi",
        tag: "SISTEM PILIHAN: PENDIDIKAN",
        headline: "Dari papan tulis jadwal yang rumit ke koordinasi akademik yang teratur.",
        summary:
          "Droppfloww membantu sekolah, lembaga bimbingan belajar, dan pusat pelatihan mengatur jadwal kelas tanpa bentrok ruangan, mengotomatisasi pesan orang tua, dan memantau SPP dengan jelas.",
        beforeHeadline:
          "Perubahan jadwal menyebabkan bentrok ruangan dan pendaftaran murid tersebar di berbagai chat grup.",
        beforeDetail:
          "Koordinator menghabiskan waktu berjam-jam menyelesaikan jadwal di papan tulis, bukti transfer terselip di rekening pribadi, dan staf harus menghubungi orang tua satu per satu saat ada pergantian sesi.",
        afterHeadline:
          "Satu kalender pusat menyelaraskan ruang kelas, pengajar, daftar siswa, dan status pembayaran SPP.",
        afterDetail:
          "Jadwal guru dan ruangan menyesuaikan secara bebas konflik, pengumuman terkirim otomatis lewat saluran resmi, dan status pendaftaran terpantau secara real-time.",
        capabilities: [
          "Penyusun jadwal bebas bentrok",
          "Pengumuman otomatis ke orang tua",
          "Pipeline pendaftaran siswa",
          "Buku besar SPP terpadu",
          "Portal pencatatan kehadiran",
        ],
        philosophy:
          "Menghormati ritme akademik institusi Anda. Sistem mendukung pengajar dan koordinator tanpa menambah kerumitan teknis pada rutinitas mengajar harian mereka.",
        imageUrl:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Lingkungan belajar akademi modern",
        imageCaption:
          "Penjadwalan kelas bebas bentrok, pengumuman otomatis ke orang tua, dan pelacakan biaya terintegrasi.",
        keyMetric: "0",
        keyMetricLabel: "Bentrok ruangan atau guru dengan sistem penjadwalan cerdas bebas konflik",
      },
    ];
  }

  if (language === "zh") {
    return [
      {
        id: "infrastructure",
        num: "01",
        tabLabel: "基建与工程",
        tag: "精选系统：基础设施与工程",
        headline: "告别分散脱节的工程碎片，迈入统一顺畅的数字流水线。",
        summary:
          "Droppfloww 助力工程与基础设施团队将图纸、造价算量、多级签核、项目数据与分析报表聚合至统一系统，彻底告别重复琐事，让项目数据清晰可查。",
        beforeHeadline:
          "施工图纸、电子表格、报价清单、签核邮件散落在不同软件中，难以对齐。",
        beforeDetail:
          "造价预算员手动逐页核对 CAD 施工图，在繁杂表格间机械抄写管道与材料规格，并在投标截止前夕焦头烂额地通过邮件催促审批。版本失序在数千万量级的投标合同中蕴含致命风险。",
        afterHeadline:
          "工程数据通过严密结构化的系统自动流转，核心技术裁决始终由工程师把关掌控。",
        afterDetail:
          "工程量直接从源图纸中精准提取，单价公式与定额指标保持锁定，带完整审计记录的授权签核直接在系统内完成。让您的团队以严谨的数据底气快速截标。",
        capabilities: [
          "图纸与规范统一接入",
          "工程量清单 (BOQ) 智能归集",
          "多级成本测算核验",
          "多层级授权审批流",
          "项目履约实时报表",
        ],
        philosophy:
          "系统为您的既有业务量身定制，绝不要求您迁就软件。我们深入调研预算员、项目经理与总监当前核算指标的真实方式。我们不会取代工程师的专业判断，而是彻底剥离琐碎文书摩擦，让您的团队全神贯注于技术攻关。",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "土木工程师正在审查蓝图与基础设施技术规格",
        imageCaption:
          "工程图纸、技术规格与工程量清单 (BOQ) 在统一的合规工作空间中实时联动。",
        keyMetric: "30 分钟",
        keyMetricLabel: "从 CAD 图层读取到生成最终投标预算的平均耗时",
      },
      {
        id: "operations",
        num: "02",
        tabLabel: "企业综合运营",
        tag: "精选系统：企业综合运营",
        headline: "告别繁冗杂乱的日常琐务，筑牢沉稳可靠的企业运营中枢。",
        summary:
          "Droppfloww 助力办公运营团队大幅削减重复文书，打通孤立工具，使财税对账、排期计划与客户台账在清爽的闭环流程中运转。",
        beforeHeadline:
          "客户资料、发票据证、银行账单与项目备忘深陷在信息孤岛中。",
        beforeDetail:
          "业务细节通过电子邮件涌入，员工在客户表格上手工誊录，再手动转录进财税软件，周五还要重新拼凑周报。大量高薪工时被低效的复制粘贴无情蚕食。",
        afterHeadline:
          "数据在各工具间自动贯通同步，管理团队享有全景透视与最终把控权。",
        afterDetail:
          "收付款流水到达即自动智能对账，客户记录跨平台无缝同步杜绝重复录入，管理层决策周报准时生成，无需再催促同事交表。",
        capabilities: [
          "全自动发票收付对账",
          "跨工具系统数据实时同步",
          "智能审批流调度",
          "管理层周度业务简报",
          "集约化运营统一门户",
        ],
        philosophy:
          "以您的组织流程为本。我们绝不强迫您的团队舍弃用得顺手的工具，也不推销带有几百个无用菜单的臃肿软件。我们构建的是一层轻盈、敏捷的高效协同层，使关键数据顺畅流向需要它的人员手中。",
        imageUrl:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "现代高效企业运营办公空间",
        imageCaption:
          "集约化运营中枢，贯通客户资料、财务对账与团队排程。",
        keyMetric: "12+ 小时",
        keyMetricLabel: "每位员工每周在机械行政琐事上节省的宝贵时间",
      },
      {
        id: "logistics",
        num: "03",
        tabLabel: "物流与车队调度",
        tag: "精选系统：物流与车队调度",
        headline: "告别喧闹混乱的司机群聊，实现车队在途与交付的全局透视。",
        summary:
          "Droppfloww 助力物流托运与车队调度管理运单派发、电子签收单 (POD)、在途异常与合规审查，构建透明有序的一体化流水线。",
        beforeHeadline:
          "调度通知与运单变更被淹没在海量聊天记录中，缺乏可靠的留痕与追踪。",
        beforeDetail:
          "调度员清晨花费数小时在群内逐个拍照发送派车单，在途延误难以及时响应，纸质签收单需要数周才能寄回并入账开票。",
        afterHeadline:
          "每趟车次运单自指派至电子签收均实时可视，并即时关联发票结算。",
        afterDetail:
          "司机通过轻量级移动网页一键签到与拍照上传凭据，系统自动校对收货回单并即刻触发客户对账开票，杜绝结算纠纷。",
        capabilities: [
          "移动调度看板",
          "数字电子签收凭单 (POD)",
          "在途异常实时预警",
          "运单自动结算对账",
          "合规运力审计",
        ],
        philosophy:
          "为严苛的现场一线而设计。系统轻量迅速、在弱网环境下也能稳定缓存运行，无需任何繁复培训，一线驾驶员两分钟内即可完全上手。",
        imageUrl:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "物流货运枢纽与车队作业",
        imageCaption:
          "一体化车队运力中枢：从派单起运到数字电子签收全程闭环。",
        keyMetric: "100%",
        keyMetricLabel: "所有运输航线与车次均实现油耗、时效与利润底线的合规核验",
      },
      {
        id: "healthcare",
        num: "04",
        tabLabel: "医疗与诊所门诊",
        tag: "精选系统：医疗与诊所门诊",
        headline: "告别手写登记与电话催促，缔造井然有序的就医与诊疗体验。",
        summary:
          "Droppfloww 助力综合诊所、牙科门诊与专业机构降低爽约空台率，在患者到店前完成无纸化问卷采集，并实现回访复诊自动提醒。",
        beforeHeadline:
          "前台接待人员深陷于电话应答、纸质问卷录入与手工预约本翻查之中。",
        beforeDetail:
          "前台整个上午都在通过电话反复核对明天的预约，手写的健康问卷还需重新键入电脑，临时爽约造成昂贵的医疗诊疗台位闲置浪费。",
        afterHeadline:
          "患者在手机端便捷确认日程，医护人员得以全神贯注于优质诊疗照护。",
        afterDetail:
          "患者通过清爽的预约门户登记，到店前即可在手机端完成问卷，WhatsApp 自动温馨提醒确保高出勤率，复诊召回序列让患者按时归期。",
        capabilities: [
          "医师多台位预约看板",
          "WhatsApp 智能双向提醒",
          "移动端无纸化病历采集",
          "疗程后自动随访召回",
          "诊室资源集约调度",
        ],
        philosophy:
          "严密契合您的专业门诊规程。我们绝不干预您的临床决策与诊疗方案，而是彻底移走前台与文案的繁重枷锁，让医护人员以饱满的热情专注于每一位患者。",
        imageUrl:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "现代化整洁医疗诊室",
        imageCaption:
          "手机端移动问卷、全自动预约确认与多诊室医师综合排程。",
        keyMetric: "68%",
        keyMetricLabel: "通过双向自动化预约提醒降低的空台爽约率",
      },
      {
        id: "education",
        num: "05",
        tabLabel: "教育与培训学院",
        tag: "精选系统：教育与学院",
        headline: "告别手写白板课表，迈向条理井然的现代化教务统筹。",
        summary:
          "Droppfloww 助力学校、辅导机构与职业培训中心实现零冲突智能排课、家长自动化沟通通报，并清晰管控学员缴费与入读台账。",
        beforeHeadline:
          "调课改期频繁引发教室与名师冲突，招生缴费凭据零散分布在各个群组。",
        beforeDetail:
          "教务人员花费数小时在白板上苦苦排查教师与教室重叠，学费转账隐藏在个人银行流水中，周末还要手动逐一通知家长上课时间调整。",
        afterHeadline:
          "统一教务中枢精确联动教室、授课导师、学员花名册与学费对账状态。",
        afterDetail:
          "教室与教师资源实现零冲突自动排布，家长学情通知通过官方通道自动即时触达，学生报名招生看板实时呈现考勤与缴费状况。",
        capabilities: [
          "零冲突智能排课引擎",
          "家长学情通知自动推达",
          "学员招生与缴费管道",
          "学杂费智能核销台账",
          "学生考勤打卡门户",
        ],
        philosophy:
          "恪守尊重教育机构的教学规律与学期节奏。系统旨在赋能教务与授课名师，绝不给他们的日常教学平添技术负担。",
        imageUrl:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "现代学院教学与研讨环境",
        imageCaption:
          "零冲突智能排课、家长自动化沟通与集成化学费管理中枢。",
        keyMetric: "0",
        keyMetricLabel: "通过智能排课算法彻底杜绝的教室重叠与课程冲突事件",
      },
    ];
  }

  if (language === "es") {
    return [
      {
        id: "infrastructure",
        num: "01",
        tabLabel: "Infraestructura",
        tag: "SISTEMA SELECCIONADO: INFRAESTRUCTURA",
        headline: "Del trabajo de ingeniería fragmentado a un flujo de trabajo conectado.",
        summary:
          "Droppfloww ayuda a los equipos de ingeniería e infraestructura a centralizar planos, estimaciones, aprobaciones, datos de proyectos e informes en un solo sistema, reduciendo el trabajo repetitivo y facilitando la revisión.",
        beforeHeadline:
          "Planos, hojas de cálculo, precios, aprobaciones e información viven en herramientas separadas.",
        beforeDetail:
          "Los estimadores revisan planos CAD hoja por hoja manualmente, reescriben especificaciones en hojas de cálculo y persiguen aprobaciones por correo antes de licitar.",
        afterHeadline:
          "La información fluye a través de un flujo estructurado, manteniendo a los ingenieros en control de las decisiones clave.",
        afterDetail:
          "Las cantidades se extraen directamente de los planos, los cálculos de costos permanecen vinculados a fórmulas verificadas y las firmas ocurren dentro del sistema con auditoría completa.",
        capabilities: [
          "Recepción de planos y documentos",
          "Preparación de BOQ",
          "Cálculos de costos",
          "Flujos de aprobación",
          "Informes de proyectos",
        ],
        philosophy:
          "Construido en torno a su proceso actual, no al revés. Estudiamos cómo sus estimadores y directores revisan los cálculos hoy. No reemplazamos el criterio de ingeniería; eliminamos la fricción administrativa para que su equipo se centre en la precisión técnica.",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Ingenieros civiles revisando planos y especificaciones de infraestructura",
        imageCaption:
          "Planos de ingeniería, especificaciones y BOQ conectados en un único espacio de trabajo auditado.",
        keyMetric: "30 min",
        keyMetricLabel: "Tiempo promedio desde capas CAD hasta el presupuesto final de licitación",
      },
      {
        id: "operations",
        num: "02",
        tabLabel: "Operaciones Comerciales",
        tag: "SISTEMA SELECCIONADO: OPERACIONES",
        headline: "De tareas de oficina dispersas a una columna vertebral operativa confiable.",
        summary:
          "Droppfloww ayuda a los equipos de oficina a reducir el trabajo administrativo repetitivo, conectar herramientas desconectadas y mantener informes, finanzas y registros en un flujo limpio.",
        beforeHeadline:
          "Registros de clientes, facturas, extractos bancarios y notas de proyectos permanecen atrapados en silos separados.",
        beforeDetail:
          "Los detalles llegan por correo, se escriben en hojas de cálculo, se trasladan a contabilidad y se compilan manualmente para la dirección semanal.",
        afterHeadline:
          "Los datos se mueven entre herramientas automáticamente mientras su personal conserva visibilidad total.",
        afterDetail:
          "Las facturas coinciden con extractos bancarios a medida que llegan pagos, los clientes se sincronizan sin duplicados y los resúmenes ejecutivos se compilan a tiempo.",
        capabilities: [
          "Conciliación automática de facturas",
          "Sincronización entre herramientas",
          "Enrutamiento de aprobaciones",
          "Resúmenes ejecutivos semanales",
          "Portal de operaciones centralizado",
        ],
        philosophy:
          "Construido en torno a su proceso actual. No le pedimos a su equipo que descarte herramientas útiles ni que se adapte a software sobrecargado. Construimos una capa limpia y rápida que mantiene la información en movimiento.",
        imageUrl:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Espacio de trabajo moderno de operaciones empresariales",
        imageCaption:
          "Columna vertebral operativa centralizada que conecta registros de clientes, finanzas y horarios del equipo.",
        keyMetric: "12+ hrs",
        keyMetricLabel: "Ahorradas por miembro del personal cada semana en tareas administrativas repetitivas",
      },
      {
        id: "logistics",
        num: "03",
        tabLabel: "Logística y Flota",
        tag: "SISTEMA SELECCIONADO: LOGÍSTICA Y FLOTA",
        headline: "De grupos caóticos de mensajería a visibilidad de flota en tiempo real.",
        summary:
          "Droppfloww ayuda a los operadores de carga y flotas a gestionar albaranes, pruebas de entrega y estado de vehículos en un flujo transparente.",
        beforeHeadline:
          "Las notificaciones a conductores se pierden en cientos de mensajes de chat sin registro oficial.",
        beforeDetail:
          "El personal de despacho pasa la mañana compartiendo hojas de ruta por fotos de chat, los conductores reciben rutas con retraso y los recibos físicos tardan semanas en facturarse.",
        afterHeadline:
          "Cada carga se rastrea desde la asignación hasta el recibo digital vinculado a la facturación.",
        afterDetail:
          "Los conductores confirman el estado mediante una interfaz web ligera, las pruebas de entrega con foto se guardan al instante y la facturación se ejecuta sin disputas.",
        capabilities: [
          "Consola de despacho para conductores",
          "Prueba de entrega digital (POD)",
          "Seguimiento de flota en tiempo real",
          "Automatización de facturación",
          "Auditoría de rutas y combustible",
        ],
        philosophy:
          "Diseñado para la confiabilidad sobre el terreno. El sistema es ligero, funciona en condiciones de baja conectividad y es intuitivo para los conductores sin necesidad de formación compleja.",
        imageUrl:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Centro de transporte y operaciones de flota",
        imageCaption:
          "Gestión de flota unificada: desde la asignación de rutas hasta la prueba de entrega digital.",
        keyMetric: "100%",
        keyMetricLabel: "Rutas de transporte auditadas según reglas de combustible y margen",
      },
      {
        id: "healthcare",
        num: "04",
        tabLabel: "Salud y Clínicas",
        tag: "SISTEMA SELECCIONADO: SALUD",
        headline: "De portapapeles de papel y teléfonos sonando a un flujo tranquilo de pacientes.",
        summary:
          "Droppfloww ayuda a clínicas médicas, consultorios dentales y proveedores a reducir inasistencias, recopilar formularios de admisión y mantener citas de control en orden.",
        beforeHeadline:
          "El personal de recepción lidia con llamadas telefónicas, formularios de papel y libros de citas manuales.",
        beforeDetail:
          "Las recepcionistas pasan la mañana confirmando citas por teléfono, las hojas de papel se deben transcribir y las citas olvidadas dejan sillas vacías.",
        afterHeadline:
          "Los pacientes confirman visitas en sus teléfonos y el personal clínico se centra plenamente en la atención.",
        afterDetail:
          "Los pacientes reservan a través de un portal limpio, completan formularios en el móvil antes de llegar y recordatorios automatizados de WhatsApp mantienen la asistencia alta.",
        capabilities: [
          "Calendario de citas para especialistas",
          "Recordatorios automáticos de WhatsApp",
          "Admisión móvil sin papel",
          "Secuencias de seguimiento",
          "Coordinación de salas",
        ],
        philosophy:
          "Construido en torno a sus protocolos existentes. Sus estándares clínicos permanecen intactos. Simplemente eliminamos el peso administrativo de la recepción para que su personal atienda con dedicación.",
        imageUrl:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Sala de consulta de clínica moderna y limpia",
        imageCaption:
          "Admisión móvil sin papel, confirmaciones automáticas de citas y programación para múltiples especialistas.",
        keyMetric: "68%",
        keyMetricLabel: "Reducción de cancelaciones de última hora gracias a confirmaciones automatizadas",
      },
      {
        id: "education",
        num: "05",
        tabLabel: "Educación y Academias",
        tag: "SISTEMA SELECCIONADO: EDUCACIÓN",
        headline: "De horarios en pizarras a una coordinación académica estructurada.",
        summary:
          "Droppfloww ayuda a academias y centros de formación a programar clases sin conflictos de aulas, automatizar mensajes a padres y gestionar matrículas con claridad.",
        beforeHeadline:
          "Los cambios de horario causan dobles reservas de aulas y las admisiones se dispersan en chats.",
        beforeDetail:
          "Los coordinadores pasan horas resolviendo solapamientos de aulas en pizarras y el personal avisa manualmente a los padres los fines de semana.",
        afterHeadline:
          "Un calendario central sincroniza aulas, instructores, listas de estudiantes y estado de pagos.",
        afterDetail:
          "Los horarios de aulas y profesores se ajustan sin conflictos, los avisos a padres se envían automáticamente y la admisión se visualiza en tiempo real.",
        capabilities: [
          "Planificador de horarios sin conflicto",
          "Actualizaciones automáticas a padres",
          "Embudo de admisiones",
          "Libro de matrículas y pagos",
          "Portal de asistencia",
        ],
        philosophy:
          "Respetamos los ritmos académicos de su institución. El sistema respalda a sus profesores y coordinadores sin agregar complejidad técnica a su día.",
        imageUrl:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Ambiente de estudio y aprendizaje en academia moderna",
        imageCaption:
          "Horarios sin conflictos, anuncios automáticos a padres y seguimiento integrado de matrículas.",
        keyMetric: "0",
        keyMetricLabel: "Conflictos de reserva de aulas gracias al programador inteligente",
      },
    ];
  }

  // Default: English
  return [
    {
      id: "infrastructure",
      num: "01",
      tabLabel: "Infrastructure",
      tag: "SELECTED SYSTEM: INFRASTRUCTURE",
      headline: "From fragmented engineering work to one connected workflow.",
      summary:
        "Droppfloww helps engineering and infrastructure teams bring drawings, estimates, approvals, project data, and reporting into one system, reducing repetitive work and making information easier to review.",
      beforeHeadline:
        "Drawings, spreadsheets, pricing, approvals, and project information live across separate tools.",
      beforeDetail:
        "Estimators manually trace CAD drawings sheet by sheet, re-type pipe and material specifications into separate spreadsheets, and chase email approvals right before tender submission deadlines. Version mismatches create serious risk on multi-million dollar contracts.",
      afterHeadline:
        "Information moves through one structured workflow, while engineers remain in control of important decisions.",
      afterDetail:
        "Quantities extract directly from source drawings, unit cost calculations remain locked to verified formulas, and authenticated sign-offs happen inside the system with a complete audit history. Your team tenders faster with total confidence in the numbers.",
      capabilities: [
        "Drawing & document intake",
        "BOQ preparation",
        "Cost calculations",
        "Approval workflows",
        "Project reporting",
      ],
      philosophy:
        "Built around your existing process, not the other way around. We study how your estimators, project managers, and directors actually review calculations today. We do not replace your engineering judgment. We remove the clerical friction so your team can focus on technical precision.",
      imageUrl:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Civil engineers reviewing blueprints and infrastructure specifications",
      imageCaption:
        "Engineering drawings, specifications, and BOQ takeoff connected in a single audited workspace.",
      keyMetric: "30 min",
      keyMetricLabel: "Average turnaround from CAD layers to final tender budget",
    },
    {
      id: "operations",
      num: "02",
      tabLabel: "Business Operations",
      tag: "SELECTED SYSTEM: BUSINESS OPERATIONS",
      headline: "From scattered office tasks to one dependable operating backbone.",
      summary:
        "Droppfloww helps office teams reduce repetitive admin work, connect disconnected tools, and keep reporting, finance, scheduling, and customer records moving in one clean workflow.",
      beforeHeadline:
        "Customer records, invoices, bank statements, and project notes remain trapped in separate silos.",
      beforeDetail:
        "Details arrive in email threads, get typed into client spreadsheets, moved into accounting software, and manually re-compiled for Friday management updates. Teams spend valuable hours doing routine clerical copy and paste.",
      afterHeadline:
        "Data moves between tools automatically while your staff retains full visibility and oversight.",
      afterDetail:
        "Invoices match bank records as payments arrive, customer records synchronize across platforms without double entry, and weekly executive digests compile on schedule without anyone having to chase colleagues for numbers.",
      capabilities: [
        "Automated invoice matching",
        "Cross-tool record sync",
        "Approval routing",
        "Weekly executive digests",
        "Centralized operations portal",
      ],
      philosophy:
        "Built around your existing process, not the other way around. We do not ask your team to discard tools that work or adapt to bloated software with hundreds of unused menus. We build a clean, fast layer that keeps information moving between the people who need it.",
      imageUrl:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Clean modern business operations workspace with team working on financial records",
      imageCaption:
        "Centralized operational backbone connecting customer records, finance, and team scheduling.",
      keyMetric: "12+ hrs",
      keyMetricLabel: "Saved per staff member each week on repetitive clerical admin",
    },
    {
      id: "logistics",
      num: "03",
      tabLabel: "Logistics & Fleet",
      tag: "SELECTED SYSTEM: LOGISTICS & FLEET",
      headline: "From frantic driver chat groups to live operational visibility.",
      summary:
        "Droppfloww helps freight and fleet operators track manifests, proof of delivery, vehicle maintenance schedules, and live route status in one transparent workflow.",
      beforeHeadline:
        "Dispatch instructions, route changes, and delivery confirmations get buried in chaotic WhatsApp chats.",
      beforeDetail:
        "Dispatch coordinators spend mornings copying waybills into messaging groups, drivers miss updated loading windows, and physical receipt slips take weeks to return to office accounting for billing.",
      afterHeadline:
        "Every consignment tracks from assignment to digital proof of delivery, triggering invoices without delay.",
      afterDetail:
        "Drivers confirm job stages via a clean mobile web view requiring zero training, photo signatures upload instantly to customer profiles, and invoices dispatch same-day with complete time-stamped proof.",
      capabilities: [
        "Mobile-friendly driver view",
        "Digital proof of delivery (POD)",
        "Automated billing triggers",
        "Exception alert escalation",
        "Fleet maintenance ledger",
      ],
      philosophy:
        "Engineered for field reliability. The mobile interface uses minimal bandwidth, works smoothly in warehouse dead-zones, and gives drivers clear, uncluttered tasks without forcing them to learn corporate software.",
      imageUrl:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Logistics freight transport hub and organized fleet operations",
      imageCaption:
        "Integrated transport management linking route allocation, driver sign-offs, and instant invoicing.",
      keyMetric: "100%",
      keyMetricLabel: "Transport routes audited against live fuel and vehicle margin rules",
    },
    {
      id: "healthcare",
      num: "04",
      tabLabel: "Healthcare & Clinics",
      tag: "SELECTED SYSTEM: HEALTHCARE & LOCAL SERVICES",
      headline: "From paper clipboards and ringing phones to calm patient flow.",
      summary:
        "Droppfloww helps medical clinics, dental practices, and local service providers cut empty-chair no-shows, collect intake forms before patients arrive, and keep recall appointments on track.",
      beforeHeadline:
        "Front desk staff juggle phone calls, paper clipboards, and manual appointment ledgers.",
      beforeDetail:
        "Receptionists spend all morning confirming tomorrow's calendar by phone, paper intake sheets must be re-typed into clinic records, and forgotten appointments leave practitioners with expensive empty chairs.",
      afterHeadline:
        "Patients confirm visits on their phones and clinical staff focus entirely on care.",
      afterDetail:
        "Patients book through a clean scheduling portal, intake forms are completed on mobile phones prior to arrival, and automated WhatsApp reminders keep attendance high while recall sequences bring patients back on time.",
      capabilities: [
        "Practitioner calendar engine",
        "Automated WhatsApp reminders",
        "Mobile paperless intake",
        "Post-treatment recall sequences",
        "Treatment room coordination",
      ],
      philosophy:
        "Built around your existing process, not the other way around. Your clinical protocols remain untouched. We simply remove the administrative weight from reception so your staff can greet patients with undivided attention.",
      imageUrl:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Modern clean clinic consultation room and reception",
      imageCaption:
        "Paperless mobile intake, automated appointment confirmations, and multi-chair practitioner scheduling.",
      keyMetric: "68%",
      keyMetricLabel: "Reduction in empty-chair cancellations through automated confirmation",
    },
    {
      id: "education",
      num: "05",
      tabLabel: "Education & Academies",
      tag: "SELECTED SYSTEM: EDUCATION & ACADEMIES",
      headline: "From whiteboard timetables to structured academic coordination.",
      summary:
        "Droppfloww helps schools, tutoring academies, and training centers schedule classes without room conflicts, automate parent communications, and manage student tuition tracking with clarity.",
      beforeHeadline:
        "Timetable adjustments cause double-booked rooms and admissions scatter across chat groups.",
      beforeDetail:
        "Coordinators spend hours resolving room and teacher overlaps on dry-erase boards, tuition payments hide across personal bank transfers, and staff spend weekends manually messaging parents about schedule changes.",
      afterHeadline:
        "One central calendar synchronizes rooms, instructors, student rosters, and fee status.",
      afterDetail:
        "Room and teacher schedules adjust without conflicts, parent announcements send automatically through official channels, and student enrolment pipelines show attendance and tuition balance in real time.",
      capabilities: [
        "Conflict-free timetable planner",
        "Automated parent updates",
        "Enrolment and intake pipeline",
        "Tuition fee ledger",
        "Attendance tracking portal",
      ],
      philosophy:
        "Built around your existing process, not the other way around. We respect the academic calendar and grading rhythms of your institution. The system supports your teachers and coordinators without adding technical complexity to their day.",
      imageUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Modern educational academy study and learning environment",
      imageCaption:
        "Conflict-free class scheduling, automated parent announcements, and integrated tuition tracking.",
      keyMetric: "0",
      keyMetricLabel: "Classroom double-bookings with automated conflict-free scheduling",
    },
  ];
}
