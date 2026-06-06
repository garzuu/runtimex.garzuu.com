# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static site served by Cloudflare Workers. The main entry points are root-level files:
- `index.html` for the marketing homepage
- `support.html` and `privacy.html` for secondary pages
- `style.css` for layout and visual design
- `app.js` for lightweight UI behavior
- `logo.png`, `favicon.png`, `apple-touch-icon.png`, and `og-image.svg` for branding assets

There is no nested `src/` tree or build pipeline in the repo. Keep new pages and assets in the repository root unless the project structure changes.

## Build, Test, and Development Commands
Use Wrangler for local development and deployment:
- `npx wrangler dev` runs the site locally with Cloudflare assets handling.
- `npx wrangler deploy` publishes the current root directory as the site.
- `npx wrangler deploy --dry-run` validates a release without publishing.

There are no repo-defined test scripts or package manager tasks.

## Coding Style & Naming Conventions
Use plain HTML, CSS, and vanilla JavaScript.
- Indent with two spaces.
- Keep semicolons in JavaScript.
- Prefer descriptive, kebab-case class names in CSS and HTML, such as `hero-title` or `feature-card`.
- Use lowercase, descriptive filenames for new assets.

Match the existing style: semantic HTML, small focused CSS sections, and simple DOM code without frameworks.

## Testing Guidelines
No automated test suite is configured. Before opening a PR, manually verify:
- The homepage renders correctly at desktop and mobile widths.
- Navigation links jump to the right sections.
- Animations and scroll-driven behavior in `app.js` still work.
- New assets load correctly and do not break social previews.

If you add behavior that can be exercised in isolation, include a lightweight test or reproducible manual check in the PR description.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages, often prefixed by the change type, for example `Update README.md` or `feat/...`. Keep commits focused and descriptive.

Pull requests should include:
- A clear summary of the change and why it matters
- Links to related issues or discussions when applicable
- Screenshots or short recordings for visual changes
- Notes about any manual verification performed

## Security & Configuration Tips
Do not commit secrets or environment-specific credentials. Cloudflare settings live in `wrangler.jsonc`; update it only when the deployment configuration actually changes.
