

import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { servicesData } from "@/lib/content/services";
import BorderGlow from "@/components/shared/BorderGlow";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) return notFound();

  return (
    <div className="bg-background text-foreground">

      {/* 🔥 HERO (GLOW BASED) */}
      <section className="py-20">
        <Container>
          <BorderGlow className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl">

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                {service.title}
              </h1>

              <p className="mt-5 text-lg text-muted-foreground">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">

                <ButtonLink
                  href="#process"
                  className="border border-border"
                >
                  View Process
                </ButtonLink>
              </div>

              {/* TRUST */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span>✔ On-time Delivery</span>
                <span>✔ Transparent Pricing</span>
                <span>✔ Quality Execution</span>
              </div>
            </div>

          </BorderGlow>
        </Container>
      </section>

      {/* 🔥 PROCESS (MODERN TIMELINE) */}
      <section id="process" className="py-24">
        <Container>
          <h2 className="text-3xl font-semibold text-center">
            Our Construction Process
          </h2>

          <div className="mt-16 max-w-4xl mx-auto space-y-10">

            {service.steps.map((step, i) => (
              <BorderGlow
                key={i}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl"
              >
                <div className="flex items-start gap-4">

                  {/* STEP NUMBER */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-black font-semibold">
                    {i + 1}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </BorderGlow>
            ))}

          </div>
        </Container>
      </section>

      {/* 🔥 BENEFITS */}
      <section className="py-24 bg-muted/20">
        <Container>
          <h2 className="text-3xl font-semibold text-center">
            Why Choose Us
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {service.benefits.map((b, i) => (
              <BorderGlow
                key={i}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl"
              >
                <div className="text-amber-400 text-lg">✔</div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {b}
                </p>
              </BorderGlow>
            ))}

          </div>
        </Container>
      </section>

      {/* 🔥 CTA (HIGH CONVERSION) */}
      <section className="py-24">
        <Container>
          <BorderGlow className="p-12 text-center bg-white/5 backdrop-blur-xl rounded-3xl">

            <h2 className="text-3xl font-semibold">
              Get Your Project Estimate in Minutes
            </h2>

            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Share your requirements and get a professional estimate with timeline — completely free.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink
                href="#contact"
                className="bg-amber-400 text-black hover:bg-amber-300"
              >
                Get Free Consultation
              </ButtonLink>

            </div>

          </BorderGlow>
        </Container>
      </section>

    </div>
  );
}