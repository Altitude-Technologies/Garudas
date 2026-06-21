import Logo from '../components/Logo.jsx'

const QUICK = ['Garudas', 'Shop', 'Travel Kits', 'Combos', 'Organic Farms', 'Blog']
const INFO = ['Contact Us', 'Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy', 'All Products']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <Logo height={44} />
          </div>
          <p>A Symbol of Trust &amp; Quality since 1977. Authentic Indian flavours, crafted for the world.</p>
          <div className="footer__contact">
            <a href="tel:+918780333613">+91 87803 33613</a>
            <a href="mailto:hello@garudasfoods.com">hello@garudasfoods.com</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK.map((q) => (
              <li key={q}>
                <a href="#shop">{q}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Information</h4>
          <ul>
            {INFO.map((q) => (
              <li key={q}>
                <a href="#shop">{q}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__news">
          <h4>Stay in the loop</h4>
          <p>Weekly recipes, new launches &amp; subscriber-only offers.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Garudas Foods. All rights reserved.</span>
        <span>A Symbol of Trust &amp; Quality</span>
      </div>
    </footer>
  )
}
