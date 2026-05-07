"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, X } from "lucide-react";
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

function LinkBadge({
  link,
  isOpen,
  onToggle,
}: {
  link: LinkItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isEvidence = link.title === "Evidencia";

  const commonClasses = cn(
    "inline-flex items-center gap-1.5 text-xs font-semibold transition-all px-2.5 py-0.5 h-6 rounded-md whitespace-nowrap leading-none",
    isEvidence && !isOpen
      ? "bg-cards text-txt hover:bg-cards/80"
      : "bg-cards text-txt hover:bg-cards/80",
  );

  if (!isEvidence || !link.images) {
    return (
      <Link
        href={link.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {link.icon}
        {link.title}
      </Link>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
      className={cn(commonClasses, "cursor-pointer")}
    >
      {link.title}
      <ChevronDown
        className={cn(
          "size-3 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}

function HackathonCard({
  hackathon,
  onImageSelect,
}: {
  hackathon: (typeof DATA.hackathons)[number];
  onImageSelect: (img: { url: string; title: string }) => void;
}) {
  const [openGalleryIndex, setOpenGalleryIndex] = useState<number | null>(null);

  return (
    <TimelineItem
      key={hackathon.title + hackathon.dates}
      className="w-full flex items-start justify-between gap-6"
    >
      <TimelineConnectItem className="flex items-start justify-center">
        {hackathon.image ? (
          <img
            src={hackathon.image}
            alt={hackathon.title}
            className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
          />
        ) : (
          <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
        )}
      </TimelineConnectItem>
      <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
        {hackathon.dates && (
          <time className="text-xs text-descripciones">{hackathon.dates}</time>
        )}
        {hackathon.title && (
          <h3 className="text-titulos font-semibold leading-none">
            {hackathon.title}
          </h3>
        )}
        {hackathon.location && (
          <p className="text-descripciones text-sm">{hackathon.location}</p>
        )}
        {hackathon.description && (
          <p className="text-descripciones text-sm leading-relaxed wrap-break-word">
            {hackathon.description}
          </p>
        )}
        {hackathon.links && hackathon.links.length > 0 && (
          <div className="mt-2 flex flex-col gap-4">
            <div className="flex flex-row flex-wrap items-start gap-2">
              {hackathon.links.map((link, idx) => (
                <LinkBadge
                  key={idx}
                  link={link as any}
                  isOpen={openGalleryIndex === idx}
                  onToggle={() =>
                    setOpenGalleryIndex(openGalleryIndex === idx ? null : idx)
                  }
                />
              ))}
            </div>

            <AnimatePresence>
              {openGalleryIndex !== null &&
                (hackathon.links[openGalleryIndex] as any).images && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-2  rounded-sm w-fit flex justify-start">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
                        {(hackathon.links[openGalleryIndex] as any).images
                          .slice(0, 2)
                          .map((img: any, i: number) => (
                            <div
                              key={i}
                              className="group flex flex-col items-center"
                            >
                              <motion.div
                                whileTap={{ scale: 0.99 }}
                                onClick={() => onImageSelect(img)}
                                className={cn(
                                  "cursor-pointer relative w-full overflow-hidden rounded-sm bg-background shadow-sm border border-border/10",
                                  (hackathon.links[openGalleryIndex] as any)
                                    .images.length > 1 && "aspect-video",
                                )}
                              >
                                <img
                                  src={img.url}
                                  alt={img.title}
                                  className={cn(
                                    "w-full block transition-transform duration-500",
                                    (hackathon.links[openGalleryIndex] as any)
                                      .images.length > 1
                                      ? "size-full object-cover"
                                      : "h-auto",
                                  )}
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                  <span className="text-txt text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-cards border border-white/20 rounded-full shadow-lg backdrop-blur-sm">
                                    Ver Imagen
                                  </span>
                                </div>
                              </motion.div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </TimelineItem>
  );
}

export default function HackathonsSection() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-cards z-10 rounded-xl px-4 py-1">
              <span className="text-txt text-sm font-medium">
                Participaciones
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-titulos text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              Participaciones en eventos.
            </h2>
            <p className="text-descripciones max-w-4xl text-base md:text-lg leading-relaxed text-pretty text-center font-sans">
              Participé en eventos tecnológicos, desarrollando soluciones en
              equipo y fortaleciendo mis habilidades de colaboración, y
              desarrollo web.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon, idx) => (
            <HackathonCard
              key={idx}
              hackathon={hackathon}
              onImageSelect={setSelectedImage}
            />
          ))}
        </Timeline>
      </div>

      {/* Lightbox para expandir la imagen - Renderizado fuera del flujo con Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 sm:p-4 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center pointer-events-none"
                >
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[95vh] rounded-lg shadow-2xl object-contain border border-white/5"
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
