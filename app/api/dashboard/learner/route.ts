import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET(request: Request) { const userId = new URL(request.url).searchParams.get('userId'); if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 }); const progress = await prisma.progress.findMany({ where: { userId }, select: { sprintId: true, completedAt: true, sprint: { select: { title: true, path: { select: { slug: true, title: true } } } } }, orderBy: { completedAt: 'desc' } }); return NextResponse.json({ userId, completedCount: progress.length, progress }) }
