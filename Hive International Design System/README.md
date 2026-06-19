# Hive International — Design System

> **Advisory Depth. Operational Results.**

A brand & UI design system for **Hive International, LLC** — a globally engaged operational advisory firm supporting criminal justice, investigations, intelligence, digital forensics, border security, and public safety modernization.

This system gives design agents everything needed to produce on-brand interfaces, decks, capability documents, and marketing assets for Hive: the color and type foundations, the logo and globe-mark library, reusable UI components, and full-screen UI kits.

---

## Brand context

Hive began as a close-knit operational team supporting international law-enforcement and criminal-justice capacity-building programs across complex global environments. The brand reflects a collaborative **"Hive Mind"** approach: disciplined expertise, trusted field relationships, and practical execution in high-consequence environments. Just as transnational criminal networks operate collaboratively across borders, Hive applies an interconnected **network model** — symbolized by its hexagonal globe mark — to build trusted ecosystems of practitioners.

**Domains:** Global Security · Criminal Justice · Operational Advisory
**Audience:** Government, federal agencies, international partners, law enforcement, RFI/RFP evaluators.
**Web:** hiveintl.com · **GSA MAS** 47QRAA25D004V · **UEI** C6QCCKKD7MQ6 · **CAGE** 7K4T0

### Visual identity principles
- Quiet, structured, and mission-credible
- Premium without being decorative
- Modern without feeling transient
- Technical without slipping into generic cyber styling
- Slate-led surfaces with restrained gold emphasis

---

## Sources

This system was derived from Hive's official brand package (`Hive Logo-Branding/`), provided as a read-only mounted folder. Key sources:

- **`Master Branding Guide/Hive International — Master Brand Guide.html`** — the authoritative brand guide (colors, type, logo system, motifs, usage, photography, AI standards).
- **`Digital & Social Media Branding Guide/Brand_Guide/hive_digital_brand_guide.html`** — digital & social standards, GSA badge usage, email signatures, web assets.
- **`Hive Logos/`** — primary (Gold + Charcoal transparent) and secondary logo lockups, plus the globe-icon-only marks, in SVG + PNG.
- **`Digital & Social Media Branding Guide/`** — GSA badges, favicons/PWA icons, social templates, email signatures.

Original brand fonts (Bebas Neue + DM Sans) are free Google Fonts, loaded from the Google Fonts CDN — these are the authentic brand faces, not substitutes.

---

## Content fundamentals

**Voice:** Executive. Direct. Mission-oriented. Operationally fluent. Globally engaged. Always specific to criminal-justice and public-safety contexts.

**How copy is written**
- **Casing:** Sentence case for body and headlines in prose; **UPPERCASE** only for Bebas display titles, section tags, and tracked micro-labels (e.g. `SECTION 05 — TYPOGRAPHY`, `BY THE NUMBERS`).
- **Person:** Speaks about the firm in the third person to clients ("Hive applies…", "Hive supports…"). Avoids casual "we/you" marketing chatter. No first-person singular.
- **Tone:** Confident and measured, never breathless. Proof-backed — leans on measurable outcomes, contract vehicles, and operational evidence rather than adjectives.
- **No emoji. Ever.** Not part of the brand. No exclamation-driven hype.
- **Tagline discipline:** The primary tagline *"Advisory Depth. Operational Results."* anchors covers, title slides, capability statements, and headers. Do not alter, abbreviate, or reorder. Approved sub-taglines exist (e.g. "Embedded operational advisory support", "Network-driven mission execution", "Intelligence-led border security and targeting solutions") — do not invent new ones.

**Example phrasing**
> "Operationally embedded advisory support for complex global security missions."
> "Trusted cross-border partnerships." · "Transnational organized crime disruption and dismantlement."

**The vibe:** A credible federal/defense advisory partner. Quiet authority. Dark, structured, premium. Restraint reads as competence.

---

## Visual foundations

**Color.** Slate-led. The default surface is always slate-family: **Hive Slate `#1B222A`** (base), **Charcoal `#2E3A45`** (cards/panels), **Deep Slate `#141B22`** (nav/footers/depth). **Silver Gray `#B8BCC4`** carries secondary text, dividers, and the globe mark. **Hive Gold `#F2B632`** is accent + emphasis *only* — used sparingly so it keeps its authority; never a fill. **Warm White `#F5F2ED`** is for print/light-mode pages and on-dark text. Imagery is authentic, color-true, and cool/neutral — no artificial warming, no heavy grading; dark overlays (50–70%) when text sits over photography.

**Type.** A locked pairing: **Bebas Neue** for display (covers, section titles, statistics, callouts — wide tracking is a signature) and **DM Sans** for everything else (body, tables, captions; weights 300/400/500/600). **Space Mono** is used for contract codes and tabular identifiers. Never set body copy in Bebas. Digital body minimum 15px (11px for tracked labels); 9pt print minimum.

**Backgrounds & texture.** Whitespace (or "dark-space") is the dominant visual field. The signature texture is a faint **honeycomb/hex mesh** at 5–15% opacity, plus thin **node-line systems** and an oversized **globe watermark** at 4–8%. Never place busy hex texture behind dense text. No gradients as decoration (a subtle slate-to-deep-slate depth wash is acceptable), no full-bleed neon.

**Geometry & corners.** Restrained radii: 3px (inputs/tags), 6px (cards/buttons — the default), 10px (feature cards/modals); pill only for status badges. Cards are charcoal panels on slate with a 1px hairline (`0.07` white) and `shadow-sm`; the signature accent is a **3px gold left-border** on callouts, info blocks, and pull quotes.

**Borders & shadows.** Hairline dividers `rgba(255,255,255,0.07)`; stronger input edges `0.14`. Shadows provide subtle depth only — **never glow, bevel, emboss, or metallic effects** on any brand element. Light-mode pages use a soft `0 1px 3px rgba(27,34,42,0.08)`.

**Animation.** Restrained: short fades and standard eases (`cubic-bezier(.4,0,.2,1)`, 0.15–0.35s). No bounce, no infinite decorative loops, minimal motion on slides.

**Hover & press states.** Hover lifts gold to `#F7C95A` or raises a slate surface to `#38454F`; secondary/ghost controls warm their border to gold. Press deepens gold to `#D99A1C` and may nudge translate (1px), never a heavy scale.

**Transparency & blur.** Used sparingly — faint gold washes (`rgba(242,182,50,0.12)`) for selected rows, controlled dark overlays on photography. No frosted-glass excess.

### Hard "do not"
- Do not redraw, regenerate, vectorize, or recreate the logo (including with AI). Use the official files in `assets/logos/`.
- No cyberpunk/neon/glossy/HUD styling; no glow/bevel/emboss/metallic.
- No emoji; no bluish-purple gradients; no decorative hexagon spam unconnected to the globe.
- Don't make gold a fill or overuse it.

---

## Iconography

- **Globe mark** (`assets/logos/globe_*.svg`) — the core Hive symbol: hexagonal cells resolving into a globe. Available in gold, silver, slate, and branded variants; usable as a structural/watermark accent (4–8% opacity) and as the favicon/app-icon basis.
- **UI icons** — the brand package ships **no custom icon font or SVG icon set.** For interface work, use **[Lucide](https://lucide.dev)** (1.5–2px stroke, rounded joins) via CDN — it matches the brand's quiet, thin-stroke, non-cyber feel. *(Substitution flagged: Hive has no proprietary UI icon library; Lucide is the recommended stand-in. Swap if an official set is later provided.)*
- **No emoji and no unicode-glyph icons** in branded materials.
- **GSA badges** (`assets/badges/`) — official federal contract badges; place on capability statements, email signatures, and footers. Do not recolor or distort.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s the tokens + motifs below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motifs.css`.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`assets/`**
- `logos/` — horizontal & stacked lockups (gold+charcoal primary; gold/slate/silver secondary), globe marks (SVG + PNG).
- `badges/` — GSA Schedule, Contract Holder, 250th badges.
- `favicon/` — favicon.ico + PWA icon.
- `social/` — LinkedIn banner, OG card, stat-template reference.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) rendered in the Design System tab.

**`components/core/`** — reusable React UI primitives (see below). Each has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `@dsCard` per directory.
- `Button`, `Badge`, `Tag`, `Card`, `StatBlock`, `Input`, `Eyebrow`, `InfoBlock`, `Avatar`.

**`ui_kits/`**
- `capability_site/` — full-screen recreation of the Hive marketing/capability website (hero, capability grid, by-the-numbers, contract footer).

**`slides/`** — sample 16:9 slide layouts (title, section divider, by-the-numbers, capability, big quote).

---

## Using this system

1. Link `styles.css` and reference **semantic tokens** (`--surface-card`, `--text-accent`, `--border-accent`), not raw hex.
2. Compose UI from the `components/core` primitives — don't re-implement them.
3. Lead with slate surfaces; spend gold like currency.
4. Pull in real assets (logos, globe mark, GSA badges) — never hand-draw brand marks.
5. Match the voice: executive, specific, proof-backed, no emoji.
