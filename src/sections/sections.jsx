import { useRef, useState, useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import { IMG, imageFor } from '../lib/images.js'
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
  return (
    <Reveal delay={delay} className="pcard card">
      <div className="pcard__img">
        {p.save && <span className="chip pcard__save">{p.save}</span>}
        <span className="pcard__rate">
          <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
            <path fill="#f5a623" d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
          </svg>
          {rating}
        </span>
        <img src={p.img || imageFor(p.name)} alt={p.name} loading="lazy" />
        <button className="pcard__choose">Choose options</button>
      </div>
      <div className="pcard__body">
        <span className="pcard__cat">{cat}</span>
        <h4 className="pcard__name">{p.name}</h4>
        <div className="pcard__price">
          <span className="pcard__from">From</span>
          <span className="pcard__now">{rupee(p.price)}</span>
        </div>
        {p.mrp && <span className="pcard__mrp">{rupee(p.mrp)}</span>}
      </div>
    </Reveal>
  )
}

export function Bestsellers() {
  return (
    <section className="block block--tint">
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
                {w} <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export function MostLoved() {
  return (
    <section className="block">
      <div className="container">
        <div className="block__head">
          <div>
            <span className="eyebrow">Fan favourites</span>
            <h2 className="section-title">Most Loved Meals</h2>
          </div>
          <a href="#shop" className="block__link">
            View all <Arrow />
          </a>
        </div>
        <div className="pgrid">
          {MOST_LOVED.map((p, i) => (
            <ProductCard key={p.name} p={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ WHY DIFFERENT */
export function WhyDifferent() {
  const points = [
    ['Freeze-dried, not just instant', 'Locks in up to 97% of nutrition — unlike ordinary instant food.'],
    ['Works anywhere, no fridge', 'From hostels to Himalayan treks. No refrigeration, no fuss.'],
    ['Carry-on friendly', 'Each meal weighs under 100g. Won’t cost a gram of your luggage.'],
    ['Authentic Indian dishes', 'Recipes crafted by master chefs from every corner of India.'],
  ]
  return (
    <section className="why" id="why">
      <div className="container why__inner">
        <Reveal className="why__media">
          <img src={IMG.curryBowls} alt="Garudas meal" />
          <div className="why__badge">
            <strong>97%</strong>
            <span>nutrition retained</span>
          </div>
          <div className="why__est">Est. 1977</div>
        </Reveal>
        <div className="why__copy">
          <span className="eyebrow">The Garudas difference</span>
          <h2 className="section-title">Why Garudas is Different</h2>
          <ul className="why__list">
            {points.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.07}>
                <span className="why__tick">✓</span>
                <div>
                  <strong>{t}</strong>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <a href="#shop" className="btn btn--primary">
            See All Products <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- SHOWCASE BANDS */
function Showcase({ variant, eyebrow, title, copy, link, items }) {
  return (
    <section className={`show show--${variant}`}>
      <div className={`container show__inner ${variant === 'green' ? 'show__inner--rev' : ''}`}>
        <div className="show__intro">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h2 className="show__title">{title}</h2>
          <p>{copy}</p>
          <a href="#shop" className="btn btn--light">
            {link} <Arrow />
          </a>
        </div>
        <div className="show__rail">
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
              <a href="#shop" className="btn btn--primary">
                Shop Pickles <Arrow />
              </a>
              <div className="pickles__nav">
                <button onClick={() => nudge(-340)} aria-label="Scroll left">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button onClick={() => nudge(340)} aria-label="Scroll right">
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
export function AvailableOn() {
  return (
    <section className="block block--tint">
      <div className="container">
        <Reveal className="avail">
          <span className="eyebrow">Find us online</span>
          <h2 className="section-title">Also Available On</h2>
          <div className="avail__row">
            {MARKETPLACES.map((m) => (
              <div key={m} className="avail__card">
                <strong>{m}</strong>
                <span>Fast delivery</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- FINAL FEATURES */
export function TrustStrip() {
  const items = [
    ['Free Shipping', 'On all orders above ₹499'],
    ['100% Secure Checkout', 'UPI, cards & net-banking'],
    ["We're Here For You", 'Mon–Sat, 10am–6pm'],
    ['No Added Preservatives', 'All natural, always'],
  ]
  return (
    <section className="trust">
      <div className="container trust__inner">
        {items.map(([t, s], i) => (
          <Reveal key={t} delay={i * 0.05} className="trust__item">
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
