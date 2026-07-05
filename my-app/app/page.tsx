import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-green-400 to-orange-500 pt-20">
      {" "}
      {/* 텍스트 컨테이너에 약간의 투명도와 블러 효과를 주어 배경과 자연스럽게 섞이게 합니다 */}
      <div className="group relative mt-20">
        {/* Glow 효과를 위한 가상 배경 요소 */}
        <div className="absolute -inset-4 rounded-xl bg-white/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        <a
          href="/section_about"
          className="relative text-8xl font-black tracking-tighter text-white uppercase transition-transform duration-300 ease-out hover:scale-105"
        >
          welcome my portfolio
          {/* 하단에 은은한 라인 애니메이션 추가 */}
          <span className="absolute -bottom-2 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </main>
  );
}
