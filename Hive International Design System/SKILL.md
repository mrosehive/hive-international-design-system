---
name: hive-international-design
description: Use this skill to generate well-branded interfaces and assets for Hive International, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Hive International is a global operational advisory firm (criminal justice, investigations, digital forensics, border security, public safety). Brand is slate-led, premium, mission-credible, with restrained gold emphasis.
user-invocable: true
---

# Hive International — Design System

Read the **README.md** in this skill first — it is the full design guide (brand context, content fundamentals/voice, visual foundations, iconography, and a file manifest). Then explore the other files.

## What's here
- `styles.css` — global entry point; link this one file. It `@import`s all tokens.
- `tokens/` — colors, typography, spacing/radius/shadow, motion, and the hex-mesh motif (CSS custom properties).
- `assets/` — logos (horizontal/stacked, gold+charcoal primary), globe marks, GSA badges, favicon, social refs. **Always copy real assets out — never redraw brand marks.**
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — React UI primitives: `Button, Badge, Tag, Card, StatBlock, Eyebrow, InfoBlock, Input, Avatar`. Each has a `.d.ts` contract and `.prompt.md` usage note.
- `ui_kits/capability_site/` — full marketing/capability website recreation.
- `slides/` — sample 16:9 slide layouts (title, divider, by-the-numbers, capability, big quote).

## Working rules (the essentials)
- **Color:** slate-family surfaces by default (`#1B222A` base, `#2E3A45` cards, `#141B22` depth). Silver `#B8BCC4` for support. **Gold `#F2B632` is accent/emphasis only — spend it sparingly, never as a fill.** Warm White `#F5F2ED` for light/print pages.
- **Type:** Bebas Neue for display (wide tracking), DM Sans for body (300/400/500/600), Space Mono for codes. Never set body in Bebas.
- **Texture:** faint hex mesh (5–15%), node lines, oversized globe watermark (4–8%). Never behind dense text. Tie geometry to the globe mark.
- **No** glow/bevel/emboss/metallic, no neon/HUD/cyberpunk, **no emoji**, no invented taglines (the primary is *"Advisory Depth. Operational Results."*).
- **Voice:** executive, direct, mission-oriented, proof-backed; third person about the firm.
- **Corners:** 3/6/10px; pill for badges only. Cards = charcoal + hairline + soft shadow; signature 3px gold left-rule on callouts.

## How to use it
If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view, referencing `styles.css` and the tokens. If working on production code, copy assets and follow these rules to design as a brand expert.

For UI work, build from `components/core` primitives (don't re-implement them). UI icons: use [Lucide](https://lucide.dev) via CDN (no proprietary Hive icon set exists).

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions, then act as an expert Hive designer who outputs HTML artifacts _or_ production code, depending on the need.
