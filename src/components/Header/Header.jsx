import { useEffect, useState } from 'react'
import Logo from '../Logo.jsx'
import MegaMenu from './MegaMenu.jsx'
import MobileMenu from './MobileMenu.jsx'
import { NAV } from '../../lib/products.js'
import './Header.css'

const SOCIALS = [
  { label: 'Facebook', d: 'M13 3h3V0h-3a4 4 0 0 0-4 4v2H6v3h3v7h3V9h3l1-3h-4V4a1 1 0 0 1 1-1z' },
  {
    label: 'Instagram',
    d: 'M8 0h4c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4zm0 2C6.9 2 6 2.9 6 4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm2 2.2A2.8 2.8 0 1 1 7.2 7 2.8 2.8 0 0 1 10 4.2zm0 1.6A1.2 1.2 0 1 0 11.2 7 1.2 1.2 0 0 0 10 5.8zm3-.3a.7.7 0 1 1-.7.7.7.7 0 0 1 .7-.7z',
  },
  { label: 'YouTube', d: 'M15.6 4.2c-.2-.7-.7-1.2-1.4-1.4C13 2.5 8 2.5 8 2.5s-5 0-6.2.3C1.1 3 .6 3.5.4 4.2 0 5.4 0 8 0 8s0 2.6.4 3.8c.2.7.7 1.2 1.4 1.4 1.2.3 6.2.3 6.2.3s5 0 6.2-.3c.7-.2 1.2-.7 1.4-1.4C16 10.6 16 8 16 8s0-2.6-.4-3.8zM6.4 10.3V5.7L10.4 8z' },
  { label: 'Pinterest', d: 'M8 0a8 8 0 0 0-3 15.4c-.1-.6-.1-1.6 0-2.3l1-4s-.2-.5-.2-1.2c0-1.2.7-2 1.5-2 .7 0 1 .5 1 1.1l-.7 2.7c-.1.6.3 1.1.9 1.1 1.1 0 1.9-1.4 1.9-3.2 0-1.3-.9-2.3-2.6-2.3a3 3 0 0 0-3.1 3c0 .6.2 1 .5 1.3l-.2.8c0 .2-.2.2-.4.1-1-.4-1.4-1.5-1.4-2.6C3.5 5.5 5 3.5 8.2 3.5c2.6 0 4.3 1.9 4.3 3.9 0 2.6-1.5 4.6-3.6 4.6a2 2 0 0 1-1.6-.8l-.4 1.7c-.2.6-.5 1.2-.8 1.7A8 8 0 1 0 8 0z' },
  { label: 'LinkedIn', d: 'M3.5 5H1v11h2.5V5zm.2-2.7A1.5 1.5 0 1 0 2.2 3.8 1.5 1.5 0 0 0 3.7 2.3zM16 16h-2.5v-5.8c0-1.5-.6-2-1.4-2-.9 0-1.6.6-1.6 2V16H8V5h2.4v1.5C10.9 5.6 12 5 13.2 5 15 5 16 6.2 16 8.7V16z' },
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
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path fill="currentColor" d={s.d} />
                </svg>
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
        <div className="navbar__inner container">
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
