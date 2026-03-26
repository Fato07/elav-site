// OpenClaw Meetup Tallinn attendee data (March 26, 2026)
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
  { id: "1", fullName: "Heikki Haldre", company: "Miros", companyColor: "#5b9bd5", linkedin: "https://www.linkedin.com/in/hhaldre/", notes: "Serial entrepreneur - sold Fits.me to Rakuten - now building visual AI search", education: "Entrepreneur", status: "New" },
  { id: "2", fullName: "Timur Hassanov", company: "Bob W.", companyColor: "#9b7ec8", linkedin: "https://www.linkedin.com/in/timurhassanov/", notes: "CTO at tech-driven hospitality platform - Estonian Business School graduate", education: "Estonian Business School", status: "Contacted" },
  { id: "3", fullName: "Teemu Arina", company: "HOLOLIFE Center", companyColor: "#d4a54a", linkedin: "https://ee.linkedin.com/in/teemuarina", notes: "Pioneer in biohacking - 20yr tech entrepreneur - founded Biohacker Center", education: "Entrepreneur", status: "Qualified" },
  { id: "4", fullName: "Franck Nouyrigat", company: "No Cap", companyColor: "#4db890", linkedin: "https://www.linkedin.com/in/francknouyrigat/", notes: "Co-founded Startup Weekend - currently working on stealth AI startup - HEC Paris graduate", education: "HEC Paris", status: "New" },
  { id: "5", fullName: "Jurgen Ukkivi", company: "North Coast Code", companyColor: "#7b83cc", linkedin: "https://ee.linkedin.com/in/jurgen-ukkivi", notes: "CTO of software development company in Tallinn", education: "Technology", status: "Contacted" },
  { id: "6", fullName: "Abhishek Mathur", company: "Trusted Legal Advisors EU", companyColor: "#d47a95", linkedin: "https://www.linkedin.com/in/technolawyer/", notes: "LL.M. specializing in IT law - Scotland educated", education: "LL.M. Scotland", status: "New" },
  { id: "7", fullName: "Chris Kacher", company: "TriQuantum Technologies", companyColor: "#4db8a8", linkedin: "https://www.linkedin.com/in/chriskacher/", notes: "Record-breaking crypto trader & bestselling author based in Tallinn", education: "Investment/Finance", status: "Qualified" },
  { id: "8", fullName: "Ott Ilves", company: "Esgrid", companyColor: "#d4915a", linkedin: "https://www.linkedin.com/in/ottilves/", notes: "Recent €200k funding from EstBAN for ESG data infrastructure", education: "Business", status: "Contacted" },
  { id: "9", fullName: "Sergei Turkov", company: "Atlas Baltic", companyColor: "#4ba8c9", linkedin: "https://www.linkedin.com/in/sergei-turkov/", notes: "Former pro basketball player - now entrepreneur in AI knowledge libraries & family legacy platform", education: "Sports/Business", status: "New" },
  { id: "10", fullName: "Mihkel Vetemaa", company: "Bilance", companyColor: "#a87cc5", linkedin: "https://www.linkedin.com/in/mihkelvetemaa/", notes: "CEO of personal finance management platform helping people save money", education: "Business", status: "Contacted" },
  { id: "11", fullName: "Konstantin Sadekov", company: "Ethical SEO", companyColor: "#d47272", linkedin: "https://www.linkedin.com/in/konstantin-sadekov/", notes: "Founder of ethical SEO consultancy", education: "Digital Marketing", status: "New" },
  { id: "12", fullName: "Andrei Gritskov", company: "Tetkool", companyColor: "#4db890", linkedin: "https://ee.linkedin.com/in/andrei-gritskov-a1305a13b", notes: "CEO of educational services company", education: "Education", status: "Qualified" },
  { id: "13", fullName: "Arturas Matsenas", company: "ESTDEV", companyColor: "#4a9ab5", linkedin: "arturas.matsenas@estdev.ee", notes: "International e-Governance Projects Manager", education: "Government", status: "Contacted" },
  { id: "14", fullName: "Aram Sahradyan", company: "M-One", companyColor: "#8b6ec0", linkedin: "https://www.linkedin.com/in/aramsahradyan/", notes: "Software Development professional", education: "Technology", status: "New" },
  { id: "15", fullName: "Andre Karpistsenko", company: "Codeborne", companyColor: "#c96a6a", linkedin: "https://www.linkedin.com/in/andre-karpistsenko/", notes: "Senior Member of Technical Staff", education: "Technology", status: "Contacted" },
  { id: "16", fullName: "Nitish Krishna", company: "AquaTerra Capital", companyColor: "#3daa80", linkedin: "https://www.linkedin.com/in/nitish-krishna-ganesan-venkatraman-a48ba4147/", notes: "Building Trija for early-stage startups & accelerators - EDHEC graduate", education: "EDHEC", status: "New" },
  { id: "17", fullName: "Henrik Aavik", company: "Tendly", companyColor: "#c07cc9", linkedin: "https://www.linkedin.com/in/henrikaavik/", notes: "Result-oriented CEO with multiple ventures", education: "Business", status: "Qualified" },
  { id: "18", fullName: "Margus Reinsalu", company: "Honorary Consular Corps", companyColor: "#5585cc", linkedin: "https://www.linkedin.com/in/margusreinsalu/", notes: "Entrepreneur & Honorary Consul - construction & business administration background", education: "Business Admin", status: "Contacted" },
  { id: "19", fullName: "Garrett Weinzierl", company: "Playwin", companyColor: "#9b7ec8", linkedin: "https://ee.linkedin.com/in/garrett-weinzierl-393b08b2", notes: "American founder in gaming industry - Finance/Economics background", education: "Finance/Economics", status: "New" },
  { id: "20", fullName: "Antonio Montingelli", company: "SEM Specialist", companyColor: "#d4a54a", linkedin: "https://ee.linkedin.com/in/antonio-montingelli-44a60a107", notes: "Italian living in Estonia - SEM specialist", education: "Digital Marketing", status: "Contacted" },
];

// Sidebar file tree items
export const sidebarItems = [
  { name: "companies", type: "table" as const, icon: "table" },
  { name: "contact", type: "table" as const, icon: "table" },
  { name: "customer", type: "table" as const, icon: "table" },
  { name: "attendees", type: "table" as const, icon: "table", active: true },
  { name: "Tmp", type: "folder" as const, icon: "folder", children: [
    { name: "elav-ad", type: "file" as const },
    { name: "superbowl-ad", type: "file" as const },
  ]},
  { name: "workspace.duckdb", type: "database" as const, icon: "database" },
  { name: "AGENTS", type: "file" as const, icon: "file" },
  { name: "HEARTBEAT", type: "file" as const, icon: "file" },
  { name: "IDENTITY", type: "file" as const, icon: "file" },
  { name: "elav_superbowl_ad...", type: "file" as const, icon: "file" },
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
    content: "enrich all attendees and show me a pipeline breakdown",
    delay: 0,
  },
  {
    id: "2",
    role: "tool",
    content: `duckdb workspace.duckdb "SELECT 'Status', COUNT(*) FROM v_attendees GROUP BY 'Status' ORDER BY count DESC"\n\nNew        | 45\nContacted  | 25\nQualified  | 12\nConverted  | 7`,
    isCode: true,
    isSql: true,
    delay: 1200,
  },
  {
    id: "3",
    role: "assistant",
    content: "Found 89 attendees. Enriching LinkedIn profiles and industry data now — I'll update each row as I go.",
    thinking: "Thought for 3s",
    delay: 2400,
  },
  {
    id: "4",
    role: "tool",
    content: `✓ Enriched 89/89 attendees
  → LinkedIn URLs: 24 found (27%)
  → Industry: 89 found (100%)
  → Company info: 32 found (36%)`,
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
      { id: "k1", name: "Heikki Haldre", company: "Miros", status: "New Lead", lastAction: "Added from OpenClaw Meetup" },
      { id: "k2", name: "Sergei Turkov", company: "Atlas Baltic", status: "New Lead", lastAction: "Added from OpenClaw Meetup" },
      { id: "k3", name: "Aram Sahradyan", company: "M-One", status: "New Lead", lastAction: "Added from OpenClaw Meetup" },
    ],
  },
  {
    id: "contacted",
    name: "Contacted",
    color: "#3b82f6",
    cards: [
      { id: "k4", name: "Timur Hassanov", company: "Bob W.", status: "Contacted", lastAction: "LinkedIn message sent" },
      { id: "k5", name: "Ott Ilves", company: "Esgrid", status: "Contacted", lastAction: "Follow-up email sent" },
    ],
  },
  {
    id: "replied",
    name: "Replied",
    color: "#f59e0b",
    cards: [
      { id: "k6", name: "Teemu Arina", company: "HOLOLIFE Center", status: "Replied", lastAction: "Interested in demo" },
    ],
  },
  {
    id: "qualified",
    name: "Qualified",
    color: "#10b981",
    cards: [
      { id: "k7", name: "Henrik Aavik", company: "Tendly", status: "Qualified", lastAction: "Demo scheduled Mar 30" },
      { id: "k8", name: "Chris Kacher", company: "TriQuantum Technologies", status: "Qualified", lastAction: "Pricing discussion" },
    ],
  },
];

// Analytics chart data
export const analyticsData = {
  statusBreakdown: [
    { name: "New", value: 45, color: "#94a3b8" },
    { name: "Contacted", value: 25, color: "#3b82f6" },
    { name: "Qualified", value: 12, color: "#10b981" },
    { name: "Converted", value: 7, color: "#8b5cf6" },
  ],
  weeklyOutreach: [
    { week: "W1", linkedin: 18, email: 5 },
    { week: "W2", linkedin: 24, email: 8 },
    { week: "W3", linkedin: 31, email: 12 },
    { week: "W4", linkedin: 38, email: 15 },
    { week: "W5", linkedin: 44, email: 18 },
    { week: "W6", linkedin: 52, email: 24 },
  ],
  enrichmentCoverage: [
    { field: "LinkedIn", pct: 27 },
    { field: "Email", pct: 11 },
    { field: "Industry", pct: 100 },
    { field: "Company", pct: 36 },
    { field: "Notes", pct: 28 },
  ],
};
