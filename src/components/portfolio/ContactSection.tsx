'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In production, you would send this to your API
    console.log('Form submitted:', formData)

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'rphldsgn@gmail.com',
      href: 'mailto:rphldsgn@gmail.com',
    },
    {
      label: 'Instagram',
      value: '@rphldsgn',
      href: 'https://instagram.com/rphldsgn',
    },
    {
      label: 'You Tube',
      value: 'RPHL DSGN',
      href: 'https://youtube.com/@rphldsgn',
    },
    {
      label: 'Local',
      value: 'Gramado, RS, Brasil',
      href: null,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-[#ff3e00] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-white/20 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="scroll-reveal font-mono-brutalist text-xs text-[#ff3e00] uppercase tracking-[0.3em] mb-4 block">
            {'//'} Contato
          </span>
          <h2 className="scroll-reveal stagger-1 font-brutalist text-5xl md:text-7xl lg:text-8xl">
            FALE COMIGO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Contact Info */}
          <div className="scroll-reveal-left">
            <p className="text-lg text-gray-400 mb-8 max-w-md">
              Tem um projeto em mente? Vamos criar algo extraordinário juntos.
              Entre em contato e vamos conversar sobre como posso ajudar a
              transformar sua visão em realidade visual.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <label className="font-mono-brutalist text-xs text-gray-500 uppercase tracking-widest block mb-1">
                    {info.label}
                  </label>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xl hover:text-[#ff3e00] transition-colors hover-line"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-xl">{info.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="font-mono-brutalist text-xs text-gray-500 uppercase tracking-widest mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {['Instagram', 'Behance', 'Dribbble', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#ff3e00] hover:bg-[#ff3e00] transition-all group"
                    aria-label={social}
                  >
                    <span className="text-xs font-mono-brutalist text-gray-500 group-hover:text-white">
                      {social.slice(0, 2)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="scroll-reveal-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono-brutalist text-xs text-gray-500 uppercase tracking-widest block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#ff3e00] outline-none transition-colors text-white placeholder-gray-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="font-mono-brutalist text-xs text-gray-500 uppercase tracking-widest block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#ff3e00] outline-none transition-colors text-white placeholder-gray-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="font-mono-brutalist text-xs text-gray-500 uppercase tracking-widest block mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#ff3e00] outline-none transition-colors text-white placeholder-gray-600 resize-none"
                  placeholder="Conte sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-brutalist w-full mt-8 disabled:opacity-50"
              >
                <span>
                  {isSubmitting ? 'Enviando...' : submitStatus === 'success' ? 'Enviado!' : 'Enviar Mensagem'}
                </span>
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-[#ff3e00] text-sm mt-4">
                  Mensagem enviada com sucesso!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
