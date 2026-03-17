import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarCheck2,
  HardHat,
  Home,
  Paintbrush2,
  Wrench,
} from "lucide-react";

export const stats = [
  { labelKey: "home.stats.projectsCompleted", value: "25+" },
  { labelKey: "home.stats.yearsExperience", value: "3+" },
  { labelKey: "home.stats.happyClients", value: "20+" },
] as const;

export type Service = {
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    titleKey: "home.services.house.title",
    descriptionKey: "home.services.house.description",
    icon: Home,
  },
  {
    titleKey: "home.services.renovation.title",
    descriptionKey: "home.services.renovation.description",
    icon: Wrench,
  },
  {
    titleKey: "home.services.interior.title",
    descriptionKey: "home.services.interior.description",
    icon: Paintbrush2,
  },
  {
    titleKey: "home.services.commercial.title",
    descriptionKey: "home.services.commercial.description",
    icon: Building2,
  },
];

export const features = [
  {
    titleKey: "home.features.ontime.title",
    descriptionKey: "home.features.ontime.description",
    icon: CalendarCheck2,
  },
  {
    titleKey: "home.features.pricing.title",
    descriptionKey: "home.features.pricing.description",
    icon: Building2,
  },
  {
    titleKey: "home.features.workforce.title",
    descriptionKey: "home.features.workforce.description",
    icon: HardHat,
  },
  {
    titleKey: "home.features.materials.title",
    descriptionKey: "home.features.materials.description",
    icon: Home,
  },
] as const;

export const testimonials = [
  {
    name: "Rajesh Verma",
    location: "Bhopal",
    textKey: "home.testimonials.1.text",
  },
  {
    name: "Ananya Sharma",
    location: "Indore",
    textKey: "home.testimonials.2.text",
  },
  {
    name: "Vikram Singh",
    location: "Bhopal",
    textKey: "home.testimonials.3.text",
  },
] as const;

