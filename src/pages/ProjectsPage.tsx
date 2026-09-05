import React from 'react'
import { HIF_PROJECTS } from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { ProjectCard } from '../components/cards/ProjectCard'
import { Reveal } from '../components/common/Reveal'
import { useLanguage } from '../context/LanguageContext'

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        eyebrow={t('projects.eyebrow', 'Our Projects')}
        title={t('projects.title', 'Flagship programs, built for lasting change.')}
        description={t(
          'projects.subtitle',
          'Three long-term initiatives addressing housing, orphan care, and spiritual community infrastructure across South India.'
        )}
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-10">
            <span className="badge">{t('projects.allProgramsBadge', 'All Programs')}</span>
            <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold text-text-main tracking-tight">
              {t('projects.allProgramsTitle', 'Every project, transparently tracked from fund to field.')}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIF_PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
