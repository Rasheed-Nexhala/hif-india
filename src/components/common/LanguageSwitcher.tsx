import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { useLanguage, type Language } from '../../context/LanguageContext'

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'footer' | 'pill'
  className?: string
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { language, setLanguage, supportedLanguages, currentLanguageOption } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSelect = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center p-1 rounded-full bg-bg-alt dark:bg-[#07231c] border border-border dark:border-[#184e3f] ${className}`}>
        {supportedLanguages.map((lang) => {
          const isActive = language === lang.code
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-text-muted hover:text-primary-deep dark:hover:text-white'
              }`}
            >
              <span className="font-medium">{lang.nativeLabel}</span>
            </button>
          )
        })}
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <span className="text-xs font-semibold text-emerald-200/80 uppercase tracking-wider flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          Language / ಭಾಷೆ / भाषा
        </span>
        <div className="flex flex-wrap gap-2">
          {supportedLanguages.map((lang) => {
            const isActive = language === lang.code
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-500 text-text-main border-emerald-400 font-bold shadow-sm'
                    : 'bg-card/5 hover:bg-card/10 text-emerald-100 border-white/10 hover:border-emerald-400/40'
                }`}
              >
                {isActive && <Check className="w-3 h-3" />}
                <span>{lang.nativeLabel}</span>
                <span className="text-[10px] opacity-70">({lang.shortLabel})</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Navbar variant with animated popover
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <motion.button
        type="button"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Change language, currently ${currentLanguageOption.label}`}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-text-muted bg-bg-alt/80 dark:bg-[#0b2f26] hover:bg-stone-200/80 dark:hover:bg-[#0e382e] border border-border/80 dark:border-[#184e3f] transition-all shadow-sm"
      >
        <Globe className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />
        <span className="font-bold tracking-wide">{currentLanguageOption.nativeLabel}</span>
        <ChevronDown
          className={`w-3 h-3 text-text-muted dark:text-emerald-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="listbox"
            className="absolute right-0 mt-2 w-48 py-1.5 bg-card dark:bg-[#07231c] rounded-2xl shadow-xl border border-border dark:border-[#184e3f] z-50 overflow-hidden"
          >
            <div className="px-3 py-1.5 border-b border-border dark:border-[#184e3f]/60 text-[10px] font-bold uppercase tracking-wider text-text-muted">
              Select Language
            </div>
            {supportedLanguages.map((lang) => {
              const isSelected = language === lang.code
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-[#0b2f26] text-primary-deep dark:text-emerald-100 font-bold'
                      : 'text-text-muted/90 hover:bg-bg-alt dark:hover:bg-[#0e382e] hover:text-primary-deep dark:hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{lang.nativeLabel}</span>
                    <span className="text-[10px] text-text-muted font-normal">
                      {lang.label}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
