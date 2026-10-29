# EWEM Dashboard (Environmental Waste & E-Waste Management)

A Next.js static academic portfolio showcasing all assignments, laboratory experiments, presentations, research papers, reports, and coursework for Environmental Waste and E-Waste Management (EWEM).

## 1. Project Architecture

The application is structured for fast static rendering on Vercel without server-side database or backend requirements:

```text
public/
  materials/
    assignments/       # Assignment submissions and problem sets
    experiments/       # Practical writeups and laboratory logs
    presentations/     # Seminars and slide decks
    reports/           # Project reports and document submissions
    spreadsheets/      # Excel calculations, carbon footprint datasets
    research-papers/   # IEEE papers and technical literature
    study-material/    # Course notes and module handouts
    activities/        # Class and campus activities
    projects/          # Term project documentation
  images/
    activities/        # Photo documentation of campaigns
    projects/          # Project screenshots and schematics

src/
  app/                 # Next.js App Router (layout, page, globals.css, not-found)
  components/          # Modular UI components (AssignmentCard, etc.)
  data/                # Centralized, strongly-typed TypeScript content files
  lib/                 # Utilities (path resolvers, styling helpers)
  types/               # TypeScript interfaces (Assignment, Experiment, etc.)
```

## 2. Adding Materials and Coursework

All data is managed locally in structured TypeScript files under `src/data/`:

### How to add or update an assignment:
1. Place the academic document into `public/materials/assignments/` (e.g. `e-waste-tracker.pdf`).
2. Open [`src/data/assignments.ts`](src/data/assignments.ts).
3. Add or update the assignment entry with a stable ID and its relative public path:
   ```typescript
   {
     id: 'ewem-assign-16',
     title: 'Life Cycle Assessment of Consumer Electronics',
     dateLabel: '15 October',
     category: 'LCA / Analysis',
     status: 'Handed in',
     documentPath: '/materials/assignments/e-waste-tracker.pdf',
     tags: ['LCA', 'Electronics'],
   }
   ```
4. If a document has not been uploaded yet, simply omit `documentPath`. The card will gracefully display an upload pending status without breaking.

## 3. Package Scripts

- **Development server**: `npm run dev` (starts on `http://localhost:3000`)
- **Linting**: `npm run lint` (`eslint .`)
- **Type Checking**: `npm run typecheck` (`tsc --noEmit`)
- **Production Build**: `npm run build` (`next build`)
- **Production Preview**: `npm start`

## 4. Deployment to Vercel

The project is preconfigured for automatic, zero-config deployment to Vercel:

1. **Push to GitHub**:
   - Initialize/confirm Git tracking:
     ```bash
     git add .
     git commit -m "feat: complete EWEM dashboard architecture and assignment data"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```
2. **Import into Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New...** ➔ **Project**.
   - Select your GitHub repository.
3. **Framework Preset**:
   - Vercel automatically selects the **Next.js** preset.
   - Root Directory: `./` (or default).
   - Build Command: `next build` (default).
   - Output Directory: `.next` (default).
4. **Deploy**:
   - Click **Deploy**. Vercel will build and assign a public URL (`https://your-project.vercel.app`).

### Repository & Deployment Size Notice
- Git and GitHub work best with files under 50 MB (hard limit: 100 MB per file).
- Vercel deployments support standard asset limits (Serverless deployment bundle max: ~250 MB).
- Avoid committing raw high-resolution video recordings directly into the repository. Compress presentation PDFs and documents appropriately before placing them in `public/materials/`.

