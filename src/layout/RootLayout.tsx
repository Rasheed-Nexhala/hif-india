import React, { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'
import { DonateModal } from '../components/common/DonateModal'
import { DonateProvider } from '../context/DonateContext'

function scrollWindowToTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    scrollWindowToTop()
    requestAnimationFrame(scrollWindowToTop)
  }, [pathname])

  return null
}

export const RootLayout: React.FC = () => {
  return (
    <DonateProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-main)] transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <DonateModal />
    </DonateProvider>
  )
}
