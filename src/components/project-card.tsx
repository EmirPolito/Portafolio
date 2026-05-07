/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-auto aspect-video sm:h-48 sm:aspect-auto bg-muted" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-auto sm:h-48 object-cover object-top sm:object-center"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-bordes rounded-lg overflow-hidden hover:ring-2 hover:ring-muted cursor-pointer transition-all duration-200 bg-card",
        className,
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto sm:h-48 object-cover object-top sm:object-center"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-auto aspect-video sm:h-48 sm:aspect-auto bg-muted" />
          )}
        </Link>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-1 sm:gap-2">
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            {/* Titulo del proyecto */}
            <h3 className="text-titulos font-semibold leading-snug">{title}</h3>
            {/* Mini descripción del proyecto */}
            <time className="text-descripciones text-xs tabular-nums">
              {dates}
            </time>
          </div>
          <div className="flex flex-nowrap gap-2 sm:gap-2.5 -mr-2.5">
            {links &&
              links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Demo y repositorio */}
                  <Badge className="bg-cards text-txt flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold hover:bg-cards/80 h-5 sm:h-5.5 w-fit px-1.5 sm:px-2.5 border-none transition-all rounded-md">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
          </div>
        </div>

        {/* Descripción del proyecto */}
        <div className="text-descripciones text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed dark:prose-invert">
          <Markdown
            components={{
              strong: ({ node, ...props }) => (
                <strong className="text-titulos font-bold" {...props} />
              ),
            }}
          >
            {description}
          </Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-x-1.5 gap-y-2 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-titulos border border-bordes text-[10px] sm:text-[12px] font-medium h-5 sm:h-6 w-fit px-1.5 sm:px-2.5"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
