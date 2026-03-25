import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

const platformLinks = [
  { name: 'Browse Reviews', href: '/reviews' },
  { name: 'Become a Reviewer', href: '/submit' },
  { name: 'About', href: '/about' },
]

const ecosystemLinks = [
  { name: '121212.market', href: 'https://121212.market' },
  { name: '121212.music', href: 'https://121212.music' },
  { name: '121212.community', href: 'https://121212.community' },
  { name: '121212.events', href: 'https://121212.events' },
  { name: '121212.law', href: 'https://121212.law' },
  { name: '121212.ai', href: 'https://121212.ai' },
]

const legalLinks = [
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Refunds', href: '/refunds' },
  { name: 'Accessibility', href: '/accessibility' },
  { name: 'Affiliates', href: '/affiliates' },
  { name: 'Disclaimer', href: '/disclaimer' },
]

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-border">
      <div className="container-custom mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-secondary text-2xl">&#9733;</span>
              <div>
                <span className="text-cream font-serif text-lg font-semibold tracking-wide">121212</span>
                <span className="text-secondary font-serif text-lg italic">.reviews</span>
              </div>
            </Link>
            <p className="text-cream/70 mb-4 max-w-md font-serif italic text-lg">
              Real Reviews. Real People. Real Income.
            </p>
            <div className="text-cream/60 text-sm space-y-1 mb-6">
              <p>
                <a href="mailto:reviews@121212.reviews" className="hover:text-secondary transition-colors duration-200">
                  reviews@121212.reviews
                </a>
              </p>
              <p>
                <a href="mailto:support@121212.reviews" className="hover:text-secondary transition-colors duration-200">
                  support@121212.reviews
                </a>
              </p>
            </div>
            <NewsletterForm />
          </div>

          <div>
            <h3 className="text-secondary font-serif text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-serif text-lg font-semibold mb-4">Ecosystem</h3>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-serif text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-cream/40 text-xs space-y-1">
            <p>&copy; 2025-2026 Chude Muonelo. All Rights Reserved.</p>
            <p>Operated by MCM Enterprises, an unregistered DBA of SlateRiver LLC, a New Mexico LLC.</p>
            <p>All intellectual property is owned by Chude Muonelo and licensed to SlateRiver LLC.</p>
            <p>All commerce powered by 121212.ai</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
