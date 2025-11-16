import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import TextHero from './sections/TextHero'
import Essays from './sections/Essays'
import EssayDetail from './sections/EssayDetail'

const App = () => {
  const [gateOpen, setGateOpen] = useState(false)

  const handleExploreMore = () => {
    // Fade out TextHero
    const textHero = document.querySelector('.text-hero')
    if (textHero) {
      textHero.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
      textHero.style.opacity = '0'
      textHero.style.transform = 'scale(0.985)'
    }

    // After fade out, open gate and reveal navbar
    setTimeout(() => {
      setGateOpen(true)
      
      // Fade in navbar
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        navbar.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out'
        navbar.style.opacity = '1'
        navbar.style.transform = 'translateY(0)'
      }

      // Smooth scroll to Hero section
      setTimeout(() => {
        const heroSection = document.querySelector('#about')
        const navbarHeight = 80 // Approximate navbar height
        if (heroSection) {
          const heroTop = heroSection.offsetTop
          window.scrollTo({
            top: heroTop - navbarHeight,
            behavior: 'smooth'
          })
        }
      }, 100)
    }, 300)
  }

  useEffect(() => {
    // Set initial navbar state
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      navbar.style.opacity = gateOpen ? '1' : '0'
      navbar.style.transform = gateOpen ? 'translateY(0)' : 'translateY(-6px)'
    }
  }, [gateOpen])

  return (
    <div className='min-h-screen bg-black'>
      <main className='w-full'>
        <Routes>
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:slug" element={<EssayDetail />} />
          <Route path="/" element={
            <>
              <Navbar gateOpen={gateOpen} />
              
              {!gateOpen ? (
                <TextHero onExploreMore={handleExploreMore} />
              ) : (
                <>
                  <TextHero onExploreMore={handleExploreMore} />
                  {/* <Hero /> Commented out due to crash issues 
                  ThreeJS crash issues when trying to render the HackerRoom component */}
                  <About />
                  <Projects />
                  {/* <Clients /> Commented out due to irrelevant content*/}
                  <Experience />
                  <Contact />
                  <Footer />
                </>
              )}
            </>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App