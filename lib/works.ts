export type VideoPlatform = "bilibili" | "youtube" | "vimeo";

export type Work = {
  id: string;
  title: string;
  client?: string;
  category: "product" | "ad" | "architecture" | "animation" | "multimedia";
  year: number;
  cover: string;
  description: string;
  platform: VideoPlatform;
  videoId: string;
  featured?: boolean;
  bvid?: string;
};

export const categoryLabels: Record<Work["category"], string> = {
  product: "产品宣传片",
  ad: "广告视频",
  architecture: "建筑动画",
  animation: "三维动画",
  multimedia: "多媒体",
};

export const works: Work[] = [
  {
    id: "demo-product-01",
    title: "智能家电品牌发布短片",
    client: "示例客户 A",
    category: "product",
    year: 2025,
    cover:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&q=80&auto=format&fit=crop",
    description:
      "围绕产品工业设计语言，以极简光影与微距镜头呈现细节质感，6 秒锁定记忆点。",
    platform: "bilibili",
    videoId: "BV1GJ411x7h7",
    bvid: "BV1GJ411x7h7",
    featured: true,
  },
  {
    id: "demo-ad-01",
    title: "城市商业综合体 TVC",
    client: "示例客户 B",
    category: "ad",
    year: 2025,
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop",
    description:
      "以人物视角串联空间叙事，结合现场实拍与三维合成，呈现商业体的日夜呼吸感。",
    platform: "bilibili",
    videoId: "BV1GJ411x7h7",
    bvid: "BV1GJ411x7h7",
    featured: true,
  },
  {
    id: "demo-arch-01",
    title: "高端住宅项目建筑动画",
    client: "示例客户 C",
    category: "architecture",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop",
    description:
      "从城市鸟瞰一路下沉至庭院入户，运用电影级运镜与材质表现项目调性。",
    platform: "bilibili",
    videoId: "BV1GJ411x7h7",
    bvid: "BV1GJ411x7h7",
    featured: true,
  },
  {
    id: "demo-anim-01",
    title: "品牌 IP 三维动画短片",
    client: "示例客户 D",
    category: "animation",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&q=80&auto=format&fit=crop",
    description:
      "原创角色与世界观设计，结合手绘风格贴图与剧情节奏，强化品牌人格化记忆。",
    platform: "bilibili",
    videoId: "BV1GJ411x7h7",
    bvid: "BV1GJ411x7h7",
  },
  {
    id: "demo-product-02",
    title: "新能源汽车产品片",
    client: "示例客户 E",
    category: "product",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop",
    description:
      "在虚拟工作室中完成全 CG 制作，控制光影与材质细节，省去外景受限的成本。",
    platform: "bilibili",
    videoId: "BV1GJ411x7h7",
    bvid: "BV1GJ411x7h7",
  },
  {
    id: "demo-multi-01",
    title: "线下展厅多媒体内容",
    client: "示例客户 F",
    category: "multimedia",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80&auto=format&fit=crop",
    description:
      "异形屏幕方案、互动触控、沉浸式投影内容定制，从内容到落地的一体化交付。",
    platform: "bilibili",
    videoId: "BV1GJ411x7h7",
    bvid: "BV1GJ411x7h7",
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
  }
}
