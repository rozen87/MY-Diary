import LayoutBox from "@/components/common/layout_box";

import { Language, MultiLanguageText } from "@/components/types/common";

type AboutMeData = {
  badge: MultiLanguageText;

  title: MultiLanguageText;

  description: MultiLanguageText;
};

type Props = {
  language: Language;

  data: AboutMeData;
};

const PERSONALITY_ITEMS = [
  "Curious",
  "Creative",
  "Positive",
  "Collaborative",
  "Thoughtful",
  "Detail Oriented",
];

export default function AboutMeCard({ language, data }: Props) {
  return (
    <LayoutBox className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/20 backdrop-blur-2xl">
      {/* glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10">
        {/* badge */}
        <p className="text-sm font-black tracking-[0.35em] text-black/50">
          {data.badge[language]}
        </p>

        {/* title */}
        <div className="flex flex-col gap-6">
          <h3 className="max-w-4xl text-2xl leading-tight font-black md:text-5xl">
            {data.title[language]}
          </h3>

          <p className="max-w-3xl text-lg leading-8 text-black/70">
            {data.description[language]}
          </p>

          <p className="max-w-3xl text-lg leading-8 text-black/70">
            {language === "ja"
              ? "技術だけではなく、人とのコミュニケーションやチームワークも大切にしています。"
              : "I value communication, empathy, and teamwork just as much as technology."}
          </p>
        </div>

        {/* personality tags */}
        <div className="flex flex-wrap gap-3">
          {PERSONALITY_ITEMS.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/20 bg-white/40 px-5 py-3 text-sm font-semibold text-black/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/60"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </LayoutBox>
  );
}
