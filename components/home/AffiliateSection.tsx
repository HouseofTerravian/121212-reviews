import { FileText, PenLine, DollarSign } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Apply',
    description: 'Submit your reviewer application. Tell us what you review and why your perspective matters. Approval takes 24-48 hours.',
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Write with Your Link',
    description: 'Publish honest reviews with your unique affiliate link attached. Every product page, every category, every ecosystem site.',
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'Earn',
    description: 'Earn commission on every purchase driven by your reviews. 30-day cookie window, monthly payouts, no earning cap.',
  },
]

export default function AffiliateSection() {
  return (
    <section className="section-padding bg-surface-1">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            Review. Link. <span className="text-gradient">Earn.</span>
          </h2>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto text-lg">
            Turn your honest opinions into income with the 121212 affiliate program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-surface-2 border border-border rounded-lg p-8 text-center hover:border-secondary/50 transition-all duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                Step {step.number}
              </div>

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-purple/20 flex items-center justify-center mx-auto mb-6 mt-2">
                <step.icon className="h-7 w-7 text-secondary" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                {step.title}
              </h3>

              <p className="text-cream/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
