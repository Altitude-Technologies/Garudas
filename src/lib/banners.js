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

export const BANNERS = [
  {
    id: 'b1',
    image: img('table-food.jpg'),
    eyebrow: 'A Symbol of Trust & Quality · Since 1977',
    title: 'Your Indian Kitchen',
    titleAccent: 'Anywhere',
    subtitle:
      'Chef-crafted meals, zero preservatives, ready in 5 minutes. Carried by 30,000+ families across 50+ countries.',
    ctaText: 'Shop the Range',
    ctaLink: '#shop',
    align: 'left',
  },
  {
    id: 'b2',
    image: img('cooking.jpg'),
    eyebrow: 'Freeze-dried · 97% nutrition retained',
    title: 'Real Food,',
    titleAccent: 'Real Fast',
    subtitle:
      'No fridge, no fuss. From hostels to Himalayan treks — authentic Indian dishes that travel with you.',
    ctaText: 'Why Garudas',
    ctaLink: '#why',
    align: 'left',
  },
  {
    id: 'b3',
    image: img('thali-spread.jpg'),
    eyebrow: 'Organic Farms',
    title: 'From Our Farms',
    titleAccent: 'To Your Bowl',
    subtitle:
      'Spices, grains and produce grown the honest way — the foundation of every Garudas recipe.',
    ctaText: 'Explore Organic',
    ctaLink: '#shop',
    align: 'left',
  },
  {
    id: 'b4',
    image: img('hero-spread.jpg'),
    eyebrow: 'Snacks & Sweets',
    title: 'Crisp, Golden,',
    titleAccent: 'Ready in 5',
    subtitle:
      'Tea-time classics and festive sweets, crafted by master chefs and made for the world.',
    ctaText: 'Shop Snacks',
    ctaLink: '#shop',
    align: 'left',
  },
]

// Static brand proof points shown across all slides.
export const HERO_STATS = [
  ['30k+', 'Happy Customers'],
  ['50+', 'Countries'],
  ['100+', 'Products'],
]
