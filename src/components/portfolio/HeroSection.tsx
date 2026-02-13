'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 20
      const yPercent = (clientY / innerHeight - 0.5) * 20

      logoRef.current.style.transform = `translate(${xPercent}px, ${yPercent}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Grid Lines */}
      <div className="grid-lines" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45 pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-[#ff3e00]/20 rotate-12 float" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo Container */}
        <div
          ref={logoRef}
          className="scroll-reveal mb-8 transition-transform duration-200"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
            <Image
              src="/logo-main.png"
              alt="RPHL DSGN Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <h1
          className="scroll-reveal stagger-1 font-brutalist text-4xl md:text-6xl lg:text-7xl mb-6 glitch"
          data-text="ARTE DIGITAL"
        >
          <span className="text-white">ARTE</span>{' '}
          <span className="text-[#ff3e00]">DIGITAL</span>
        </h1>

        {/* Subtitle */}
        <p className="scroll-reveal stagger-2 font-mono-brutalist text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] mb-12">
          Design • Ilustração • Identidade Visual
        </p>

        {/* CTA Buttons */}
        <div className="scroll-reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#gallery" className="btn-brutalist">
            <span>Ver Galeria</span>
          </a>
          <a href="#contact" className="btn-brutalist btn-brutalist-accent">
            <span>Contato</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-reveal stagger-4 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Scroll
            </span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </section>
  )
}
