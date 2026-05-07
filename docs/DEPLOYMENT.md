# Deployment Guide

## GitHub

1. Create a new GitHub repository.
2. Add this project folder to git.
3. Commit the source files, `package-lock.json`, `.env.example`, and `render.yaml`.
4. Do not commit `node_modules`, `dist`, `.npm-cache`, portable Node folders, logs, or local `.env` files.

## Local Verification

```bash
npm install
npm run build
npm run preview
```

The production build should complete and output compiled files to `dist/`.

## Render Static Site

1. In Render, create a new Static Site from the GitHub repository.
2. Use `npm install && npm run build` as the build command.
3. Use `dist` as the publish directory.
4. Set `NODE_VERSION` to `22`.
5. Add public Vite environment variables from `.env.example` as needed.

## Environment Variables

Only expose client-safe values with the `VITE_` prefix. Do not place Stripe secret keys, webhook secrets, private API keys, customer records, PHI, or sensitive business data in Vite environment variables.
