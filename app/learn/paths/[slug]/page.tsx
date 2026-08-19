import Link from 'next/link'
export default async function LearnPath({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <main><section className="section"><span className="badge">LEARNING PATH</span><h1>{slug}</h1><p>Your focused lesson sequence.</p><Link href={`/paths/${slug}`} className="button">View lessons</Link></section></main> }
