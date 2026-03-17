export type ProjectType = "Residential" | "Commercial" | "Interior" | "Renovation";

export type Project = {
  id: number;
  slug: string;
  name: string;
  location: string;
  type: ProjectType;
  duration: string;
  year?: string;
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
    slug: "sharma-residence",
    name: "Sharma Residence",
    location: "Bhopal",
    type: "Residential",
    duration: "5 Months",
    year: "2025",
    description: "2-floor modern home with premium interior finishing.",
    coverImage: "/hero.png",
    images: {
      before: "/hero.png",
      after: "/hero.png",
      gallery: [
        "/hero.png",
        "/hero.png",
        "/hero.png",
      ],
    },
    highlights: [
      "RCC structure + premium exterior elevation",
      "Modular kitchen + custom storage",
      "False ceiling + warm lighting plan",
      "Waterproofing + final snag list sign-off",
    ],
    tags: ["Turnkey", "Modern", "Premium finish"],
  },
  {
    id: 2,
    slug: "merchant-office-renovation",
    name: "Merchant Office Renovation",
    location: "Indore",
    type: "Renovation",
    duration: "7 Weeks",
    year: "2024",
    description:
      "Fast-track renovation with new flooring, partitions, lighting, and a clean corporate look.",
    coverImage: "/hero.png",
    images: {
      gallery: [
        "/hero.png",
        "/hero.png",
      ],
    },
    highlights: [
      "Minimal downtime execution plan",
      "Electrical + lighting upgrade",
      "Glass partitions + acoustic treatment",
      "Handover cleaning + punch list closure",
    ],
    tags: ["Fast-track", "Commercial", "Renovation"],
  },
  {
    id: 3,
    slug: "azure-interiors",
    name: "Azure Interiors",
    location: "Bhopal",
    type: "Interior",
    duration: "6 Weeks",
    year: "2025",
    description:
      "Living + bedroom interior upgrade with custom carpentry, textures, and layered lighting.",
    coverImage: "/hero.png",
    images: {
      gallery: [
        "/hero.png",
        "/hero.png",
        "/hero.png",
      ],
    },
    highlights: [
      "Custom TV unit + paneling",
      "Wardrobe optimization + accessories",
      "Premium texture paint finish",
      "Warm/cool lighting zones",
    ],
    tags: ["Interior", "Carpentry", "Lighting"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

