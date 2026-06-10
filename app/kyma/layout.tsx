import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KYMA — Endurance Hybrid Race · Marseille 3 & 4 octobre 2026",
  description:
    "KYMA, l'Endurance Hybrid Race en binôme face à la Méditerranée. Course à pied, natation en eau libre et ateliers fonctionnels à la Marina Olympique de Marseille, les 3 & 4 octobre 2026.",
};

export default function KymaLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#1c1640]">{children}</div>;
}
