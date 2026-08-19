import './globals.css'
export const metadata = { title: 'SkillSprint — Practical Microlearning', description: 'Master high-value skills in five-minute daily sprints.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
