import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Our Commitment">
        <p>
          121212.reviews is committed to ensuring digital accessibility for people of all
          abilities. We believe that every person deserves equal access to information,
          reviews, and the tools that help them make informed decisions. Accessibility is
          not an afterthought for us &mdash; it is a foundational principle that guides
          how we design, develop, and maintain our platform.
        </p>
        <p>
          We are continually improving the user experience for everyone and applying relevant
          accessibility standards to ensure we provide equal access to all users. Our goal is
          to make 121212.reviews usable by the widest possible audience, regardless of
          technology or ability.
        </p>
      </LegalSection>

      <LegalSection title="2. WCAG 2.1 AA Standards">
        <p>
          We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at
          Level AA. These guidelines are developed by the World Wide Web Consortium (W3C)
          and represent the internationally recognized standard for web accessibility. WCAG
          2.1 AA addresses a wide range of recommendations for making web content more
          accessible to people with disabilities, including visual, auditory, physical,
          speech, cognitive, language, learning, and neurological disabilities.
        </p>
        <p>
          While we aim for full compliance, we acknowledge that accessibility is an ongoing
          effort. We regularly audit our platform against WCAG 2.1 AA criteria and prioritize
          remediation of any identified issues.
        </p>
      </LegalSection>

      <LegalSection title="3. Specific Measures">
        <p>
          We have taken the following specific measures to ensure accessibility on
          121212.reviews:
        </p>
        <p>
          <strong className="text-cream">Semantic HTML:</strong> We use proper semantic HTML
          elements (headings, landmarks, lists, forms) to ensure that assistive technologies
          can accurately interpret and navigate the content structure. Page headings follow
          a logical hierarchy, and content sections are clearly delineated.
        </p>
        <p>
          <strong className="text-cream">Keyboard Navigation:</strong> All interactive
          elements on the Platform are accessible via keyboard navigation. Users can tab
          through links, buttons, form fields, and other controls in a logical order. Focus
          indicators are visible on all interactive elements to help keyboard users track
          their position on the page.
        </p>
        <p>
          <strong className="text-cream">Color Contrast:</strong> We maintain sufficient
          color contrast ratios between text and background colors throughout the Platform
          to ensure readability for users with low vision or color vision deficiencies. Our
          primary text achieves a minimum contrast ratio of 4.5:1 against its background,
          and large text achieves a minimum of 3:1, consistent with WCAG 2.1 AA requirements.
        </p>
        <p>
          <strong className="text-cream">ARIA Attributes:</strong> Where native HTML
          semantics are insufficient, we use WAI-ARIA (Web Accessibility Initiative &mdash;
          Accessible Rich Internet Applications) attributes to provide additional context to
          assistive technologies. This includes ARIA labels for interactive elements, ARIA
          roles for custom components, and ARIA live regions for dynamic content updates.
        </p>
        <p>
          <strong className="text-cream">Responsive Design:</strong> The Platform is fully
          responsive and adapts to various screen sizes and orientations. Content reflows
          properly at up to 400% zoom without loss of information or functionality, ensuring
          usability on mobile devices and for users who rely on screen magnification.
        </p>
        <p>
          <strong className="text-cream">Form Accessibility:</strong> All form fields include
          visible labels and are programmatically associated with their labels. Error messages
          are clearly communicated and associated with the relevant form field. Required fields
          are indicated both visually and programmatically. The star rating component is
          operable via keyboard and provides appropriate ARIA feedback.
        </p>
      </LegalSection>

      <LegalSection title="4. Feedback">
        <p>
          We welcome feedback on the accessibility of 121212.reviews. If you encounter any
          accessibility barriers while using the Platform, or if you have suggestions for how
          we can improve accessibility, please let us know. Your feedback helps us identify
          issues and prioritize improvements.
        </p>
        <p>
          When reporting an accessibility issue, please include: a description of the issue
          you encountered, the page URL where the issue occurred, the assistive technology
          you were using (if applicable), and your preferred method of contact. We will
          acknowledge your feedback within 2 business days and provide an estimated timeline
          for resolution.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>
          If you have any questions about this Accessibility Statement or need assistance
          accessing any content on the Platform, please contact us at:
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
