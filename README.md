# Easybank Landing Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/731bb5f0-13a6-428e-8b86-3f31b7af0a40/deploy-status)](https://app.netlify.com/sites/easybank-react/deploys)

Easy bank landing page created with Astro, React and Tailwind tech stack. This simple project was inspired by a challenge on the frontendmentor [easy-bank-landing-page](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN).

![Preview](./img/preview.jpg)

## 👀 Demo

https://easybank-react.netlify.app/

## 🚀 Getting Started

Before starting, make sure you have [nodejs](https://nodejs.org/en) and [pnpm](https://pnpm.io/) installed.

```sh
# Install requirement dependencies
pnpm i

# Run your local computer
pnpm run dev
```

## ⚙️ Project Structure

```text
/
├── public/
│   ├── img/
│   └── favicon.png
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
