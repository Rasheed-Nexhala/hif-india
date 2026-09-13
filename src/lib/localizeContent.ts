import type { ActivityData, GalleryItem, ProjectData } from '../data/hifData'
import type { HifReel } from '../data/hifReels'
import { calculateImpactFromAmount } from '../data/hifData'
import type { Language } from '../data/translations'
import { extraStrings } from '../data/entityTranslations'

type TFn = (key: string, fallback?: string) => string

export function tx(language: Language, key: string, fallback: string): string {
  return extraStrings[language]?.[key] ?? extraStrings.en[key] ?? fallback
}

const PROJECT_KEYS: Record<string, string> = {
  'project-ashiyana': 'ashiyana',
  'chittor-dream-project': 'chittor',
  'masjid-development': 'masjid',
  'hif-education-city': 'educationCity',
  'project-boondh': 'boondh',
  'project-libaas': 'libaas'
}

const ACTIVITY_KEYS: Record<string, string> = {
  'hif-medical-cell': 'medical',
  'hif-education-wing': 'education',
  'hif-youth-wing': 'youth'
}

export function localizeProject(project: ProjectData, t: TFn, language: Language): ProjectData {
  const key = PROJECT_KEYS[project.id]
  if (!key) return project

  const prefix = `projects.${key}`
  return {
    ...project,
    title: t(`${prefix}.title`, project.title),
    subtitle: t(`${prefix}.subtitle`, project.subtitle),
    badge: t(`${prefix}.badge`, project.badge),
    overview: t(`${prefix}.overview`, project.overview),
    stats: project.stats.map((s, i) => ({
      value: s.value,
      label: tx(language, `${key}.stat${i + 1}`, s.label)
    })),
    fullStory: project.fullStory.map((para, i) => tx(language, `${key}.story${i + 1}`, para)),
    achievements: project.achievements.map((a, i) => tx(language, `${key}.ach${i + 1}`, a)),
    futureGoals: project.futureGoals.map((g, i) => tx(language, `${key}.goal${i + 1}`, g)),
    supportTiers: project.supportTiers.map((tier, i) => ({
      ...tier,
      title: tx(language, `${key}.tier${i + 1}Title`, tier.title),
      unit: tx(language, `${key}.tier${i + 1}Unit`, tier.unit),
      description: tx(language, `${key}.tier${i + 1}Desc`, tier.description)
    }))
  }
}

export function localizeActivity(activity: ActivityData, t: TFn, language: Language): ActivityData {
  const key = ACTIVITY_KEYS[activity.id]
  if (!key) return activity

  const prefix = `activities.${key}`
  return {
    ...activity,
    title: t(`${prefix}.title`, activity.title),
    subtitle: t(`${prefix}.subtitle`, activity.subtitle),
    badge: t(`${prefix}.badge`, activity.badge),
    overview: t(`${prefix}.overview`, activity.overview),
    stats: activity.stats.map((s, i) => ({
      value: s.value,
      label: tx(language, `${key}.stat${i + 1}`, s.label)
    })),
    fullStory: activity.fullStory.map((para, i) => tx(language, `${key}.story${i + 1}`, para)),
    features: activity.features.map((f, i) => tx(language, `${key}.feat${i + 1}`, f)),
    impactPoints: activity.impactPoints.map((p, i) => tx(language, `${key}.imp${i + 1}`, p))
  }
}

export function localizeGalleryItem(item: GalleryItem, language: Language): GalleryItem {
  return {
    ...item,
    title: tx(language, `gal.${item.id}.title`, item.title),
    description: tx(language, `gal.${item.id}.desc`, item.description),
    location: tx(language, `gal.${item.id}.loc`, item.location)
  }
}

export function localizeReel(reel: HifReel, language: Language): HifReel {
  return {
    ...reel,
    caption: tx(language, `reel.${reel.id}.caption`, reel.caption)
  }
}

export function galleryCategoryLabel(category: string, t: TFn): string {
  const map: Record<string, string> = {
    All: t('gallery.filters.all', 'All'),
    Housing: t('gallery.filters.housing', 'Housing'),
    Orphanage: t('gallery.filters.orphanage', 'Orphanage'),
    Masjid: t('gallery.filters.masjid', 'Masjid'),
    Healthcare: t('gallery.filters.healthcare', 'Healthcare'),
    Education: t('gallery.filters.education', 'Education'),
    Youth: t('gallery.filters.youth', 'Youth'),
    Community: t('gallery.filters.community', 'Community')
  }
  return map[category] ?? category
}

export function localizeImpact(amount: number, language: Language) {
  const raw = calculateImpactFromAmount(amount)
  const band =
    amount < 2000
      ? 'a'
      : amount < 9000
        ? 'b'
        : amount < 14500
          ? 'c'
          : amount < 15000
            ? 'd'
            : amount < 35000
              ? 'e'
              : amount < 75000
                ? 'f'
                : 'g'

  return {
    ...raw,
    headline: tx(language, `impact.${band}.headline`, raw.headline),
    primaryImpact: tx(language, `impact.${band}.desc`, raw.primaryImpact),
    suggestedPledge: tx(language, `impact.${band}.pledge`, raw.suggestedPledge),
    recommendedProgram: tx(language, `impact.${band}.program`, raw.recommendedProgram),
    tangibles: raw.tangibles.map((item, i) => ({
      ...item,
      label: tx(language, `impact.${band}.t${i + 1}`, item.label)
    }))
  }
}
