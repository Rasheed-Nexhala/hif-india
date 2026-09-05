import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import { HIF_PROJECTS, HIF_ACTIVITIES, HIF_GALLERY, HIF_ORGANIZATION } from '../data/hifData'
import { Hero } from '../components/home/Hero'
import { ImpactStatsBand } from '../components/home/ImpactStatsBand'
import { PillarsOrbit3D } from '../components/home/PillarsOrbit3D'
import { ProjectCard } from '../components/cards/ProjectCard'
import { ActivityCard } from '../components/cards/ActivityCard'
import { useDonate } from '../context/DonateContext'
import { useLanguage } from '../context/LanguageContext'
import { localizeGalleryItem, tx } from '../lib/localizeContent'
import { UNSPLASH } from '../data/unsplashImages'
import { Reveal } from '../components/common/Reveal'

export const HomePage: React.FC = () => {
  const { openDonate } = useDonate()
  const { t, language } = useLanguage()
  const galleryPreview = HIF_GALLERY.slice(0, 6).map((item) => localizeGalleryItem(item, language))

  return (
    <>
      <Hero />
      <ImpactStatsBand />

      {/* Mission teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-editorial-wash">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="badge">{t('about.missionTitle', 'Our Mission')}</span>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
              {t('org.tagline', 'Compassion in action, rooted in community.')}
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed">
              {t('about.missionText', HIF_ORGANIZATION.mission)}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-deep"
            >
              {t('common.learnMore', 'More about our story')} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-border">
            <img
              src={HIF_ORGANIZATION.siteImages.mission}
              alt="HIF India mission in the field"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Four pillars — real 3D hub & spoke diagram */}
      <PillarsOrbit3D />

      {/* Featured projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge">{t('projects.eyebrow', 'Our Projects')}</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
                {t('projects.title', 'Flagship programs creating lasting change')}
              </h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-primary hover:text-primary-deep inline-flex items-center gap-1.5 shrink-0">
              {t('projects.viewAll', 'View all projects')} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIF_PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Activities teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge">{t('activities.wingsBadge', 'Our Wings')}</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
                {t('activities.wingsTitle', 'Ongoing activities across the community')}
              </h2>
            </div>
            <Link to="/activities" className="text-sm font-semibold text-primary hover:text-primary-deep inline-flex items-center gap-1.5 shrink-0">
              {t('common.viewAll', 'View all activities')} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIF_ACTIVITIES.map((a, i) => (
              <ActivityCard key={a.id} activity={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Decorative texture callout */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={UNSPLASH.goldenHourTexture}
            alt="Modest village home in India representing dignified shelter"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/85 via-[var(--color-bg-dark)]/80 to-[var(--color-bg-dark)]/92" />
        </div>
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <span className="badge-on-dark">{t('common.verified', 'In Their Words')}</span>
          <p className="font-display mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug text-shadow-soft">
            &ldquo;{tx(
              language,
              'home.quote',
              "A home isn't just walls and a roof — it's the dignity of not having to worry where your children will sleep tonight."
            )}&rdquo;
          </p>
          <p className="mt-5 text-sm text-emerald-100/80">— {tx(language, 'home.quoteBy', 'Ashiyana beneficiary family')}</p>
          <Link
            to="/get-involved"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-semibold text-sm shadow-lg shadow-black/30 ring-1 ring-amber-300/60 transition-colors"
          >
            {t('common.joinAsVolunteer', 'Join the mission')} <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

      {/* Gallery preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge">{t('gallery.eyebrow', 'Impact Gallery')}</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
                {t('gallery.title', 'Moments from the ground')}
              </h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-primary hover:text-primary-deep inline-flex items-center gap-1.5 shrink-0">
              {t('common.viewAll', 'View full gallery')} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryPreview.map((g) => (
              <Link
                key={g.id}
                to="/gallery"
                className="relative aspect-square rounded-xl overflow-hidden bg-bg-alt border border-border/60 group"
              >
                <img
                  src={g.imageUrl}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-7xl mx-auto rounded-2xl bg-emerald-800 dark:bg-[#0a3a2e] border border-emerald-700/60 dark:border-emerald-600/40 shadow-xl px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              {t('hero.donateBannerTitle', 'Your support builds homes, futures, and hope.')}
            </h3>
            <p className="mt-2 text-emerald-100/90 text-sm max-w-xl">
              {t('org.slogan', 'Every rupee is tracked and disbursed directly — zero administrative deductions.')}
            </p>
          </div>
          <button
            onClick={() => openDonate('General Humanitarian Fund')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-semibold text-sm shadow-lg shadow-black/30 ring-1 ring-amber-300/60 transition-colors shrink-0"
          >
            <Heart className="w-4 h-4 fill-current" /> {t('common.donateNow', 'Donate Now')}
          </button>
        </Reveal>
      </section>
    </>
  )
}

export default HomePage
