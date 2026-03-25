import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'

const ecosystemPlatforms = [
  {
    name: '121212.market',
    domain: 'https://121212.market',
    description: 'Black-owned marketplace for products and services.',
  },
  {
    name: '121212.music',
    domain: 'https://121212.music',
    description: 'Independent Black music discovery and streaming.',
  },
  {
    name: '121212.events',
    domain: 'https://121212.events',
    description: 'Curated Black cultural events across major cities.',
  },
  {
    name: '121212.community',
    domain: 'https://121212.community',
    description: 'City hub subdomains for local Black cultural content.',
  },
  {
    name: '121212.law',
    domain: 'https://121212.law',
    description: 'Legal services and resources for the community.',
  },
  {
    name: '121212.culture',
    domain: 'https://121212.culture',
    description: 'Art, literature, film, and cultural expression.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            Our Story
          </span>
          <h1 className="heading-primary text-cream mt-4 mb-6 max-w-4xl mx-auto">
            About <span className="text-gradient">121212.reviews</span>
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            121212.reviews exists because the Black community deserves a review
            platform that actually knows what it&apos;s reviewing.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* The Problem */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                The <span className="text-gradient">Problem</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Mainstream review platforms were not built to serve Black products,
                services, and experiences. A five-star natural hair product gets
                buried under SEO-optimized content from brands that have never
                touched 4C hair. A Black-owned restaurant with lines around the
                block has fewer reviews than a chain franchise down the street. A
                cultural event that moved an entire community barely registers on
                platforms built for stadium concerts and corporate conferences.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                The result is a review ecosystem that consistently underrepresents
                Black businesses, misunderstands Black consumer needs, and
                distributes value to everyone except the community creating it.
                That is not a feature gap. That is a structural failure.
              </p>
            </div>

            {/* The Solution */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                The <span className="text-gradient">Solution</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                121212.reviews is a review platform built by and for the Black
                community. Every reviewer is a verified community member with
                lived experience in the categories they cover. We do not accept
                anonymous reviews, paid placements, or algorithmic manipulation.
                If a product, service, or experience earns a rating on this
                platform, it was earned honestly.
              </p>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Our reviewers are not unpaid contributors generating content for
                someone else&apos;s platform. They earn real affiliate income from
                every qualifying purchase made through their reviews. Honest work
                deserves honest pay.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                We cover 12 categories that matter to the community: Hair &amp;
                Beauty, Fashion, Jewelry, Wellness &amp; Skincare, Food, Music &amp;
                Albums, Events, Legal, Art &amp; Culture, Home, Books &amp;
                Education, and Business Tools. If it serves the community, it
                belongs here.
              </p>
            </div>

            {/* The Affiliate Model */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                The Affiliate <span className="text-gradient">Model</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Every approved reviewer receives a unique affiliate link embedded
                in their reviews. When a reader clicks through and makes a purchase
                within 30 days, the reviewer earns a commission. There is no cap on
                earnings. The better your reviews, the more you earn.
              </p>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Payouts are processed monthly with a $25 minimum threshold. All
                affiliate relationships are fully disclosed in compliance with FTC
                guidelines (16 CFR Part 255). Transparency is non-negotiable.
                Readers always know when a review contains affiliate links, and
                reviewers are required to provide honest assessments regardless of
                commission potential.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                This model ensures that value circulates within the community.
                Reviewers earn income, readers get trustworthy recommendations, and
                Black-owned businesses get the visibility they have earned.
              </p>
            </div>

            {/* The Federated Review Network */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                The Federated Review{' '}
                <span className="text-gradient">Network</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Phase 2 of 121212.reviews introduces federated subdomains that
                combine category expertise with geographic specificity. Think
                hair.atlanta.121212.reviews for natural hair product reviews from
                Atlanta-based reviewers. Or music.chicago.121212.reviews for album
                and concert reviews from Chicago&apos;s music scene. Or
                food.houston.121212.reviews for restaurant and meal kit reviews
                from Houston&apos;s food community.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                This federated model allows reviewers to own their niche, build
                local authority, and serve readers who want recommendations from
                people who actually live in their city and understand their
                specific needs. National platforms cannot replicate that level of
                cultural and geographic specificity.
              </p>
            </div>

            {/* Part of the 121212 Ecosystem */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                Part of the 121212{' '}
                <span className="text-gradient">Ecosystem</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-8">
                121212.reviews is one node in a growing network of platforms
                designed to serve the Black community across commerce, culture,
                and connection. Reviews published here are cross-linked across the
                entire ecosystem, giving both reviewers and the businesses they
                cover maximum visibility.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystemPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface-1 border border-border rounded-lg p-5 hover:border-secondary/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-cream font-semibold text-sm group-hover:text-secondary transition-colors duration-300">
                        {platform.name}
                      </h3>
                      <ExternalLink className="h-3.5 w-3.5 text-dim group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <p className="text-cream/50 text-xs leading-relaxed">
                      {platform.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Partnerships */}
            <div>
              <h2 className="heading-secondary text-cream mb-6">
                Contact &amp; <span className="text-gradient">Partnerships</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Whether you are a brand looking for honest reviews, a potential
                reviewer ready to join the platform, or a partner interested in
                integrating with the 121212 ecosystem, we want to hear from you.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                <strong className="text-cream">General &amp; Partnerships:</strong>{' '}
                <a
                  href="mailto:reviews@121212.reviews"
                  className="text-secondary hover:text-secondary-light transition-colors duration-300"
                >
                  reviews@121212.reviews
                </a>
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                <strong className="text-cream">Support:</strong>{' '}
                <a
                  href="mailto:support@121212.reviews"
                  className="text-secondary hover:text-secondary-light transition-colors duration-300"
                >
                  support@121212.reviews
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Ready to <span className="text-gradient">Write</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Join a growing network of verified reviewers earning real income for
            honest, community-first reviews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </>
  )
}
