'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 4800, suffix: '+', label: 'Reviews' },
  { value: 340, suffix: '', label: 'Reviewers' },
  { value: 12, suffix: '', label: 'Categories' },
  { value: 6, suffix: '', label: 'Ecosystem Sites' },
]

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, isVisible, duration])

  return count
}

function formatNumber(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString()
  }
  return n.toString()
}

function StatCounter({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) {
  const count = useCountUp(stat.value, isVisible)

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <div className="text-cream/60 uppercase text-sm tracking-widest">
        {stat.label}
      </div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-surface-1">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
