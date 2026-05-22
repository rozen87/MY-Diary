import { MultiLanguageText } from "@/components/types/common";

export interface PageData {
  badge: MultiLanguageText;
  title: MultiLanguageText;
  description: MultiLanguageText;
}

export const pageData: PageData = {
  badge: {
    ja: "プロジェクト経験",
    en: "PROJECT EXPERIENCE",
  },

  title: {
    ja: "プロジェクト",
    en: "PROJECTS",
  },

  description: {
    ja: "日本で携わったプロジェクト経験をベースに、Frontend Architecture、BFF設計、Testing Strategy、UI/UX設計、および技術的リーダーシップについて詳細に紹介します。",
    en: "A detailed overview of how I worked on enterprise-level systems in Japan, including frontend architecture, BFF design, testing strategies, UI/UX design, and technical leadership.",
  },
};