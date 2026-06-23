import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "影像即资产",
    desc: "我们把每一帧都当作可以被反复使用的品牌资产来打磨，而不是一次性消耗品。",
  },
  {
    title: "建筑级精度",
    desc: "源自建筑可视化的训练，让我们对光影、材质、比例与空间有更严苛的标准。",
  },
  {
    title: "对接像合伙人",
    desc: "我们更愿意走到客户的业务里去 — 理解产品和市场，再决定如何呈现。",
  },
];

const stats = [
  { num: "14+", label: "年视觉创作经验" },
  { num: "1000+", label: "项目交付经验" },
  { num: "30+", label: "合作品牌与机构" },
  { num: "100%", label: "全流程一站交付" },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.35em] uppercase text-accent">
              About Us
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              天津砚宸科技
              <br />
              <span className="text-ink-300">INKING ARCHITECTURAL.CG</span>
            </h1>
            <div className="mt-8 space-y-6 text-ink-200 leading-relaxed">
              <p>
                我们是一支以视觉创作为核心的团队，总部位于天津。团队由建筑可视化领域起步，逐步将能力延伸到产品宣传片、广告 TVC、三维动画与多媒体内容。
              </p>
              <p>
                我们相信好的影像不是堆砌技术，而是一次精确的表达 — 找到品牌、产品与人之间最值得被讲述的那一点，再用合适的画面、节奏与声音把它说出来。
              </p>
              <p>
                如果你正在为新品发布筹备一支宣传片，正在规划一次品牌升级的视觉表达，或者希望把一栋未建成的建筑提前呈现给客户 — 我们都愿意一起聊聊。
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-800 border border-ink-800">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80&auto=format&fit=crop"
                alt="工作室一角"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Image
                  src="/logo.png"
                  alt="INKING"
                  width={180}
                  height={60}
                  className="logo-invert h-10 w-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-900/30 border-y border-ink-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-serif text-accent">
                {s.num}
              </p>
              <p className="mt-3 text-xs tracking-[0.3em] uppercase text-ink-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs tracking-[0.35em] uppercase text-accent">
            Our Values
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-serif">三件事</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-ink-700 pt-6">
              <p className="text-xs tracking-[0.3em] text-accent">
                0{i + 1}
              </p>
              <h3 className="mt-3 text-2xl font-serif text-white">{v.title}</h3>
              <p className="mt-4 text-ink-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-ink-600 hover:border-accent hover:text-accent px-8 py-4 text-sm tracking-[0.25em] uppercase transition-colors"
          >
            联系我们 →
          </Link>
        </div>
      </section>
    </>
  );
}
