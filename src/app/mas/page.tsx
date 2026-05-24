import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import CertificationsSection from "@/components/section/certifications-section";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
  title: "Más | Acerca de mi y Certificaciones",
  description: "Conoce más sobre mi trayectoria y certificaciones.",
};

export default function MasPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-13.5">
      {/* About Section */}
      {/* <section id="about">
        <div className="flex flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-titulos text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              Acerca de mi
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-descripciones dark:prose-invert text-base md:text-lg">
              <Markdown
                components={{
                  strong: ({ node, ...props }) => (
                    <strong className="text-titulos font-bold" {...props} />
                  ),
                }}
              >
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section> */}

      {/* Certifications Section */}
      <section id="certifications">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <CertificationsSection />
        </BlurFade>
      </section>
    </main>
  );
}
