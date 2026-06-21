import './Logo.css'

// Real Garudas logo (horizontal lockup). Falls back to a styled wordmark only
// if the asset is missing.
export default function Logo({ height = 50 }) {
  return (
    <a href="#top" className="logo" aria-label="Garudas — home">
      <img
        src={`${import.meta.env.BASE_URL}Garudas-Logo-02.png`}
        alt="Garudas — A Symbol of Trust & Quality"
        style={{ height }}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'inline-flex'
        }}
      />
      <span className="logo__fallback" style={{ display: 'none' }}>
        <span className="logo__word">
          GARUDAS
          <small>SINCE 1977</small>
        </span>
      </span>
    </a>
  )
}
