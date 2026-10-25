import Link from 'next/link'
import { ArrowRight, BookOpen, Clock3, Code2, Layers3, Search, ShieldCheck, Sparkles, Zap } from 'lucide-react'

const posts = [
  {
    category: 'Architecture',
    title: 'Designing a Next.js application that stays fast as it grows',
    excerpt: 'A practical guide to route boundaries, server rendering, caching, and component ownership for production Next.js teams.',
    readTime: '8 min read',
    date: 'Oct 18, 2025',
    icon: Layers3,
  },
  {
    category: 'AI engineering',
    title: 'Where retrieval-augmented generation actually helps a business',
    excerpt: 'How to choose useful RAG workflows, structure source content, measure answer quality, and avoid adding AI where search is enough.',
    readTime: '10 min read',
    date: 'Oct 09, 2025',
    icon: Sparkles,
  },
  {
    category: 'Performance',
    title: 'The frontend performance budget we use before launch',
    excerpt: 'A repeatable checklist for JavaScript, images, fonts, interaction latency, and the page-level signals users actually feel.',
    readTime: '7 min read',
    date: 'Sep 26, 2025',
    icon: Zap,
  },
  {
    category: 'Security',
    title: 'Building safer contact forms and public API endpoints',
    excerpt: 'Validation, rate limiting, secret handling, error boundaries, and logging patterns that keep small web APIs dependable.',
    readTime: '9 min read',
    date: 'Sep 11, 2025',
    icon: ShieldCheck,
  },
  {
    category: 'Product engineering',
    title: 'Turning an internal workflow into a product people enjoy using',
    excerpt: 'A field-tested approach for mapping the real workflow, reducing friction, and shipping a focused first version without shortcuts.',
    readTime: '6 min read',
    date: 'Aug 29, 2025',
    icon: Code2,
  },
  {
    category: 'Data systems',
    title: 'MongoDB data modeling for dashboards and operational tools',
    excerpt: 'Choosing document boundaries, indexes, projections, and aggregation strategies for responsive business software.',
    readTime: '11 min read',
    date: 'Aug 15, 2025',
    icon: Layers3,
  },
  {
    category: 'DevOps',
    title: 'A calmer deployment pipeline for small product teams',
    excerpt: 'The essential checks, environments, rollback path, and observability a team needs before shipping continuously.',
    readTime: '8 min read',
    date: 'Jul 30, 2025',
    icon: Zap,
  },
  {
    category: 'UX engineering',
    title: 'Why polished interfaces still need strong empty states',
    excerpt: 'Designing loading, empty, error, and success states that explain the system and keep users moving forward.',
    readTime: '5 min read',
    date: 'Jul 12, 2025',
    icon: Sparkles,
  },
  {
    category: 'Integrations',
    title: 'Making third-party integrations reliable after the demo',
    excerpt: 'Retries, idempotency, webhooks, timeouts, and reconciliation for integrations that need to survive real operations.',
    readTime: '9 min read',
    date: 'Jun 27, 2025',
    icon: Code2,
  },
  {
    category: 'Technical leadership',
    title: 'How to choose the right amount of software complexity',
    excerpt: 'A decision framework for balancing speed, maintainability, team context, and the risks hidden inside premature abstraction.',
    readTime: '7 min read',
    date: 'Jun 06, 2025',
    icon: BookOpen,
  },
]

const topics = ['All notes', 'Architecture', 'AI engineering', 'Performance', 'Security', 'Product engineering']

export const metadata = {
  title: 'Technical Journal | NathSphere Technolabs',
  description: 'Practical technical notes on software architecture, AI engineering, performance, security, and product development.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#111827]">
      <header className="border-b border-white/70 bg-white/65 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="NathSphere Technolabs home">
            <img src="/logo.png" alt="NathSphere Technolabs logo" className="h-11 w-11 rounded-full bg-white object-contain p-1 ring-1 ring-slate-200" />
            <span className="text-sm font-black tracking-[-0.03em] text-slate-950 sm:text-base">NathSphere</span>
          </Link>
          <nav className="flex items-center gap-4 text-xs font-black text-slate-500 sm:gap-7 sm:text-sm" aria-label="Blog navigation">
            <Link href="/" className="transition-colors hover:text-slate-950">Home</Link>
            <Link href="/#services" className="hidden transition-colors hover:text-slate-950 sm:inline">Services</Link>
            <Link href="/#work" className="hidden transition-colors hover:text-slate-950 sm:inline">Work</Link>
            <a href="#articles" className="transition-colors hover:text-slate-950">Articles</a>
            <a href="#topics" className="hidden transition-colors hover:text-slate-950 sm:inline">Topics</a>
            <Link href="/#contact" className="rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-indigo-600">Let's talk</Link>
          </nav>
        </div>
      </header>
 
      <section className="relative border-b border-white/60 px-4 py-20 sm:px-8 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(129,140,248,.28),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(45,212,191,.24),transparent_30%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-indigo-600">NathSphere technical journal</p>
            <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.07em] text-slate-950 sm:text-7xl">Useful thinking for building better software.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Practical notes from the work: architecture decisions, product lessons, AI workflows, performance checks, and the details that make software reliable.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#articles" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-600">Read the articles <ArrowRight className="h-4 w-4" /></a>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-6 py-3.5 text-sm font-black text-slate-800 transition hover:-translate-y-0.5 hover:bg-white">Work with us</Link>
            </div>
          </div>
          <div className="rounded-[36px] border border-white/80 bg-white/65 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c1222] text-cyan-200"><BookOpen className="h-7 w-7" /></div>
              <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Field notes</span>
            </div>
            <h2 className="mt-8 text-3xl font-black tracking-[-0.05em] text-slate-950">Build with clarity, not noise.</h2>
            <p className="mt-4 leading-7 text-slate-600">Every note is written for teams making real products under real constraints. Fewer buzzwords. More decisions, tradeoffs, and useful patterns.</p>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 text-center"><div><p className="text-2xl font-black text-slate-950">10</p><p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">Articles</p></div><div><p className="text-2xl font-black text-slate-950">6</p><p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">Topics</p></div><div><p className="text-2xl font-black text-slate-950">5–11</p><p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">Minutes</p></div></div>
          </div>
        </div>
      </section>

      <section id="topics" className="container scroll-mt-8 px-4 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-center gap-3"><span className="mr-2 text-sm font-black text-slate-500">Browse by topic</span>{topics.map((topic, index) => <a key={topic} href="#articles" className={`rounded-full px-4 py-2 text-xs font-black transition ${index === 0 ? 'bg-slate-950 text-white' : 'border border-white/80 bg-white/60 text-slate-600 hover:bg-white'}`}>{topic}</a>)}</div>
      </section>

      <section id="articles" className="container scroll-mt-8 px-4 pb-24 sm:px-8 sm:pb-32">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Latest notes</p><h2 className="text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">Ideas worth shipping.</h2></div><div className="hidden items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-bold text-slate-500 sm:flex"><Search className="h-4 w-4" /> 10 technical articles</div></div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map(({ category, title, excerpt, readTime, icon: Icon }, index) => (
            <article key={title} className={`group flex flex-col rounded-[32px] border border-white/80 bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-indigo-950/10 ${index === 0 ? 'md:col-span-2 xl:col-span-2' : ''}`}>
              <div className="flex items-start justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0c1222] text-cyan-200 transition-colors group-hover:bg-indigo-600 group-hover:text-white"><Icon className="h-6 w-6" /></div><span className="rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-indigo-700">{category}</span></div>
              <div className="mt-8 flex-1"><h3 className="max-w-2xl text-2xl font-black leading-tight tracking-[-0.045em] text-slate-950 sm:text-3xl">{title}</h3><p className="mt-4 max-w-2xl leading-7 text-slate-600">{excerpt}</p></div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 text-xs font-black text-slate-500"><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{readTime}</span><span className="inline-flex items-center gap-1 text-indigo-600 transition group-hover:gap-2">Read note <ArrowRight className="h-4 w-4" /></span></div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/70 bg-[#0c1222] px-4 py-10 text-white sm:px-8"><div className="container flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><p className="text-sm font-bold text-slate-300">NathSphere Technolabs · Technical journal</p><Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-cyan-200 hover:text-white">Back to NathSphere <ArrowRight className="h-4 w-4" /></Link></div></footer>
    </main>
  )
}
