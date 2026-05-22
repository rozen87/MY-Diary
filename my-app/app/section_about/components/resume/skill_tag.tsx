type Props = {
  label: string;
};

export default function SkillTag({ label }: Props) {
  return (
    <span
      className="
        rounded-full
        bg-black
        text-white
        text-sm
        px-3
        py-1
      "
    >
      {label}
    </span>
  );
}