import React, { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { HIF_REELS } from '../../data/hifReels'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useLanguage } from '../../context/LanguageContext'
import { localizeReel } from '../../lib/localizeContent'
import { Reveal } from '../common/Reveal'

/**
 * Homepage "reels" showcase: a phone-mockup carousel of self-hosted vertical
 * clips (see src/data/hifReels.ts — drop the .mp4 files into public/videos/reels/).
 * Each clip autoplays muted and, once it ends, advances to the next one; it can
 * also be switched manually via the arrows/dots at any time.
 */
export const ReelsShowcase: React.FC = () => {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  const reels = HIF_REELS.map((r) => localizeReel(r, language))
  const active = reels[activeIndex]

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % reels.length) + reels.length) % reels.length)
    },
    [reels.length]
  )

  if (reels.length === 0) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="badge">{t('reels.eyebrow', 'Our Reels')}</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
            {t('reels.title', 'Stories worth watching, straight from the field')}
          </h2>
          <p className="mt-5 text-text-muted leading-relaxed max-w-lg">
            {t(
              'reels.subtitle',
              'A closer look at the moments behind our work — home handovers, classroom days, and relief drives, told through short reels.'
            )}
          </p>

          <div className="mt-8 max-w-lg">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-text-main/90 font-medium min-h-[2.5rem]"
              >
                {active.caption}
              </motion.p>
            </AnimatePresence>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label={t('reels.previous', 'Previous reel')}
                className="w-9 h-9 shrink-0 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {reels.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`${t('reels.viewReel', 'View reel')} ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? 'w-7 bg-primary' : 'w-2.5 bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label={t('reels.next', 'Next reel')}
                className="w-9 h-9 shrink-0 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={HIF_ORGANIZATION.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-deep"
            >
              <FaInstagram className="w-4 h-4" /> {t('reels.followUs', 'Follow @hif_india for more')}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative w-[300px] sm:w-[330px] rounded-[2.75rem] bg-emerald-950 p-3 shadow-2xl ring-1 ring-black/10">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-emerald-950 rounded-full z-20 ring-1 ring-white/5" />
            <div className="relative rounded-[2.15rem] overflow-hidden bg-black aspect-[9/16]">
              <AnimatePresence>
                <motion.video
                  key={active.id}
                  src={active.videoUrl}
                  poster={active.posterUrl}
                  preload="auto"
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onEnded={() => goTo(activeIndex + 1)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setIsMuted((m) => !m)}
                aria-label={isMuted ? t('reels.unmute', 'Unmute') : t('reels.mute', 'Mute')}
                className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
