"use client";

import { ArrowUpRight } from "lucide-react";

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

export function ContactForm() {
  return (
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
  );
}
