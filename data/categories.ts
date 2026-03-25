import { getAllReviews } from '@/data/reviews'

export interface Category {
  slug: string
  label: string
  emoji: string
}

export const categories: Category[] = [
  { slug: 'hair', label: 'Hair & Beauty', emoji: '\uD83D\uDC87' },
  { slug: 'fashion', label: 'Fashion & Style', emoji: '\uD83D\uDC57' },
  { slug: 'jewelry', label: 'Jewelry & Accessories', emoji: '\uD83D\uDC8E' },
  { slug: 'wellness', label: 'Wellness & Skincare', emoji: '\uD83E\uDDF4' },
  { slug: 'food', label: 'Food & Eats', emoji: '\uD83C\uDF7D\uFE0F' },
  { slug: 'music', label: 'Music & Albums', emoji: '\uD83C\uDFB5' },
  { slug: 'events', label: 'Events & Experiences', emoji: '\uD83C\uDF9F\uFE0F' },
  { slug: 'legal', label: 'Legal Resources', emoji: '\u2696\uFE0F' },
  { slug: 'art', label: 'Art & Culture', emoji: '\uD83C\uDFA8' },
  { slug: 'home', label: 'Home & Living', emoji: '\uD83C\uDFE0' },
  { slug: 'books', label: 'Books & Education', emoji: '\uD83D\uDCDA' },
  { slug: 'business', label: 'Business Tools', emoji: '\uD83D\uDCBC' },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getReviewCountByCategory(slug: string): number {
  return getAllReviews().filter((r) => r.category === slug).length
}
