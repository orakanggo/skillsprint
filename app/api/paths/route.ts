import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET() { return NextResponse.json(await prisma.path.findMany({ include: { lessons: true }, orderBy: { title: 'asc' } })) }
