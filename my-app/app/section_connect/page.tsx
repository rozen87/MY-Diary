"use client";

// import { useState } from "react";
import ConfettiButton from "@/components/common/confetti_button";

export default function Page() {

  return (
    <main
      className="
        min-h-screen
        px-6
        pt-32
        pb-20
      "
      style={{
        background:
          "linear-gradient(135deg, #b00d0d 0%, #f0c83f 100%)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <h1 className="text-5xl font-black">Connect</h1>

        <section className="flex flex-col gap-16">
          <ConfettiButton>
ㅇㅇㅇㅇ
          </ConfettiButton>
        </section>
      </div>
      </main>
  );
}
