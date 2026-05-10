import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-10 py-4.5 md:py-2">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-cards z-10 rounded-xl px-4 py-1">
              <span className="text-txt text-sm font-medium">
                Mis proyectos
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-3 text-center">
            {/* Título */}
            <h2 className="text-titulos text-3xl font-bold tracking-tight sm:text-5xl">
              Algunos proyectos.
            </h2>

            {/* Descripción del propósito */}
            <p className="text-descripciones max-w-4xl text-base md:text-lg leading-relaxed text-pretty text-center font-sans">
              He trabajado en diversos proyectos web, creando soluciones
              funcionales y sobre todo que sean accesibles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 max-w-[900px] mx-auto auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
