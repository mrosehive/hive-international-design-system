# Hive Brand Studio — Design System Playbook

**The single source of truth for producing any Hive product with a visual surface** — general
branding, social media, website, letterhead, business cards, presentations, capability materials
(statements, briefs, case studies, reports, white papers), and the branded visuals on BD work.

This is the marketing/brand analog of the **BD Command Center**: the BD Response Playbook
(`Capture/BD-RESPONSE-PLAYBOOK.md`) governs the **RFI/RFP response process** (already set up and
working — leave it alone); **this** playbook governs **everything else we design.**

This is a **living document** — update it the moment something changes. Anyone (or any Claude
session) producing a branded Hive product reads this **first**.

*All paths are relative to `OneDrive > The HIVE - Documents`, unless a full GitHub URL is given.*

---

## 1. Operating model — how the Brand Studio works

Three pillars, mirroring the BD Command Center:

1. **This playbook** — the process, the rules, the asset map.
2. **The design system + page kit** — the materials (tokens, logos, badges, components) and the
   engine for assembling multi-page products.
3. **The PRODUCT-BRIEF** (`page-kit/PRODUCT-BRIEF.md`) — the one-page kickoff that starts each job.

All product work happens **in SharePoint, via Claude Code** (which edits the OneDrive-synced files
directly). The `hive-international-design` **Skill** auto-loads the system, so you no longer have to
hand-direct Claude to "go find the design system."

### 1a. Source of truth — SharePoint vs GitHub (the rule that ends the confusion)

- **SharePoint is the MASTER.** The folder
  `Graphics & Branding/Hive Logo-Branding/Master Branding Guide/Hive International Design System/`
  **is the design system.** All product work reads from and writes to here.
- **GitHub (`github.com/mrosehive/hive-international-design-system`) is a MIRROR**, used for exactly
  two things: (1) a version-controlled **backup/snapshot**, and (2) a **staging area** for output
  from claude.ai/design. **You never read from GitHub for normal product work.**
- **Sync directions:**
  - Changed the system in SharePoint? → push a snapshot to GitHub (backup). 
  - Used claude.ai/design (it publishes to GitHub)? → review there, **fold the changes into the
    SharePoint master**, then re-push so the two match. SharePoint always wins.
- **"Which version do I use?"** → **Always the SharePoint master folder above. It is THE version.**
  Ignore any other clone, download, or namespaced copy. There is one master.

### 1b. Tool roles

- **Claude Code = the production engine.** Builds and fills products from the system + page kit,
  renders PDFs, updates the website. Works directly on the SharePoint files. **Default for everything.**
- **claude.ai/design = optional, for visual ideation only** — exploring a new look or authoring a new
  design-system component. Its `.dc.html` files are runtime-bound source, **not production
  deliverables** (they were the cause of the earlier "broken/sloppy" renders). Fold its output into
  the SharePoint master per §1a; don't ship it raw.

---

## 2. The product lifecycle — follow these phases every time

**Phase 0 — Route, then brief.** *First, route the request:* **proposal response or marketing/brand
product?** If it isn't unmistakable from the prompt, **ask before doing anything else** — never assume.
Proposal/RFI/RFP responses run via the BD Command Center (`Capture/BD-RESPONSE-PLAYBOOK.md`, separate
and settled); **everything else** runs here. Then fill `page-kit/PRODUCT-BRIEF.md`: product type,
purpose, audience, **content source**, page count / length, **output format** (PDF / web / PPT / image),
**destination folder for the final** (ask up front, so it's built with a home), and deadline.

**Phase 1 — Load the system.** Claude reads this playbook → the system's `README.md` + `CLAUDE.md` →
the page kit. (The Skill auto-loads it; no manual hunting.)

**Phase 2 — Choose type & structure.** Map the product to the catalog (§3). Decide the page set —
for multi-page work, list the page archetypes (cover + N content + divider + back).

**Phase 3 — Assemble.** Create a product folder under `Graphics & Branding/Templates/<Product>/` (or
the relevant location). Copy in the page kit (`page-kit.css` + `assets/` + a copy of
`PRODUCT-TEMPLATE.html`) or the matching `templates/` file so the product is **self-contained**, then
build the page stack.

**Phase 4 — Content.** Drop in real content from **authoritative sources** — same discipline as BD:
- Hive facts (contracts, values, PoP, POCs, course/product titles, past performance) come from the
  **Master PP** (`Capture/__Hive Overview Docs/Past Performance/`) and firm profile. **Never invent**
  any of these. If a fact isn't in an authoritative source, flag it — don't guess.
- GSA **Schedule** badge only (never the blue Contract Holder badge); tagline verbatim; no emoji.

**Phase 4.5 — Lock the content before you build (token discipline).** Iterate the *words* in the
cheapest medium first; build the branded file only **once the content is approved**. This is the
load-bearing efficiency rule — it keeps iteration cheap and the final product clean.
- **Marketing/brand:** draft and revise the copy as **plain text / markdown in the chat** (or a
  `*-DRAFT.md` in the product folder for anything multi-page or multi-reviewer). **Do not build the
  HTML/PDF until the requester says the wording is "locked."**
- **Proposals:** iterate in the **minimally-branded `.docx`** (handles heavy QC and multi-reviewer
  redlines), then stitch into the branded PDF cover + assembly at the very end. *(Owned by the BD
  playbook — unchanged; shown here only so the shared principle is visible.)*
- **Render + visually review the PDF at two moments only: first proof and final.** A wording swap that
  can't change the layout does not need a fresh visual review. **Edit only the changed sections —
  never regenerate a whole file for a small change.**

**Phase 5 — Render & review.** `python3 page-kit/render.py "<product>.html"` → clean multi-page
US-Letter PDF. **Review the PDF** (not the raw HTML — see §6). Iterate and re-render.

**Phase 6 — Finalize & file.**
- Save the product to its home (§3).
- If it's a new **reusable template**, keep the master here in `Graphics & Branding/Templates/`.
- If it's for **BD use**, carry a finalized copy to `Capture/_Templates/` (the *Capture hand-off*).
- If the **design system itself** changed, snapshot it to the GitHub mirror (§1a).

---

## 3. Product catalog

| Product | Build from | Output | Lives in |
|---|---|---|---|
| Quick one-pager / flyer | Page kit (1 `.sheet`) | PDF | `Graphics & Branding/Templates/<name>/` |
| **Capability statement** | `Graphics & Branding/Templates/Capability Statement/` (production template) | PDF | same folder |
| **Capability brief** | Page kit (cover + 1–2 content) | PDF | `Templates/Capability Brief/` |
| Case study | Page kit (cover + content) | PDF | `Templates/` or product folder |
| **Report / white paper** (multi-page) | Page kit (cover + divider + content pages + back) | PDF | product folder |
| Letterhead | `Graphics & Branding/Templates/Hive Letterhead/` | DOCX / PDF | same |
| Slide deck | `…/Design System/templates/slide-deck/` + `slides/` | PPT / PDF | `Templates/Presentations/` |
| **Website update** | `Graphics & Branding/Website/hiveintl-site-PUBLISH/` (same tokens/components) | HTML | the site folder |
| Social graphic | `…/Design System/assets/social/` + tokens | PNG | `Graphics & Branding/` |

**Multi-page is solved by the page kit** (`page-kit/`): each `<div class="sheet">` is one US-Letter
page; stack the pages you need and render. See `page-kit/README.md`.

---

## 4. Brand core — the load-bearing rules

> Full detail is in the system's `README.md`; the hard "never" rules are in `CLAUDE.md`. This is the
> working summary — when in doubt, defer to those files.

- **Color — slate-led.** Default surfaces are slate-family: **Slate `#1B222A`** (base), **Charcoal
  `#2E3A45`** (cards/panels), **Deep Slate `#141B22`** (nav/footers/depth). **Silver `#B8BCC4`**
  carries secondary text, dividers, and the globe mark. **Hive Gold `#F2B632`** is accent + emphasis
  **only — spend it like currency, never a fill.** **Warm White `#F5F2ED`** for print/light pages.
- **Type.** **Bebas Neue** for display (covers, section titles, stats, callouts — wide tracking is a
  signature). **DM Sans** for everything else (body/tables/captions; weights 300/400/500/600).
  **Space Mono** for contract codes and identifiers. **Never set body copy in Bebas.**
- **Logos & globe mark.** **Use the official files only — never redraw, regenerate, vectorize, or
  AI-recreate a brand mark.** Gold + charcoal is the default lockup.
- **GSA badges (`CLAUDE.md` §3).** **Never** the blue **GSA Contract Holder** badge. Use **only the
  GSA Schedule** badge, always with the contract number **GSA MAS 47QRAA25D004V**, in whichever color
  variant suits the background (white / charcoal / gold / silver / warm-white in `assets/badges/`).
- **Text contrast (`CLAUDE.md` §1).** Never black/near-black text on dark surfaces. On dark, body
  text is Warm White (`--text-strong`) or Silver (`--text-muted`); dark text only on warm-white/white
  pages.
- **Texture (`CLAUDE.md` §2).** Subtle honeycomb/hex watermark (~6–12% opacity), large-celled, matching
  the website tessellation (`assets/patterns/honeycomb.svg` or `--hive-hex-sparse`) — never the old
  dense `--hive-hex-mesh`, never behind dense text. Oversized globe watermark at 4–8%.
- **Geometry.** Radii 3px (inputs/tags) / 6px (cards/buttons, default) / 10px (feature cards/modals);
  pill only for status badges. Cards = charcoal + 1px hairline + soft shadow; signature **3px gold
  left-rule** on callouts/info blocks/pull quotes.
- **Voice.** Executive, direct, mission-oriented, proof-backed; speaks of the firm in the **third
  person**. **No emoji, ever.** Primary tagline **"Advisory Depth. Operational Results."** — used
  verbatim; do not invent taglines.
- **Hard do-nots.** No glow/bevel/emboss/metallic; no neon/HUD/cyberpunk; no decorative gradients; no
  hexagon spam; don't make gold a fill.
- **UI icons.** No proprietary Hive icon set — use **Lucide** (1.5–2px stroke) via CDN.

---

## 5. 📍 Brand Path Register — fix a moved asset HERE, once

| What | Path | Notes |
|---|---|---|
| **Design System (master)** | `Graphics & Branding/Hive Logo-Branding/Master Branding Guide/Hive International Design System/` | Authoritative. THE version. |
| **GitHub mirror** | `github.com/mrosehive/hive-international-design-system` | Backup / staging only — never the master (§1a). |
| **Page kit (multi-page engine)** | `…/Hive International Design System/page-kit/` | `page-kit.css`, `PRODUCT-TEMPLATE.html`, `render.py`, `PRODUCT-BRIEF.md`, `assets/`. |
| **Render helper** | `…/page-kit/render.py` | `python3 render.py "<product>.html"` → PDF. |
| **Global stylesheet** | `…/Hive International Design System/styles.css` | Web/component entry point; `@import`s all tokens. |
| **Design tokens** | `…/Hive International Design System/tokens/` | `colors/typography/spacing/fonts/motifs.css`. Canonical token values. |
| **Logos & globe mark** | `…/Hive International Design System/assets/logos/` | Copy real files — never redraw. |
| **GSA badges** | `…/Hive International Design System/assets/badges/` | GSA **Schedule** variants only. |
| **UI components** | `…/Hive International Design System/components/core/` | Button, Badge, Tag, Card, StatBlock, Eyebrow, InfoBlock, Input, Avatar. |
| **Base templates** | `…/Hive International Design System/templates/` | capability-brief/-statement, case-study, client-report, letterhead, slide-deck, white-paper (design source). |
| **Previews** | `…/Hive International Design System/_PREVIEWS/` | Browser/PDF previews of every template & slide. |
| **Working templates** | `Graphics & Branding/Templates/` | Production templates (Capability Statement, Letterhead, PPT, business cards, etc.). |
| **Website (published source)** | `Graphics & Branding/Website/hiveintl-site-PUBLISH/` | Live site source; honeycomb tessellation reference. |
| **Capture template hand-off** | `Capture/_Templates/` | Where a finalized BD/Capture template is carried. |
| **Authoritative Hive facts** | `Capture/__Hive Overview Docs/` (Past Performance, Corporate Overview, Capability Statements) | Master PP & firm profile — the only source for contract facts. |

---

## 6. Reviewing & exporting (avoid the "it looks broken" trap)

- **Review the rendered PDF, not the raw HTML.** Double-clicking a product `.html` opens it as a
  `file://` page; Safari is inconsistent about local stylesheet/font loading and blocks local
  new-tab links, so the source can look unstyled even when it's correct. The **PDF is the deliverable
  and the thing to review.**
- **Export** via `page-kit/render.py` (headless Chrome) or, by hand, **Print ▸ Save as PDF · Letter ·
  margins None · Background graphics ON**.
- Templates authored for print lock the page (`@page { size: Letter; margin: 0 }`) and fit content to
  the sheet — that's why a production one-pager stays one clean page instead of spilling over.

---

## 7. Capture hand-off (BD/proposal products)

The master/working version of every branded template lives here in Graphics & Branding. When a
BD/Capture template is **finalized**, carry a copy to **`Capture/_Templates/`** for the BD workrooms.

- **RFI/RFP response template is settled — do not change it.** The proposal body/cover pipeline in
  `Capture/_Templates/Proposal/` stays as-is.
- The **BD Response Playbook** governs the response *process*; **this** playbook governs the *visual
  brand*. The BD playbook points here for anything visual.

---

## Living-Doc Protocol

- **This playbook** = the standing process, brand rules, and asset/template map. Fix it the moment
  something is stale.
- **The system's `README.md` / `CLAUDE.md` / `SKILL.md`** = authoritative design detail. Change a rule
  there *and* note it here.
- When an asset/template moves: update the **Brand Path Register** (§5) only.
- Push settled system changes to the GitHub mirror (§1a).

*Established 2026-06-19. Expanded 2026-06-19 into the full Brand Studio process (operating model,
source-of-truth rule, product lifecycle, product catalog, page kit). Canonical home:
`…/Hive International Design System/BRAND-PLAYBOOK.md`.*
