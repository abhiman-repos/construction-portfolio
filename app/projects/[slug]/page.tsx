import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";

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
      <main className="pb-16">
        {/* 🔥 HERO */}
        <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />

          <Container className="relative z-10 flex h-full items-end pb-10">
            <div className="text-white max-w-3xl">
              <p className="text-xs uppercase tracking-wide text-amber-300">
                {project.type}
              </p>
              <h1 className="mt-2 text-3xl sm:text-5xl font-bold">
                {project.name}
              </h1>
              <p className="mt-3 text-white/80">{project.location}</p>
            </div>
          </Container>
        </div>

        <Container className="mt-10">
          {/* 🔥 TOP ACTIONS */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>

            <ButtonLink
              href={buildWhatsAppLink(
                `Hi! I’m interested in "${project.name}". Please share estimate & timeline.`,
              )}
              size="sm"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          {/* 🔥 MAIN GRID */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_0.5fr]">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              {/* OVERVIEW */}
              <div className="rounded-3xl border border-border p-6">
                <h2 className="text-xl font-semibold">Project Overview</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {project.description || project.shortDescription}
                </p>
              </div>

              {/* 🔥 KEY INFO */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Client", value: project.client },
                  { label: "Execution", value: project.executionModel },
                  { label: "Duration", value: project.duration },
                  { label: "Year", value: project.completionYear },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border p-4 bg-background/60"
                  >
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* 🔥 SCALE SECTION */}
              <div className="rounded-3xl border border-border p-6">
                <h2 className="text-xl font-semibold">Project Scale</h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(project.scale).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-xl border border-border p-4 text-center"
                    >
                      <p className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="mt-2 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BEFORE AFTER */}
              {project.images?.before && project.images?.after && (
                <div>
                  <h2 className="text-xl font-semibold">Before / After</h2>
                  <div className="mt-4">
                    <BeforeAfterSlider
                      beforeSrc={project.images.before}
                      afterSrc={project.images.after}
                      alt={project.name}
                    />
                  </div>
                </div>
              )}

              {/* GALLERY */}
              {project.images?.gallery && (
                <div>
                  <h2 className="text-xl font-semibold">Gallery</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {project.images.gallery.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[16/11] overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={src}
                          alt={project.name}
                          fill
                          className="object-cover hover:scale-105 transition"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-6">
              {/* HIGHLIGHTS */}
              <div className="rounded-3xl border border-border p-6">
                <h3 className="font-semibold">Key Highlights</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {project.highlights?.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-3xl border border-border p-6">
                <h3 className="font-semibold">Want similar project?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share location, area & timeline — we’ll send estimate.
                </p>

                <ButtonLink
                  href={buildWhatsAppLink(
                    `Hi! I want a project like "${project.name}".`,
                  )}
                  className="mt-4 w-full"
                >
                  WhatsApp for estimate
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
