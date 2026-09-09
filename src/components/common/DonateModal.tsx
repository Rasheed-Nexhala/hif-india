import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  Copy,
  Check,
  Building2,
  QrCode,
  ShieldCheck,
  AlertTriangle,
  Sparkles
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useDonate } from '../../context/DonateContext'
import { useLanguage } from '../../context/LanguageContext'

type Tab = 'qr' | 'bank'

export const DonateModal: React.FC = () => {
  const { isOpen, cause, amount, closeDonate } = useDonate()
  const { t } = useLanguage()
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('qr')

  const bank = HIF_ORGANIZATION.bankDetails

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  useEffect(() => {
    if (!isOpen) return
    setTab('qr')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDonate()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeDonate])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeDonate}
            className="fixed inset-0 bg-stone-900/60"
          />

          {/* Scroll wrapper: min-h-full + items-center keeps the card centered
              when it's shorter than the viewport, but still lets the user
              scroll to the very top/bottom when it's taller (e.g. small
              phones) — plain `items-center` on the overlay itself clips
              content that overflows the viewport and can't be scrolled to. */}
          <div className="relative min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6 py-6 sm:py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="donate-modal-title"
              className="relative w-full max-w-md bg-card dark:bg-[#082820] rounded-2xl shadow-2xl border border-border dark:border-emerald-800/50 z-10"
            >
              <div className="sticky top-0 z-20 flex items-start justify-between gap-3 p-4 sm:p-6 pb-4 border-b border-border bg-card dark:bg-[#082820] rounded-t-2xl">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary dark:text-emerald-300 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 id="donate-modal-title" className="text-base font-bold text-text-main">
                      {t('donateModal.title', 'Donate to HIF INDIA')}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {t('donateModal.subtitle', 'Bank transfer & UPI details')}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeDonate}
                  aria-label={t('common.close', 'Close')}
                  className="p-2 -m-1 rounded-lg text-text-muted hover:text-text-main dark:hover:text-stone-100 hover:bg-bg-alt dark:hover:bg-emerald-900/40 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 pt-4">
                {(cause || amount) && (
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 flex items-center justify-between gap-2 text-xs">
                    <div className="min-w-0">
                      <span className="text-text-muted dark:text-amber-200/80 block">{t('donateModal.forCause', 'For')}</span>
                      <span className="font-semibold text-text-main dark:text-amber-100 line-clamp-2">{cause || t('donateModal.generalFund', 'General Humanitarian Fund')}</span>
                    </div>
                    {amount && (
                      <span className="font-bold text-accent dark:text-amber-300 text-base shrink-0">
                        ₹{amount.toLocaleString()}
                      </span>
                    )}
                  </div>
                )}

                {/* Payment method tabs */}
                <div className={`grid grid-cols-2 gap-2 p-1 rounded-xl bg-bg-alt dark:bg-[#051c15] border border-border dark:border-emerald-800/50 ${cause || amount ? 'mt-4' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setTab('qr')}
                    className={`relative flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                      tab === 'qr'
                        ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-sm'
                        : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    {t('donateModal.tabScanQr', 'Scan & Pay')}
                    {tab !== 'qr' && (
                      <span className="absolute -top-2 -right-1.5 px-1.5 py-0.5 rounded-full bg-amber-500 text-emerald-950 text-[9px] font-bold flex items-center gap-0.5 shadow">
                        <Sparkles className="w-2.5 h-2.5" /> {t('donateModal.fastestBadge', 'Fastest')}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab('bank')}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                      tab === 'bank'
                        ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-sm'
                        : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    {t('donateModal.tabBankTransfer', 'Bank Transfer')}
                  </button>
                </div>

                <div className="mt-4 text-sm overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    {tab === 'qr' ? (
                      <motion.div
                        key="qr"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.18 }}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="p-2 bg-card rounded-xl shadow-sm">
                          <img
                            src="/images/donate/hif-qr.jpg"
                            alt="HIF INDIA official UPI QR Code"
                            className="w-40 sm:w-48 h-auto rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-[11px] text-text-muted mt-2">
                          {t('donateModal.qrHelp', 'Scan with GPay, PhonePe, Paytm, or BHIM')}
                        </p>

                        <div className="mt-3 w-full p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 flex items-start gap-2 text-left">
                          <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                          <p className="text-[11px] text-red-700 dark:text-red-300 leading-relaxed">
                            <span className="font-semibold block">
                              {t('donateModal.qrSecurityTitle', 'Verify before you pay')}
                            </span>
                            {t(
                              'donateModal.qrSecurityNote',
                              'After scanning, your UPI app must show the payee name as "HIF INDIA". If any other name appears, do not proceed — stop and contact us on WhatsApp immediately.'
                            )}
                          </p>
                        </div>

                        <div className="mt-3 w-full p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-between gap-2">
                          <div className="min-w-0 text-left">
                            <span className="text-[10px] uppercase tracking-wide text-primary dark:text-emerald-300 font-semibold block">
                              {t('donateModal.upiId', 'UPI ID')}
                            </span>
                            <span className="font-mono font-semibold text-text-main text-xs truncate block">
                              {bank.upiId}
                            </span>
                          </div>
                          <button
                            onClick={() => copy(bank.upiId, 'upi')}
                            className="px-2.5 py-1.5 rounded-lg bg-card dark:bg-[#082820] border border-emerald-200 dark:border-emerald-700/60 text-primary dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-xs font-semibold flex items-center gap-1 transition-colors shrink-0"
                          >
                            {copiedField === 'upi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="bank"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-3"
                      >
                        <Row
                          label={t('donateModal.beneficiaryName', 'Beneficiary Name')}
                          value={bank.accountName}
                          onCopy={() => copy(bank.accountName, 'name')}
                          copied={copiedField === 'name'}
                        />
                        <Row
                          label={t('donateModal.accountNumber', `Account Number (${bank.accountType})`)}
                          value={bank.accountNumber}
                          mono
                          onCopy={() => copy(bank.accountNumber, 'acc')}
                          copied={copiedField === 'acc'}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Row
                            label={t('donateModal.ifscCode', 'IFSC Code')}
                            value={bank.ifscCode}
                            mono
                            onCopy={() => copy(bank.ifscCode, 'ifsc')}
                            copied={copiedField === 'ifsc'}
                          />
                          <Row
                            label={t('donateModal.branch', 'Branch')}
                            value={t('donateModal.branchValue', 'HDFC Bunder Branch, Mangalore')}
                            onCopy={() => copy(bank.branch, 'branch')}
                            copied={copiedField === 'branch'}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-5 pt-4 border-t border-border flex items-start gap-2 text-[11px] text-text-muted">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    {t(
                      'donateModal.tax80GNote',
                      '80G Tax Exemption applies. Please share payment receipt on WhatsApp for your certificate.'
                    )}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${HIF_ORGANIZATION.contact.whatsapp}?text=${encodeURIComponent('Assalamu Alaikum, I have made a donation to HIF INDIA.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
                >
                  <FaWhatsapp className="w-4 h-4" aria-hidden />
                  {t('donateModal.notifyWhatsapp', "I've Transferred — Notify HIF on WhatsApp")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

const Row: React.FC<{ label: string; value: string; mono?: boolean; onCopy: () => void; copied: boolean }> = ({
  label,
  value,
  mono,
  onCopy,
  copied
}) => (
  <div className="p-3 rounded-xl bg-bg-alt dark:bg-[#051c15] border border-border dark:border-emerald-800/50 flex items-start justify-between gap-2">
    <div className="min-w-0 flex-1">
      <span className="text-[10px] uppercase tracking-wide text-text-muted font-semibold block">{label}</span>
      <span className={`text-sm font-semibold text-text-main block ${mono ? 'font-mono break-all' : 'break-words'}`}>{value}</span>
    </div>
    <button onClick={onCopy} className="p-1.5 rounded-lg text-text-muted dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors shrink-0">
      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
    </button>
  </div>
)
