import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import FeaturedReview from '@/components/home/FeaturedReview'
import CategoryGrid from '@/components/home/CategoryGrid'
import TopReviews from '@/components/home/TopReviews'
import AffiliateSection from '@/components/home/AffiliateSection'
import TopReviewers from '@/components/home/TopReviewers'
import SubdomainPreview from '@/components/home/SubdomainPreview'
import NewsletterForm from '@/components/NewsletterForm'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <main>
      <Hero />

      <Stats />

      <FeaturedReview />

      <CategoryGrid />

      <TopReviews />

      <AffiliateSection />

      <TopReviewers />

      <SubdomainPreview />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-surface-1 via-purple-dim/20 to-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-primary text-cream mb-4">
            Your Review Is Someone&apos;s{' '}
            <span className="text-gradient">Decision.</span>
          </h2>
          <p className="text-cream/70 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Every honest review helps someone make a better choice.
            Start reviewing today and earn while you share what you know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit">
              <Button size="lg">
                Become a Reviewer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/reviews">
              <Button variant="outline" size="lg">
                Browse Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Stay in the <span className="text-gradient">Loop</span>
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
            Get the best reviews delivered to your inbox every week. Never miss
            what matters.
          </p>
          <NewsletterForm />
          <p className="text-dim text-xs mt-4">
            Join 10,000+ subscribers across the 121212 network.
          </p>
        </div>
      </section>
    </main>
  )
}
