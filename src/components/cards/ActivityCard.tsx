import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ActivityData } from '../../data/hifData'
import { Reveal } from '../common/Reveal'
import { useLanguage } from '../../context/LanguageContext'

const slugMap: Record<string, string> = {
  'hif-medical-cell': 'medical-cell',
  'hif-education-wing': 'education-wing',
  'hif-youth-wing': 'youth-wing'
}

export const ActivityCard: React.FC<{ activity: ActivityData; index?: number }> = ({ activity, index = 0 }) => {
  const slug = slugMap[activity.id] || activity.id
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { t } = useLanguage()

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateX(${py * -7}deg) rotateY(${px * 9}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link
        to={`/activities/${slug}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card group card overflow-hidden flex h-full flex-col hover:shadow-xl transition-shadow duration-300"
      >
        <div className="tilt-card-content flex h-full flex-col">
          <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-bg-alt dark:bg-[#07231c]">
            <img
              src={activity.image}
              alt={activity.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className={`absolute top-3 left-3 z-10 badge badge-on-photo ${activity.color === 'amber' ? 'badge-amber' : ''}`}>
              {activity.badge}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display line-clamp-2 min-h-[3.25rem] text-xl font-semibold leading-snug text-text-main dark:text-stone-50 transition-colors group-hover:text-primary dark:group-hover:text-emerald-300">
              {activity.title}
            </h3>
            <p className="mt-1 line-clamp-2 min-h-[2rem] text-xs font-medium leading-snug text-primary dark:text-emerald-400">
              {activity.subtitle}
            </p>
            <p className="mt-3 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-text-muted dark:text-stone-300">
              {activity.overview}
            </p>

            <div className="mt-4 grid min-h-[4.25rem] grid-cols-3 gap-2 border-t border-border dark:border-emerald-800/40 pt-4">
              {activity.stats.slice(0, 3).map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xs font-bold text-text-main dark:text-stone-100">{s.value}</p>
                  <p className="mt-0.5 line-clamp-2 min-h-[1.75rem] text-[10px] leading-tight text-text-muted dark:text-text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary dark:text-emerald-400 transition-all group-hover:gap-2.5">
              {t('common.learnMore', 'Learn more')} <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export { slugMap as activitySlugMap }
