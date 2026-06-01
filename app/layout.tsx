import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marseille Good Waves",
  description:
    "Sport au lever du soleil sur la plage des Catalans à Marseille. Yoga, running, natation, HIIT et petit-déj face à la Méditerranée.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
