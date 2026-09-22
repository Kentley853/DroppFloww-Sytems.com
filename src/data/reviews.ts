import { ClientReview } from "../types";

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-01",
    clientIndustry: "Civil Infrastructure & Surveying Practice",
    organizationType: "Mid-sized engineering consultancy (48 technical staff)",
    reviewerRole: "Associate Director of Pre-Construction Operations",
    projectFocus: "AI-Assisted Document Quantity Extraction & BOQ Reconciliation",
    challenge: "Senior estimators spent 12–16 hours per tender re-entering borehole data and material schedules from 60+ page PDF survey reports into spreadsheets.",
    deliveredSystem: "Custom local document parser that extracts tabulated quantities into a structured review grid, verifies dimension units against engineering standards, and exports directly to client rate models with an engineer audit gate.",
    outcomeMetric: "Turnaround on preliminary estimate preparation reduced from 3.5 days to under 6 hours; zero unauthorized formula alterations.",
    quote: "Droppfloww did not try to sell us an off-the-shelf AI tool. They sat down with our survey notes, understood why our estimators double-checked concrete grades, and left our final sign-off workflow completely intact.",
    implementationDuration: "6-week discovery and phased deployment",
    transparencyNote: "Verified operational post-handover review. Client organization name withheld under active master consulting agreement confidentiality."
  },
  {
    id: "rev-02",
    clientIndustry: "Regional Building Materials & Distribution",
    organizationType: "Multi-branch commercial supplier (3 distribution yards)",
    reviewerRole: "Head of Logistics & Warehouse Systems",
    projectFocus: "Connected Order Intake, Spec Parsing & Dispatch Queuing",
    challenge: "Incoming contractor specs arrived across emails, WhatsApp PDF markups, and phone transcripts, requiring repetitive manual entry into an on-premises legacy ERP.",
    deliveredSystem: "Unified enquiry intake pipeline linking inbox documents to live inventory availability, staging unconfirmed line items for quick dispatch review before committing to the ERP ledger.",
    outcomeMetric: "Eliminated morning order backlog; dispatch confirmation sent to job-site foremen 45 minutes faster per order.",
    quote: "We were told by two enterprise software vendors that we had to replace our 12-year-old warehouse database. Droppfloww built a reliable bridge around our existing system in weeks instead of eighteen months.",
    implementationDuration: "5-week implementation with staged yard rollouts",
    transparencyNote: "Deployment verified on client local network. All figures taken from 90-day post-launch operations review."
  },
  {
    id: "rev-03",
    clientIndustry: "Specialized Environmental & Regulatory Advisory",
    organizationType: "Technical advisory firm (26 environmental scientists & planners)",
    reviewerRole: "Technical Director & Partner",
    projectFocus: "Statutory Filing Document Synthesis & Compliance Checklist Engine",
    challenge: "Planning officers manually checked 200+ statutory checklist requirements across multiple county authority templates for each major site assessment.",
    deliveredSystem: "Internal regulatory review system that flags missing statutory disclosures, organizes cross-references across environmental statements, and outputs clean revision histories.",
    outcomeMetric: "Draft assembly time dropped by over 50%; zero compliance re-submissions due to omitted standard disclosures over the last 9 months.",
    quote: "Direct access to their engineering team made all the difference. When we had questions about how statutory tables were referenced, the person who answered was the engineer who wrote the extraction rule.",
    implementationDuration: "7-week phased build with ongoing quarterly review",
    transparencyNote: "Verified consultancy review. Client company identifier protected pursuant to standard nondisclosure terms."
  }
];
