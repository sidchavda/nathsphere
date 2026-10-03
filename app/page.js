'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Gauge,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  MapPin,
  Network,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X,
  Zap,
} from 'lucide-react'

const services = [
  { icon: Code2, number: '01', title: 'Custom Application Development', text: 'Purpose-built products that turn complex ideas into dependable experiences your customers love.' },
  { icon: Layers3, number: '02', title: 'Platform Modernization', text: 'Move legacy systems forward with thoughtful improvements, stronger foundations, and less operational drag.' },
  { icon: Workflow, number: '03', title: 'Business Process Automation', text: 'Connect the right systems and automate repetitive work so your team can focus on meaningful progress.' },
  { icon: Network, number: '04', title: 'Scalable System Architecture', text: 'Architecture designed for today’s needs and tomorrow’s growth — reliable, observable, and ready to scale.' },
  { icon: ShieldCheck, number: '05', title: 'Technical Support & Maintenance', text: 'A steady technical partner to improve performance, resolve issues, and keep your product moving.' },
  { icon: UsersRound, number: '06', title: 'Dedicated Development Teams', text: 'An experienced extension of your team, aligned to your goals, rituals, and roadmap.' },
  { icon: Sparkles, number: '07', title: 'AI Agents & Intelligent Automation', text: 'Practical AI-powered workflows and assistants that help teams work faster, make better decisions, and scale their operations.' },
  { icon: Network, number: '08', title: 'Blockchain & Distributed Systems', text: 'Secure, dependable foundations for decentralized products, digital assets, smart contracts, and trusted data flows.' },
]

const principles = [
  '9+ years of backend engineering expertise',
  'Experienced, dedicated development team',
  'Flexible engagement models tailored to you',
  'A focus on scalability, reliability, and performance',
  'A partnership approach that grows with your business',
]

const process = [
  { label: 'Discover', text: 'We listen, ask the right questions, and align on the outcome that matters most.', icon: MessageSquare },
  { label: 'Design', text: 'We map a clear technical path and create a practical plan your team can trust.', icon: Layers3 },
  { label: 'Build', text: 'We deliver in focused increments with clear communication and high engineering standards.', icon: Code2 },
  { label: 'Support & Scale', text: 'We stay close, improve continuously, and help your systems grow confidently.', icon: Sparkles },
]

const models = [
  { name: 'Project-Based', description: 'A focused team for a defined goal, timeline, and outcome.', best: 'Best for a clear product or feature', icon: Zap },
  { name: 'Dedicated Team', description: 'A dependable engineering partner that integrates with your team.', best: 'Best for ongoing product development', icon: UsersRound, featured: true },
  { name: 'Ongoing Support', description: 'Flexible expertise to keep systems healthy and momentum high.', best: 'Best for long-term technical partnership', icon: ShieldCheck },
]

const industries = [
  ['SaaS', BarChart3], ['Fintech', Gauge], ['E-commerce', Layers3], ['Healthcare', ShieldCheck], ['Logistics', Network], ['Startups', Sparkles],
]

const capabilities = [
  { title: 'Backend & APIs', text: 'Reliable services, clean APIs, and data flows built for real product usage.', icon: Code2 },
  { title: 'Frontend Experiences', text: 'Clear, responsive interfaces that make complex workflows feel simple.', icon: Layers3 },
  { title: 'Cloud & DevOps', text: 'Delivery foundations that keep releases predictable, observable, and secure.', icon: Gauge },
  { title: 'Data & Integrations', text: 'Connected systems that turn scattered information into useful action.', icon: Network },
  { title: 'Performance & Reliability', text: 'Practical improvements that make products faster, steadier, and easier to operate.', icon: Zap },
  { title: 'Modernization Strategy', text: 'A measured path from legacy constraints to a healthier technical foundation.', icon: Sparkles },
]

const faqs = [
  { question: 'What type of software projects do you take on?', answer: 'We help with new product builds, platform improvements, backend systems, automation, integrations, and ongoing engineering support. We are especially useful when reliability and scalability matter.' },
  { question: 'Can you work with our existing engineering team?', answer: 'Yes. Our dedicated team model is designed to fit into your existing rituals, tools, and roadmap while bringing additional senior engineering capacity.' },
  { question: 'How do you start a new engagement?', answer: 'We begin with a focused conversation about your goals, constraints, and current system. From there, we recommend the right scope, team shape, and first milestone.' },
  { question: 'Do you support projects after launch?', answer: 'Yes. Ongoing support can include monitoring, performance improvements, maintenance, feature delivery, and technical guidance as your product grows.' },
  { question: 'How do you approach security and reliability?', answer: 'We build security, observability, testing, and failure handling into the engineering process from the beginning instead of treating them as late-stage add-ons.' },
]

const progressStages = [
  { step: '01', title: 'Plan with purpose', text: 'We turn goals and open questions into a clear product and technical direction.', image: 'https://static.prod-images.emergentagent.com/jobs/8a50999c-f930-4eea-bf04-d111b33cb9b3/images/d19b917bae5c0d45e1a5614b35717ce9cd16ebb35c2cea5e6de94bafc95f446d.jpeg', alt: 'Abstract software architecture planning visualization with connected system nodes' },
  { step: '02', title: 'Build in focused steps', text: 'We make progress visible with small releases, thoughtful code, and regular feedback.', image: 'https://static.prod-images.emergentagent.com/jobs/8a50999c-f930-4eea-bf04-d111b33cb9b3/images/04036b9ff04621eb21d8b4f318aede9f15311d86c6f216ce3bf77d2d92644aa3.jpeg', alt: 'Abstract software build visualization with code and connected product modules' },
  { step: '03', title: 'Release with confidence', text: 'We monitor, improve, and support the product so it gets stronger after launch.', image: 'https://static.prod-images.emergentagent.com/jobs/8a50999c-f930-4eea-bf04-d111b33cb9b3/images/8e4dfd93a9c013758d61edf0b903026bbf6181d704819b316662a1b20d43722c.jpeg', alt: 'Abstract cloud deployment and observability visualization with uptime graph' },
]

const testimonials = [
  { quote: 'NathSphere brought the clarity and engineering discipline we needed to move from an idea to a reliable product.', name: 'Product Leader', role: 'Growing SaaS company' },
  { quote: 'The team feels like a true extension of ours. They communicate clearly, own outcomes, and consistently deliver.', name: 'Technology Director', role: 'Digital services business' },
  { quote: 'We finally have an architecture that can support our next stage of growth without slowing the team down.', name: 'Founder', role: 'Early-stage startup' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  const updateForm = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.error || 'Something went wrong.')
      setForm({ name: '', email: '', company: '', message: '' })
      setFormState({ status: 'success', message: data.message })
    } catch (error) {
      setFormState({ status: 'error', message: error.message })
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container flex h-[116px] items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu} aria-label="NathSphere Technolabs home">
            <img src="/logo.png" alt="NathSphere Technolabs logo" className="h-[100px] w-[100px] rounded-2xl object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex" aria-label="Main navigation">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#capabilities" className="transition-colors hover:text-foreground">Capabilities</a>
            <a href="#approach" className="transition-colors hover:text-foreground">Our approach</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:flex">Let&apos;s talk <ArrowRight className="h-4 w-4" /></a>
          <button type="button" className="rounded-md p-2 text-foreground lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="container flex flex-col gap-5 border-t border-border/70 bg-background py-6 text-sm font-medium lg:hidden" aria-label="Mobile navigation"><a href="#services" onClick={closeMenu}>Services</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#capabilities" onClick={closeMenu}>Capabilities</a><a href="#approach" onClick={closeMenu}>Our approach</a><a href="#about" onClick={closeMenu}>About</a><a href="#faq" onClick={closeMenu}>FAQ</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>}
      </header>

      <section id="top" className="relative pt-[116px]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="container grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-semibold tracking-[0.08em] text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/.12)]" /> ENGINEERING PARTNERS FOR AMBITIOUS TEAMS</div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[72px]">Build software that <span className="text-primary">scales</span> with your business<span className="text-primary">.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Reliable, scalable, high-performing solutions built by an experienced engineering team that cares about the details and your outcomes.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary/90">Book a free consultation <ArrowRight className="h-4 w-4" /></a><a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted">Explore our services <ChevronDown className="h-4 w-4" /></a></div>
            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground"><div className="flex -space-x-2"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-bold text-primary-foreground">NS</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-sky-200 text-xs font-bold text-sky-800">9+</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-amber-100 text-xs font-bold text-amber-800">✓</span></div><span>Built on experience. Focused on what&apos;s next.</span></div>
          </div>
          <motion.div
            className="relative mx-auto w-full max-w-[540px] lg:mx-0"
            initial={{ opacity: 0, x: 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute -inset-8 rounded-[42px] bg-gradient-to-br from-cyan-400/20 via-primary/10 to-emerald-400/20 blur-3xl"
              animate={{ opacity: [0.55, 0.95, 0.55], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="relative overflow-hidden rounded-[34px] border border-white/15 bg-[#071126] p-6 text-white shadow-2xl shadow-primary/25"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.015, boxShadow: '0 30px 90px rgba(15, 23, 42, 0.35)' }}
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,.16),transparent_30%)]"
                animate={{ backgroundPosition: ['0% 0%', '20% 12%', '0% 0%'] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative flex items-start justify-between gap-5">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Launch pipeline</p>
                  <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight tracking-[-0.04em] text-white">Your product journey, moving forward.</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">A live-style view of strategy, build, quality, and release momentum.</p>
                </motion.div>
                <motion.span
                  className="shrink-0 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-[11px] font-bold text-emerald-200"
                  animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 0 0 rgba(52,211,153,.22)', '0 0 0 8px rgba(52,211,153,0)', '0 0 0 0 rgba(52,211,153,0)'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Active
                </motion.span>
              </div>
              <div className="relative mt-10">
                <div className="absolute left-6 right-6 top-7 h-px bg-gradient-to-r from-cyan-300/20 via-cyan-300/60 to-emerald-300/20" />
                <motion.div
                  className="absolute left-6 top-[25px] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(34,211,238,.9)]"
                  animate={{ x: [0, 440, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative grid grid-cols-4 gap-3">
                  {[
                    ['01', 'Discover', MessageSquare],
                    ['02', 'Design', Layers3],
                    ['03', 'Develop', Code2],
                    ['04', 'Deploy', Sparkles],
                  ].map(([step, label, Icon], index) => <motion.div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center backdrop-blur transition-colors hover:bg-white/[0.11]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 + index * 0.12 }} whileHover={{ y: -6 }}><motion.span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200" animate={{ y: [0, -4, 0] }} transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.25, ease: 'easeInOut' }}><Icon className="h-5 w-5" /></motion.span><p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{step}</p><p className="mt-1 text-sm font-bold text-white">{label}</p></motion.div>)}
                </div>
              </div>
              <motion.div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300"><span>Release readiness</span><span className="text-emerald-200">94%</span></div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.span className="block h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300" initial={{ width: 0 }} animate={{ width: '94%' }} transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }} />
                </div>
              </motion.div>
              <div className="relative mt-5 grid grid-cols-3 gap-3">
                {[['Fast', 'Delivery'], ['99.9%', 'Reliability'], ['24/7', 'Support']].map(([value, label], index) => <motion.div key={label} className="rounded-2xl bg-white/[0.07] p-3 text-center" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 1.1 + index * 0.1 }}><p className="text-lg font-bold text-white">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p></motion.div>)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="border-y border-border bg-muted/35"><div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:justify-between"><span>9+ Years Experience</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block" /><span>Dedicated Teams</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block" /><span>Flexible Engagement Models</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block" /><span>Scalable Architecture</span></div></div>

      <section id="services" className="container py-24 sm:py-32"><div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">What we do</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Engineering that moves your business forward<span className="text-primary">.</span></h2><p className="mt-5 text-lg leading-8 text-muted-foreground">From your first technical decision to your next stage of growth, we bring senior engineering thinking to every part of the journey.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, number, title, text }) => <article key={number} className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><span className="text-xs font-bold text-muted-foreground/50">{number}</span></div><h3 className="mt-7 text-lg font-bold tracking-[-0.02em]">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><span className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">Learn more <ArrowRight className="h-3.5 w-3.5" /></span></article>)}</div></section>

      <section id="capabilities" className="border-y border-border bg-muted/30"><div className="container py-24 sm:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Technology capabilities</p><h2 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">The right depth for the work ahead<span className="text-primary">.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">A practical engineering toolkit, shaped around your product instead of a one-size-fits-all stack.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ title, text, icon: Icon }) => <article key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><div><h3 className="font-bold tracking-[-0.02em]">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></div></section>

      <section id="approach" className="bg-[#101a39] text-white"><div className="container grid gap-16 py-24 sm:py-32 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Why NathSphere</p><h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">The confidence to build what&apos;s next<span className="text-cyan-300">.</span></h2><p className="mt-6 max-w-md text-base leading-7 text-slate-300">Good software is more than code. It&apos;s a clear path from business goals to an experience that works beautifully and keeps working.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition-colors hover:text-white">Work with us <ArrowRight className="h-4 w-4" /></a></div><div className="grid gap-4 sm:grid-cols-2">{principles.map((principle, index) => <div key={principle} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-5"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-300"><Check className="h-3.5 w-3.5" /></span><div><span className="mb-1 block text-xs font-bold text-cyan-300/70">0{index + 1}</span><p className="text-sm font-medium leading-6 text-slate-200">{principle}</p></div></div>)}</div></div></section>

      <section className="container py-24 sm:py-32"><div className="text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">A better way to build</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">From first conversation to lasting impact</h2></div><div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-5">{process.map(({ label, text, icon: Icon }, index) => <div key={label} className="relative text-center md:text-left"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary md:mx-0"><Icon className="h-6 w-6" /></div><span className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index + 1}</span><h3 className="mt-2 text-xl font-bold">{label}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>{index < process.length - 1 && <ArrowRight className="absolute right-0 top-6 hidden h-5 w-5 text-border md:block" />}</div>)}</div></section>

      <section id="progress" className="border-y border-border bg-muted/30"><div className="container py-24 sm:py-32"><div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Progress you can see</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A thoughtful path from idea to impact<span className="text-primary">.</span></h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Our work stays visible at every stage, so you always know what is happening, what is next, and where your product is headed.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{progressStages.map(({ step, title, text, image, alt }) => <article key={step} className="group overflow-hidden rounded-2xl border border-border bg-card"><div className="relative aspect-[16/10] overflow-hidden bg-muted"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#101a39]/90 text-xs font-bold text-cyan-300">{step}</span></div><div className="p-6"><h3 className="text-lg font-bold tracking-[-0.02em]">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></div></section>

      <section className="bg-muted/40"><div className="container py-24 sm:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Engagement models</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Built around how you work<span className="text-primary">.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Choose the level of partnership that fits your goals today. Adjust as your needs evolve.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{models.map(({ name, description, best, icon: Icon, featured }) => <article key={name} className={`relative rounded-2xl border p-7 ${featured ? 'border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20' : 'border-border bg-card'}`}><div className={`flex h-11 w-11 items-center justify-center rounded-xl ${featured ? 'bg-white/15' : 'bg-primary/10 text-primary'}`}><Icon className="h-5 w-5" /></div><h3 className="mt-7 text-xl font-bold">{name}</h3><p className={`mt-3 text-sm leading-6 ${featured ? 'text-primary-foreground/75' : 'text-muted-foreground'}`}>{description}</p><div className={`mt-8 border-t pt-5 text-xs font-semibold ${featured ? 'border-white/20 text-primary-foreground/75' : 'border-border text-muted-foreground'}`}>{best}</div>{featured && <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Most flexible</span>}</article>)}</div></div></section>

      <section id="about" className="container grid gap-14 py-24 sm:py-32 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div className="relative mx-auto w-full max-w-sm"><div className="absolute -inset-4 rounded-[28px] bg-primary/10 blur-2xl" /><div className="relative rounded-[24px] bg-gradient-to-br from-primary to-[#263f91] p-8 text-white shadow-2xl shadow-primary/20"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-2xl font-black">NS</div><p className="mt-24 text-2xl font-bold tracking-tight">Technology is better when it feels human.</p><div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5 text-xs text-white/70"><span>NathSphere Technolabs</span><span>Since 2015</span></div></div></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">A little about us</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Senior thinking. Genuine partnership.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">NathSphere Technolabs is led by a Lead Backend Engineer with 9+ years of experience building systems that businesses can depend on. We started with a simple belief: you shouldn&apos;t have to choose between moving fast and building well.</p><p className="mt-4 text-base leading-7 text-muted-foreground">Today, we help ambitious teams make confident technical decisions, deliver meaningful products, and create a foundation for sustainable growth.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold transition-colors hover:border-primary hover:text-primary">Start a conversation <ArrowRight className="h-4 w-4" /></a></div></section>

      <section className="border-y border-border bg-muted/30"><div className="container py-20"><div className="text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Where we help</p><h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Experience across industries</h2></div><div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{industries.map(([name, Icon]) => <div key={name} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-3 py-6 text-center transition-colors hover:border-primary/30"><Icon className="h-6 w-6 text-primary" /><span className="text-sm font-semibold">{name}</span></div>)}</div></div></section>

      <section id="projects" className="container py-24 sm:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Selected projects</p><h2 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Practical software for real-world momentum<span className="text-primary">.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">A glimpse of the product thinking and engineering craft we bring to every engagement.</p></div><div className="mt-14 grid gap-6 lg:grid-cols-3">{[
        { title: 'NostroMarkets', category: 'Trading platform', description: 'A secure trading platform built for real-time market access, portfolio visibility, and confident decision-making across active financial workflows.', image: '/nostro.webp', alt: 'NostroMarkets trading platform interface' },
        { title: 'Brilliant Chair', category: 'E-commerce website', description: 'A polished online furniture store designed to showcase products clearly, simplify browsing, and support a smooth path from discovery to purchase.', image: '/briliant.webp', alt: 'Brilliant Chair ecommerce website interface' },
        { title: 'Operations Command Center', category: 'Custom platform development', description: 'A focused workspace for teams to see performance, spot risks, and act faster.', image: 'https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Analytics dashboard showing charts and performance data' },
        { title: 'Fintech Insights Platform', category: 'Scalable system architecture', description: 'A dependable analytics foundation built to make complex financial data easier to use.', image: 'https://images.unsplash.com/photo-1587401511935-a7f87afadf2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHxmaW50ZWNoJTIwYW5hbHl0aWNzfGVufDB8fHxibHVlfDE3ODk1NDM5MzZ8MA&ixlib=rb-4.1.0&q=85', alt: 'Blue financial analytics interface with data visualizations' },
        { title: 'Logistics Workflow Suite', category: 'Automation and integrations', description: 'Connected workflows that help operations teams keep every moving part on track.', image: 'https://images.unsplash.com/photo-1584472666879-7d92db132958?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYW5hbHl0aWNzfGVufDB8fHxibHVlfDE3ODk1NDM5MzZ8MA&ixlib=rb-4.1.0&q=85', alt: 'Modern business dashboard with logistics and performance metrics' },
      ].map((project) => <article key={project.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"><div className="relative aspect-[16/10] overflow-hidden bg-muted"><img src={project.image} alt={project.alt} loading="lazy" className="h-full w-full bg-white object-contain p-3 transition duration-500 group-hover:scale-105" /><div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#101a39]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">{project.category}</div></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{project.category}</p><h3 className="mt-3 text-xl font-bold tracking-[-0.02em]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Discuss a similar project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></div></article>)}</div></section>
      <section className="container py-24 sm:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Words from the journey</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A partner you can count on<span className="text-primary">.</span></h2></div><span className="text-sm text-muted-foreground">What our clients will say next</span></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{testimonials.map(({ quote, name, role }) => <article key={name} className="rounded-2xl border border-border bg-card p-7"><Quote className="h-7 w-7 text-primary/40" /><p className="mt-6 min-h-[112px] text-base leading-7 text-foreground/80">&quot;{quote}&quot;</p><div className="mt-6 border-t border-border pt-5"><p className="text-sm font-bold">{name}</p><p className="mt-1 text-xs text-muted-foreground">{role}</p></div></article>)}</div></section>

      <section id="faq" className="border-y border-border bg-muted/30"><div className="container grid gap-12 py-24 sm:py-32 lg:grid-cols-[.75fr_1.25fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Frequently asked</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A few helpful answers<span className="text-primary">.</span></h2><p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">Still have a question? Send us a note and we&apos;ll give you a clear answer based on your project.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Ask us directly <ArrowRight className="h-4 w-4" /></a></div><div className="divide-y divide-border rounded-2xl border border-border bg-card px-6">{faqs.map(({ question, answer }, index) => <div key={question}><button type="button" className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="-mt-1 pb-5 pr-8 text-sm leading-6 text-muted-foreground">{answer}</p>}</div>)}</div></div></section>

      <section id="connect" className="container py-24 sm:py-32"><div className="text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Let&apos;s connect</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Choose the way that works for you<span className="text-primary">.</span></h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Whether you have a quick question or a bigger idea, we&apos;re happy to start with a thoughtful conversation.</p></div><div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3"><a href="#contact" className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><MessageSquare className="h-5 w-5" /></span><h3 className="mt-6 text-xl font-bold">Talk to us</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Share what you&apos;re building and find the right next step with our engineering team.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Start a conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></a><a href="mailto:chavda2991sandeep@gmail.com" className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span><h3 className="mt-6 text-xl font-bold">Write to us</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Send a few details by email and we&apos;ll get back to you with a clear, useful response.</p><span className="mt-6 inline-flex items-center gap-2 break-all text-sm font-bold text-primary">chavda2991sandeep@gmail.com <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></span></a><a href="#contact" className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span><h3 className="mt-6 text-xl font-bold">Visit us</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Planning an in-person conversation? Contact us first and we&apos;ll arrange a convenient meeting by appointment.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Arrange a meeting <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></a></div></section>

      <section id="contact" className="container pb-24 sm:pb-32"><div className="overflow-hidden rounded-[28px] bg-[#101a39] text-white shadow-2xl shadow-primary/10"><div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-[.85fr_1.15fr] lg:p-16"><div className="relative"><div className="absolute -left-28 -top-28 h-64 w-64 rounded-full bg-primary/30 blur-3xl" /><div className="relative"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Let&apos;s build something dependable</p><h2 className="max-w-lg text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Let&apos;s discuss how we can support your team<span className="text-cyan-300">.</span></h2><p className="mt-6 max-w-md leading-7 text-slate-300">Tell us a little about where you are and where you want to go. We&apos;ll bring thoughtful questions and practical ideas to the conversation.</p><div className="mt-9 flex items-center gap-3 text-sm text-slate-300"><Mail className="h-4 w-4 text-cyan-300" /><a href="mailto:chavda2991sandeep@gmail.com" className="hover:text-white">chavda2991sandeep@gmail.com</a></div></div></div><form onSubmit={submitForm} className="relative rounded-2xl bg-white p-6 text-foreground sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Your name<input required name="name" value={form.name} onChange={updateForm} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Alex Morgan" /></label><label className="text-sm font-semibold">Email address<input required type="email" name="email" value={form.email} onChange={updateForm} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="alex@company.com" /></label></div><label className="mt-5 block text-sm font-semibold">Company <span className="font-normal text-muted-foreground">(optional)</span><input name="company" value={form.company} onChange={updateForm} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your company" /></label><label className="mt-5 block text-sm font-semibold">How can we help?<textarea required name="message" value={form.message} onChange={updateForm} rows={4} className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell us about your project or challenge..." /></label><button disabled={formState.status === 'loading'} type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-wait disabled:opacity-60">{formState.status === 'loading' ? 'Sending...' : 'Send enquiry'} {formState.status !== 'loading' && <Send className="h-4 w-4" />}</button>{formState.message && <p role="status" className={`mt-4 text-sm ${formState.status === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{formState.message}</p>}</form></div></div></section>

      <footer className="border-t border-border"><div className="container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between"><div><a href="#top" className="flex items-center gap-3"><img src="/logo.png" alt="NathSphere Technolabs logo" className="h-16 w-16 rounded-2xl object-contain" /></a><p className="mt-3 text-sm text-muted-foreground">Engineering reliable software for what&apos;s next.</p></div><div className="flex items-center gap-5 text-sm text-muted-foreground"><a href="mailto:chavda2991sandeep@gmail.com" className="transition-colors hover:text-foreground" aria-label="Email NathSphere"><Mail className="h-4 w-4" /></a><a href="#contact" className="transition-colors hover:text-foreground" aria-label="Contact NathSphere"><MessageSquare className="h-4 w-4" /></a><a href="#top" className="transition-colors hover:text-foreground" aria-label="Back to top"><ArrowRight className="h-4 w-4 -rotate-90" /></a></div><p className="text-xs text-muted-foreground sm:text-right">© {new Date().getFullYear()} NathSphere Technolabs. All rights reserved.</p></div></footer>
    </main>
  )
}

export default App