'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  DollarSign,
  Globe,
  Award,
  Link as LinkIcon,
  User,
  CheckCircle,
  Send,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Input, { Textarea } from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import StarRating from '@/components/StarRating'

interface SubmitFormData {
  firstName: string
  lastName: string
  email: string
  handle: string
  primaryCategory: string
  reviewSite: string
  productToReview: string
  rating: number
  sampleReview: string
  subdomainInterest: string
}

const categoryOptions = [
  { value: 'hair', label: 'Hair & Beauty' },
  { value: 'fashion', label: 'Fashion & Style' },
  { value: 'jewelry', label: 'Jewelry & Accessories' },
  { value: 'wellness', label: 'Wellness & Skincare' },
  { value: 'food', label: 'Food & Eats' },
  { value: 'music', label: 'Music & Albums' },
  { value: 'events', label: 'Events & Experiences' },
  { value: 'legal', label: 'Legal Resources' },
  { value: 'art', label: 'Art & Culture' },
  { value: 'home', label: 'Home & Living' },
  { value: 'books', label: 'Books & Education' },
  { value: 'business', label: 'Business Tools' },
]

const siteOptions = [
  { value: '121212.market', label: '121212.market' },
  { value: '121212.music', label: '121212.music' },
  { value: '121212.events', label: '121212.events' },
  { value: '121212.community', label: '121212.community' },
  { value: '121212.law', label: '121212.law' },
  { value: '121212.culture', label: '121212.culture' },
  { value: 'multiple', label: 'Multiple equally' },
]

const perks = [
  {
    icon: DollarSign,
    title: 'Earn Affiliate Income',
    description: '30-day cookie. Monthly payouts. No cap on earnings.',
  },
  {
    icon: Globe,
    title: 'Own Your Subdomain',
    description: 'yourhandle.121212.reviews \u2014 your permanent home.',
  },
  {
    icon: Award,
    title: 'Build Your Reputation',
    description: 'Verified badge. Public stats. Real credibility.',
  },
  {
    icon: LinkIcon,
    title: 'Cross-Ecosystem Visibility',
    description: 'Your reviews appear across 121212.market, .music, .events, and more.',
  },
  {
    icon: User,
    title: 'Join my121212.space',
    description: 'Your reviewer profile ties into the full 121212 member dashboard.',
  },
]

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SubmitFormData>({
    defaultValues: {
      rating: 0,
    },
  })

  const onSubmit = async (data: SubmitFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Reviewer application:', data)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              Become a Reviewer
            </span>
            <h1 className="heading-primary text-cream mt-4 mb-6">
              Apply to <span className="text-gradient">121212.reviews</span>
            </h1>
            <p className="text-cream/70 text-xl leading-relaxed">
              Write honest reviews. Earn affiliate income. Build your reputation
              across the 121212 ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column: Perks */}
            <div className="lg:col-span-2">
              <h2 className="text-cream font-serif text-2xl font-semibold mb-8">
                Why Review on 121212?
              </h2>
              <div className="space-y-8">
                {perks.map((perk) => (
                  <div key={perk.title} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <perk.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-cream font-semibold mb-1">
                        {perk.title}
                      </h3>
                      <p className="text-cream/60 text-sm">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-1 border border-border rounded-xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-cream font-serif text-2xl font-semibold mb-3">
                      Application Submitted!
                    </h3>
                    <p className="text-cream/70 text-lg">
                      We review within 48 hours. You&apos;ll receive a
                      confirmation email once you&apos;re approved.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* First Name + Last Name */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        placeholder="Your first name"
                        error={errors.firstName?.message}
                        {...register('firstName', {
                          required: 'First name is required',
                        })}
                      />
                      <Input
                        label="Last Name"
                        placeholder="Your last name"
                        error={errors.lastName?.message}
                        {...register('lastName', {
                          required: 'Last name is required',
                        })}
                      />
                    </div>

                    {/* Email */}
                    <Input
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      error={errors.email?.message}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />

                    {/* Reviewer Handle */}
                    <Input
                      label="Reviewer Handle (optional)"
                      placeholder="e.g., yourname"
                      {...register('handle')}
                    />

                    {/* Primary Category */}
                    <Select
                      label="Primary Category"
                      placeholder="Select a category"
                      options={categoryOptions}
                      error={errors.primaryCategory?.message}
                      {...register('primaryCategory', {
                        required: 'Primary category is required',
                      })}
                    />

                    {/* Which 121212 site */}
                    <Select
                      label="Which 121212 site do you review most?"
                      placeholder="Select a site"
                      options={siteOptions}
                      error={errors.reviewSite?.message}
                      {...register('reviewSite', {
                        required: 'Please select a site',
                      })}
                    />

                    {/* Product/Service to review first */}
                    <Input
                      label="Product/Service to Review First"
                      placeholder="What would you like to review?"
                      error={errors.productToReview?.message}
                      {...register('productToReview', {
                        required: 'Please tell us what you want to review',
                      })}
                    />

                    {/* Star Rating */}
                    <div className="w-full">
                      <label className="block text-cream/70 mb-2 text-sm font-medium">
                        Rating
                      </label>
                      <Controller
                        name="rating"
                        control={control}
                        rules={{
                          validate: (value) =>
                            value > 0 || 'Please select a rating',
                        }}
                        render={({ field }) => (
                          <StarRating
                            value={field.value}
                            onChange={field.onChange}
                            size={28}
                          />
                        )}
                      />
                      {errors.rating?.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.rating.message}
                        </p>
                      )}
                    </div>

                    {/* Sample Review */}
                    <Textarea
                      label="Sample Review"
                      placeholder="Write a sample review (100-400 words)"
                      error={errors.sampleReview?.message}
                      {...register('sampleReview', {
                        required: 'A sample review is required',
                        minLength: {
                          value: 100,
                          message:
                            'Sample review must be at least 100 characters',
                        },
                      })}
                    />

                    {/* City Subdomain Interest */}
                    <Input
                      label="City Subdomain Interest (optional)"
                      placeholder="e.g., hair.atlanta"
                      {...register('subdomainInterest')}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    {/* Fine Print */}
                    <p className="text-dim text-xs text-center mt-4">
                      By submitting, you agree to our{' '}
                      <a
                        href="/terms"
                        className="text-secondary hover:text-secondary-light transition-colors duration-300 underline"
                      >
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a
                        href="/affiliates"
                        className="text-secondary hover:text-secondary-light transition-colors duration-300 underline"
                      >
                        Affiliate Program
                      </a>{' '}
                      terms.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
