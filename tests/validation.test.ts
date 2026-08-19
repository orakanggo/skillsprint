import { describe, expect, it } from 'vitest'
import { z } from 'zod'
const email = z.string().email()
describe('validation', () => { it('accepts valid email', () => expect(email.safeParse('learner@example.com').success).toBe(true)); it('rejects invalid email', () => expect(email.safeParse('not-an-email').success).toBe(false)) })
