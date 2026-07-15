export type VideoPlatform = "bilibili" | "youtube" | "vimeo" | "mp4";

export type Work = {
  id: string;
  title: string;
  client?: string;
  category: "product" | "ad" | "architecture" | "animation" | "multimedia";
  year: number;
  cover?: string;
  description: string;
  platform: VideoPlatform;
  videoId: string;
  featured?: boolean;
  bvid?: string;
  videoUrl?: string;
};

export const categoryLabels: Record<Work["category"], string> = {
  product: "产品广告片",
  ad: "视频短片",
  architecture: "建筑动画",
  animation: "效果图",
  multimedia: "多媒体",
};

export const works: Work[] = [
  {
    id: "product-dianjieshui",
    title: "电解质水",
    client: "农夫山泉",
    category: "product",
    year: 2026,
    description: "农夫山泉电解质水广告视频。",
    platform: "mp4",
    videoId: "dianjieshui-001",
    videoUrl:
      "https://1446610069.vod-qcloud.com/5bfaba8fvodtranscq1446610069/9551bd615001834808686820414/adp.10.m3u8",
    featured: true,
  },
  {
    id: "ad-xiyouji",
    title: "西游记片段",
    client: "短剧 A",
    category: "ad",
    year: 2025,
    cover: "/work-dp-x16-9.png",
    description: "按西游记原著，运用 AI 技术，重新呈现故事。",
    platform: "mp4",
    videoId: "xiyouji-001",
    videoUrl:
      "https://1446610069.vod-qcloud.com/5bfaba8fvodtranscq1446610069/e9c2e4095001834808653842874/adp.10.m3u8",
    featured: true,
  },
  {
    id: "product-mudanziyou",
    title: "牡丹籽油",
    client: "菏泽尧舜牡丹生物科技有限公司",
    category: "product",
    year: 2026,
    description: "牡丹籽油广告视频。",
    platform: "mp4",
    videoId: "mudanziyou-001",
    videoUrl:
      "https://1446610069.vod-qcloud.com/5bfaba8fvodtranscq1446610069/cfcad28a5001834808687047952/adp.10.m3u8",
  },
  {
    id: "product-shuangfushui",
    title: "爽肤水",
    client: "菏泽尧舜牡丹生物科技有限公司",
    category: "product",
    year: 2026,
    description: "爽肤水广告视频。",
    platform: "mp4",
    videoId: "shuangfushui-001",
    videoUrl:
      "https://1446610069.vod-qcloud.com/5bfaba8fvodtranscq1446610069/db6391505001834808687539664/adp.10.m3u8",
  },
  {
    id: "architecture-001",
    title: "建筑动画作品",
    category: "architecture",
    year: 2026,
    description: "建筑漫游动画作品。",
    platform: "mp4",
    videoId: "architecture-001",
    videoUrl:
      "https://1446610069.vod-qcloud.com/5bfaba8fvodtranscq1446610069/22cd69315001834810520324176/adp.10.m3u8",
  },
  {
    id: "multimedia-001",
    title: "多媒体作品",
    category: "multimedia",
    year: 2026,
    description: "多媒体展示内容。",
    platform: "mp4",
    videoId: "multimedia-001",
    videoUrl:
      "https://1446610069.vod-qcloud.com/5bfaba8fvodtranscq1446610069/410680f25001834811921112365/adp.10.m3u8",
  },
];

export function getEmbedUrl(work: Work): string {
  switch (work.platform) {
    case "bilibili":
      return `https://player.bilibili.com/player.html?bvid=${work.bvid ?? work.videoId}&page=1&autoplay=1&high_quality=1&danmaku=0`;
    case "youtube":
      return `https://www.youtube.com/embed/${work.videoId}?autoplay=1&rel=0`;
    case "vimeo":
      return `https://player.vimeo.com/video/${work.videoId}?autoplay=1`;
    case "mp4":
      return work.videoUrl ?? work.videoId;
  }
}
