# Mojin — Motion Intelligence Platform

> Fine-tune spring physics, particle effects, and motion curves. Export studio-quality video from your browser.

[![Live Demo](https://img.shields.io/badge/Live_Demo-mojin.app-8b5cf6?style=flat-square)](https://thewinterprogrammer.github.io/Mojin/)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=flat-square)](LICENSE)
[![Made with Remotion](https://img.shields.io/badge/Powered_by-Remotion-06b6d4?style=flat-square)](https://remotion.dev)

---

## Overview

Mojin is a browser-based motion design platform that wraps [Remotion](https://remotion.dev) in a polished, interactive editor. Creators pick a template, tweak physics and particle parameters via live sliders, and export a frame-perfect video — no After Effects, no local render farm.

The platform is structured as a **static frontend** (pure HTML/CSS/JS) that will connect to a Remotion Lambda render backend. The current repo contains the full marketing site and editor UI shell.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Landing page — hero, stats bar, how-it-works, features, live demo, templates, pricing |
| `gallery.html` | Template gallery — 12-card grid with category filters |
| `pricing.html` | Dedicated pricing page — plan cards, comparison table, FAQ, CTA |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Video rendering** | [Remotion](https://remotion.dev) + Remotion Lambda (server-side) |
| **Particle system** | Custom WebGL / Canvas2D GPU particle engine (`js/particles.js`) |
| **Frontend** | Vanilla JavaScript — no framework, no build step |
| **Fonts** | Kiona (display) · Inter (body) · JetBrains Mono (params) |
| **Icons** | [RemixIcon 4.5](https://remixicon.com) via CDN |
| **Styling** | CSS custom properties + glass morphism design system |

---

## Design System

The design language is **dark glass morphism** — everything lives on a pure-black canvas with layered frosted-glass surfaces.

### Colour Tokens

```css
--blue:   #3b82f6   /* primary accent  */
--cyan:   #06b6d4   /* secondary       */
--purple: #8b5cf6   /* featured / hero */
--pink:   #ec4899   /* highlight       */
--grad:   linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)
```

### Surface Tokens

```css
--glass:        rgba(255,255,255,0.04)
--glass-blur:   blur(20px)
--glass-border: 1px solid rgba(255,255,255,0.08)
--surface:      rgba(255,255,255,0.04)
--surface-hover:rgba(255,255,255,0.07)
```

### Typography

- **Display headings** → `Kiona` (custom TTF, loaded via `@font-face`)
- **Body / UI** → `Inter` (Google Fonts)
- **Code / params** → `JetBrains Mono` (Google Fonts)

### Key Components

- `.glass-card` — frosted glass container with hover lift
- `.btn-primary` — full gradient pill button with glow shadow
- `.btn-ghost` — transparent pill with glass backdrop
- `.appear` / `.appear.visible` — scroll-driven fade-up animation
- `.pricing-card.featured` — gradient border ring via CSS mask trick

---

## Local Development

No build step required. Just open the files in a browser:

```bash
# Clone the repo
git clone https://github.com/TheWinterProgrammer/Mojin.git
cd Mojin

# Open in browser (macOS)
open index.html

# Or use any static server
npx serve .
# → http://localhost:3000
```

All assets are self-contained — the only external dependencies are Google Fonts and RemixIcon CDN links, so an internet connection is needed for those.

---

## Project Structure

```
Mojin/
├── index.html          # Landing page
├── gallery.html        # Template gallery
├── pricing.html        # Pricing page
├── css/
│   ├── style.css       # Full design system
│   └── favicon-placeholder.css  # TODO: replace with real favicon
├── js/
│   ├── particles.js    # Constellation particle canvas (hero bg)
│   ├── main.js         # Nav scroll, appear animations, demo sliders, i18n
│   ├── lang.js         # EN + DE string bundles
│   └── lang-base.js    # i18n engine
├── fonts/
│   └── Kiona-Regular.ttf
├── images/             # Template previews, screenshots
└── components/         # Shared HTML partials (WIP)
```

---

## Roadmap

- [ ] Connect Remotion Lambda render API
- [ ] Auth layer (Clerk or Supabase)
- [ ] Live editor page (`editor.html`) with embedded Remotion Player
- [ ] Template SDK + docs page
- [ ] Real favicon set
- [ ] i18n: expand to FR, ES, JP
- [ ] Analytics (Plausible)

---

## Live Demo

🔗 **[thewinterprogrammer.github.io/Mojin](https://thewinterprogrammer.github.io/Mojin/)**

*(Replace with production URL when deployed)*

---

## Credits

Built by **[Lunexo Labs](https://www.instagram.com/lunexolabs)** · [@TheWinterProgrammer](https://github.com/TheWinterProgrammer)

Powered by [Remotion](https://remotion.dev) — the framework for programmatic video.

---

## License

MIT © 2026 Mojin / Lunexo Labs
