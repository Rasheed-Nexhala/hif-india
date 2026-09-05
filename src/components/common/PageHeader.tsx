import React from 'react'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  image?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, description, image }) => {
  return (
    <section className="relative section-dark overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06231b]/88 via-[#06231b]/90 to-[#06231b]" />
        </div>
      )}
      {/* Subtle ambient glow accents so dark sections don't feel flat */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center"
      >
        <span className="badge-on-dark">{eyebrow}</span>
        <h1 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-shadow-soft">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-emerald-50/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  )
}
