import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllReviews } from '@/data/reviews'
import ReviewCard from '@/components/ReviewCard'
import Button from '@/components/ui/Button'

export default function TopReviews() {
  const topReviews = [...getAllReviews()]
    .sort((a, b) => b.ratingCount - a.ratingCount)
    .slice(0, 6)

  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-surface-1">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
              Highest Rated
            </span>
            <h2 className="heading-secondary text-cream mt-4">
              Top <span className="text-gradient">Reviews</span>
            </h2>
            <p className="text-cream/70 mt-4 max-w-xl text-lg">
              The most-read reviews across the ecosystem.
            </p>
          </div>
          <Link href="/reviews" className="mt-6 md:mt-0">
            <Button variant="outline">
              View All Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
