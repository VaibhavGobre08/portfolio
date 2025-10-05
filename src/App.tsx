/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import ThemeToggle from './components/ThemeToggle'
import personal from './data/personal.json'
import { useEffect, useState } from 'react'
import { useScrollSpy } from './lib/useScrollSpy'

// Import all page components
import Hero from './pages/Hero'
import Details from './pages/Details'
import Links from './pages/Links'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'

const SECTIONS = ['home','details','links','about','skills','experience','education','projects','certifications']

function Header() {
  const active = useScrollSpy(SECTIONS, 120)
  const linkCls = (id: string) => `hover:underline ${active === id ? 'text-white' : 'text-neutral-400'}`

  return (
    <header className="sticky top-0 z-20 glass">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 h-14">
        <a href="#home" className="text-lg font-semibold">{personal.name}</a>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={linkCls(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
          ))}
        </nav>
        <div className="flex-1" />
        <ThemeToggle />
      </div>
    </header>
  )
}

function BackgroundBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full blur-3xl opacity-25 animate-floaty" style={{ background: 'radial-gradient(circle, #7c3aed, transparent 60%)' }} />
      <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full blur-3xl opacity-25 animate-floaty" style={{ background: 'radial-gradient(circle, #06b6d4, transparent 60%)', animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-20 animate-floaty" style={{ background: 'radial-gradient(circle, #22c55e, transparent 60%)', animationDelay: '2s' }} />
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <a href="#home" className="fixed bottom-6 right-6 glass px-3 py-2 text-sm shadow-lg hover:scale-[1.03] transition-transform">Top</a>
  )
}

function Footer() {
  return (
    <footer className="section">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="glass rounded-2xl p-6 text-center space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white">Thank you for visiting!</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto text-sm">
              I'm passionate about creating innovative solutions and always excited to collaborate on new projects. 
              Feel free to reach out if you'd like to work together or just have a chat about technology!
            </p>
          </div>
          
          <div className="pt-3 border-t border-neutral-700">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600 mt-1">
              Made with ❤️ and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <BackgroundBlobs />
      <Header />
      <Hero />
      <About />
      <Details />
      <Links />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <BackToTop />
      <Footer />
    </div>
  )
}
