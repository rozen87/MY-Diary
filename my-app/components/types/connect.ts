import {
  MultiLanguageText,
} from "./common";

export type GallerySize =
  | "small"
  | "large"
  | "wide";

export type GalleryImage = {
  src: string;
  title: string;
  category: string;
  size?: GallerySize;
};

export type HobbyTagItem = {
  id: string;
  label: MultiLanguageText;
  hasGallery?: boolean;
  description?: MultiLanguageText;
};

export type DailyLifeData = {
  title: MultiLanguageText;
  subtitle: MultiLanguageText;
  description: MultiLanguageText;
  hobbies: HobbyTagItem[];
  images: GalleryImage[];
};