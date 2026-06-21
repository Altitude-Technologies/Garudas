# Garudas — Premium E-commerce (Frontend)

React + Vite frontend for **Garudas · A Symbol of Trust & Quality (since 1977)**.
Built MERN-ready: a future `/server` (Express + MongoDB) is already proxied at `/api`.

## Highlights
- **Two-colour system** — Garudas Red (`#E11B22`) + warm cream / ink.
- **Inter** font throughout.
- **Lenis** momentum smooth-scrolling (like bowlfulstore.com); fixed header sits outside the scrolled flow, every section scrolls inside `<main>`.
- **Framer Motion** reveal-on-scroll across all sections.
- **Mega-menu header** (per Menu.png) driven by the product catalogue.
- All product data transcribed from `Product List - Sheet1.pdf` → `src/lib/products.js`.
- **Dummy images** are generated as self-contained SVG "food tiles" (`src/lib/placeholder.js`) — no network needed. Swap for real photos later.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview
```

## Add the real logo
Place `garudas-logo.png` in `/public`. A styled wordmark renders as fallback until then.

## Structure
```
src/
  components/        Logo, Reveal, Header/ (Header + MegaMenu)
  sections/          sections.jsx (all landing sections) + Footer
  hooks/useLenis.js  smooth scroll
  lib/products.js    catalogue from the PDF
  lib/placeholder.js dummy SVG image generator
```

## Next (MERN backend)
Add `/server` with Express + MongoDB (products, cart, orders, auth). The Vite dev
server already forwards `/api/*` to `http://localhost:5000`.
