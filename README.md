# RuntimeX — Website

Marketing site for [RuntimeX](https://runtimex.garzuu.com), a technical dive planning app for iOS and Android.

## Pages

- `index.html` - Landing page
- `support.html` - Support and FAQ
- `privacy.html` - Privacy policy

## Stack

Pure HTML, CSS, and JavaScript with no build step or framework. Static assets are served directly by Cloudflare Workers from the repo root via `wrangler.jsonc`. Fonts load from Google Fonts.

## Structure

- `index.html`, `support.html`, `privacy.html`
- `style.css`, `app.js`
- `og-image.svg`, `logo.png`, `favicon.png`, `apple-touch-icon.png`
- `wrangler.jsonc`

## Report a bug or request a feature

Open an [issue](https://github.com/garzuu/runtimex.garzuu.com/issues) or start a [discussion](https://github.com/garzuu/runtimex.garzuu.com/discussions) — all feedback is welcome here.

## Deploy

Deployments serve the repo root directly. Pushes to `main` are expected to publish the latest static site.

## License

Dual-licensed under [MIT](LICENSE) and [Apache 2.0](LICENSE-APACHE).  
Copyright 2026 [garzuu](https://github.com/garzuu)
