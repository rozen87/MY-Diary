"use client";

import { useState } from "react";

import connectData from "./connect.json";

import HeroCard from "./components/hero_card";
import AboutMeCard from "./components/about_me_card";
import InterestsCard from "./components/interests_card";
import ContactCard from "./components/contact_cards";
import DailyLifeCard from "./components/daily_life_card";

import { DailyLifeData } from "@/components/types/connect";
import { Language } from "@/components/types/common";

export default function Page() {
  const [language, setLanguage] = useState<Language>("ja");

  const dailyLifeData = connectData.dailyLife as DailyLifeData;

  return (
    <main
      className="
        min-h-screen
        px-6
        pb-24
        pt-32
      "
      style={{
        background:
          "linear-gradient(135deg, #b61a46 0%, #eb6222 40%, #f0c83f 100%)",
      }}
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          gap-10
        "
      >
        {/* language toggle */}
        <div className="flex justify-end gap-3">
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

        {/* HERO */}
        <HeroCard language={language} data={connectData.hero} />

        {/* ABOUT ME */}
        <AboutMeCard language={language} data={connectData.aboutMe} />

        {/* DAILY LIFE */}
        <DailyLifeCard language={language} data={dailyLifeData} />

        {/* INTERESTS */}
        <InterestsCard language={language} data={connectData.interests} />

        {/* CONTACT */}
        <ContactCard language={language} />
      </div>
    </main>
  );
}
