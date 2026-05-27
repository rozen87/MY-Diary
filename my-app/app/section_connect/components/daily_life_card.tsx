"use client";

import GalleryItem from "./gallery_item";

import LayoutBox from "@/components/common/layout_box";

import {
  Language,
  MultiLanguageText,
} from "@/components/types/common";

type GalleryImage = {
  src: string;
  title: string;
  category?: string;
  size?: "small" | "large" | "wide";
};

type Props = {
  language: Language;

  data: {
    title: MultiLanguageText;
    description: MultiLanguageText;

    tags: MultiLanguageText[];

    images: GalleryImage[];
  };
};

export default function DailyLifeCard({
  language,
  data,
}: Props) {
  return (
    <LayoutBox
      className="
        flex
        flex-col
        gap-12
        p-8
        md:p-12
      "
    >
      {/* header */}
      <div className="flex flex-col gap-5">
        <p
          className="
            text-sm
            font-bold
            tracking-[0.25em]
            text-black/50
          "
        >
          DAILY LIFE
        </p>

        <h2
          className="
            text-4xl
            font-black
            leading-tight
            md:text-6xl
          "
        >
          {data.title[language]}
        </h2>

        <p
          className="
            max-w-3xl
            text-lg
            leading-8
            text-black/70
          "
        >
          {data.description[language]}
        </p>
      </div>

      {/* gallery */}
      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-3
          auto-rows-[220px]
        "
      >
        {data.images.map((image) => (
          <GalleryItem
            key={`${image.src}-${image.title}`}
            src={image.src}
            title={image.title}
            category={image.category}
            size={image.size}
          />
        ))}
      </div>

      {/* personality tags */}
      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >
        {data.tags.map((tag) => (
          <div
            key={tag.en}
            className="
              rounded-full
              border
              border-white/30
              bg-white/20
              px-5
              py-2
              text-sm
              font-semibold
              backdrop-blur-xl
            "
          >
            {tag[language]}
          </div>
        ))}
      </div>
    </LayoutBox>
  );
}