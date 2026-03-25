'use client'

import { Star } from 'lucide-react'
import { getCategoryBySlug } from '@/data/categories'

interface ReviewerReview {
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
}

interface ReviewerFeedProps {
  reviews: ReviewerReview[]
  activeCategory: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-secondary text-secondary'
              : 'fill-none text-dim/40'
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewerFeed({ reviews, activeCategory }: ReviewerFeedProps) {
  const filtered =
    activeCategory === 'all'
      ? reviews
      : reviews.filter((r) => r.cat === activeCategory)

  const activeCat = activeCategory !== 'all' ? getCategoryBySlug(activeCategory) : null

  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <h2 className="text-cream font-serif text-xl font-semibold mb-6">
          {filtered.length} Verified {filtered.length === 1 ? 'Review' : 'Reviews'}
          {activeCat && (
            <span className="text-dim font-sans text-sm font-normal ml-2">
              in {activeCat.emoji} {activeCat.label}
            </span>
          )}
        </h2>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-cream/70 text-lg">No reviews in this category yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((review) => (
              <div
                key={review.id}
                className="bg-surface-1 border border-border rounded-lg p-6 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{review.emoji}</span>
                  <span className="text-cream font-semibold text-sm">{review.product}</span>
                  <span className="text-xs font-medium text-purple-light bg-purple/20 px-2 py-0.5 rounded-full ml-auto">
                    {review.site}
                  </span>
                </div>

                <StarRating rating={review.stars} />

                <p className="text-cream font-serif italic text-sm mt-3">
                  &ldquo;{review.headline}&rdquo;
                </p>

                <p className="text-cream/70 text-sm leading-relaxed mt-2 line-clamp-3">
                  {review.excerpt}
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-xs text-dim">{review.date}</span>
                  {review.badge && (
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                      {review.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
