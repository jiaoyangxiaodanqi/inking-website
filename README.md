# 天津砚宸科技 · 官网

INKING ARCHITECTURAL.CG 公司官网，基于 Next.js 14 + React + Tailwind CSS。

## 本地运行

```bash
cd inking-website
npm install
npm run dev
```

然后浏览器打开 http://localhost:3000

## 项目结构

```
inking-website/
├── app/                  # Next.js App Router 页面
│   ├── layout.tsx        # 全局布局
│   ├── page.tsx          # 首页
│   ├── works/            # 作品页
│   ├── services/         # 服务页
│   ├── about/            # 关于页
│   └── contact/          # 联系页
├── components/           # 通用组件
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── VideoCard.tsx
│   └── VideoModal.tsx
├── lib/
│   └── works.ts          # 作品数据 — 后续添加作品改这里
├── public/
│   └── logo.png          # 公司 Logo
└── ...
```

## 如何添加 / 替换作品视频

编辑 `lib/works.ts`，在 `works` 数组里添加：

```ts
{
  id: "unique-id",                    // 唯一标识
  title: "项目名",
  client: "客户名",
  category: "product",                // product | ad | architecture | animation | multimedia
  year: 2025,
  cover: "封面图 URL",                // 推荐 16:9 比例
  description: "项目描述",
  platform: "bilibili",               // bilibili | youtube | vimeo
  videoId: "BV1xxxxx",                // B站填 BV 号；YouTube/Vimeo 填视频 ID
  bvid: "BV1xxxxx",                   // B站专用 BV 号（与 videoId 同步）
  featured: true,                     // 是否在首页"精选案例"显示
}
```

### 各平台视频 ID 获取
- **B 站**：视频 URL `https://www.bilibili.com/video/BV1xxxxxx`，BV 号即是 ID
- **YouTube**：URL `https://www.youtube.com/watch?v=ABCDEFG`，`v=` 后面就是 ID
- **Vimeo**：URL `https://vimeo.com/123456789`，结尾数字就是 ID

## 替换品牌信息

- **Logo**：替换 `public/logo.png`（保持透明 PNG，黑色版本即可，站内会自动反白）
- **公司名 / 联系方式**：搜索修改 `components/Footer.tsx` 和 `app/contact/page.tsx`
- **SEO 信息**：修改 `app/layout.tsx` 里的 `metadata`

## 部署

推荐部署到 [Vercel](https://vercel.com)（Next.js 官方平台，国内访问体验中等）或自建服务器。
若需要国内备案域名，可用阿里云 / 腾讯云的轻量服务器跑 `npm run build && npm start`。

## 后续可扩展

- 接入 CMS（Sanity / Strapi / Notion）让运营在线维护内容
- 添加博客 / 新闻栏目
- 加入多语言（i18n）
- 联系表单接入后端邮件服务（如 Resend）
