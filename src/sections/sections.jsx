import { useRef, useState, useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import { IMG, imageFor, galleryFor } from '../lib/images.js'
import { SOCIAL, SOCIAL_HANDLE } from '../lib/social.js'
import {
  HIGHLIGHTS,
  SHOP_CATEGORIES,
  BESTSELLERS,
  MOST_LOVED,
  PICKLES,
  PASTES,
  MARKETPLACES,
} from '../lib/products.js'

const rupee = (n) => `₹${n}.00`

const CAT_IMG = {
  'All Products': IMG.thali,
  'Instant Foods': IMG.idli,
  Beverages: IMG.juices,
  'Organic Farms': IMG.veggies,
  Combos: IMG.curryBowls,
}

/* --------------------------------------------------------- FEATURE STRIP */
const FEAT_ICONS = ['leaf', 'star', 'clock', 'plane']

function FIcon({ name }) {
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  const map = {
    leaf: 'M5 21c0-8 6-14 16-15-1 9-7 15-16 15zM5 21c2-5 5-8 10-10',
    star: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z',
    clock: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 7.5v5l3.2 2',
    plane: 'M2 13l19-9-8.5 18-2.2-7.3z',
  }
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path {...p} d={map[name]} />
    </svg>
  )
}

// Clean oval outline that wraps the title.
function Scribble() {
  return (
    <svg className="strip__circle" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
      <ellipse
        cx="150"
        cy="40"
        rx="147"
        ry="37"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function FeatureStrip() {
  return (
    <section className="strip">
      <div className="container strip__inner">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.06} className="strip__item">
            <span className="strip__icon">
              <FIcon name={FEAT_ICONS[i]} />
            </span>
            <div className="strip__text">
              <span className="strip__titlewrap">
                <span className="strip__title">{h.title}</span>
                <Scribble />
              </span>
              <span className="strip__sub">{h.sub}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------- GARUDAS PROMISE (6) */
const PROMISE_ICONS = {
  leaf: 'M5 21c0-8 6-14 16-15-1 9-7 15-16 15zM5 21c2-5 5-8 10-10',
  droplet: 'M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z',
  home: 'M3 11l9-8 9 8M5 10v10h14V10',
  box: 'M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',
  palette:
    'M12 3a9 9 0 1 0 0 18c1.2 0 2-1 2-2 0-1.5-1.4-1.6-1.4-3A1.6 1.6 0 0 1 14.2 14H16a5 5 0 0 0 5-5c0-3.3-4-6-9-6zM7.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM14.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  crown: 'M3 7l4 5 5-7 5 7 4-5-2 13H5z',
}

const VALUE_PROPS = [
  { icon: 'leaf', title: 'No Preservatives', sub: '100% natural — nothing added', color: '#16a34a' },
  { icon: 'droplet', title: 'No Additives', sub: 'Pure, clean ingredients', color: '#0891b2' },
  { icon: 'home', title: 'Home-Made Taste', sub: 'Traditional family recipes', color: '#ca8a04' },
  { icon: 'box', title: 'Japanese Retort Tech', sub: 'Locks in freshness', color: '#4f46e5' },
  { icon: 'palette', title: 'No Artificial Colours', sub: 'No synthetic colours or flavours', color: '#db2777' },
  { icon: 'crown', title: 'Premium Products', sub: 'Crafted to the finest standard', color: '#9333ea' },
]

export function GarudasPromise() {
  return (
    <section className="vprop">
      <div className="vprop__inner">
        {VALUE_PROPS.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.05} className="vprop__item" style={{ '--c': v.color }}>
            <div className="vprop__zoom">
              <span className="vprop__icon">
                <svg viewBox="0 0 24 24" width="26" height="26">
                  <path d={PROMISE_ICONS[v.icon]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="vprop__text">
                <span className="vprop__titlewrap">
                  <span className="vprop__title">{v.title}</span>
                </span>
                <span className="vprop__sub">{v.sub}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------ SHOP BY CATEGORY */
export function ShopByCategory() {
  const railRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const r = railRef.current
    if (!r) return
    setAtStart(r.scrollLeft <= 1)
    setAtEnd(r.scrollLeft + r.clientWidth >= r.scrollWidth - 1)
  }

  useEffect(() => {
    update()
    const r = railRef.current
    if (!r) return
    r.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      r.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollByCards = (dir) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('.catcard')
    const step = card ? card.offsetWidth + 20 : 360
    rail.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="shopcat block" id="shop">
      <div className="container">
        <div className="shopcat__head">
          <h2 className="section-title">Shop By Category</h2>
          <div className="shopcat__nav">
            <button
              className="shopcat__btn"
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              disabled={atStart}
            >
              <span className="shopcat__swap">
                <span className="a1"><Chevron dir="left" /></span>
                <span className="a2"><Chevron dir="left" /></span>
              </span>
            </button>
            <button
              className="shopcat__btn"
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              disabled={atEnd}
            >
              <span className="shopcat__swap">
                <span className="a1"><Chevron dir="right" /></span>
                <span className="a2"><Chevron dir="right" /></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="shopcat__rail" ref={railRef} data-lenis-prevent>
        {SHOP_CATEGORIES.map((c) => (
          <a href="#shop" key={c.name} className="catcard">
            <img className="catcard__img" src={CAT_IMG[c.name] || imageFor(c.name)} alt={c.name} loading="lazy" />
            <span className="catcard__overlay" />
            <div className="catcard__body">
              <div>
                <h3 className="catcard__title">
                  {c.name}
                  {c.count != null && <sup>{c.count}</sup>}
                </h3>
                <p className="catcard__note">{c.note}</p>
              </div>
              <span className="catcard__arrow">
                <span className="a1">
                  <Arrow />
                </span>
                <span className="a2">
                  <Arrow />
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* --------------------------------------------------- PRODUCT CARD + GRID */
function ProductCard({ p, delay = 0 }) {
  const rating = p.rating ?? 4.8
  const cat = p.cat ?? 'Garudas Kitchen'
  // Gallery: hovering / touching the left·middle·right thirds of the image
  // reveals slide 1·2·3. A single explicit p.img keeps the old single-shot card.
  const gallery = p.gallery ?? (p.img ? [p.img] : galleryFor(p.name))
  const [active, setActive] = useState(0)

  // Map a pointer's x-position over the image to the matching slide index.
  const pickZone = (e) => {
    if (gallery.length < 2) return
    const r = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - r.left) / r.width
    const zone = Math.floor(ratio * gallery.length)
    setActive(Math.min(gallery.length - 1, Math.max(0, zone)))
  }
  const reset = () => setActive(0)

  return (
    <Reveal delay={delay} className="pcard card">
      <div
        className="pcard__img"
        onPointerMove={pickZone}
        onPointerDown={pickZone}
        onPointerLeave={reset}
      >
        {p.save && <span className="chip pcard__save">{p.save}</span>}
        <span className="pcard__rate">
          <span className="pcard__rate-face pcard__rate-stars">
            <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
              <path fill="#f5a623" d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
            </svg>
            {rating}
          </span>
          <span className="pcard__rate-face pcard__rate-eye" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="21" height="21">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
              />
              <circle cx="12" cy="12" r="2.6" fill="currentColor" />
            </svg>
          </span>
        </span>

        <div className="pcard__gallery">
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${p.name} — view ${i + 1}`}
              loading="lazy"
              className={`pcard__slide ${i === active ? 'is-active' : ''}`}
            />
          ))}
        </div>

        <button className="pcard__choose">
          <span>Add to Cart</span>
        </button>

        {gallery.length > 1 && (
          <div className="pcard__dots" role="tablist" aria-label="Product images">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show image ${i + 1}`}
                className={`pcard__dot ${i === active ? 'is-active' : ''}`}
                onPointerDown={(e) => {
                  e.stopPropagation()
                  setActive(i)
                }}
                onClick={(e) => e.stopPropagation()}
              />
            ))}
          </div>
        )}
      </div>
      <div className="pcard__body">
        <span className="pcard__cat">{cat}</span>
        <div className="pcard__row">
          <h4 className="pcard__name">{p.name}</h4>
          <div className="pcard__pricewrap">
            <div className="pcard__price">
              <span className="pcard__from">From</span>
              <span className="pcard__now">{rupee(p.price)}</span>
            </div>
            {p.mrp && <span className="pcard__mrp">{rupee(p.mrp)}</span>}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function Bestsellers() {
  return (
    <section className="block block--wide">
      <div className="container">
        <div className="block__head">
          <div>
            <span className="eyebrow">Loved by 30,000+ kitchens</span>
            <h2 className="section-title">Our Bestsellers</h2>
          </div>
          <a href="#shop" className="block__link">
            View all <Arrow />
          </a>
        </div>
        <div className="pgrid">
          {BESTSELLERS.map((p, i) => (
            <ProductCard key={p.name} p={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- MARQUEE BAND */
export function MarqueeBand() {
  const words = ['Zero Preservatives', 'Chef Crafted', 'Ready in 5 Min', 'Travel Approved', 'Since 1977']
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {Array.from({ length: 2 }).map((_, k) => (
          <div className="marquee__group" key={k}>
            {words.map((w) => (
              <span key={w} className="marquee__word">
                {w} <i>•</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

// Simple meal card — clean image, name, price (no badges/hover controls).
function MealCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay} className="mlcard">
      <a href="#shop" className="mlcard__img">
        <img src={p.img || imageFor(p.name)} alt={p.name} loading="lazy" />
      </a>
      <h4 className="mlcard__name">{p.name}</h4>
      <div className="mlcard__price">{rupee(p.price)}</div>
    </Reveal>
  )
}

export function MostLoved() {
  return (
    <section className="block block--wide block--tint">
      <div className="container">
        <div className="block__head">
          <h2 className="section-title">Most Loved Meals</h2>
        </div>
        <div className="pgrid">
          {MOST_LOVED.map((p, i) => (
            <MealCard key={p.name} p={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ WHY DIFFERENT */
const WHY_ICONS = {
  snow: 'M12 2v20M4 7l16 10M20 7L4 17M12 2l-3 3m3-3 3 3M12 22l-3-3m3 3 3-3M4 7l.3-4M4 7 1 8m19-1-.3-4M20 7l3 1M4 17l-3 1m3-1 .3 4m15.7-4 3-1m-3 1-.3 4',
  mountain: 'M3 20h18L14 7l-4 6-2-3-5 10zM14 7l3-4 4 7',
  luggage: 'M6 8h12l-.7 12.2a2 2 0 0 1-2 1.8H8.7a2 2 0 0 1-2-1.8zM9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3M10 12v6M14 12v6',
  bowl: 'M3 11h18a9 9 0 0 1-18 0zM7 11c0-3 2-5 5-5s5 2 5 5M12 3v1',
}

export function WhyDifferent() {
  const points = [
    ['snow', 'Freeze-Dried, Not Just Instant', 'Locks in up to 97% of nutrition — unlike ordinary instant food that loses most of it.'],
    ['mountain', 'Works Anywhere, No Fridge Needed', 'From hostels to Himalayan treks — no refrigeration, no cooking setup required.'],
    ['luggage', 'Carry-On Friendly', 'Each meal weighs under 100g. Fits in any bag. Won’t add a gram to your luggage limit.'],
    ['bowl', '60+ Authentic Indian Dishes', 'From Dal Makhani to Mysore Mutton — recipes crafted by master chefs from across India.'],
  ]
  return (
    <section className="why" id="why">
      <div className="container why__inner">
        <Reveal className="why__media">
          <img src={IMG.curryBowls} alt="Garudas meal" />
        </Reveal>
        <div className="why__copy">
          <h2 className="section-title why__title">Why Garudas is Different</h2>
          <ul className="why__list">
            {points.map(([icon, t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.07}>
                <span className="why__icon">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path d={WHY_ICONS[icon]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <strong>{t}</strong>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <a href="#shop" className="btn btn--primary btn-sweep why__cta">
            <span>See All Products</span> <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- SHOWCASE BANDS */
function Showcase({ variant, eyebrow, title, copy, link, items, bg }) {
  const rail = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const r = rail.current
    if (!r) return
    setAtStart(r.scrollLeft <= 1)
    setAtEnd(r.scrollLeft + r.clientWidth >= r.scrollWidth - 1)
  }

  useEffect(() => {
    update()
    const r = rail.current
    if (!r) return
    r.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      r.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Page by two cards at a time (the rail shows exactly two).
  const page = (dir) => {
    const r = rail.current
    if (!r) return
    const card = r.querySelector('.pcard')
    const gap = parseFloat(getComputedStyle(r).columnGap) || 22
    const step = card ? (card.offsetWidth + gap) * 2 : r.clientWidth
    r.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className={`show show--${variant}`}>
      {bg && (
        <>
          <img src={bg} alt="" className="show__bg" aria-hidden="true" />
          <div className="show__scrim" />
        </>
      )}
      <div className={`container show__inner ${variant === 'green' ? 'show__inner--rev' : ''}`}>
        <div className="show__intro">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h2 className="show__title">{title}</h2>
          <p>{copy}</p>
          <a href="#shop" className="show__shop">
            <span>{link}</span> <Arrow />
          </a>
          <div className="show__nav">
            <button className="btn-sweep" onClick={() => page(-1)} disabled={atStart} aria-label="Scroll left">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button className="btn-sweep" onClick={() => page(1)} disabled={atEnd} aria-label="Scroll right">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="show__rail" ref={rail}>
          {items.map((p, i) => (
            <ProductCard key={p.name} p={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Each pickle gets a coherent, distinct image.
const PICKLE_IMG = {
  'Mango Thokku Pickle': IMG.mango,
  'Garlic Pickle': IMG.gravyPan,
  'Green Chilli Pickle': IMG.broccoli,
  'Lemon Pickle': IMG.fruits,
  'Mixed Veg Pickle': IMG.veggies,
  'Ginger Pickle': IMG.spiceBowls,
}

// Unique editorial section: warm cream backdrop, oversized title with a
// rotated "handmade" stamp, and a horizontal snap-scroll rail of jars.
export function Pickles() {
  const rail = useRef(null)
  const nudge = (d) => rail.current?.scrollBy({ left: d, behavior: 'smooth' })

  return (
    <section className="pickles" id="pickles">
      <span className="pickles__ghost" aria-hidden="true">
        Garudas
      </span>
      <div className="container">
        <div className="pickles__head">
          <div className="pickles__lead">
            <span className="eyebrow">New &amp; Hot · Handcrafted</span>
            <h2 className="pickles__title">
              Pickles
              <span className="pickles__stamp">
                Aged to
                <br />
                perfection
              </span>
            </h2>
          </div>
          <div className="pickles__aside">
            <p>
              Sun-ripened and slow-cured in small batches — the taste of home, sealed jar by jar.
            </p>
            <div className="pickles__actions">
              <a href="#shop" className="pickles__shop">
                <span>Shop Pickles</span> <Arrow />
              </a>
              <div className="pickles__nav">
                <button className="btn-sweep" onClick={() => nudge(-340)} aria-label="Scroll left">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button className="btn-sweep" onClick={() => nudge(340)} aria-label="Scroll right">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pickles__rail" ref={rail}>
          {PICKLES.map((p, i) => (
            <ProductCard key={p.name} p={{ ...p, img: PICKLE_IMG[p.name] }} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pastes() {
  return (
    <Showcase
      variant="green"
      eyebrow="Cook smarter"
      title="Sauces, Gravy & Pastes"
      copy="Restaurant-grade bases — one jar, a dozen dishes."
      link="Shop Pastes"
      items={PASTES}
      bg={IMG.gravyPan}
    />
  )
}

/* -------------------------------------------------------- HOW IT'S MADE */
export function HowItsMade() {
  return (
    <section className="made">
      <div className="container">
        <Reveal className="made__panel">
          <img src={IMG.cookingHand} alt="" className="made__bg" />
          <div className="made__overlay" />
          <div className="made__copy">
            <span className="eyebrow eyebrow--light">Behind the scenes</span>
            <h2>See How Garudas is Made</h2>
            <p>From farm to bowl — pure ingredients, traditional recipes, zero shortcuts.</p>
            <button className="made__play" aria-label="Play video">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------- SOCIAL WALL (BENTO) */
function PlatformIcon({ platform }) {
  const cls = platform === 'youtube' ? 'fa-brands fa-youtube' : 'fa-brands fa-instagram'
  return <i className={cls} aria-hidden="true" />
}

// A bento mosaic "social wall": mixed tile sizes that auto-pack, each with a
// platform badge and a hover-revealed caption. Adapts to any post count.
export function SocialWall() {
  const span = (i) => {
    if (i % 6 === 0) return 'smtile--big'
    if (i % 6 === 4) return 'smtile--wide'
    return ''
  }
  return (
    <section className="smwall" id="community">
      <div className="container">
        <div className="smwall__head">
          <div>
            <span className="eyebrow">
              <span className="smwall__live" /> Live from the feed
            </span>
            <h2 className="section-title">From Our Community</h2>
          </div>
          <a href="#community" className="smwall__follow">
            <PlatformIcon platform="instagram" />
            Follow {SOCIAL_HANDLE}
          </a>
        </div>

        <div className="smwall__grid">
          {SOCIAL.map((post, i) => (
            <Reveal key={post.id} delay={(i % 6) * 0.04} className={`smtile ${span(i)}`}>
              <a href={post.href} className="smtile__link">
                <img src={post.image} alt={post.caption} loading="lazy" />
                <span className="smtile__badge">
                  <PlatformIcon platform={post.platform} />
                </span>
                <span className="smtile__meta">
                  <span className="smtile__handle">{post.handle}</span>
                  <span className="smtile__likes">♥ {post.likes}</span>
                </span>
                <span className="smtile__hover">
                  <span className="smtile__cap">{post.caption}</span>
                  <span className="smtile__view">View post →</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- AVAILABLE ON */
const MARKETPLACE_BRANDS = [
  { id: 'amazon', label: 'Amazon', logo: 'amazon.webp', tag: 'Shop Now', color: '#f59e0b' },
  { id: 'blinkit', label: 'Blinkit', logo: 'blinkit.png', tag: '10 Min Delivery', color: '#0c831f' },
  { id: 'flipkart', label: 'Flipkart', logo: 'flipkart.png', tag: 'Shop Now', color: '#2874f0' },
  { id: 'zepto', label: 'Zepto', logo: 'zepto.png', tag: '10 Min Delivery', color: '#6c2bd9' },
]

const asset = (f) => `${import.meta.env.BASE_URL}images/${f}`

export function AvailableOn() {
  return (
    <section className="block block--tint">
      <div className="container">
        <Reveal className="avail">
          <span className="eyebrow">Find us online</span>
          <h2 className="section-title">Also Available On</h2>
          <div className="avail__row">
            {MARKETPLACE_BRANDS.map((b) => (
              <a
                key={b.id}
                href="#shop"
                className="avail__card"
                style={{ '--brand': b.color }}
              >
                <img className="avail__logo" src={asset(b.logo)} alt={`${b.label} logo`} loading="lazy" />
                <strong className="avail__name">{b.label}</strong>
                <span>{b.tag}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- FINAL FEATURES */
function TrustIcon({ name }) {
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  const map = {
    box: <path {...p} d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" />,
    shield: <path {...p} d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6zM9 12l2 2 4-4" />,
    headset: <path {...p} d="M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2zM20 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2zM20 17v1a3 3 0 0 1-3 3h-3" />,
    leaf: <path {...p} d="M5 21c0-8 6-14 16-15-1 9-7 15-16 15zM5 21c2-5 5-8 10-10" />,
  }
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      {map[name]}
    </svg>
  )
}

export function TrustStrip() {
  const items = [
    ['box', 'Free Shipping', 'On all orders above ₹499'],
    ['shield', '100% Secure Checkout', 'UPI, cards & net-banking — fully encrypted'],
    ['headset', "We're Here For You", 'Mon–Sat, 10am–6pm'],
    ['leaf', 'No Added Preservatives', 'All-natural ingredients in every bowl'],
  ]
  return (
    <section className="trust">
      <div className="container trust__inner">
        {items.map(([icon, t, s], i) => (
          <Reveal key={t} delay={i * 0.05} className="trust__item">
            <span className="trust__icon">
              <TrustIcon name={icon} />
            </span>
            <strong>{t}</strong>
            <span>{s}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" style={{ verticalAlign: 'middle' }}>
      <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

function Chevron({ dir }) {
  const d = dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}
