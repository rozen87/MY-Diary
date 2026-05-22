type Props = {
  label: string;
  color: string;
};

export default function SkillBadge({
  label,
  color,
}: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        px-4
        py-2
        text-sm
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:scale-105
      "
      style={{
        backgroundColor: color,
      }}
    >
      {label}
    </span>
  );
}
