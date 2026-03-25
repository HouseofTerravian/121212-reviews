'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  value: number
  onChange?: (rating: number) => void
  readonly?: boolean
  size?: number
}

export default function StarRating({ value, onChange, readonly = false, size = 20 }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0)

  const displayValue = hoverValue || value

  return (
    <div className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={`transition-colors duration-300 ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
          onClick={() => !readonly && onChange?.(star)}
          onMouseEnter={() => !readonly && setHoverValue(star)}
          onMouseLeave={() => !readonly && setHoverValue(0)}
        >
          <Star
            size={size}
            className={`transition-colors duration-300 ${
              star <= displayValue
                ? 'text-secondary fill-secondary'
                : 'text-muted fill-transparent'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
