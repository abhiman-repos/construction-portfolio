export type ProjectType =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Renovation"
  | "Institutional"
  | "Hospital"
  | "MarriageHall";

export type Project = {
  id: number;
  slug: string;
  name: string;
  client: string;
  location: string;
  projectType:string;
  executionModel:string;
  type: ProjectType;
  duration: string;

  completionYear?: string;
  status:string;
  scale: {
    totalBuiltUpArea: string;
    mainBlock: string;
    academicBlock:string;
    supportUnit:string;
  }
    
  shortDescription:string;
  description: string;
  
  coverImage: string;
  images?: {
    before?: string;
    after?: string;
    gallery?: string[];
  };
  highlights?: string[];
  tags?: string[];
};

export const projects: Project[] = [

{
  id: 1,
  slug: "azamgarh-residential-duplex",
  name: "Residential Duplex Home",
  client: "Private Residence",
  location: "Azamgarh, Uttar Pradesh",

  projectType: "Residential Construction (G+1 Duplex)",
  executionModel: "End-to-End Turnkey Construction",
  type: "Residential",

  duration: "6 Months",
  completionYear: "2021",
  status: "Completed",

  scale: {
    totalBuiltUpArea: "3,000 sq. ft.",
    mainBlock: "Ground Floor + First Floor (G+1 Structure)",
    academicBlock: "N/A",
    supportUnit: "Balcony, Parking Area & Staircase Block",
  },

  shortDescription:
    "A well-designed G+1 residential duplex featuring modern elevation, spacious balconies, and durable RCC construction with aesthetic exterior detailing.",

  description:
    "This project is a fully customized G+1 residential duplex constructed with a strong RCC framework and functional architectural planning. The design focuses on maximizing space utilization, ventilation, and natural lighting. The structure includes spacious balconies with decorative railings, a covered entrance supported by columns, and a well-balanced front elevation. High-quality materials were used for durability, along with aesthetic exterior color combinations to enhance visual appeal. The project was completed within 6 months with a focus on structural strength, clean finishing, and long-term usability.",

  coverImage: "/hero.png",

  images: {
    gallery: [
      "/hero.png",
    ],
  },

  highlights: [
    "Strong RCC framed G+1 structure ensuring long-term durability",
    "Spacious front elevation with dual-side balconies",
    "Decorative metal railings with modern geometric design",
    "Covered entrance porch with column support",
    "Optimized natural lighting and cross ventilation",
    "Balanced layout for family living with functional zoning",
    "Attractive exterior color combination enhancing visual appeal",
  ],

  tags: ["Residential", "Duplex", "RCC Structure", "Modern Elevation"],
},
{
  id: 2,
  slug: "shree-sharda-pg-college-khuraampur",
  type:"Institutional",
  name: "Shree Sharda P.G. College",
  client: "Shree Sharda Educational Trust",
  location: "Khuraampur, Uttar Pradesh",
  projectType: "Institutional / Educational Facility",
  executionModel: "Turnkey Construction (Civil & Interiors)",
  duration: "8+ Years (Phased Development)",
  completionYear: "2023",
  status: "Structural Complete - Color Finishing Pending",
  
  // Updated scale based on your exact blocks
  scale: {
    totalBuiltUpArea: "44,000 sq. ft.",
    mainBlock: "25,000 sq. ft. (Primary Block, up to 4 Floors)",
    academicBlock: "10,000 sq. ft. (3-Floor / G+2 Unit)",
    supportUnit: "9,000 sq. ft. (Extra Supporting Unit)"
  },

  shortDescription: "A massive multi-floor institutional campus featuring three distinct blocks. Executed with robust RCC framing, brickwork, POP finishing, and sustainable natural lighting. Final color finishes are currently pending client selection.",
  description: "Executed over a rigorous Eight-year timeline, the Shree Sharda P.G. College project demonstrates our capability in handling specialized institutional infrastructure. This 44,000 sq. ft. turnkey execution involved the complete overhaul and integration of highly technical academic laboratories, a dedicated corporate-style administrative wing, and complex utility support areas. Our team successfully managed the intricate MEP (Mechanical, Electrical, and Plumbing) requirements essential for safe lab environments, alongside acoustic treatments for meeting rooms and heavy-duty flooring designed for high student footfall. The result is a seamless, modern, and compliance-ready educational facility.",
  coverImage: "/project1/project1.1.png",
  images: {
    before: "/project1/before.png",
    after: "/project1/project1.5.png",
    gallery: [
      "/project1/project1.1.png",
      "/project1/project1.5.png",
      "/project1/project1.2.png",
      "/project1/project1.3.png",
      "/project1/project1.4.png"
    ]
  },

  highlights: [
    "Scale & Structure: 44,000 sq. ft. multi-floor design split across three functional blocks.",
    "Core Materials: Solid RCC framework combined with precise brickwork and Plaster of Paris (POP) finishing.",
    "Interior Ambience: False ceilings paired with a 2700-3000K warm lighting plan for a study-friendly environment.",
    "Structural Balance: Perfect alignment of total columns and beams, structurally complete.",
    "Sustainable Design: Engineered for cross-ventilation and maximum natural daylight.",
    "Current Status: Raw structural elegance maintained; final color palette pending client approval."
  ],
  
  tags: ["Institutional", "RCC Structure", "Sustainable Design", "Turnkey"]
},
  {
  id: 3,
  slug: "baba-vishwanath-institute-of-technology-martinganj",
  name: "Baba Vishwanath Institute of Technology",
  client: "Vishwanath Educational Trust",
  location: "Martinganj",
  projectType: "Institutional Renovation & Upgrade",
  executionModel: "Turnkey Interior & Infrastructure Execution",
  type: "Institutional",
  duration: "2 years",
  completionYear: "2014",
  status: "Completed",

  // (Your data up to here remains exactly as you provided)
  scale: {
    totalBuiltUpArea: "12,500 sq. ft.",
    mainBlock: "Office & Administrative Workspace",
    academicBlock: "N/A", // Handled within support units for this specific scale
    supportUnit: "Technical Laboratories, Meeting Rooms & Utility Areas",
  },

  // --- UPDATED SECTIONS FOR BIG CLIENT PITCH ---

  shortDescription:
    "A comprehensive 12,500 sq. ft. institutional upgrade, featuring high-precision technical laboratories, modern administrative zones, and robust MEP infrastructure tailored for technical education.",

  description:
    "Executed over a rigorous two-year timeline, the Baba Vishwanath Institute of Technology project demonstrates our capability in handling specialized institutional infrastructure. This 12,500 sq. ft. turnkey execution involved the complete overhaul and integration of highly technical academic laboratories, a dedicated corporate-style administrative wing, and complex utility support areas. Our team successfully managed the intricate MEP (Mechanical, Electrical, and Plumbing) requirements essential for safe lab environments, alongside acoustic treatments for meeting rooms and heavy-duty flooring designed for high student footfall. The result is a seamless, modern, and compliance-ready educational facility.",

  coverImage: "/project2/project2.4.png",

  images: {
    gallery: [
      "/project2/project2.4.png", 
      "/project2/project2.1.png", 
      "/project2/project22.png", 
      "/project2/project2.3.png"
    ],
  },

  highlights: [
    "Specialized Laboratory Execution: Custom MEP routing (plumbing, gas, electrical) for high-compliance technical and science labs.",
    "Institutional Durability: Installation of heavy-duty, high-footfall flooring and robust interior finishes built to withstand daily student use.",
    "Acoustic & Workspace Optimization: Premium glass partitions and sound-dampening treatments deployed in administrative and meeting zones.",
    "Advanced Electrical & Lighting: Upgraded load-bearing electrical panels and eye-friendly, high-lumen lighting systems for extended study hours.",
    "Safety & Utility Integration: Turnkey setup of critical support units, fire-safety compliance planning, and seamless punch-list closure."
  ],

  tags: [
    "Institutional", 
    "Laboratory Infrastructure", 
    "Turnkey Upgrades", 
    "Educational Facility"
  ],
},


]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

