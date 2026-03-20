import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { servicesData } from "@/lib/content/services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 🔥 FIX: await params
  const { slug } = await params;

  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) return notFound();

  return (
    <div className="bg-gradient-to-r from-amber-20/10 to-transparent p-10 text-foreground">
      {/* 🔥 HERO (SPLIT) */}
      <section className="relative py-24">
        <div className="absolute inset-0">
 
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight">
              {service.title}
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-8 flex gap-4">
              <ButtonLink href="#">Get Free Consultation</ButtonLink>

              <ButtonLink
                href="#process"
                className="border border-border "
              >
                View Process
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 🔥 PROCESS (TIMELINE STYLE) */}
      <section id="process" className="py-24">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-16">
            Our Construction Process
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* LINE */}
            <div className="absolute left-5 top-0 h-full w-[2px] bg-border" />

            <div className="space-y-10">
              {service.steps.map((step, i) => (
                <div key={i} className="relative pl-14">
                  {/* DOT */}
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-amber-400 shadow-lg" />

                  {/* CARD */}
                  <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-md p-6 shadow-md hover:shadow-xl transition">
                    <div className="text-amber-400 text-sm font-semibold">
                      Step {i + 1}
                    </div>

                    <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* 🔥 CTA (BIG CONVERSION SECTION) */}
      <section className="py-24">
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-r from-amber-400/10 to-transparent p-10 text-center shadow-lg">
            <h2>Get Your House Construction Cost in 2 Minutes</h2>

            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Get a detailed estimate, timeline, and expert consultation —
              completely free.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink href="#">Get Free Consultation</ButtonLink>

              <ButtonLink
                href="#"
                className=" border border-border"
              >
                Call Now
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
