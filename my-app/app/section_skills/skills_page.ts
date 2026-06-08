import { MultiLanguageText } from "@/components/types/common";

export interface SkillsPageData {
  badge: MultiLanguageText;
  title: MultiLanguageText;
  description: MultiLanguageText;
}

export const pageData: SkillsPageData = {
  badge: {
    ja: "TECH STACK",
    en: "TECH STACK",
  },

  title: {
    ja: "スキル & アーキテクチャ",
    en: "Skills & Architecture",
  },

  description: {
    ja: "単純な技術スタックではなく、Frontend Architecture、BFF設計、Testing Strategy、および大規模エンタープライズ開発において実際に活用した技術エコシステムを紹介します。",
    en: "More than just a list of technologies — this section introduces the technical ecosystems I used in real enterprise environments, including frontend architecture, BFF design, testing strategies, and scalable system development.",
  },
};
