interface ReviewerStatsProps {
  stats: { reviews: number; avgRating: string; clicks: string; followers: number }
}

export default function ReviewerStats({ stats }: ReviewerStatsProps) {
  const statItems = [
    { label: 'Reviews', value: String(stats.reviews) },
    { label: 'Avg Rating', value: stats.avgRating },
    { label: 'Clicks', value: stats.clicks },
    { label: 'Followers', value: String(stats.followers) },
  ]

  return (
    <section className="py-8 px-4 md:px-8 bg-surface-1 border-y border-border">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statItems.map((stat) => (
            <div key={stat.label}>
              <p className="text-secondary font-serif font-bold text-2xl">{stat.value}</p>
              <p className="text-dim text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
