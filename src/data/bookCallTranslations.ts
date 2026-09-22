export interface BookCallTranslations {
  badge: string;
  title: string;
  desc: string;
  founderRole: string;
  directWhatsApp: string;
  months: string[];
  weekdays: string[];
  selectDateSub: string;
  detectedTimezone: string;
  legendSelected: string;
  legendOpen: string;
  legendBooked: string;
  durationNote: string;
  timezoneDropdownLabel: string;
  allBookedTitle: string;
  allBookedDesc: (dateHeader: string) => string;
  availableTimes: string;
  selectSlotPrompt: string;
  selectedBadge: string;
  selectArrow: string;
  selectedSlotLabel: string;
  dateIsFull: string;
  selectedTimeBanner: (dateHeader: string, time: string, tz: string) => string;
  changeDateTime: string;
  formTitle: string;
  formSubtitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  nameError: string;
  workEmailLabel: string;
  workEmailPlaceholder: string;
  emailError: string;
  companyLabel: string;
  companyPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  platformLabel: string;
  platforms: { id: string; label: string; note: string }[];
  focusQuestion: string;
  focusSectorHint: string;
  sectorChips: { id: string; label: string; full: string }[];
  topicPlaceholder: string;
  dispatchNotice: string;
  submitButton: string;
  submittingButton: string;
  coordinateWhatsApp: string;
  // Confirmed view
  confirmedTitle: string;
  confirmedSubtitle: string;
  summaryDateTime: string;
  summaryAttendee: string;
  summaryHost: string;
  summaryEmail: string;
  summaryWhatsApp: string;
  summaryRef: string;
  btnEmailKentley: string;
  btnGoogleCalendar: string;
  btnWhatsAppKentley: string;
  btnDownloadIcs: string;
  btnScheduleAnother: string;
  dateErrorFull: string;
  whatsAppMessagePrefill: (date: string, time: string, name?: string) => string;
}

export function getBookCallTranslations(language: string): BookCallTranslations {
  if (language === "id") {
    return {
      badge: "Keterlibatan Pendiri Langsung",
      title: "Jadwalkan konsultasi sistem 30 menit.",
      desc: "Pilih tanggal dan waktu dalam zona waktu lokal Anda. Setelah memilih slot, detail demonstrasi langsung diformat untuk Founder & CEO Kentley (wongkentley@gmail.com).",
      founderRole: "Pendiri & CEO",
      directWhatsApp: "Chat WhatsApp Langsung",
      months: [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ],
      weekdays: ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"],
      selectDateSub: "Pilih tanggal yang tersedia di bawah ini",
      detectedTimezone: "Zona Waktu Terdeteksi",
      legendSelected: "Dipilih",
      legendOpen: "Tersedia",
      legendBooked: "Penuh",
      durationNote: "30 menit demonstrasi operasional",
      timezoneDropdownLabel: "Menampilkan waktu dalam zona waktu Anda:",
      allBookedTitle: "Jadwal Penuh.",
      allBookedDesc: (dateHeader) =>
        `${dateHeader} tidak memiliki slot tersedia. Silakan pilih tanggal lain pada kalender.`,
      availableTimes: "Waktu Tersedia",
      selectSlotPrompt: "Pilih slot di bawah",
      selectedBadge: "Dipilih",
      selectArrow: "Pilih →",
      selectedSlotLabel: "Slot Dipilih:",
      dateIsFull: "Tanggal sudah penuh",
      selectedTimeBanner: (dateHeader, time, tz) =>
        `Waktu Dipilih: ${dateHeader} pukul ${time} (${tz})`,
      changeDateTime: "Ubah tanggal atau waktu",
      formTitle: "Siapa yang akan menghadiri konsultasi?",
      formSubtitle:
        "Lengkapi detail Anda di bawah ini. Permintaan Anda dikirim langsung ke Founder & CEO Kentley di wongkentley@gmail.com.",
      fullNameLabel: "Nama lengkap",
      fullNamePlaceholder: "cth. David Suhartono",
      nameError: "Masukkan nama lengkap Anda (minimal 2 karakter).",
      workEmailLabel: "Email kantor",
      workEmailPlaceholder: "david@perusahaan.com",
      emailError: "Masukkan alamat email kantor yang valid.",
      companyLabel: "Perusahaan / Instansi",
      companyPlaceholder: "cth. PT Mitra Logistik Indonesia",
      phoneLabel: "WhatsApp / Telepon",
      phonePlaceholder: "cth. +62 812-3456-7890",
      platformLabel: "Media Pertemuan",
      platforms: [
        { id: "Google Meet", label: "Google Meet", note: "Tautan video otomatis" },
        { id: "WhatsApp Video / Call", label: "WhatsApp Direct", note: "+62 858-2046-7085" },
        { id: "Zoom", label: "Zoom Meeting", note: "Undangan konferensi" },
        { id: "Direct Phone Call", label: "Panggilan Langsung", note: "Panggilan seluler" },
      ],
      focusQuestion: "Alur kerja atau kendala apa yang ingin Anda konsultasikan?",
      focusSectorHint: "Pilih sektor atau tuliskan sendiri",
      sectorChips: [
        { id: "ops", label: "Operasional & Kantor", full: "Operasional & Kantor (admin, keuangan, CRM)" },
        { id: "eng", label: "Teknik & Konstruksi", full: "Teknik & Konstruksi (gambar CAD, BOQ, estimasi)" },
        { id: "edu", label: "Pendidikan", full: "Pendidikan (penerimaan, jadwal, komunikasi)" },
        { id: "health", label: "Kesehatan", full: "Kesehatan (klinik, administrasi pasien, klaim)" },
        { id: "log", label: "Logistik", full: "Logistik (inventaris, dispatch armada, pesanan)" },
      ],
      topicPlaceholder:
        "cth. Menghubungkan estimasi berkas gambar ke proposal klien, otomatisasi surat jalan WhatsApp ke ERP, atau pelacakan tugas lapangan...",
      dispatchNotice:
        "Konfirmasi langsung dengan Founder & CEO Kentley (wongkentley@gmail.com). Undangan kalender akan disiapkan untuk pengiriman segera.",
      submitButton: "Konfirmasi & Jadwalkan Konsultasi",
      submittingButton: "Meneruskan detail demo ke Kentley...",
      coordinateWhatsApp: "Atau koordinasikan via WhatsApp",
      confirmedTitle: "Jadwal konsultasi terkonfirmasi.",
      confirmedSubtitle:
        "Pertemuan Anda telah terdaftar untuk Founder & CEO Kentley di wongkentley@gmail.com. Anda dapat mengirimkan email konfirmasi langsung atau berkoordinasi melalui WhatsApp.",
      summaryDateTime: "Tanggal & Waktu",
      summaryAttendee: "Peserta",
      summaryHost: "Penyelenggara",
      summaryEmail: "Email Langsung",
      summaryWhatsApp: "Saluran WhatsApp",
      summaryRef: "ID Referensi",
      btnEmailKentley: "Kirim Email ke Kentley",
      btnGoogleCalendar: "Tambahkan ke Google Calendar",
      btnWhatsAppKentley: "WhatsApp Kentley",
      btnDownloadIcs: "Unduh File .ICS",
      btnScheduleAnother: "Jadwalkan konsultasi lain",
      dateErrorFull: "Tanggal yang dipilih telah penuh. Silakan klik tanggal lain pada kalender.",
      whatsAppMessagePrefill: (date, time, name) =>
        `Halo Kentley, saya ingin menjadwalkan demo sistem dengan Droppfloww pada ${date} pukul ${time}. ` +
        (name ? `Nama saya ${name}.` : ""),
    };
  }

  if (language === "zh") {
    return {
      badge: "直联创始人",
      title: "预约 30 分钟系统演示与诊断。",
      desc: "请选择适合您本地时区的日期与时间。选定时段后，您的业务预约将直接格式化抄送给创始人兼首席执行官 Kentley (wongkentley@gmail.com)。",
      founderRole: "创始人兼首席执行官",
      directWhatsApp: "直联 WhatsApp 对话",
      months: [
        "一月", "二月", "三月", "四月", "五月", "六月",
        "七月", "八月", "九月", "十月", "十一月", "十二月"
      ],
      weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      selectDateSub: "请在下方日历选择开放时段的日期",
      detectedTimezone: "当前检测到的本地时区",
      legendSelected: "已选中",
      legendOpen: "可预约",
      legendBooked: "已约满",
      durationNote: "30 分钟业务系统定向拆解演示",
      timezoneDropdownLabel: "当前以您的本地时区换算呈现：",
      allBookedTitle: "该日时段已约满。",
      allBookedDesc: (dateHeader) =>
        `${dateHeader} 当前没有空余时段。请在日历中选择其他工作日。`,
      availableTimes: "可选时段",
      selectSlotPrompt: "点击下方时段立即选定",
      selectedBadge: "已选择",
      selectArrow: "选定 →",
      selectedSlotLabel: "选定时段：",
      dateIsFull: "该日期已约满",
      selectedTimeBanner: (dateHeader, time, tz) =>
        `已定时段：${dateHeader} ${time} (${tz})`,
      changeDateTime: "修改日期或时段",
      formTitle: "谁将参与本次系统演示沟通？",
      formSubtitle:
        "请在下方填写参会信息。您的预约请求将直达创始人兼 CEO Kentley 邮箱 wongkentley@gmail.com。",
      fullNameLabel: "您的姓名",
      fullNamePlaceholder: "例如：张建国 / David Zhang",
      nameError: "请输入您的完整姓名（至少 2 个字符）。",
      workEmailLabel: "企业工作邮箱",
      workEmailPlaceholder: "david@company.com",
      emailError: "请输入合规有效的企业工作邮箱。",
      companyLabel: "所属企业 / 机构",
      companyPlaceholder: "例如：华南现代物流 / 中建某局",
      phoneLabel: "手机号 / WhatsApp",
      phonePlaceholder: "例如：+86 138-0000-0000",
      platformLabel: "会议沟通介质",
      platforms: [
        { id: "Google Meet", label: "Google Meet", note: "自动生成视频会议链接" },
        { id: "WhatsApp Video / Call", label: "WhatsApp Direct", note: "+62 858-2046-7085" },
        { id: "Zoom", label: "Zoom 会议", note: "发送在线会议邀请码" },
        { id: "Direct Phone Call", label: "手机电话直拨", note: "移动蜂窝语音连线" },
      ],
      focusQuestion: "希望在演示中重点探讨哪些业务流程或效率瓶颈？",
      focusSectorHint: "可点击快捷标签或直接输入具体场景",
      sectorChips: [
        { id: "ops", label: "企业综合办公与运营", full: "企业运营（行政、财务、CRM 账目）" },
        { id: "eng", label: "市政工程与图纸算量", full: "工程建设（CAD 图纸、BOQ 清单核验）" },
        { id: "edu", label: "教育教务系统", full: "教育行业（招生排课、家校协同）" },
        { id: "health", label: "专科医疗门诊", full: "医疗健康（门诊排班、保司预核）" },
        { id: "log", label: "大宗货运与干线物流", full: "物流仓储（调度派车、在途回单）" },
      ],
      topicPlaceholder:
        "例如：打通工程 CAD 图纸与客户报价核算、自动化将 WhatsApp 订单录入 ERP、或优化一线施工员现场拍照巡检...",
      dispatchNotice:
        "直联创始人兼 CEO Kentley (wongkentley@gmail.com)。确认后系统将立即为您生成日历行程回执。",
      submitButton: "确认并预约系统演示",
      submittingButton: "正在将预约信息转递至 Kentley...",
      coordinateWhatsApp: "或在 WhatsApp 上直接沟通",
      confirmedTitle: "系统演示已成功预约。",
      confirmedSubtitle:
        "您的会议预约已登记至创始人兼 CEO Kentley (wongkentley@gmail.com) 的日程表中。您可一键发送确认邮件或通过 WhatsApp 直接沟通。",
      summaryDateTime: "预约时间",
      summaryAttendee: "参会代表",
      summaryHost: "主讲人",
      summaryEmail: "直联邮箱",
      summaryWhatsApp: "WhatsApp 号码",
      summaryRef: "预约流水号",
      btnEmailKentley: "向 Kentley 发送邮件确认",
      btnGoogleCalendar: "添加至 Google Calendar",
      btnWhatsAppKentley: "打开 WhatsApp 对话",
      btnDownloadIcs: "下载 .ICS 日历文件",
      btnScheduleAnother: "预约其他时段",
      dateErrorFull: "所选日期已约满。请在日历中选择其他有空余的时段。",
      whatsAppMessagePrefill: (date, time, name) =>
        `您好 Kentley，我想预约 Droppfloww 在 ${date} ${time} 的系统演示。` +
        (name ? ` 我是 ${name}。` : ""),
    };
  }

  if (language === "es") {
    return {
      badge: "Contacto Directo con el Fundador",
      title: "Agende una sesión de demostración de 30 minutos.",
      desc: "Seleccione fecha y hora en su zona horaria local. Al elegir un espacio, los detalles se envían directamente al Fundador y CEO Kentley (wongkentley@gmail.com).",
      founderRole: "Fundador y CEO",
      directWhatsApp: "Chat de WhatsApp Directo",
      months: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ],
      weekdays: ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"],
      selectDateSub: "Seleccione una fecha disponible a continuación",
      detectedTimezone: "Zona Horaria Detectada",
      legendSelected: "Seleccionado",
      legendOpen: "Disponible",
      legendBooked: "Ocupado",
      durationNote: "Sesión operativa de 30 minutos",
      timezoneDropdownLabel: "Mostrando horas en su zona horaria:",
      allBookedTitle: "Fecha Ocupada.",
      allBookedDesc: (dateHeader) =>
        `${dateHeader} no tiene turnos disponibles. Por favor seleccione otra fecha en el calendario.`,
      availableTimes: "Horarios Disponibles",
      selectSlotPrompt: "Seleccione un horario abajo",
      selectedBadge: "Seleccionado",
      selectArrow: "Elegir →",
      selectedSlotLabel: "Horario Elegido:",
      dateIsFull: "La fecha está completa",
      selectedTimeBanner: (dateHeader, time, tz) =>
        `Horario Seleccionado: ${dateHeader} a las ${time} (${tz})`,
      changeDateTime: "Cambiar fecha u hora",
      formTitle: "¿Quién asistirá a la demostración?",
      formSubtitle:
        "Complete sus datos a continuación. Su solicitud va directamente al Fundador y CEO Kentley a wongkentley@gmail.com.",
      fullNameLabel: "Nombre completo",
      fullNamePlaceholder: "ej. Carlos Mendoza",
      nameError: "Por favor ingrese su nombre completo (al menos 2 caracteres).",
      workEmailLabel: "Correo corporativo",
      workEmailPlaceholder: "carlos@empresa.com",
      emailError: "Por favor ingrese un correo corporativo válido.",
      companyLabel: "Empresa / Organización",
      companyPlaceholder: "ej. Logística Central S.A.",
      phoneLabel: "WhatsApp / Teléfono",
      phonePlaceholder: "ej. +34 612 345 678",
      platformLabel: "Medio de la Reunión",
      platforms: [
        { id: "Google Meet", label: "Google Meet", note: "Enlace autogenerado" },
        { id: "WhatsApp Video / Call", label: "WhatsApp Directo", note: "+62 858-2046-7085" },
        { id: "Zoom", label: "Reunión de Zoom", note: "Invitación a conferencia" },
        { id: "Direct Phone Call", label: "Llamada Directa", note: "Vía celular" },
      ],
      focusQuestion: "¿Qué flujo de trabajo o cuello de botella desea revisar?",
      focusSectorHint: "Seleccione un sector o escriba el suyo",
      sectorChips: [
        { id: "ops", label: "Operaciones y Oficina", full: "Operaciones y Oficina (admin, finanzas, CRM)" },
        { id: "eng", label: "Ingeniería y Obras", full: "Ingeniería y Obras (planos CAD, BOQ, costes)" },
        { id: "edu", label: "Educación", full: "Educación (admisiones, horarios, gestión)" },
        { id: "health", label: "Salud y Clínicas", full: "Salud (clínicas, recepción, citas)" },
        { id: "log", label: "Logística y Despacho", full: "Logística (inventario, rutas, pedidos)" },
      ],
      topicPlaceholder:
        "ej. Conectar mediciones de planos con ofertas a clientes, automatizar pedidos de WhatsApp al ERP o agilizar partes de trabajo...",
      dispatchNotice:
        "Confirmación directa con el Fundador y CEO Kentley (wongkentley@gmail.com). Se preparará una invitación de calendario para envío inmediato.",
      submitButton: "Confirmar y Agendar Demostración",
      submittingButton: "Enviando detalles a Kentley...",
      coordinateWhatsApp: "O coordinar por WhatsApp",
      confirmedTitle: "Demostración agendada.",
      confirmedSubtitle:
        "Su cita ha sido registrada para el Fundador y CEO Kentley en wongkentley@gmail.com. Puede enviar un correo de confirmación o coordinar por WhatsApp.",
      summaryDateTime: "Fecha y Hora",
      summaryAttendee: "Asistente",
      summaryHost: "Anfitrión",
      summaryEmail: "Correo Directo",
      summaryWhatsApp: "Línea WhatsApp",
      summaryRef: "Referencia",
      btnEmailKentley: "Enviar Correo a Kentley",
      btnGoogleCalendar: "Añadir a Google Calendar",
      btnWhatsAppKentley: "WhatsApp a Kentley",
      btnDownloadIcs: "Descargar .ICS",
      btnScheduleAnother: "Agendar otra demostración",
      dateErrorFull: "La fecha seleccionada está ocupada. Por favor elija otra fecha en el calendario.",
      whatsAppMessagePrefill: (date, time, name) =>
        `Hola Kentley, me gustaría coordinar una demostración con Droppfloww el ${date} a las ${time}. ` +
        (name ? `Mi nombre es ${name}.` : ""),
    };
  }

  // English default
  return {
    badge: "Direct Founder Engagement",
    title: "Schedule a 30-minute walkthrough.",
    desc: "Select a date and time in your local timezone. When you pick a slot, your demo details are formatted directly for Founder & CEO Kentley (wongkentley@gmail.com).",
    founderRole: "Founder & CEO",
    directWhatsApp: "Direct WhatsApp Chat",
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    weekdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    selectDateSub: "Select an available date below",
    detectedTimezone: "Detected Timezone",
    legendSelected: "Selected",
    legendOpen: "Open",
    legendBooked: "Booked",
    durationNote: "30-minute operational walkthrough",
    timezoneDropdownLabel: "Displaying times in your timezone:",
    allBookedTitle: "All booked.",
    allBookedDesc: (dateHeader) =>
      `${dateHeader} has no available demo slots. Please select another date on the calendar.`,
    availableTimes: "Available Times",
    selectSlotPrompt: "Select a slot below",
    selectedBadge: "Selected",
    selectArrow: "Select →",
    selectedSlotLabel: "Selected Slot:",
    dateIsFull: "Date is full",
    selectedTimeBanner: (dateHeader, time, tz) =>
      `Selected Time: ${dateHeader} at ${time} (${tz})`,
    changeDateTime: "Change date or time",
    formTitle: "Who is joining the walkthrough?",
    formSubtitle:
      "Complete your details below. Your request goes directly to Founder & CEO Kentley at wongkentley@gmail.com.",
    fullNameLabel: "Full name",
    fullNamePlaceholder: "e.g. David Suhartono",
    nameError: "Please enter your full name (at least 2 characters).",
    workEmailLabel: "Work email",
    workEmailPlaceholder: "david@company.com",
    emailError: "Please enter a valid work email address.",
    companyLabel: "Company / Firm",
    companyPlaceholder: "e.g. Mitra Logistik / Bestindo",
    phoneLabel: "WhatsApp / Phone",
    phonePlaceholder: "e.g. +62 812-3456-7890",
    platformLabel: "Meeting Medium",
    platforms: [
      { id: "Google Meet", label: "Google Meet", note: "Video link auto-generated" },
      { id: "WhatsApp Video / Call", label: "WhatsApp Direct", note: "+62 858-2046-7085" },
      { id: "Zoom", label: "Zoom Meeting", note: "Conference invite" },
      { id: "Direct Phone Call", label: "Direct Phone", note: "Cellular call" },
    ],
    focusQuestion: "Which workflow or bottleneck should we review?",
    focusSectorHint: "Select a sector or write your own",
    sectorChips: [
      { id: "ops", label: "Offices & Operations", full: "Offices & Operations (admin, finance, CRM)" },
      { id: "eng", label: "Engineering & Infrastructure", full: "Engineering & Infrastructure (drawings, BOQ, estimating)" },
      { id: "edu", label: "Education", full: "Education (admissions, scheduling, communication)" },
      { id: "health", label: "Healthcare", full: "Healthcare (clinics, reception, follow-up)" },
      { id: "log", label: "Logistics", full: "Logistics (inventory, dispatch, order flow)" },
    ],
    topicPlaceholder:
      "e.g. Connecting drawing file estimates to customer proposals, automating WhatsApp order receipts into ERP, or streamlining field job updates...",
    dispatchNotice:
      "Direct confirmation with Founder & CEO Kentley (wongkentley@gmail.com). A calendar invite will be prepared for immediate dispatch.",
    submitButton: "Confirm & Schedule Walkthrough",
    submittingButton: "Routing demo details to Kentley...",
    coordinateWhatsApp: "Or coordinate on WhatsApp",
    confirmedTitle: "Walkthrough scheduled.",
    confirmedSubtitle:
      "Your appointment has been registered for Founder & CEO Kentley at wongkentley@gmail.com. You can send a direct email confirmation or coordinate via WhatsApp.",
    summaryDateTime: "Date & Time",
    summaryAttendee: "Attendee",
    summaryHost: "Host",
    summaryEmail: "Direct Email",
    summaryWhatsApp: "WhatsApp Line",
    summaryRef: "Reference",
    btnEmailKentley: "Send Email to Kentley",
    btnGoogleCalendar: "Add to Google Calendar",
    btnWhatsAppKentley: "WhatsApp Kentley",
    btnDownloadIcs: "Download .ICS",
    btnScheduleAnother: "Schedule another demo",
    dateErrorFull: "The selected date is fully booked. Please click an open date on the calendar.",
    whatsAppMessagePrefill: (date, time, name) =>
      `Hi Kentley, I would like to schedule a demo with Droppfloww Systems on ${date} at ${time}. ` +
      (name ? `My name is ${name}.` : ""),
  };
}
