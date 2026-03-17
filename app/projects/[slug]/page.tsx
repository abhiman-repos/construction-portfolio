import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Timer } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { DividerGlow } from "@/components/shared/DividerGlow";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { getProjectBySlug } from "@/lib/content/projects";
import { buildWhatsAppLink } from "@/lib/links";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>

            <ButtonLink
              href={buildWhatsAppLink(
                `Hi! I’m interested in the project "${project.name}". Can you share estimate & timeline?`,
              )}
              size="sm"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div>
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="text-xs font-medium tracking-wide text-amber-300/90">
                  {project.type}
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-300/80" />
                    {project.location}
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1">
                    <Timer className="h-3.5 w-3.5 text-amber-300/80" />
                    {project.duration}
                  </div>
                  {project.year ? (
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1">
                      {project.year}
                    </div>
                  ) : null}
                </div>

                {project.images?.before && project.images?.after ? (
                  <div className="mt-8">
                    <div className="text-sm font-semibold text-foreground">
                      Before / After
                    </div>
                    <div className="mt-3">
                      <BeforeAfterSlider
                        beforeSrc={project.images.before}
                        afterSrc={project.images.after}
                        alt={`${project.name} before and after`}
                      />
                    </div>
                  </div>
                ) : null}

                {project.images?.gallery?.length ? (
                  
                  <div className="mt-10">
                    <div className="text-sm font-semibold text-foreground">
                      Gallery
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.images.gallery.map((src) => (
                        <div
                          key={src}
                          className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-background"
                        >
                          <Image
                            src={src}
                            alt={`${project.name} photo`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 420px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-foreground">
                  Project highlights
                </div>
                <DividerGlow className="my-4" />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(project.highlights ?? []).map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-300/80" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-foreground">
                  Want something similar?
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Share your location, area (sqft), and timeline. We’ll respond with a
                  clear estimate and plan.
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href={buildWhatsAppLink(
                      `Hi! I want a project like "${project.name}". Location: __, Area: __ sqft, Timeline: __.`,
                    )}
                    className="w-full"
                  >
                    WhatsApp for estimate <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

