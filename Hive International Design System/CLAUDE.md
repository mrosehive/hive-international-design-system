# Hive International Design System — Project Rules

Persistent rules for every artifact produced in this project (templates, UI kits, slides, cards, components).

## 1. Text contrast — never black on dark
Never use black or near-black (`--text-on-light`, slate, charcoal) text on dark slate/charcoal/deep-slate backgrounds. On dark surfaces, body text is **Hive Warm White `#F5F2ED` (`--text-strong`)** or **Silver `#B8BCC4` (`--text-muted`)**; gold is accent only. Dark text (`--text-on-light`) is permitted **only** on warm-white/white surfaces (print/proposal body pages). When in doubt, add an explicit light fallback: `color: var(--text-strong, #F5F2ED)`.

## 2. Honeycomb / hex backgrounds — match the website
Any honeycomb/hex watermark must use the **website landing-page tessellation** (hiveintl.com): the seamless edge-to-edge honeycomb saved at `assets/patterns/honeycomb.svg` (token-free) — or `--hive-hex-sparse` for a sleeker, sparser variant. Keep it subtle (opacity ~6–12%), large-celled, never behind dense text. Do **not** use the old dense `--hive-hex-mesh` with connector lines on new work.

## 3. GSA badge usage
- **Never** use the blue **GSA Contract Holder** badge on any product. Remove it wherever it appears.
- Use **only the GSA Schedule** badge, always accompanied by the contract number (**GSA MAS 47QRAA25D004V**).
- Render the GSA Schedule badge in whichever Hive color theme best suits its background. Pre-generated variants live in `assets/badges/`:
  - `gsa_schedule.png` — white (for dark slate/charcoal/photography)
  - `gsa_schedule_charcoal.png` — charcoal (for warm-white/light pages)
  - `gsa_schedule_gold.png` — Hive gold (accent contexts)
  - `gsa_schedule_silver.png` — silver (subtle on dark)
  - `gsa_schedule_warmwhite.png` — warm white (for deep-slate footers)
