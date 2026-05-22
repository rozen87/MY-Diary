import LayoutBox from "@/components/common/layout_box";
import SectionHeader from "./section_header";
import ProjectCard from "./project_card";
import { Language, MultiLanguageText } from "@/components/types/common";

type ProjectItem = {
  name: MultiLanguageText;
  role: MultiLanguageText;
  summary: MultiLanguageText;
  problem: MultiLanguageText;
  solution: MultiLanguageText;
  impact: MultiLanguageText;
  skills: string[];
};
type Props = {
  language: Language;
  title: MultiLanguageText;
  description: MultiLanguageText;
  projects: ProjectItem[];
};

export default function ProjectSection({
  language,
  title,
  description,
  projects,
}: Props) {
  return (
    <section className="flex flex-col gap-10">
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <LayoutBox
        className="
          flex
          flex-col
          gap-6
          rounded-[32px]
          border
          border-white/30
          bg-white/40
          backdrop-blur-xl
        "
      >
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.name.en}
              language={language}
              project={project}
            />
          ))}
        </div>
      </LayoutBox>
    </section>
  );
}
