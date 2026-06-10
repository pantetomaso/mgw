import Image from "next/image";
import Link from "next/link";
import KymaHeader from "@/components/kyma/KymaHeader";
import KymaFooter from "@/components/kyma/KymaFooter";

const stats = [
  { value: "+650 000", label: "participants Hyrox dans le monde en 2025" },
  { value: "+46 000", label: "participants Hyrox en France en 2025" },
  { value: "+100 %", label: "croissance annuelle du secteur" },
];

const adn = [
  {
    title: "Dualité",
    text: "Le seul événement de fitness qui combine course à pied, natation en eau libre et ateliers fonctionnels, en plein air, face à la Méditerranée. Pas de salle. Pas de tapis roulant. Pas de murs.",
  },
  {
    title: "Équipe",
    text: "KYMA se court en binôme, du départ à l'arrivée. On souffre ensemble, on gère ensemble, on finit ensemble. Dans un marché dominé par la performance individuelle, KYMA choisit le collectif.",
  },
];

const sessions = [
  {
    name: "Session terrestre",
    metric: "8 km",
    text: "8 boucles successives combinant chacune 1 000 m de course à pied et 1 atelier fonctionnel. 8 km cumulés, 8 stations validées. Départs par vagues de 10 binômes toutes les 30 minutes.",
  },
  {
    name: "Session aquatique",
    metric: "1,6 km",
    text: "8 boucles de 200 m de natation en eau libre, chacune suivie d'un atelier fonctionnel, dans le bassin abrité de la Marina Olympique.",
  },
  {
    name: "Session nocturne",
    metric: "Samedi soir",
    text: "Une session terrestre à la Marina illuminée, au coucher du soleil sur la Méditerranée. Un moment de visibilité fort, qui attire compétiteurs, supporters et amateurs d'ambiance.",
  },
];

const ateliers = [
  "SkiErg",
  "Kettlebell",
  "Rameurs",
  "Sandbag Lunges",
  "BikeErg",
  "Burpees Box Jump",
  "EchoBike",
  "Wallball",
];

const calendar = [
  { date: "15 juin", title: "Lancement de la communication", text: "Début de la visibilité partenaires sur les réseaux." },
  { date: "26 juin", title: "Ouverture des inscriptions", text: "Lancement de la campagne Instagram." },
  { date: "Septembre", title: "Reconnaissance terrain", text: "Finalisation du dispositif et briefings." },
  { date: "2 octobre", title: "Montage & installation", text: "État des lieux entrant à la Marina Olympique." },
  { date: "3 octobre", title: "Jour 1 — KYMA", text: "Session terrestre, aquatique puis session nocturne." },
  { date: "4 octobre", title: "Jour 2 — KYMA", text: "Session terrestre puis session aquatique." },
];

export default function KymaPage() {
  return (
    <main className="text-[#f0e7c7]">
      <KymaHeader />

      {/* HERO */}
      <section className="bg-kyma relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
          <Image
            src="/assets/kyma/logo.png"
            alt="KYMA — Endurance Hybrid Race"
            width={320}
            height={372}
            priority
            className="h-44 w-auto drop-shadow-2xl sm:h-56"
          />
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.35em] text-[#f0e7c7]/80">
            Marina Olympique · Marseille
          </p>
          <h1 className="font-rounded mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Les 3 &amp; 4 octobre 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#f0e7c7]/85 sm:text-xl">
            L&apos;Endurance Hybrid Race en binôme face à la Méditerranée.
            <br className="hidden sm:block" /> Un événement, deux terrains.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kyma/billetterie"
              className="rounded-full bg-[#ec5a44] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-black/20 transition hover:brightness-110"
            >
              Réserver ma session
            </Link>
            <a
              href="#concept"
              className="rounded-full border border-[#f0e7c7]/40 px-8 py-3.5 text-base font-semibold text-[#f0e7c7] transition hover:bg-[#f0e7c7]/10"
            >
              Découvrir l&apos;événement
            </a>
          </div>
        </div>
      </section>

      {/* POURQUOI / STATS */}
      <section className="bg-[#f6f1df] text-[#1c1640]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-rounded text-sm font-semibold uppercase tracking-[0.25em] text-[#ec5a44]">
            Pourquoi KYMA ?
          </p>
          <h2 className="font-rounded mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            Le bon moment. Le bon endroit.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-[#1c1640]/75">
            Le fitness est le segment le plus dynamique du sport mondial. KYMA arrive avec un format
            que personne n&apos;a encore proposé : hybride, outdoor, en binôme, face à la
            Méditerranée. Ce n&apos;est pas un événement de plus — c&apos;est le premier du genre à
            Marseille.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="font-rounded text-4xl font-bold text-[#2b4aa2]">{s.value}</p>
                <p className="mt-2 text-sm text-[#1c1640]/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT / ADN */}
      <section id="concept" className="bg-kyma-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-rounded text-sm font-semibold uppercase tracking-[0.25em] text-[#f0e7c7]/70">
            L&apos;ADN de KYMA
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {adn.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="font-rounded text-2xl font-bold">{a.title}</h3>
                <p className="mt-4 text-[#f0e7c7]/85">{a.text}</p>
              </div>
            ))}
          </div>
          <p className="font-rounded mt-12 text-center text-2xl font-semibold sm:text-3xl">
            Un événement. Deux terrains. Un seul état d&apos;esprit.
          </p>
        </div>
      </section>

      {/* FORMAT */}
      <section className="bg-[#f6f1df] text-[#1c1640]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-rounded text-sm font-semibold uppercase tracking-[0.25em] text-[#ec5a44]">
            Le format
          </p>
          <h2 className="font-rounded mt-3 text-3xl font-bold sm:text-4xl">
            Deux jours. Cinq sessions. Un seul choix à faire.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-[#1c1640]/75">
            KYMA se déroule sur deux jours, samedi 3 et dimanche 4 octobre. Chaque binôme s&apos;inscrit
            à une seule session, du départ à l&apos;arrivée, ensemble.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sessions.map((s) => (
              <div key={s.name} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm">
                <span className="font-rounded text-sm font-semibold uppercase tracking-wide text-[#ec5a44]">
                  {s.metric}
                </span>
                <h3 className="font-rounded mt-1 text-2xl font-bold">{s.name}</h3>
                <p className="mt-3 text-sm text-[#1c1640]/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIERS */}
      <section className="bg-[#1c1640]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-rounded text-sm font-semibold uppercase tracking-[0.25em] text-[#f0e7c7]/60">
            Les 8 ateliers fonctionnels
          </p>
          <h2 className="font-rounded mt-3 text-3xl font-bold sm:text-4xl">
            Du matériel standard, éprouvé et sécurisé
          </h2>
          <p className="mt-5 max-w-3xl text-[#f0e7c7]/70">
            Chaque station est conçue pour être réalisée en binôme, favorisant la solidarité et
            l&apos;engagement collectif tout au long de l&apos;épreuve.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ateliers.map((a, i) => (
              <div key={a} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-rounded text-sm text-[#ec5a44]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-rounded mt-1 text-lg font-semibold">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIEU */}
      <section className="bg-kyma">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-rounded text-sm font-semibold uppercase tracking-[0.25em] text-[#f0e7c7]/70">
            Le lieu
          </p>
          <h2 className="font-rounded mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            Pourquoi la Marina Olympique ?
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-[#f0e7c7]/85">
            Site des épreuves de voile des Jeux Olympiques de Paris 2024, la Marina Olympique de
            Marseille n&apos;est pas un lieu ordinaire. Un bassin abrité pour la natation, une
            promenade longeant l&apos;eau pour la course, des espaces ouverts face à la mer pour les
            ateliers. Tout sur un même site : compact, spectaculaire, photogénique.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Pour les athlètes : un terrain de jeu que nulle salle de fitness ne peut offrir.",
              "Pour les partenaires : un écrin visuel rare, identifiable, 100 % outdoor.",
              "Pour Marseille : la confirmation que la ville est une capitale du sport outdoor.",
            ].map((t) => (
              <p key={t} className="rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-[#f0e7c7]/85">
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDRIER */}
      <section className="bg-[#f6f1df] text-[#1c1640]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-rounded text-sm font-semibold uppercase tracking-[0.25em] text-[#ec5a44]">
            Le calendrier
          </p>
          <h2 className="font-rounded mt-3 text-3xl font-bold sm:text-4xl">La route vers KYMA</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#1c1640]/10 bg-[#1c1640]/10 sm:grid-cols-3">
            {calendar.map((c) => (
              <div key={c.date} className="bg-[#f6f1df] p-7">
                <p className="font-rounded text-lg font-bold text-[#2b4aa2]">{c.date}</p>
                <p className="font-rounded mt-1 font-semibold">{c.title}</p>
                <p className="mt-2 text-sm text-[#1c1640]/65">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-kyma-soft">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <h2 className="font-rounded text-3xl font-bold sm:text-5xl">Rejoignez KYMA</h2>
          <p className="mt-5 text-lg text-[#f0e7c7]/85">
            Trouvez votre binôme, choisissez votre session et venez écrire la première édition.
          </p>
          <Link
            href="/kyma/billetterie"
            className="mt-9 inline-block rounded-full bg-[#ec5a44] px-9 py-4 text-base font-semibold text-white shadow-xl shadow-black/20 transition hover:brightness-110"
          >
            Accéder à la billetterie
          </Link>
        </div>
      </section>

      <KymaFooter />
    </main>
  );
}
