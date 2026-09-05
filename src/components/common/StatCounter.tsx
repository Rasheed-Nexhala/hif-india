import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  subtext?: string
  dark?: boolean
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = '', label, subtext, dark }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
    const steps = 40
    const increment = value / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step += 1
      current += increment
      if (step >= steps) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center px-1 sm:px-4 max-w-[11rem] sm:max-w-none mx-auto">
      <div className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-primary-deep'}`}>
        {count.toLocaleString()}
        <span className={dark ? 'text-amber-300' : 'text-accent'}>{suffix}</span>
      </div>
      <p className={`mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold leading-snug sm:leading-relaxed ${dark ? 'text-emerald-100' : 'text-text-muted'}`}>{label}</p>
      {subtext && (
        <p className={`mt-1 text-xs leading-relaxed ${dark ? 'text-emerald-200/70' : 'text-text-muted'}`}>{subtext}</p>
      )}
    </div>
  )
}
