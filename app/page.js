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

const navItems = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['About', '#about'],
  ['FAQ', '#faq'],
]

const services = [
  { icon: Code2, title: 'Custom software development', text: 'Tailored web apps, internal tools, dashboards, and business platforms built around the way your team actually works.', tags: ['Web apps', 'Dashboards', 'Platforms'] },
  { icon: Layers3, title: 'Elegant website & UI design', text: 'Cool, premium, responsive interfaces that make your brand feel modern while keeping every action clear.', tags: ['UI/UX', 'Next.js', 'Design systems'] },
  { icon: Network, title: 'Backend, APIs & integrations', text: 'Secure services, clean APIs, data flows, payments, third-party integrations, and automation that stay dependable.', tags: ['APIs', 'Data', 'Automation'] },
  { icon: Gauge, title: 'Cloud, DevOps & performance', text: 'Deployment, monitoring, scaling, and optimization so your product feels fast and stable under real usage.', tags: ['Cloud', 'CI/CD', 'Performance'] },
  { icon: Sparkles, title: 'AI agents & smart workflows', text: 'Practical AI assistants and workflow systems that help teams move faster without adding operational noise.', tags: ['AI agents', 'Chatbots', 'RAG'] },
  { icon: ShieldCheck, title: 'Maintenance & support', text: 'Long-term technical care for updates, fixes, security, uptime, feature growth, and platform health.', tags: ['Support', 'Security', 'Reliability'] },
]

const stats = [
  ['9+', 'years engineering production systems'],
  ['30+', 'digital products and platforms'],
  ['6', 'core software service areas'],
  ['1', 'team from idea to support'],
]

const process = [
  { icon: MessageSquare, title: 'Listen', text: 'We learn the business goal, audience, workflow, constraints, and what success should look like.' },
  { icon: Workflow, title: 'Shape', text: 'We turn scattered ideas into a clean experience, practical architecture, and a focused delivery roadmap.' },
  { icon: Code2, title: 'Craft', text: 'We design and build in visible increments with clean code, careful details, and direct communication.' },
  { icon: Zap, title: 'Evolve', text: 'We launch, monitor, improve, and support the product so it keeps feeling reliable as your business grows.' },
]

const work = [
  { title: 'NostroMarkets', type: 'Trading platform', image: '/nostro.webp', text: 'A refined trading experience with real-time visibility, clear portfolio workflows, and secure product foundations.' },
  { title: 'Brilliant Chair', type: 'E-commerce website', image: '/briliant.webp', text: 'A polished storefront that presents products beautifully and gives shoppers a smoother path from browse to purchase.' },
  { title: 'Operations command center', type: 'Custom platform', image: 'https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', text: 'A business dashboard concept for seeing performance, spotting risks, and taking action from one elegant workspace.' },
]

const industries = [
  ['SaaS', BarChart3],
  ['Fintech', Gauge],
  ['E-commerce', Layers3],
  ['Healthcare', ShieldCheck],
  ['Logistics', Network],
  ['Startups', Sparkles],
]

const faqs = [
  { question: 'Can you make our website look more premium?', answer: 'Yes. We redesign structure, visuals, spacing, copy, responsiveness, and conversion flow so the site feels elegant, modern, and trustworthy.' },
  { question: 'Do you build full software products too?', answer: 'Yes. We build websites, dashboards, portals, APIs, internal tools, automation workflows, AI assistants, and scalable custom platforms.' },
  { question: 'Can you work with our existing system?', answer: 'Yes. We can improve, modernize, integrate, or extend existing software without forcing a full rebuild unless the current foundation requires it.' },
  { question: 'Do you support after launch?', answer: 'Yes. We can continue with maintenance, monitoring, security updates, feature delivery, performance improvement, and technical support.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionLabel({ children, light = false }) {
  return (
    <p className={`mb-4 text-xs font-black uppercase tracking-[0.24em] ${light ? 'text-cyan-200' : 'text-indigo-600'}`}>
      {children}
    </p>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  const closeMenu = () => setMenuOpen(false)

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
      setFormState({ status: 'success', message: data.message || 'Thanks. We will contact you soon.' })
    } catch (error) {
      setFormState({ status: 'error', message: error.message })
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
        <div className="container flex h-16 items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 shadow-[0_18px_60px_rgba(15,23,42,.10)] backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu} aria-label="NathSphere Technolabs home">
            <img src="/logo.png" alt="NathSphere Technolabs logo" className="h-11 w-11 rounded-full bg-white object-contain p-1 ring-1 ring-slate-200" />
            <span className="hidden text-sm font-black tracking-[-0.03em] text-slate-950 sm:block">NathSphere</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-500 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-slate-950">{label}</a>
            ))}
          </nav>

          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 sm:flex">
            Let's talk <ArrowRight className="h-4 w-4" />
          </a>

          <button type="button" className="rounded-full border border-slate-200 bg-white p-2 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="container mt-2 flex flex-col gap-4 rounded-[28px] border border-white/70 bg-white/90 p-6 text-sm font-bold text-slate-700 shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-screen pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(129,140,248,.34),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(45,212,191,.28),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(251,191,36,.18),transparent_34%)]" />
        <div className="absolute left-1/2 top-28 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-white/50 bg-white/25 blur-3xl" />

        <div className="container relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }} className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,.12)]" />
              Elegant software service studio
            </div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.075em] text-slate-950 sm:text-7xl lg:text-[96px]">
              Cool digital products, crafted with calm precision.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              NathSphere Technolabs designs and builds premium websites, custom software, APIs, dashboards, AI workflows, and scalable platforms with an elegant, modern service experience.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-2xl shadow-slate-950/20 transition-all hover:-translate-y-1 hover:bg-indigo-600">
                Start your project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/60 px-7 py-4 text-sm font-black text-slate-900 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white">
                See the style <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 26 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-8 top-10 z-10 hidden rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Studio score</p>
              <p className="mt-2 text-4xl font-black tracking-[-0.08em] text-slate-950">96%</p>
              <p className="mt-1 text-xs font-bold text-slate-500">Launch ready</p>
            </div>

            <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-white/55 p-4 shadow-[0_30px_100px_rgba(15,23,42,.16)] backdrop-blur-2xl">
              <div className="rounded-[32px] bg-[#0c1222] p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">NathSphere OS</p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">Service cockpit</h2>
                  </div>
                  <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">Elegant</span>
                </div>

                <div className="mt-6 grid gap-3">
                  {['Brand website redesign', 'Custom platform build', 'API and automation layer'].map((item, index) => (
                    <motion.div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.07] p-4" animate={{ x: [0, index === 1 ? 4 : -4, 0] }} transition={{ duration: 4.5 + index, repeat: Infinity, ease: 'easeInOut' }}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-sm font-black text-cyan-200">0{index + 1}</span>
                        <span className="font-bold text-slate-100">{item}</span>
                      </div>
                      <Check className="h-5 w-5 text-emerald-200" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {stats.slice(0, 3).map(([value, label]) => (
                    <div key={value} className="rounded-2xl bg-white/[0.07] p-4 text-center">
                      <p className="text-xl font-black text-white">{value}</p>
                      <p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container -mt-4 pb-20">
        <div className="grid gap-3 rounded-[32px] border border-white/70 bg-white/65 p-4 shadow-sm backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl bg-white/70 p-6">
              <p className="text-4xl font-black tracking-[-0.06em] text-slate-950">{value}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="container py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl">Sophisticated software services for serious growth.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">A cleaner, cooler service presentation: premium visuals outside, reliable engineering inside.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, text, tags }, index) => (
            <motion.article key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: index * 0.04 }} className="group rounded-[34px] border border-white/70 bg-white/65 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-indigo-950/10">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0c1222] text-cyan-200 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-2xl font-black tracking-[-0.04em] text-slate-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => <span key={tag} className="rounded-full bg-slate-950/[0.04] px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="work" className="py-20 sm:py-28">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl">Calm interfaces. Sharp business utility.</h2>
            </div>
            <p className="max-w-md leading-7 text-slate-600">A portfolio section designed like a premium studio: spacious cards, soft color, strong hierarchy, and refined movement.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {work.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[38px] border border-white/70 bg-white/65 p-3 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/10">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[30px] bg-slate-100">
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/80 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-900 backdrop-blur">{project.type}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="container py-20 sm:py-28">
        <div className="overflow-hidden rounded-[44px] bg-[#0c1222] p-6 text-white shadow-[0_30px_100px_rgba(15,23,42,.22)] sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div>
              <SectionLabel light>Process</SectionLabel>
              <h2 className="text-4xl font-black tracking-[-0.055em] sm:text-6xl">A refined way to turn ideas into dependable software.</h2>
              <p className="mt-6 leading-8 text-slate-300">The delivery process is simple on purpose: understand deeply, design carefully, build cleanly, improve continuously.</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100">
                Plan my project <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {process.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="rounded-[30px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-cyan-200" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-indigo-300/40 via-cyan-200/40 to-amber-200/40 blur-2xl" />
          <div className="relative rounded-[40px] border border-white/70 bg-white/65 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
            <div className="rounded-[32px] bg-gradient-to-br from-white to-indigo-50 p-7">
              <img src="/logo.png" alt="NathSphere Technolabs logo" className="h-24 w-24 rounded-3xl bg-white object-contain p-2 shadow-sm" />
              <p className="mt-14 text-3xl font-black leading-tight tracking-[-0.045em] text-slate-950">Elegant design is useful design. Cool visuals still need reliable software behind them.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Strategy', 'Design', 'Development', 'Support'].map((item) => <div key={item} className="rounded-2xl bg-white p-4 text-sm font-black text-slate-700 shadow-sm">{item}</div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>Why NathSphere</SectionLabel>
          <h2 className="text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl">A boutique software partner with senior engineering depth.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">We combine brand-level presentation with backend discipline, product thinking, automation, cloud readiness, and long-term support. The result: software that looks elevated and keeps working.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Premium responsive design', 'Scalable technical foundation', 'Clear service communication', 'Long-term product ownership'].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/65 p-4 shadow-sm backdrop-blur-xl">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="rounded-[36px] border border-white/70 bg-white/65 p-8 shadow-sm backdrop-blur-xl">
          <div className="text-center">
            <SectionLabel>Markets</SectionLabel>
            <h2 className="text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">Elegant software for practical industries.</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map(([name, Icon]) => (
              <div key={name} className="rounded-3xl bg-white/80 p-6 text-center transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <Icon className="mx-auto h-7 w-7 text-indigo-600" />
                <p className="mt-4 text-sm font-black text-slate-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_.85fr]">
          <div className="rounded-[40px] bg-[#0c1222] p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-12">
            <SectionLabel light>Client feeling</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.055em] sm:text-6xl">Premium on the surface. Serious underneath.</h2>
          </div>
          <div className="rounded-[40px] border border-white/70 bg-white/65 p-8 shadow-sm backdrop-blur-xl sm:p-10">
            <Quote className="h-9 w-9 text-indigo-500" />
            <p className="mt-7 text-xl leading-8 text-slate-700">NathSphere gives businesses the calm, polished, and dependable technology presence they need to look credible and operate better.</p>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-slate-400">Software service partner</p>
          </div>
        </div>
      </section>

      <section id="faq" className="container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl">Before we create the next version.</h2>
            <p className="mt-5 leading-8 text-slate-600">Useful answers for redesign, software service, and long-term product work.</p>
          </div>
          <div className="divide-y divide-slate-200 overflow-hidden rounded-[34px] border border-white/70 bg-white/65 shadow-sm backdrop-blur-xl">
            {faqs.map(({ question, answer }, index) => (
              <div key={question}>
                <button type="button" className="flex w-full items-center justify-between gap-5 p-6 text-left text-lg font-black text-slate-950" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  {question}
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && <p className="px-6 pb-6 leading-7 text-slate-600">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container py-20 sm:py-28">
        <div className="overflow-hidden rounded-[44px] bg-[#0c1222] text-white shadow-[0_30px_100px_rgba(15,23,42,.24)]">
          <div className="grid gap-10 p-7 sm:p-12 lg:grid-cols-[.88fr_1.12fr] lg:p-16">
            <div>
              <SectionLabel light>Start beautifully</SectionLabel>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl">Want this elegant cool direction for your software service website?</h2>
              <p className="mt-6 leading-8 text-slate-300">Tell us what you want to redesign, build, automate, or scale. We will respond with a clear next step.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <a href="mailto:chavda2991sandeep@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white"><Mail className="h-5 w-5 text-cyan-200" /> chavda2991sandeep@gmail.com</a>
                <div className="flex items-center gap-3"><UsersRound className="h-5 w-5 text-cyan-200" /> Dedicated software service team</div>
                <div className="flex items-center gap-3"><Cpu className="h-5 w-5 text-cyan-200" /> Websites, software, APIs, cloud, AI</div>
              </div>
            </div>

            <form onSubmit={submitForm} className="rounded-[34px] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-bold text-slate-700">Name<input name="name" value={form.name} onChange={updateForm} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-400 focus:bg-white" placeholder="Your name" /></label>
                <label className="text-sm font-bold text-slate-700">Email<input name="email" type="email" value={form.email} onChange={updateForm} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-400 focus:bg-white" placeholder="you@company.com" /></label>
              </div>
              <label className="mt-4 block text-sm font-bold text-slate-700">Company<input name="company" value={form.company} onChange={updateForm} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-400 focus:bg-white" placeholder="Company name" /></label>
              <label className="mt-4 block text-sm font-bold text-slate-700">Project details<textarea name="message" value={form.message} onChange={updateForm} required rows={5} className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-400 focus:bg-white" placeholder="Tell us about the website, software, or workflow you need." /></label>
              <button type="submit" disabled={formState.status === 'loading'} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-70">
                {formState.status === 'loading' ? 'Sending...' : 'Send project request'} <Send className="h-4 w-4" />
              </button>
              {formState.message && <p className={`mt-4 rounded-2xl px-4 py-3 text-sm font-bold ${formState.status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{formState.message}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-white/50 backdrop-blur-xl">
        <div className="container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo.png" alt="NathSphere Technolabs logo" className="h-12 w-12 rounded-full bg-white object-contain p-1" />
              <span className="font-black text-slate-950">NathSphere Technolabs</span>
            </a>
            <p className="mt-3 text-sm text-slate-500">Elegant software services for modern digital products.</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <a href="mailto:chavda2991sandeep@gmail.com" className="transition-colors hover:text-slate-950" aria-label="Email NathSphere"><Mail className="h-5 w-5" /></a>
            <a href="#contact" className="transition-colors hover:text-slate-950" aria-label="Contact NathSphere"><MessageSquare className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com" className="transition-colors hover:text-slate-950" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
