import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET() { return NextResponse.json(await prisma.path.findMany({ select: { id: true, slug: true, title: true, description: true, category: true, lessons: { select: { id: true, title: true, duration: true, order: true }, orderBy: { order: 'asc' } } }, orderBy: { title: 'asc' } })) }
