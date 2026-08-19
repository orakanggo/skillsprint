import { describe, expect, it } from 'vitest'
import { GET } from '../app/api/health/route'
describe('health endpoint', () => { it('reports ok', async () => { const response = GET(); expect(response.status).toBe(200); expect((await response.json()).status).toBe('ok') }) })
