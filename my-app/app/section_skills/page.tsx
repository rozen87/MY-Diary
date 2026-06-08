"use client";

import { useState } from "react";
import SkillCategory from "./components/skill_category";
import rawSkillsData from "./skills.json";
import { pageData } from "./skills_page";
import { Language } from "@/components/types/common";
import { SkillCategory as SkillCategoryType } from "@/components/types/skill";
import ScrollToTopButton from "@/components/ui/ScrollTop";


const rawSkillsDataUnknown = rawSkillsData as unknown;
const skillsData: SkillCategoryType[] =
  Array.isArray(rawSkillsDataUnknown)
    ? (rawSkillsDataUnknown as SkillCategoryType[])
    : typeof rawSkillsDataUnknown === "object" &&
      rawSkillsDataUnknown !== null &&
      "categories" in rawSkillsDataUnknown
    ? ((rawSkillsDataUnknown as { categories: SkillCategoryType[] }).categories)
    : ([rawSkillsDataUnknown as SkillCategoryType]);

export default function Page() {
  const [language, setLanguage] = useState<Language>("ja");

  return (
    <main
      className="
        min-h-screen
        px-6
        pt-32
        pb-20
      "
      style={{
        background: "linear-gradient(135deg, #2edf9b 0%, #1044ff 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-24">
        {/* HERO */}
        <section className="flex flex-col gap-8">
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* LEFT */}
            <div className="max-w-4xl">
              <p
                className="
                  mb-4
                  text-sm
                  font-bold
                  tracking-[0.3em]
                  text-black/50
                "
              >
                {pageData.badge[language]}
              </p>

              <h1
                className="
                  text-5xl
                  font-black
                  leading-[0.95]
                  md:text-7xl
                "
              >
                {pageData.title[language]}
              </h1>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-black/70
                "
              >
                {pageData.description[language]}
              </p>
            </div>

            {/* LANGUAGE TOGGLE */}
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage("ja")}
                className={`
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    language === "ja"
                      ? "bg-black text-white shadow-lg"
                      : "bg-white/60 text-black hover:bg-white"
                  }
                `}
              >
                JP
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    language === "en"
                      ? "bg-black text-white shadow-lg"
                      : "bg-white/60 text-black hover:bg-white"
                  }
                `}
              >
                EN
              </button>
            </div>
          </div>
        </section>

        {/* SKILL CATEGORY */}
        <section className="flex flex-col gap-24">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.category[language]}
              language={language}
              category={category.category}
              description={category.description}
              items={category.items}
              columns={category.columns}
            />
          ))}
        </section>
      </div>
      <ScrollToTopButton />
    </main>
  );
}
