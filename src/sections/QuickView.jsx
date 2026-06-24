import { useState, useEffect } from 'react'
import { galleryFor } from '../lib/images.js'

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

// Build a full detail sheet for any product (sensible defaults + product values).
function buildDetails(p) {
  return {
    cat: p.cat || 'Freeze Dried Ready to Eat Meal',
    name: p.name,
    price: p.price,
    rating: p.rating ?? 4.8,
    reviews: p.reviews ?? 5,
    netWeight: p.netWeight || '70 Gms',
    water: p.water || '180 ml',
    rehydrated: p.rehydrated || '250 Gms. (Approximately)',
    description:
      p.description ||
      `${p.name} is a chef-crafted Indian favourite, freeze-dried to lock in its taste, aroma, texture and colour for up to 365 days. Just add hot water as mentioned on the pack and your meal is ready in 5 minutes.`,
    ingredients:
      p.ingredients ||
      'Rice, Onion, Tomato, Garlic, Ginger, Salt, Aromatic Spices, Curry Leaf, Coriander, Red Chilli, Black Pepper, Chilli Powder.',
    features: p.features || [
      'No preservatives · 100% natural',
      '12-month shelf life',
      'Ready in 5 minutes — ideal for travel, night shifts, hostel and home',
      'Available in 1, 3, 5 and 8 packs',
    ],
  }
}

function Stars({ value }) {
  return (
    <span className="qv__stars" aria-label={`${value} out of 5`}>
      {'★★★★★'.split('').map((s, i) => (
        <span key={i} className={i < Math.round(value) ? 'on' : ''}>
          ★
        </span>
      ))}
    </span>
  )
}

export default function QuickView() {
  const [product, setProduct] = useState(null)
  const [active, setActive] = useState(0)
  const [pack, setPack] = useState(0)
  const [qty, setQty] = useState(1)

  // Open on the global "quickview" event fired by product cards.
  useEffect(() => {
    const onOpen = (e) => {
      setProduct(e.detail)
      setActive(0)
      setPack(0)
      setQty(1)
    }
    window.addEventListener('quickview', onOpen)
    return () => window.removeEventListener('quickview', onOpen)
  }, [])

  // Lock page scroll while open; close on Escape.
  useEffect(() => {
    if (product) window.lenis?.stop()
    else window.lenis?.start()
    const onKey = (e) => e.key === 'Escape' && setProduct(null)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.lenis?.start()
    }
  }, [product])

  const open = !!product
  const d = product ? buildDetails(product) : null
  const gallery = product ? galleryFor(product.name, 5) : []
  const total = d ? d.price * PACKS[pack].mult * qty : 0

  return (
    <div className={`qv ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="qv__scrim" onClick={() => setProduct(null)} />
      {d && (
        <div className="qv__panel" role="dialog" aria-modal="true" aria-label={d.name}>
          <button className="qv__close" onClick={() => setProduct(null)} aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          {/* ---- Media ---- */}
          <div className="qv__media">
            <img src={gallery[active]} alt={d.name} />
            <div className="qv__dots">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  className={`qv__dot ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ---- Info (scrollable) ---- */}
          <div className="qv__info" data-lenis-prevent>
            <div className="qv__scroll">
              <span className="qv__cat">{d.cat}</span>
              <div className="qv__titlerow">
                <h3 className="qv__name">{d.name}</h3>
                <span className="qv__price">{rupee(d.price)}</span>
              </div>
              <div className="qv__rate">
                <Stars value={d.rating} />
                <b>{d.rating}</b>
                <span>| {d.reviews} reviews</span>
              </div>

              <ul className="qv__specs">
                <li>
                  <b>Net Weight Inside:</b> {d.netWeight}
                </li>
                <li>
                  <b>Water to Be Added:</b> {d.water}
                </li>
                <li>
                  <b>Rehydrated Weight:</b> {d.rehydrated}
                </li>
              </ul>

              <p className="qv__para">
                <b>Product Description:</b> {d.description}
              </p>
              <p className="qv__para">
                <b>Ingredients:</b> {d.ingredients}
              </p>

              <ul className="qv__features">
                {d.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="qv__packs">
                <span className="qv__packlabel">
                  Pack Size: <b>{PACKS[pack].label}</b>
                </span>
                <div className="qv__packrow">
                  {PACKS.map((pk, i) => (
                    <button
                      key={pk.label}
                      className={`qv__pack ${i === pack ? 'is-active' : ''}`}
                      onClick={() => setPack(i)}
                    >
                      {pk.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="qv__stock">
                <span className="qv__stockdot" /> In stock, ready to ship
              </div>

              <div className="qv__buy">
                <div className="qv__qty">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">
                    −
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">
                    +
                  </button>
                </div>
                <button className="qv__add">
                  Add to cart &nbsp;·&nbsp; {rupee(total)}
                </button>
              </div>

              <div className="qv__share">
                <span className="qv__sharelabel">Share:</span>
                {SHARE.map((s) => (
                  <a key={s.label} href="#top" aria-label={s.label} className="qv__sharebtn">
                    <i className={s.icon} aria-hidden="true" />
                  </a>
                ))}
                <a href="#shop" className="qv__help">
                  Need help?
                </a>
              </div>
            </div>

            <button
              type="button"
              className="qv__full"
              onClick={() => {
                const current = product
                setProduct(null)
                window.dispatchEvent(new CustomEvent('productpage', { detail: current }))
              }}
            >
              View full details
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
