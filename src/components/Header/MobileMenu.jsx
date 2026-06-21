import { useEffect, useState } from 'react'
import Logo from '../Logo.jsx'
import { NAV, CATALOGUE } from '../../lib/products.js'

const QUICK = ['All Products', 'Combos', 'Travel Kits', 'Blog', 'Contact Us']

export default function MobileMenu({ open, onClose }) {
  const [openCat, setOpenCat] = useState(null)

  // Lock background scroll (pause Lenis) while the drawer is open.
  useEffect(() => {
    if (open) window.lenis?.stop()
    else window.lenis?.start()
    return () => window.lenis?.start()
  }, [open])

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`mmenu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="mmenu__scrim" onClick={onClose} />
      {/* data-lenis-prevent lets the panel scroll natively while Lenis is active */}
      <aside className="mmenu__panel" role="dialog" aria-label="Menu" data-lenis-prevent>
        <div className="mmenu__head">
          <Logo height={36} />
          <button className="mmenu__close" onClick={onClose} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="mmenu__nav">
          {NAV.map((item) => {
            const cat = CATALOGUE[item.id]
            const isOpen = openCat === item.id
            return (
              <div className="mmenu__group" key={item.id}>
                <button
                  className={`mmenu__cat ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenCat(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <svg className="mmenu__chev" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`mmenu__sub ${isOpen ? 'is-open' : ''}`}>
                  {cat.columns.map((col) => (
                    <div className="mmenu__col" key={col.name}>
                      <p className="mmenu__colname">{col.name}</p>
                      <ul>
                        {col.items.map((it) => (
                          <li key={it}>
                            <a href="#shop" onClick={onClose}>
                              {it}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>

        <div className="mmenu__quick">
          {QUICK.map((q) => (
            <a key={q} href="#shop" onClick={onClose}>
              {q}
            </a>
          ))}
        </div>

        <div className="mmenu__foot">
          <a href="#shop" className="btn btn--primary" onClick={onClose}>
            Shop All Products
          </a>
          <div className="mmenu__account">
            <a href="#top" onClick={onClose}>Account</a>
            <span />
            <a href="#top" onClick={onClose}>Cart (1)</a>
          </div>
        </div>
      </aside>
    </div>
  )
}
