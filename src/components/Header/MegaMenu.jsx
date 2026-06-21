import { AnimatePresence, motion } from 'framer-motion'
import { CATALOGUE, HIGHLIGHTS } from '../../lib/products.js'
import { imageFor } from '../../lib/images.js'

const HL_ICONS = {
  'Zero Preservatives':
    'M12 2C7 6 5 9 5 13a7 7 0 0 0 14 0c0-4-2-7-7-11z',
  'Chef Crafted': 'M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8z',
  'Ready in 5 Min': 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  'Travel Approved': 'M2 16l9-3 7-7 2 2-7 7-3 9-2-5-5-2z',
}

export default function MegaMenu({ activeId, onClose }) {
  const data = activeId ? CATALOGUE[activeId] : null

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          key={activeId}
          className="mega"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mega__panel container">
            {/* ---- Left: all-product columns ---- */}
            <div className="mega__lists">
              <h3 className="mega__heading">All Products</h3>
              <div className="mega__cols">
                {data.columns.map((col) => (
                  <div key={col.name} className="mega__col">
                    <p className="mega__colname">{col.name}</p>
                    <ul>
                      {col.items.map((item) => (
                        <li key={item}>
                          <a href="#shop">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Right: featured cards ---- */}
            <div className="mega__featured">
              <p className="mega__fhead">{data.columns[0].name}</p>
              <div className="mega__cards">
                {data.featured.slice(0, 4).map((f) => (
                  <a href="#shop" key={f.name} className="mcard">
                    <span className="mcard__img">
                      <img src={imageFor(f.name)} alt={f.name} loading="lazy" />
                      <span className="mcard__tag">{f.tag}</span>
                    </span>
                    <span className="mcard__name">{f.name}</span>
                  </a>
                ))}
              </div>

              <p className="mega__fhead">
                {data.columns[1] ? data.columns[1].name : 'Featured'}
              </p>
              <div className="mega__cards">
                {data.featured.slice(4, 8).map((f) => (
                  <a href="#shop" key={f.name} className="mcard">
                    <span className="mcard__img">
                      <img src={imageFor(f.name)} alt={f.name} loading="lazy" />
                      <span className="mcard__tag">{f.tag}</span>
                    </span>
                    <span className="mcard__name">{f.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Bottom highlight strip ---- */}
          <div className="mega__strip">
            <div className="container mega__strip-inner">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="mega__hl">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={HL_ICONS[h.title]}
                    />
                  </svg>
                  <div>
                    <strong>{h.title}</strong>
                    <span>{h.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
