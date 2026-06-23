"use client";

import { useMemo, useState } from "react";
import VideoCard from "@/components/VideoCard";
import { works, categoryLabels, type Work } from "@/lib/works";

const filters: { key: "all" | Work["category"]; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "product", label: categoryLabels.product },
  { key: "ad", label: categoryLabels.ad },
  { key: "architecture", label: categoryLabels.architecture },
  { key: "animation", label: categoryLabels.animation },
  { key: "multimedia", label: categoryLabels.multimedia },
];

export default function WorksPage() {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");

  const filtered = useMemo(
    () => (active === "all" ? works : works.filter((w) => w.category === active)),
    [active]
  );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <header className="mb-16 max-w-3xl">
        <p className="text-xs tracking-[0.35em] uppercase text-accent">
          Selected Works
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
          作品案例
        </h1>
        <p className="mt-6 text-ink-300 leading-relaxed">
          以下作品来自我们与各行业客户的合作。每个项目都从品牌策略出发，以镜头与画面承载叙事。点击卡片可在线播放。
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`text-xs tracking-[0.25em] uppercase px-4 py-2 border transition-colors ${
              active === f.key
                ? "border-accent text-accent bg-accent/5"
                : "border-ink-700 text-ink-300 hover:border-ink-500 hover:text-ink-100"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-32 text-center text-ink-400">
          该分类下作品正在筹备中，敬请期待。
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((w) => (
            <VideoCard key={w.id} work={w} size="large" />
          ))}
        </div>
      )}
    </div>
  );
}
