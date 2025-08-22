# Paper & Pen Co. — Stationery Web App

A simple stationery storefront built with React, TypeScript, and Vite. Includes product catalog, cart state, and basic routing.

## Setup

```bash
npm install
npm run dev
```

- Dev server: http://localhost:5173
- Build: `npm run build`
- Preview build: `npm run preview`

## Scripts

- `dev`: Start Vite dev server
- `build`: Type-check and build for production
- `preview`: Preview the production build locally

## Project Structure

```
stationery-app/
  src/
    context/
      CartContext.tsx        # Cart provider and hook
    data/
      products.ts            # Product catalog data and types
    App.tsx                  # Routes and pages (Home, Products, Cart)
    App.css                  # App styles (layout, components)
    main.tsx                 # App bootstrap with Router and CartProvider
    index.css                # Base styles and theme
  index.html                 # App entry
  vite.config.ts             # Vite config
```

## Notes

- Images are represented by a placeholder; add real images under `public/` and reference via `imageUrl` in `src/data/products.ts`.
- Cart totals update as items are added/removed.
