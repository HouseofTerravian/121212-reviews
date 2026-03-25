import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. General Disclaimer">
        <p>
          The information provided on 121212.reviews (the &ldquo;Platform&rdquo;) is for
          general informational and reference purposes only. Nothing on this Platform
          constitutes professional advice of any kind, including but not limited to legal,
          financial, medical, nutritional, fitness, or investment advice. You should not rely
          on any information on this Platform as a substitute for professional consultation
          with a qualified expert in the relevant field.
        </p>
        <p>
          While we strive to ensure that the information presented on the Platform is accurate
          and up to date, we make no representations or warranties of any kind, express or
          implied, about the completeness, accuracy, reliability, suitability, or availability
          of the information, products, services, or related graphics contained on the Platform
          for any purpose. Any reliance you place on such information is strictly at your own
          risk.
        </p>
        <p>
          The Platform is operated by MCM Enterprises, a DBA of SlateRiver LLC, a New Mexico
          limited liability company. SlateRiver LLC disclaims all liability arising from your
          use of or reliance on any information, reviews, ratings, or recommendations published
          on the Platform.
        </p>
      </LegalSection>

      <LegalSection title="2. Affiliate Disclosure">
        <p>
          121212.reviews participates in affiliate marketing programs. Reviews published on
          the Platform may contain affiliate links, which means that when you click on a link
          and make a qualifying purchase, the reviewing author may earn a commission at no
          additional cost to you. These affiliate relationships do not influence the editorial
          content or ratings of reviews. Reviewers are required to provide honest assessments
          based on their genuine experience with the product or service being reviewed.
        </p>
        <p>
          All affiliate relationships are disclosed in compliance with the Federal Trade
          Commission (FTC) guidelines on endorsements and testimonials (16 CFR Part 255).
          Individual reviews containing affiliate links include a disclosure statement near
          the top of the review. If you have questions about affiliate disclosures on a
          specific review, please contact us at support@121212.reviews.
        </p>
      </LegalSection>

      <LegalSection title="3. Reviewer Opinions">
        <p>
          Reviews published on the Platform represent the individual opinions and experiences
          of their respective authors. They do not represent the views, opinions, or
          endorsements of MCM Enterprises, SlateRiver LLC, or any affiliated entity. Each
          reviewer writes independently, and the Platform does not dictate, edit for opinion,
          or otherwise control the substantive conclusions of published reviews.
        </p>
        <p>
          Individual experiences with products and services vary. A positive review does not
          guarantee that you will have the same experience, and a negative review does not
          mean the product or service is inherently defective. Reviews are subjective
          assessments based on the reviewer&apos;s specific circumstances, preferences, and
          expectations. We encourage readers to consider multiple reviews, consult additional
          sources, and use their own judgment before making purchasing decisions.
        </p>
        <p>
          The Platform does not verify every factual claim made in individual reviews. While
          we enforce content standards that require honesty and prohibit fake reviews, we
          cannot guarantee the accuracy of every statement in every review. If you believe a
          review contains materially false or misleading information, please report it to
          support@121212.reviews.
        </p>
      </LegalSection>

      <LegalSection title="4. Product Disclaimer">
        <p>
          121212.reviews is a review platform, not a seller, manufacturer, distributor, or
          fulfillment provider. We do not sell, produce, ship, or otherwise supply any of the
          products or services reviewed on the Platform. All product images, descriptions,
          prices, and availability information are sourced from third-party merchants and are
          subject to change without notice.
        </p>
        <p>
          We are not responsible for the quality, safety, legality, or any other aspect of
          any product or service reviewed on the Platform. Any transaction you enter into
          with a merchant through an affiliate link is between you and that merchant. We are
          not a party to any such transaction and have no liability for any disputes, losses,
          damages, or claims arising from your purchase or use of any product or service
          reviewed on the Platform.
        </p>
        <p>
          Product availability, pricing, shipping terms, and return policies are determined
          solely by the respective merchants. We do not guarantee that any product or service
          reviewed on the Platform will be available for purchase at the time you visit the
          merchant&apos;s website.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>
          If you have any questions about this Disclaimer, please contact us at:
        </p>
        <p>
          <strong className="text-cream">Email:</strong>{' '}
          <a
            href="mailto:support@121212.reviews"
            className="text-secondary hover:text-secondary-light transition-colors duration-300"
          >
            support@121212.reviews
          </a>
        </p>
        <p>
          <strong className="text-cream">Platform:</strong> 121212.reviews, operated by MCM
          Enterprises, a DBA of SlateRiver LLC, a New Mexico LLC.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
