import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-5">
          <Image
            src="/logo.png"
            alt="天津砚宸科技"
            width={180}
            height={60}
            className="logo-invert h-12 w-auto"
          />
          <p className="text-sm text-ink-300 leading-relaxed max-w-sm">
            天津砚宸科技有限公司 — 以光影叙事的视觉团队。
            专注产品宣传片、广告视频、建筑动画与多媒体内容创作。
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs tracking-[0.3em] uppercase text-ink-400">
            导航
          </h4>
          <ul className="space-y-3 text-sm text-ink-200">
            <li>
              <Link href="/works" className="hover:text-accent">
                作品案例
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent">
                服务范畴
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                关于我们
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                联系我们
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs tracking-[0.3em] uppercase text-ink-400">
            联系
          </h4>
          <ul className="space-y-3 text-sm text-ink-200">
            <li>邮箱 · 3676898@qq.com</li>
            <li>电话 · 186 2221 5545</li>
            <li>微信 · ALton0218</li>
            <li>地址 · 天津市</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} 天津砚宸科技有限公司 · INKING ARCHITECTURAL.CG</p>
          <p className="tracking-widest">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
