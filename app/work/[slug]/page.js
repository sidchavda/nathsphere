import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { getProject, projects } from '../../../lib/projects'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  return project
    ? { title: `${project.title} | NathSphere Technolabs`, description: project.text }
    : { title: 'Project not found | NathSphere Technolabs' }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#111827]">
      <header className="border-b border-white/70 bg-white/65 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="NathSphere Technolabs home">
            <img src="/logo.png" alt="NathSphere Technolabs logo" className="h-11 w-11 rounded-full bg-white object-contain p-1 ring-1 ring-slate-200" />
            <span className="text-sm font-black tracking-[-0.03em] text-slate-950 sm:text-base">NathSphere</span>
          </Link>
          <nav className="flex items-center gap-4 text-xs font-black text-slate-500 sm:gap-7 sm:text-sm" aria-label="Project navigation">
            <Link href="/" className="transition-colors hover:text-slate-950">Home</Link>
            <Link href="/#work" className="transition-colors hover:text-slate-950">All work</Link>
            <Link href="/blog" className="transition-colors hover:text-slate-950">Blogs</Link>
            <Link href="/#contact" className="rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-indigo-600">Let's talk</Link>
          </nav>
        </div>
      </header>

      <section className="relative border-b border-white/60 px-4 py-16 sm:px-8 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(129,140,248,.28),transparent_31%),radial-gradient(circle_at_84%_20%,rgba(45,212,191,.24),transparent_32%)]" />
        <div className="container relative">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-black text-slate-500 transition hover:text-slate-950"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-indigo-600">{project.type}</p>
              <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.075em] text-slate-950 sm:text-8xl">{project.title}</h1>
              <p className="mt-8 text-xl font-bold leading-8 text-slate-700">{project.eyebrow}</p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{project.overview}</p>
              <Link href="/#contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-600">Discuss a similar project <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="overflow-hidden rounded-[40px] border border-white/80 bg-white/65 p-3 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
              <img src={project.image} alt={`${project.title} project preview`} className="h-auto w-full rounded-[30px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-6 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-[34px] bg-[#0c1222] p-8 text-white shadow-2xl shadow-slate-950/15 sm:p-10"><p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">What it solves</p><h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.055em]">Useful software for a real operating problem.</h2><p className="mt-6 leading-7 text-slate-300">{project.outcome}</p></div>
        <div className="rounded-[34px] border border-white/80 bg-white/65 p-8 shadow-sm backdrop-blur-xl sm:p-10"><p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-600">Core capabilities</p><h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-950">Designed around the work that matters.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{project.capabilities.map((capability) => <div key={capability} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 text-sm font-bold text-slate-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />{capability}</div>)}</div></div>
      </section>

      <section className="container px-4 pb-24 sm:px-8 sm:pb-32"><div className="flex flex-col items-start justify-between gap-6 rounded-[36px] border border-white/80 bg-white/65 p-8 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:p-10"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Next step</p><h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950">Have a similar challenge?</h2></div><div className="flex flex-wrap gap-3"><Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-indigo-600">Start a conversation <ArrowRight className="h-4 w-4" /></Link><Link href="/#work" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-black text-slate-800 transition hover:bg-slate-50">Explore more work <ExternalLink className="h-4 w-4" /></Link></div></div></section>
    </main>
  )
}
