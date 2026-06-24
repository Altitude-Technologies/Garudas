import Header from './components/Header/Header.jsx'
import Footer from './sections/Footer.jsx'
import HeroCarousel from './sections/HeroCarousel.jsx'
import { useLenis } from './hooks/useLenis.js'
import { useRevealHeadings } from './hooks/useRevealHeadings.js'
import {
  GarudasPromise,
  ShopByCategory,
  Bestsellers,
  MarqueeBand,
  MostLoved,
  WhyDifferent,
  Pickles,
  Pastes,
  HowItsMade,
  SocialWall,
  AvailableOn,
  TrustStrip,
} from './sections/sections.jsx'
import './sections/sections.css'

export default function App() {
  // Lenis smooth scrolling — header stays fixed outside the scrolled flow,
  // every section below scrolls with momentum (à la bowlfulstore.com).
  useLenis()
  // Slide every section heading up into view as it enters the viewport.
  useRevealHeadings()

  return (
    <>
      <Header />
      <main id="scroll-container">
        <HeroCarousel />
        <GarudasPromise />
        <ShopByCategory />
        <Bestsellers />
        <MarqueeBand />
        <MostLoved />
        <WhyDifferent />
        <Pickles />
        <Pastes />
        <HowItsMade />
        <SocialWall />
        <AvailableOn />
        <TrustStrip />
        <Footer />
      </main>
    </>
  )
}
