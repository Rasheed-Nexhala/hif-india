import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageLightboxProps {
  images: string[]
  index: number | null
  alt: string
  onClose: () => void
  onSelect: (index: number) => void
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, index, alt, onClose, onSelect }) => {
  const isOpen = index !== null

  const handlePrev = () => {
    if (index === null) return
    onSelect((index - 1 + images.length) % images.length)
  }
  const handleNext = () => {
    if (index === null) return
    onSelect((index + 1) % images.length)
  }

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index])

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/90"
          />
          <button
            onClick={onClose}
            className="fixed top-5 right-5 z-[110] p-2.5 rounded-full bg-card/10 hover:bg-card/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] p-2.5 rounded-full bg-card/10 hover:bg-card/20 text-white transition-colors hidden sm:block"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] p-2.5 rounded-full bg-card/10 hover:bg-card/20 text-white transition-colors hidden sm:block"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="relative z-[105] max-w-4xl w-full max-h-[88vh] flex flex-col rounded-2xl bg-card dark:bg-[#082820] border border-border/80 dark:border-emerald-800/50 overflow-hidden shadow-2xl"
          >
            <div className="relative flex-1 min-h-[260px] max-h-[80vh] bg-bg-alt dark:bg-[#03130e] flex items-center justify-center">
              <img src={images[index]} alt={alt} className="w-full h-full object-contain max-h-[80vh]" />
            </div>
            {images.length > 1 && (
              <div className="px-5 py-3 border-t border-border flex items-center justify-center">
                <span className="text-xs text-text-muted">
                  {index + 1} / {images.length}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
