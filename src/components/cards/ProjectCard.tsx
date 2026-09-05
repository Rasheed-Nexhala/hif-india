import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ProjectData } from '../../data/hifData'
import { Reveal } from '../common/Reveal'
import { useLanguage } from '../../context/LanguageContext'
import { localizeProject } from '../../lib/localizeContent'

export const ProjectCard: React.FC<{ project: ProjectData; index?: number }> = ({ project, index = 0 }) => {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { t, language } = useLanguage()
  const localized = localizeProject(project, t, language)

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
        to={`/projects/${project.id}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card group card overflow-hidden flex h-full flex-col hover:shadow-xl transition-shadow duration-300"
      >
        <div className="tilt-card-content flex h-full flex-col">
          <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-bg-alt">
            <img
              src={project.image}
              alt={localized.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className={`absolute top-3 left-3 z-10 badge badge-on-photo ${project.color === 'amber' ? 'badge-amber' : ''}`}>
              {localized.badge}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display line-clamp-2 text-xl font-semibold leading-relaxed text-text-main transition-colors group-hover:text-primary">
              {localized.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-primary">
              {localized.subtitle}
            </p>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-muted">
              {localized.overview}
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
              {localized.stats.slice(0, 3).map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xs font-bold text-text-main">{s.value}</p>
                  <p className="mt-0.5 line-clamp-2 text-[10px] leading-relaxed text-text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
              {t('common.readMore', 'Read the full story')} <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}
