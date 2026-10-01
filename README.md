# Movie SPA

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Local development

Copy `.env.example` to `.env.local` and set `TMDB_API_TOKEN`. Run `npx vercel dev` to use the `/api/movies` serverless function locally.

## Deploy on Vercel

Import the repository into Vercel and select the Vite framework preset. Use `npm run build` as the build command and `dist` as the output directory. Add `TMDB_API_TOKEN` under Project Settings > Environment Variables for the environments you use, then redeploy. The SPA route fallback is configured in `vercel.json`.
