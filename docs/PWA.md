# PWA Setup

CL360 Prompt Engine™ includes Progressive Web App support for mobile-first installation.

## Included

- `public/manifest.webmanifest`
- `public/service-worker.js`
- App icons in `public/icons/`
- Splash and social sharing assets
- Apple mobile web app tags
- Android install metadata
- Offline shell caching
- Touch-friendly mobile navigation

## Testing

1. Run a production build:

```bash
npm run build
npm run preview
```

2. Open the preview URL in Chrome.
3. Use Lighthouse and verify the PWA checks.
4. On mobile, use “Add to Home Screen” or browser install prompts.

The service worker only registers in production builds.

## Notes

The PWA uses SVG icons for lightweight deployment. If an app store or stricter install target requires PNG assets, export `public/icons/icon.svg` to PNG sizes such as `192x192`, `512x512`, and `180x180`.
