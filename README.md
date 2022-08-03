# Microfrontends: NextJS Zones

This repo is an exploration of microfrontends using [NextJS Zones](https://nextjs.org/docs/advanced-features/multi-zones).

The general idea is:

- Use [TurboRepo](https://turborepo.org/) to manage a monorepo with multiple NextJS apps and a shared component library.
- The monorepo will have multiple distinct NextJS apps that will be “stitched” together using [NextJS Zone](https://nextjs.org/docs/advanced-features/multi-zones)s.
- We will have a shared component library that can be used by any of the NextJS apps (to showcase TurboRepo’s monorepo goodness).
- We will deploy each NextJS app individually to Vercel, and then use Zones to stitch them together.

## Steps/Tickets to create:

- Repo setup:
  - TurboRepo with pnpm? And sample NextJS app
  - Setup baseline NextJS apps and shared component library. Make sure we can import component library into any of the apps.
  - Prettier/TypeScript with CI job to run checks across all of our packages/apps.
- Deployment:
  - Vercel deployment for each of the apps.
  - NextJS Zones setup
- Application development:
  - Some baseline shared components
  - Public landing site – basic lander, about page, pricing page.
  - Client application page – two pages (todo…)
  - Admin dashboard:
    - Auth setup
    - A few pages to manage data.

## References

- [NextJS Zones](https://nextjs.org/docs/advanced-features/multi-zones)
- [Vercel Monorepo support](https://vercel.com/blog/monorepos)
- [Vercel `with-zones` example](https://github.com/vercel/next.js/tree/canary/examples/with-zones)

Trying to do a thing
