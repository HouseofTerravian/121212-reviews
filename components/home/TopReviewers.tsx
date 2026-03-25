import Link from 'next/link'
import { Star, BadgeCheck } from 'lucide-react'
import { getTopReviewers } from '@/data/reviewers'
import Card from '@/components/ui/Card'

export default function TopReviewers() {
  const topReviewers = getTopReviewers(5)

  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
            Community
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            Top <span className="text-gradient">Reviewers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topReviewers.map((reviewer) => (
            <Link
              key={reviewer.handle}
              href={`/reviewer/${reviewer.handle}`}
              className="block group"
            >
              <Card className="p-6 text-center group-hover:border-secondary/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cream">
                    {reviewer.initial}
                  </span>
                </div>

                <h3 className="font-semibold text-cream text-sm mb-0.5">
                  {reviewer.name}
                </h3>
                <p className="text-dim text-xs mb-3">@{reviewer.handle}</p>

                <div className="flex items-center justify-center gap-1 mb-2">
                  <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-xs text-secondary font-medium">{reviewer.badge}</span>
                </div>

                <div className="flex items-center justify-center gap-3 text-xs text-cream/60">
                  <span>{reviewer.stats.reviews} reviews</span>
                  <span className="flex items-center gap-0.5">
                    <Star className="h-3 w-3 fill-secondary text-secondary" />
                    {reviewer.stats.avgRating}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
