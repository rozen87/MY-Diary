import { Language } from "@/components/types/common";

type Props = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export default function LanguageToggle({ language, setLanguage }: Props) {
  return (
    <div className="flex gap-3 self-start lg:self-end">
      <button
        onClick={() => setLanguage("ja")}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
          language === "ja"
            ? "bg-black text-white shadow-lg"
            : "bg-white/60 text-black hover:bg-white"
        } `}
      >
        JP
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
          language === "en"
            ? "bg-black text-white shadow-lg"
            : "bg-white/60 text-black hover:bg-white"
        } `}
      >
        EN
      </button>
    </div>
  );
}
