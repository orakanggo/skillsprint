import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { completeSprint } from '@/lib/services/completion'
export async function POST(request: Request, { params }: { params: Promise<{ sprintId: string }> }) { const { sprintId } = await params; const result = await completeSprint(prisma, sprintId, await request.json().catch(() => null)); return NextResponse.json(result.body, { status: result.status }) }
