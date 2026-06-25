// ---------------------------------------------------------------------------
// Hero banner slides.
//
// TODO (admin panel): these are placeholder banners. Later, fetch this list
// from the backend — e.g. `GET /api/banners` — where the client uploads each
// banner image and (optionally) its overlay copy & call-to-action from an
// admin dashboard. The shape below maps 1:1 to a "Banner" model:
//   { id, image, eyebrow, title, titleAccent, subtitle, ctaText, ctaLink, align }
// `image` will become the uploaded asset URL; text fields are optional so a
// client can ship an image-only banner (just omit them).
// ---------------------------------------------------------------------------

// Prefix with BASE_URL so banners load under a GitHub Pages sub-path too.
const img = (f) => `${import.meta.env.BASE_URL}images/${f}`

// The banner artwork itself is the content (uploaded by the client). Each slide
// is just the image; filenames have spaces, so they're URL-encoded.
export const BANNERS = [
  { id: 'b1', image: img('Banner/Banner%2001.png') },
  { id: 'b2', image: img('Banner/Banner%2002.png') },
  { id: 'b3', image: img('Banner/Banner%2003.png') },
  { id: 'b4', image: img('Banner/Banner%2004.png') },
  { id: 'b5', image: img('Banner/Banner%2005.png') },
]

// Static brand proof points shown across all slides.
export const HERO_STATS = [
  ['30k+', 'Happy Customers'],
  ['50+', 'Countries'],
  ['100+', 'Products'],
]
