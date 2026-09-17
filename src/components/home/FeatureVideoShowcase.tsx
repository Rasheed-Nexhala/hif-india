import React, { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import { HIF_FEATURE_VIDEOS } from '../../data/hifFeatureVideos'
import { useLanguage } from '../../context/LanguageContext'
import { localizeFeatureVideo } from '../../lib/localizeContent'
import { useAutoplayOnView } from '../../hooks/useAutoplayOnView'
import { Reveal } from '../common/Reveal'

/**
 * Homepage landscape feature-video showcase: a wide 16:9 player with a simple
 * two-clip switcher (see src/data/hifFeatureVideos.ts — drop .mp4 files into
 * public/videos/features/). Plays muted when the section scrolls into view.
 */
export const FeatureVideoShowcase: React.FC = () => {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  const videos = HIF_FEATURE_VIDEOS.map((v) => localizeFeatureVideo(v, language))
  const active = videos[activeIndex]
  const { sectionRef, videoRef, setVideoNode } = useAutoplayOnView(active?.id ?? '')

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % videos.length) + videos.length) % videos.length)
    },
    [videos.length]
  )

  if (videos.length === 0) return null

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge">{t('featureVideos.eyebrow', 'On the ground')}</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
            {t('featureVideos.title', 'Moments that stay with us')}
          </h2>
          <p className="mt-5 text-text-muted leading-relaxed">
            {t(
              'featureVideos.subtitle',
              'Longer stories from the field — the people, places, and days that define our mission.'
            )}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-xl ring-1 ring-border/40">
            <AnimatePresence mode="wait">
              <motion.video
                key={active.id}
                ref={setVideoNode}
                src={active.videoUrl}
                poster={active.posterUrl}
                preload="auto"
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
              onClick={() => {
                setIsMuted((m) => {
                  const next = !m
                  if (videoRef.current) videoRef.current.muted = next
                  return next
                })
              }}
              aria-label={
                isMuted
                  ? t('featureVideos.unmute', 'Unmute')
                  : t('featureVideos.mute', 'Mute')
              }
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-text-main/90 font-medium max-w-xl"
            >
              {active.caption}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label={t('featureVideos.previous', 'Previous video')}
              className="w-9 h-9 shrink-0 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {videos.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`${t('featureVideos.viewVideo', 'View video')} ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? 'w-7 bg-primary' : 'w-2.5 bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label={t('featureVideos.next', 'Next video')}
              className="w-9 h-9 shrink-0 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
