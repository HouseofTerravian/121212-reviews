import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function AffiliatesPage() {
  return (
    <LegalLayout
      title="Affiliate Program Terms"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Program Overview">
        <p>
          The 121212.reviews Affiliate Program allows approved reviewers to earn commissions
          on qualifying purchases made through affiliate links embedded in their published
          reviews. The program is designed to reward honest, substantive reviews that help
          readers make informed purchasing decisions while ensuring that value circulates
          within the Black community.
        </p>
        <p>
          The affiliate program is administered by MCM Enterprises, a DBA of SlateRiver LLC,
          a New Mexico limited liability company. By participating in the affiliate program,
          you agree to be bound by these Affiliate Program Terms in addition to the
          Platform&apos;s Terms of Service and Privacy Policy. In the event of a conflict
          between these Affiliate Program Terms and the Terms of Service, these Affiliate
          Program Terms shall control with respect to affiliate-related matters.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>
          Participation in the affiliate program is limited to approved reviewers only. To
          be eligible, you must: (a) submit a reviewer application and be approved by our
          editorial team; (b) be at least 18 years of age; (c) provide accurate personal
          and tax information as required; (d) maintain at least one published review on
          the Platform in good standing; and (e) comply with all applicable laws and
          regulations, including FTC disclosure requirements.
        </p>
        <p>
          Approval as a reviewer does not guarantee acceptance into the affiliate program.
          We reserve the right to deny, suspend, or revoke affiliate privileges at any time
          for any reason, including but not limited to violations of these terms, inactivity
          (no published reviews for 90 consecutive days), or failure to comply with
          disclosure requirements.
        </p>
      </LegalSection>

      <LegalSection title="3. Tracking">
        <p>
          Affiliate referrals are tracked using a 30-day last-click cookie. When a visitor
          clicks an affiliate link in your review, a cookie is placed on their device that
          persists for 30 calendar days. If the visitor completes a qualifying purchase
          within that 30-day window, the commission is attributed to you.
        </p>
        <p>
          We use a last-click attribution model. If a visitor clicks affiliate links from
          multiple reviewers before making a purchase, the commission is attributed to the
          reviewer whose link was most recently clicked. This model is standard in the
          affiliate industry and ensures clear, deterministic attribution.
        </p>
        <p>
          Tracking is dependent on the visitor&apos;s browser accepting cookies. Purchases
          made by visitors who have disabled cookies or cleared their cookies before
          completing a purchase will not be tracked and will not generate commissions. We
          are not responsible for tracking failures caused by visitor browser settings,
          ad blockers, or third-party interference.
        </p>
      </LegalSection>

      <LegalSection title="4. Commission Structure">
        <p>
          Commission rates vary by product category and are subject to change with 14
          days&apos; notice to active affiliates. The current commission structure is as
          follows:
        </p>
        <p>
          <strong className="text-cream">Physical Products:</strong> Commission rates for
          physical product purchases (e.g., hair care products, fashion items, jewelry, home
          goods) range from 5% to 15% of the qualifying purchase amount, depending on the
          merchant agreement and product category.
        </p>
        <p>
          <strong className="text-cream">Digital Products:</strong> Commission rates for
          digital product purchases (e.g., e-books, courses, software, music) range from
          10% to 30% of the qualifying purchase amount, reflecting the higher margins
          typical of digital goods.
        </p>
        <p>
          <strong className="text-cream">Events:</strong> Commission rates for event ticket
          purchases range from 5% to 10% of the ticket price, depending on the event
          organizer&apos;s affiliate terms.
        </p>
        <p>
          <strong className="text-cream">Legal Services:</strong> Commission rates for legal
          service referrals are set on a per-provider basis and may be structured as a flat
          fee per qualified lead rather than a percentage of the transaction amount.
        </p>
      </LegalSection>

      <LegalSection title="5. Payout Terms">
        <p>
          Affiliate commissions are paid monthly. Commissions are subject to a 15-day hold
          period from the date of the qualifying purchase to account for potential refunds,
          chargebacks, and order cancellations. After the hold period, verified commissions
          are added to your available balance.
        </p>
        <p>
          The minimum payout threshold is $25.00 USD. If your available balance is below
          $25.00 at the end of a payout cycle, the balance will roll over to the next month.
          There is no cap on affiliate earnings. Your earning potential is limited only by the
          quality and reach of your reviews.
        </p>
        <p>
          Payouts are processed in United States Dollars (USD) only. Payment methods will be
          specified during your affiliate onboarding. We reserve the right to withhold payouts
          if we suspect fraudulent activity, pending investigation.
        </p>
        <p>
          <strong className="text-cream">Tax Reporting:</strong> Affiliate earnings are
          considered taxable income. SlateRiver LLC will issue an IRS Form 1099-NEC to any
          affiliate who earns $600 or more in a calendar year, as required by United States
          tax law. You are responsible for providing accurate tax information (e.g., W-9) and
          for reporting your affiliate earnings on your tax return. SlateRiver LLC is not
          responsible for any tax obligations arising from your affiliate earnings.
        </p>
      </LegalSection>

      <LegalSection title="6. Disclosure Requirements">
        <p>
          All affiliate reviewers must comply with the Federal Trade Commission (FTC)
          guidelines on endorsements and testimonials, specifically 16 CFR Part 255. This
          requires clear and conspicuous disclosure of the material connection between you
          (the reviewer) and the products or services you review when affiliate links are
          present.
        </p>
        <p>
          At minimum, every review containing affiliate links must include a disclosure
          statement such as: &ldquo;This review contains affiliate links. If you make a
          purchase through these links, I may earn a commission at no additional cost to
          you.&rdquo; The disclosure must be placed near the top of the review, before any
          affiliate links, and must be clearly visible without requiring the reader to scroll
          or click to reveal it.
        </p>
        <p>
          Failure to include proper FTC-compliant disclosures is a serious violation of these
          terms and may result in immediate suspension from the affiliate program, removal of
          the offending review, and forfeiture of commissions earned from the non-compliant
          review. Repeated violations will result in permanent termination from the program.
        </p>
      </LegalSection>

      <LegalSection title="7. Prohibited Practices">
        <p>
          The following practices are strictly prohibited and will result in immediate
          termination from the affiliate program and forfeiture of all unpaid commissions:
        </p>
        <p>
          <strong className="text-cream">Paid Advertising Without Approval:</strong> You may
          not use paid advertising (including but not limited to Google Ads, Facebook Ads,
          Instagram Ads, TikTok Ads, or any pay-per-click platform) to drive traffic to your
          affiliate links without prior written approval from 121212.reviews.
        </p>
        <p>
          <strong className="text-cream">Keyword Bidding:</strong> You may not bid on
          &ldquo;121212,&rdquo; &ldquo;121212.reviews,&rdquo; or any variation of our brand
          name as a keyword in any paid search campaign.
        </p>
        <p>
          <strong className="text-cream">Spam:</strong> You may not distribute affiliate
          links through unsolicited email, text messages, direct messages, or any other form
          of spam. Affiliate links should appear only in your published reviews on the
          Platform and in organic social media content that includes proper disclosure.
        </p>
        <p>
          <strong className="text-cream">Misrepresentation:</strong> You may not
          misrepresent your relationship with 121212.reviews, claim to be an employee or
          official representative of MCM Enterprises or SlateRiver LLC, or make false claims
          about products or services to drive affiliate sales.
        </p>
        <p>
          <strong className="text-cream">Cookie Stuffing:</strong> You may not use any
          technique to artificially place affiliate tracking cookies on a visitor&apos;s device
          without their knowledge or consent. This includes iframes, pop-unders, forced
          redirects, or any other deceptive method of cookie placement.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          If you have any questions about these Affiliate Program Terms, please contact us at:
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
