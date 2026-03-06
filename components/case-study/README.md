# Case Study Components

Reusable building blocks for full case study pages. Use these to add new case studies without duplicating layout or styles.

## Adding a new case study

1. **Create a new page** under `app/case-studies/[your-slug]/page.tsx` (e.g. `app/case-studies/my-project/page.tsx`).

2. **Import the components** from `@/components/case-study`:
   - `CaseStudyHero` – title, subtitle, overview, tech stack badges
   - `CaseStudySection` – problem, solution, dashboard, impact (title + body)
   - `CaseStudyPipeline` – vertical pipeline steps (e.g. architecture)
   - `CaseStudyFeatureGrid` – grid of feature cards
   - `CaseStudyCTA` – “Need X?” + button linking to contact/home

3. **Compose the page** with your content. See `app/case-studies/ai-ledger-reconciliation/page.tsx` for a full example.

4. **Link from the homepage** by adding a `ProjectCard` in `app/page.tsx` with `caseStudyLink="/case-studies/your-slug"` so “Learn More” goes to the full case study page.

## Component props

- **CaseStudyHero**: `title`, `subtitle`, `overview`, `techStack[]`, `backHref`, `backLabel`
- **CaseStudySection**: `id?`, `title`, `children`
- **CaseStudyPipeline**: `steps[]`, `description?`
- **CaseStudyFeatureGrid**: `title?`, `features[]` (each: `title`, `description`)
- **CaseStudyCTA**: `title`, `buttonText`, `buttonHref`

Styles use the same design tokens as the rest of the portfolio (neutral-950, blue accents, rounded cards) and work in dark mode.
