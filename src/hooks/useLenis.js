import { useEffect } from 'react'
import Lenis from 'lenis'

// Premium momentum scrolling (à la bowlfulstore.com). The whole page body
// scrolls smoothly; the fixed header sits outside the scrolled flow.
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085, // silky, slightly weighted glide (framerate-independent)
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    })

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Smooth-scroll for in-page anchor links.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) {
        const el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el, { offset: -120 })
        }
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
}
