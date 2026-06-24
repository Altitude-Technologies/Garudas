import { useEffect, useState } from 'react'
import Logo from '../Logo.jsx'
import MegaMenu from './MegaMenu.jsx'
import MobileMenu from './MobileMenu.jsx'
import { NAV } from '../../lib/products.js'
import './Header.css'

const SOCIALS = [
  { label: 'Facebook', icon: 'fa-brands fa-facebook-f' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { label: 'YouTube', icon: 'fa-brands fa-youtube' },
]

export default function Header() {
  const [active, setActive] = useState(null) // active nav id (mega menu)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`hdr ${scrolled ? 'is-scrolled' : ''} ${active ? 'is-open' : ''}`}
      onMouseLeave={() => setActive(null)}
    >
      {/* ---- Announcement bar ---- */}
      <div className="topbar">
        <div className="topbar__inner container">
          <div className="topbar__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#top" aria-label={s.label} className="topbar__social">
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="topbar__ticker" aria-hidden="true">
            <div className="topbar__track">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="topbar__msg">
                  🚀 Free Shipping ₹499+ &nbsp;·&nbsp; COD Available &nbsp;·&nbsp; A Symbol of Trust
                  &amp; Quality since 1977 &nbsp;·&nbsp;
                </span>
              ))}
            </div>
          </div>
          <div className="topbar__spacer" />
        </div>
      </div>

      {/* ---- Main bar ---- */}
      <div className="navbar">
        <div className="navbar__inner">
          <Logo height={scrolled ? 44 : 54} />

          <nav className="nav">
            {NAV.map((item) => (
              <button
                key={item.id}
                className={`nav__item ${active === item.id ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(item.id)}
                onFocus={() => setActive(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <button className="iconbtn iconbtn--hide" aria-label="Search">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm10 2-4.3-4.3"
                />
              </svg>
            </button>
            <button className="iconbtn iconbtn--hide" aria-label="Account">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0"
                />
              </svg>
            </button>
            <button className="iconbtn iconbtn--cart" aria-label="Cart">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h15l-1.5 9h-12L5 3H2m4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
              <span className="iconbtn__badge">1</span>
            </button>
            <button
              className="iconbtn hdr__burger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mega menu (desktop) ---- */}
      <MegaMenu activeId={active} onClose={() => setActive(null)} />

      {/* ---- Mobile drawer ---- */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
