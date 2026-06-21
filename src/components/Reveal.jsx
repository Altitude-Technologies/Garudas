import { motion } from 'framer-motion'

// Lightweight reveal-on-scroll. Fades + lifts content as it enters the viewport.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  as = 'div',
  className = '',
  amount = 0.2,
  ...rest
}) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}
