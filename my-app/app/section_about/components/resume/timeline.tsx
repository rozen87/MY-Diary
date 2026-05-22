type Props = {
  year: string;
};

export default function Timeline({
  year,
}: Props) {
  return (
    <div className="relative hidden md:block">
      <div className="sticky top-24">
        <div className="flex items-start gap-4">
          {/* dot + line */}
          <div className="relative flex flex-col items-center">
            {/* dot */}
            <div
              className="
                z-10
                h-6
                w-6
                rounded-full
                border-4
                border-white
                bg-black
                shadow-lg
              "
            />

            {/* line */}
            <div
              className="
                mt-2
                h-[calc(100vh-120px)]
                w-0.5
                bg-black/20
              "
            />
          </div>

          {/* year */}
          <div className="pt-1">
            <p
              className="
                text-sm
                font-bold
                tracking-[0.2em]
                text-black/50
              "
            >
              {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}