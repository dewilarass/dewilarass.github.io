export interface NavLink {
  id: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  emoji: string;
  featured: boolean;
  link?: string;
}

export interface WorkExperience {
  organization: string;
  role: string;
  period: string;
  type: "work" | "volunteer";
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  color: string;
  url: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Project Management & Coordination",
    color: "bg-neo-yellow",
    description:
      "Experienced in planning and executing events, programs, and multi-stakeholder projects from inception to completion — handling logistics, timelines, and documentation to ensure smooth delivery.",
    skills: [
      "Event Planning & Execution",
      "Stakeholder Engagement",
      "Budget & Logistics Management",
      "Proposal & Documentation Writing",
    ],
  },
  {
    title: "Tools & Technology",
    color: "bg-neo-blue",
    description:
      "Proficient in industry-standard tools for project coordination, communication, and documentation across remote and in-person settings.",
    skills: [
      "Microsoft Office & Google Workspace",
      "Trello, Asana, Notion",
      "Figma (workshop/event design)",
      "Zoom & Online Collaboration",
    ],
  },
  {
    title: "Communication & Collaboration",
    color: "bg-neo-pink",
    description:
      "Skilled at building relationships, facilitating discussions, and working across diverse teams and organisations — from government ministries to academic institutions and international bodies.",
    skills: [
      "Public Speaking & Presentation",
      "Cross-functional Collaboration",
      "Research & Data Gathering",
      "Vendor & Partner Relations",
      "ISO 9001 & ISO 22000 Documentation",
    ],
  },
];

export const additionalSkills: string[] = [
  "Program Development",
  "International Event Coordination",
  "Academic Project Management",
  "Community Engagement",
  "Volunteer Management",
  "Workshop Facilitation",
  "Speaker Coordination",
  "Venue Management",
  "Multi-stakeholder Communication",
  "Budget Planning",
  "Timeline Management",
  "Quality Assurance",
  "Risk Assessment",
  "Team Leadership",
  "Creative Problem Solving",
];

export const workExperience: WorkExperience[] = [
  {
    organization: "National Battery Research Institute (NBRI)",
    role: "Project Officer",
    period: "Apr 2025 – Present",
    type: "work",
  },
  {
    organization: "DTM FT Universitas Indonesia",
    role: "Program Coordinator Staff",
    period: "Mar 2024 – Sep 2024",
    type: "work",
  },
  {
    organization: "Kertasbykarls Studio",
    role: "Brand Assistant",
    period: "Jan 2023 – Present",
    type: "work",
  },
  {
    organization: "Pandai Indonesia",
    role: "Project Officer",
    period: "Oct 2022 – Jan 2023",
    type: "work",
  },
  {
    organization: "Makna Talks (Pestapora 2025)",
    role: "Crew Volunteer",
    period: "Sep 2025",
    type: "volunteer",
  },
  {
    organization: "TEDx Jakarta 2025",
    role: "Audience Experience",
    period: "Aug 2025",
    type: "volunteer",
  },
  {
    organization: "TEDx Jakarta Salon 2024",
    role: "Event Venue and Logistics",
    period: "Jul 2024",
    type: "volunteer",
  },
  {
    organization: "Tech in Asia Conference 2023",
    role: "Speaker Management – Main Stage",
    period: "Oct 2023",
    type: "volunteer",
  },
];

export const projects: Project[] = [
  {
    title: "Battery School 2025 – NBRI",
    description:
      "Coordinated a comprehensive training program with 30+ participants from diverse industries. Designed syllabus content with expert speakers and ensured smooth end-to-end execution, managing logistics, participant coordination, and stakeholder engagement.",
    tags: ["Program Coordination", "Stakeholder Management", "Content Development"],
    color: "bg-neo-yellow",
    emoji: "🔋",
    featured: true,
    link: "https://nbri.org",
  },
  {
    title: "International Battery Summit 2025 – NBRI",
    description:
      "Led operational preparation and on-site execution for an international summit, working directly with high-level stakeholders including ministers, corporate executives, and international organisations. Managed venue operations, guest coordination, and protocol requirements.",
    tags: ["International Coordination", "High-level Stakeholder Management", "Logistics"],
    color: "bg-neo-pink",
    emoji: "🌍",
    featured: true,
    link: "https://nbri.org",
  },
  {
    title: "Academic Programs – Universitas Indonesia",
    description:
      "Supported research and academic projects through proposal writing, project scheduling, logistics, and fostering industry-academic collaborations. Coordinated multi-stakeholder initiatives and ensured seamless project delivery across various departments.",
    tags: ["Academic Project Management", "Proposal Writing", "Research Coordination"],
    color: "bg-neo-blue",
    emoji: "🎓",
    featured: false,
    link: "https://ui.ac.id",
  },
  {
    title: "Art & Creative Workshops – Kertasbykarls Studio",
    description:
      "Assisted in running 20+ art workshops including bookbinding, painting, and crafts. Coordinated participants, venues, and logistics for smooth learning experiences, ensuring high participant satisfaction and seamless operations.",
    tags: ["Workshop Coordination", "Creative Project Management", "Venue Coordination"],
    color: "bg-neo-green",
    emoji: "🎨",
    featured: false,
    link: "https://kertasbykarls.com",
  },
  {
    title: "Volunteer Engagements (TEDx, Makna Talks, Tech in Asia)",
    description:
      "Led logistics, audience experience, and speaker management across multiple high-profile events. Highlights include managing venue operations for TEDx Jakarta and ensuring smooth main-stage speaker coordination at Tech in Asia Conference 2023.",
    tags: ["Volunteer Management", "Speaker Coordination", "Venue Operations"],
    color: "bg-neo-orange",
    emoji: "🤝",
    featured: false,
    link: "https://tedxjakarta.org",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: "✉️",
    title: "Email",
    value: "dewilarasativ@gmail.com",
    link: "mailto:dewilarasativ@gmail.com",
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+62 812 8978 8981",
    link: "tel:+6281289788981",
  },
  { icon: "📍", title: "Location", value: "Jakarta, Indonesia", link: "#" },
];

export const socialLinks: SocialLink[] = [
  {
    icon: "💼",
    label: "LinkedIn",
    color: "bg-neo-blue",
    url: "https://www.linkedin.com/in/dlarasati/",
  },
  {
    icon: "✉️",
    label: "Email",
    color: "bg-neo-orange",
    url: "mailto:dewilarasativ@gmail.com",
  },
];
