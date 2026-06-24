import { useEffect } from 'react'
import Lenis from 'lenis'


export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085, // silky, slightly weighted glide (framerate-independent)
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      // Let the wheel scroll nested scrollable elements (e.g. the mega-menu
      // dropdown) natively instead of always smooth-scrolling the page.
      allowNestedScroll: true,
    })

    // Expose so UI (e.g. the mobile drawer) can pause/resume scrolling.
    window.lenis = lenis

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
      delete window.lenis
    }
  }, [])
}
