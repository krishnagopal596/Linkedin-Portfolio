import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export const revalidate = 0 // disable ISR for dev

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
