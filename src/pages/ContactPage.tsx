import React from 'react'
import { Mail, Phone, Clock, Building2, MessageCircle } from 'lucide-react'
import { HIF_ORGANIZATION } from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { UNSPLASH } from '../data/unsplashImages'
import { Reveal } from '../components/common/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { buildWhatsAppUrl } from '../lib/submitForm'

export const ContactPage: React.FC = () => {
  const { t } = useLanguage()

  const whatsAppHref = buildWhatsAppUrl(
    HIF_ORGANIZATION.contact.whatsapp,
    'Assalamu Alaikum, HIF INDIA. I would like to get in touch.'
  )

  return (
    <>
      <PageHeader
        eyebrow={t('contact.eyebrow', 'Contact')}
        title={t('contact.title', "We'd love to hear from you.")}
        description={t(
          'contact.description',
          'Reach our Mangaluru headquarters for donations, sponsorships, medical equipment requests, or volunteering.'
        )}
        image={UNSPLASH.volunteerGroup}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal>
            <div className="card p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main">
                  {t('contact.centralSecretariat', 'Central Secretariat')}
                </h3>
                <p className="text-sm text-text-muted mt-1">{HIF_ORGANIZATION.address.full}</p>
                <p className="text-xs text-primary font-medium mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {t('contact.hoursValue', '9:00 AM – 7:00 PM (Mon–Sat)')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="card p-6 space-y-3">
              <ContactRow
                icon={Phone}
                label={t('contact.primaryPhoneLabel', 'Primary Office & Medical Cell')}
                value={HIF_ORGANIZATION.contact.primaryPhone}
                href={`tel:${HIF_ORGANIZATION.contact.primaryPhone.replace(/\s+/g, '')}`}
              />
              <ContactRow
                icon={Phone}
                label={t('contact.altPhoneLabel', 'Alternate Helpline')}
                value={HIF_ORGANIZATION.contact.altPhone}
                href={`tel:${HIF_ORGANIZATION.contact.altPhone.replace(/\s+/g, '')}`}
              />
              <ContactRow
                icon={Mail}
                label={t('contact.emailLabel', 'Official Email')}
                value={HIF_ORGANIZATION.contact.email}
                href={`mailto:${HIF_ORGANIZATION.contact.email}`}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 hover:border-emerald-300 dark:hover:border-emerald-500 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/60 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">
                  {t('contact.whatsAppButton', 'Message us on WhatsApp')}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {t('contact.whatsAppHint', 'Fastest way to reach us — tap to open WhatsApp.')}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                title="HIF India location map"
                src="https://maps.google.com/maps?q=Masjid%20Ehsaan,%20Kankanady,%20Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const ContactRow: React.FC<{ icon: React.ElementType; label: string; value: string; href: string }> = ({
  icon: Icon,
  label,
  value,
  href
}) => (
  <a
    href={href}
    className="flex items-center justify-between p-3.5 rounded-xl bg-bg-alt dark:bg-card-tint border border-border hover:border-emerald-300 dark:hover:border-emerald-500 transition-colors group"
  >
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-card dark:bg-card-tint border border-stone-200 dark:border-emerald-800/60 flex items-center justify-center text-primary group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/40 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <span className="text-[10px] uppercase tracking-wide text-text-muted font-semibold block">{label}</span>
        <span className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">{value}</span>
      </div>
    </div>
  </a>
)

export default ContactPage
