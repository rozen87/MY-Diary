type Props = {
  title: string;
  description?: string;
  titleClassName?: string;
};

export default function StatsCard({
  title,
  description,
  titleClassName,
}: Props) {
  return (
    <div className="rounded-[28px] border border-white/30 bg-white/40 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <p className="text-3xl font-black wrap-break-word whitespace-normal">
        <span className={titleClassName}>{title}</span>
      </p>

      {description && (
        <p className="mt-3 text-sm font-semibold text-black/60">
          {description}
        </p>
      )}
    </div>
  );
}
