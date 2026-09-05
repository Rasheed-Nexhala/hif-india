import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  type Language,
  type LanguageOption,
  type TranslationDictionary,
  SUPPORTED_LANGUAGES,
  translations
} from '../data/translations'
import {
  LANGUAGE_STORAGE_KEY,
  applyDocumentLanguage,
  getStoredLanguage
} from '../lib/documentLanguage'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  supportedLanguages: LanguageOption[]
  currentLanguageOption: LanguageOption
  t: (key: string, fallback?: string, params?: Record<string, string | number>) => string
  dict: TranslationDictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * Retrieves a nested value from an object using a dot-notation key (e.g. "nav.home").
 */
function getNestedValue(obj: unknown, path: string): string | undefined {
  if (!obj || typeof obj !== 'object') return undefined

  const parts = path.split('.')
  let current: any = obj

  for (const part of parts) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined
    }
    current = current[part]
  }

  return typeof current === 'string' ? current : undefined
}

/**
 * Replaces `{paramName}` placeholders in a string with matching values from `params`.
 */
function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return params[key] !== undefined ? String(params[key]) : `{${key}}`
  })
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage)

  const setLanguage = useCallback((lang: Language) => {
    if (lang !== 'en' && lang !== 'kn' && lang !== 'hi') return
    setLanguageState(lang)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    } catch {
      // Ignore localStorage write errors
    }
  }, [])

  useEffect(() => {
    applyDocumentLanguage(language)
  }, [language])

  const dict = useMemo(() => {
    return translations[language] || translations.en
  }, [language])

  const currentLanguageOption = useMemo(() => {
    return (
      SUPPORTED_LANGUAGES.find((l) => l.code === language) ||
      SUPPORTED_LANGUAGES[0]
    )
  }, [language])

  const t = useCallback(
    (key: string, fallback?: string, params?: Record<string, string | number>): string => {
      // 1. Try active language dictionary
      const value = getNestedValue(translations[language], key)
      if (value !== undefined) {
        return interpolate(value, params)
      }

      // 2. Fall back to English dictionary if current language key is missing
      if (language !== 'en') {
        const enValue = getNestedValue(translations.en, key)
        if (enValue !== undefined) {
          return interpolate(enValue, params)
        }
      }

      // 3. Fall back to provided fallback string or key itself
      const finalFallback = fallback !== undefined ? fallback : key
      return interpolate(finalFallback, params)
    },
    [language]
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
      currentLanguageOption,
      t,
      dict
    }),
    [language, setLanguage, currentLanguageOption, t, dict]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { SUPPORTED_LANGUAGES, type Language, type LanguageOption, type TranslationDictionary }
