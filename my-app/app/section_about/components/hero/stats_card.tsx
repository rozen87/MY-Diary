type Props = {
  title: string;
  description?: string;
};

export default function StatsCard({
  title,
  description,
}: Props) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-white/30
        bg-white/40
        p-6
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <p className="text-5xl font-black">
        {title}
      </p>

      {description && (
        <p className="mt-3 text-sm font-semibold text-black/60">
          {description}
        </p>
      )}
    </div>
  );
}