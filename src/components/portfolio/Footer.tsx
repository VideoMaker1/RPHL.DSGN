'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo-icon.png"
                alt="RPHL DSGN"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-brutalist text-xl tracking-wider">
              RPHL DSGN
            </span>
          </div>

          {/* Marquee */}
          <div className="marquee-container overflow-hidden col-span-full md:col-span-1 order-last md:order-none">
            <div className="marquee-content">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="font-brutalist text-2xl md:text-3xl text-white/10 whitespace-nowrap mx-4"
                >
                  ARTE DIGITAL • DESIGN • ILUSTRAÇÃO •
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-mono-brutalist text-xs text-gray-500">
              © {currentYear} RPHL DSGN. Todos os direitos reservados.
            </p>
            <p className="font-mono-brutalist text-xs text-gray-600 mt-2">
              Feito com paixão em Gramado
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-[#ff3e00]" />
    </footer>
  )
}
