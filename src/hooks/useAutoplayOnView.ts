import { useCallback, useEffect, useRef } from 'react'
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
  const cleanupCanPlayRef = useRef<(() => void) | undefined>(undefined)
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    margin: '160px 0px 160px 0px'
  })
  // Mirrored into a ref so the mount-time callback below (which can fire
  // well outside of React's commit/effect cycle — see setVideoNode) always
  // reads the latest in-view state instead of a stale closure value.
  const isInViewRef = useRef(isInView)
  useEffect(() => {
    isInViewRef.current = isInView
  }, [isInView])

  const tryPlay = useCallback((video: HTMLVideoElement) => {
    void video.play().catch(() => {
      /* Autoplay can still be blocked if unmuted; mute + playsInline covers most cases. */
    })
  }, [])

  // Attach this to the <video>'s `ref` prop *instead of* passing videoRef
  // directly. Callers that switch clips via AnimatePresence (especially
  // with `mode="wait"`) unmount the old element and only mount the new one
  // once its exit animation finishes — a separate, later commit. A
  // `useEffect` keyed on `activeKey` fires immediately on the state change,
  // long before that new element exists, so it ends up calling play() on
  // the outgoing (or a stale/null) node. A ref callback instead fires at
  // the exact moment the real DOM node is created, whenever that happens,
  // so autoplay is never missed regardless of the exit/enter animation
  // timing.
  const setVideoNode = useCallback(
    (node: HTMLVideoElement | null) => {
      cleanupCanPlayRef.current?.()
      cleanupCanPlayRef.current = undefined
      videoRef.current = node

      if (node && isInViewRef.current) {
        tryPlay(node)
        const onCanPlay = () => {
          if (isInViewRef.current) tryPlay(node)
        }
        node.addEventListener('canplay', onCanPlay)
        cleanupCanPlayRef.current = () => node.removeEventListener('canplay', onCanPlay)
      }
    },
    [tryPlay]
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isInView) {
      tryPlay(video)
    } else {
      video.pause()
    }
  }, [isInView, activeKey, tryPlay])

  return { sectionRef, videoRef, setVideoNode, isInView }
}
