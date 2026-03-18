export type ProjectType = "Residential" | "Commercial" | "Interior" | "Renovation" | "Institutional";

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
  description: "",
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
  id: 2,
  slug: "Baba-Vishwanath-Institute-of-Technology-Martinganj",
  name: "Baba Vishwanath Institute of Technology",
  client: "Vishwanath Educational Trust",
  location: "Martinganj",
  projectType: "Commercial Renovation",
  executionModel: "Turnkey Interior Renovation",
  type: "Renovation",

  duration: "2 years",
  completionYear: "2014",
  status: "Completed",

  scale: {
    totalBuiltUpArea: "12,500 sq. ft.",
    mainBlock: "Office Workspace",
    academicBlock: "N/A",
    supportUnit: "Meeting + Utility Areas",
  },

  shortDescription:
    "Fast-track office renovation with modern interiors, lighting, and workspace optimization.",

  description:
    "A fast-track commercial renovation project executed with minimal downtime. Included flooring upgrades, glass partitions, modern lighting, and a clean corporate finish.",

  coverImage: "/hero.png",

  images: {
    gallery: ["/hero.png", "/hero.png"],
  },

  highlights: [
    "Minimal downtime execution plan",
    "Electrical + lighting upgrade",
    "Glass partitions + acoustic treatment",
    "Handover cleaning + punch list closure",
  ],

  tags: ["Commercial", "Renovation", "Fast-track"],
},
{
  id: 3,
  slug: "azure-interiors",
  name: "Azure Interiors",
  client: "Residential Client",
  location: "Bhopal",
  projectType: "Interior Design & Execution",
  executionModel: "Custom Interior Work",
  type: "Interior",

  duration: "6 Weeks",
  completionYear: "2025",
  status: "Completed",

  scale: {
    totalBuiltUpArea: "1,800 sq. ft.",
    mainBlock: "Living + Bedroom",
    academicBlock: "N/A",
    supportUnit: "Kitchen + Storage",
  },

  shortDescription:
    "Premium home interior upgrade with custom carpentry, textures, and lighting.",

  description:
    "A residential interior transformation project featuring custom furniture, wardrobe optimization, textured walls, and layered lighting design for a premium living experience.",

  coverImage: "/hero.png",

  images: {
    gallery: ["/hero.png", "/hero.png", "/hero.png"],
  },

  highlights: [
    "Custom TV unit + paneling",
    "Wardrobe optimization + accessories",
    "Premium texture paint finish",
    "Warm/cool lighting zones",
  ],

  tags: ["Interior", "Carpentry", "Lighting"],
},
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

