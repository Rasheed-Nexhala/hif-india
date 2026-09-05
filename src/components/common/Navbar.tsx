import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Menu,
  X,
  Phone,
  ShieldCheck,
  Home,
  Users,
  FolderKanban,
  Sparkles,
  Image,
  HeartHandshake,
  Mail,
  MessageCircle,
  Sun,
  Moon
} from 'lucide-react'
import { HIF_ORGANIZATION } from '../../data/hifData'
import { useDonate } from '../../context/DonateContext'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

interface NavItem {
  key: string
  name: string
  to: string
  icon: React.ElementType
  description?: string
}

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const { openDonate } = useDonate()
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const location = useLocation()

  const navLinks: NavItem[] = [
    { key: 'home', name: t('nav.home', 'Home'), to: '/', icon: Home },
    { key: 'about', name: t('nav.about', 'About'), to: '/about', icon: Users, description: t('org.slogan', 'Trust & 100% Direct Model') },
    { key: 'projects', name: t('nav.projects', 'Projects'), to: '/projects', icon: FolderKanban, description: t('projects.subtitle', 'Ashiyana, Chittor & Masjids') },
    { key: 'activities', name: t('nav.activities', 'Activities'), to: '/activities', icon: Sparkles, description: t('activities.subtitle', 'MEDIBANK, Education & Youth') },
    { key: 'gallery', name: t('nav.gallery', 'Gallery'), to: '/gallery', icon: Image, description: t('gallery.subtitle', 'Ground Impact Photos') },
    { key: 'getInvolved', name: t('nav.getInvolved', 'Get Involved'), to: '/get-involved', icon: HeartHandshake, description: t('getInvolved.volunteerSubtitle', 'Volunteer & Calculator') },
    { key: 'contact', name: t('nav.contact', 'Contact'), to: '/contact', icon: Mail, description: t('contact.centralSecretariat', 'HQ & 24/7 Helplines') }
  ]

  // Track scroll depth and elevation
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Measure header height for mobile drawer backdrop
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [scrolled, menuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-[11px] sm:text-xs border-b border-emerald-900/60 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-8 sm:min-h-9 py-1.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="text-emerald-100/90 font-medium leading-snug truncate">
              <span className="sm:hidden">
                {t('org.sloganShort', '100% Direct Grassroots Relief')}
              </span>
              <span className="hidden sm:inline">
                {t('org.slogan', '100% Direct Grassroots Relief • Zero Administrative Deduction')}
              </span>
            </span>
          </div>

          {/* Quick Helpline & Instagram */}
          <div className="hidden md:flex items-center gap-4 shrink-0 text-emerald-200/80">
            <a
              href={`tel:${HIF_ORGANIZATION.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{HIF_ORGANIZATION.contact.primaryPhone}</span>
            </a>
            <span className="text-emerald-400/50">•</span>
            <a
              href="https://instagram.com/hif_india"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
            >
              <span>@hif_india</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-card/95 dark:bg-[#041712]/95 backdrop-blur-md shadow-lg shadow-emerald-950/5 dark:shadow-black/40 border-b border-border/80 dark:border-[#184e3f]/80 py-2 sm:py-2.5'
            : 'bg-card/90 dark:bg-[#041712]/90 backdrop-blur-sm border-b border-border/40 dark:border-[#184e3f]/40 py-2.5 sm:py-3.5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          {/* Logo & Identity */}
          <NavLink
            to="/"
            className="group flex items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-none lg:shrink-0 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <img
                src={HIF_ORGANIZATION.siteImages.logo}
                alt="HIF INDIA logo"
                className="relative h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight inline-flex items-baseline gap-1 sm:gap-1.5 min-w-0">
                <span className="text-text-main group-hover:text-primary transition-colors shrink-0">
                  HIF
                </span>
                <span className="tracking-[0.04em] sm:tracking-[0.06em] lg:tracking-[0.08em] text-text-main group-hover:text-primary transition-colors shrink-0">
                  INDIA
                </span>
              </span>
              <span className="text-[10px] text-text-muted font-medium hidden md:block truncate">
                Highland Islamic Forum • Mangaluru
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav Items with Animated Gliding Hover Pill */}
          <div
            className="hidden lg:flex flex-wrap items-center justify-center gap-0.5 p-1 rounded-full bg-bg-alt/80 dark:bg-[#07231c]/90 border border-border/60 dark:border-[#184e3f]/80 backdrop-blur-sm max-w-[48rem]"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              const isHovered = hoveredPath === link.to

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHoveredPath(link.to)}
                  className={`relative px-2.5 xl:px-3.5 py-2 text-xs font-semibold rounded-full transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap leading-snug ${
                    isActive
                      ? 'text-text-main dark:text-emerald-200 font-bold'
                      : 'text-text-muted hover:text-text-main dark:hover:text-emerald-100'
                  }`}
                >
                  {/* Active/Hover Animated Spring Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-emerald-50 dark:bg-[#0b2f26] rounded-full shadow-sm border border-emerald-600/20 dark:border-emerald-500/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-stone-200/70 dark:bg-emerald-900/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                  </span>
                </NavLink>
              )
            })}
          </div>

          {/* Action CTAs: Language Switcher, Theme Toggle & Donate Button */}
          <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 shrink-0">
            {/* Language Switcher — desktop only; available in mobile drawer */}
            <div className="hidden lg:block">
              <LanguageSwitcher variant="navbar" />
            </div>

            {/* Theme Toggle Button — desktop only; available in mobile drawer */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="hidden sm:inline-flex p-2 lg:p-2.5 rounded-full text-text-muted dark:text-amber-300 hover:text-primary-deep dark:hover:text-amber-200 bg-bg-alt/80 dark:bg-[#0b2f26] hover:bg-stone-200/80 dark:hover:bg-[#0e382e] border border-border/80 dark:border-[#184e3f] transition-colors shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-primary-deep" />
              )}
            </motion.button>

            {/* Glowing & Beating Donate Button — icon-only on small screens */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openDonate('General Humanitarian Fund')}
              aria-label={t('nav.donate', 'Donate')}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-2 lg:px-5 lg:py-2.5 rounded-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-900/20 hover:shadow-lg hover:shadow-emerald-700/30 transition-all duration-300"
            >
              {/* Button Shimmer Overlay */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />

              <span className="relative flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400 animate-heartbeat shrink-0" />
                <span className="hidden sm:inline tracking-wide">{t('nav.donate', 'Donate')}</span>
              </span>
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-text-muted hover:text-primary-deep dark:hover:text-emerald-100 bg-bg-alt hover:bg-emerald-50 dark:hover:bg-[#0b2f26] border border-border/80 dark:border-[#184e3f] transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5 text-primary-deep dark:text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </nav>

        {/* Scroll Progress Bar */}
        <div className="w-full h-[2px] bg-bg-alt dark:bg-emerald-950/60 relative overflow-hidden mt-2">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-500 dark:from-emerald-400 dark:via-amber-400 dark:to-emerald-400"
            style={{ width: `${scrollProgress}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </div>
      </div>

      {/* Mobile Navigation Drawer with Staggered Animations */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{ top: headerHeight }}
              className="fixed inset-x-0 bottom-0 bg-stone-900/40 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide Down Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-50 lg:hidden bg-card dark:bg-[#07231c] border-b border-border dark:border-[#184e3f] shadow-2xl overflow-hidden max-h-[calc(100dvh-var(--navbar-height,7rem))] overflow-y-auto"
              style={{ '--navbar-height': `${headerHeight}px` } as React.CSSProperties}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
                {/* Mobile Links List */}
                <div className="flex flex-col">
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon
                    const isActive = location.pathname === link.to

                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.25 }}
                      >
                        <NavLink
                          to={link.to}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center justify-between py-3.5 border-b border-border dark:border-border/10 transition-colors ${
                            isActive
                              ? 'text-primary font-bold'
                              : 'text-text-muted hover:text-primary-deep dark:hover:text-emerald-100'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-text-muted'}`} />
                            <div className="flex items-center gap-2">
                              <span className="text-[15px]">{link.name}</span>
                            </div>
                          </div>
                        </NavLink>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Mobile Direct Action Buttons */}
                <div className="pt-2 space-y-3">
                  <button
                    onClick={() => {
                      setMenuOpen(false)
                      openDonate('General Humanitarian Fund')
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-900/20"
                  >
                    <Heart className="w-4 h-4 fill-amber-400 text-amber-400 animate-heartbeat" />
                    {t('common.donateNow', 'Donate Now')}
                  </button>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <a
                      href={`tel:${HIF_ORGANIZATION.contact.primaryPhone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-bg-alt dark:bg-card/5 hover:bg-emerald-50 dark:hover:bg-card/10 text-text-main font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${HIF_ORGANIZATION.contact.whatsapp}?text=${encodeURIComponent(
                        'Assalamu Alaikum, I would like to get in touch with HIF INDIA.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-primary-deep font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="flex items-center justify-between py-2 border-b border-border dark:border-border/10">
                    <span className="text-sm font-medium text-text-muted">
                      {t('nav.language', 'Language')}
                    </span>
                    <LanguageSwitcher variant="pill" />
                  </div>

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-text-muted"
                  >
                    <span className="flex items-center gap-2">
                      {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-primary-deep" />}
                      <span>{theme === 'dark' ? t('common.nightMode', 'Night (Dark) Mode') : t('common.dayMode', 'Day (Light) Mode')}</span>
                    </span>
                    <span className="text-[11px] text-text-muted">Tap to Switch</span>
                  </button>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-text-muted">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    {t('common.zeroCommission', '100% Direct Grassroots Relief')}
                  </span>
                  <span>Registered NGO • Mangaluru</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
