import { MultiLanguageText } from "./common";

export type SkillItem = {
  title: string;
  color: string;
  skills: string[];
};

export type SkillCategory = {
  category: MultiLanguageText;

  description: MultiLanguageText;

  columns: 2 | 3;

  items: SkillItem[];
};