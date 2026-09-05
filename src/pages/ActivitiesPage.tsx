import React from 'react'
import { HIF_ACTIVITIES } from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { ActivityCard } from '../components/cards/ActivityCard'
import { Reveal } from '../components/common/Reveal'
import { useLanguage } from '../context/LanguageContext'

export const ActivitiesPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        eyebrow={t('activities.eyebrow', 'Activities & Wings')}
        title={t('activities.title', 'Everyday programs, powered by volunteers.')}
        description={t(
          'activities.subtitle',
          'From free medical equipment loans to scholarships and youth leadership — our wings deliver consistent, on-ground support.'
        )}
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-10">
            <span className="badge">{t('activities.wingsBadge', 'Our Wings')}</span>
            <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold text-text-main tracking-tight">
              {t('activities.wingsTitle', 'Consistent, on-ground support every single day.')}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIF_ACTIVITIES.map((a, i) => (
              <ActivityCard key={a.id} activity={a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ActivitiesPage
