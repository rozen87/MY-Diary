
export type Language = "ja" | "en";

export  type ResumeItem = {
  year: string;

  title: {
    ja: string;
    en: string;
  };

  company: {
    ja: string;
    en: string;
  };

  summary: {
    ja: string;
    en: string;
  };

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