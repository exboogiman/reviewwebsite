# The State of Speech-to-Text in 2026 — Benchmark Review

A single-page review by **Aurora Reviews** presenting the 2026 English speech-to-text (STT) landscape, based on FLEURS Word Error Rate (WER) measurements from [Speko Benchmarks](https://benchmarks.speko.ai). Built with **Next.js** (App Router).

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create and serve a production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js      # fonts (next/font), metadata, no-flash theme init
  page.js        # the full article (client component)
  globals.css    # all styles, theming via CSS custom properties
components/
  Bars.js        # data-driven animated bar chart
```

## Features

- **Editorial / data-journalism aesthetic** — strong typographic hierarchy, generous whitespace, monospace accents for all numeric data.
- **Responsive, mobile-first** — sticky numbered table-of-contents sidebar on desktop that collapses into a slide-in drawer on mobile.
- **Smooth-scroll navigation** with scroll-spy that highlights the active section, plus a top scroll-progress bar.
- **Dark-mode toggle** — persists to `localStorage`, respects the OS color-scheme preference on first load, and applies before paint to avoid a flash.
- **Two pure CSS charts** (no chart library):
  - WER leaderboard bar chart (scaled to a 6% max, leader highlighted).
  - Full-turn latency chart with a 500ms human-perception threshold marker and range bars.
- **Accessible** — semantic landmarks, ARIA labels on controls, and reduced-motion support.

## Sections

1. Overview
2. Why FLEURS?
3. English STT Leaderboard
4. What the Numbers Mean
5. The Provider Selection Problem
6. Latency
7. Multilingual STT
8. Recommendations by Use Case
9. Conclusion

## Tech

- [Next.js](https://nextjs.org) (App Router) + React.
- Fonts: Newsreader (headings), Inter (body), IBM Plex Mono (numeric data) loaded via `next/font/google`.
- Theming driven by CSS custom properties on the `html[data-theme]` selectors.

## Data sources

Benchmark data sourced from [benchmarks.speko.ai](https://benchmarks.speko.ai) and [speko.ai](https://speko.ai) (accessed June 2026). Full-turn latency comparison based on published figures from Vapi, Retell AI, Bland AI, ElevenLabs Agents, and Speko documentation. FLEURS dataset: Conneau et al., 2022, Google Research.
