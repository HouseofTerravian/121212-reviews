import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Who We Are">
        <p>
          121212.reviews is operated by MCM Enterprises, a DBA of SlateRiver LLC, a New Mexico
          limited liability company. This Privacy Policy explains how we collect, use, disclose,
          and protect your personal information when you visit or use our platform at
          121212.reviews (the &ldquo;Platform&rdquo;).
        </p>
        <p>
          We are committed to protecting the privacy of our users, reviewers, and visitors. By
          accessing or using the Platform, you consent to the practices described in this Privacy
          Policy. If you do not agree with this Privacy Policy, you should not use the Platform.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>
          We collect information you provide directly, including: your name and email address
          when you submit a reviewer application; your reviewer handle and profile information;
          the content of reviews you publish; form submissions including contact inquiries and
          feedback; and payment information necessary for affiliate commission payouts (processed
          through secure third-party payment processors).
        </p>
        <p>
          We also collect information automatically when you visit the Platform, including: your
          IP address, browser type and version, operating system, referring URLs, pages viewed,
          time spent on pages, and other standard web analytics data. We may also collect device
          information such as screen resolution and device type for the purpose of optimizing
          the user experience.
        </p>
        <p>
          We do not knowingly collect sensitive personal information such as racial or ethnic
          origin, political opinions, religious beliefs, health data, or biometric data unless
          you voluntarily include such information in your reviews or profile.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>
          We use the information we collect for the following purposes: to operate, maintain,
          and improve the Platform; to process and review your reviewer applications; to
          facilitate the publication of reviews and reviewer profiles; to administer the
          affiliate program, including tracking referrals and processing commission payouts;
          to communicate with you about your account, application status, or payout information;
          and to respond to your inquiries and support requests.
        </p>
        <p>
          We may also use your information to: detect, investigate, and prevent fraudulent
          transactions and other illegal activities; enforce our Terms of Service and Affiliate
          Program Terms; analyze usage trends and improve the Platform; and comply with
          applicable legal obligations, including tax reporting requirements (e.g., IRS Form
          1099 for affiliate earnings exceeding $600 in a calendar year).
        </p>
      </LegalSection>

      <LegalSection title="4. Affiliate Tracking & Cookies">
        <p>
          The Platform uses affiliate tracking technology to attribute qualifying purchases to
          the referring reviewer. When a visitor clicks an affiliate link in a review, a
          tracking cookie is placed on their device with a 30-day duration. This cookie records
          the referring reviewer&apos;s identifier and the timestamp of the click. If the visitor
          completes a qualifying purchase within the 30-day window, the referring reviewer
          receives a commission.
        </p>
        <p>
          We use a last-click attribution model, meaning that if a visitor clicks affiliate
          links from multiple reviewers, the commission is attributed to the last reviewer
          whose link was clicked before the purchase. Affiliate tracking data is used solely
          for the purpose of administering the affiliate program and is not sold or shared
          with unaffiliated third parties for marketing purposes.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookie Policy">
        <p>
          In addition to affiliate tracking cookies, the Platform may use the following types
          of cookies: essential cookies required for the Platform to function properly (e.g.,
          session management, authentication); analytics cookies to help us understand how
          visitors interact with the Platform; and preference cookies to remember your settings
          and preferences.
        </p>
        <p>
          You can control cookie settings through your browser preferences. Most browsers allow
          you to refuse cookies or alert you when cookies are being sent. However, disabling
          cookies may affect the functionality of certain features of the Platform, including
          affiliate link tracking. By continuing to use the Platform with cookies enabled, you
          consent to our use of cookies as described in this section.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes
          described in this Privacy Policy, unless a longer retention period is required or
          permitted by law. Specifically: reviewer account data is retained for the duration of
          your active reviewer status and for 3 years following account termination; published
          reviews are retained indefinitely as part of the public record of the Platform;
          affiliate transaction data is retained for 7 years to comply with tax and financial
          reporting obligations; and analytics and usage data is retained in anonymized form
          for up to 2 years.
        </p>
        <p>
          You may request deletion of your personal information by contacting us at
          support@121212.reviews. We will process your request within 30 days, subject to any
          legal obligations that require us to retain certain information.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We implement reasonable administrative, technical, and physical security measures to
          protect your personal information against unauthorized access, alteration, disclosure,
          or destruction. These measures include encryption of data in transit (TLS/SSL),
          secure server infrastructure, access controls limiting employee access to personal
          data, and regular security reviews.
        </p>
        <p>
          However, no method of transmission over the Internet or method of electronic storage
          is 100% secure. While we strive to use commercially acceptable means to protect your
          personal information, we cannot guarantee its absolute security. You are responsible
          for maintaining the confidentiality of your account credentials and for any activity
          that occurs under your account.
        </p>
      </LegalSection>

      <LegalSection title="8. Children's Privacy">
        <p>
          The Platform is not intended for use by anyone under the age of 18. We do not
          knowingly collect personal information from children under 18. If we become aware
          that we have collected personal information from a child under 18, we will take
          steps to delete that information as quickly as possible. If you believe that a child
          under 18 has provided us with personal information, please contact us at
          support@121212.reviews.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, legal requirements, or the Platform&apos;s functionality. When we make
          changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this page.
          We encourage you to review this Privacy Policy periodically.
        </p>
        <p>
          If we make material changes to how we collect, use, or share your personal
          information, we will notify active reviewers via email at least 14 days before
          the changes take effect. Your continued use of the Platform after any changes to
          this Privacy Policy constitutes your acceptance of the revised policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please
          contact us at:
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
