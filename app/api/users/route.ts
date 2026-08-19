import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
const schema = z.object({ email: z.string().email(), name: z.string().min(1).max(80).optional() })
export async function POST(request: Request) { const parsed = schema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ error: 'Valid email required' }, { status: 400 }); const { email, name } = parsed.data; return NextResponse.json(await prisma.user.upsert({ where: { email }, update: { name }, create: { email, name } })) }
