import React from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useDonate } from '../../context/DonateContext'
import { useLanguage } from '../../context/LanguageContext'
import { HeroAccent } from '../canvas/HeroAccent'

const easeOut = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
}

export const Hero: React.FC = () => {
  const { openDonate } = useDonate()
  const { t } = useLanguage()

  return (
    <section className="relative h-[86vh] min-h-[560px] max-h-[820px] w-full overflow-hidden bg-emerald-950">
      <img
        src={HIF_ORGANIZATION.siteImages.heroSlides[0]}
        alt="HIF India volunteers and beneficiaries"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.55] saturate-[0.85]"
        loading="eager"
      />

      {/* Legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/70 to-emerald-950/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-950/35 to-emerald-950/20" />
      <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply" />

      {/* Full-bleed 3D ambient accent */}
      <HeroAccent className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen" />

      <div className="relative h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 w-full">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.span variants={item} className="badge-on-dark">
              {t('hero.establishedBadge', HIF_ORGANIZATION.established)}
            </motion.span>
            <motion.h1
              variants={item}
              className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] text-shadow-strong"
            >
              {t('hero.title', 'Dignity, shelter & hope for communities across Karnataka.')}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 text-base sm:text-lg text-white/95 leading-relaxed max-w-xl text-shadow-soft"
            >
              {t(
                'hero.subtitle',
                'HIF INDIA builds permanent homes, nurtures orphaned children, revives rural masjids, and delivers free medical relief — with 100% direct, transparent grassroots impact.'
              )}
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-5">
              <motion.button
                onClick={() => openDonate('General Humanitarian Fund')}
                whileHover={{ scale: 1.045 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-text-main font-semibold text-sm shadow-lg shadow-black/30 ring-1 ring-amber-300/60 transition-colors"
              >
                {t('common.donateNow', 'Donate Now')}
              </motion.button>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-amber-200 transition-colors group"
              >
                {t('common.seeImpact', 'See Our Impact')}{' '}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          className="w-[1.5px] h-8 bg-gradient-to-b from-white/70 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
