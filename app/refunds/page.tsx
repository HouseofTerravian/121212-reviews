import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Platform Scope">
        <p>
          121212.reviews is a review and recommendation platform, not a merchant or retailer.
          We do not sell, manufacture, ship, or fulfill any products or services reviewed on
          the Platform. When you click an affiliate link in a review and make a purchase, that
          transaction is between you and the third-party merchant, not 121212.reviews or
          SlateRiver LLC.
        </p>
        <p>
          For refund requests related to products or services purchased through affiliate
          links, please contact the merchant directly. Each merchant has its own refund and
          return policies, which we do not control or administer. We are not responsible for
          any merchant&apos;s refund decisions or timelines.
        </p>
      </LegalSection>

      <LegalSection title="2. Reviewer Program">
        <p>
          The 121212.reviews reviewer program is free to join. There is no fee to apply,
          create a reviewer profile, publish reviews, or participate in the affiliate program.
          Because the reviewer program is provided at no cost, there are no refunds associated
          with reviewer registration or participation.
        </p>
      </LegalSection>

      <LegalSection title="3. Future Digital Products">
        <p>
          If 121212.reviews introduces paid digital products in the future (e.g., premium
          reviewer tools, analytics dashboards, or educational content), the following refund
          policy will apply: digital product purchases are eligible for a full refund within
          7 days of purchase, provided the product has not been substantially consumed or
          downloaded. Refund requests after the 7-day window will be evaluated on a
          case-by-case basis.
        </p>
        <p>
          To request a refund for a digital product, email support@121212.reviews with your
          order confirmation and reason for the refund request. Refunds will be processed to
          the original payment method within 5-10 business days.
        </p>
      </LegalSection>

      <LegalSection title="4. Subscriptions">
        <p>
          If 121212.reviews introduces paid subscription tiers in the future, subscribers may
          cancel at any time. New subscribers are eligible for a full refund within 14 days of
          their initial subscription purchase if they are not satisfied with the service. After
          the 14-day window, no refunds will be issued for the current billing period, but your
          subscription will remain active until the end of the paid period.
        </p>
        <p>
          Subscription renewals are not eligible for refunds. It is your responsibility to
          cancel your subscription before the renewal date if you do not wish to be charged
          for the next billing cycle. Cancellation instructions will be available in your
          account settings.
        </p>
      </LegalSection>

      <LegalSection title="5. Subdomain Licensing">
        <p>
          If 121212.reviews introduces paid subdomain licensing (e.g., hair.atlanta.121212.reviews),
          subdomain license fees are non-refundable once the subdomain has been provisioned and
          activated. If a subdomain cannot be provisioned due to a technical issue on our end,
          a full refund will be issued within 5-10 business days.
        </p>
        <p>
          Subdomain licensing is a recurring fee. Cancellation of a subdomain license will take
          effect at the end of the current billing period. The subdomain will remain active
          until that date, after which it will be released and may be claimed by another
          reviewer.
        </p>
      </LegalSection>

      <LegalSection title="6. Affiliate Commission Reversals">
        <p>
          Affiliate commissions are subject to clawback if the underlying purchase is refunded,
          returned, or charged back by the buyer. If a merchant issues a refund for a purchase
          that generated an affiliate commission, that commission will be reversed and deducted
          from the reviewer&apos;s pending balance. If the reversal exceeds the reviewer&apos;s
          pending balance, the negative balance will be carried forward and offset against
          future earnings.
        </p>
        <p>
          Commission reversals are processed during the standard 15-day hold period before
          payout. Commissions that have already been paid out may be subject to recovery if a
          refund or chargeback occurs after payout. In such cases, we will notify the reviewer
          and deduct the reversed amount from future earnings rather than requesting a direct
          repayment, except in cases of fraud or manipulation.
        </p>
        <p>
          We track commission reversals on a per-transaction basis and provide full transparency
          in the reviewer&apos;s earnings dashboard. Reviewers will be notified of any commission
          reversals via email.
        </p>
      </LegalSection>

      <LegalSection title="7. How to Request a Refund">
        <p>
          For any refund request related to a 121212.reviews product or service (not
          third-party merchant purchases), please email support@121212.reviews with the
          following information: your full name, the email address associated with your account,
          the product or service for which you are requesting a refund, your order confirmation
          or transaction ID, and the reason for your refund request.
        </p>
        <p>
          We will acknowledge your refund request within 2 business days and process eligible
          refunds within 5-10 business days. Refunds are issued to the original payment method
          unless otherwise agreed.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          If you have any questions about this Refund Policy, please contact us at:
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
