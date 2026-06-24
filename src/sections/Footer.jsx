import Logo from '../components/Logo.jsx'

const QUICK = ['Garudas', 'Shop', 'Travel Kits', 'Combos', 'Organic Farms', 'Blog']
const INFO = ['Contact Us', 'Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy', 'All Products']

const SOCIALS = [
  { label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { label: 'Facebook', icon: 'fa-brands fa-facebook-f' },
  { label: 'YouTube', icon: 'fa-brands fa-youtube' },
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in' },
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
                <i className={s.icon} aria-hidden="true" />
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
        Garudas
      </div>
    </footer>
  )
}
