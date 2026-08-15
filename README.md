# 3D Portfolio Template

A minimal, responsive portfolio starter built with Vite, React, TypeScript, React Three Fiber, Drei, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build
```

## Editing content

- Update project cards in `src/data/projects.ts`.
- Update the skills list in `src/data/skills.ts`.
- Replace the copy and links in `src/App.tsx`.
- Tweak the color system in the CSS custom properties at the top of `src/index.css`.

The hero is intentionally isolated in `src/components/HeroScene.tsx`, making it a straightforward place to introduce Drei `ScrollControls` later.

## Deployment

The site automatically deploys to GitHub Pages on every push to `main`. You can also start a deployment manually from the Actions tab.

Before the first deployment, open the repository on GitHub and select **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

Once deployed, the site will be available at:

`https://adhithimaran.github.io/portfolio/`
