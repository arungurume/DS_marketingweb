import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `Terms and Conditions | ${SITE_NAME}`;
const pageDescription = `Please read our terms and conditions carefully before using the ${SITE_NAME} service.`;
const pageUrl = `${SITE_URL}/terms-and-conditions/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="Terms and Conditions"
        subtitle="Effective Date: April 19, 2025"
      />
      <div className="container">
        <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern your use of {SITE_NAME}'s services, including our website, DSHub, DSEditor, and DSPlayer. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.
          </p>

          <h2>2. Definitions</h2>
          <ul>
            <li><strong>"Services":</strong> All offerings provided by {SITE_NAME}, including software, platforms, and support.</li>
            <li><strong>"User":</strong> Any individual or entity using our Services, including free and paid account holders.</li>
            <li><strong>"Content":</strong> All materials uploaded, submitted, or displayed through our platform.</li>
          </ul>

          <h2>3. Account Registration</h2>
          <ul>
            <li>You must provide accurate, complete, and current information.</li>
            <li>You are responsible for maintaining the confidentiality of your credentials.</li>
            <li>You agree to notify us immediately of any unauthorized access or misuse.</li>
          </ul>

          <h2>4. Use of Services</h2>
          <ul>
            <li>You agree not to use our Services for any unlawful or harmful activity.</li>
            <li>You must not upload or transmit malicious code, infringing content, or violate third-party rights.</li>
            <li>All use must comply with applicable laws and these Terms.</li>
          </ul>

          <h2>5. Plans and Payments</h2>
          <ul>
            <li><strong>Free Plan:</strong> Offers limited access to features and is subject to change without notice.</li>
            <li><strong>Paid Plan:</strong> Includes additional features, billed in advance monthly or annually.</li>
            <li><strong>Payment Processing:</strong> All payments are securely handled by <strong>Stripe</strong>. We do not store your payment data.</li>
          </ul>

          <h2>6. Refunds</h2>
          <p>
            All payments are final. We do not offer refunds on subscription fees or add-ons once payment is processed, except where required by law.
          </p>

          <h2>7. Fee Changes</h2>
          <p>
            We reserve the right to modify our pricing. Any changes will be communicated in advance via our platform or email. Continued use of the Services after the effective date constitutes acceptance of the new fees.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content, software, and branding associated with the Services are the property of {SITE_NAME} or its licensors. You may not reproduce, modify, or distribute our content without written consent.
          </p>

          <h2>9. User Content</h2>
          <p>
            You retain ownership of your uploaded content. By using the platform, you grant us a limited license to store and display your content solely for providing the Services.
          </p>

          <h2>10. Third-Party Services and Integrations</h2>
          <p>
            Our Services may integrate with third-party platforms, such as <strong>Canva</strong>, YouTube, and Meta.
          </p>
          <ul>
            <li><strong>Canva Connect:</strong> By using the Canva integration, you agree to comply with <a href="https://www.canva.com/policies/terms-of-use/" target="_blank" rel="noopener noreferrer">Canva's Terms of Use</a> and acknowledge that your use of Canva is subject to their policies. We are not responsible for any issues arising from your use of Canva's platform.</li>
            <li><strong>Responsibility:</strong> We do not control and are not responsible for the content, privacy policies, or practices of any third-party services. You acknowledge and agree that {SITE_NAME} shall not be liable for any damage or loss caused by your use of third-party integrations.</li>
          </ul>

          <h2>11. Termination</h2>
          <p>We may suspend or terminate your access to our Services at any time, with or without notice, if:</p>
          <ul>
            <li>You violate these Terms or misuse the platform.</li>
            <li>Your subscription expires or is not renewed.</li>
            <li>Required by legal or security reasons.</li>
          </ul>
          <p>Upon termination, your account data may be deleted and access permanently revoked.</p>

          <h2>12. Disclaimers</h2>
          <p>
            Our Services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, and we are not responsible for any loss resulting from service downtime.
          </p>

          <h2>13. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, {SITE_NAME} shall not be liable for any indirect, incidental, or consequential damages, including data loss, business interruption, or financial harm.
          </p>

          <h2>14. Changes to Terms</h2>
          <p>
            We may update these Terms periodically. All changes will be posted on this page and are effective upon posting. Continued use after changes indicates your acceptance.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These Terms are governed by the laws of <strong>Ontario, Canada</strong>. Any disputes arising from these Terms will be resolved in the courts of Ontario.
          </p>

          <h2>16. Contact Us</h2>
          <p>
            For questions or concerns regarding these Terms, please contact us:
            <br />
            <strong>Email:</strong> <a href="mailto:support@digitalsigns.ai" className="text-[#2B7CD3] font-bold">support@digitalsigns.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}
