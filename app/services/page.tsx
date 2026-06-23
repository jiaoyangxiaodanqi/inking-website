import Link from "next/link";

const services = [
  {
    code: "01",
    title: "产品宣传片",
    sub: "Product Film",
    desc: "面向新品发布、电商详情页、品牌 KV 的全媒介产品视频。",
    deliverables: [
      "30s / 60s / 90s 多版本",
      "横版 + 竖版 + 方版多规格",
      "中英文字幕 / 多语种配音",
      "可选实拍 + CG 合成方案",
    ],
  },
  {
    code: "02",
    title: "广告 TVC 与品牌片",
    sub: "Advertising / Brand TVC",
    desc: "为新品上市、品牌升级、节点营销服务的高品质广告内容。",
    deliverables: [
      "创意脚本与分镜",
      "导演组与拍摄团队",
      "三维 CG 合成与特效",
      "多平台投放规格交付",
    ],
  },
  {
    code: "03",
    title: "建筑动画与效果图",
    sub: "Architectural Visualization",
    desc: "团队的起家本行 — 让未建成项目跃然眼前。",
    deliverables: [
      "鸟瞰 / 街景 / 室内单帧",
      "项目动画与漫游",
      "VR / 720° 全景",
      "材质与光影深度定制",
    ],
  },
  {
    code: "04",
    title: "三维动画与角色 IP",
    sub: "3D Animation / IP",
    desc: "原创角色与世界观设定，IP 短片与系列内容制作。",
    deliverables: [
      "角色与场景设计",
      "动画分镜与剧本",
      "角色绑定与表演动画",
      "成片渲染与后期",
    ],
  },
  {
    code: "05",
    title: "展厅与多媒体内容",
    sub: "Exhibition / Multimedia",
    desc: "面向品牌展厅、城市展馆、活动现场的多媒体内容定制。",
    deliverables: [
      "异形屏与拼接内容",
      "沉浸式投影方案",
      "互动触控内容",
      "现场调试与运维",
    ],
  },
  {
    code: "06",
    title: "短视频与社媒内容",
    sub: "Social Content",
    desc: "持续性社媒内容支持，帮助品牌建立长期内容资产。",
    deliverables: [
      "月度内容策划",
      "拍摄 + 剪辑套餐",
      "竖版短视频规格",
      "数据复盘与迭代",
    ],
  },
];

const process = [
  { step: "01", title: "需求沟通", desc: "深入了解品牌、产品、目标受众与投放场景。" },
  { step: "02", title: "创意提案", desc: "提供脚本、分镜、视觉风格与可执行方案。" },
  { step: "03", title: "制作执行", desc: "拍摄、CG、配音、后期，按里程碑同步进度。" },
  { step: "04", title: "交付与服务", desc: "多规格交付，并提供后续投放与内容延展支持。" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <header className="mb-16 max-w-3xl">
          <p className="text-xs tracking-[0.35em] uppercase text-accent">
            What We Do
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
            服务范畴
          </h1>
          <p className="mt-6 text-ink-300 leading-relaxed">
            我们以视频创作为核心，向上延伸到创意策略，向下打通三维 CG 与多媒体内容。围绕你的品牌目标，提供一体化的视觉解决方案。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-800">
          {services.map((s) => (
            <div
              key={s.code}
              className="bg-ink-950 p-8 md:p-10 hover:bg-ink-900 transition-colors"
            >
              <div className="flex items-baseline gap-5">
                <span className="text-accent text-sm tracking-[0.3em]">
                  {s.code}
                </span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-ink-400">
                  {s.sub}
                </span>
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-serif text-white">
                {s.title}
              </h3>
              <p className="mt-4 text-ink-300 leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink-200">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-1 h-1 bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-accent">
              Process
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif">合作流程</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <p className="text-accent text-xs tracking-[0.35em]">{p.step}</p>
                <h3 className="mt-3 text-xl text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-300 leading-relaxed">
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1 right-[-20px] w-10 h-px bg-ink-700" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-ink-950 px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:bg-accent-soft transition-colors"
            >
              聊聊你的项目 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
