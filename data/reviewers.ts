export interface ReviewerProfile {
  name: string
  handle: string
  initial: string
  bio: string
  location: string
  memberSince: string
  badge: string
  hub: string | null
  stats: { reviews: number; avgRating: string; clicks: string; followers: number }
  categories: Array<{ slug: string; label: string; emoji: string }>
  reviews: Array<{
    id: string
    cat: string
    emoji: string
    product: string
    site: string
    stars: number
    headline: string
    excerpt: string
    date: string
    badge: string | null
  }>
}

export const reviewers: ReviewerProfile[] = [
  {
    name: 'Amara J.',
    handle: 'amaraj',
    initial: 'A',
    bio: 'Cultural curator and lifestyle writer. I only review products I have actually used, worn, or consumed. If it is not worth your money, I will tell you.',
    location: 'Atlanta, GA',
    memberSince: 'January 2025',
    badge: 'Verified Reviewer',
    hub: 'hair.atlanta.121212.reviews',
    stats: { reviews: 6, avgRating: '4.97', clicks: '2.4K', followers: 312 },
    categories: [
      { slug: 'hair', label: 'Hair & Beauty', emoji: '\uD83D\uDC87' },
      { slug: 'fashion', label: 'Fashion & Style', emoji: '\uD83D\uDC57' },
      { slug: 'wellness', label: 'Wellness & Skincare', emoji: '\uD83E\uDDF4' },
      { slug: 'music', label: 'Music & Albums', emoji: '\uD83C\uDFB5' },
      { slug: 'home', label: 'Home & Living', emoji: '\uD83C\uDFE0' },
    ],
    reviews: [
      {
        id: 'rev-001',
        cat: 'hair',
        emoji: '\uD83D\uDC87',
        product: 'Beeswax & Shea Edge Control Kit',
        site: '121212.market',
        stars: 5,
        headline: 'Finally, edges that last all day without flaking',
        excerpt: 'This edge control kit is a game-changer. The beeswax formula holds without the crunch.',
        date: 'March 2026',
        badge: 'Verified Buyer',
      },
      {
        id: 'rev-002',
        cat: 'hair',
        emoji: '\uD83D\uDC87',
        product: 'Natural Hair Regimen Kit',
        site: '121212.market',
        stars: 5,
        headline: 'My wash day went from 4 hours to 90 minutes',
        excerpt: 'Everything you need in one box. The deep conditioner alone is worth the price.',
        date: 'February 2026',
        badge: 'Verified Buyer',
      },
      {
        id: 'rev-003',
        cat: 'fashion',
        emoji: '\uD83D\uDC57',
        product: 'Handwoven Kente Tote Bag',
        site: '121212.market',
        stars: 5,
        headline: 'Stunning craftsmanship meets everyday functionality',
        excerpt: 'The quality of the weave is incredible. This bag gets compliments everywhere.',
        date: 'February 2026',
        badge: 'Verified Buyer',
      },
      {
        id: 'rev-006',
        cat: 'wellness',
        emoji: '\uD83E\uDDF4',
        product: 'Shea Butter Luxury Set',
        site: '121212.market',
        stars: 5,
        headline: 'My skin has never felt this nourished',
        excerpt: 'The whipped shea butter absorbs beautifully without feeling greasy.',
        date: 'January 2026',
        badge: 'Verified Buyer',
      },
      {
        id: 'rev-009',
        cat: 'music',
        emoji: '\uD83C\uDFB5',
        product: 'Midnight Frequencies',
        site: '121212.music',
        stars: 5,
        headline: 'Album of the year, hands down',
        excerpt: 'From the first track to the last, this takes you on a journey.',
        date: 'January 2026',
        badge: 'Verified Listener',
      },
      {
        id: 'rev-016',
        cat: 'home',
        emoji: '\uD83C\uDFE0',
        product: 'Sandalwood & Frankincense Candles',
        site: '121212.market',
        stars: 5,
        headline: 'Turns any space into a sanctuary',
        excerpt: 'The scent throw on these candles is perfect. Not overpowering but fills the room.',
        date: 'December 2025',
        badge: 'Verified Buyer',
      },
    ],
  },
  {
    name: 'Marcus T.',
    handle: 'marcust',
    initial: 'M',
    bio: 'Entrepreneur and city culture enthusiast. I review events, food spots, and business tools that help Black professionals level up.',
    location: 'Chicago, IL',
    memberSince: 'February 2025',
    badge: 'City Curator',
    hub: 'food.chicago.121212.reviews',
    stats: { reviews: 3, avgRating: '4.90', clicks: '1.8K', followers: 187 },
    categories: [
      { slug: 'food', label: 'Food & Eats', emoji: '\uD83C\uDF7D\uFE0F' },
      { slug: 'events', label: 'Events & Experiences', emoji: '\uD83C\uDF9F\uFE0F' },
      { slug: 'business', label: 'Business Tools', emoji: '\uD83D\uDCBC' },
    ],
    reviews: [
      {
        id: 'rev-008',
        cat: 'food',
        emoji: '\uD83C\uDF7D\uFE0F',
        product: 'Soul Food Guide \u2014 Atlanta',
        site: '121212.events',
        stars: 5,
        headline: 'The only food guide Atlanta needed',
        excerpt: 'Every restaurant in this guide is a hidden gem.',
        date: 'March 2026',
        badge: 'City Curator',
      },
      {
        id: 'rev-011',
        cat: 'events',
        emoji: '\uD83C\uDF9F\uFE0F',
        product: 'Diaspora Gala VIP',
        site: '121212.events',
        stars: 5,
        headline: 'Black excellence on full display',
        excerpt: 'From the red carpet to the keynote speakers, the Gala delivered.',
        date: 'February 2026',
        badge: 'Event Attendee',
      },
      {
        id: 'rev-015',
        cat: 'business',
        emoji: '\uD83D\uDCBC',
        product: 'Black Business Funding Database',
        site: '121212.law',
        stars: 4.7,
        headline: 'The resource Black entrepreneurs actually need',
        excerpt: 'Over 200 grants, loans, and funding sources curated specifically for Black-owned businesses.',
        date: 'January 2026',
        badge: 'Business Owner',
      },
    ],
  },
  {
    name: 'Keisha R.',
    handle: 'keishar',
    initial: 'K',
    bio: 'Accessories lover and aspiring attorney. I review the things that make life beautiful and the tools that make business possible.',
    location: 'Houston, TX',
    memberSince: 'March 2025',
    badge: 'Verified Reviewer',
    hub: null,
    stats: { reviews: 3, avgRating: '4.70', clicks: '1.2K', followers: 145 },
    categories: [
      { slug: 'jewelry', label: 'Jewelry & Accessories', emoji: '\uD83D\uDC8E' },
      { slug: 'music', label: 'Music & Albums', emoji: '\uD83C\uDFB5' },
      { slug: 'legal', label: 'Legal Resources', emoji: '\u2696\uFE0F' },
    ],
    reviews: [
      {
        id: 'rev-005',
        cat: 'jewelry',
        emoji: '\uD83D\uDC8E',
        product: 'Gold Brass Statement Earrings',
        site: '121212.market',
        stars: 4.4,
        headline: 'Bold, lightweight, and conversation-starting',
        excerpt: 'These earrings are the perfect statement piece. Surprisingly lightweight.',
        date: 'March 2026',
        badge: 'Verified Buyer',
      },
      {
        id: 'rev-010',
        cat: 'music',
        emoji: '\uD83C\uDFB5',
        product: 'Roots & Routes Single',
        site: '121212.music',
        stars: 4.9,
        headline: 'A vibe you did not know you needed',
        excerpt: 'This single blends Afrobeats with neo-soul in a way that feels completely fresh.',
        date: 'February 2026',
        badge: 'Verified Listener',
      },
      {
        id: 'rev-012',
        cat: 'legal',
        emoji: '\u2696\uFE0F',
        product: 'LLC Formation Guide',
        site: '121212.law',
        stars: 4.8,
        headline: 'Saved me thousands in attorney fees',
        excerpt: 'Step-by-step, state-by-state guidance that actually makes sense.',
        date: 'January 2026',
        badge: 'Verified Buyer',
      },
    ],
  },
  {
    name: 'Temilola O.',
    handle: 'temilola',
    initial: 'T',
    bio: 'Fashion designer and art collector. I believe in investing in pieces that tell a story and support the culture.',
    location: 'Washington, DC',
    memberSince: 'April 2025',
    badge: 'Top Reviewer',
    hub: null,
    stats: { reviews: 2, avgRating: '4.90', clicks: '890', followers: 98 },
    categories: [
      { slug: 'fashion', label: 'Fashion & Style', emoji: '\uD83D\uDC57' },
      { slug: 'art', label: 'Art & Culture', emoji: '\uD83C\uDFA8' },
    ],
    reviews: [
      {
        id: 'rev-004',
        cat: 'fashion',
        emoji: '\uD83D\uDC57',
        product: 'Ankara Wrap Dress',
        site: '121212.market',
        stars: 4.8,
        headline: 'One dress, infinite ways to wear it',
        excerpt: 'The versatility of this wrap dress is unmatched.',
        date: 'March 2026',
        badge: 'Top Reviewer',
      },
      {
        id: 'rev-013',
        cat: 'art',
        emoji: '\uD83C\uDFA8',
        product: 'Ancestral Threads Print Series',
        site: '121212.market',
        stars: 5,
        headline: 'Art that honors where we come from',
        excerpt: 'Each print tells a story through textures, colors, and symbolism.',
        date: 'February 2026',
        badge: 'Art Collector',
      },
    ],
  },
  {
    name: 'Roots & Rhythm',
    handle: 'rootsandrhythm',
    initial: 'R',
    bio: 'Wellness advocate and bookworm. I review products and resources that feed the mind, body, and spirit.',
    location: 'New Orleans, LA',
    memberSince: 'May 2025',
    badge: 'Verified Reviewer',
    hub: null,
    stats: { reviews: 2, avgRating: '4.70', clicks: '640', followers: 76 },
    categories: [
      { slug: 'wellness', label: 'Wellness & Skincare', emoji: '\uD83E\uDDF4' },
      { slug: 'books', label: 'Books & Education', emoji: '\uD83D\uDCDA' },
    ],
    reviews: [
      {
        id: 'rev-007',
        cat: 'wellness',
        emoji: '\uD83E\uDDF4',
        product: 'Herbal Tea Collection',
        site: '121212.market',
        stars: 4.5,
        headline: 'A ritual worth building into your morning',
        excerpt: 'Six blends, all incredible. The hibiscus ginger is my daily go-to.',
        date: 'March 2026',
        badge: null,
      },
      {
        id: 'rev-014',
        cat: 'books',
        emoji: '\uD83D\uDCDA',
        product: 'Black History Digest Vol. 3',
        site: '121212.market',
        stars: 4.9,
        headline: 'History they never taught us, finally compiled',
        excerpt: 'Volume 3 goes deeper than the first two. Well-researched and beautifully formatted.',
        date: 'February 2026',
        badge: null,
      },
    ],
  },
]

export function getReviewerByHandle(handle: string): ReviewerProfile | undefined {
  return reviewers.find((r) => r.handle === handle)
}

export function getAllReviewers(): ReviewerProfile[] {
  return reviewers
}

export function getTopReviewers(count: number = 5): ReviewerProfile[] {
  return [...reviewers]
    .sort((a, b) => b.stats.reviews - a.stats.reviews || b.stats.followers - a.stats.followers)
    .slice(0, count)
}
