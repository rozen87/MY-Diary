import LayoutBox from "@/components/common/layout_box";

import {
  Language,
  MultiLanguageText,
} from "@/components/types/common";

type InterestsData = {
  badge: MultiLanguageText;
  title: MultiLanguageText;
  description: MultiLanguageText;
  items: string[];
};

type Props = {
  language: Language;
  data: InterestsData;
};

export default function InterestsCard({
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
          bottom-0
          right-0
          h-96
          w-96
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

        {/* title */}
        <div className="flex flex-col gap-6">
          <h3
            className="
              max-w-4xl
              text-2xl
              font-black
              leading-tight
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

        {/* interest cloud */}
        <div className="flex flex-wrap gap-4">
          {data.items.map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-white/20
                bg-black/80
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* emotional note */}
        <div
          className="
            rounded-[28px]
            border
            border-white/20
            bg-white/30
            p-6
            backdrop-blur-xl
          "
        >
          <p
            className="
              text-base
              leading-8
              text-black/70
            "
          >
            {language === "ja"
              ? "日常の小さな体験やインスピレーションが、新しいアイデアやより良いプロダクト作りに繋がると考えています。"
              : "I believe inspiration from everyday life helps create better ideas, thoughtful experiences, and meaningful products."}
          </p>
        </div>
      </div>
    </LayoutBox>
  );
}