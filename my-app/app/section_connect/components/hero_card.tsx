import LayoutBox from "@/components/common/layout_box";

import {
  Language,
  MultiLanguageText,
} from "@/components/types/common";

type HeroData = {
  badge: MultiLanguageText;
  title: MultiLanguageText;
  description: MultiLanguageText;
};

type Props = {
  language: Language;

  data: HeroData;
};

export default function HeroCard({
  language,
  data,
}: Props) {
  return (
    <LayoutBox
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/20
        bg-white/20
        backdrop-blur-2xl
      "
    >
      {/* background glow */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-80
          w-80
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div className="relative z-10 flex flex-col gap-10">
        {/* badge */}
        <p
          className="
            text-sm
            font-black
            tracking-[0.35em]
            text-black/50
          "
        >
          {data.badge[language]}
        </p>

        {/* hero text */}
        <div className="flex flex-col gap-6">
          <h3
            className="
              max-w-5xl
              text-2xl
              font-black
              leading-[0.9]
              md:text-5xl
            "
          >
            {data.title[language]}
          </h3>

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

        {/* small tags */}
        <div className="flex flex-wrap gap-3">
          {[
            "Frontend",
            "Creative",
            "Communication",
            "UI / UX",
            "Architecture",
            "Collaboration",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-white/20
                bg-black/80
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                backdrop-blur-xl
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </LayoutBox>
  );
}