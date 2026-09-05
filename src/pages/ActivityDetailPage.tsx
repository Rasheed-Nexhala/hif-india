import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, Sparkles, Heart } from 'lucide-react'
import { HIF_ACTIVITIES } from '../data/hifData'
import { useDonate } from '../context/DonateContext'
import { useLanguage } from '../context/LanguageContext'

const idBySlug: Record<string, string> = {
  'medical-cell': 'hif-medical-cell',
  'education-wing': 'hif-education-wing',
  'youth-wing': 'hif-youth-wing'
}

export const ActivityDetailPage: React.FC = () => {
  const { activityId } = useParams<{ activityId: string }>()
  const resolvedId = activityId ? (idBySlug[activityId] || activityId) : undefined
  const activity = HIF_ACTIVITIES.find((a) => a.id === resolvedId)
  const { openDonate } = useDonate()
  const { t } = useLanguage()

  if (!activity) return <Navigate to="/activities" replace />

  return (
    <>
      <section className="relative section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={activity.image} alt={activity.title} className="w-full h-full object-cover opacity-22" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06231b]/85 via-[#06231b]/90 to-[#06231b]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center animate-fade-up">
          <span className="badge-on-dark">{activity.badge}</span>
          <h1 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-shadow-soft">
            {activity.title}
          </h1>
          <p className="mt-4 text-emerald-50/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {activity.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-4">
          {activity.stats.map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <p className="font-display text-2xl font-semibold text-primary-deep dark:text-emerald-300">{s.value}</p>
              <p className="mt-1 text-sm text-text-muted dark:text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-main dark:text-stone-50">
                {t('common.viewDetails', 'Overview')}
              </h2>
              <p className="mt-3 text-text-muted dark:text-stone-300 leading-relaxed">{activity.overview}</p>
              <div className="mt-4 space-y-4">
                {activity.fullStory.map((para, i) => (
                  <p key={i} className="text-text-muted dark:text-stone-300 leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {activity.images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {activity.images.map((img) => (
                  <div key={img} className="aspect-[4/3] rounded-xl overflow-hidden border border-border dark:border-emerald-800/40">
                    <img src={img} alt={activity.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            )}

            <div>
              <h2 className="font-display text-2xl font-semibold text-text-main dark:text-stone-50">
                {t('activities.featuresTitle', 'What We Do')}
              </h2>
              <ul className="mt-4 space-y-3">
                {activity.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted dark:text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold text-text-main dark:text-stone-50 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent dark:text-amber-400" /> {t('activities.impactTitle', 'Impact So Far')}
              </h3>
              <ul className="space-y-3">
                {activity.impactPoints.map((p, i) => (
                  <li key={i} className="text-sm text-text-muted dark:text-stone-300 leading-relaxed border-l-2 border-emerald-200 dark:border-emerald-700/60 pl-3">
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openDonate(activity.title)}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
              >
                <Heart className="w-4 h-4" /> {t('common.donateNow', 'Support This Wing')}
              </button>
            </div>
            <Link
              to="/activities"
              className="block text-center text-sm font-semibold text-primary dark:text-emerald-400 hover:text-primary-deep dark:hover:text-emerald-300"
            >
              ← {t('common.backToActivities', 'Back to all activities')}
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ActivityDetailPage
