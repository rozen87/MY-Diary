import LanguageToggle from "./language_toggle";
import StatsCard from "./stats_card";

import { Language } from "@/components/types/common";

type Props = {
  language: Language;
  setLanguage: (
    language: Language
  ) => void;
};

export default function HeroSection({
  language,
  setLanguage,
}: Props) {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* LEFT */}
        <div className="max-w-3xl">
          <p
            className="
              mb-4
              text-sm
              font-bold
              tracking-[0.3em]
              text-black/50
            "
          >
            FRONTEND ARCHITECT / TECH LEAD
          </p>

          <h1
            className="
              text-5xl
              font-black
              leading-[0.95]
              md:text-7xl
            "
          >
            SENIOR
            <br />
            FRONTEND
            <br />
            ENGINEER
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-black/70
            "
          >
            Frontend Architecture / BFF Design /
            Technical Leadership / Testing Strategy /
            Reusable Component Systems
          </p>
        </div>

        {/* RIGHT */}
        <LanguageToggle
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      {/* STATS */}
      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatsCard
          title="11+"
          description="Years Experience"
        />

        <StatsCard
          title="20+"
          description="Enterprise Projects"
        />

        <StatsCard title="Frontend Architecture" />

        <StatsCard title="BFF Design / Tech Lead" />
      </div>
    </section>
  );
}