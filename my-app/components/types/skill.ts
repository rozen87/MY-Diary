import { MultiLanguageText } from "./common";

export type SkillGroup = {
  label: string;
  color: string;
  items: string[];
};

export type SkillItem = {
  name: string;
  summary: MultiLanguageText;
  groups: SkillGroup[];
};

export type SkillCategory = {
  category: MultiLanguageText;
  description: MultiLanguageText;
  skills: SkillItem[];
};