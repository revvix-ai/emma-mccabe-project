import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQ7VVRK1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "About",
		href: "#story"
	},
	{
		label: "Results",
		href: "#results"
	},
	{
		label: "Work With Me",
		href: "#offers"
	},
	{
		label: "1% Movement",
		href: "#movement"
	},
	{
		label: "Resources",
		href: "#resources"
	},
	{
		label: "Content",
		href: "#content"
	}
];
function Nav() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-background/85 backdrop-blur-md" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-8 border-b border-hairline px-5 md:h-20 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "display text-lg tracking-[0.02em] md:text-xl",
					children: [
						"Emma",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-acid",
							children: "."
						}),
						"McCabe"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "label text-muted-foreground transition-colors hover:text-acid",
						children: l.label
					}, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://docs.google.com/forms/d/e/1FAIpQLSdZFCRlA5xdkkL_S7qBXq2-MecbpBrhE--qqzcTmUrUGTaQSQ/viewform",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "label hidden border border-acid px-4 py-3 text-acid transition-colors hover:bg-acid hover:text-primary-foreground md:inline-block",
						children: "Apply to work with me"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "label border border-hairline px-3 py-3 lg:hidden",
						children: open ? "Close" : "Menu"
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-hairline bg-background px-5 py-6 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "display text-3xl text-foreground",
					children: l.label
				}) }, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://docs.google.com/forms/d/e/1FAIpQLSdZFCRlA5xdkkL_S7qBXq2-MecbpBrhE--qqzcTmUrUGTaQSQ/viewform",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => setOpen(false),
					className: "display text-3xl text-acid",
					children: "Apply"
				}) })]
			})
		})]
	});
}
/**
* Image placeholder. Swap the whole component for an <img> when the real
* photography lands, keeping the same className on the wrapper.
*/
function Placeholder({ label, ratio = "3/4", tone = "dark", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex items-center justify-center overflow-hidden border ${tone === "dark" ? "bg-charcoal text-muted-foreground border-hairline" : "bg-cream-deep text-ink/50 border-hairline-dark"} ${className}`,
		style: { aspectRatio: ratio },
		role: "img",
		"aria-label": label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute inset-0 h-full w-full opacity-30",
			preserveAspectRatio: "none",
			viewBox: "0 0 100 100",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "0",
				x2: "100",
				y2: "100",
				stroke: "currentColor",
				strokeWidth: "0.25"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "100",
				y1: "0",
				x2: "0",
				y2: "100",
				stroke: "currentColor",
				strokeWidth: "0.25"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label relative px-6 text-center leading-relaxed",
			children: label
		})]
	});
}
function SectionMark({ index, title, tone = "light" }) {
	const line = tone === "light" ? "border-hairline" : "border-hairline-dark";
	const dim = tone === "light" ? "text-muted-foreground" : "text-ink/55";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-baseline gap-5 border-t ${line} pt-4`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `label ${dim}`,
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-auto h-px w-16 self-center bg-acid",
				"aria-hidden": true
			})
		]
	});
}
function BigNumber({ value, caption, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "display text-acid text-[clamp(3.25rem,8vw,7.5rem)]",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label mt-3 max-w-[16ch] text-muted-foreground",
			children: caption
		})]
	});
}
function ArrowCta({ children, href = "#apply", variant = "solid" }) {
	const styles = {
		solid: "bg-acid text-primary-foreground hover:bg-acid/85",
		outline: "border border-hairline text-foreground hover:border-acid hover:text-acid",
		outlineDark: "border border-hairline-dark text-ink hover:border-acid hover:bg-acid"
	}[variant];
	const isExternal = href?.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		...isExternal ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		className: `label group inline-flex items-center gap-3 px-6 py-4 transition-all duration-300 ${styles}`,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block transition-transform duration-300 group-hover:translate-x-1.5",
			children: "→"
		})]
	});
}
function VerticalLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "vertical-type label text-ink/45 tracking-[0.4em]",
		children
	});
}
var marquee = [
	"Business Strategy",
	"Personal Brand",
	"Client Acquisition",
	"Mindset",
	"Freedom",
	"Sales"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-screen overflow-hidden px-5 pt-28 pb-16 md:px-10 md:pt-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-12 lg:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise lg:col-span-7 lg:pt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "label text-muted-foreground",
								children: [
									"Business & Mindset Coach ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-acid",
										children: "•"
									}),
									" Founder",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-acid",
										children: "•"
									}),
									" Entrepreneur"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display mt-8 text-[clamp(3.1rem,9.5vw,10.5rem)]",
								children: [
									"Build a",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"business",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"you're",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"obsessed",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "acid-underline",
										children: "with."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl",
								children: "More freedom. More impact. More money. More life."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
									href: "https://docs.google.com/forms/d/e/1FAIpQLSdZFCRlA5xdkkL_S7qBXq2-MecbpBrhE--qqzcTmUrUGTaQSQ/viewform",
									children: "Apply to work with Emma"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
									href: "https://www.skool.com/the-1-movement-7592/about",
									variant: "outline",
									children: "Explore the 1% Movement"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
							label: "Hero image — cinematic full-length portrait of Emma",
							ratio: "4/5",
							className: "rise"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -left-4 bottom-6 hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "vertical-type label text-muted-foreground tracking-[0.4em]",
								children: "Est. Ireland → Bali"
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-16 max-w-[1600px] border-t border-hairline pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label text-acid",
							children: "01"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label text-muted-foreground",
							children: "Scroll"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-y border-hairline py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track flex w-max gap-10 whitespace-nowrap",
					children: [
						...marquee,
						...marquee,
						...marquee,
						...marquee
					].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "display flex items-center gap-10 text-2xl md:text-4xl",
						children: [m, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-acid text-base",
							children: "✦"
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-24 md:px-10 md:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
						index: "02",
						title: "The receipts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigNumber, {
								value: "€131K",
								caption: "From one Instagram reel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigNumber, {
								value: "2,200+",
								caption: "Leads generated",
								className: "xl:mt-16"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigNumber, {
								value: "1.1M+",
								caption: "Views"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigNumber, {
								value: "60K+",
								caption: "Followers",
								className: "xl:mt-16"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "story",
				className: "px-3 pb-6 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel relative px-5 py-20 md:px-14 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1500px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
							index: "03",
							title: "The story",
							tone: "dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid gap-12 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "display text-[clamp(2.4rem,6.2vw,6.5rem)] text-ink",
										children: [
											"From broke to",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"building a business",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"on ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "acid-underline",
												children: "her own terms."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-12 max-w-xl space-y-5 text-base leading-relaxed text-ink/70 md:text-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Irish college dropout. A corporate career that looked good on paper and felt like a cage. Broke — twice. A one-way flight to Bali with more conviction than money." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Emma rebuilt from identity first: a personal brand with a point of view, an offer people wanted, and the discipline to post through the silence. Then one reel changed the trajectory of the entire business." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-14 border-t border-hairline-dark",
										children: [
											["2016", "Drops out of college in Ireland"],
											["2018", "Corporate career — good on paper"],
											["2020", "Goes broke. Twice."],
											["2022", "Moves to Bali, builds the brand"],
											["2023", "€131K from a single reel"],
											["Now", "Multi six-figure business, location free"]
										].map(([year, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "group flex items-baseline gap-6 border-b border-hairline-dark py-4 transition-colors hover:bg-acid/15",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label w-16 shrink-0 text-ink/50",
												children: year
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink md:text-lg",
												children: copy
											})]
										}, year))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative lg:col-span-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										label: "Editorial image — Emma working from Bali",
										ratio: "4/5",
										tone: "cream",
										className: "lg:-mt-10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "display pointer-events-none absolute -left-6 top-1/2 hidden text-[9rem] text-ink/10 lg:block",
										children: "03"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										label: "Detail image — travel / lifestyle",
										ratio: "1/1",
										tone: "cream",
										className: "mt-6 lg:ml-16"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-5 bottom-24 hidden lg:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalLabel, { children: "Ireland → Bali → Everywhere" })
									})
								]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "results",
				className: "px-5 py-24 md:px-10 md:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
							index: "04",
							title: "Client results"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display mt-14 max-w-4xl text-[clamp(2.4rem,6.5vw,6.5rem)]",
							children: [
								"The results",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"speak ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-acid",
									children: "louder."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-24 grid items-end gap-8 border-t border-hairline pt-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
									label: "Client portrait — Sarah, brand consultant",
									ratio: "4/5"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-8 lg:pl-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "display text-[clamp(4.5rem,15vw,14rem)] text-acid",
										children: "2 MTHS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display mt-2 text-2xl md:text-4xl",
										children: "Salary replaced"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl text-muted-foreground md:text-lg",
										children: "“I handed in my notice nine weeks after we started. The positioning work alone doubled what I could charge.”"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label mt-6 text-muted-foreground",
										children: "Sarah K. — Brand Consultant"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-24 grid items-center gap-8 border-t border-hairline pt-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "display text-[clamp(4.5rem,14vw,13rem)]",
										children: [
											"16 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-acid",
												children: "/"
											}),
											" 90"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display mt-2 text-2xl md:text-4xl",
										children: "New clients in ninety days"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-lg text-muted-foreground md:text-lg",
										children: "“We stopped chasing and built a system. Sixteen signed clients, zero paid ads, one offer.”"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label mt-6 text-muted-foreground",
										children: "Daniel R. — Systems Consultant"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative lg:col-span-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
									label: "Client portrait — Daniel, consultant",
									ratio: "4/5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label absolute -left-3 top-6 hidden bg-acid px-2 py-1 text-primary-foreground md:inline-block",
									children: "Case 02"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-24 grid gap-px border border-hairline bg-hairline md:grid-cols-3",
							children: [
								[
									"10X",
									"Business growth in twelve months",
									"Video testimonial"
								],
								[
									"20K",
									"Follower growth, organic only",
									"Video testimonial"
								],
								[
									"$3K",
									"First $3K month in 90 days",
									"Video testimonial"
								]
							].map(([value, caption, tag]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										label: `${tag} thumbnail`,
										ratio: "16/10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "display mt-8 text-[clamp(3rem,6vw,5rem)] text-acid",
										children: value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label mt-3 text-muted-foreground",
										children: caption
									})
								]
							}, value))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "offers",
				className: "px-3 pb-6 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel px-5 py-20 md:px-14 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1500px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
								index: "05",
								title: "Work with Emma",
								tone: "dark"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display mt-14 text-[clamp(2.4rem,6.5vw,6.5rem)] text-ink",
								children: [
									"Choose your",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"next level."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-20 grid gap-16 lg:grid-cols-2 lg:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-ink pt-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "display text-3xl text-ink md:text-5xl",
												children: "Private coaching"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label text-ink/50",
												children: "1:1"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-md text-ink/70 md:text-lg",
											children: "For coaches, consultants and service-based founders ready to scale — with positioning sharp enough to charge what the work is worth."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-10 border-t border-hairline-dark",
											children: [
												"Strategy",
												"Positioning",
												"Content",
												"Sales",
												"Client acquisition",
												"Mindset"
											].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-baseline gap-5 border-b border-hairline-dark py-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "label text-acid",
													children: `0${i + 1}`
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink md:text-lg",
													children: item
												})]
											}, item))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
												href: "https://docs.google.com/forms/d/e/1FAIpQLSdZFCRlA5xdkkL_S7qBXq2-MecbpBrhE--qqzcTmUrUGTaQSQ/viewform",
												children: "Apply for private coaching"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
											label: "Coaching image — Emma in session",
											ratio: "16/10",
											tone: "cream",
											className: "mt-12"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-ink pt-8 lg:mt-24",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "display text-3xl text-ink md:text-5xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-acid",
													children: "1%"
												}), " Movement"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label text-ink/50",
												children: "Community"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-md text-ink/70 md:text-lg",
											children: "A private room for ambitious entrepreneurs who want growth, accountability, real connection — and a life that travels with them."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-10 border-t border-hairline-dark",
											children: [
												"Community",
												"Live calls",
												"Sales training",
												"Content strategy",
												"Events",
												"Retreats"
											].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-baseline gap-5 border-b border-hairline-dark py-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "label text-acid",
													children: `0${i + 1}`
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink md:text-lg",
													children: item
												})]
											}, item))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
												href: "https://www.skool.com/the-1-movement-7592/about",
												variant: "outlineDark",
												children: "Enter the 1%"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
											label: "Community image — retreat / event",
											ratio: "16/10",
											tone: "cream",
											className: "mt-12"
										})
									]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "movement",
				className: "relative overflow-hidden px-5 py-24 md:px-10 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
						index: "06",
						title: "The 1% Movement"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-12 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "display text-[clamp(7rem,22vw,20rem)] leading-[0.8] text-acid",
									children: "1%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display mt-6 text-[clamp(2.2rem,5.5vw,5rem)]",
									children: "Welcome to the 1%."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-md text-lg text-muted-foreground",
									children: "For the people who refuse to settle for an ordinary life."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
										href: "https://www.skool.com/the-1-movement-7592/about",
										children: "Join the movement"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
									label: "Community image — mastermind dinner at night",
									ratio: "16/11"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid grid-cols-2 gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										label: "Event image — retreat",
										ratio: "1/1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										label: "Lifestyle image — travel",
										ratio: "1/1",
										className: "mt-10"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid grid-cols-2 gap-y-8 border-t border-hairline pt-8 sm:grid-cols-4",
									children: [
										"Ambition",
										"Connection",
										"Freedom",
										"Growth"
									].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label text-muted-foreground",
										children: w
									}, w))
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "resources",
				className: "px-3 pb-6 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel px-5 py-20 md:px-14 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1500px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
								index: "07",
								title: "Free resources",
								tone: "dark"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 flex flex-wrap items-end justify-between gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display text-[clamp(2.4rem,6.5vw,6.5rem)] text-ink",
									children: [
										"Steal the",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"playbook."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
									href: "https://docs.google.com/forms/d/e/1FAIpQLSdZFCRlA5xdkkL_S7qBXq2-MecbpBrhE--qqzcTmUrUGTaQSQ/viewform",
									variant: "outlineDark",
									children: "Get the free resources"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-20 grid gap-10 md:grid-cols-3",
								children: [
									[
										"01",
										"Organic Leads Blueprint",
										"The system behind 2,200+ inbound leads."
									],
									[
										"02",
										"Daily Inputs Checklist",
										"The five inputs that move revenue daily."
									],
									[
										"03",
										"Instagram Content Playbook",
										"How one reel produced €131K."
									]
								].map(([num, title, copy], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: `group border-t border-ink pt-6 ${i === 1 ? "md:mt-14" : ""} ${i === 2 ? "md:mt-28" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "label text-ink/45",
											children: num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
											label: `${title} — cover artwork`,
											ratio: "3/4",
											tone: "cream",
											className: "mt-5 transition-transform duration-500 group-hover:-translate-y-2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "display mt-6 text-2xl text-ink md:text-3xl",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-ink/65",
											children: copy
										})
									]
								}, title))
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "content",
				className: "px-5 py-24 md:px-10 md:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, {
							index: "08",
							title: "The ecosystem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display mt-14 max-w-4xl text-[clamp(2.2rem,6vw,6rem)]",
							children: [
								"More of Emma.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Less of the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "acid-underline",
									children: "scroll."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 grid gap-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										label: "Featured video — latest YouTube episode",
										ratio: "16/9"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label absolute bottom-4 left-4 bg-acid px-3 py-2 text-primary-foreground",
										children: "▶ Watch the latest"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-5",
									children: [
										"Instagram",
										"YouTube",
										"Podcast",
										"Business",
										"Mindset",
										"Sales",
										"Content"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label text-muted-foreground hover:text-acid",
										children: t
									}, t))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-6 lg:col-span-4",
								children: [
									[
										"Podcast",
										"The identity shift that precedes every income jump",
										"https://podcasts.apple.com/us/podcast/life-is-a-game/id1747220692"
									],
									[
										"Guest",
										"Decoding Wisdom: She made €131k from one reel",
										"https://poddtoppen.se/podcast/1794697068/decoding-wisdom/053-emma-mccabe-she-made-eur131000-from-one-instagram-reel"
									],
									[
										"YouTube",
										"How to fill your calendar without ads",
										"https://www.youtube.com/@EmmaMccabeBiz"
									]
								].map(([tag, title, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border-t border-hairline pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label text-acid",
										children: tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-3 block text-lg leading-snug hover:text-acid transition-colors",
										children: title
									})]
								}, title))
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "apply",
				className: "relative px-3 pb-3 md:px-6 md:pb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden border border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
						label: "Full-width closing image — Emma, cinematic wide shot",
						ratio: "16/9",
						className: "min-h-[70vh] border-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent p-6 md:p-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label text-acid",
								children: "09 — Your move"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display mt-6 max-w-4xl text-[clamp(2.4rem,7.5vw,8rem)]",
								children: [
									"Your next level",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"starts here."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-lg text-muted-foreground",
								children: "Build the business. Change the identity. Create the life."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
										href: "https://docs.google.com/forms/d/e/1FAIpQLSdZFCRlA5xdkkL_S7qBXq2-MecbpBrhE--qqzcTmUrUGTaQSQ/viewform",
										children: "Apply to work with Emma"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
										href: "https://calendly.com/emma-mccabe328/30-minute-discovery-call",
										variant: "outline",
										children: "Book a Discovery Call"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowCta, {
										href: "https://www.skool.com/the-1-movement-7592/about",
										variant: "outline",
										children: "Join the 1%"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "px-5 py-12 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "display text-lg",
							children: [
								"Emma",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-acid",
									children: "."
								}),
								"McCabe"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-x-8 gap-y-2",
							children: [
								{
									label: "Instagram",
									href: "https://www.instagram.com/emccabemindset/"
								},
								{
									label: "YouTube",
									href: "https://www.youtube.com/@EmmaMccabeBiz"
								},
								{
									label: "Podcast",
									href: "https://podcasts.apple.com/us/podcast/life-is-a-game/id1747220692"
								},
								{
									label: "Contact",
									href: "https://calendly.com/emma-mccabe328/30-minute-discovery-call"
								}
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "label text-muted-foreground hover:text-acid",
								children: l.label
							}, l.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "label text-muted-foreground",
							children: ["© ", (/* @__PURE__ */ new Date()).getFullYear()]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
