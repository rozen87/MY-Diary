"use client";

import { useMemo, useState } from "react";

import LayoutBox from "@/components/common/layout_box";

import { Language, MultiLanguageText } from "@/components/types/common";

import HobbyTag from "./hobby_tag";
import GalleryOverlay from "./gallery_overlay";

type HobbyTagItem = {
  id: string;

  label: MultiLanguageText;

  hasGallery?: boolean;

  description?: MultiLanguageText;
};

type GalleryImage = {
  src: string;

  title: string;

  category: string;

  size?: "small" | "large" | "wide";
};

type Props = {
  language: Language;

  data: {
    title: MultiLanguageText;

    subtitle: MultiLanguageText;

    description: MultiLanguageText;

    hobbies: HobbyTagItem[];

    images: GalleryImage[];
  };
};

export default function DailyLifeCard({ language, data }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const selectedHobby = useMemo(() => {
    return data.hobbies.find((hobby) => hobby.id === selectedTag);
  }, [data.hobbies, selectedTag]);

  const filteredImages = useMemo(() => {
    if (!selectedTag) return [];

    return data.images.filter(
      (image) => image.category.toLowerCase() === selectedTag.toLowerCase()
    );
  }, [data.images, selectedTag]);

  const handleTagClick = (hobby: HobbyTagItem) => {
    if (!hobby.hasGallery) return;

    setSelectedTag(hobby.id);
  };

  const handleClose = () => {
    setSelectedTag(null);
  };

  return (
    <>
      <LayoutBox className="flex flex-col gap-12 p-8 md:p-12">
        {/* header */}
        <div className="flex flex-col gap-5">
          <p className="text-sm font-bold tracking-[0.3em] text-black/50">
            {data.subtitle[language]}
          </p>

          <h3 className="text-2xl leading-tight font-black md:text-5xl">
            {data.title[language]}
          </h3>

          <p className="max-w-4xl text-lg leading-8 text-black/70">
            {data.description[language]}
          </p>
        </div>

        {/* hobby tags */}
        <div className="flex flex-wrap gap-4">
          {data.hobbies.map((hobby) => (
            <HobbyTag
              key={hobby.id}
              label={hobby.label[language]}
              active={selectedTag === hobby.id}
              hasGallery={hobby.hasGallery}
              onClick={() => handleTagClick(hobby)}
            />
          ))}
        </div>
      </LayoutBox>

      {/* gallery overlay */}
      <GalleryOverlay
        open={!!selectedTag}
        title={selectedHobby?.label[language] ?? ""}
        description={selectedHobby?.description?.[language]}
        images={filteredImages}
        onClose={handleClose}
      />
    </>
  );
}
