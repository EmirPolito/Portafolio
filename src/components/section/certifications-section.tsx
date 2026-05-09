"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, X, Globe, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";

interface LinkItem {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  images?: readonly {
    url: string;
    title: string;
  }[];
}

function LinkBadge({ link }: { link: LinkItem }) {
  return (
    <Link
      href={link.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-semibold transition-all px-2.5 py-0.5 h-6 rounded-md whitespace-nowrap leading-none bg-cards text-txt hover:bg-cards/80"
    >
      {link.title}
      <ArrowUpRight className="size-3" />
    </Link>
  );
}

function CertificationCard({
  certification,
  onImageSelect,
}: {
  certification: (typeof DATA.certifications)[number];
  onImageSelect: (img: { url: string; title: string }) => void;
}) {
  return (
    <TimelineItem
      key={certification.title + certification.dates}
      className="w-full flex items-start justify-between gap-3.5 sm:gap-6"
    >
      <TimelineConnectItem className="flex items-start justify-center">
        {certification.image ? (
          <img
            src={certification.image}
            alt={certification.title}
            className="size-8 sm:size-10 bg-card z-10 shrink-0 overflow-hidden p-1.5 border rounded-full shadow ring-2 ring-titulos/30 object-contain flex-none"
          />
        ) : (
          <div className="size-8 sm:size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-titulos/30 flex-none" />
        )}
      </TimelineConnectItem>
      <div className="flex flex-1 flex-col justify-start gap-1 min-w-0">
        <div className="flex items-center gap-2">
          {certification.location && (
            <span className="text-sm font-medium text-descripciones">
              {certification.location}
            </span>
          )}
          {certification.location && certification.dates && (
            <span className="text-descripciones">-</span>
          )}
          {certification.dates && (
            <time className="text-xs text-descripciones">
              {certification.dates}
            </time>
          )}
        </div>

        {certification.title && (
          <h3 className="text-titulos font-bold text-lg leading-tight">
            {certification.title}
          </h3>
        )}

        {certification.description && (
          <p className="text-descripciones text-sm leading-relaxed wrap-break-word">
            {certification.description}
          </p>
        )}

        <div className="mt-2 flex flex-col gap-4">
          <div className="flex flex-row flex-wrap items-start gap-2">
            {certification.links?.map(
              (link, idx) =>
                (link as any).href && (
                  <LinkBadge key={idx} link={link as any} />
                ),
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-[1350px]">
            {certification.links?.map((link) =>
              (link as any).images?.map((img: any, i: number) => (
                <div key={i} className="group flex flex-col items-center">
                  <motion.div
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onImageSelect(img)}
                    className="cursor-pointer relative w-full overflow-hidden rounded-none shadow-md border border-border/10"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-auto object-contain transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 opacity-100 flex items-center justify-center transition-all duration-300">
                      <span className="text-txt text-[10px] font-bold uppercase tracking-wider px-4 py-2 bg-cards rounded-full shadow-lg hover:bg-cards/90 transition-colors">
                        Ver Imagen
                      </span>
                    </div>
                  </motion.div>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </TimelineItem>
  );
}

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-7.5 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-cards z-10 rounded-xl px-4 py-1">
              <span className="text-txt text-sm font-medium">Cursos</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-titulos text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              Cursos realizados
            </h2>
            <p className="text-descripciones max-w-4xl text-base md:text-lg leading-relaxed text-pretty text-center font-sans">
              Aquí una muestra de algunos de los cursos que he realizado.
            </p>
          </div>
        </div>
        <Timeline className="[&>div]:space-y-12">
          {DATA.certifications.map((certification, idx) => (
            <CertificationCard
              key={idx}
              certification={certification}
              onImageSelect={setSelectedImage}
            />
          ))}
        </Timeline>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-2 sm:p-4 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
                  className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center pointer-events-none"
                >
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[95vh] rounded-lg shadow-2xl object-contain border border-white/10"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
