import './globals.css'

export const metadata = {
  title: 'NathSphere Technolabs | Software That Scales With Your Business',
  description: 'NathSphere Technolabs builds reliable, scalable, high-performing software solutions with experienced engineering teams.',
  keywords: ['software development', 'backend engineering', 'dedicated development team', 'scalable architecture', 'NathSphere Technolabs'],
  authors: [{ name: 'NathSphere Technolabs' }],
  openGraph: {
    title: 'NathSphere Technolabs | Software That Scales With Your Business',
    description: 'Experienced engineering partnership for reliable, scalable software.',
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