# StudentHub Personas

React + Vite + Tailwind persona landing page.

## Local

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

**Important:** The site must be deployed from **GitHub Actions**, not from a branch.

1. In the repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` (or run the “Deploy to GitHub Pages” workflow manually)

The workflow builds the app and deploys the output. The live site will be at:

**https://bawes-universe.github.io/studenthub-personas/**

If you leave Source as “Deploy from a branch”, GitHub serves the raw repo and the app will show a blank page (the browser requests `/src/main.jsx`, which doesn’t exist in the built output).
