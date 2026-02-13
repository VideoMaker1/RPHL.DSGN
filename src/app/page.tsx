'use client'

import CustomCursor from '@/components/portfolio/CustomCursor'
import Navigation from '@/components/portfolio/Navigation'
import HeroSection from '@/components/portfolio/HeroSection'
import AboutSection from '@/components/portfolio/AboutSection'
import GallerySection from '@/components/portfolio/GallerySection'
import ContactSection from '@/components/portfolio/ContactSection'
import Footer from '@/components/portfolio/Footer'

/**
 * RPHL DSGN - Digital Art Portfolio
 * 
 * A brutalist/minimalist portfolio for showcasing digital artwork.
 * 
 * DEPLOYMENT INSTRUCTIONS FOR VERCEL:
 * 
 * 1. Push your code to a GitHub repository
 * 2. Go to vercel.com and sign in with your GitHub account
 * 3. Click "New Project" and import your repository
 * 4. Vercel will automatically detect Next.js and configure the build settings:
 *    - Framework Preset: Next.js
 *    - Build Command: next build (default)
 *    - Output Directory: .next (default)
 * 5. Click "Deploy" and wait for the build to complete
 * 6. Your site will be live at a .vercel.app URL
 * 
 * COST: Free tier includes:
 * - Unlimited personal projects
 * - Automatic HTTPS
 * - Global CDN
 * - Automatic deployments on git push
 * 
 * CUSTOMIZATION:
 * - Replace artwork placeholders in GallerySection.tsx
 * - Update contact information in ContactSection.tsx
 * - Modify colors in globals.css (--brutalist-* variables)
 * 
 * Built with Next.js 15, TypeScript, and Tailwind CSS
 */

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor - Desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Global Noise Texture Overlay */}
      <div className="noise-overlay" />
    </main>
  )
}
