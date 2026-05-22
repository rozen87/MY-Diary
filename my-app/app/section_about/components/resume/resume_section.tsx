import LayoutBox from "@/components/common/layout_box";
import SkillTag from "./skill_tag";
import { Props } from "@/components/types/common";
import Timeline from "./timeline";


export default function ResumeSection({ item, language }: Props) {
  return (
    <section className="relative grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
      {/* LEFT TIMELINE */}
      <Timeline year={item.year} />

      {/* MOBILE YEAR */}
      <div className="flex items-center gap-3 md:hidden">
        <div
          className="
            h-4
            w-4
            rounded-full
            bg-black
          "
        />

        <p className="text-sm font-bold text-black/60">{item.year}</p>
      </div>

      {/* CONTENT */}
      <LayoutBox
        className="
          flex
          flex-col
          gap-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        {/* MOBILE TIMELINE */}
        <div className="mb-2 flex items-center gap-3 md:hidden">
          <div
            className="
      h-4
      w-4
      rounded-full
      border-2
      border-white
      bg-black
    "
          />

          <p
            className="
              text-xs
              font-bold
              tracking-[0.2em]
              text-black/50
            "
          >
            {item.year}
          </p>
        </div>

        {/* title */}
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-3xl font-black leading-tight">
              {item.title[language]}
            </h2>

            <p className="mt-2 text-lg text-black/60">
              {item.company[language]}
            </p>
          </div>
        </div>

        {/* summary */}
        <p className="text-lg leading-8 text-gray-700">
          {item.summary[language]}
        </p>

        {/* highlights */}
        <div className="flex flex-col gap-4">
          {item.highlights[language].map((highlight) => (
            <div key={highlight} className="flex items-start gap-3">
              <div
                className="
                    mt-3
                    h-2
                    w-2
                    rounded-full
                    bg-black
                    shrink-0
                  "
              />

              <p className="leading-7 text-gray-700">{highlight}</p>
            </div>
          ))}
        </div>

        {/* skills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.skills.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>
      </LayoutBox>
    </section>
  );
}
