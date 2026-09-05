import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Copy, Check, Building2, QrCode, ShieldCheck, MessageCircle } from 'lucide-react'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useDonate } from '../../context/DonateContext'
import { useLanguage } from '../../context/LanguageContext'

export const DonateModal: React.FC = () => {
  const { isOpen, cause, amount, closeDonate } = useDonate()
  const { t } = useLanguage()
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [showQR, setShowQR] = useState(false)

  const bank = HIF_ORGANIZATION.bankDetails

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const upiPayUrl = `upi://pay?pa=${bank.upiId}&pn=${encodeURIComponent(bank.accountName)}&cu=INR${
    amount ? `&am=${amount}` : ''
  }&tn=${encodeURIComponent(cause || 'HIF India Donation')}`

  const qrCodeImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    upiPayUrl
  )}&bgcolor=ffffff&color=065f46&margin=8`

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeDonate}
            className="fixed inset-0 bg-stone-900/60"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-card dark:bg-[#082820] rounded-2xl shadow-2xl border border-border dark:border-emerald-800/50 p-6 sm:p-7 z-10 my-8"
          >
            <div className="flex items-start justify-between pb-4 border-b border-border dark:border-emerald-800/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-primary dark:text-emerald-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-main dark:text-stone-50">
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
                className="p-1.5 rounded-lg text-text-muted hover:text-text-muted dark:hover:text-stone-100 hover:bg-bg-alt dark:hover:bg-emerald-900/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {(cause || amount) && (
              <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 flex items-center justify-between text-xs">
                <div>
                  <span className="text-text-muted dark:text-amber-200/80 block">{t('donateModal.forCause', 'For')}</span>
                  <span className="font-semibold text-text-main dark:text-amber-100">{cause || t('donateModal.generalFund', 'General Humanitarian Fund')}</span>
                </div>
                {amount && (
                  <span className="font-bold text-accent dark:text-amber-300 text-base">
                    ₹{amount.toLocaleString()}
                  </span>
                )}
              </div>
            )}

            <div className="mt-5 space-y-3 text-sm">
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
              <div className="grid grid-cols-2 gap-3">
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

              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/60">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wide text-primary dark:text-emerald-300 font-semibold block">
                      {t('donateModal.upiId', 'UPI ID')}
                    </span>
                    <span className="font-mono font-semibold text-text-main">{bank.upiId}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copy(bank.upiId, 'upi')}
                      className="px-2.5 py-1.5 rounded-lg bg-card dark:bg-[#082820] border border-emerald-200 dark:border-emerald-700/60 text-primary dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      {copiedField === 'upi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => setShowQR(!showQR)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      {showQR ? t('donateModal.hideQr', 'Hide QR') : t('donateModal.showQr', 'Show QR')}
                    </button>
                  </div>
                </div>

                {showQR && (
                  <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-700/60/70 dark:border-emerald-700/60 flex flex-col items-center text-center">
                    <div className="p-2 bg-card rounded-xl shadow-sm">
                      <img src={qrCodeImgUrl} alt="UPI QR Code" className="w-40 h-40 rounded-lg" loading="lazy" />
                    </div>
                    <p className="text-[11px] text-text-muted mt-2">
                      {t('donateModal.qrHelp', 'Scan with GPay, PhonePe, Paytm, or BHIM')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border dark:border-emerald-800/40 flex items-start gap-2 text-[11px] text-text-muted">
              <ShieldCheck className="w-4 h-4 text-primary dark:text-emerald-400 shrink-0 mt-0.5" />
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
              className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t('donateModal.notifyWhatsapp', "I've Transferred — Notify HIF on WhatsApp")}
            </a>
          </motion.div>
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
  <div className="p-3 rounded-xl bg-bg-alt dark:bg-[#051c15] border border-border dark:border-emerald-800/50 flex items-center justify-between gap-2">
    <div className="min-w-0">
      <span className="text-[10px] uppercase tracking-wide text-text-muted font-semibold block">{label}</span>
      <span className={`text-sm font-semibold text-text-main dark:text-stone-100 truncate block ${mono ? 'font-mono' : ''}`}>{value}</span>
    </div>
    <button onClick={onCopy} className="p-1.5 rounded-lg text-text-muted dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors shrink-0">
      {copied ? <Check className="w-4 h-4 text-primary dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
    </button>
  </div>
)
