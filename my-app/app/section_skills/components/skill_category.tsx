import LayoutBox from "@/components/common/layout_box";
import type { SkillCategory } from "@/components/types/skill";
import { Language } from "@/components/types/common";
import SkillCard from "./skill_card";

type SkillCategoryProps = SkillCategory & {
  language: Language;
};

export default function SkillCategory({
  category,
  description,
  items,
  language,
}: SkillCategoryProps) {
  return (
    <section className="flex flex-col gap-10">
      {/* header */}
      <div className="max-w-3xl">
        <p
          className="
            text-sm
            font-bold
            tracking-[0.25em]
            text-black/50
          "
        >
          SKILL CATEGORY
        </p>

        <h2
          className="
            mt-4
            text-4xl
            font-black
            leading-tight
            md:text-5xl
          "
        >
          {category[language]}
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-black/70
          "
        >
          {description[language]}
        </p>
      </div>

      {/* card area */}
      <LayoutBox
        className="
          rounded-[40px]
          border
          border-white/20
          bg-white/30
          backdrop-blur-2xl
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
        {items.map((item, index) => (
          <SkillCard
            key={`${item.title}-${index}`}
            skill={item}
            language={language}
          />
        ))}
        </div>
      </LayoutBox>
    </section>
  );
}
