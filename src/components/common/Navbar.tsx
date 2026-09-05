import React, { useEffect, useState } from 'react'
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
  badge?: string
  description?: string
}

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const { openDonate } = useDonate()
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const location = useLocation()

  const navLinks: NavItem[] = [
    { key: 'home', name: t('nav.home', 'Home'), to: '/', icon: Home },
    { key: 'about', name: t('nav.about', 'About'), to: '/about', icon: Users, description: t('org.slogan', 'Trust & 100% Direct Model') },
    { key: 'projects', name: t('nav.projects', 'Projects'), to: '/projects', icon: FolderKanban, badge: '3', description: t('projects.subtitle', 'Ashiyana, Chittor & Masjids') },
    { key: 'activities', name: t('nav.activities', 'Activities'), to: '/activities', icon: Sparkles, description: t('activities.subtitle', 'MEDIBANK, Education & Youth') },
    { key: 'gallery', name: t('nav.gallery', 'Gallery'), to: '/gallery', icon: Image, description: t('gallery.subtitle', 'Ground Impact Photos') },
    { key: 'getInvolved', name: t('nav.getInvolved', 'Get Involved'), to: '/get-involved', icon: HeartHandshake, badge: t('common.joinAsVolunteer', 'Join'), description: t('getInvolved.volunteerSubtitle', 'Volunteer & Calculator') },
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

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-[11px] sm:text-xs border-b border-emerald-900/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
            <span className="text-emerald-100/90 truncate font-medium">
              100% Direct Grassroots Relief • Zero Administrative Deduction
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
            <span className="text-primary-deep">•</span>
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
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 shrink-0 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <img
                src={HIF_ORGANIZATION.siteImages.logo}
                alt="HIF INDIA logo"
                className="relative h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight inline-flex items-baseline gap-1.5">
                <span className="text-text-main dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  HIF
                </span>
                <span className="tracking-[0.06em] sm:tracking-[0.08em] transition-[filter] duration-300 group-hover:brightness-110">
                  <span className="text-flag-saffron">IN</span>
                  <span className="text-flag-chakra">D</span>
                  <span className="text-flag-green">IA</span>
                </span>
              </span>
              <span className="text-[10px] text-text-muted font-medium hidden sm:block">
                Highland Islamic Forum • Mangaluru
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav Items with Animated Gliding Hover Pill */}
          <div
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-bg-alt/80 dark:bg-[#07231c]/90 border border-border/60 dark:border-[#184e3f]/80 backdrop-blur-sm"
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
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-text-main dark:text-emerald-200 font-bold'
                      : 'text-text-muted hover:text-text-main dark:hover:text-emerald-100'
                  }`}
                >
                  {/* Active/Hover Animated Spring Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-card dark:bg-[#0b2f26] rounded-full shadow-sm border border-emerald-600/20 dark:border-emerald-500/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-card/70 dark:bg-emerald-900/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </NavLink>
              )
            })}
          </div>

          {/* Action CTAs: Language Switcher, Theme Toggle, WhatsApp & Donate Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language Switcher Dropdown */}
            <LanguageSwitcher variant="navbar" />

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 sm:p-2.5 rounded-full text-text-muted dark:text-amber-300 hover:text-primary-deep dark:hover:text-amber-200 bg-bg-alt/80 dark:bg-[#0b2f26] hover:bg-stone-200/80 dark:hover:bg-[#0e382e] border border-border/80 dark:border-[#184e3f] transition-colors shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-primary-deep" />
              )}
            </motion.button>

            {/* Quick Contact Link (Desktop) */}
            <a
              href={`https://wa.me/${HIF_ORGANIZATION.contact.whatsapp}?text=${encodeURIComponent(
                'Assalamu Alaikum, I would like to know more about HIF INDIA initiatives.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-primary-deep bg-emerald-50 dark:bg-emerald-950/80 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/80 border border-emerald-200 dark:border-emerald-700/60/80 dark:border-emerald-700/60 transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Glowing & Beating Donate Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openDonate('General Humanitarian Fund')}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-900/20 hover:shadow-lg hover:shadow-emerald-700/30 transition-all duration-300"
            >
              {/* Button Shimmer Overlay */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />

              <span className="relative flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400 animate-heartbeat shrink-0" />
                <span className="tracking-wide">{t('nav.donate', 'Donate')}</span>
              </span>
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-text-muted hover:text-primary-deep dark:hover:text-emerald-100 bg-bg-alt dark:bg-[#07231c] hover:bg-emerald-50 dark:hover:bg-[#0b2f26] border border-border/80 dark:border-[#184e3f] transition-colors"
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
              className="fixed inset-0 top-[104px] bg-stone-900/40 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide Down Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-50 lg:hidden bg-card dark:bg-[#07231c] border-b border-border dark:border-[#184e3f] shadow-2xl overflow-hidden"
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
                              {link.badge && (
                                <span className="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                                  {link.badge}
                                </span>
                              )}
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
                    Donate to HIF INDIA Now
                  </button>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <a
                      href={`tel:${HIF_ORGANIZATION.contact.primaryPhone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-bg-alt dark:bg-card/5 hover:bg-bg-alt dark:hover:bg-card/10 text-text-main font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary dark:text-emerald-400" />
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
                      <MessageCircle className="w-4 h-4 text-primary dark:text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="flex items-center justify-between py-2 border-b border-border dark:border-border/10">
                    <span className="text-sm font-medium text-text-muted">
                      Language
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
                      <span>{theme === 'dark' ? 'Night (Dark)' : 'Day (Light)'} Mode</span>
                    </span>
                    <span className="text-[11px] text-text-muted">Tap to Switch</span>
                  </button>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-text-muted">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />
                    100% Direct Grassroots Relief
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
