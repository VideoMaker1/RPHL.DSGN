'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return

    const dot = dotRef.current
    const outline = outlineRef.current

    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dot) {
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
      }

      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15
      outlineY += (mouseY - outlineY) * 0.15

      if (outline) {
        outline.style.left = `${outlineX}px`
        outline.style.top = `${outlineY}px`
      }

      requestAnimationFrame(animateOutline)
    }

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, input, textarea, [data-cursor="hover"]')

    const handleElementEnter = () => setIsHovering(true)
    const handleElementLeave = () => setIsHovering(false)

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementEnter)
      el.addEventListener('mouseleave', handleElementLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    animateOutline()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementEnter)
        el.removeEventListener('mouseleave', handleElementLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      <div
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </>
  )
}
