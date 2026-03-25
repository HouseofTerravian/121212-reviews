'use client'

import { useState } from 'react'
import ReviewerSpecialties from '@/components/reviewer/ReviewerSpecialties'
import ReviewerFeed from '@/components/reviewer/ReviewerFeed'

interface ReviewerReview {
  id: string
  cat: string
  emoji: string
  product: string
  site: string
  stars: number
  headline: string
  excerpt: string
  date: string
  badge: string | null
}

interface ReviewerContentProps {
  reviews: ReviewerReview[]
  categories: string[]
}

export default function ReviewerContent({ reviews, categories }: ReviewerContentProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <>
      <ReviewerSpecialties
        categories={categories}
        activeCategory={activeCategory}
        onFilter={setActiveCategory}
      />
      <ReviewerFeed reviews={reviews} activeCategory={activeCategory} />
    </>
  )
}
