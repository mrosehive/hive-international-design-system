# Hive Page Kit

Build **multi-page** Hive products (capability statements/briefs, reports, one-pagers) that render
to clean US-Letter PDFs. This solves the "templates are only covers" problem: a product is just a
stack of **page blocks**.

## Files
- `page-kit.css` — print-tuned, self-contained stylesheet (brand tokens + page/section classes).
- `PRODUCT-TEMPLATE.html` — starter with one of every page archetype. Copy it to start a product.
- `render.py` — HTML → PDF helper (headless Chrome; Letter, no margins, backgrounds on).
- `assets/` — brand assets (logos, globe, honeycomb, GSA Schedule badges). Copy with the product.

## The model
Each `<div class="sheet">` = exactly one US-Letter page. Keep the pages you need, duplicate/delete
freely. Page archetypes provided:

| Class | Page |
|---|---|
| `.sheet.cover` | Slate cover (logo, eyebrow, big title, subtitle, footer) — also used for back/contact |
| `.sheet.content` | Warm-white content page (running header + footer); use `.cols-asym` / `.cols-2` for columns |
| `.sheet.divider` | Deep-slate section divider with oversized numeral |

Reusable blocks: `.statband`/`.stat`, `.callout`, `.pullquote`, `.card-pp`, `ul.hexlist`,
`.databox`, `.gsa-badge`, `table.hive`, `.seclabel`, `.h1/.h2/.eyebrow/.lead/.body-text`.

## Make a product
1. Copy this folder (or just `page-kit.css` + `assets/` + `PRODUCT-TEMPLATE.html`) into the product's
   folder so it travels self-contained.
2. Rename the HTML, keep/duplicate/delete `.sheet` pages, replace every `[[ ... ]]` field.
3. **Content rules:** pull Hive facts from authoritative sources (Master PP, firm profile). Never
   invent contract facts, titles, or past performance. GSA **Schedule** badge only — never the blue
   Contract Holder badge. Tagline *"Advisory Depth. Operational Results."* verbatim. (See
   `../BRAND-PLAYBOOK.md`.)
4. Render: `python3 render.py "MyProduct.html"` → `MyProduct.pdf` next to it.
   (Or in the browser: Print ▸ Save as PDF · Letter · margins **None** · **Background graphics ON**.)

## Notes
- The kit is **self-contained** so products render anywhere. Tokens here mirror the design system
  `tokens/*.css` — if those change, update the `:root` block here too.
- For **web** products (site updates), don't use this kit — edit the site in
  `Graphics & Branding/Website/` using the same tokens/components.
