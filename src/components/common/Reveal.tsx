import React from 'react'
import { motion, type Variants } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

/**
 * Scroll-triggered fade/slide-up reveal. Cheap (CSS transform + opacity only),
 * fires once when ~15% into view so content never feels like it's "loading".
 */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 22, once = true }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: '-60px' }}
    transition={{ duration: 0.55, delay, ease: easeOut }}
    className={className}
  >
    {children}
  </motion.div>
)

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 }
  }
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
}

/**
 * Wrap a grid/list with RevealGroup and each direct child with RevealItem
 * for a staggered "cascade in" effect on scroll.
 */
export const RevealGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
)

export const RevealItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
)
