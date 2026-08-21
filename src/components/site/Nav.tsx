import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#story" },
  { label: "Work With Me", href: "#offers" },
  { label: "Results", href: "#results" },
  { label: "1% Movement", href: "#movement" },
  { label: "Resources", href: "#resources" },
  { label: "Content", href: "#content" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-8 border-b border-hairline px-5 md:h-20 md:px-10">
        <a href="#top" className="display text-lg tracking-[0.02em] md:text-xl">
          Emma<span className="text-acid">.</span>McCabe
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="label text-muted-foreground transition-colors hover:text-acid"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#apply"
            className="label hidden border border-acid px-4 py-3 text-acid transition-colors hover:bg-acid hover:text-primary-foreground md:inline-block"
          >
            Apply to work with me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="label border border-hairline px-3 py-3 lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-hairline bg-background px-5 py-6 lg:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-3xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#apply" onClick={() => setOpen(false)} className="display text-3xl text-acid">
                Apply
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
