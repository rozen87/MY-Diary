"use client";

import { motion, AnimatePresence } from "framer-motion";

import GalleryItem from "./gallery_item";

type GalleryImage = {
  src: string;
  title: string;
  category?: string;
  size?: "small" | "large" | "wide";
};

type Props = {
  open: boolean;

  title: string;

  description?: string;

  images: GalleryImage[];

  onClose: () => void;
};

export default function GalleryOverlay({
  open,
  title,
  description,
  images,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={onClose}
          className="fixed inset-0 z-999 overflow-y-auto bg-black/70 backdrop-blur-xl"
        >
          {/* container */}
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 20,
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
            }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20"
          >
            {/* top */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-bold tracking-[0.3em] text-white/50">
                  GALLERY
                </p>

                <h2 className="text-5xl font-black text-white md:text-7xl">
                  {title}
                </h2>

                {description && (
                  <p className="max-w-3xl text-lg leading-8 text-white/70">
                    {description}
                  </p>
                )}
              </div>

              {/* close */}
              <button
                onClick={onClose}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                CLOSE
              </button>
            </div>

            {/* gallery grid */}
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
              {images.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                >
                  <GalleryItem
                    src={image.src}
                    title={image.title}
                    category={image.category}
                    size={image.size}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
