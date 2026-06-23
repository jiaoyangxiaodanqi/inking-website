import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "天津砚宸科技 INKING ARCHITECTURAL.CG | 商业视频与视觉创作",
  description:
    "天津砚宸科技有限公司，专注产品宣传片、广告视频、建筑动画与多媒体视觉创作。以光影叙事，让品牌被记住。",
  keywords: [
    "天津砚宸科技",
    "INKING",
    "产品宣传片",
    "广告视频",
    "建筑动画",
    "建筑效果图",
    "三维动画",
    "多媒体制作",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-ink-950 text-ink-100 font-sans antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
