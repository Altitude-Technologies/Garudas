// ---------------------------------------------------------------------------
// Garudas catalogue — transcribed from "Product List - Sheet1.pdf".
// Three top-level categories map to the three header nav items.
// ---------------------------------------------------------------------------

export const NAV = [
  { id: 'instant-foods', label: 'Instant Foods' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'organic-farms', label: 'Organic Farms' },
]

// Each category holds named groups (the mega-menu columns) and a small set of
// "featured" items rendered as image cards on the right of the mega menu.
export const CATALOGUE = {
  'instant-foods': {
    title: 'Instant Foods',
    columns: [
      {
        name: 'Powder Product',
        items: [
          'Instant Idly Batter Mix',
          'Instant Dosa Batter Mix',
          'Instant Masal Vadai Mix',
          'Multi Grain Dosai Mix',
          'Rava Dosai Mix',
          'Instant Rava Kitchadi Mix',
          'ABC Malt',
          'Rice Pongal Mix',
          'Medhu Vada Mix',
          'Instant Kesari Mix',
          'Instant Payasam Mix',
          'Chicken 65 Masala',
          'Tandoori Masala',
          'Ragi Dosa Mix',
          'Jowar Dosa Mix',
          'Idly Dosa Chilli Powder',
          'Andra Dhall Powder',
          'Idly Garlic Chilli Powder',
          'Curry Leaves Rice Powder',
          'Adai Instant Mix',
          'Moringa Soup Mix',
          'Healthy Millet Pongal Mix',
          'Millet Health Mix',
        ],
      },
      {
        name: 'Culinary',
        items: [
          'Chicken / Mutton Roast',
          'Chicken / Mutton Curry Paste',
          'Fish Curry Paste',
          'Prawn / Crab & Squid Curry Paste',
          'Vathakulambu Mix',
          'Arcot Biryani',
          'Chettinadu Biryani Mix',
          'Mughal Biryani',
          'Yellow Base Gravy',
          'Multi Purpose Red Base Gravy',
          'Spicy Tomato Thokku',
          'Spicy Tomato Chutney',
          'Puliyotharai Mix',
          'Rasam Mix',
          'Sambar Paste',
          'Kathamba Samba Paste',
          'Mysore Mutton Masala',
          'Paneer Butter Masala',
          'Ginger Garlic Paste',
          'Ashoka Halwa',
          'Butter Chicken Masala',
        ],
      },
      {
        name: 'Snacks · Drinks · Oils',
        items: [
          'Millet Laddu / Power Bites',
          'Ginger Garlic Drink',
          'Sesame Oil',
          'Groundnut Oil',
          'Coconut Oil',
          'Deepam Oil',
          'Hair Oil',
        ],
      },
    ],
    featured: [
      { name: 'Instant Idly Batter Mix', tag: 'Bestseller' },
      { name: 'ABC Malt', tag: 'Kids Favourite' },
      { name: 'Instant Masal Vadai Mix', tag: 'New' },
      { name: 'Rava Dosai Mix', tag: 'Quick Fix' },
      { name: 'Vathakulambu Mix', tag: 'Culinary' },
      { name: 'Arcot Biryani', tag: 'Chef Crafted' },
      { name: 'Chettinadu Biryani Mix', tag: 'Spicy' },
      { name: 'Mughal Biryani', tag: 'Royal' },
    ],
  },

  beverages: {
    title: 'Beverages',
    columns: [
      {
        name: 'Trooz',
        items: ['Mango', 'Guava', 'Apple'],
      },
      {
        name: 'CSD',
        items: [
          'Lemon Ginger',
          'Nimbu Salt & Sugar',
          'Pineapple',
          'Nannari Sarbath',
          'Lychee',
          'Green Apple Fiz',
          'Lemon',
          'Orange',
          'Cola',
          'Paneer Soda',
          'Grape',
        ],
      },
    ],
    featured: [
      { name: 'Mango Trooz', tag: 'Trooz' },
      { name: 'Guava Trooz', tag: 'Trooz' },
      { name: 'Nannari Sarbath', tag: 'Cooler' },
      { name: 'Lemon Ginger', tag: 'Refresh' },
      { name: 'Green Apple Fiz', tag: 'Fizzy' },
      { name: 'Paneer Soda', tag: 'Classic' },
      { name: 'Grape', tag: 'CSD' },
      { name: 'Cola', tag: 'CSD' },
    ],
  },

  'organic-farms': {
    title: 'Organic Farms',
    columns: [
      {
        name: 'Agriculture',
        items: ['Rice (Cereals)', 'Black Gram (Pulses)', 'Groundnut (Oilseeds)', 'Sesame (Oilseeds)'],
      },
      {
        name: 'Horticulture',
        items: [
          'Mango',
          'Sapota',
          'Guava',
          'Orange',
          'Pomegranate',
          'Jack Fruit',
          'Amla',
          'Jamun',
          'Custard Apple',
          'Tomato',
          "Lady's Finger",
          'Brinjal',
          'Chillis',
          'Cluster Beans',
        ],
      },
      {
        name: 'Plantation · Aromatic · Medicinal',
        items: [
          'Coconut',
          'Mint',
          'Lemon Grass',
          'Curry Leaf',
          'Celery',
          'Coriander',
          'Small Onion',
          'Basil',
          'Indian Borage (Omavalli)',
          'Chaste Tree (Nochi)',
          'Aloevera',
        ],
      },
      {
        name: 'Fisheries · Livestock · Poultry',
        items: ['Catla', 'Rohu', 'Tilapia', 'Cattle', 'Goat', 'Chicken', 'Duck'],
      },
    ],
    featured: [
      { name: 'Organic Rice', tag: 'Cereals' },
      { name: 'Farm Mango', tag: 'Seasonal' },
      { name: 'Pomegranate', tag: 'Fresh' },
      { name: 'Coconut', tag: 'Plantation' },
      { name: 'Aloevera', tag: 'Medicinal' },
      { name: 'Lemon Grass', tag: 'Aromatic' },
      { name: 'Small Onion', tag: 'Bulb' },
      { name: 'Cluster Beans', tag: 'Vegetable' },
    ],
  },
}

// ---- Homepage curated lists (Landing page.png) -----------------------------

export const SHOP_CATEGORIES = [
  { name: 'All Products', count: 101, note: 'Explore the full Garudas range' },
  { name: 'Instant Foods', count: 51, note: 'Ready in 5 minutes' },
  { name: 'Beverages', count: 14, note: 'Trooz & CSD coolers' },
  { name: 'Organic Farms', count: 36, note: 'Straight from the soil' },
  { name: 'Combos', count: 12, note: 'Curated value packs' },
]

export const BESTSELLERS = [
  { name: 'Arcot Biryani', mrp: 199, price: 169, save: '15% OFF' },
  { name: 'Paneer Butter Masala', mrp: 199, price: 169, save: '15% OFF' },
  { name: 'Chettinadu Biryani Mix', mrp: 199, price: 169, save: '15% OFF' },
  { name: 'Instant Idly Batter Mix', mrp: 149, price: 129, save: '13% OFF' },
]

export const MOST_LOVED = [
  { name: 'Rice Pongal Mix', price: 159 },
  { name: 'Mughal Biryani', price: 189 },
  { name: 'Sambar Paste', price: 149 },
  { name: 'Mysore Mutton Masala', price: 199 },
]

export const PICKLES = [
  { name: 'Mango Thokku Pickle', mrp: 150, price: 130, save: '13% OFF' },
  { name: 'Garlic Pickle', mrp: 250, price: 199, save: '20% OFF' },
  { name: 'Green Chilli Pickle', mrp: 150, price: 130, save: '13% OFF' },
  { name: 'Lemon Pickle', mrp: 150, price: 120, save: '20% OFF' },
  { name: 'Mixed Veg Pickle', mrp: 160, price: 135, save: '16% OFF' },
  { name: 'Ginger Pickle', mrp: 170, price: 140, save: '18% OFF' },
]

export const PASTES = [
  { name: 'Spinach Puree', mrp: 135, price: 110, save: '18% OFF' },
  { name: 'Sweet & Sour Sauce', mrp: 175, price: 130, save: '26% OFF' },
  { name: 'Sweet Chilli Sauce', mrp: 170, price: 130, save: '24% OFF' },
  { name: 'Tomato Basil Pasta Sauce', mrp: 220, price: 175, save: '20% OFF' },
]

export const HIGHLIGHTS = [
  { title: 'Zero Preservatives', sub: '100% Natural Ingredients' },
  { title: 'Chef Crafted', sub: 'Authentic Indian recipes' },
  { title: 'Ready in 5 Min', sub: 'Just add hot water' },
  { title: 'Travel Approved', sub: 'TSA-friendly · 12M shelf life' },
]

export const MARKETPLACES = ['Amazon', 'Blinkit', 'Flipkart', 'Zepto']
