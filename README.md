# Luxe Development — A2Z MKTG Pitch Site

A static pitch microsite proposing a new website for **Luxe Development Inc.** (luxury custom home builder + renovator, Lemont IL / Chicago's western suburbs).

**Live:** deployed on Vercel · **Repo:** GitHub (A2ZMKTG)

## What's inside
- **`index.html`** — proposal hub (start here)
- **7 homepage concepts** — `01-editorial` · `02-cinematic` · `03-method` · `04-portfolio` · `05-local-authority` · `06-heritage` · `07-architect`. Same brand system, seven strategies, all tuned to the luxury-home aesthetic.
- **`strategy.html`** — the in-depth "#1 rankings" strategy: money keywords (real Google volumes), competitor gap analysis, the 5-pillar method, timeline.
- **`packages.html`** — the 3 build packages (Starter / Standard / Premium) with full visual site maps + pricing.

## Stack
Pure static HTML/CSS/JS — zero build step, zero dependencies. Shared brand system in `luxe-system.css`; self-hosted fonts (`/fonts`, no external requests); AI-generated architectural imagery in `/images`.

## Run locally
Any static server, e.g.:
```
python -m http.server 4700
```
then open http://localhost:4700

## Deploy
Static — Vercel serves the repo root as-is (framework preset: Other, no build command). Pushing to the connected GitHub repo triggers a new Vercel deployment.

## Notes
- Photography is AI-generated **placeholder** imagery standing in for Luxe's real project photos.
- Reviewer names, project names and figures (20+ yrs, sq ft) are **illustrative** — confirm real numbers with the client before any public use.
- Keyword volumes on the strategy page: Google Ads Keyword Planner, Illinois, 2026 (banded/approximate).
- Forms and filters are visual only (no backend wired).

Prepared by A2Z MKTG · June 2026.
