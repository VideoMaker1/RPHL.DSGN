'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skills = [
    'Branding',
    'Ilustração Digital',
    'UI/UX Design',
    'Motion Graphics',
    'Identidade Visual',
    'Arte Conceitual',
  ]

  const stats = [
    { number: '50+', label: 'Projetos' },
    { number: '5+', label: 'Anos Exp.' },
    { number: '30+', label: 'Clientes' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="scroll-reveal font-mono-brutalist text-xs text-[#ff3e00] uppercase tracking-[0.3em] mb-4 block">
            {'//'} Sobre
          </span>
          <h2 className="scroll-reveal stagger-1 font-brutalist text-5xl md:text-7xl lg:text-8xl">
            QUEM SOU
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Image */}
          <div className="scroll-reveal-left">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-4 border border-white/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/logo-icon.png"
                      alt="RPHL DSGN"
                      width={200}
                      height={200}
                      className="object-contain opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#ff3e00] -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#ff3e00] opacity-10 -z-10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-4 text-center hover:border-[#ff3e00] transition-colors"
                >
                  <span className="font-brutalist text-3xl md:text-4xl text-white">
                    {stat.number}
                  </span>
                  <p className="font-mono-brutalist text-xs text-gray-500 mt-1 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="scroll-reveal-right flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Artista digital e designer com paixão por criar experiências visuais
                impactantes. Meu trabalho explora a interseção entre{' '}
                <span className="text-white font-semibold">arte brutalista</span> e{' '}
                <span className="text-white font-semibold">design contemporâneo</span>.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Acredito que o design deve provocar, não apenas agradar. Cada projeto
                é uma oportunidade de quebrar convenções e criar algo verdadeiramente
                único. Minimalismo radical, tipografia ousada e composições assimétricas
                definem minha linguagem visual.
              </p>

              <p className="text-gray-400 leading-relaxed">
                De identidades visuais a ilustrações digitais, cada trabalho é uma
                exploração de formas, contrastes e significados.
              </p>

              {/* Skills */}
              <div className="pt-8">
                <h3 className="font-mono-brutalist text-xs text-gray-500 uppercase tracking-widest mb-4">
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-white/20 text-sm hover:border-[#ff3e00] hover:text-[#ff3e00] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  )
}
