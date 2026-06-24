import { useState, useEffect } from 'react'
import { galleryFor, imageFor } from '../lib/images.js'
import { BESTSELLERS, MOST_LOVED } from '../lib/products.js'
import './productpage.css'

const rupee = (n) => `₹${Number(n).toFixed(2)}`
const PACKS = [
  { label: '1 Pack', mult: 1 },
  { label: '3 Pack', mult: 3 },
  { label: '5 Pack', mult: 5 },
  { label: '8 Pack', mult: 8 },
]
const SHARE = [
  { label: 'Facebook', icon: 'fa-brands fa-facebook-f' },
  { label: 'X', icon: 'fa-brands fa-x-twitter' },
  { label: 'Pinterest', icon: 'fa-brands fa-pinterest-p' },
  { label: 'Email', icon: 'fa-solid fa-envelope' },
]
const FEATURES = [
  { icon: 'truck', t: 'Free Shipping', s: '₹499+' },
  { icon: 'lock', t: 'Secure Checkout', s: '' },
  { icon: 'tag', t: 'COD Available', s: '' },
  { icon: 'plane', t: 'TSA-Friendly', s: '' },
]

// Inline icons (render reliably regardless of the icon CDN).
function Ico({ name }) {
  const map = {
    truck: 'M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    lock: 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14v9H5zM12 15v2',
    tag: 'M20.6 13.4 11 3.8a2 2 0 0 0-1.4-.6H4v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l3.6-3.6a2 2 0 0 0 0-2.8z',
    plane: 'M2 13l19-9-8.5 18-2.2-7.3z',
    cart: 'M3 4h2l2 12h11l2-8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    box: 'M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',
    leaf: 'M5 21c0-8 6-14 16-15-1 9-7 15-16 15zM5 21c2-5 5-8 10-10',
    warning: 'M12 3 2 20h20zM12 10v4M12 17h.01',
    heart: 'M20 8.5a3.5 3.5 0 0 0-6-2.5l-2 2-2-2a3.5 3.5 0 1 0-5 5l7 7 7-7a3.5 3.5 0 0 0 1-2.5z',
  }
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d={map[name] || ''} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
const BADGES = ['Zero Preservatives', 'No MSG', 'Ready in 5 Min', '12-Month Shelf Life', 'Freeze-Dried']
const STEPS = ['Open & remove oxygen absorber', 'Add hot water as mentioned', 'Cover and wait 5 minutes', 'Stir well and enjoy hot food']
const DISPATCH = [
  { icon: 'truck', t: 'Dispatched in 24 Hours' },
  { icon: 'leaf', t: '100% Natural Ingredients' },
  { icon: 'warning', t: 'Zero Preservatives' },
  { icon: 'box', t: 'Cash on Delivery Available' },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function fmtDate(d) {
  const day = d.getDate()
  const suf = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th'
  return `${MONTHS[d.getMonth()]} ${day}${suf}`
}
function addDays(base, n) {
  const d = new Date(base)
  d.setDate(d.getDate() + n)
  return d
}

export default function ProductPage() {
  const [product, setProduct] = useState(null)
  const [pack, setPack] = useState(0)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const onOpen = (e) => {
      setProduct(e.detail)
      setPack(0)
      setQty(1)
    }
    window.addEventListener('productpage', onOpen)
    return () => window.removeEventListener('productpage', onOpen)
  }, [])

  useEffect(() => {
    if (product) {
      window.lenis?.stop()
      const el = document.querySelector('.pp')
      if (el) el.scrollTop = 0
    } else {
      window.lenis?.start()
    }
    const onKey = (e) => e.key === 'Escape' && setProduct(null)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.lenis?.start()
    }
  }, [product])

  if (!product) return null

  const p = product
  const gallery = galleryFor(p.name, 5) // 1 main + 4 side thumbnails
  const rating = p.rating ?? 4.36
  const reviews = p.reviews ?? 25
  const total = p.price * PACKS[pack].mult * qty

  const related = [...BESTSELLERS, ...MOST_LOVED].filter((x) => x.name !== p.name).slice(0, 2)

  const today = new Date()
  const timeline = [
    { label: 'Order On', date: fmtDate(today), icon: 'cart' },
    { label: 'Production', date: fmtDate(addDays(today, 4)), icon: 'box' },
    { label: 'Delivered', date: fmtDate(addDays(today, 6)), icon: 'heart' },
  ]

  return (
    <div className="pp" data-lenis-prevent>
      <div className="pp__bar">
        <button className="pp__back" onClick={() => setProduct(null)}>
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
          Back to store
        </button>
      </div>

      <div className="pp__grid container">
        {/* ---------- Gallery: sticky main + scrolling thumbs ---------- */}
        <div className="pp__gallery">
          <div className="pp__main">
            <img src={gallery[0]} alt={p.name} />
          </div>
          <div className="pp__thumbs">
            {gallery.slice(1).map((g, i) => (
              <img key={i} src={g} alt={`${p.name} — view ${i + 2}`} loading="lazy" />
            ))}
          </div>
        </div>

        {/* ---------- Content ---------- */}
        <div className="pp__content">
          <span className="pp__cat">{p.cat || 'Freeze Dried Ready to Eat Meal'}</span>
          <h1 className="pp__title">{p.name}</h1>
          <div className="pp__rate">
            <span className="pp__stars">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className={i < Math.round(rating) ? 'on' : ''}>★</span>
              ))}
            </span>
            <b>{rating}</b>
            <span>| {reviews} reviews</span>
          </div>

          <div className="pp__price">{rupee(p.price)}</div>
          <p className="pp__pricenote">
            That&apos;s just <b>{rupee(p.price)} per wholesome meal</b> — less than a chai + samosa at the airport.
          </p>

          <div className="pp__packs">
            <span className="pp__packlabel">
              Pack Size: <b>{PACKS[pack].label}</b>
            </span>
            <div className="pp__packrow">
              {PACKS.map((pk, i) => (
                <button key={pk.label} className={`pp__pack ${i === pack ? 'is-active' : ''}`} onClick={() => setPack(i)}>
                  {pk.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pp__stock">
            <span className="pp__stockdot" /> In stock · Dispatch within 24hrs · <b>Free shipping above ₹499</b>
          </div>

          {/* You may also like */}
          <h3 className="pp__h3">You may also like</h3>
          <div className="pp__related">
            {related.map((r) => (
              <label key={r.name} className="pp__rel">
                <input type="checkbox" />
                <img src={imageFor(r.name)} alt={r.name} />
                <div className="pp__rel-info">
                  <strong>{r.name}</strong>
                  <span className="pp__rel-price">{rupee(r.price)}</span>
                  <span className="pp__rel-pack">1 Pack ▾</span>
                </div>
              </label>
            ))}
          </div>

          {/* Availability */}
          <div className="pp__avail">
            <h3 className="pp__h3">Check Your Product Availability</h3>
            <div className="pp__availrow">
              <input placeholder="Hint: 35004, 36925" aria-label="Pincode" />
              <button>Check</button>
            </div>
          </div>

          {/* Timeline */}
          <div className="pp__timeline">
            <p className="pp__timeline-note">⚡ Order in the next few hours for fastest dispatch</p>
            <div className="pp__steps2">
              {timeline.map((t, i) => (
                <div className="pp__tstep" key={t.label}>
                  <span className="pp__tdot">
                    <Ico name={t.icon} />
                  </span>
                  <strong>{t.label}</strong>
                  <span>{t.date}</span>
                  {i < timeline.length - 1 && <span className="pp__tline" />}
                </div>
              ))}
            </div>
          </div>

          {/* Buy */}
          <div className="pp__buy">
            <div className="pp__qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
            <button className="pp__add">Add to cart &nbsp;·&nbsp; {rupee(total)}</button>
          </div>

          <div className="pp__gift">🎁 Add products worth ₹599+ &amp; get FREE Poha or Upma at checkout!</div>

          <div className="pp__features">
            {FEATURES.map((f) => (
              <div key={f.t} className="pp__feat">
                <Ico name={f.icon} />
                <strong>{f.t}</strong>
                {f.s && <span>{f.s}</span>}
              </div>
            ))}
          </div>

          <div className="pp__badges">
            {BADGES.map((b) => (
              <span key={b} className="pp__badge">✓ {b}</span>
            ))}
          </div>

          <p className="pp__lead">Slow-cooked {p.name} — the way it&apos;s meant to taste, now ready in 5 minutes.</p>
          <p className="pp__para">
            Garudas&apos; {p.name} is crafted from carefully selected ingredients and traditional North/South Indian
            recipes. We freeze-dry it at its best so you get the full experience every time, in 5 minutes.
          </p>
          <p className="pp__para">
            <b>How to prepare:</b> Add 180ml hot water, seal for 5 minutes, stir and eat.
          </p>

          <ul className="pp__bullets">
            <li>Authentic recipe, slow-cooked then freeze-dried</li>
            <li>Freeze-dried to preserve the depth of flavour</li>
            <li>100% natural — no preservatives or artificial additives</li>
            <li>12-month shelf life</li>
            <li>Ready in 5 minutes — ideal for travel, night shifts, hostel and home</li>
            <li>Available in 1, 3, 5 and 8 packs</li>
          </ul>

          <p className="pp__para">
            The best instant Indian meal for anyone who refuses to compromise on taste. Order {p.name} online, delivered
            across India.
          </p>

          {/* How to prepare stepper */}
          <div className="pp__prep">
            <span className="pp__prep-h">How to Prepare</span>
            <div className="pp__prep-steps">
              {STEPS.map((s, i) => (
                <div className="pp__prep-step" key={s}>
                  <span className="pp__prep-num">{i + 1}</span>
                  <span className="pp__prep-txt">{s}</span>
                  {i < STEPS.length - 1 && <span className="pp__prep-line" />}
                </div>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="pp__share">
            <span className="pp__sharelabel">Share:</span>
            {SHARE.map((s) => (
              <a key={s.label} href="#top" aria-label={s.label} className="pp__sharebtn">
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
            <a href="#shop" className="pp__help">Need help?</a>
          </div>

          {/* Dispatch info */}
          <div className="pp__dispatch">
            {DISPATCH.map((d) => (
              <div key={d.t} className="pp__disp">
                <Ico name={d.icon} />
                {d.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
