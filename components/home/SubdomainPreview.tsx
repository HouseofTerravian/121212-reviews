import { Globe } from 'lucide-react'
import Card from '@/components/ui/Card'

const subdomains = [
  { domain: 'hair.atlanta', label: 'Hair & Beauty in Atlanta' },
  { domain: 'music.chicago', label: 'Music & Albums in Chicago' },
  { domain: 'food.nola', label: 'Food & Eats in New Orleans' },
  { domain: 'fashion.dc', label: 'Fashion & Style in Washington DC' },
  { domain: 'wellness.houston', label: 'Wellness in Houston' },
  { domain: 'events.miami', label: 'Events in Miami' },
  { domain: 'legal.detroit', label: 'Legal Resources in Detroit' },
  { domain: 'business.atlanta', label: 'Business Tools in Atlanta' },
]

export default function SubdomainPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-surface-1 to-background-dark">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
            Phase 2 Preview
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            Federated <span className="text-gradient">Review Hubs</span>
          </h2>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto text-lg">
            Soon, every category in every city will have its own dedicated subdomain.
            Reviewers will curate and own their local review ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {subdomains.map((sub) => (
            <Card
              key={sub.domain}
              hover={false}
              className="p-4 text-center border-purple-dim/40 bg-surface-2/50"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-purple-light" />
                <span className="text-cream font-mono text-sm font-medium">
                  {sub.domain}
                </span>
              </div>
              <span className="text-xs text-purple-light/70">.121212.reviews</span>
              <p className="text-dim text-xs mt-2">{sub.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
