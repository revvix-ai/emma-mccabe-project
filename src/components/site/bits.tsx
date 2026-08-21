import type { ReactNode } from "react";

export function SectionMark({
  index,
  title,
  tone = "light",
}: {
  index: string;
  title: string;
  tone?: "light" | "dark";
}) {
  const line = tone === "light" ? "border-hairline" : "border-hairline-dark";
  const dim = tone === "light" ? "text-muted-foreground" : "text-ink/55";
  return (
    <div className={`flex items-baseline gap-5 border-t ${line} pt-4`}>
      <span className={`label ${dim}`}>{index}</span>
      <span className="label">{title}</span>
      <span className="ml-auto h-px w-16 self-center bg-acid" aria-hidden />
    </div>
  );
}

export function BigNumber({
  value,
  caption,
  className = "",
}: {
  value: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="display text-acid text-[clamp(3.25rem,8vw,7.5rem)]">{value}</div>
      <p className="label mt-3 max-w-[16ch] text-muted-foreground">{caption}</p>
    </div>
  );
}

export function ArrowCta({
  children,
  href = "#apply",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "outlineDark";
}) {
  const styles = {
    solid: "bg-acid text-primary-foreground hover:bg-acid/85",
    outline: "border border-hairline text-foreground hover:border-acid hover:text-acid",
    outlineDark: "border border-hairline-dark text-ink hover:border-acid hover:bg-acid",
  }[variant];

  return (
    <a
      href={href}
      className={`label group inline-flex items-center gap-3 px-6 py-4 transition-all duration-300 ${styles}`}
    >
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </a>
  );
}

export function VerticalLabel({ children }: { children: ReactNode }) {
  return (
    <span className="vertical-type label text-ink/45 tracking-[0.4em]">{children}</span>
  );
}
