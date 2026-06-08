"use client";

import SkillBadge from "./skill_badge";
import { SkillItem } from "@/components/types/skill";

type Props = {
  skill: SkillItem;
};

export default function SkillCard({ skill }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[36px] border border-white/20 bg-white/40 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/55 hover:shadow-2xl">
      {/* glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* title */}
        <h3 className="text-2xl leading-tight font-semibold tracking-tight">
          {skill.title}
        </h3>

        {/* badge area */}
        <div className="mt-8 flex flex-wrap gap-3">
          {skill.skills.map((item, index) => (
            <SkillBadge
              key={`${item}-${index}`}
              label={item}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
