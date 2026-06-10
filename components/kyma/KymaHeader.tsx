import Image from "next/image";
import Link from "next/link";

export default function KymaHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1c1640]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/kyma" className="flex items-center gap-2" aria-label="KYMA — accueil">
          <Image
            src="/assets/kyma/mono.png"
            alt="KYMA"
            width={44}
            height={29}
            className="h-7 w-auto"
            priority
          />
          <span className="font-rounded text-xl font-semibold tracking-tight text-[#f0e7c7]">
            kyma
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/kyma"
            className="hidden text-sm font-medium text-[#f0e7c7]/80 transition hover:text-[#f0e7c7] sm:block"
          >
            Présentation
          </Link>
          <Link
            href="/kyma/billetterie"
            className="rounded-full bg-[#ec5a44] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ec5a44]/30 transition hover:brightness-110"
          >
            Billetterie
          </Link>
        </div>
      </nav>
    </header>
  );
}
