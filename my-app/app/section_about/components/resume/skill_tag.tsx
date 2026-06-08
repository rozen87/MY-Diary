type Props = {
  label: string;
};

export default function SkillTag({ label }: Props) {
  return (
    <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
      {label}
    </span>
  );
}
