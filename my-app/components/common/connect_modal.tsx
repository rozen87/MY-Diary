import ModalOverlay from "./modal_overlay";

type Props = {
  onClose: () => void;
};

const CONTACTS = [
  {
    label: "Email",
    href: "mailto:wpfha07@yahoo.co.jp",
  },

  {
    label: "GitHub",
    href: "https://github.com/rozen87/MY-Diary",
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seoyeon-bang-6400b11a5/",
  },
];

export default function ConnectModal({ onClose }: Props) {
  return (
    <ModalOverlay onClose={onClose}>
      <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/20 p-10 backdrop-blur-2xl">
        {/* glow */}
        <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/20" />

        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-2xl font-black text-black/40 transition-all duration-300 hover:rotate-90 hover:text-black"
        >
          ×
        </button>

        {/* content */}
        <div className="relative z-10 flex flex-col gap-8">
          {/* badge */}
          <p className="text-sm font-black tracking-[0.3em] text-black/50">
            CONTACT
          </p>

          {/* title */}
          <h2 className="text-5xl leading-[0.95] font-black">
            Let’s Build
            <br />
            Together
          </h2>

          {/* description */}
          <p className="max-w-xl text-lg leading-8 text-black/70">
            Frontend Architecture, BFF Design, Testing Strategy, Technical
            Leadership, Enterprise Frontend Systems.
          </p>

          {/* contact links */}
          <div className="grid gap-4">
            {CONTACTS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/20 bg-black/80 px-6 py-5 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black"
              >
                <span className="text-lg font-bold">{item.label}</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}
