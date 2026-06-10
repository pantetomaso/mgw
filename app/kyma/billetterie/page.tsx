"use client";

import { useMemo, useState } from "react";
import KymaHeader from "@/components/kyma/KymaHeader";
import KymaFooter from "@/components/kyma/KymaFooter";

type Ticket = {
  id: string;
  day: string;
  slot: string;
  name: string;
  detail: string;
  price: number;
};

// NB : tarifs indicatifs (par binôme) — à ajuster avant ouverture des ventes.
const tickets: Ticket[] = [
  { id: "sam-terre", day: "Samedi 3 oct.", slot: "Matin", name: "Session terrestre", detail: "8 km · 8 ateliers fonctionnels", price: 90 },
  { id: "sam-aqua", day: "Samedi 3 oct.", slot: "Après-midi", name: "Session aquatique", detail: "1,6 km de nage · 8 ateliers", price: 90 },
  { id: "sam-nuit", day: "Samedi 3 oct.", slot: "Soir", name: "Session nocturne", detail: "Terrestre · Marina illuminée", price: 100 },
  { id: "dim-terre", day: "Dimanche 4 oct.", slot: "Matin", name: "Session terrestre", detail: "8 km · 8 ateliers fonctionnels", price: 90 },
  { id: "dim-aqua", day: "Dimanche 4 oct.", slot: "Après-midi", name: "Session aquatique", detail: "1,6 km de nage · 8 ateliers", price: 90 },
];

const ORGA_EMAIL = "pa@marseillegoodwaves.fr";

export default function BilletteriePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [teams, setTeams] = useState(1);
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const ticket = useMemo(() => tickets.find((t) => t.id === selected) ?? null, [selected]);
  const total = ticket ? ticket.price * teams : 0;

  const mailto = useMemo(() => {
    if (!ticket) return "#";
    const subject = `Inscription KYMA — ${ticket.name} (${ticket.day} ${ticket.slot})`;
    const body = [
      "Bonjour,",
      "",
      "Je souhaite inscrire mon binôme à KYMA :",
      `• Session : ${ticket.name} — ${ticket.day}, ${ticket.slot}`,
      `• Nombre de binômes : ${teams}`,
      `• Montant indicatif : ${total} €`,
      "",
      `Nom du binôme : ${teamName || "(à compléter)"}`,
      `Email : ${email || "(à compléter)"}`,
      `Téléphone : ${phone || "(à compléter)"}`,
      "",
      "Merci !",
    ].join("\n");
    return `mailto:${ORGA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [ticket, teams, total, teamName, email, phone]);

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
        </div>
      </section>

      {/* TICKETS + FORM */}
      <section className="bg-[#f6f1df] text-[#1c1640]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Liste des sessions */}
          <div>
            <h2 className="font-rounded text-2xl font-bold">Les 5 sessions</h2>
            <p className="mt-1 text-sm text-[#1c1640]/60">Tarif par binôme (2 athlètes).</p>
            <div className="mt-6 space-y-3">
              {tickets.map((t) => {
                const active = t.id === selected;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelected(t.id)}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border-2 p-5 text-left transition ${
                      active
                        ? "border-[#ec5a44] bg-white shadow-md"
                        : "border-transparent bg-white hover:border-[#ec5a44]/40"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          active ? "border-[#ec5a44]" : "border-[#1c1640]/25"
                        }`}
                      >
                        {active && <span className="h-2.5 w-2.5 rounded-full bg-[#ec5a44]" />}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#ec5a44]">
                          {t.day} · {t.slot}
                        </p>
                        <p className="font-rounded text-lg font-bold">{t.name}</p>
                        <p className="text-sm text-[#1c1640]/60">{t.detail}</p>
                      </div>
                    </div>
                    <p className="font-rounded shrink-0 text-xl font-bold text-[#2b4aa2]">{t.price} €</p>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 rounded-xl bg-[#2b4aa2]/5 p-4 text-sm text-[#1c1640]/70">
              Accès spectateurs gratuit sur l&apos;ensemble du week-end, et notamment lors de la
              session nocturne du samedi soir, face à la Méditerranée illuminée.
            </p>
          </div>

          {/* Récapitulatif / inscription */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-[#1c1640] p-7 text-[#f0e7c7]">
              <h2 className="font-rounded text-xl font-bold">Votre inscription</h2>

              {ticket ? (
                <div className="mt-4 rounded-xl bg-white/5 p-4 text-sm">
                  <p className="font-semibold">{ticket.name}</p>
                  <p className="text-[#f0e7c7]/70">
                    {ticket.day} · {ticket.slot}
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#f0e7c7]/60">
                  Sélectionnez une session pour continuer.
                </p>
              )}

              <label className="mt-5 block text-sm font-medium">
                Nombre de binômes
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setTeams((n) => Math.max(1, n - 1))}
                    className="h-9 w-9 rounded-full border border-white/20 text-lg leading-none transition hover:bg-white/10"
                    aria-label="Retirer un binôme"
                  >
                    −
                  </button>
                  <span className="font-rounded w-8 text-center text-lg font-bold">{teams}</span>
                  <button
                    type="button"
                    onClick={() => setTeams((n) => Math.min(20, n + 1))}
                    className="h-9 w-9 rounded-full border border-white/20 text-lg leading-none transition hover:bg-white/10"
                    aria-label="Ajouter un binôme"
                  >
                    +
                  </button>
                </div>
              </label>

              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Nom du binôme / des athlètes"
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-[#f0e7c7]/40 focus:border-[#ec5a44] focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email de contact"
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-[#f0e7c7]/40 focus:border-[#ec5a44] focus:outline-none"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Téléphone"
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-[#f0e7c7]/40 focus:border-[#ec5a44] focus:outline-none"
                />
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-[#f0e7c7]/70">Total indicatif</span>
                <span className="font-rounded text-2xl font-bold">{total} €</span>
              </div>

              <a
                href={mailto}
                aria-disabled={!ticket}
                onClick={(e) => {
                  if (!ticket) e.preventDefault();
                }}
                className={`mt-4 block rounded-full px-6 py-3.5 text-center text-base font-semibold transition ${
                  ticket
                    ? "bg-[#ec5a44] text-white shadow-lg shadow-[#ec5a44]/30 hover:brightness-110"
                    : "cursor-not-allowed bg-white/10 text-[#f0e7c7]/40"
                }`}
              >
                Demander mon inscription
              </a>
              <p className="mt-3 text-center text-xs text-[#f0e7c7]/50">
                Votre demande est envoyée par email à l&apos;organisation, qui vous recontacte pour
                finaliser le paiement. Tarifs indicatifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <KymaFooter />
    </main>
  );
}
