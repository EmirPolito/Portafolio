/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-13.5 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-center md:items-start text-left md:text-left">
            <div className="gap-1 flex flex-col order-2 md:order-1 items-left md:items-start">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-titulos text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hola, soy  ${DATA.name.split("  ")[0]}`}
              />
              <BlurFadeText
                className="text-descripciones md:max-w-[900px] text-base md:text-lg text-pretty font-sans leading-relaxed"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            {/* <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-32 md:size-36 border shadow-sm">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade> */}
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3.5">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-titulos text-xl font-bold">
              Experiencia laboral
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3.5">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-titulos text-xl font-bold">Educación</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={`${education.school}-${index}`}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-0 justify-between group"
                >
                  <div className="flex items-start sm:items-center gap-x-2.5 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10.5 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10.5 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      {/* Fechas arriba */}
                      <div className="sm:hidden mb-0.5 flex">
                        <span className="text-descripciones text-xs tabular-nums">
                          {education.start} - {education.end}
                        </span>
                      </div>
                      <div className="font-semibold text-titulos leading-snug sm:leading-none flex items-start sm:items-center gap-2">
                        <span className="whitespace-pre sm:whitespace-normal">
                          {education.school}
                        </span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mt-1 sm:mt-0 flex-shrink-0"
                          aria-hidden
                        />
                      </div>

                      {/* TSU en TI , Ing en TI */}
                      <div className="font-sans text-sm text-descripciones whitespace-pre sm:whitespace-normal">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  {/* Desktop Date */}
                  <div className="hidden sm:flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-titulos text-xl font-bold">Habilidades</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3.5 md:gap-3 justify-center md:justify-start">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="flex items-center justify-center w-[120px] sm:w-[106px] gap-1.5 sm:gap-1 px-2.5 sm:px-1 py-2.5 rounded-lg border border-bordes bg-card/50 hover:bg-muted hover:border-muted-foreground/20 transition-all duration-300 group">
                  {skill.icon && (
                    <div className="relative size-4.5 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={cn(
                          "h-full w-auto object-contain transition-transform group-hover:scale-110",
                          "darkIcon" in skill && "dark:hidden",
                        )}
                      />
                      {"darkIcon" in skill && (
                        <img
                          src={skill.darkIcon as string}
                          alt={skill.name}
                          className="h-full w-auto object-contain hidden dark:block transition-transform group-hover:scale-110"
                        />
                      )}
                    </div>
                  )}
                  {skill.name && (
                    <span className="text-xs font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
