import React, { useRef } from 'react'
import { Home, HeartHandshake, Landmark, HeartPulse } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { useLanguage } from '../../context/LanguageContext'

/**
 * A real 3D-perspective "hub & spoke" diagram — one glowing core connected
 * to four pillar cards, gently tilted via cursor position (cheap CSS
 * transforms, no WebGL). Falls back to a static diamond layout on touch.
 */
export const PillarsOrbit3D: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const pillars = [
    {
      icon: Home,
      title: t('pillars.housingTitle', 'Housing'),
      desc: t('pillars.housingDesc', 'Permanent Ashiyana homes for destitute families'),
      tint: 'from-emerald-500 to-emerald-700',
      pos: 'top'
    },
    {
      icon: HeartHandshake,
      title: t('pillars.orphanCareTitle', 'Orphan Care'),
      desc: t('pillars.orphanCareDesc', 'Chittor sanctuary nurturing 125+ boys'),
      tint: 'from-amber-500 to-amber-600',
      pos: 'right'
    },
    {
      icon: Landmark,
      title: t('pillars.masjidRevivalTitle', 'Masjid Revival'),
      desc: t('pillars.masjidRevivalDesc', '150+ rural masjids restored & maintained'),
      tint: 'from-emerald-600 to-emerald-800',
      pos: 'bottom'
    },
    {
      icon: HeartPulse,
      title: t('pillars.healthcareTitle', 'Healthcare'),
      desc: t('pillars.healthcareDesc', 'Free MEDIBANK equipment & blood donor network'),
      tint: 'from-amber-600 to-amber-700',
      pos: 'left'
    }
  ] as const

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const scene = sceneRef.current
    const group = groupRef.current
    if (!scene || !group) return
    const rect = scene.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    group.style.transform = `rotateX(${py * -10}deg) rotateY(${px * 12}deg)`
  }

  const handleMouseLeave = () => {
    const group = groupRef.current
    if (!group) return
    group.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden section-dark">
      <div className="relative max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="badge-on-dark">{t('about.pillarsTitle', 'Four Pillars')}</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            {t('about.pillarsSubtitle', 'One mission, four ways we serve.')}
          </h2>
          <p className="mt-4 text-emerald-100/85 text-sm sm:text-base leading-relaxed">
            {t(
              'about.pillarsDesc',
              'Every rupee donated flows into one of these four pillars — connected to a single, transparent core commitment to grassroots dignity.'
            )}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={sceneRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hub-scene mx-auto"
          >
            <div ref={groupRef} className="hub-group">
              <div className="hub-core">
                <span className="hub-core-pulse" />
                <span className="hub-core-dot" />
              </div>

              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <React.Fragment key={p.pos}>
                    <div className={`hub-spoke hub-spoke-${p.pos}`} />
                    <div className={`hub-item hub-item-${p.pos}`}>
                      <div className="hub-item-float" style={{ animationDelay: `${i * 0.3}s` }}>
                        <div className="hub-card">
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.tint} flex items-center justify-center text-white shadow-lg shrink-0`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{p.title}</p>
                            <p className="text-[11px] text-emerald-100/75 leading-snug mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default PillarsOrbit3D
