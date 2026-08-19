import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
const schema = z.object({ userId: z.string().min(1), sprintId: z.string().min(1) })
export async function GET(request: Request) { const id = new URL(request.url).searchParams.get('userId'); if (!id) return NextResponse.json({ error: 'userId required' }, { status: 400 }); return NextResponse.json(await prisma.progress.findMany({ where: { userId: id }, include: { sprint: { include: { path: true } } }, orderBy: { completedAt: 'desc' } })) }
export async function POST(request: Request) { const parsed = schema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ error: 'Invalid progress payload' }, { status: 400 }); const { userId, sprintId } = parsed.data; const sprint = await prisma.sprint.findUnique({ where: { id: parsed.data.sprintId } }); if (!sprint) return NextResponse.json({ error: 'Sprint not found' }, { status: 404 }); return NextResponse.json(await prisma.progress.upsert({ where: { userId_sprintId: { userId, sprintId } }, update: {}, create: { userId, sprintId } })) }
