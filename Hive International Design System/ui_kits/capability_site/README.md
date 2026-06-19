# Capability Site — UI Kit

A high-fidelity recreation of the **Hive International** marketing / capability website, built entirely from the design-system primitives. It demonstrates the brand's slate-led surfaces, restrained gold emphasis, hex-mesh texture, globe watermark, and Bebas/DM Sans pairing in a real product context.

## Surfaces
- **`SiteNav.jsx`** — sticky deep-slate nav with horizontal logo, uppercase links, and a primary "Request Briefing" CTA.
- **`Hero.jsx`** — slate hero with hex texture + oversized globe watermark, eyebrow, oversized Bebas headline (gold second line), lead copy, dual CTAs, and GSA contract identity.
- **`Capabilities.jsx`** — filterable grid of the six operational capability domains (built on `Card` + `Tag`); cards open a detail overlay.
- **`Numbers.jsx`** — deep-slate "By the Numbers" band using `StatBlock` with gold dividers.
- **`ContactFooter.jsx`** — deep-slate footer with stacked logo, tagline, GSA badges, link columns, and contract codes.
- **`Overlays.jsx`** — capability detail modal + a "Request a Briefing" form with validation and a success state.

## Interactions
- Filter capabilities by tag.
- Click any capability card → detail modal.
- "Request Briefing" (nav, hero, or modal) → briefing form; submit validates the email and shows a confirmation.

## Run
Open `index.html`. It loads React + Babel + the compiled `_ds_bundle.js` (two levels up), then mounts the surfaces. All brand assets are referenced from `../../assets/`.

> Recreation only — content is representative. Replace stat figures and copy with cleared, real values before external use.
