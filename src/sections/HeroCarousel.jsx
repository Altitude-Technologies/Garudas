import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BANNERS } from '../lib/banners.js'

const DURATION = 6000 // ms per slide

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const count = BANNERS.length

  const go = useCallback(
    (next) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1)
      setIndex((next + count) % count)
    },
    [index, count]
  )
  const next = useCallback(() => go((index + 1) % count), [go, index, count])
  const prev = useCallback(() => go((index - 1 + count) % count), [go, index, count])

  // Autoplay (pauses on hover / when tab hidden).
  useEffect(() => {
    if (paused) return
    timer.current = setTimeout(() => setIndex((i) => (i + 1) % count), DURATION)
    return () => clearTimeout(timer.current)
  }, [index, paused, count])

  const slide = BANNERS[index]

  return (
    <section
      className="hcar"
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="hcar__stage">
      {/* ---- Slides ---- */}
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={slide.id}
          className="hcar__slide"
          custom={dir}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
        >
          {/* Ken Burns image (subtle) */}
          <motion.img
            src={slide.image}
            alt=""
            className="hcar__img"
            initial={{ scale: 1.04 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: DURATION / 1000 + 2, ease: 'linear' }}
          />
          {/* Subtle scrim only at the bottom, so the carousel controls stay
              legible over light banner images. The banner artwork itself is
              the content — uploaded by the client via the admin panel. */}
          <div className="hcar__overlay" />
        </motion.div>
      </AnimatePresence>

      {/* ---- Controls ---- */}
      <button className="hcar__arrow hcar__arrow--prev" onClick={prev} aria-label="Previous banner">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button className="hcar__arrow hcar__arrow--next" onClick={next} aria-label="Next banner">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* ---- Dots + progress ---- */}
      <div className="hcar__dots-wrap">
        <div className="hcar__dots">
          {BANNERS.map((b, i) => (
            <button
              key={b.id}
              className={`hcar__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to banner ${i + 1}`}
            >
              {i === index && (
                <motion.span
                  className="hcar__dot-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: paused ? '0%' : '100%' }}
                  transition={{ duration: paused ? 0 : DURATION / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="hcar__count">
          <strong>{String(index + 1).padStart(2, '0')}</strong>
          <span>/ {String(count).padStart(2, '0')}</span>
        </div>
      </div>
      </div>
    </section>
  )
}
