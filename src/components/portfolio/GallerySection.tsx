'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Sample artwork data - In production, this would come from a CMS or database
const artworks = [
  {
    id: 1,
    title: 'Neo Geometry',
    category: 'Ilustração',
    description: 'Exploração de formas geométricas em espaço digital',
    width: 600,
    height: 800,
    color: '#ff3e00',
  },
  {
    id: 2,
    title: 'Digital Void',
    category: 'Arte Digital',
    description: 'O vazio como presença na era digital',
    width: 800,
    height: 600,
    color: '#ffffff',
  },
  {
    id: 3,
    title: 'Chromatic Shift',
    category: 'Design',
    description: 'Estudo sobre transições cromáticas radicais',
    width: 600,
    height: 600,
    color: '#888888',
  },
  {
    id: 4,
    title: 'Brutal Type',
    category: 'Tipografia',
    description: 'Tipografia como elemento visual dominante',
    width: 800,
    height: 800,
    color: '#ff3e00',
  },
  {
    id: 5,
    title: 'Minimal Chaos',
    category: 'Ilustração',
    description: 'Ordem emergente do caos controlado',
    width: 600,
    height: 400,
    color: '#ffffff',
  },
  {
    id: 6,
    title: 'Grid Dissolution',
    category: 'Arte Digital',
    description: 'Quando o sistema começa a falhar',
    width: 800,
    height: 600,
    color: '#888888',
  },
  {
    id: 7,
    title: 'Contrast Study',
    category: 'Design',
    description: 'O poder dos opostos em composição',
    width: 600,
    height: 800,
    color: '#ff3e00',
  },
  {
    id: 8,
    title: 'Abstract Form',
    category: 'Ilustração',
    description: 'Forma pura sem representação',
    width: 800,
    height: 600,
    color: '#ffffff',
  },
]

interface Artwork {
  id: number
  title: string
  category: string
  description: string
  width: number
  height: number
  color: string
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [filter, setFilter] = useState<string>('all')

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal, .scroll-reveal-scale')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const categories = ['all', 'Ilustração', 'Arte Digital', 'Design', 'Tipografia']

  const filteredArtworks = filter === 'all'
    ? artworks
    : artworks.filter(art => art.category === filter)

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="scroll-reveal font-mono-brutalist text-xs text-[#ff3e00] uppercase tracking-[0.3em] mb-4 block">
            {'//'} Galeria
          </span>
          <h2 className="scroll-reveal stagger-1 font-brutalist text-5xl md:text-7xl lg:text-8xl">
            TRABALHOS
          </h2>
        </div>

        {/* Category Filter */}
        <div className="scroll-reveal stagger-2 flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-mono-brutalist uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-white hover:border-[#ff3e00]'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="scroll-reveal-scale break-inside-avoid"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className="gallery-item group relative bg-[#1a1a1a] cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
                data-cursor="hover"
              >
                {/* Placeholder artwork display */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: `${artwork.width} / ${artwork.height}`,
                    minHeight: '200px',
                  }}
                >
                  {/* Abstract artwork placeholder */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #0a0a0a 0%, ${artwork.color}20 100%)`,
                    }}
                  >
                    <div
                      className="w-1/2 h-1/2 border-2 transition-transform duration-500 group-hover:rotate-45"
                      style={{ borderColor: artwork.color }}
                    />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-black/80 text-xs font-mono-brutalist uppercase tracking-wider">
                      {artwork.category}
                    </span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="overlay">
                  <div className="content">
                    <h3 className="font-brutalist text-xl mb-1">{artwork.title}</h3>
                    <p className="text-sm text-gray-400">{artwork.description}</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff3e00] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <div className="scroll-reveal mt-12 p-6 border border-dashed border-white/20 text-center">
          <p className="font-mono-brutalist text-sm text-gray-500">
            {'//'} Adicione suas próprias obras substituindo os placeholders
          </p>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0a0a0a] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#ff3e00] transition-colors z-10"
              onClick={() => setSelectedArtwork(null)}
            >
              <span className="text-2xl">×</span>
            </button>

            {/* Modal content */}
            <div className="grid md:grid-cols-2">
              {/* Image side */}
              <div
                className="relative aspect-square md:aspect-auto"
                style={{
                  background: `linear-gradient(135deg, #0a0a0a 0%, ${selectedArtwork.color}20 100%)`,
                  minHeight: '300px',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-1/2 h-1/2 border-2"
                    style={{ borderColor: selectedArtwork.color }}
                  />
                </div>
              </div>

              {/* Info side */}
              <div className="p-8 flex flex-col justify-center">
                <span className="font-mono-brutalist text-xs text-[#ff3e00] uppercase tracking-widest mb-2">
                  {selectedArtwork.category}
                </span>
                <h3 className="font-brutalist text-4xl mb-4">{selectedArtwork.title}</h3>
                <p className="text-gray-400 mb-6">{selectedArtwork.description}</p>
                <div className="flex gap-4">
                  <span className="text-xs text-gray-500">
                    {selectedArtwork.width}×{selectedArtwork.height}px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  )
}
