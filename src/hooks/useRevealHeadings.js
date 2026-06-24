import { useEffect } from 'react'

export function useRevealHeadings() {
  useEffect(() => {
    const selector = '.section-title, .pickles__title, .show__title'
    const heads = Array.from(document.querySelectorAll(selector))
    if (!heads.length) return

    heads.forEach((h) => h.classList.add('reveal-up'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )
    heads.forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [])
}
