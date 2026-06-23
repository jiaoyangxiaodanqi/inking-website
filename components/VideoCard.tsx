"use client";

import { useState } from "react";
import Image from "next/image";
import type { Work } from "@/lib/works";
import { categoryLabels } from "@/lib/works";
import VideoModal from "./VideoModal";

export default function VideoCard({
  work,
  size = "default",
}: {
  work: Work;
  size?: "default" | "large";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full text-left overflow-hidden bg-ink-800"
      >
        <div
          className={`relative w-full overflow-hidden ${
            size === "large" ? "aspect-[16/9]" : "aspect-video"
          }`}
        >
          <Image
            src={work.cover}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-90" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="w-16 h-16 rounded-full border border-white/70 flex items-center justify-center backdrop-blur-sm bg-black/20">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white translate-x-[2px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="text-[10px] tracking-[0.25em] uppercase px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/20">
              {categoryLabels[work.category]}
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-base lg:text-lg font-medium text-white leading-snug">
                {work.title}
              </h3>
              {work.client && (
                <p className="mt-1 text-xs text-ink-300">{work.client} · {work.year}</p>
              )}
            </div>
            <span className="text-xs text-accent tracking-[0.2em] uppercase whitespace-nowrap">
              Play →
            </span>
          </div>
        </div>
      </button>

      {open && <VideoModal work={work} onClose={() => setOpen(false)} />}
    </>
  );
}
