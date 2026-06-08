"use client";

import { useState } from "react";

import LayoutBox from "@/components/common/layout_box";

import ConfettiButton from "@/components/common/confetti_button";

import ModalOverlay from "@/components/common/modal_overlay";

import {
  Language,
} from "@/components/types/common";

type Props = {
  language: Language;
};

export default function ContactCard({
  language,
}: Props) {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <>
      <LayoutBox
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-10
          py-20
          text-center
        "
      >
        <h3
          className="
            text-5xl
            font-black
            leading-tight
            md:text-7xl
          "
        >
          {language === "ja"
            ? "一緒に素敵な\nプロダクトを作りましょう"
            : "Let’s Build\nSomething Great"}
        </h3>

        <p
          className="
            max-w-2xl
            text-lg
            leading-8
            text-black/70
          "
        >
          {language === "ja"
            ? "お気軽にご連絡ください。"
            : "Feel free to reach out anytime."}
        </p>

        <div className="flex justify-center pt-6">
          <ConfettiButton
            onClick={() => {
              setTimeout(() => {
                setIsOpen(true);
              }, 400);
            }}
          >
            {language === "ja"
              ? "お気軽にご連絡ください"
              : "Let’s Connect"}
          </ConfettiButton>
        </div>
      </LayoutBox>

      {/* MODAL */}
      {isOpen && (
        <ModalOverlay
          onClose={() =>
            setIsOpen(false)
          }
        >
          <div
            className="
              flex
              flex-col
              gap-6
              text-center
            "
          >
            <h3 className="text-3xl font-black">
              📩 Contact
            </h3>

            <p className="text-black/70">
              wpfha07@yahoo.co.jp
            </p>

            <a
              href="mailto:wpfha07@yahoo.co.jp"
              className="
                rounded-full
                bg-black
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                hover:scale-105
              "
            >
              Send Email
            </a>
          </div>
        </ModalOverlay>
      )}
    </>
  );
}