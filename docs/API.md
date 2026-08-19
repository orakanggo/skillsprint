# API

`GET /api/health` returns service health.

`GET /api/paths` lists paths and lessons.

`GET /api/learning-paths` lists public learning paths and lesson metadata.

`GET /api/learning-paths/:slug` returns one path with learner-safe lesson content; answers are excluded.

`GET /api/sprints?path=engineering` lists sprints without answers.

`GET /api/sprints/:sprintId` returns one learner-safe sprint; the correct answer is excluded.

`GET /api/dashboard/learner?userId=...` returns learner completion progress.

`GET /api/dashboard/team` returns aggregate team metrics.

`POST /api/users` accepts `{ email, name? }`.

`GET /api/progress?userId=...` lists completion records.

`POST /api/sprints/:sprintId/complete` accepts `{ userId, answer }`. Returns 400 for invalid input, 404 for unknown sprint, 422 for incorrect answer, and 200 for successful idempotent completion.
