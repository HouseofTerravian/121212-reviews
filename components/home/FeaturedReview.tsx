import Link from 'next/link'
import { Star, ExternalLink, Award } from 'lucide-react'
import { getFeaturedReview } from '@/data/reviews'
import Button from '@/components/ui/Button'

export default function FeaturedReview() {
  const review = getFeaturedReview()

  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-primary/20">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
            Most Popular
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            Featured <span className="text-gradient">Review</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="bg-surface-1 border border-border rounded-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-secondary" />
              <span className="text-secondary text-sm font-semibold">
                {review.ratingCount} reviews
              </span>
            </div>

            <div className="flex items-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(review.stars)
                      ? 'fill-secondary text-secondary'
                      : 'fill-transparent text-muted'
                  }`}
                />
              ))}
              <span className="ml-2 text-cream/70 text-sm">{review.stars.toFixed(1)}</span>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-cream mb-4 italic">
              &ldquo;{review.headline}&rdquo;
            </h3>

            <p className="text-cream/70 text-base leading-relaxed mb-6">
              {review.excerpt}
            </p>

            <Link
              href={`/reviewer/${review.reviewerHandle}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-secondary flex items-center justify-center">
                <span className="text-sm font-bold text-cream">
                  {review.reviewer.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-cream text-sm font-medium group-hover:text-secondary transition-colors duration-300">
                  {review.reviewer}
                </p>
                <p className="text-dim text-xs">@{review.reviewerHandle}</p>
              </div>
            </Link>
          </div>

          <div className="bg-surface-2 border border-border rounded-lg p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-surface-3 to-surface-1 flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl leading-none">{review.emoji}</span>
            </div>

            <h4 className="font-serif text-xl font-semibold text-cream mb-2">
              {review.product}
            </h4>

            <span className="inline-block text-xs font-medium text-cream/60 bg-surface-3 px-3 py-1 rounded-full mb-4">
              {review.site}
            </span>

            <div className="text-3xl font-serif font-bold text-secondary mb-6">
              {review.price}
            </div>

            <Button size="lg" className="w-full">
              {review.affiliateLabel}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
