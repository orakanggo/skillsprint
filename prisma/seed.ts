import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const data = [
    ['engineering','Modern TypeScript','Ship safer, cleaner TypeScript with practical daily exercises.'],
    ['product','Product Discovery','Turn customer insight into focused product decisions.'],
    ['ai','AI & Data Foundations','Build an effective mental model for modern AI systems.']
  ]
  for (const [category, title, description] of data) {
    const path = await prisma.path.upsert({ where: { slug: category }, update: {}, create: { slug: category, title, description, category } })
    for (let i = 1; i <= 3; i++) await prisma.sprint.upsert({ where: { id: `${category}-${i}` }, update: {}, create: { id: `${category}-${i}`, pathId: path.id, title: `Sprint ${i}: ${title}`, content: `A focused five-minute lesson about ${title.toLowerCase()}. Apply one idea immediately.`, question: 'What makes a daily sprint effective?', answer: 'A focused action completed consistently.', options: JSON.stringify(['A focused action completed consistently.','A long uninterrupted lecture.','Collecting more tools.']), order: i } })
  }
}
main().finally(() => prisma.$disconnect())
