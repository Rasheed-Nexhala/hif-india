import React from 'react'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useTheme } from '../../context/ThemeContext'
import { StatCounter } from '../common/StatCounter'
import { useLanguage } from '../../context/LanguageContext'

export const ImpactStatsBand: React.FC = () => {
  const { t } = useLanguage()
  const { isDark } = useTheme()

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
    <section className="section-dark py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:gap-8">
        {HIF_ORGANIZATION.statsSummary.map((s, index, stats) => {
          const isLastWithOddCount = stats.length % 2 !== 0 && index === stats.length - 1

          return (
            <div
              key={s.label}
              className={
                isLastWithOddCount
                  ? 'col-span-2 sm:col-span-1 lg:col-span-1 flex justify-center sm:block'
                  : undefined
              }
            >
              <StatCounter
                value={s.count}
                suffix={s.suffix}
                label={getTranslatedLabel(s.label)}
                dark={isDark}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
