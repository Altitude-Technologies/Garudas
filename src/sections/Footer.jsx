import Logo from '../components/Logo.jsx'

const QUICK = ['Garudas', 'Shop', 'Travel Kits', 'Combos', 'Organic Farms', 'Blog']
const INFO = ['Contact Us', 'Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy', 'All Products']

const SOCIALS = [
  { label: 'Instagram', d: 'M8 0h4c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4zm0 2C6.9 2 6 2.9 6 4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm2 2.2A2.8 2.8 0 1 1 7.2 7 2.8 2.8 0 0 1 10 4.2zm0 1.6A1.2 1.2 0 1 0 11.2 7 1.2 1.2 0 0 0 10 5.8zm3-.3a.7.7 0 1 1-.7.7.7.7 0 0 1 .7-.7z' },
  { label: 'Facebook', d: 'M13 3h3V0h-3a4 4 0 0 0-4 4v2H6v3h3v7h3V9h3l1-3h-4V4a1 1 0 0 1 1-1z' },
  { label: 'YouTube', d: 'M15.6 4.2c-.2-.7-.7-1.2-1.4-1.4C13 2.5 8 2.5 8 2.5s-5 0-6.2.3C1.1 3 .6 3.5.4 4.2 0 5.4 0 8 0 8s0 2.6.4 3.8c.2.7.7 1.2 1.4 1.4 1.2.3 6.2.3 6.2.3s5 0 6.2-.3c.7-.2 1.2-.7 1.4-1.4C16 10.6 16 8 16 8s0-2.6-.4-3.8zM6.4 10.3V5.7L10.4 8z' },
  { label: 'LinkedIn', d: 'M3.5 5H1v11h2.5V5zm.2-2.7A1.5 1.5 0 1 0 2.2 3.8 1.5 1.5 0 0 0 3.7 2.3zM16 16h-2.5v-5.8c0-1.5-.6-2-1.4-2-.9 0-1.6.6-1.6 2V16H8V5h2.4v1.5C10.9 5.6 12 5 13.2 5 15 5 16 6.2 16 8.7V16z' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__glow" aria-hidden="true" />

      <div className="container footer__inner">
        {/* ---- Brand ---- */}
        <div className="footer__brand">
          <div className="footer__logo">
            <Logo height={42} />
          </div>
          <p>A Symbol of Trust &amp; Quality since 1977. Authentic Indian flavours, crafted for the world.</p>
          <div className="footer__contact">
            <a href="tel:+918780333613">+91 87803 33613</a>
            <a href="mailto:hello@garudasfoods.com">hello@garudasfoods.com</a>
          </div>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#top" aria-label={s.label} className="footer__social">
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill="currentColor" d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ---- Link columns ---- */}
        <nav className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK.map((q) => (
              <li key={q}>
                <a href="#shop">{q}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col">
          <h4>Information</h4>
          <ul>
            {INFO.map((q) => (
              <li key={q}>
                <a href="#shop">{q}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---- Newsletter card ---- */}
        <div className="footer__news">
          <span className="footer__news-eyebrow">Newsletter</span>
          <h4>Stay in the loop</h4>
          <p>Weekly recipes, new launches &amp; subscriber-only offers.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
          <span className="footer__news-note">No spam. Unsubscribe anytime.</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Garudas Foods. All rights reserved.</span>
        <span className="footer__tag">A Symbol of Trust &amp; Quality</span>
      </div>

      {/* ---- Oversized ghost wordmark ---- */}
      <div className="footer__wordmark" aria-hidden="true">
        GARUDAS
      </div>
    </footer>
  )
}
