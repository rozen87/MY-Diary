import { MultiLanguageText } from "./common";

export type ProjectCardItem = {
  name: MultiLanguageText;
  role: MultiLanguageText;
  summary: MultiLanguageText;
  problem: MultiLanguageText;
  solution: MultiLanguageText;
  impact: MultiLanguageText;
  skills: string[];
};

export type ProjectSectionItem = {
  title: MultiLanguageText;
  description: MultiLanguageText;
  projects: ProjectCardItem[];
};

export interface PageData {
  badge: { ja: string; en: string };
  title: { ja: string; en: string };
  description: { ja: string; en: string };
}

export const pageData: PageData = {
  badge: { ja: "プロジェクト", en: "PROJECTS" },
  title: { ja: "プロジェクト", en: "Projects" },
  description: {
    ja: "プロジェクトの説明",
    en: "Project description",
  },
};