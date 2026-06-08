"use client";

import { useState } from "react";

import resumeData from "./resume.json";
import ScrollToTopButton from "@/components/ui/ScrollTop";
import HeroSection from "./components/hero/hero_section";
import ResumeSection from "./components/resume/resume_section";

import { Language } from "@/components/types/common";

export default function Page() {
  const [language, setLanguage] =
    useState<Language>("ja");

  return (
    <main
      className="
        min-h-screen
        px-6
        pt-32
        pb-20
      "
      style={{
        background:
          "linear-gradient(135deg, #f2c83f 0%, #a0e452 100%)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <HeroSection
          language={language}
          setLanguage={setLanguage}
        />

        <section className="flex flex-col gap-16">
          {resumeData.map((item) => (
            <ResumeSection
              key={item.year}
              item={item}
              language={language}
            />
          ))}
        </section>
      <ScrollToTopButton />
      </div>
    </main>
  );
}