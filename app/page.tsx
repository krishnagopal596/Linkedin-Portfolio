'use client'

import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
} 