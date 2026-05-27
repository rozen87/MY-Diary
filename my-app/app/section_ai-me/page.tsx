"use client";

// import { useState } from "react";

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
          "linear-gradient(135deg, #3e28e3 0%, #c42e9c 100%)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
          AI-Me
          </h1>

        <section className="flex flex-col gap-16 margin-auto items-center text-white/80">
          comming soon...<br />
          工事中。。。<br />
          아직 준비중입니다...<br />
        </section>
      </div>
    </main>
  );
}
