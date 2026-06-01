export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-sun" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD27A" />
          <stop offset="50%" stopColor="#F58A4B" />
          <stop offset="100%" stopColor="#E84C3D" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="#FFFFFF" stroke="#0B3A66" strokeWidth="1.5" />
      {/* sun arcs */}
      <path d="M10 34 A22 22 0 0 1 54 34" fill="none" stroke="url(#lg-sun)" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 30 A16 16 0 0 1 48 30" fill="none" stroke="#F58A4B" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 26 A10 10 0 0 1 42 26" fill="none" stroke="#FFC25A" strokeWidth="2.5" strokeLinecap="round" />
      {/* waves */}
      <path d="M8 44 Q16 40 24 44 T40 44 T56 44" fill="none" stroke="#1E73B8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 50 Q16 46 24 50 T40 50 T56 50" fill="none" stroke="#0B3A66" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-script text-[1.35rem] leading-none tracking-tight ${className}`}>
      Marseille Good Waves
    </span>
  );
}
