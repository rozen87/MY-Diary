type Props = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">
      <h2
        className="
          text-4xl
          font-black
          leading-tight
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-black/70
        "
      >
        {description}
      </p>
    </div>
  );
}