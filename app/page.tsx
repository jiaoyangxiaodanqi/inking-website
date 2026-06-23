import Link from "next/link";
import Image from "next/image";
import VideoCard from "@/components/VideoCard";
import { works } from "@/lib/works";

const featured = works.filter((w) => w.featured).slice(0, 3);

const capabilities = [
  {
    no: "01",
    title: "产品宣传片",
    desc: "围绕产品定位、卖点与目标人群，构建清晰的视觉叙事，让产品在 30 秒内被理解、被记住。",
  },
  {
    no: "02",
    title: "广告与 TVC",
    desc: "面向新媒体投放、线下大屏与品牌发布，多种规格交付，覆盖前期策划、拍摄、CG 合成与后期。",
  },
  {
    no: "03",
    title: "建筑动画与效果图",
    desc: "源自团队多年建筑可视化经验，从单帧效果图到完整动画，电影级运镜与材质表现。",
  },
  {
    no: "04",
    title: "三维动画与多媒体",
    desc: "原创角色与场景、IP 内容动画、展厅多媒体与互动内容定制，一体化创意落地。",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,162,60,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(60,100,180,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/40 to-ink-950" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-24">
          <div className="max-w-4xl animate-fade-up">
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-accent mb-8">
              INKING ARCHITECTURAL · CG
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white">
              以光影
              <br />
              为品牌
              <span className="text-accent">叙事</span>。
            </h1>
            <p className="mt-10 text-base md:text-lg text-ink-200 max-w-2xl leading-relaxed">
              天津砚宸科技有限公司 — 由建筑可视化起步，深耕产品宣传片、广告视频与多媒体视觉创作。我们相信每一帧画面都是品牌资产。
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/works"
                className="inline-flex items-center gap-3 bg-accent text-ink-950 px-7 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:bg-accent-soft transition-colors"
              >
                浏览作品 <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-ink-600 hover:border-ink-300 px-7 py-4 text-sm tracking-[0.25em] uppercase transition-colors"
              >
                洽谈合作
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ink-400 animate-fade-in">
          Scroll
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.35em] uppercase text-accent">
                Featured Works
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
                精选案例
              </h2>
            </div>
            <Link
              href="/works"
              className="text-sm tracking-[0.25em] uppercase text-ink-200 hover:text-accent transition-colors"
            >
              查看全部 →
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featured.map((w) => (
                <VideoCard key={w.id} work={w} />
              ))}
            </div>
          ) : (
            <p className="text-ink-400">作品正在准备中。</p>
          )}
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs tracking-[0.35em] uppercase text-accent">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
              我们能为品牌做什么
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-800">
            {capabilities.map((c) => (
              <div
                key={c.no}
                className="bg-ink-950 p-8 md:p-12 hover:bg-ink-900 transition-colors group"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-accent text-sm tracking-[0.3em]">
                    {c.no}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-6 text-ink-300 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase text-ink-200 hover:text-accent transition-colors"
            >
              查看完整服务 →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-950 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,162,60,0.08),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Image
            src="/logo.png"
            alt="INKING"
            width={220}
            height={80}
            className="logo-invert mx-auto h-14 w-auto opacity-90"
          />
          <h2 className="mt-10 text-3xl md:text-5xl font-serif leading-tight">
            有项目想合作？
            <br />
            <span className="text-accent">我们很乐意聊聊。</span>
          </h2>
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto leading-relaxed">
            无论是产品发布短片、品牌 TVC，还是建筑动画与展厅多媒体，从创意到交付，我们都能给你一份清晰的方案。
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-ink-950 px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:bg-accent-soft transition-colors"
            >
              发起一个项目 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
