import { useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CATALOGUE } from '../../lib/products.js'
import { imageFor } from '../../lib/images.js'

export default function MegaMenu({ activeId, onClose }) {
  const data = activeId ? CATALOGUE[activeId] : null

  // Drive the dropdown's own vertical scroll with the mouse wheel. Lenis
  // intercepts wheel events on the window, so we scroll here and stop the
  // event before it reaches Lenis.
  const attachWheel = useCallback((node) => {
    if (!node) return
    node.addEventListener(
      'wheel',
      (e) => {
        if (node.scrollHeight <= node.clientHeight) return
        node.scrollTop += e.deltaY
        e.preventDefault()
        e.stopPropagation()
      },
      { passive: false }
    )
  }, [])

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          key={activeId}
          ref={attachWheel}
          className="mega"
          data-lenis-prevent
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mega__panel container">
            <div className="mega__fhead-row">
              <h3 className="mega__heading">All Products</h3>
              <a href="#shop" className="mega__viewall" onClick={onClose}>
                View all →
              </a>
            </div>
            {/* One labelled row per category; each row scrolls horizontally
                through all of that category's products. */}
            <div className="mega__groups">
              {data.columns
                .filter((col) => !/^snacks/i.test(col.name))
                .map((col) => (
                <div className="mega__group" key={col.name}>
                  <p className="mega__glabel">{col.name}</p>
                  <div className="mega__cards" data-lenis-prevent>
                    {col.items.map((item) => {
                      const name = typeof item === 'string' ? item : item.name
                      const src = typeof item === 'string' ? imageFor(item) : item.img
                      return (
                        <a href="#shop" key={name} className="mcard" onClick={onClose}>
                          <span className="mcard__img">
                            <img src={src} alt={name} loading="lazy" />
                          </span>
                          <span className="mcard__name">{name}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
