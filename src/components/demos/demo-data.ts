// YC W26 Founders mock data (inspired by the screenshot)
export type Founder = {
  id: string;
  fullName: string;
  company: string;
  companyColor: string;
  linkedin: string;
  notes: string;
  education: string;
  status: "New" | "Contacted" | "Qualified" | "Converted";
  email?: string;
};

export const founders: Founder[] = [
  { id: "1", fullName: "Veer Shah", company: "Cumulus Labs", companyColor: "#5b9bd5", linkedin: "https://linkedin.com/in/veer-shah-62...", notes: "Veer studied Computer Science at the Univ...", education: "University of Wi...", status: "New" },
  { id: "2", fullName: "Leo Gierhake", company: "Laurence", companyColor: "#9b7ec8", linkedin: "https://linkedin.com/in/leo-gierhake-...", notes: "Researcher at Jump Trading, building quan...", education: "ETH Zurich", status: "Contacted" },
  { id: "3", fullName: "Vincent Chen", company: "Panta", companyColor: "#d4a54a", linkedin: "https://linkedin.com/in/zihong-chen", notes: "Founder @ Panta (W26). Building a comme...", education: "BU", status: "Qualified" },
  { id: "4", fullName: "Omar Elamin", company: "Caretta", companyColor: "#4db890", linkedin: "https://www.linkedin.com/in/omarelamin", notes: "Co-Founder & CTO of Caretta. Ex-TU Delft. ...", education: "---", status: "New" },
  { id: "5", fullName: "Oncel Ozgul", company: "Patientdesk.ai", companyColor: "#7b83cc", linkedin: "https://www.linkedin.com/in/oncelozgul", notes: "Co-founder @ Patientdesk.ai", education: "---", status: "Contacted" },
  { id: "6", fullName: "Oded Falik", company: "Strand AI", companyColor: "#d47a95", linkedin: "https://www.linkedin.com/in/oded-falik/", notes: "Cofounder & CTO at Strand AI", education: "---", status: "New" },
  { id: "7", fullName: "Vincent Jeltsch", company: "sitefire", companyColor: "#4db8a8", linkedin: "https://www.linkedin.com/in/vincent-jeltsch/", notes: "Co-Founder & CTO @sitefire.ai I ran a mak...", education: "BU", status: "Qualified" },
  { id: "8", fullName: "Berke Argin", company: "Compresr", companyColor: "#d4915a", linkedin: "https://www.linkedin.com/in/arginberke/", notes: "CAIO @ compresr.ai. On a mission to make ...", education: "---", status: "Contacted" },
  { id: "9", fullName: "Henry Birge-Lee", company: "Crosslayer Labs", companyColor: "#4ba8c9", linkedin: "https://www.linkedin.com/in/henry-birge-le...", notes: "I am am innovator in web and network secu...", education: "---", status: "New" },
  { id: "10", fullName: "Jordon Kashanchi", company: "Visibl Semiconductors", companyColor: "#a87cc5", linkedin: "https://www.linkedin.com/in/jordon-kashan...", notes: "Co-founder & CTO of Visibl Semiconductor...", education: "UT Austin", status: "Contacted" },
  { id: "11", fullName: "Ian Wang", company: "Axis", companyColor: "#d47272", linkedin: "https://www.linkedin.com/in/ian-wang-m1n1", notes: "Yale '25 Interested in trading stuff", education: "Yale", status: "New" },
  { id: "12", fullName: "Kayra Bahadir", company: "Caretta", companyColor: "#4db890", linkedin: "https://www.linkedin.com/in/kayrabahadir", notes: "Co-founder & CEO of Caretta (W26)", education: "---", status: "Qualified" },
  { id: "13", fullName: "Paul Grech", company: "OctaPulse", companyColor: "#4a9ab5", linkedin: "https://www.linkedin.com/in/paul-l-grech-b...", notes: "Building the future of autonomous aquacult...", education: "BU", status: "Contacted" },
  { id: "14", fullName: "Rushil Agarwal", company: "Human Archive", companyColor: "#8b6ec0", linkedin: "https://www.linkedin.com/in/rushilagarwal2...", notes: "building multimodal real-world datasets for ...", education: "UC Berkeley", status: "New" },
  { id: "15", fullName: "Owen Botkin", company: "Forum", companyColor: "#c96a6a", linkedin: "https://www.linkedin.com/in/owen-botkin", notes: "Co-founder of Forum. Prev L/S equities @ ...", education: "---", status: "Contacted" },
  { id: "16", fullName: "Vansh Ramani", company: "RamAIn", companyColor: "#3daa80", linkedin: "https://www.linkedin.com/in/ramanivansh/", notes: "Pursuing CS at IIT Delhi. Former researcher...", education: "Carnegie Mellon", status: "New" },
  { id: "17", fullName: "Arne Strickmann", company: "Emdash", companyColor: "#c07cc9", linkedin: "https://www.linkedin.com/in/arnestrickmann", notes: "Co-Founder of Emdash (W26). Prev. Thrive...", education: "---", status: "Qualified" },
  { id: "18", fullName: "Zinny Weli", company: "RoboDock", companyColor: "#5585cc", linkedin: "https://www.linkedin.com/in/zinnyweli", notes: "Zinny Weli is co-founder and CEO of Robo...", education: "Stanford; Univer...", status: "Contacted" },
  { id: "19", fullName: "Elvin Fu", company: "CodeWisp", companyColor: "#9b7ec8", linkedin: "https://www.linkedin.com/in/fuelvin/", notes: "Making games since age 10. Built mobile an...", education: "BU", status: "New" },
  { id: "20", fullName: "Filip Balucha", company: "Terminal Use", companyColor: "#d4a54a", linkedin: "https://www.linkedin.com/in/filip-balucha/", notes: "Enabling long-running background agents...", education: "---", status: "Contacted" },
];

// Sidebar file tree items
export const sidebarItems = [
  { name: "companies", type: "table" as const, icon: "table" },
  { name: "contact", type: "table" as const, icon: "table" },
  { name: "customer", type: "table" as const, icon: "table" },
  { name: "founders", type: "table" as const, icon: "table", active: true },
  { name: "Tmp", type: "folder" as const, icon: "folder", children: [
    { name: "ironclaw-ad", type: "file" as const },
    { name: "superbowl-ad", type: "file" as const },
  ]},
  { name: "workspace.duckdb", type: "database" as const, icon: "database" },
  { name: "AGENTS", type: "file" as const, icon: "file" },
  { name: "HEARTBEAT", type: "file" as const, icon: "file" },
  { name: "IDENTITY", type: "file" as const, icon: "file" },
  { name: "ironclaw_superbowl_ad...", type: "file" as const, icon: "file" },
  { name: "SOUL", type: "file" as const, icon: "file" },
  { name: "TOOLS", type: "file" as const, icon: "file" },
  { name: "USER", type: "file" as const, icon: "file" },
];

// Chat messages for the AI panel demo
export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "tool";
  content: string;
  thinking?: string;
  isCode?: boolean;
  isSql?: boolean;
  isReport?: boolean;
  delay: number; // ms from start
};

export const chatMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "enrich all founders and show me a pipeline breakdown",
    delay: 0,
  },
  {
    id: "2",
    role: "tool",
    content: `duckdb workspace.duckdb "SELECT 'Status', COUNT(*) FROM v_founders GROUP BY 'Status' ORDER BY count DESC"\n\nNew        | 89\nContacted  | 67\nQualified  | 31\nConverted  | 13`,
    isCode: true,
    isSql: true,
    delay: 1200,
  },
  {
    id: "3",
    role: "assistant",
    content: "Found 200 founders. Enriching LinkedIn profiles and education data now — I'll update each row as I go.",
    thinking: "Thought for 3s",
    delay: 2400,
  },
  {
    id: "4",
    role: "tool",
    content: `✓ Enriched 200/200 founders
  → LinkedIn URLs: 196 found (98%)
  → Education: 144 found (72%)
  → Company info: 200/200 (100%)`,
    isCode: false,
    delay: 4000,
  },
  {
    id: "5",
    role: "assistant",
    content: "All done! Here's the pipeline breakdown:",
    isReport: true,
    delay: 5000,
  },
  {
    id: "6",
    role: "tool",
    content: `{"version":1,"title":"Pipeline","panels":[{"id":"p1","title":"By Status","type":"bar","sql":"SELECT Status, COUNT(*)...","mapping":{"xAxis":"Status","yAxis":["count"]}}]}`,
    isCode: true,
    isReport: true,
    delay: 5800,
  },
];

// Kanban pipeline data
export type KanbanCard = {
  id: string;
  name: string;
  company: string;
  status: string;
  lastAction: string;
};

export const kanbanColumns = [
  {
    id: "new",
    name: "New Lead",
    color: "#94a3b8",
    cards: [
      { id: "k1", name: "Veer Shah", company: "Cumulus Labs", status: "New Lead", lastAction: "Added from YC batch" },
      { id: "k2", name: "Henry Birge-Lee", company: "Crosslayer Labs", status: "New Lead", lastAction: "Added from YC batch" },
      { id: "k3", name: "Rushil Agarwal", company: "Human Archive", status: "New Lead", lastAction: "Added from YC batch" },
    ],
  },
  {
    id: "contacted",
    name: "Contacted",
    color: "#3b82f6",
    cards: [
      { id: "k4", name: "Leo Gierhake", company: "Laurence", status: "Contacted", lastAction: "LinkedIn message sent" },
      { id: "k5", name: "Berke Argin", company: "Compresr", status: "Contacted", lastAction: "Follow-up email sent" },
    ],
  },
  {
    id: "replied",
    name: "Replied",
    color: "#f59e0b",
    cards: [
      { id: "k6", name: "Vincent Chen", company: "Panta", status: "Replied", lastAction: "Interested in demo" },
    ],
  },
  {
    id: "qualified",
    name: "Qualified",
    color: "#10b981",
    cards: [
      { id: "k7", name: "Arne Strickmann", company: "Emdash", status: "Qualified", lastAction: "Demo scheduled Feb 18" },
      { id: "k8", name: "Vincent Jeltsch", company: "sitefire", status: "Qualified", lastAction: "Pricing discussion" },
    ],
  },
];

// Analytics chart data
export const analyticsData = {
  statusBreakdown: [
    { name: "New", value: 89, color: "#94a3b8" },
    { name: "Contacted", value: 67, color: "#3b82f6" },
    { name: "Qualified", value: 31, color: "#10b981" },
    { name: "Converted", value: 13, color: "#8b5cf6" },
  ],
  weeklyOutreach: [
    { week: "W1", linkedin: 45, email: 32 },
    { week: "W2", linkedin: 62, email: 48 },
    { week: "W3", linkedin: 78, email: 55 },
    { week: "W4", linkedin: 94, email: 71 },
    { week: "W5", linkedin: 110, email: 85 },
    { week: "W6", linkedin: 128, email: 96 },
  ],
  enrichmentCoverage: [
    { field: "LinkedIn", pct: 98 },
    { field: "Email", pct: 87 },
    { field: "Education", pct: 72 },
    { field: "Company", pct: 100 },
    { field: "Notes", pct: 95 },
  ],
};
