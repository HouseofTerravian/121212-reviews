'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { getAllReviews } from '@/data/reviews'
import { categories } from '@/data/categories'
import ReviewCard from '@/components/ReviewCard'
import Button from '@/components/ui/Button'

function ReviewsContent() {
  const searchParams = useSearchParams()
  const [activeCat, setActiveCat] = useState('all')

  useEffect(() => {
    const catParam = searchParams.get('cat')
    if (catParam) setActiveCat(catParam)
  }, [searchParams])

  const allReviews = getAllReviews()

  const filteredReviews = activeCat === 'all'
    ? allReviews
    : allReviews.filter((r) => r.category === activeCat)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              All Reviews
            </span>
            <h1 className="heading-secondary text-cream mt-4 mb-4">
              Browse <span className="text-gradient">Reviews</span>
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Honest reviews from verified buyers across the 121212 ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[73px] z-40 bg-background-dark border-b border-border py-4 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCat('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCat === 'all'
                  ? 'bg-secondary text-primary-dark'
                  : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCat(cat.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCat === cat.slug
                    ? 'bg-secondary text-primary-dark'
                    : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <p className="text-dim mb-8">
            Showing {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cream/70 text-lg mb-6">
                No reviews in this category yet.
              </p>
              <Button variant="outline" onClick={() => setActiveCat('all')}>
                Show All Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 px-4 md:px-8 bg-surface-1 border-t border-border">
        <div className="container-custom mx-auto">
          <div className="flex items-start gap-3 max-w-3xl">
            <Info className="h-5 w-5 text-dim flex-shrink-0 mt-0.5" />
            <p className="text-dim text-sm leading-relaxed">
              Disclosure: Reviews on this platform may contain affiliate links. When you purchase
              through these links, the reviewer earns a commission at no additional cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Want to <span className="text-gradient">Write Reviews</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Join our reviewer community and earn affiliate income on every purchase you drive. Honest opinions, real commissions.
          </p>
          <Link href="/submit">
            <Button size="lg">
              Become a Reviewer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default function ReviewsPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-28 pb-12 px-4 md:px-8 bg-surface-1">
          <div className="container-custom mx-auto">
            <div className="max-w-3xl">
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
                All Reviews
              </span>
              <h1 className="heading-secondary text-cream mt-4 mb-4">
                Browse <span className="text-gradient">Reviews</span>
              </h1>
              <p className="text-cream/70 text-lg">Loading reviews...</p>
            </div>
          </div>
        </div>
      }
    >
      <ReviewsContent />
    </Suspense>
  )
}
