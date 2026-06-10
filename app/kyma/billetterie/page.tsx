import KymaHeader from "@/components/kyma/KymaHeader";
import KymaFooter from "@/components/kyma/KymaFooter";

// ⚠️ À REMPLACER : URL de la billetterie officielle KYMA sur Finisher.
// Collez ici le lien de l'événement (ex. https://www.finishers.com/...).
const FINISHER_URL = "https://www.finishers.com/";

const tickets = [
  { day: "Samedi 3 oct.", slot: "Matin", name: "Session terrestre", detail: "8 km · 8 ateliers fonctionnels" },
  { day: "Samedi 3 oct.", slot: "Après-midi", name: "Session aquatique", detail: "1,6 km de nage · 8 ateliers" },
  { day: "Samedi 3 oct.", slot: "Soir", name: "Session nocturne", detail: "Terrestre · Marina illuminée" },
  { day: "Dimanche 4 oct.", slot: "Matin", name: "Session terrestre", detail: "8 km · 8 ateliers fonctionnels" },
  { day: "Dimanche 4 oct.", slot: "Après-midi", name: "Session aquatique", detail: "1,6 km de nage · 8 ateliers" },
];

function BuyButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={FINISHER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#ec5a44] px-9 py-4 text-base font-semibold text-white shadow-xl shadow-[#ec5a44]/30 transition hover:brightness-110 ${className}`}
    >
      Acheter mes billets sur Finisher
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function BilletteriePage() {
  return (
    <main className="text-[#f0e7c7]">
      <KymaHeader />

      {/* HERO */}
      <section className="bg-kyma">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f0e7c7]/80">
            Billetterie · 3 &amp; 4 octobre 2026
          </p>
          <h1 className="font-rounded mt-4 text-4xl font-bold sm:text-6xl">Choisissez votre session</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#f0e7c7]/85">
            KYMA se court en binôme. Chaque inscription engage deux athlètes, du départ à
            l&apos;arrivée, sur une seule session.
          </p>
          <div className="mt-9">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* SESSIONS */}
      <section className="bg-[#f6f1df] text-[#1c1640]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-rounded text-2xl font-bold">Les 5 sessions</h2>
          <p className="mt-1 text-sm text-[#1c1640]/60">
            Inscription par binôme (2 athlètes). Achat et tarifs sur la billetterie officielle Finisher.
          </p>

          <div className="mt-8 space-y-3">
            {tickets.map((t) => (
              <div
                key={`${t.day}-${t.slot}`}
                className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#ec5a44]">
                    {t.day} · {t.slot}
                  </p>
                  <p className="font-rounded text-lg font-bold">{t.name}</p>
                  <p className="text-sm text-[#1c1640]/60">{t.detail}</p>
                </div>
                <a
                  href={FINISHER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border-2 border-[#ec5a44] px-6 py-2.5 text-center text-sm font-semibold text-[#ec5a44] transition hover:bg-[#ec5a44] hover:text-white"
                >
                  S&apos;inscrire
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl bg-[#2b4aa2]/5 p-4 text-sm text-[#1c1640]/70">
            Accès spectateurs gratuit sur l&apos;ensemble du week-end, et notamment lors de la
            session nocturne du samedi soir, face à la Méditerranée illuminée.
          </p>
        </div>
      </section>

      {/* CTA ACHAT */}
      <section className="bg-kyma-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-rounded text-3xl font-bold sm:text-4xl">Prêt à relever le défi ?</h2>
          <p className="mt-4 text-lg text-[#f0e7c7]/85">
            Réservez votre place en quelques minutes sur la billetterie officielle, gérée par Finisher.
          </p>
          <div className="mt-8">
            <BuyButton />
          </div>
        </div>
      </section>

      <KymaFooter />
    </main>
  );
}
