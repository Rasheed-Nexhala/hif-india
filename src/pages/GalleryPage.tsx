import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { HIF_GALLERY, type GalleryItem } from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { Lightbox } from '../components/common/Lightbox'
import { Reveal } from '../components/common/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { galleryCategoryLabel, localizeGalleryItem } from '../lib/localizeContent'

type GalleryCategory = GalleryItem['category'] | 'All'

const CATEGORY_ORDER: GalleryItem['category'][] = [
  'Housing',
  'Orphanage',
  'Masjid',
  'Healthcare',
  'Education',
  'Youth',
  'Community'
]

export const GalleryPage: React.FC = () => {
  const { t, language } = useLanguage()

  const localizedGallery = useMemo(
    () => HIF_GALLERY.map((item) => localizeGalleryItem(item, language)),
    [language]
  )

  const categories = useMemo((): GalleryCategory[] => {
    const present = new Set(HIF_GALLERY.map((g) => g.category))
    return ['All', ...CATEGORY_ORDER.filter((c) => present.has(c))]
  }, [])

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? localizedGallery
        : localizedGallery.filter((g) => g.category === activeCategory),
    [activeCategory, localizedGallery]
  )

  useEffect(() => {
    if (!selected) return
    const next = localizedGallery.find((item) => item.id === selected.id)
    if (next && next !== selected) setSelected(next)
  }, [localizedGallery, selected])

  return (
    <>
      <PageHeader
        eyebrow={t('gallery.eyebrow', 'Impact Gallery')}
        title={t('gallery.title', 'Moments of change from the ground.')}
        description={t(
          'gallery.subtitle',
          'A visual record of homes handed over, students taught, masjids revived, and lives touched — captured across our project sites.'
        )}
      />

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === cat
                    ? 'bg-emerald-700 dark:bg-emerald-600 border-emerald-700 dark:border-emerald-500 text-white shadow-sm'
                    : 'bg-card dark:bg-[#07231c] border-border dark:border-emerald-800/50 text-text-muted hover:border-emerald-300 dark:hover:border-emerald-500'
                }`}
              >
                {galleryCategoryLabel(cat, t)}
              </button>
            ))}
          </Reveal>

          {filtered.length === 0 ? (
            <p className="text-center text-text-muted py-16 text-sm">
              {t('gallery.emptyMessage', 'No photos in this category yet.')}
            </p>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <button
                    onClick={() => setSelected(item)}
                    className="relative aspect-square rounded-xl overflow-hidden bg-bg-alt border border-border/60 dark:border-emerald-800/40 group text-left w-full shadow-sm"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-xs font-semibold line-clamp-2">{item.title}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Lightbox item={selected} items={filtered} onClose={() => setSelected(null)} onSelect={setSelected} />
    </>
  )
}

export default GalleryPage
