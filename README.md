# Portfolio

Personal/hiring portfolio site built with Next.js, Tailwind CSS, and TypeScript.

## Editing content

All text content lives in [content/site.ts](content/site.ts) — edit that file to replace
the `[bracketed placeholders]` with your real name, bio, projects, skills, and experience.
No need to touch component code for content changes.

Add your résumé PDF at `public/resume/resume.pdf` (see `public/resume/PLACE_RESUME_HERE.txt`).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Railway

1. Push this repo to GitHub.
2. In Railway, create a new project → **Deploy from GitHub repo** → select this repo.
3. Railway auto-detects Next.js via Nixpacks and runs `npm run build` / `npm start` — no
   extra config needed.
4. Once deployed, add a custom domain under the service's **Settings → Networking**.

Every push to the connected branch triggers a new deploy automatically.
