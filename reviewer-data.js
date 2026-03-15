/* ============================================
   121212.reviews — Reviewer Profile Data
   Add a new entry per approved reviewer.
   Key = their handle (used as subdomain).
   ============================================ */

const REVIEWER_PROFILES = {

  amaraj: {
    name:        'Amara J.',
    handle:      'amaraj',
    initial:     'A',
    bio:         '4C natural. Houston native. I review what I actually buy — hair, skin, fashion, music. If it\'s on my page it passed the test. No ads. No gifted products. Just the real thing.',
    location:    'Houston, TX',
    memberSince: 'January 2025',
    badge:       'Top Reviewer',
    hub:         'atlanta.121212.community',
    stats: {
      reviews:   47,
      avgRating: '4.9',
      clicks:    '3.2K',
      followers: 142,
    },
    categories: [
      { slug: 'hair',     label: 'Hair & Beauty',        emoji: '💆' },
      { slug: 'wellness', label: 'Wellness & Skincare',  emoji: '✨' },
      { slug: 'fashion',  label: 'Fashion & Style',      emoji: '👗' },
      { slug: 'jewelry',  label: 'Jewelry & Accessories',emoji: '💛' },
      { slug: 'food',     label: 'Food & Eats',          emoji: '🍽' },
      { slug: 'music',    label: 'Music & Albums',       emoji: '🎵' },
    ],
    reviews: [
      {
        id: 'r1', cat: 'hair', emoji: '💆',
        product:  'Natural Hair Regimen Kit',
        site:     '121212.market',
        stars:    5,
        headline: '"This kit completely changed my wash day routine."',
        excerpt:  'The scalp oil alone is worth the price — I saw new growth within 6 weeks. The moisture retention is unreal for 4C hair. I\'ve tried every major brand and this is the first kit that actually delivers on every promise. The sealing butter keeps my ends moisturized for days.',
        date:     'Feb 20, 2025',
        badge:    null,
      },
      {
        id: 'r2', cat: 'wellness', emoji: '✨',
        product:  'Shea Butter Luxury Set',
        site:     '121212.market',
        stars:    4,
        headline: '"Genuinely luxurious — but the pump dispenser needs work."',
        excerpt:  'The formula is incredible. Absorbs fast, no greasy residue, and the scent profile is subtle enough for daily wear. My skin has been noticeably more hydrated. Only reason it\'s not 5 stars: the pump clogs after about a week of use.',
        date:     'Feb 9, 2025',
        badge:    null,
      },
      {
        id: 'r3', cat: 'fashion', emoji: '👜',
        product:  'Handwoven Kente Tote Bag',
        site:     '121212.market',
        stars:    5,
        headline: '"The craftsmanship is exceptional. This is what quality looks like."',
        excerpt:  'Heavy-duty stitching, vibrant colors that haven\'t faded after months of constant use. The interior is lined and has two zip pockets. Ships fast. I\'ve gotten more compliments on this bag than anything else I own.',
        date:     'Mar 11, 2025',
        badge:    null,
      },
      {
        id: 'r4', cat: 'music', emoji: '🎵',
        product:  'Midnight Frequencies — Full Album',
        site:     '121212.music',
        stars:    5,
        headline: '"AfroBeat Collective hit different on this one. Instant classic."',
        excerpt:  'Every track flows into the next like it was scored for a film. "Lagos at 2AM" and "Motherland Rising" should be on every playlist. The production is clean, the vocals are raw and honest. Been on repeat for weeks.',
        date:     'Feb 22, 2025',
        badge:    null,
      },
      {
        id: 'r5', cat: 'jewelry', emoji: '💛',
        product:  'Gold Brass Statement Earrings',
        site:     '121212.market',
        stars:    4,
        headline: '"Striking design. Lightweight despite the size. Worth it."',
        excerpt:  'I wear these to everything — work, events, date night. The gold tone has held up beautifully after months of wear. Lightweight enough that I forget I have them on. Handmade quality at a price that makes sense.',
        date:     'Jan 23, 2025',
        badge:    null,
      },
      {
        id: 'r6', cat: 'hair', emoji: '🌿',
        product:  'Beeswax & Shea Edge Control Kit',
        site:     '121212.market',
        stars:    5,
        headline: '"The only edge control that actually holds all day in Houston humidity."',
        excerpt:  'I live in Houston. Humidity is not optional. I have tried every edge control on the market and nothing has come close to this. Holds from 7am to 10pm without flaking, without crunch, without the white cast. Non-negotiable part of my routine now.',
        date:     'Jan 12, 2025',
        badge:    'Editor\'s Pick',
      },
    ],
  },

  /* ── Template for adding new reviewers ──────────────────
  yourhandle: {
    name:        'Display Name',
    handle:      'yourhandle',
    initial:     'D',
    bio:         'Short bio...',
    location:    'City, ST',
    memberSince: 'Month Year',
    badge:       'Verified Reviewer',   // or 'Top Reviewer'
    hub:         null,                   // or 'city.121212.community'
    stats: { reviews: 0, avgRating: '—', clicks: '0', followers: 0 },
    categories: [],
    reviews: [],
  },
  ──────────────────────────────────────────────────────── */

}
