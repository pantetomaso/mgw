import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const heroImg = "/assets/hero-sunrise.jpg";
const swimImg = "/assets/swim.jpg";

export const metadata: Metadata = {
  title: "Marseille Good Waves — Choisissez votre version",
  description: "Deux directions de redesign pour Marseille Good Waves.",
};

export default function Page() {
  const versions = [
    {
      to: "/v1",
      label: "Version 01",
      title: "Mediterranean Sunrise",
      desc: "Direction éditoriale, palette corail & mer profonde, ambiance moderne.",
      img: heroImg,
    },
    {
      to: "/v2",
      label: "Version 02",
      title: "Logo Original",
      desc: "Palette tirée du logo (orange chaud, bleu marine), typographie script.",
      img: swimImg,
    },
  ];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="mb-12 md:mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-primary mb-3">— Redesign</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight">
            Marseille Good Waves — deux directions.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Choisissez la version à explorer. Chaque proposition est un site complet.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {versions.map((v) => (
            <Link
              key={v.to}
              href={v.to}
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-glow transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-white/90">
                  {v.label}
                </div>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl">{v.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
