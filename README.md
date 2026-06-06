# plannerx.garzuu.com

Static marketing site for [PlannerX](https://github.com/garzuu/planner_app) — a technical dive planning app for iOS and Android.

Live at **[plannerx.garzuu.com](https://plannerx.garzuu.com)**

## Pages

| File | URL |
|------|-----|
| `index.html` | Landing page — hero, features, algorithms, platforms, download |
| `privacy.html` | Privacy policy |
| `support.html` | Support, FAQ, GitHub links |

## Stack

- Pure HTML / CSS / JS — no build step, no framework
- Hosted on Cloudflare Workers (static assets)

## Assets

| File | Description |
|------|-------------|
| `logo.png` | 128×128 app icon (nav logo) |
| `favicon.png` | 32×32 favicon |
| `apple-touch-icon.png` | 180×180 iOS home-screen icon |
| `og-image.svg` | 1200×630 Open Graph / Twitter Card image |

## Deploy

Cloudflare Workers auto-deploys from `main` via `wrangler.jsonc`.

## License

Dual-licensed under [MIT](LICENSE) and [Apache 2.0](LICENSE-APACHE).  
Copyright 2025 [garzuu](https://github.com/garzuu)
