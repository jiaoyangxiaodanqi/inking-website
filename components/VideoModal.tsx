"use client";

import { useEffect } from "react";
import type { Work } from "@/lib/works";
import { getEmbedUrl, categoryLabels } from "@/lib/works";

export default function VideoModal({
  work,
  onClose,
}: {
  work: Work;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="关闭"
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-ink-700 hover:border-accent text-ink-200 hover:text-accent transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-black border border-ink-800">
          <iframe
            src={getEmbedUrl(work)}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent">
              {categoryLabels[work.category]}
            </p>
            <h3 className="mt-2 text-2xl md:text-3xl font-serif text-white">
              {work.title}
            </h3>
            {work.client && (
              <p className="mt-1 text-sm text-ink-300">
                {work.client} · {work.year}
              </p>
            )}
          </div>
          <p className="max-w-xl text-sm text-ink-300 leading-relaxed">
            {work.description}
          </p>
        </div>
      </div>
    </div>
  );
}
