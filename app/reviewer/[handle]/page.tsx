import type { Metadata } from 'next'
import Link from 'next/link'
import { Diamond, ArrowRight, Info } from 'lucide-react'
import { getAllReviewers, getReviewerByHandle } from '@/data/reviewers'
import ReviewerHero from '@/components/reviewer/ReviewerHero'
import ReviewerStats from '@/components/reviewer/ReviewerStats'
import ReviewerContent from '@/components/reviewer/ReviewerContent'
import Button from '@/components/ui/Button'

export function generateStaticParams() {
  return getAllReviewers().map((r) => ({ handle: r.handle }))
}

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const reviewer = getReviewerByHandle(params.handle)
  if (!reviewer) {
    return { title: 'Reviewer Not Found | 121212.reviews' }
  }
  return {
    title: `${reviewer.name} (@${reviewer.handle}) | 121212.reviews`,
    description: reviewer.bio,
  }
}

export default function ReviewerPage({ params }: { params: { handle: string } }) {
  const reviewer = getReviewerByHandle(params.handle)

  if (!reviewer) {
    return (
      <section className="pt-28 pb-16 px-4 md:px-8 bg-background-dark min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Diamond className="h-12 w-12 text-dim mx-auto mb-4" />
          <h1 className="heading-secondary text-cream mb-4">Reviewer Not Found</h1>
          <p className="text-cream/70 text-lg mb-8 max-w-md mx-auto">
            This reviewer profile does not exist or may have been removed.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/reviews">
              <Button variant="outline" size="sm">Browse Reviews</Button>
            </Link>
            <Link href="/submit">
              <Button size="sm">
                Become a Reviewer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <ReviewerHero reviewer={reviewer} />
      <ReviewerStats stats={reviewer.stats} />
      <ReviewerContent reviews={reviewer.reviews} categories={reviewer.categories.map(c => c.slug)} />

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

      {/* CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Want Your Own <span className="text-gradient">Reviewer Profile</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Join the 121212 reviewer community and start earning affiliate income on every purchase you drive.
          </p>
          <Link href="/submit">
            <Button size="lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
