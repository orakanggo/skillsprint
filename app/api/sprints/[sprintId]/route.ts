import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET(_: Request, { params }: { params: Promise<{ sprintId: string }> }) { const { sprintId } = await params; const sprint = await prisma.sprint.findUnique({ where: { id: sprintId }, select: { id: true, title: true, content: true, question: true, options: true, duration: true, order: true, path: { select: { slug: true, title: true } } } }); if (!sprint) return NextResponse.json({ error: 'Sprint not found' }, { status: 404 }); return NextResponse.json(sprint) }
