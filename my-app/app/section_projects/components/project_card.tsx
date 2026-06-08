import { Language, MultiLanguageText } from "@/components/types/common";

type Props = {
  language: Language;

  project: {
    name: MultiLanguageText;
    role: MultiLanguageText;
    summary: MultiLanguageText;
    problem: MultiLanguageText;
    solution: MultiLanguageText;
    impact: MultiLanguageText;
    skills: string[];
  };
};

export default function ProjectCard({ language, project }: Props) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* header */}
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-black/50">
          {project.role[language]}
        </p>

        <h3 className="mt-2 text-3xl leading-tight font-black">
          {project.name[language]}
        </h3>
      </div>

      {/* summary */}
      <p className="mt-6 text-lg leading-8 text-black/70">
        {project.summary[language]}
      </p>

      {/* detail grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* problem */}
        <div>
          <p className="text-sm font-black tracking-[0.15em]">PROBLEM</p>

          <p className="mt-3 leading-7 text-black/70">
            {project.problem[language]}
          </p>
        </div>

        {/* solution */}
        <div>
          <p className="text-sm font-black tracking-[0.15em]">SOLUTION</p>

          <p className="mt-3 leading-7 text-black/70">
            {project.solution[language]}
          </p>
        </div>

        {/* impact */}
        <div>
          <p className="text-sm font-black tracking-[0.15em]">IMPACT</p>

          <p className="mt-3 leading-7 text-black/70">
            {project.impact[language]}
          </p>
        </div>
      </div>

      {/* skills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
