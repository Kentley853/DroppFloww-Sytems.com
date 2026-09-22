import { BOQItem, CRMEnquiry, ServiceJobBooking } from "../types";

export const ENGINEERING_FIXTURES: {
  documents: { name: string; size: string; type: string; pages: number }[];
  boqItems: BOQItem[];
} = {
  documents: [
    { name: "Site_Survey_Borehole_Logs_RevC.pdf", size: "4.2 MB", type: "Geotechnical Survey", pages: 18 },
    { name: "Civil_Works_Schedule_Section4.pdf", size: "1.8 MB", type: "BOQ Schedule", pages: 6 },
    { name: "Substructure_Retaining_Plan_DWG_Sheet2.pdf", size: "8.5 MB", type: "Structural Drawing", pages: 2 }
  ],
  boqItems: [
    {
      id: "boq-01",
      item: "Class 1B Granular Fill to Sub-base",
      sourceDoc: "Civil_Works_Schedule_Section4.pdf (p.3)",
      quantity: "1,420",
      unit: "m³",
      reviewStatus: "Verified",
      estimatedRate: "$48.50 / m³"
    },
    {
      id: "boq-02",
      item: "Reinforced Concrete Foundation Grade C35/45",
      sourceDoc: "Substructure_Retaining_Plan_DWG_Sheet2.pdf",
      quantity: "385",
      unit: "m³",
      reviewStatus: "Needs Review",
      estimatedRate: "$310.00 / m³"
    },
    {
      id: "boq-03",
      item: "Geotextile Separation Membrane (Type 3)",
      sourceDoc: "Site_Survey_Borehole_Logs_RevC.pdf (p.12)",
      quantity: "2,850",
      unit: "m²",
      reviewStatus: "Verified",
      estimatedRate: "$6.20 / m²"
    },
    {
      id: "boq-04",
      item: "Temporary Trench Shoring & Dewatering",
      sourceDoc: "Site_Survey_Borehole_Logs_RevC.pdf (p.15)",
      quantity: "140",
      unit: "lin. m",
      reviewStatus: "Extracted",
      estimatedRate: "$145.00 / m"
    }
  ]
};

export const CRM_ENQUIRY_FIXTURE: CRMEnquiry = {
  id: "ENQ-8821",
  source: "Inbound Email (spec-request@clientdomain.com)",
  subject: "Replacement HVAC chiller manifold & custom damper schedule",
  customer: "Apex Precision Engineering Ltd",
  receivedAt: "Today, 09:14 AM",
  currentStep: "Assigned task",
  assignedTo: "Marcus Chen (Lead Systems Estimator)",
  notes: "Extracted 3 CAD asset codes from email attachment. Matched 2 to existing warehouse inventory; 1 marked for supplier quotation."
};

export const CRM_TIMELINE = [
  {
    step: "Enquiry",
    time: "09:14 AM",
    title: "Request captured",
    detail: "Direct email parsed from client domain with 2 attachments (.dwg, .xlsx).",
    status: "completed" as const
  },
  {
    step: "CRM",
    time: "09:15 AM",
    title: "Account record updated",
    detail: "Matched customer record; verified active master services agreement on file.",
    status: "completed" as const
  },
  {
    step: "Assigned task",
    time: "09:18 AM",
    title: "Technical review assigned",
    detail: "Task routed to Marcus Chen based on HVAC technical tag and availability.",
    status: "active" as const
  },
  {
    step: "Review",
    time: "Pending",
    title: "Final proposal sign-off",
    detail: "Ready for operations manager sign-off once quotation lines are validated.",
    status: "pending" as const
  }
];

export const SERVICE_JOB_FIXTURES: ServiceJobBooking[] = [
  {
    id: "JOB-401",
    requestType: "Annual Facility Pressure Valve Re-certification",
    serviceZone: "District North - Sector 3",
    window: "Thursday, 10:00 - 12:00",
    assignedSpecialist: "David K. (Senior Field Inspector)",
    status: "Team confirmation",
    customerNoticeSent: true
  },
  {
    id: "JOB-402",
    requestType: "Emergency Hydraulic Pump Sensor Diagnostics",
    serviceZone: "Central Industrial Park",
    window: "Friday, 08:30 - 10:30",
    assignedSpecialist: "Sarah W. (Instrumentation Tech)",
    status: "Availability",
    customerNoticeSent: false
  },
  {
    id: "JOB-403",
    requestType: "Cleanroom Air Handling Unit Calibration",
    serviceZone: "West Biotech Cluster",
    window: "Monday, 14:00 - 16:30",
    assignedSpecialist: "Awaiting Schedule",
    status: "Request",
    customerNoticeSent: false
  }
];
