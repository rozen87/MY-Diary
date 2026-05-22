"use client";

import SkillBadge from "./skill_badge";
import { Language } from "@/components/types/common";

import { SkillItem } from "@/components/types/skill";

type Props = {
  language: Language;
  skill: SkillItem;
};

export default function SkillCard({ language, skill }: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/20
        bg-white/40
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:bg-white/55
        hover:shadow-2xl
      "
    >
      {/* glow effect */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-linear-to-br
          from-white/0
          to-white/20
        "
      />

      {/* content */}
      <div className="relative z-10">
        {/* title */}
        <h3
          className="
            text-3xl
            font-black
            tracking-tight
          "
        >
          {skill.name}
        </h3>

        {/* summary */}
        <p
          className="
            mt-5
            leading-7
            text-black/70
          "
        >
          {skill.summary[language]}
        </p>

        {/* groups */}
        <div className="mt-10 flex flex-col gap-8">
          {skill.groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              {/* group title */}
              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-black/45
                "
              >
                {group.label}
              </p>

              {/* badge area */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
