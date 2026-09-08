import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, Heart, Target } from 'lucide-react'
import { HIF_PROJECTS } from '../data/hifData'
import { useDonate } from '../context/DonateContext'
import { useLanguage } from '../context/LanguageContext'
import { localizeProject } from '../lib/localizeContent'
import { ImageLightbox } from '../components/common/ImageLightbox'

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const rawProject = HIF_PROJECTS.find((p) => p.id === projectId)
  const { openDonate } = useDonate()
  const { t, language } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!rawProject) return <Navigate to="/projects" replace />

  const project = localizeProject(rawProject, t, language)

  return (
    <>
      <section className="relative page-header overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/85 via-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center animate-fade-up">
          <span className="badge-on-dark">{project.badge}</span>
          <h1 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-shadow-soft">
            {project.title}
          </h1>
          <p className="mt-4 text-emerald-50/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-4">
          {project.stats.map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <p className="font-display text-2xl font-semibold text-primary-deep">{s.value}</p>
              <p className="mt-1 text-sm text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-main">
                {t('common.viewDetails', 'Overview')}
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">{project.overview}</p>
              <div className="mt-4 space-y-4">
                {project.fullStory.map((para, i) => (
                  <p key={i} className="text-text-muted leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setLightboxIndex(i)}
                    className="aspect-[4/3] rounded-xl overflow-hidden border border-border group"
                  >
                    <img
                      src={img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            <div>
              <h2 className="font-display text-2xl font-semibold text-text-main">
                {t('projects.achievementsTitle', 'Key Achievements')}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-text-main">
                {t('projects.futureGoalsTitle', 'Future Goals')}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.futureGoals.map((g, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <Target className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold text-text-main mb-4">
                {t('projects.tiersTitle', 'Sponsorship Tiers')}
              </h3>
              <div className="space-y-3">
                {project.supportTiers.map((tier) => (
                  <button
                    key={tier.title}
                    onClick={() => openDonate(`${project.title} — ${tier.title}`, tier.amount)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors ${
                      tier.isPopular
                        ? 'border-emerald-300 dark:border-emerald-600/60 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30'
                        : 'border-border bg-bg-alt hover:bg-emerald-50/50 dark:hover:bg-card-tint'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-text-main">{tier.title}</span>
                      {tier.isPopular && <span className="badge shrink-0">{t('common.verified', 'Popular')}</span>}
                    </div>
                    <p className="mt-1 text-xs text-text-muted">{tier.description}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-primary-deep">
                      ₹{tier.amount.toLocaleString()}
                      <span className="text-xs text-text-muted font-sans font-normal"> {tier.unit}</span>
                    </p>
                  </button>
                ))}
              </div>
              <button
                onClick={() => openDonate(project.title)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
              >
                <Heart className="w-4 h-4" /> {t('common.donateNow', 'Donate to This Project')}
              </button>
            </div>
            <Link
              to="/projects"
              className="block text-center text-sm font-semibold text-primary hover:text-primary-deep"
            >
              ← {t('common.backToProjects', 'Back to all projects')}
            </Link>
          </aside>
        </div>
      </section>

      <ImageLightbox
        images={project.images}
        index={lightboxIndex}
        alt={project.title}
        onClose={() => setLightboxIndex(null)}
        onSelect={setLightboxIndex}
      />
    </>
  )
}

export default ProjectDetailPage
