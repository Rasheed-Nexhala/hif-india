import React from 'react'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { StatCounter } from '../common/StatCounter'
import { useLanguage } from '../../context/LanguageContext'

export const ImpactStatsBand: React.FC = () => {
  const { t } = useLanguage()

  const getTranslatedLabel = (originalLabel: string) => {
    switch (originalLabel) {
      case 'Houses Delivered':
        return t('stats.housesDelivered', originalLabel)
      case 'Masjids Revived & Maintained':
        return t('stats.masjidsRevived', originalLabel)
      case 'Orphan Students Nurtured':
        return t('stats.orphansNurtured', originalLabel)
      case 'Blood Units Mobilized':
        return t('stats.bloodUnits', originalLabel)
      case 'Audit & Transparency':
        return t('stats.auditTransparency', originalLabel)
      default:
        return originalLabel
    }
  }

  return (
    <section className="section-dark py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {HIF_ORGANIZATION.statsSummary.map((s) => (
          <StatCounter
            key={s.label}
            value={s.count}
            suffix={s.suffix}
            label={getTranslatedLabel(s.label)}
            dark
          />
        ))}
      </div>
    </section>
  )
}
