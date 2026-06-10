import Image from "next/image";

const contacts = [
  { name: "Pierre-Alexis Antetomaso", email: "pa@marseillegoodwaves.fr", tel: "06 16 16 33 73" },
  { name: "Martial Pont", email: "martial@marseillegoodwaves.fr", tel: "06 62 28 55 31" },
];

export default function KymaFooter() {
  return (
    <footer className="bg-[#1c1640] text-[#f0e7c7]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Image
            src="/assets/kyma/logo.png"
            alt="KYMA — Endurance Hybrid Race"
            width={160}
            height={186}
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-[#f0e7c7]/70">
            Endurance Hybrid Race — un événement, deux terrains, un seul état d&apos;esprit.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-rounded text-lg font-semibold">Rendez-vous</h3>
          <p className="mt-3 text-[#f0e7c7]/80">3 &amp; 4 octobre 2026</p>
          <p className="text-[#f0e7c7]/80">Marina Olympique de Marseille</p>
          <p className="text-[#f0e7c7]/80">Stade Nautique Municipal Florence Arthaud</p>
        </div>

        <div className="text-sm">
          <h3 className="font-rounded text-lg font-semibold">Des questions ? Parlons-en.</h3>
          <ul className="mt-3 space-y-3">
            {contacts.map((c) => (
              <li key={c.email}>
                <p className="font-medium">{c.name}</p>
                <a href={`mailto:${c.email}`} className="block text-[#f0e7c7]/70 hover:text-[#f0e7c7]">
                  {c.email}
                </a>
                <a href={`tel:+33${c.tel.replace(/\s|^0/g, "")}`} className="text-[#f0e7c7]/70 hover:text-[#f0e7c7]">
                  {c.tel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-[#f0e7c7]/50 sm:px-8">
          KYMA — by Marseille Good Waves · © 2026
        </p>
      </div>
    </footer>
  );
}
