import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  Copy,
  Check,
  QrCode,
  CheckCircle2,
  Droplet,
  BookOpenText,
  LifeBuoy,
  Camera,
  ClipboardCheck,
  CalendarCheck,
  Users,
  Building2,
  HelpCircle,
  ChevronDown
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import confetti from 'canvas-confetti'
import {
  HIF_ORGANIZATION,
  IMPACT_CALCULATOR_PRESETS,
} from '../data/hifData'
import { PageHeader } from '../components/common/PageHeader'
import { useDonate } from '../context/DonateContext'
import { useLanguage } from '../context/LanguageContext'
import { UNSPLASH } from '../data/unsplashImages'
import { Reveal } from '../components/common/Reveal'
import { localizeImpact } from '../lib/localizeContent'
import { buildWhatsAppUrl } from '../lib/submitForm'

export const GetInvolvedPage: React.FC = () => {
  const [amount, setAmount] = useState(5000)
  const { openDonate } = useDonate()
  const { t, language } = useLanguage()
  const impact = useMemo(() => localizeImpact(amount, language), [amount, language])

  return (
    <>
      <PageHeader
        eyebrow={t('getInvolved.eyebrow', 'Get Involved')}
        title={t('getInvolved.title', 'Everyone has a role to play.')}
        description={t(
          'getInvolved.description',
          'Calculate your impact, sign up to volunteer, or contribute directly — every path leads to real change on the ground.'
        )}
        image={UNSPLASH.volunteerHands}
      />

      {/* Impact Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="badge">{t('getInvolved.calculatorBadge', 'Impact Calculator')}</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-text-main">
              {t('getInvolved.calculatorTitle', 'See what your gift can do')}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="card p-6 sm:p-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {IMPACT_CALCULATOR_PRESETS.map((preset) => (
                <button
                  key={preset.amount}
                  onClick={() => setAmount(preset.amount)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    amount === preset.amount
                      ? 'bg-emerald-700 dark:bg-emerald-600 border-emerald-700 dark:border-emerald-500 text-white shadow-sm'
                      : 'bg-card dark:bg-[#07231c] border-border dark:border-emerald-800/50 text-text-muted hover:border-emerald-300 dark:hover:border-emerald-500'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <motion.div
              key={impact.headline}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-8 p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/60"
            >
              <p className="text-xs font-semibold text-primary dark:text-emerald-300 uppercase tracking-wide">{impact.suggestedPledge}</p>
              <h3 className="font-display mt-1 text-2xl font-semibold text-text-main">{impact.headline}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{impact.primaryImpact}</p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {impact.tangibles.map((tItem) => (
                  <div key={tItem.label} className="p-3 rounded-lg bg-card dark:bg-[#082820] border border-emerald-100 dark:border-emerald-800/60 text-center">
                    <p className="text-sm font-bold text-primary-deep">{tItem.count}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">{tItem.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openDonate(impact.recommendedProgram, amount)}
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
              >
                <Heart className="w-4 h-4" /> {t('common.pledgeNow', 'Pledge')} ₹{amount.toLocaleString()} {t('common.now', 'Now')}
              </button>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Volunteer + Bank details side by side */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-alt">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <VolunteerForm />
          </Reveal>
          <Reveal delay={0.1}>
            <BankDetailsCard />
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}

const VolunteerForm: React.FC = () => {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', city: 'Mangalore', skills: [] as string[] })

  const skillOptions = [
    { key: 'bloodDonation', label: t('getInvolved.skills.bloodDonation', 'Blood Donation / Medical Coordination'), icon: Droplet },
    { key: 'teaching', label: t('getInvolved.skills.teaching', 'Teaching / Spoken English / Tutoring'), icon: BookOpenText },
    { key: 'disasterResponse', label: t('getInvolved.skills.disasterResponse', 'Disaster & Flood Emergency Response'), icon: LifeBuoy },
    { key: 'mediaDesign', label: t('getInvolved.skills.mediaDesign', 'Graphic Design, Video & Social Media'), icon: Camera },
    { key: 'fieldVerification', label: t('getInvolved.skills.fieldVerification', 'Ashiyana Field Verification & Relief'), icon: ClipboardCheck },
    { key: 'eventLogistics', label: t('getInvolved.skills.eventLogistics', 'Event Organization & Logistics'), icon: CalendarCheck }
  ]

  const toggleSkill = (skill: string) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(skill) ? f.skills.filter((s) => s !== skill) : [...f.skills, skill]
    }))
  }

  const whatsAppHref = buildWhatsAppUrl(
    HIF_ORGANIZATION.contact.whatsapp,
    [
      'Assalamu Alaikum, HIF INDIA.',
      form.name ? `My name is ${form.name}.` : '',
      'I would like to volunteer.',
      form.city ? `I am based in ${form.city}.` : '',
      form.skills.length ? `Skills: ${form.skills.join(', ')}.` : '',
      form.phone ? `My WhatsApp/phone: ${form.phone}.` : ''
    ]
      .filter(Boolean)
      .join(' ')
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(whatsAppHref, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } })
  }

  return (
    <div className="card p-7 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary shrink-0">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-text-main">
            {t('getInvolved.volunteerTitle', 'Become a HIF Volunteer')}
          </h3>
          <p className="text-sm text-text-muted">
            {t('getInvolved.volunteerSubtitle', 'Put your skills and time into action for lasting community transformation.')}
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="py-10 text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="mt-4 font-display text-xl font-semibold text-text-main">
            {t('getInvolved.form.successTitle', 'Thank You for Registering!')}
          </h4>
          <p className="mt-2 text-sm text-text-muted max-w-sm mx-auto">
            {t('getInvolved.form.successMessage', 'Our volunteer coordinator will get in touch with you via WhatsApp or phone shortly.')}
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setForm({ name: '', phone: '', city: 'Mangalore', skills: [] })
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-primary bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
          >
            {t('getInvolved.form.submitAnother', 'Submit Another Application')}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-text-muted block mb-1">
              {t('getInvolved.form.fullName', 'Full Name *')}
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t('getInvolved.form.fullNamePlaceholder', 'e.g. Mohammed Farooq')}
              className="w-full px-4 py-2.5 rounded-lg bg-bg-alt dark:bg-card-tint border border-border text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-text-muted block mb-1">
                {t('getInvolved.form.phone', 'Phone / WhatsApp *')}
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t('getInvolved.form.phonePlaceholder', '+91 98765 43210')}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-alt dark:bg-card-tint border border-border text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-text-muted block mb-1">
                {t('getInvolved.form.city', 'City / Location *')}
              </label>
              <input
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder={t('getInvolved.form.cityPlaceholder', 'e.g. Mangalore, Udupi')}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-alt dark:bg-card-tint border border-border text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-text-muted block mb-2">
              {t('getInvolved.form.skillsLabel', 'How would you like to contribute? (Select skills)')}
            </label>
            <div className="grid grid-cols-1 gap-2">
              {skillOptions.map(({ label, icon: Icon }) => {
                const checked = form.skills.includes(label)
                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => toggleSkill(label)}
                    className={`flex items-center gap-2.5 text-left px-3 py-2.5 rounded-lg text-xs font-medium border transition-colors ${
                      checked
                        ? 'bg-emerald-50 dark:bg-[#0a3328] border-emerald-300 dark:border-emerald-600 text-emerald-800 dark:text-emerald-200'
                        : 'bg-bg-alt dark:bg-card-tint border-border text-text-muted hover:bg-emerald-50/80 dark:hover:bg-card-tint'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${checked ? 'text-primary' : 'text-text-muted'}`} />
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" aria-hidden />
            {t('getInvolved.form.whatsAppButton', 'Send via WhatsApp')}
          </button>
        </form>
      )}
    </div>
  )
}

const BankDetailsCard: React.FC = () => {
  const { t } = useLanguage()
  const bank = HIF_ORGANIZATION.bankDetails
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [showQR, setShowQR] = useState(false)

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const upiPayUrl = `upi://pay?pa=${bank.upiId}&pn=${encodeURIComponent(bank.accountName)}&cu=INR`
  const qrCodeImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiPayUrl)}&bgcolor=ffffff&color=065f46&margin=8`

  return (
    <div className="card p-7 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-700/60 flex items-center justify-center text-amber-700 dark:text-amber-300 shrink-0">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-text-main">
            {t('getInvolved.bankCard.title', 'Direct Bank Transfer')}
          </h3>
          <p className="text-sm text-text-muted">
            {t('getInvolved.bankCard.subtitle', 'Directly fund our accounts with zero processing fees')}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-sm">
        <div className="p-3 rounded-lg bg-bg-alt dark:bg-card-tint border border-border flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-text-muted font-semibold block">
              {t('getInvolved.bankCard.accountName', 'Beneficiary Name')}
            </span>
            <span className="font-semibold text-text-main">{bank.accountName}</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-bg-alt dark:bg-card-tint border border-border flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-text-muted font-semibold block">
              {t('getInvolved.bankCard.accountNumber', 'Account Number')}
            </span>
            <span className="font-mono font-semibold text-text-main">{bank.accountNumber}</span>
          </div>
          <button onClick={() => copy(bank.accountNumber, 'acc')} className="p-1.5 rounded-lg text-text-muted hover:text-primary dark:hover:text-emerald-100">
            {copiedField === 'acc' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-bg-alt dark:bg-card-tint border border-border">
            <span className="text-[10px] uppercase text-text-muted font-semibold block">
              {t('getInvolved.bankCard.ifsc', 'IFSC Code')}
            </span>
            <span className="font-mono font-semibold text-text-main text-xs">{bank.ifscCode}</span>
          </div>
          <div className="p-3 rounded-lg bg-bg-alt dark:bg-card-tint border border-border">
            <span className="text-[10px] uppercase text-text-muted font-semibold block">
              {t('getInvolved.bankCard.branch', 'Branch')}
            </span>
            <span className="font-semibold text-text-main text-xs">HDFC Bunder Branch</span>
          </div>
        </div>
        <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/60">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-[10px] uppercase text-primary font-semibold block">
                {t('getInvolved.bankCard.upiId', 'UPI ID')}
              </span>
              <span className="font-mono font-semibold text-text-main">{bank.upiId}</span>
            </div>
            <button
              onClick={() => setShowQR(!showQR)}
              className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <QrCode className="w-3.5 h-3.5" /> {showQR ? t('donateModal.hideQr', 'Hide QR') : t('donateModal.showQr', 'Show QR')}
            </button>
          </div>
          {showQR && (
            <div className="mt-4 pt-4 border-t border-emerald-200/70 dark:border-emerald-700/60 flex flex-col items-center">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <img src={qrCodeImgUrl} alt="UPI QR" className="w-36 h-36 rounded-lg" loading="lazy" />
              </div>
            </div>
          )}
        </div>
        <p className="text-[11px] text-text-muted text-center pt-1">
          {t('getInvolved.bankCard.taxNote', 'All donations are eligible for 80G tax exemption benefits.')}
        </p>
      </div>
    </div>
  )
}

const FAQSection: React.FC = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: t('getInvolved.faqs.q1', 'Is HIF India eligible for 80G tax deductions?'),
      a: t('getInvolved.faqs.a1', 'Yes, donations to HIF INDIA are eligible for 80G tax exemption under the Indian Income Tax Act. Official receipts and certificates are provided.')
    },
    {
      q: t('getInvolved.faqs.q2', 'How much of my donation goes directly to beneficiaries?'),
      a: t('getInvolved.faqs.a2', '100% of project-designated donations go directly to materials, labor, food, or medical aid with zero administrative cuts.')
    },
    {
      q: t('getInvolved.faqs.q3', 'Can I sponsor an entire Ashiyana home or orphan student?'),
      a: t('getInvolved.faqs.a3', 'Yes! You can sponsor an entire home construction (₹7.5L) or sponsor an orphan student annually (₹15,000/yr) with full milestone reports.')
    },
    {
      q: t('getInvolved.faqs.q4', 'Can I volunteer remotely if I live outside Mangalore?'),
      a: t('getInvolved.faqs.a4', 'Absolutely. We welcome remote volunteers for digital design, translation, web development, curriculum drafting, and social media outreach.')
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-10">
          <span className="badge">{t('getInvolved.faqTitle', 'Frequently Asked Questions')}</span>
          <h2 className="font-display mt-4 text-3xl font-semibold text-text-main">
            {t('getInvolved.faqSubtitle', 'Clear answers on how donations, audits, and projects are managed.')}
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <Reveal key={faq.q} delay={idx * 0.05} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-text-main text-sm hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-text-muted leading-relaxed border-t border-border">
                    {faq.a}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedPage
