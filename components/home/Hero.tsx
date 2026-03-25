import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(123,47,190,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-surface-3 border border-secondary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-secondary mr-2" />
            <span className="text-secondary text-sm font-medium">
              The 121212 Ecosystem Review Hub
            </span>
          </div>

          <h1 className="heading-primary text-cream mb-6">
            Real Reviews. Real People.{' '}
            <br />
            <span className="text-gradient">Real Income.</span>
          </h1>

          <p className="text-cream/80 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Honest reviews across 12 categories by verified community members.
            Write reviews, earn affiliate income, and help others make better decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reviews">
              <Button size="lg">
                Browse Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/submit">
              <Button variant="outline" size="lg">
                Become a Reviewer
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
