import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET(request: Request) { const url = new URL(request.url); const path = url.searchParams.get('path'); return NextResponse.json(await prisma.sprint.findMany({ where: path ? { path: { slug: path } } : undefined, orderBy: { order: 'asc' } })) }
