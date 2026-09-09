import React, { useEffect } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react'
import type { GalleryItem } from '../../data/hifData'
import { useLanguage } from '../../context/LanguageContext'
import { galleryCategoryLabel } from '../../lib/localizeContent'

interface LightboxProps {
  item: GalleryItem | null
  items: GalleryItem[]
  onClose: () => void
  onSelect: (item: GalleryItem) => void
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onSelect }) => {
  const { t } = useLanguage()
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1

  const handlePrev = () => {
    if (currentIndex < 0) return
    onSelect(items[(currentIndex - 1 + items.length) % items.length])
  }
  const handleNext = () => {
    if (currentIndex < 0) return
    onSelect(items[(currentIndex + 1) % items.length])
  }

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item])

  const handleSwipe = (_e: unknown, info: PanInfo) => {
    const { offset, velocity } = info
    if (Math.abs(offset.x) < 40 && Math.abs(velocity.x) < 300) return
    if (offset.x < 0) handleNext()
    else handlePrev()
  }

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/90"
          />
          <button
            onClick={onClose}
            className="fixed top-4 right-4 sm:top-5 sm:right-5 z-[110] p-2.5 rounded-full bg-card/10 hover:bg-card/20 active:bg-card/30 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {items.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="fixed left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-[110] p-2 sm:p-2.5 rounded-full bg-card/10 hover:bg-card/20 active:bg-card/30 text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="fixed right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-[110] p-2 sm:p-2.5 rounded-full bg-card/10 hover:bg-card/20 active:bg-card/30 text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="relative min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6 py-16 sm:py-10">
            <motion.div
              key={item.id}
              drag={items.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleSwipe}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="relative z-[105] max-w-4xl w-full flex flex-col rounded-2xl bg-card dark:bg-[#082820] border border-border/80 dark:border-emerald-800/50 overflow-hidden shadow-2xl touch-pan-y"
            >
              <div className="relative flex-1 min-h-[240px] max-h-[55vh] sm:max-h-[62vh] bg-bg-alt dark:bg-[#03130e] flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-contain max-h-[55vh] sm:max-h-[62vh] pointer-events-none select-none"
                />
              </div>
              <div className="p-4 sm:p-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="badge">{galleryCategoryLabel(item.category, t)}</span>
                    <span className="flex items-center gap-1 text-[11px] text-text-muted">
                      <MapPin className="w-3 h-3 text-primary" /> {item.location}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-muted dark:text-amber-300/80">
                      <Calendar className="w-3 h-3 text-accent" /> {item.year}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-text-main">{item.title}</h3>
                  <p className="mt-1 text-xs text-text-muted max-w-xl leading-relaxed">{item.description}</p>
                </div>
                <span className="text-xs text-text-muted shrink-0">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
