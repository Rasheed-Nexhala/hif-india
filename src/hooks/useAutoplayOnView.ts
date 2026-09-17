import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Plays a <video> when its section scrolls into view, pauses when it leaves.
 * Uses a generous rootMargin so playback starts before the player is fully
 * on screen (feels instant while scrolling).
 *
 * Does not force mute — keep the video's `muted` prop/attribute under
 * component control so user unmute choices stick across clip changes.
 */
export function useAutoplayOnView(activeKey: string) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    margin: '160px 0px 160px 0px'
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isInView) {
      const play = () => {
        void video.play().catch(() => {
          /* Autoplay can still be blocked if unmuted; mute + playsInline covers most cases. */
        })
      }
      if (video.readyState >= 2) {
        play()
      } else {
        video.addEventListener('loadeddata', play, { once: true })
        return () => video.removeEventListener('loadeddata', play)
      }
    } else {
      video.pause()
    }
  }, [isInView, activeKey])

  return { sectionRef, videoRef, isInView }
}
