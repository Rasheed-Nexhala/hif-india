import type { Language } from '../data/translations'

export const LANGUAGE_STORAGE_KEY = 'hif_language'

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'en' || stored === 'kn' || stored === 'hi') {
      return stored
    }
  } catch {
    // Ignore localStorage read errors in restricted contexts
  }

  return 'en'
}

export function applyDocumentLanguage(lang: Language): void {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  root.lang = lang
  root.classList.remove('lang-en', 'lang-kn', 'lang-hi')
  root.classList.add(`lang-${lang}`)
}
