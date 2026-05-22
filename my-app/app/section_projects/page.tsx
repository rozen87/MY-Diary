"use client";

import { useState } from "react";

import ProjectSection from "./components/project_section";
import rawProjectData from "./project.json";
import { pageData } from "./project_page";
import { Language } from "@/components/types/common";
import { ProjectSectionItem } from "@/components/types/project";

const projectData =
  rawProjectData as ProjectSectionItem[];



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
        background: "linear-gradient(135deg, #a2e353 0%, #3fe3a7 100%)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        {/* HERO */}
        <section className="flex flex-col gap-8">
          <div className="flex items-start justify-between gap-6">
            {/* LEFT */}
            <div>
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

          <p
            className="
              max-w-3xl
              text-lg
              leading-8
              text-black/70
            "
          >
            {language === "ja"
              ? pageData.description.ja
              : pageData.description.en}
          </p>
        </section>

        {/* PROJECT SECTIONS */}
        <section className="flex flex-col gap-24">
          {projectData.map((section) => {
            if (!section.title) return null;

            return (
              <ProjectSection
                key={section.title.en}
                language={language}
                title={section.title}
                description={section.description}
                projects={section.projects}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
