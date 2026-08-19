import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET() { const [users, completed, paths] = await Promise.all([prisma.user.count(), prisma.progress.count(), prisma.path.count()]); return NextResponse.json({ learners: users, completedSprints: completed, learningPaths: paths }) }
