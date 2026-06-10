export const kpis = [
  { label: "Revenue This Month", value: "$247,500", change: "↑ 12%", accent: true },
  { label: "Leads Generated", value: "126", change: "↑ 8%" },
  { label: "Consultations", value: "72", change: "↑ 5%" },
  { label: "Proposals", value: "41", change: "↑ 3%" },
  { label: "Sales Closed", value: "19", change: "↑ 7%" },
  { label: "Close Rate", value: "46%", change: "↑ 4%" },
];

export const revenueTrend = [
  { month: "Jan", revenue: 156000 },
  { month: "Feb", revenue: 172000 },
  { month: "Mar", revenue: 188000 },
  { month: "Apr", revenue: 201000 },
  { month: "May", revenue: 221000 },
  { month: "Jun", revenue: 247500 },
  { month: "Jul", revenue: 238000 },
  { month: "Aug", revenue: 252000 },
  { month: "Sep", revenue: 261000 },
  { month: "Oct", revenue: 274000 },
  { month: "Nov", revenue: 289000 },
  { month: "Dec", revenue: 312000 },
];

export const marketingSources = [
  { source: "Referral", leads: 18, consultations: 14, proposals: 12, sales: 9, spend: 500, revenue: 145000 },
  { source: "Google Ads", leads: 47, consultations: 18, proposals: 15, sales: 7, spend: 4500, revenue: 92000 },
  { source: "Facebook", leads: 31, consultations: 11, proposals: 8, sales: 2, spend: 3000, revenue: 38000 },
  { source: "Instagram", leads: 22, consultations: 7, proposals: 5, sales: 1, spend: 1000, revenue: 19000 },
  { source: "Magazine", leads: 2, consultations: 0, proposals: 0, sales: 0, spend: 2400, revenue: 0 },
  { source: "Home Show", leads: 6, consultations: 4, proposals: 3, sales: 2, spend: 1800, revenue: 42000 },
];

export const marketingRecommendations = [
  { text: "Increase referral program investment — highest ROI at 290x.", type: "success" as const },
  { text: "Maintain Google Ads budget — strongest paid lead volume.", type: "success" as const },
  { text: "Improve Facebook lead quality — low close rate at 6%.", type: "warning" as const },
  { text: "Eliminate magazine advertising — zero return this month.", type: "attention" as const },
  { text: "Expand Home Show presence — strong conversion rate.", type: "success" as const },
];

export const funnelStages = [
  { stage: "Leads", count: 126, conversion: 100 },
  { stage: "Consultations", count: 72, conversion: 57 },
  { stage: "Designs", count: 54, conversion: 75 },
  { stage: "Proposals", count: 41, conversion: 76 },
  { stage: "Sales", count: 19, conversion: 46 },
];

export const funnelConversions = [
  { from: "Lead", to: "Consultation", rate: 57 },
  { from: "Consultation", to: "Design", rate: 75 },
  { from: "Design", to: "Proposal", rate: 76 },
  { from: "Proposal", to: "Sale", rate: 46 },
];

export const salesInsights = [
  { text: "Consultation-to-design conversion is strong at 75%.", type: "success" as const },
  { text: "Proposal-to-sale is the largest improvement area at 46%.", type: "warning" as const },
  { text: "Referral leads convert 2.3x better than paid traffic.", type: "info" as const },
  { text: "22 proposals did not convert this month.", type: "attention" as const },
];

export const lostOpportunities = {
  lostProposals: 22,
  lostRevenue: 286000,
  topReasons: ["Price sensitivity", "Timeline concerns", "Competitor quote", "Project postponed"],
};

export const designers = [
  { name: "Sarah", revenue: "$82K", closeRate: "52%", projects: 17 },
  { name: "Mike", revenue: "$71K", closeRate: "41%", projects: 12 },
  { name: "Emma", revenue: "$55K", closeRate: "33%", projects: 9 },
];

export const projectStages = [
  { stage: "Consultation", count: 12 },
  { stage: "Measuring", count: 9 },
  { stage: "Designing", count: 15 },
  { stage: "Proposal", count: 8 },
  { stage: "Approval", count: 6 },
  { stage: "Ordered", count: 11 },
  { stage: "Installation", count: 11 },
  { stage: "Completed", count: 23 },
];

export type ProjectStage =
  | "Consultation"
  | "Measurement"
  | "Design"
  | "Proposal"
  | "Awaiting Approval"
  | "Ordered"
  | "Installation Scheduled"
  | "Completed";

export type ProjectStatus = "On Track" | "Attention" | "Delayed";

export interface Project {
  id: string;
  client: string;
  type: string;
  designer: string;
  value: number;
  valueDisplay: string;
  stage: ProjectStage;
  status: ProjectStatus;
  installDate?: string;
  email: string;
  phone: string;
  address: string;
  notes: string[];
  timeline: { date: string; event: string }[];
  team: string[];
}

export const kanbanColumns: { id: ProjectStage; title: string; subtitle: string }[] = [
  { id: "Consultation", title: "Consultation", subtitle: "Lead qualified · Appointment scheduled" },
  { id: "Measurement", title: "Measurement", subtitle: "Measurements completed" },
  { id: "Design", title: "Design", subtitle: "Design in progress" },
  { id: "Proposal", title: "Proposal", subtitle: "Proposal delivered" },
  { id: "Awaiting Approval", title: "Awaiting Approval", subtitle: "Customer reviewing" },
  { id: "Ordered", title: "Ordered", subtitle: "Products ordered" },
  { id: "Installation Scheduled", title: "Installation Scheduled", subtitle: "Installation planned" },
  { id: "Completed", title: "Completed", subtitle: "Finished project" },
];

export const projects: Project[] = [
  {
    id: "p1",
    client: "Anderson Family",
    type: "Walk-In Closet",
    designer: "Sarah",
    value: 14500,
    valueDisplay: "$14,500",
    stage: "Design",
    status: "On Track",
    email: "anderson@email.com",
    phone: "(555) 234-8901",
    address: "142 Oak Lane, Westfield",
    notes: ["Prefers brass hardware", "Wants LED lighting"],
    timeline: [
      { date: "May 12", event: "Initial consultation" },
      { date: "May 18", event: "Measurements completed" },
      { date: "Jun 2", event: "Design in progress" },
    ],
    team: ["Sarah", "James (Installer)"],
  },
  {
    id: "p2",
    client: "Miller Residence",
    type: "Garage Storage",
    designer: "Mike",
    value: 9800,
    valueDisplay: "$9,800",
    stage: "Proposal",
    status: "Attention",
    email: "miller@email.com",
    phone: "(555) 345-6789",
    address: "88 Pine Street, Riverside",
    notes: ["Needs proposal revision", "Budget-conscious client"],
    timeline: [
      { date: "May 5", event: "Consultation completed" },
      { date: "May 20", event: "Proposal delivered" },
    ],
    team: ["Mike"],
  },
  {
    id: "p3",
    client: "Thompson Home",
    type: "Pantry",
    designer: "Emma",
    value: 7200,
    valueDisplay: "$7,200",
    stage: "Ordered",
    status: "On Track",
    installDate: "Jun 18",
    email: "thompson@email.com",
    phone: "(555) 456-1234",
    address: "210 Maple Drive, Hillside",
    notes: ["Custom pull-out shelves"],
    timeline: [
      { date: "Apr 28", event: "Proposal approved" },
      { date: "May 15", event: "Order placed" },
    ],
    team: ["Emma", "Carlos (Installer)"],
  },
  {
    id: "p4",
    client: "Collins Project",
    type: "Home Office",
    designer: "Sarah",
    value: 18700,
    valueDisplay: "$18,700",
    stage: "Installation Scheduled",
    status: "Delayed",
    installDate: "Jun 22",
    email: "collins@email.com",
    phone: "(555) 567-4321",
    address: "55 Cedar Court, Lakewood",
    notes: ["Delayed due to material backorder", "Client notified"],
    timeline: [
      { date: "Mar 10", event: "Design approved" },
      { date: "May 1", event: "Products ordered" },
      { date: "Jun 22", event: "Installation rescheduled" },
    ],
    team: ["Sarah", "James (Installer)", "Lisa (Ops)"],
  },
  {
    id: "p5",
    client: "Rivera Estate",
    type: "Master Closet",
    designer: "Sarah",
    value: 22100,
    valueDisplay: "$22,100",
    stage: "Consultation",
    status: "On Track",
    email: "rivera@email.com",
    phone: "(555) 678-9012",
    address: "901 Willow Way, Northgate",
    notes: ["High-value prospect", "Referral from Anderson"],
    timeline: [{ date: "Jun 8", event: "Consultation scheduled" }],
    team: ["Sarah"],
  },
  {
    id: "p6",
    client: "Park Family",
    type: "Laundry Room",
    designer: "Mike",
    value: 6400,
    valueDisplay: "$6,400",
    stage: "Measurement",
    status: "On Track",
    email: "park@email.com",
    phone: "(555) 789-0123",
    address: "33 Birch Blvd, Eastside",
    notes: [],
    timeline: [
      { date: "Jun 1", event: "Consultation completed" },
      { date: "Jun 7", event: "Measurement scheduled" },
    ],
    team: ["Mike"],
  },
  {
    id: "p7",
    client: "Walsh Residence",
    type: "Mudroom",
    designer: "Emma",
    value: 8900,
    valueDisplay: "$8,900",
    stage: "Awaiting Approval",
    status: "Attention",
    email: "walsh@email.com",
    phone: "(555) 890-1234",
    address: "77 Elm Street, Midtown",
    notes: ["Follow up needed — proposal sent 10 days ago"],
    timeline: [
      { date: "May 22", event: "Proposal delivered" },
      { date: "May 29", event: "Follow-up call" },
    ],
    team: ["Emma"],
  },
  {
    id: "p8",
    client: "Bennett Home",
    type: "Walk-In Closet",
    designer: "Sarah",
    value: 16200,
    valueDisplay: "$16,200",
    stage: "Completed",
    status: "On Track",
    installDate: "May 30",
    email: "bennett@email.com",
    phone: "(555) 901-2345",
    address: "412 Spruce Ave, Westfield",
    notes: ["Excellent referral candidate"],
    timeline: [
      { date: "Feb 15", event: "Project started" },
      { date: "May 30", event: "Installation completed" },
    ],
    team: ["Sarah", "James (Installer)"],
  },
  {
    id: "p9",
    client: "Foster Garage",
    type: "Garage Storage",
    designer: "Mike",
    value: 11200,
    valueDisplay: "$11,200",
    stage: "Installation Scheduled",
    status: "On Track",
    installDate: "Jun 15",
    email: "foster@email.com",
    phone: "(555) 012-3456",
    address: "199 Ash Road, Southpark",
    notes: [],
    timeline: [{ date: "Jun 15", event: "Installation scheduled" }],
    team: ["Mike", "Carlos (Installer)"],
  },
  {
    id: "p10",
    client: "Nguyen Pantry",
    type: "Pantry",
    designer: "Emma",
    value: 5800,
    valueDisplay: "$5,800",
    stage: "Consultation",
    status: "On Track",
    email: "nguyen@email.com",
    phone: "(555) 123-4567",
    address: "66 Poplar Lane, Riverside",
    notes: ["Google Ads lead"],
    timeline: [{ date: "Jun 10", event: "Consultation scheduled" }],
    team: ["Emma"],
  },
];

export const pipelineKpis = {
  activeProjects: 67,
  pipelineValue: 892000,
  installations: 11,
  completed: 23,
  delayed: 5,
  avgProjectValue: 13300,
};

export const pipelineInsights = [
  { text: "5 projects are delayed — prioritize material follow-ups.", type: "attention" as const },
  { text: "Installation capacity is at 85% for June.", type: "warning" as const },
  { text: "Proposal stage has 8 projects — follow up on pending approvals.", type: "warning" as const },
  { text: "3 projects ready for installation next week.", type: "success" as const },
];

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "Owner" | "Manager" | "Designer" | "Operations";
  status: "Active" | "Away" | "Inactive";
  leads: number;
  consultations: number;
  proposals: number;
  sales: number;
  revenue: number;
  closeRate: number;
  activeProjects: number;
  capacity: number;
  coachingAlert?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "u1",
    name: "Owner",
    email: "owner@tailoredcloset.com",
    phone: "(555) 100-0001",
    role: "Owner",
    status: "Active",
    leads: 24,
    consultations: 18,
    proposals: 14,
    sales: 8,
    revenue: 112000,
    closeRate: 57,
    activeProjects: 6,
    capacity: 70,
  },
  {
    id: "u2",
    name: "Sarah Mitchell",
    email: "sarah@tailoredcloset.com",
    phone: "(555) 200-0002",
    role: "Designer",
    status: "Active",
    leads: 38,
    consultations: 28,
    proposals: 22,
    sales: 11,
    revenue: 82000,
    closeRate: 52,
    activeProjects: 17,
    capacity: 92,
    coachingAlert: "High workload — consider redistributing 2 projects",
  },
  {
    id: "u3",
    name: "Mike Rodriguez",
    email: "mike@tailoredcloset.com",
    phone: "(555) 300-0003",
    role: "Designer",
    status: "Active",
    leads: 32,
    consultations: 22,
    proposals: 16,
    sales: 7,
    revenue: 71000,
    closeRate: 41,
    activeProjects: 12,
    capacity: 78,
  },
  {
    id: "u4",
    name: "Emma Chen",
    email: "emma@tailoredcloset.com",
    phone: "(555) 400-0004",
    role: "Designer",
    status: "Active",
    leads: 28,
    consultations: 18,
    proposals: 12,
    sales: 4,
    revenue: 55000,
    closeRate: 33,
    activeProjects: 9,
    capacity: 65,
    coachingAlert: "Close rate below team average — schedule coaching session",
  },
  {
    id: "u5",
    name: "James Wilson",
    email: "james@tailoredcloset.com",
    phone: "(555) 500-0005",
    role: "Operations",
    status: "Active",
    leads: 0,
    consultations: 0,
    proposals: 0,
    sales: 0,
    revenue: 0,
    closeRate: 0,
    activeProjects: 14,
    capacity: 88,
  },
  {
    id: "u6",
    name: "Lisa Park",
    email: "lisa@tailoredcloset.com",
    phone: "(555) 600-0006",
    role: "Manager",
    status: "Active",
    leads: 4,
    consultations: 4,
    proposals: 3,
    sales: 0,
    revenue: 0,
    closeRate: 0,
    activeProjects: 8,
    capacity: 55,
  },
];

export const successionMetrics = {
  revenueWithoutOwner: 208000,
  revenueWithoutOwnerPct: 65,
  projectsWithoutOwner: 61,
  projectsWithoutOwnerPct: 91,
  designerAutonomy: 78,
  businessIndependenceScore: 74,
};

export const companyProfile = {
  name: "The Tailored Closet",
  tagline: "Custom Storage Solutions",
  address: "1200 Commerce Drive, Westfield, IL 60189",
  phone: "(555) 800-1234",
  email: "info@tailoredcloset.com",
};

export const notificationSettings = [
  { id: "delayed", label: "Delayed project alerts", enabled: true },
  { id: "install", label: "Upcoming installation reminders", enabled: true },
  { id: "proposal", label: "Proposal follow-up reminders", enabled: true },
  { id: "coaching", label: "Team coaching alerts", enabled: true },
  { id: "revenue", label: "Monthly revenue summary", enabled: false },
  { id: "marketing", label: "Marketing ROI alerts", enabled: true },
];

export const healthScores = {
  business: 87,
  marketing: 82,
  funnel: 74,
  team: 79,
};

export function formatCurrency(value: number): string {
  if (value >= 1000) return `$${Math.round(value / 1000)}K`;
  return `$${value.toLocaleString()}`;
}

export const businessHealthBreakdown = [
  { area: "Revenue", score: Math.min(100, healthScores.business + 5) },
  { area: "Sales", score: healthScores.funnel + 10 },
  { area: "Projects", score: Math.max(0, 100 - pipelineKpis.delayed * 4) },
  { area: "Team", score: Math.min(100, healthScores.team + 7) },
  { area: "Marketing", score: Math.min(100, healthScores.marketing + 7) },
  { area: "Operations", score: Math.min(100, successionMetrics.designerAutonomy + 10) },
];

export const commandInsights = [
  "Revenue is up 12% this month.",
  "5 proposals need follow-up.",
  "Referrals are your top performing channel.",
  `Forecast: on track for $${Math.round(revenueTrend[5].revenue * 1.15).toLocaleString()} this month.`,
];

export const revenueForecast = Math.round(revenueTrend[5].revenue * 1.15);

export const marketingSnapshotMetrics = {
  digitalLeads: marketingSources
    .filter((s) => ["Google Ads", "Facebook", "Instagram"].includes(s.source))
    .reduce((sum, s) => sum + s.leads, 0),
  googleAdsLeads: marketingSources.find((s) => s.source === "Google Ads")?.leads ?? 0,
  socialLeads:
    (marketingSources.find((s) => s.source === "Facebook")?.leads ?? 0) +
    (marketingSources.find((s) => s.source === "Instagram")?.leads ?? 0),
  consultationRate: Math.round((funnelStages[1].count / funnelStages[0].count) * 100),
};

export function getTopOpportunities() {
  return [...projects]
    .filter((p) => ["Proposal", "Awaiting Approval", "Consultation", "Design"].includes(p.stage))
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);
}

export function getProjectsNeedingAttention() {
  return projects.filter((p) => p.status === "Delayed" || p.status === "Attention");
}

export function getTopPerformer() {
  const designers = teamMembers.filter((m) => m.role === "Designer");
  return [...designers].sort((a, b) => b.revenue - a.revenue)[0];
}
