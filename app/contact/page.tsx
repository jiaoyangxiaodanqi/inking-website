import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.35em] uppercase text-accent">
            Contact
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
            发起一个
            <br />
            <span className="text-accent">项目</span>。
          </h1>
          <p className="mt-6 text-ink-300 leading-relaxed">
            告诉我们一些项目背景 — 用途、时间、预算范围与你心中的方向。我们会在 24 小时内回复，并安排一次免费的提案沟通。
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-ink-400">
                邮箱
              </p>
              <a
                href="mailto:3676898@qq.com"
                className="mt-1 block text-lg text-ink-100 hover:text-accent"
              >
                3676898@qq.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-ink-400">
                电话
              </p>
              <a
                href="tel:+8618622215545"
                className="mt-1 block text-lg text-ink-100 hover:text-accent"
              >
                186 2221 5545
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-ink-400">
                地址
              </p>
              <p className="mt-1 text-lg text-ink-100">天津市</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-ink-400">
                工作时间
              </p>
              <p className="mt-1 text-lg text-ink-100">
                周一至周五 · 09:30 — 18:30
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            action="mailto:3676898@qq.com"
            method="post"
            encType="text/plain"
            className="space-y-6 bg-ink-900/40 border border-ink-800 p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="姓名 *" name="name" required />
              <Field label="公司 / 机构" name="company" />
              <Field label="邮箱 *" name="email" type="email" required />
              <Field label="电话" name="phone" />
            </div>

            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-ink-400 mb-3">
                项目类型
              </label>
              <select
                name="type"
                className="w-full bg-ink-950 border border-ink-700 px-4 py-3 text-ink-100 focus:border-accent outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  请选择
                </option>
                <option value="product">产品宣传片</option>
                <option value="ad">广告 / TVC</option>
                <option value="architecture">建筑动画 / 效果图</option>
                <option value="animation">三维动画 / IP</option>
                <option value="multimedia">展厅 / 多媒体</option>
                <option value="other">其他</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-ink-400 mb-3">
                预算范围
              </label>
              <select
                name="budget"
                className="w-full bg-ink-950 border border-ink-700 px-4 py-3 text-ink-100 focus:border-accent outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  请选择
                </option>
                <option value="<5w">5 万以内</option>
                <option value="5-15w">5 — 15 万</option>
                <option value="15-50w">15 — 50 万</option>
                <option value="50w+">50 万以上</option>
                <option value="unsure">还不确定，希望沟通后评估</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-ink-400 mb-3">
                项目简介 *
              </label>
              <textarea
                name="brief"
                required
                rows={6}
                placeholder="简单介绍下项目 — 产品 / 行业、希望达成的目标、期望的上线时间等"
                className="w-full bg-ink-950 border border-ink-700 px-4 py-3 text-ink-100 focus:border-accent outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-accent text-ink-950 px-8 py-4 text-sm tracking-[0.25em] uppercase font-medium hover:bg-accent-soft transition-colors"
            >
              发送需求 →
            </button>

            <p className="text-xs text-ink-400 leading-relaxed">
              点击发送后会通过你的邮件客户端把内容发到我们邮箱；若不方便，也可以直接发邮件至{" "}
              <Link
                href="mailto:3676898@qq.com"
                className="text-accent underline-offset-4 hover:underline"
              >
                3676898@qq.com
              </Link>
              。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.3em] uppercase text-ink-400 mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-ink-950 border border-ink-700 px-4 py-3 text-ink-100 focus:border-accent outline-none"
      />
    </div>
  );
}
