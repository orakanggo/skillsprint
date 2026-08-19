import Link from 'next/link'
export default function LearnHome() { return <main><nav><Link href="/dashboard" className="logo">SkillSprint</Link></nav><section className="section"><span className="badge">LEARN</span><h1>Make five minutes count.</h1><p>Choose a path and complete a practical sprint.</p><Link href="/paths" className="button">Browse paths</Link></section></main> }
