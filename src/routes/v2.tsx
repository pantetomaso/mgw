import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sunrise.jpg";
import runningImg from "@/assets/running.jpg";
import hiitImg from "@/assets/hiit.jpg";
import swimImg from "@/assets/swim.jpg";
import teamImg from "@/assets/team.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import { ArrowUpRight, MapPin, Mail, Instagram, Clock, Sparkles, Sun } from "lucide-react";
import { LogoMark } from "@/components/Logo";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "Marseille Good Waves — Sport au lever du soleil sur la plage des Catalans" },
      { name: "description", content: "Yoga, running, natation, HIIT au lever du soleil à Marseille. Sessions sportives conviviales et team building face à la Méditerranée." },
      { property: "og:title", content: "Marseille Good Waves" },
      { property: "og:description", content: "Sport au lever du soleil sur la plage des Catalans." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const sessions = [
  { n: "01", name: "Yoga", time: "Mardi · 7h", img: heroImg, vibe: "Réveil en douceur face au lever du soleil." },
  { n: "02", name: "Running", time: "Jeudi · 7h", img: runningImg, vibe: "Foulées sur le sable, embruns et endorphines." },
  { n: "03", name: "HIIT", time: "Mardi · 7h30", img: hiitImg, vibe: "Cardio intense pour démarrer en feu." },
  { n: "04", name: "Natation", time: "Jeudi · 7h30", img: swimImg, vibe: "Plongée dans la Méditerranée à l'aube." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Ribbon />
      <Sessions />
      <Story />
      <TeamBuilding />
      <Contact />
      <Footer />
    </div>
  );
}

function Brand({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <LogoMark className="size-10 shrink-0" />
      <span
        className={`font-script text-2xl leading-none ${
          tone === "light" ? "text-background" : "text-foreground"
        }`}
      >
        Marseille Good Waves
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header id="top" className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Brand />
        <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/75">
          <a href="#sessions" className="hover:text-primary transition-colors">Morning Good Waves</a>
          <a href="#histoire" className="hover:text-primary transition-colors">À propos</a>
          <a href="#team-building" className="hover:text-primary transition-colors">Team Building</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
        >
          Réserver <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs uppercase tracking-[0.22em] text-foreground/70">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Plage des Catalans · Marseille
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.95] font-light">
            Lève-toi
            <br />
            avec la <span className="font-script italic font-normal text-primary">Méditerranée</span>
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Chaque mardi et jeudi matin, on se retrouve au lever du soleil pour bouger,
            respirer et partager un petit-déj face à la mer.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#sessions"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              Voir les sessions <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Réserver une session
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-lg gap-6">
            {[
              { k: "2x", v: "par semaine" },
              { k: "7h", v: "lever du soleil" },
              { k: "365j", v: "toute l'année" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
            <img src={heroImg} alt="Yoga au lever du soleil sur la plage des Catalans" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-deep/40 via-transparent to-transparent" />
          </div>
          {/* sticker */}
          <div className="absolute -top-6 -right-6 size-28 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-center font-script text-xl rotate-[12deg] shadow-soft z-10">
            sunrise<br/>vibes ✦
          </div>
          <div className="absolute -bottom-5 -right-4 rounded-2xl bg-card border border-border shadow-soft px-5 py-3 flex items-center gap-3">
            <Sun className="size-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">Prochain lever</div>
              <div className="text-muted-foreground text-xs">Mardi · 06:58</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ribbon() {
  const words = ["YOGA", "RUNNING", "HIIT", "NATATION", "PETIT-DÉJ", "SUNRISE", "GOOD VIBES"];
  const row = [...words, ...words, ...words];
  return (
    <div className="bg-secondary text-secondary-foreground overflow-hidden py-5 border-y border-secondary/20">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl flex items-center gap-10">
            {w}
            <Sparkles className="size-5 text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Sessions() {
  return (
    <section id="sessions" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">— Morning Good Waves</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Choisis ta <span className="font-script italic text-primary">vibe</span> du matin.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg">
            Quatre disciplines, un seul rituel : se lever, bouger ensemble face à la mer,
            puis partager un petit-déjeuner sur le sable.
          </p>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {sessions.map((s) => (
            <li key={s.name} className="group">
              <a href="#contact" className="grid grid-cols-12 gap-6 items-center py-6 md:py-8 px-2 hover:bg-sand transition-colors rounded-2xl">
                <span className="col-span-2 md:col-span-1 font-script text-2xl text-primary">{s.n}</span>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-3xl md:text-5xl leading-none">{s.name}</h3>
                </div>
                <p className="col-span-8 md:col-span-4 text-muted-foreground text-sm md:text-base">{s.vibe}</p>
                <div className="col-span-3 md:col-span-2 flex items-center gap-2 text-sm">
                  <Clock className="size-4 text-primary" /> {s.time}
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="relative size-16 md:size-20 rounded-full overflow-hidden shrink-0">
                    <img src={s.img} alt={s.name} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="histoire" className="bg-sea-deep text-background py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 lg:order-2 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-glow">
            <img src={swimImg} alt="Nageurs dans la Méditerranée" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 size-28 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-center font-script text-xl rotate-[8deg] shadow-glow">
            since<br/>2021
          </div>
        </div>
        <div className="lg:col-span-7 lg:order-1">
          <div className="text-xs tracking-[0.25em] uppercase text-accent mb-4">— L'esprit Good Waves</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
            Du sport,<br />
            une ambiance,<br />
            <span className="font-script italic text-accent">un rituel.</span>
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
    <section id="team-building" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">— Pour les équipes</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1]">
              Des team buildings<br />
              <span className="font-script italic text-primary">qui marquent.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg">
            On conçoit des expériences sur-mesure pour renforcer les liens, libérer
            l'énergie collective et offrir à vos collaborateurs un souvenir de Marseille
            qui leur restera.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-soft group">
            <img src={teamImg} alt="Team building sur la plage à Marseille" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sea-deep/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-background max-w-md">
              <h3 className="font-display text-3xl md:text-4xl mb-3">Cohésion sur le sable</h3>
              <p className="opacity-90 text-sm md:text-base">Demi-journée, journée complète ou séminaire — on s'adapte à votre brief et à votre équipe.</p>
            </div>
          </div>

          <div className="lg:col-span-4 grid gap-5">
            <div className="rounded-[2rem] bg-gradient-sunrise p-8 text-primary-foreground flex flex-col justify-between min-h-[200px]">
              <Sun className="size-7" />
              <div>
                <div className="font-display text-3xl leading-tight">Petit-déj inclus</div>
                <div className="text-sm opacity-90 mt-2">Café, fruits frais, viennoiseries</div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-card border border-border p-8 flex flex-col justify-between min-h-[200px] shadow-soft">
              <MapPin className="size-7 text-secondary" />
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
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden bg-sand">
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
          <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">— On se retrouve ?</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1]">
            Viens vivre<br />
            ta première <span className="font-script italic text-primary">Good Wave.</span>
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
          <Brand tone="light" />
          <p className="mt-4 text-sm text-background/60 max-w-xs">
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
