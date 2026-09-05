import React, { useState } from 'react'
import { Mail, Phone, Clock, Building2, Send, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import { HIF_ORGANIZATION } from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { UNSPLASH } from '../data/unsplashImages'
import { Reveal } from '../components/common/Reveal'
import { useLanguage } from '../context/LanguageContext'

export const ContactPage: React.FC = () => {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    confetti({ particleCount: 60, spread: 55, origin: { y: 0.7 } })
  }

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal className="space-y-5">
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

            <div className="rounded-xl overflow-hidden border border-border h-56">
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

          <Reveal delay={0.1} className="card p-7 sm:p-9">
            <h3 className="font-display text-2xl font-semibold text-text-main">
              {t('contact.formTitle', 'Send Us a Message')}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {t('contact.formSubtitle', 'We typically respond within 24 hours.')}
            </p>

            {submitted ? (
              <div className="py-14 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="mt-4 font-display text-xl font-semibold text-text-main">
                  {t('contact.messageSentTitle', 'Message sent!')}
                </h4>
                <p className="mt-2 text-sm text-text-muted">
                  {t('contact.messageSentText', 'Thank you for reaching out to HIF INDIA. We will reply shortly.')}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                >
                  {t('contact.sendAnother', 'Send another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label={t('contact.nameLabel', 'Full Name *')}
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder={t('contact.namePlaceholder', 'e.g. Ahmed Khan')}
                    required
                  />
                  <Field
                    label={t('contact.phoneInputLabel', 'Phone / WhatsApp *')}
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder={t('contact.phonePlaceholder', '+91 98765 43210')}
                    required
                    type="tel"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label={t('contact.emailInputLabel', 'Email Address')}
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder={t('contact.emailPlaceholder', 'you@example.com')}
                    type="email"
                  />
                  <div>
                    <label className="text-xs font-semibold text-text-muted block mb-1">
                      {t('contact.subjectLabel', 'Subject')}
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-bg-alt dark:bg-card-tint border border-border text-sm text-text-main focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400"
                    >
                      <option>{t('contact.subjects.general', 'General Inquiry')}</option>
                      <option>{t('projects.ashiyana.title', 'Project Ashiyana Housing')}</option>
                      <option>{t('projects.chittor.title', 'Chittor Orphan Sponsorship')}</option>
                      <option>{t('projects.masjid.title', 'Masjid Development Fund')}</option>
                      <option>{t('activities.medical.title', 'MEDIBANK Equipment Request')}</option>
                      <option>{t('contact.subjects.donation', 'Donation & 80G Receipt')}</option>
                      <option>{t('contact.subjects.volunteer', 'Volunteering')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-muted block mb-1">
                    {t('contact.messageFieldLabel', 'Your Message *')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t('contact.messagePlaceholder', 'Share details of your inquiry or support requirement...')}
                    className="w-full px-4 py-2.5 rounded-lg bg-bg-alt dark:bg-card-tint border border-border text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" /> {t('contact.sendMessage', 'Submit Inquiry')}
                </button>
              </form>
            )}
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

const Field: React.FC<{
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
  type?: string
}> = ({ label, value, onChange, placeholder, required, type = 'text' }) => (
  <div>
    <label className="text-xs font-semibold text-text-muted block mb-1">{label}</label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-lg bg-bg-alt dark:bg-card-tint border border-border text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400"
    />
  </div>
)

export default ContactPage
