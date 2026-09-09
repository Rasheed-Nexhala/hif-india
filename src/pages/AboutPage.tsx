import React from 'react'
import { Eye, Target, MapPin, ShieldCheck, Building2, Heart, Award, Users } from 'lucide-react'
import { HIF_ORGANIZATION } from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { UNSPLASH } from '../data/unsplashImages'
import { Reveal } from '../components/common/Reveal'
import { useLanguage } from '../context/LanguageContext'

export const AboutPage: React.FC = () => {
  const { t } = useLanguage()

  const coreValues = [
    {
      icon: ShieldCheck,
      title: t('about.values.transparencyTitle', '100% Transparency'),
      desc: t(
        'about.values.transparencyDesc',
        'Every rupee received is publicly accounted for and channeled directly to the field with zero administrative cuts.'
      ),
      color: 'emerald'
    },
    {
      icon: Heart,
      title: t('about.values.compassionTitle', 'Universal Compassion'),
      desc: t(
        'about.values.compassionDesc',
        'Serving all human beings with genuine care, empathy, and unconditional brotherhood regardless of background.'
      ),
      color: 'amber'
    },
    {
      icon: Award,
      title: t('about.values.dignityTitle', 'Upholding Human Dignity'),
      desc: t(
        'about.values.dignityDesc',
        'Empowering recipients through permanent solutions and respect, rather than temporary patronizing charity.'
      ),
      color: 'emerald'
    },
    {
      icon: Users,
      title: t('about.values.sustainabilityTitle', 'Sustainable Impact'),
      desc: t(
        'about.values.sustainabilityDesc',
        'Designing long-term programs in housing, education, and solar-powered facilities that endure for generations.'
      ),
      color: 'amber'
    }
  ]

  return (
    <>
      <PageHeader
        eyebrow={t('about.eyebrow', 'About HIF INDIA')}
        title={t('about.title', 'A grassroots trust, built on community trust.')}
        description={t(
          'about.description',
          'Highland Islamic Forum (HIF INDIA) is a registered NGO headquartered in Mangaluru, working across Karnataka and Andhra Pradesh.'
        )}
        image={HIF_ORGANIZATION.siteImages.about}
      />

      {/* About narrative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-border order-2 lg:order-1">
            <img src={HIF_ORGANIZATION.siteImages.aboutAlt} alt="HIF India field work" className="w-full h-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="badge">{t('about.whoWeAreBadge', 'Who We Are')}</span>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-text-main tracking-tight">
              {t('about.whoWeAreTitle', HIF_ORGANIZATION.fullName)}
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed">
              {t('about.whoWeAreText1', `${HIF_ORGANIZATION.tagline}. Since our founding, we have focused on tangible, measurable interventions — permanent housing for the homeless, a loving residential sanctuary for orphaned boys, restoration of abandoned rural masjids, and free-of-cost medical equipment loans and blood donation coordination for families in crisis.`)}
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              {t('about.whoWeAreText2', `${HIF_ORGANIZATION.regDetails}, HIF INDIA operates on a strict zero-commission policy: every rupee donated toward a specific project is channeled directly into materials, labor, meals, or medical relief for the intended beneficiaries.`)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team & Community */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-alt">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge">{t('about.teamBadge', 'Our Community')}</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-text-main">
              {t('about.teamTitle', 'The people behind the mission')}
            </h2>
            <p className="mt-3 text-text-muted text-sm leading-relaxed">
              {t(
                'about.teamDesc',
                'HIF India is powered by hundreds of volunteers, youth leaders, and community members who show up with compassion at every event, programme, and relief drive.'
              )}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {HIF_ORGANIZATION.teamPhotos.map((photo, idx) => (
              <Reveal key={photo} delay={idx * 0.05} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/60 shadow-sm">
                <img
                  src={photo}
                  alt={t('about.teamPhotoAlt', 'HIF India team and community')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-bg-alt overflow-hidden">
        <img
          src={UNSPLASH.warmArchitecture}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf7] via-[#f8faf7]/85 to-[#f8faf7] dark:from-[#07231c] dark:via-[#07231c]/85 dark:to-[#07231c] pointer-events-none" />
        <Reveal className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-8">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary dark:text-emerald-300 mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-text-main">
              {t('about.visionTitle', 'Our Vision')}
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed text-sm">
              {t('about.visionText', HIF_ORGANIZATION.vision)}
            </p>
          </div>
          <div className="card p-8">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-700/60 flex items-center justify-center text-accent dark:text-amber-300 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-text-main">
              {t('about.missionTitle', 'Our Mission')}
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed text-sm">
              {t('about.missionText', HIF_ORGANIZATION.mission)}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge">{t('about.coreValuesTitle', 'Our Core Values')}</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-text-main">
              {t('about.coreValuesSubtitle', 'Guiding principles that govern every initiative and grassroots intervention.')}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <Reveal key={val.title} delay={idx * 0.08} className="card p-6 flex flex-col justify-between">
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                        val.color === 'emerald'
                          ? 'bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 text-primary dark:text-emerald-300'
                          : 'bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-700/60 text-accent dark:text-amber-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-text-main">{val.title}</h3>
                    <p className="mt-2 text-xs text-text-muted leading-relaxed">{val.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* HQ + Trust */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal className="card p-8">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary dark:text-emerald-300 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-text-main">
              {t('about.hqTitle', 'Headquarters')}
            </h3>
            <p className="mt-3 text-text-muted text-sm leading-relaxed">
              {t('org.hqLocation', HIF_ORGANIZATION.address.full)}
            </p>
            <div className="mt-5 rounded-xl overflow-hidden border border-border dark:border-emerald-800/50 h-48">
              <iframe
                title="HIF India headquarters map"
                src="https://maps.google.com/maps?q=Masjid%20Ehsaan,%20Kankanady,%20Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card p-8">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-700/60 flex items-center justify-center text-accent dark:text-amber-300 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-text-main">
              {t('about.trustTitle', 'Transparency & Trust')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {t('about.trustPoint1', `${HIF_ORGANIZATION.regDetails}, based in Mangaluru, Karnataka.`)}
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {t('about.trustPoint2', '100% direct, zero-commission disbursement to grassroots beneficiaries.')}
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {t('about.trustPoint3', 'Annual financial audits with donor-visible spend breakdowns on request.')}
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {t('about.trustPoint4', 'Transfer receipts and 80G tax certificates issued for every contribution.')}
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default AboutPage
