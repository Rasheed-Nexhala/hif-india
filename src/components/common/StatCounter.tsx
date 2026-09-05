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
    <div ref={ref} className="text-center px-4">
      <div className={`font-display text-4xl sm:text-5xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-primary-deep'}`}>
        {count.toLocaleString()}
        <span className={dark ? 'text-amber-300' : 'text-accent dark:text-amber-400'}>{suffix}</span>
      </div>
      <p className={`mt-2 text-sm font-semibold ${dark ? 'text-emerald-100' : 'text-text-muted dark:text-stone-200'}`}>{label}</p>
      {subtext && (
        <p className={`mt-1 text-xs leading-relaxed ${dark ? 'text-emerald-200/70' : 'text-text-muted dark:text-text-muted'}`}>{subtext}</p>
      )}
    </div>
  )
}
