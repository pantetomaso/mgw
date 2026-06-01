import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sunrise.jpg";
import runningImg from "@/assets/running.jpg";
import hiitImg from "@/assets/hiit.jpg";
import swimImg from "@/assets/swim.jpg";
import teamImg from "@/assets/team.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import { ArrowUpRight, Sunrise, Waves, MapPin, Mail, Instagram, Coffee } from "lucide-react";

export const Route = createFileRoute("/v1")({
  head: () => ({
    meta: [
      { title: "Marseille Good Waves — Sport au lever du soleil sur la plage des Catalans" },
      { name: "description", content: "Yoga, running, natation, HIIT au lever du soleil à Marseille. Sessions sportives conviviales et team building face à la Méditerranée." },
      { property: "og:title", content: "Marseille Good Waves" },
      { property: "og:description", content: "Sport au lever du soleil sur la plage des Catalans. Yoga, running, natation, HIIT et petit-déj face à la mer." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const sessions = [
  { name: "Yoga", time: "Mardi · 7h", img: heroImg, vibe: "Réveil en douceur face au lever du soleil" },
  { name: "Running", time: "Jeudi · 7h", img: runningImg, vibe: "Foulées sur le sable, embruns et endorphines" },
  { name: "HIIT", time: "Mardi · 7h30", img: hiitImg, vibe: "Cardio intense pour démarrer en feu" },
  { name: "Natation", time: "Jeudi · 7h30", img: swimImg, vibe: "Plongée dans la Méditerranée à l'aube" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Sessions />
      <Story />
      <TeamBuilding />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-background mix-blend-difference">
          <Waves className="size-5" />
          <span className="font-display text-lg font-semibold tracking-tight">Good Waves</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-background mix-blend-difference">
          <a href="#sessions" className="hover:opacity-70 transition-opacity">Sessions</a>
          <a href="#histoire" className="hover:opacity-70 transition-opacity">Histoire</a>
          <a href="#team-building" className="hover:opacity-70 transition-opacity">Team Building</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Rejoindre <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[680px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Yoga au lever du soleil sur la plage des Catalans à Marseille"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
          <div className="flex items-center gap-2 text-background/80 text-xs tracking-[0.25em] uppercase mb-6">
            <Sunrise className="size-4" />
            <span>Plage des Catalans · Marseille</span>
          </div>
          <h1 className="font-display text-background text-[clamp(2.75rem,9vw,8rem)] leading-[0.95] font-light max-w-5xl">
            Lève-toi avec
            <br />
            <em className="italic font-normal text-gradient-sunrise">la Méditerranée.</em>
          </h1>
          <p className="mt-8 max-w-xl text-background/85 text-lg leading-relaxed">
            Chaque mardi et jeudi matin, on se retrouve au lever du soleil pour bouger,
            respirer et partager un petit-déj face à la mer.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#sessions"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              Voir les sessions <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 backdrop-blur-md bg-background/10 px-7 py-4 text-base font-medium text-background hover:bg-background/20 transition-colors"
            >
              Réserver une session
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute right-6 bottom-20 hidden lg:flex flex-col gap-4 text-background text-right">
        <div className="backdrop-blur-md bg-background/10 border border-background/20 rounded-2xl p-5 w-56">
          <div className="font-display text-4xl">2x</div>
          <div className="text-sm opacity-80">par semaine, toute l'année</div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["YOGA", "RUNNING", "HIIT", "NATATION", "PETIT-DÉJ", "SUNRISE", "BONNES VIBES"];
  const row = [...words, ...words, ...words];
  return (
    <div className="border-y border-border bg-sand overflow-hidden py-6">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl text-foreground/80 flex items-center gap-12">
            {w}
            <span className="inline-block size-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Sessions() {
  return (
    <section id="sessions" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">01 · Les Morning Good Waves</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] max-w-2xl">
              Choisis ta <em className="italic text-gradient-sunrise">vibe</em> du matin.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">
            Quatre disciplines, un seul rituel : se lever, bouger ensemble face à la mer,
            puis partager un petit-déjeuner sur le sable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sessions.map((s, i) => (
            <article
              key={s.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft"
              style={{ transform: `translateY(${i % 2 === 1 ? "2rem" : "0"})` }}
            >
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-background">
                <div className="self-end rounded-full bg-background/15 backdrop-blur-md border border-background/20 px-3 py-1 text-xs">
                  {s.time}
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-2">{s.name}</h3>
                  <p className="text-sm opacity-90 leading-snug">{s.vibe}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="histoire" className="bg-sea-deep text-background py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 lg:order-2">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow">
            <img src={swimImg} alt="Nageurs dans la Méditerranée" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 lg:order-1">
          <div className="text-xs tracking-[0.25em] uppercase text-accent mb-4">02 · L'esprit Good Waves</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
            Du sport,<br />
            une ambiance,<br />
            <em className="italic text-gradient-sunrise">un rituel.</em>
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-background/80 max-w-xl">
            Marseille Good Waves est né d'une envie simple : profiter de la plus belle heure
            de la journée pour bouger, respirer, et créer du lien. Sportif confirmé ou parfait
            débutant — la seule règle, c'est de venir comme tu es.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-background/15 pt-10">
            {[
              { k: "+500", v: "Sessions" },
              { k: "+1200", v: "Participants" },
              { k: "365", v: "Levers de soleil" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl md:text-5xl text-accent">{s.k}</div>
                <div className="text-sm text-background/70 mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamBuilding() {
  return (
    <section id="team-building" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">03 · Pour les équipes</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1]">
              Des team buildings<br />
              <em className="italic text-gradient-sunrise">qui marquent.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg">
            On conçoit des expériences sur-mesure pour renforcer les liens, libérer
            l'énergie collective et offrir à vos collaborateurs un souvenir de Marseille
            qui leur restera.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-soft group">
            <img src={teamImg} alt="Team building sur la plage à Marseille" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-background max-w-md">
              <h3 className="font-display text-3xl md:text-4xl mb-3">Cohésion sur le sable</h3>
              <p className="opacity-90 text-sm md:text-base">Demi-journée, journée complète ou séminaire — on s'adapte à votre brief et à votre équipe.</p>
            </div>
          </div>

          <div className="lg:col-span-4 grid gap-5">
            <div className="rounded-3xl bg-gradient-sunrise p-8 text-background flex flex-col justify-between min-h-[200px]">
              <Coffee className="size-7" />
              <div>
                <div className="font-display text-3xl leading-tight">Petit-déj inclus</div>
                <div className="text-sm opacity-90 mt-2">Café, fruits frais, viennoiseries</div>
              </div>
            </div>
            <div className="rounded-3xl bg-card border border-border p-8 flex flex-col justify-between min-h-[200px] shadow-soft">
              <MapPin className="size-7 text-primary" />
              <div>
                <div className="font-display text-3xl leading-tight">Plage des Catalans</div>
                <div className="text-sm text-muted-foreground mt-2">À 10 min du Vieux-Port</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden bg-sand">
      <img
        src={breakfastImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-90 hidden lg:block"
      />
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-sand" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">04 · On se retrouve ?</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1]">
            Viens vivre<br />
            ta première <em className="italic text-gradient-sunrise">Good Wave.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Un mot, une question, une envie de session — on revient vers toi sous 24h.
          </p>

          <form className="mt-10 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Prénom" name="firstName" />
              <Field label="Nom" name="lastName" />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Téléphone" name="phone" type="tel" />
            <Field label="Message" name="message" as="textarea" required />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity self-start shadow-glow"
            >
              Envoyer <ArrowUpRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  const cls =
    "w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2 text-foreground/80">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Waves className="size-5" />
            <span className="font-display text-xl">Marseille Good Waves</span>
          </div>
          <p className="text-sm text-background/60 max-w-xs">
            Sport au lever du soleil sur la plage des Catalans. Yoga, running, natation, HIIT.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-background/50 uppercase tracking-[0.2em] text-xs mb-3">Rendez-vous</div>
          <p>Mardi & Jeudi · 7h</p>
          <p>Plage des Catalans, Marseille</p>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-background/50 uppercase tracking-[0.2em] text-xs mb-3">Contact</div>
          <a href="mailto:hello@marseillegoodwaves.fr" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="size-4" /> hello@marseillegoodwaves.fr
          </a>
          <a href="https://instagram.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Instagram className="size-4" /> @marseillegoodwaves
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-background/10 text-xs text-background/50 flex flex-wrap justify-between gap-4">
        <span>© {new Date().getFullYear()} Marseille Good Waves</span>
        <span>Made with sunrise & sea ✦ Marseille</span>
      </div>
    </footer>
  );
}
