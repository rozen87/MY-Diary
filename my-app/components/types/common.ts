export type Language = "ja" | "en";

export type MultiLanguageText = {
  ja: string;
  en: string;
};

export type ResumeItem = {
  year: string;

  title: MultiLanguageText;
  company: MultiLanguageText;
  summary: MultiLanguageText;

  highlights: {
    ja: string[];
    en: string[];
  };

  skills: string[];
};

export type Props = {
  item: ResumeItem;
  language: Language;
};

