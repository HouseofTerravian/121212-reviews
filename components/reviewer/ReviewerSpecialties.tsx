'use client'

import { getCategoryBySlug } from '@/data/categories'

interface ReviewerSpecialtiesProps {
  categories: string[]
  activeCategory: string
  onFilter: (slug: string) => void
}

export default function ReviewerSpecialties({
  categories,
  activeCategory,
  onFilter,
}: ReviewerSpecialtiesProps) {
  return (
    <section className="py-6 px-4 md:px-8">
      <div className="container-custom mx-auto">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilter('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-secondary text-primary-dark'
                : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
            }`}
          >
            All
          </button>
          {categories.map((slug) => {
            const cat = getCategoryBySlug(slug)
            if (!cat) return null
            return (
              <button
                key={slug}
                onClick={() => onFilter(slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === slug
                    ? 'bg-secondary text-primary-dark'
                    : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
