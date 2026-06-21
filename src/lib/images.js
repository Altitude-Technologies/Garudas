// ---------------------------------------------------------------------------
// Real product photography mapper.
// Images live in /public/images. Each product name is matched by keyword to
// the most fitting photo; anything unmatched falls back to a stable pool so
// the same name always shows the same image.
// ---------------------------------------------------------------------------

// BASE_URL is "/" in dev and "/<repo>/" on GitHub Pages — prefix every asset
// so images resolve correctly when hosted under a sub-path.
const I = (f) => `${import.meta.env.BASE_URL}images/${f}.jpg`

// Named, content-verified images (filenames are historical; comments = truth).
export const IMG = {
  heroCurry: I('table-food'), // chicken curry + naan
  curryBowls: I('curry'), // curry bowls + rice
  paneerKadai: I('biryani'), // paneer butter masala in copper kadai
  biryani: I('paneer'), // chicken biryani bowl
  biryani2: I('biryani-2'),
  biryani3: I('biryani-3'),
  chicken: I('butter-chicken'), // chicken with peppers
  gravyPan: I('spices'), // rich gravy in a pan
  thali: I('thali'), // indian thali with naan
  thaliPlate: I('juice'), // steel thali plate
  southIndian: I('south-indian'),
  rice: I('rice'),
  sambar: I('sambar'),
  soup: I('soup'),
  bowl: I('healthy-bowl'),
  idli: I('idli'), // idli + vada + sambar
  dosa: I('dosa'),
  spiceBowls: I('spice-powder'), // market spice bowls
  spiceFlatlay: I('thali-spread'), // spices flatlay
  oats: I('masala'), // overnight oats + jam jar
  shake: I('coconut'), // chocolate milkshake (malt)
  juice: I('juice-2'), // orange juice glass
  juices: I('smoothie'), // row of juice jars
  oil: I('sauce'), // oil bottle
  prawns: I('fish'), // prawns plate
  sweet: I('sweets-mithai'), // dessert slice
  iceCream: I('coconut-real'), // ice-cream cones
  samosa: I('hero-spread'), // samosas
  mango: I('mango'),
  fruits: I('fruits'),
  fruits2: I('fruit-2'),
  veggies: I('vegetables'), // salad bowl
  veggies2: I('veggies-2'),
  vegFresh: I('veg-fresh'),
  broccoli: I('greens'),
  leafy: I('spinach'), // kale / leafy greens
  kitchenRed: I('cooking'), // white kitchen, red pots
  cooking: I('kitchen'), // people cooking
  cookingHand: I('laddu'), // hands cooking
  chefServe: I('drink'), // chef serving a plate
}

// Stable fallback pool (premium food shots only).
const POOL = [
  IMG.curryBowls,
  IMG.biryani,
  IMG.paneerKadai,
  IMG.chicken,
  IMG.idli,
  IMG.dosa,
  IMG.thali,
  IMG.gravyPan,
]

function hash(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

// Ordered keyword rules — first hit wins.
const RULES = [
  [/biryani/, [IMG.biryani, IMG.biryani2, IMG.biryani3]],
  [/idl|idly|sambar|kathamba/, [IMG.idli, IMG.sambar]],
  [/dosa|dosai|adai|multi grain/, [IMG.dosa]],
  [/vada|vadai|medhu/, [IMG.idli]],
  [/rasam|moringa soup|soup/, [IMG.soup]],
  [/pongal|kitchadi|kichadi|upma/, [IMG.southIndian, IMG.rice]],
  [/butter chicken|chicken 65|chicken|mutton|tandoori|mysore/, [IMG.chicken]],
  [/fish|prawn|crab|squid|catla|rohu|tilapia/, [IMG.prawns]],
  [/paneer/, [IMG.paneerKadai]],
  [/halwa|kesari|payasam|laddu|power bites|ashoka|sweet/, [IMG.sweet, IMG.iceCream]],
  [/malt|abc/, [IMG.shake]],
  [/millet|health mix|ragi|jowar/, [IMG.oats]],
  [/oil|sesame|groundnut|deepam/, [IMG.oil]],
  [/chilli powder|dhall powder|garlic chilli|rice powder|masala|powder|ginger garlic/, [IMG.spiceBowls, IMG.spiceFlatlay]],
  [/gravy|base|curry paste|thokku|puliyotharai|paste/, [IMG.gravyPan, IMG.curryBowls]],
  [/chutney/, [IMG.idli]],
  [/roast|curry/, [IMG.curryBowls, IMG.chicken]],
  // beverages
  [/trooz|csd|cola|soda|sarbath|fiz|lychee|lemon ginger|nimbu|juice|drink/, [IMG.juices, IMG.juice]],
  // organic farm
  [/coconut/, [IMG.fruits]],
  [/rice|cereal|gram|pulse|grain/, [IMG.rice]],
  [/mango/, [IMG.mango]],
  [/guava|orange|pomegranate|jack fruit|amla|jamun|custard apple|apple|pineapple|grape|fruit|sapota/, [IMG.fruits, IMG.fruits2, IMG.mango]],
  [/leaf|coriander|celery|mint|lemon grass|basil|borage|nochi|aloevera|medicinal|aromatic/, [IMG.leafy]],
  [/tomato|finger|brinjal|chilli|beans|onion|vegetable|veg/, [IMG.veggies, IMG.broccoli, IMG.veggies2, IMG.vegFresh]],
  [/chicken|duck|poultry|cattle|goat|livestock/, [IMG.chicken]],
  [/pickle/, [IMG.gravyPan, IMG.spiceBowls]],
  [/sauce|puree|thai/, [IMG.gravyPan]],
  [/idly batter|dosa batter|batter/, [IMG.idli, IMG.dosa]],
]

// Resolve a product name to a real image path (deterministic & stable).
export function imageFor(name = '') {
  const key = name.toLowerCase()
  for (const [re, imgs] of RULES) {
    if (re.test(key)) return imgs[hash(name) % imgs.length]
  }
  return POOL[hash(name) % POOL.length]
}
