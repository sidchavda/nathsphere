import './globals.css'

export const metadata = {
  title: 'NathSphere Technolabs | Software Services, Websites & Scalable Platforms',
  description: 'NathSphere Technolabs designs, develops, launches, and supports impressive websites, custom software, APIs, dashboards, AI workflows, and scalable digital platforms.',
  keywords: ['software services', 'website development', 'custom software development', 'Next.js development', 'AI automation', 'NathSphere Technolabs'],
  authors: [{ name: 'NathSphere Technolabs' }],
  openGraph: {
    title: 'NathSphere Technolabs | Software Services, Websites & Scalable Platforms',
    description: 'Impressive software service partner for modern websites, custom platforms, APIs, dashboards, AI automation, and long-term support.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}