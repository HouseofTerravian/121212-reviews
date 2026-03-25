import { MapPin, Calendar, Globe, Star } from 'lucide-react'
import type { ReviewerProfile } from '@/data/reviewers'
import Button from '@/components/ui/Button'

interface ReviewerHeroProps {
  reviewer: ReviewerProfile
}

export default function ReviewerHero({ reviewer }: ReviewerHeroProps) {
  const initial = reviewer.initial || reviewer.name.charAt(0).toUpperCase()

  return (
    <section className="pt-28 pb-16 px-4 md:px-8 bg-gradient-to-br from-purple-dim/30 via-background-dark to-background-dark">
      <div className="container-custom mx-auto flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple to-secondary flex items-center justify-center">
            <span className="text-4xl font-serif font-bold text-white">{initial}</span>
          </div>
          {reviewer.badge && (
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-background-dark">
              <Star className="h-4 w-4 fill-primary-dark text-primary-dark" />
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="heading-secondary text-cream mb-2">{reviewer.name}</h1>

        {/* Handle */}
        <p className="font-mono text-secondary text-sm mb-4">
          @{reviewer.handle}.121212.reviews
        </p>

        {/* Bio */}
        <p className="text-cream/70 text-base leading-relaxed max-w-2xl mb-6">
          {reviewer.bio}
        </p>

        {/* Location + Member Since */}
        <div className="flex items-center gap-4 text-dim text-sm mb-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {reviewer.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            Member since {reviewer.memberSince}
          </span>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
            {reviewer.badge}
          </span>
        </div>

        {/* Hub Link */}
        {reviewer.hub && (
          <a
            href={reviewer.hub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-purple-light hover:text-secondary transition-colors duration-300 mb-6"
          >
            <Globe className="h-4 w-4" />
            <span>{reviewer.hub}</span>
          </a>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button size="sm" variant="primary">
            Follow
          </Button>
          <Button size="sm" variant="outline">
            Share
          </Button>
        </div>
      </div>
    </section>
  )
}
