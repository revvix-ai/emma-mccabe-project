import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Placeholder } from "@/components/site/Placeholder";
import { ArrowCta, BigNumber, SectionMark, VerticalLabel } from "@/components/site/bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma McCabe | Business & Mindset Mentor" },
      {
        name: "description",
        content:
          "Business and mindset coaching for coaches, consultants and service-based founders. Build a business you're obsessed with: more clients, more freedom, more life.",
      },
      { property: "og:title", content: "Emma McCabe — Build A Business You're Obsessed With" },
      {
        property: "og:description",
        content:
          "€131K from one reel. 2,200+ leads. Private coaching and the 1% Movement for entrepreneurs who refuse an ordinary life.",
      },
    ],
  }),
  component: Home,
});

const marquee = [
  "Business Strategy",
  "Personal Brand",
  "Client Acquisition",
  "Mindset",
  "Freedom",
  "Sales",
];

function Home() {
  return (
    <div id="top" className="bg-background">
      <Nav />

      {/* 01 — HERO */}
      <section className="relative min-h-screen overflow-hidden px-5 pt-28 pb-16 md:px-10 md:pt-32">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="rise lg:col-span-7 lg:pt-10">
            <p className="label text-muted-foreground">
              Business &amp; Mindset Coach <span className="text-acid">•</span> Founder{" "}
              <span className="text-acid">•</span> Entrepreneur
            </p>

            <h1 className="display mt-8 text-[clamp(3.1rem,9.5vw,10.5rem)]">
              Build a
              <br />
              business
              <br />
              you&apos;re
              <br />
              obsessed
              <br />
              <span className="acid-underline">with.</span>
            </h1>

            <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
              More freedom. More impact. More money. More life.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ArrowCta href="#apply">Apply to work with Emma</ArrowCta>
              <ArrowCta href="#movement" variant="outline">
                Explore the 1% Movement
              </ArrowCta>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <Placeholder
              label="Hero image — cinematic full-length portrait of Emma"
              ratio="4/5"
              className="rise"
            />
            <div className="absolute -left-4 bottom-6 hidden lg:block">
              <span className="vertical-type label text-muted-foreground tracking-[0.4em]">
                Est. Ireland → Bali
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1600px] border-t border-hairline pt-4">
          <div className="flex items-center gap-6">
            <span className="label text-acid">01</span>
            <span className="label text-muted-foreground">Scroll</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-hairline py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="display flex items-center gap-10 text-2xl md:text-4xl">
              {m}
              <span className="text-acid text-base">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 02 — SOCIAL PROOF */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <SectionMark index="02" title="The receipts" />
          <div className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
            <BigNumber value="€131K" caption="From one Instagram reel" />
            <BigNumber value="2,200+" caption="Leads generated" className="xl:mt-16" />
            <BigNumber value="1.1M+" caption="Views" />
            <BigNumber value="60K+" caption="Followers" className="xl:mt-16" />
          </div>
        </div>
      </section>

      {/* 03 — STORY (cream panel) */}
      <section id="story" className="px-3 pb-6 md:px-6">
        <div className="panel relative px-5 py-20 md:px-14 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <SectionMark index="03" title="The story" tone="dark" />

            <div className="mt-14 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="display text-[clamp(2.4rem,6.2vw,6.5rem)] text-ink">
                  From broke to
                  <br />
                  building a business
                  <br />
                  on <span className="acid-underline">her own terms.</span>
                </h2>

                <div className="mt-12 max-w-xl space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
                  <p>
                    Irish college dropout. A corporate career that looked good on paper and felt
                    like a cage. Broke — twice. A one-way flight to Bali with more conviction than
                    money.
                  </p>
                  <p>
                    Emma rebuilt from identity first: a personal brand with a point of view, an
                    offer people wanted, and the discipline to post through the silence. Then one
                    reel changed the trajectory of the entire business.
                  </p>
                </div>

                <ol className="mt-14 border-t border-hairline-dark">
                  {[
                    ["2016", "Drops out of college in Ireland"],
                    ["2018", "Corporate career — good on paper"],
                    ["2020", "Goes broke. Twice."],
                    ["2022", "Moves to Bali, builds the brand"],
                    ["2023", "€131K from a single reel"],
                    ["Now", "Multi six-figure business, location free"],
                  ].map(([year, copy]) => (
                    <li
                      key={year}
                      className="group flex items-baseline gap-6 border-b border-hairline-dark py-4 transition-colors hover:bg-acid/15"
                    >
                      <span className="label w-16 shrink-0 text-ink/50">{year}</span>
                      <span className="text-ink md:text-lg">{copy}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative lg:col-span-5">
                <Placeholder
                  label="Editorial image — Emma working from Bali"
                  ratio="4/5"
                  tone="cream"
                  className="lg:-mt-10"
                />
                <div className="display pointer-events-none absolute -left-6 top-1/2 hidden text-[9rem] text-ink/10 lg:block">
                  03
                </div>
                <Placeholder
                  label="Detail image — travel / lifestyle"
                  ratio="1/1"
                  tone="cream"
                  className="mt-6 lg:ml-16"
                />
                <div className="absolute -right-5 bottom-24 hidden lg:block">
                  <VerticalLabel>Ireland → Bali → Everywhere</VerticalLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — RESULTS */}
      <section id="results" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <SectionMark index="04" title="Client results" />

          <h2 className="display mt-14 max-w-4xl text-[clamp(2.4rem,6.5vw,6.5rem)]">
            The results
            <br />
            speak <span className="text-acid">louder.</span>
          </h2>

          {/* Case study 1 — image left, oversized number right */}
          <article className="mt-24 grid items-end gap-8 border-t border-hairline pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Placeholder label="Client portrait — Sarah, brand consultant" ratio="4/5" />
            </div>
            <div className="lg:col-span-8 lg:pl-8">
              <div className="display text-[clamp(4.5rem,15vw,14rem)] text-acid">2 MTHS</div>
              <p className="display mt-2 text-2xl md:text-4xl">Salary replaced</p>
              <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
                &ldquo;I handed in my notice nine weeks after we started. The positioning work alone
                doubled what I could charge.&rdquo;
              </p>
              <p className="label mt-6 text-muted-foreground">Sarah K. — Brand Consultant</p>
            </div>
          </article>

          {/* Case study 2 — number left, image right with overlap */}
          <article className="mt-24 grid items-center gap-8 border-t border-hairline pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="display text-[clamp(4.5rem,14vw,13rem)]">
                16 <span className="text-acid">/</span> 90
              </div>
              <p className="display mt-2 text-2xl md:text-4xl">
                New clients in ninety days
              </p>
              <p className="mt-6 max-w-lg text-muted-foreground md:text-lg">
                &ldquo;We stopped chasing and built a system. Sixteen signed clients, zero paid
                ads, one offer.&rdquo;
              </p>
              <p className="label mt-6 text-muted-foreground">Daniel R. — Systems Consultant</p>
            </div>
            <div className="relative lg:col-span-5">
              <Placeholder label="Client portrait — Daniel, consultant" ratio="4/5" />
              <span className="label absolute -left-3 top-6 hidden bg-acid px-2 py-1 text-primary-foreground md:inline-block">
                Case 02
              </span>
            </div>
          </article>

          {/* Dense strip */}
          <div className="mt-24 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
            {[
              ["10X", "Business growth in twelve months", "Video testimonial"],
              ["20K", "Follower growth, organic only", "Video testimonial"],
              ["$3K", "First $3K month in 90 days", "Video testimonial"],
            ].map(([value, caption, tag]) => (
              <div key={value} className="bg-background p-8">
                <Placeholder label={`${tag} thumbnail`} ratio="16/10" />
                <div className="display mt-8 text-[clamp(3rem,6vw,5rem)] text-acid">{value}</div>
                <p className="label mt-3 text-muted-foreground">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — OFFERS (cream panel) */}
      <section id="offers" className="px-3 pb-6 md:px-6">
        <div className="panel px-5 py-20 md:px-14 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <SectionMark index="05" title="Work with Emma" tone="dark" />

            <h2 className="display mt-14 text-[clamp(2.4rem,6.5vw,6.5rem)] text-ink">
              Choose your
              <br />
              next level.
            </h2>

            <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-10">
              <div className="border-t border-ink pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl text-ink md:text-5xl">Private coaching</h3>
                  <span className="label text-ink/50">1:1</span>
                </div>
                <p className="mt-6 max-w-md text-ink/70 md:text-lg">
                  For coaches, consultants and service-based founders ready to scale — with
                  positioning sharp enough to charge what the work is worth.
                </p>
                <ul className="mt-10 border-t border-hairline-dark">
                  {["Strategy", "Positioning", "Content", "Sales", "Client acquisition", "Mindset"].map(
                    (item, i) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-5 border-b border-hairline-dark py-3.5"
                      >
                        <span className="label text-acid">{`0${i + 1}`}</span>
                        <span className="text-ink md:text-lg">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-10">
                  <ArrowCta href="#apply">Apply for private coaching</ArrowCta>
                </div>
                <Placeholder
                  label="Coaching image — Emma in session"
                  ratio="16/10"
                  tone="cream"
                  className="mt-12"
                />
              </div>

              <div className="border-t border-ink pt-8 lg:mt-24">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl text-ink md:text-5xl">
                    <span className="text-acid">1%</span> Movement
                  </h3>
                  <span className="label text-ink/50">Community</span>
                </div>
                <p className="mt-6 max-w-md text-ink/70 md:text-lg">
                  A private room for ambitious entrepreneurs who want growth, accountability, real
                  connection — and a life that travels with them.
                </p>
                <ul className="mt-10 border-t border-hairline-dark">
                  {["Community", "Live calls", "Sales training", "Content strategy", "Events", "Retreats"].map(
                    (item, i) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-5 border-b border-hairline-dark py-3.5"
                      >
                        <span className="label text-acid">{`0${i + 1}`}</span>
                        <span className="text-ink md:text-lg">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-10">
                  <ArrowCta href="#movement" variant="outlineDark">
                    Enter the 1%
                  </ArrowCta>
                </div>
                <Placeholder
                  label="Community image — retreat / event"
                  ratio="16/10"
                  tone="cream"
                  className="mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — 1% MOVEMENT FEATURE */}
      <section id="movement" className="relative overflow-hidden px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <SectionMark index="06" title="The 1% Movement" />

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="display text-[clamp(7rem,22vw,20rem)] leading-[0.8] text-acid">
                1%
              </div>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,5rem)]">Welcome to the 1%.</h2>
              <p className="mt-8 max-w-md text-lg text-muted-foreground">
                For the people who refuse to settle for an ordinary life.
              </p>
              <div className="mt-10">
                <ArrowCta href="#apply">Join the movement</ArrowCta>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Placeholder label="Community image — mastermind dinner at night" ratio="16/11" />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <Placeholder label="Event image — retreat" ratio="1/1" />
                <Placeholder label="Lifestyle image — travel" ratio="1/1" className="mt-10" />
              </div>
              <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-hairline pt-8 sm:grid-cols-4">
                {["Ambition", "Connection", "Freedom", "Growth"].map((w) => (
                  <span key={w} className="label text-muted-foreground">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — RESOURCES */}
      <section id="resources" className="px-3 pb-6 md:px-6">
        <div className="panel px-5 py-20 md:px-14 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <SectionMark index="07" title="Free resources" tone="dark" />

            <div className="mt-14 flex flex-wrap items-end justify-between gap-8">
              <h2 className="display text-[clamp(2.4rem,6.5vw,6.5rem)] text-ink">
                Steal the
                <br />
                playbook.
              </h2>
              <ArrowCta href="#apply" variant="outlineDark">
                Get the free resources
              </ArrowCta>
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-3">
              {[
                ["01", "Organic Leads Blueprint", "The system behind 2,200+ inbound leads."],
                ["02", "Daily Inputs Checklist", "The five inputs that move revenue daily."],
                ["03", "Instagram Content Playbook", "How one reel produced €131K."],
              ].map(([num, title, copy], i) => (
                <article
                  key={title}
                  className={`group border-t border-ink pt-6 ${i === 1 ? "md:mt-14" : ""} ${i === 2 ? "md:mt-28" : ""
                    }`}
                >
                  <span className="label text-ink/45">{num}</span>
                  <Placeholder
                    label={`${title} — cover artwork`}
                    ratio="3/4"
                    tone="cream"
                    className="mt-5 transition-transform duration-500 group-hover:-translate-y-2"
                  />
                  <h3 className="display mt-6 text-2xl text-ink md:text-3xl">{title}</h3>
                  <p className="mt-3 text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — CONTENT */}
      <section id="content" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <SectionMark index="08" title="The ecosystem" />

          <h2 className="display mt-14 max-w-4xl text-[clamp(2.2rem,6vw,6rem)]">
            More of Emma.
            <br />
            Less of the <span className="acid-underline">scroll.</span>
          </h2>

          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="relative">
                <Placeholder label="Featured video — latest YouTube episode" ratio="16/9" />
                <span className="label absolute bottom-4 left-4 bg-acid px-3 py-2 text-primary-foreground">
                  ▶ Watch the latest
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-5">
                {["Instagram", "YouTube", "Podcast", "Business", "Mindset", "Sales", "Content"].map(
                  (t) => (
                    <span key={t} className="label text-muted-foreground hover:text-acid">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-6 lg:col-span-4">
              {[
                ["Podcast", "The identity shift that precedes every income jump"],
                ["Instagram", "The reel format that generated €131K"],
                ["YouTube", "How to fill your calendar without ads"],
              ].map(([tag, title]) => (
                <article key={title} className="border-t border-hairline pt-5">
                  <span className="label text-acid">{tag}</span>
                  <p className="mt-3 text-lg leading-snug">{title}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 — FINAL CTA */}
      <section id="apply" className="relative px-3 pb-3 md:px-6 md:pb-6">
        <div className="relative overflow-hidden border border-hairline">
          <Placeholder
            label="Full-width closing image — Emma, cinematic wide shot"
            ratio="16/9"
            className="min-h-[70vh] border-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent p-6 md:p-16">
            <span className="label text-acid">09 — Your move</span>
            <h2 className="display mt-6 max-w-4xl text-[clamp(2.4rem,7.5vw,8rem)]">
              Your next level
              <br />
              starts here.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Build the business. Change the identity. Create the life.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ArrowCta href="#apply">Apply to work with Emma</ArrowCta>
              <ArrowCta href="#movement" variant="outline">
                Join the 1%
              </ArrowCta>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8">
          <span className="display text-lg">
            Emma<span className="text-acid">.</span>McCabe
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {["Instagram", "YouTube", "Podcast", "Contact"].map((l) => (
              <a key={l} href="#top" className="label text-muted-foreground hover:text-acid">
                {l}
              </a>
            ))}
          </div>
          <span className="label text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
