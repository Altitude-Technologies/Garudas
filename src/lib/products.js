// ---------------------------------------------------------------------------
// Garudas catalogue — maps to the real product folders under /public/images.
// Three top-level categories map to the three header nav items.
// ---------------------------------------------------------------------------

export const NAV = [
  { id: 'instant-foods', label: 'Instant Foods' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'organic-farms', label: 'Organic Farms' },
]

// Resolve a file under /public/images/, encoding each path segment so spaces,
// dots, &, backticks and parentheses in the folder/file names all work.
const im = (p) =>
  `${import.meta.env.BASE_URL}images/` + p.split('/').map(encodeURIComponent).join('/')

const IF = '01. INSTANT FOODS'
const BV = '03. Beverages'
const OP = '04. Organic Products'

// Each category holds named groups (the mega-menu columns); every item carries
// its own product image.
export const CATALOGUE = {
  'instant-foods': {
    title: 'Instant Foods',
    columns: [
      {
        name: 'Powder Products',
        items: [
          { name: 'Idly Batter Mix', img: im(`${IF}/01. Powder Products/01. Idly Batter Mix/Front.png`) },
          { name: 'Instant Dosa Batter Mix', img: im(`${IF}/01. Powder Products/02. Instant Dosa Batter Mix/Front.png`) },
          { name: 'Instant Masal Vadai Mix', img: im(`${IF}/01. Powder Products/03. Instant Masal Vadai Mix/Front.png`) },
          { name: 'Rava Kitchadi Mix', img: im(`${IF}/01. Powder Products/06. Rava Kitchadi Mix/Front.png`) },
          { name: 'ABC Malt', img: im(`${IF}/01. Powder Products/07. ABC Malt/front.png`) },
          { name: 'Rice Pongal Mix', img: im(`${IF}/01. Powder Products/08. Rice Pongal Mix/Front.png`) },
        ],
      },
      {
        name: 'Culinary',
        items: [
          { name: 'Chicken Roast', img: im(`${IF}/02. Culinary/01. Chicken Roast/Front.png`) },
          { name: 'Fish Curry Mix', img: im(`${IF}/02. Culinary/03. Fish Curry Mix/Front.png`) },
          { name: 'Prawn, Crab & Squid Curry Paste', img: im(`${IF}/02. Culinary/04. Prawn Crab Squid Curry Paste/Front.png`) },
          { name: 'Chettinad Biriyani Mix', img: im(`${IF}/02. Culinary/07. Chettinad Biriyani Mix/Front.png`) },
          { name: 'Mughal Biriyani', img: im(`${IF}/02. Culinary/08. Mughal Biriyani/Front.png`) },
          { name: 'Spicy Tomato Curry', img: im(`${IF}/02. Culinary/11. Spicy Tomato Curry/Front.png`) },
        ],
      },
    ],
  },

  beverages: {
    title: 'Beverages',
    columns: [
      {
        name: 'Trooz',
        items: [
          { name: 'Mango', img: im(`${BV}/01. Trooz/Mango.png`) },
          { name: 'Guava', img: im(`${BV}/01. Trooz/Guava.png`) },
          { name: 'Apple', img: im(`${BV}/01. Trooz/Apple.png`) },
        ],
      },
      {
        name: 'CSD',
        items: [
          { name: 'Lemon Ginger', img: im(`${BV}/02. CSD/Lemon Ginger.png`) },
          { name: 'Nimbu Salt', img: im(`${BV}/02. CSD/Nimbu Salt.png`) },
          { name: 'Pineapple', img: im(`${BV}/02. CSD/Pineapple.png`) },
          { name: 'Nannari Sarbath', img: im(`${BV}/02. CSD/Nanari Sarbath.png`) },
          { name: 'Lychee', img: im(`${BV}/02. CSD/Lychee.png`) },
          { name: 'Green Apple', img: im(`${BV}/02. CSD/Green Apple.png`) },
          { name: 'Lemon', img: im(`${BV}/02. CSD/Lemon.png`) },
          { name: 'Orange', img: im(`${BV}/02. CSD/Orange.png`) },
          { name: 'Grape', img: im(`${BV}/02. CSD/Grape.png`) },
          { name: 'Cola', img: im(`${BV}/02. CSD/Cola.png`) },
          { name: 'Paneer Soda', img: im(`${BV}/02. CSD/Paneer Soda.png`) },
        ],
      },
    ],
  },

  'organic-farms': {
    title: 'Organic Farms',
    columns: [
      {
        name: 'Agriculture',
        items: [
          { name: 'Rice', img: im(`${OP}/0. AGRICULTURE/Rice.png`) },
          { name: 'Black Gram', img: im(`${OP}/0. AGRICULTURE/Blackgram.png`) },
          { name: 'Groundnut', img: im(`${OP}/0. AGRICULTURE/Groundnut.png`) },
          { name: 'Sesame', img: im(`${OP}/0. AGRICULTURE/Sesame.png`) },
        ],
      },
      {
        name: 'Fruits',
        items: [
          { name: 'Mango', img: im(`${OP}/01. Fruit/Mango.png`) },
          { name: 'Guava', img: im(`${OP}/01. Fruit/Guava.png`) },
          { name: 'Orange', img: im(`${OP}/01. Fruit/Orange.png`) },
          { name: 'Pomegranate', img: im(`${OP}/01. Fruit/POMEGRANATE.png`) },
          { name: 'Sapota', img: im(`${OP}/01. Fruit/Sapota.png`) },
          { name: 'Jack Fruit', img: im(`${OP}/01. Fruit/JACK FRUIT.png`) },
          { name: 'Amla', img: im(`${OP}/01. Fruit/AMLA.png`) },
          { name: 'Jamun', img: im(`${OP}/01. Fruit/Jamun.png`) },
          { name: 'Custard Apple', img: im(`${OP}/01. Fruit/CUSTARD APPLE.png`) },
        ],
      },
      {
        name: 'Vegetables',
        items: [
          { name: 'Tomato', img: im(`${OP}/02. Vegetables/Tomato.png`) },
          { name: 'Brinjal', img: im(`${OP}/02. Vegetables/Brinjal.png`) },
          { name: 'Chillis', img: im(`${OP}/02. Vegetables/CHILLIS.png`) },
          { name: 'Cluster Beans', img: im(`${OP}/02. Vegetables/Clusted Beans.png`) },
          { name: "Lady's Finger", img: im(`${OP}/02. Vegetables/LADY\`S FINGER.png`) },
        ],
      },
      {
        name: 'Greens & Herbs',
        items: [
          { name: 'Coriander', img: im(`${OP}/03.GREEN LEAF VEGETABLE/CORIANDER.png`) },
          { name: 'Celery', img: im(`${OP}/03.GREEN LEAF VEGETABLE/CELERY.png`) },
          { name: 'Curry Leaf', img: im(`${OP}/03.GREEN LEAF VEGETABLE/CURRY LEAF.png`) },
        ],
      },
      {
        name: 'Bulb Vegetables',
        items: [{ name: 'Small Onion', img: im(`${OP}/04. BULB VEGETABLES/SMALL ONION.png`) }],
      },
      {
        name: 'Medicinal Plants',
        items: [
          { name: 'Aloevera', img: im(`${OP}/05. MEDICINAL PLANT/ALOEVERA.png`) },
          { name: 'Basil', img: im(`${OP}/05. MEDICINAL PLANT/BASIL.png`) },
          { name: 'Chaste Tree (Nochi)', img: im(`${OP}/05. MEDICINAL PLANT/CHASTE TREE (NOCHI).png`) },
          { name: 'Indian Borage (Omavalli)', img: im(`${OP}/05. MEDICINAL PLANT/INDIAN BORAGE(OMAVALLI).png`) },
        ],
      },
      {
        name: 'Plantation',
        items: [{ name: 'Coconut', img: im(`${OP}/06. PLANTATION/Coconut.png`) }],
      },
      {
        name: 'Aromatic',
        items: [
          { name: 'Mint', img: im(`${OP}/07. AROMATIC/Mint.png`) },
          { name: 'Lemon Grass', img: im(`${OP}/07. AROMATIC/LEMON GRASS.png`) },
        ],
      },
      {
        name: 'Fisheries',
        items: [
          { name: 'Catla', img: im(`${OP}/08. FISHERIES/Catla.png`) },
          { name: 'Rohu', img: im(`${OP}/08. FISHERIES/Hohu.png`) },
          { name: 'Tilapia', img: im(`${OP}/08. FISHERIES/Tilapia.png`) },
        ],
      },
      {
        name: 'Livestock',
        items: [
          { name: 'Cattle', img: im(`${OP}/09. LIVESTOCK/Cattkle.jpg`) },
          { name: 'Goat', img: im(`${OP}/09. LIVESTOCK/Goat.jpg`) },
        ],
      },
      {
        name: 'Poultry',
        items: [
          { name: 'Chicken', img: im(`${OP}/10. Poultry/Chicken.jpg`) },
          { name: 'Duck', img: im(`${OP}/10. Poultry/Duck.webp`) },
        ],
      },
    ],
  },
}

// ---- Homepage curated lists -----------------------------------------------

export const SHOP_CATEGORIES = [
  { name: 'Instant Foods', count: 51, note: 'Ready in 5 minutes' },
  { name: 'Culinary Mixes & Pastes', count: 28, note: 'Chef-crafted bases' },
  { name: 'Beverages', count: 14, note: 'Trooz & CSD coolers' },
  { name: 'Organic Farm Products', count: 36, note: 'Straight from the soil' },
  { name: 'Fisheries', count: 8, note: 'Fresh from the waters' },
  { name: 'Livestock & Poultry', count: 7, note: 'Farm-raised & ethical' },
  { name: 'Cold Pressed Oils', count: 6, note: 'Pure & unrefined' },
]

export const BESTSELLERS = [
  { name: 'Instant Idly Batter Mix', cat: 'Instant Breakfast', rating: 4.7, mrp: 149, price: 129, save: '13% OFF' },
  { name: 'Instant Dosa Batter Mix', cat: 'Instant Breakfast', rating: 4.6, mrp: 149, price: 129, save: '13% OFF' },
  { name: 'Instant Masal Vadai Mix', cat: 'Instant Snack', rating: 4.5, mrp: 159, price: 139, save: '12% OFF' },
  { name: 'Rice Pongal Mix', cat: 'Instant Breakfast', rating: 4.6, mrp: 169, price: 149, save: '12% OFF' },
]

export const MOST_LOVED = [
  { name: 'Fish Curry Paste', cat: 'Culinary Base', rating: 4.7, price: 179 },
  { name: 'Chicken / Mutton Roast Mix', cat: 'Culinary Base', rating: 4.6, price: 189 },
  { name: 'Mughal Biryani', cat: 'Ready to Eat Meal', rating: 4.7, price: 189 },
  { name: 'Chettinadu Biryani Mix', cat: 'Ready to Eat Meal', rating: 4.5, price: 169 },
]

export const BEVERAGES = [
  { name: 'Mango', mrp: 60, price: 45, save: '25% OFF' },
  { name: 'Guava', mrp: 60, price: 45, save: '25% OFF' },
  { name: 'Apple', mrp: 70, price: 55, save: '21% OFF' },
  { name: 'Lemon Ginger', mrp: 50, price: 40, save: '20% OFF' },
  { name: 'Nimbu Salt & Sugar', mrp: 50, price: 40, save: '20% OFF' },
  { name: 'Pineapple', mrp: 70, price: 55, save: '21% OFF' },
  { name: 'Nannari Sarbath', mrp: 80, price: 65, save: '19% OFF' },
  { name: 'Lychee', mrp: 70, price: 55, save: '21% OFF' },
  { name: 'Green Apple Fizz', mrp: 60, price: 48, save: '20% OFF' },
  { name: 'Paneer Soda', mrp: 50, price: 40, save: '20% OFF' },
]

export const ORGANIC = [
  { name: 'Agriculture', cat: 'Organic Farm', price: 60 },
  { name: 'Fresh Fruits', cat: 'Organic Farm', price: 80 },
  { name: 'Fresh Vegetables', cat: 'Organic Farm', price: 40 },
  { name: 'Greens & Herbs', cat: 'Organic Farm', price: 30 },
  { name: 'Medicinal Plants', cat: 'Organic Farm', price: 90 },
  { name: 'Fisheries', cat: 'Organic Farm', price: 220 },
  { name: 'Livestock', cat: 'Organic Farm', price: 350 },
  { name: 'Poultry', cat: 'Organic Farm', price: 180 },
  { name: 'Oils', cat: 'Organic Farm', price: 250 },
]

export const HIGHLIGHTS = [
  { title: 'Zero Preservatives', sub: '100% Natural Ingredients' },
  { title: 'Chef Crafted', sub: 'Authentic Indian recipes' },
  { title: 'Ready in 5 Min', sub: 'Just add hot water' },
  { title: 'Travel Approved', sub: 'TSA-friendly · 12M shelf life' },
]

export const MARKETPLACES = ['Amazon', 'Blinkit', 'Flipkart', 'Zepto']
