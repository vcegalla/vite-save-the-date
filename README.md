# Save the Date

A Vite + React + TypeScript + Tailwind CSS starter project.

## Available commands

- `npm install` to install dependencies
- `npm run dev` to start the development server
- `npm run build` to build for production
- `npm run preview` to preview the production build

## Project structure

- `src/` - application source
- `src/main.tsx` - entry point
- `src/App.tsx` - main app component
- `src/index.css` - Tailwind CSS entry

## Deploy to GitHub Pages

This project is configured to deploy automatically with GitHub Actions using `.github/workflows/deploy-pages.yml`.

### One-time setup

1. Push this repository to GitHub.
2. In your GitHub repo, go to `Settings` -> `Pages`.
3. Under **Build and deployment**, set **Source** to `GitHub Actions`.

### Deploy

1. Commit and push to the `main` branch.
2. GitHub Actions will run the `Deploy to GitHub Pages` workflow.
3. After it completes, your site will be available at your GitHub Pages URL.

### Local check before pushing

- Build exactly what Pages deploys:

  - `npm run build:pages`
