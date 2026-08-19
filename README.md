# SkillSprint

Next.js 15, TypeScript, Prisma, SQLite, Zod, Vitest.

## Setup

SQLite is stored at `data/skillsprint.db`; `data/.gitkeep` is tracked while the database and journal files are ignored.

```bash
npm install
cp .env.example .env
npm run db:migrate
npm run db:seed
npm run dev
```

## Routes

- `/` marketing landing page
- `/onboarding` learner onboarding
- `/dashboard` learning hub
- `/learn/[slug]` path lessons
- `/learn/[slug]/[sprintId]` sprint detail
- `/settings` account settings
- `/api/users`, `/api/paths`, `/api/sprints`, `/api/progress`

## Verification

`npm run typecheck`, `npm run lint`, `npm test`, `npm run build`
