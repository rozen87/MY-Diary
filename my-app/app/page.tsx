import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-brand-lime to-brand-orange">
      {/* 텍스트 컨테이너에 약간의 투명도와 블러 효과를 주어 배경과 자연스럽게 섞이게 합니다 */}
      <div className="group relative">
        {/* Glow 효과를 위한 가상 배경 요소 */}
        <div className="absolute -inset-4 rounded-xl bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <Link
          href="/section_about"
          className="relative text-8xl font-black text-white tracking-tighter uppercase transition-transform duration-300 ease-out hover:scale-105"
        >
          welcome my portfolio
          {/* 하단에 은은한 라인 애니메이션 추가 */}
          <span className="absolute -bottom-2 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </main>
  );
}
