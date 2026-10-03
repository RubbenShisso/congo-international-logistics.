# Congo International Logistics SARL — Website

Multi-page marketing website for **Congo International Logistics SARL**, a shipping, freight, cargo and trading company based in Kinshasa, DRC. *Connecting Congo to the World.*

Built by [Anchor Noir Studios](https://www.anchornoirstudios.co.za/).

Live: https://congo-international-logistics.vercel.app

## Pages

| Page | File |
| --- | --- |
| Home (banner-style hero, services overview, tracking) | `src/pages/index.html` |
| About (mission, vision, values, offices) | `src/pages/about.html` |
| Services (all 8 services in detail) | `src/pages/services.html` |
| Cargo calculator (CBM / chargeable weight) | `src/pages/calculator.html` |
| FAQ | `src/pages/faq.html` |
| Contact & quote form | `src/pages/contact.html` |

## Structure

```
build.js              assembles the pages into dist/
src/partials/         layout, header and footer shared by every page
src/pages/            one file per page (starts with a --- title/description/page --- block)
src/static/           CSS, JavaScript and images, copied as-is
  styles.css          base design
  interactive.css     animations and interactive components
  pages.css           home hero, page headers and multi-page blocks
  mobile.css          phone and tablet refinements
  script.js           translations (EN/FR), forms, calculator, scroll effects
design/banner.png     original banner the home page is based on
```

To change the menu or footer, edit `src/partials/header.html` or `footer.html` once — every page picks it up.

## Build & run locally

No dependencies are needed, only Node.js:

```bash
node build.js
```

Then open `dist/index.html`, or serve the `dist` folder (for example `npx http-server dist`).

## Deploying

Vercel builds the site automatically (`vercel.json` runs `node build.js` and serves `dist/` with clean URLs such as `/about`). Every push to `main` on GitHub redeploys the live site.
