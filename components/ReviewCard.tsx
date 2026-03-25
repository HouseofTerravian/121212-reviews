import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'
import type { Review } from '@/data/reviews'
import Card, { CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface ReviewCardProps {
  review: Review
}

function StarRow({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 transition-colors duration-300 ${
            i < Math.round(stars)
              ? 'fill-secondary text-secondary'
              : 'fill-transparent text-muted'
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs text-dim">{stars.toFixed(1)}</span>
    </div>
  )
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex flex-col h-full group-hover:border-secondary/60 transition-all duration-300">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-surface-3 to-surface-2 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl leading-none">{review.emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-cream text-base mb-1 line-clamp-1">
              {review.product}
            </h3>
            <span className="text-xs font-medium text-cream/60 bg-surface-3 px-2 py-0.5 rounded">
              {review.site}
            </span>
          </div>
        </div>

        <StarRow stars={review.stars} />

        <p className="text-cream font-serif italic text-sm mt-3 mb-2 line-clamp-1">
          &ldquo;{review.headline}&rdquo;
        </p>

        <p className="text-cream/70 text-sm leading-relaxed flex-1 line-clamp-3">
          {review.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <Link
            href={`/reviewer/${review.reviewerHandle}`}
            className="flex items-center gap-2 group/reviewer"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple to-secondary flex items-center justify-center">
              <span className="text-xs font-bold text-cream">
                {review.reviewer.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-dim group-hover/reviewer:text-secondary transition-colors duration-300">
              {review.reviewer}
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-secondary text-sm font-semibold">{review.price}</span>
            <Button size="sm" className="text-xs">
              {review.affiliateLabel}
              <ExternalLink className="ml-1.5 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
