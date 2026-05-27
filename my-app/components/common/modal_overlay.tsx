type Props = {
  children: React.ReactNode;

  onClose: () => void;
};

export default function ModalOverlay({
  children,
  onClose,
}: Props) {
  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        p-6
        backdrop-blur-md
      "
    >
      {/* modal body */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-2xl
        "
      >
        {children}
      </div>
    </div>
  );
}