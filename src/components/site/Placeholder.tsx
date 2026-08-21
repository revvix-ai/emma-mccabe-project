/**
 * Image placeholder. Swap the whole component for an <img> when the real
 * photography lands, keeping the same className on the wrapper.
 */
export function Placeholder({
  label,
  ratio = "3/4",
  tone = "dark",
  className = "",
}: {
  label: string;
  ratio?: string;
  tone?: "dark" | "cream";
  className?: string;
}) {
  const skin =
    tone === "dark"
      ? "bg-charcoal text-muted-foreground border-hairline"
      : "bg-cream-deep text-ink/50 border-hairline-dark";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border ${skin} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.25" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.25" />
      </svg>
      <span className="label relative px-6 text-center leading-relaxed">{label}</span>
    </div>
  );
}
