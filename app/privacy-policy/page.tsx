import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `Privacy Policy | ${SITE_NAME}`;
const pageDescription = `This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service.`;
const pageUrl = `${SITE_URL}/privacy-policy/`;

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

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="Privacy Policy"
        subtitle="Effective Date: April 15, 2025"
      />
      <div className="container">
        <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how {SITE_NAME} collects, uses, discloses, and protects your personal information when you use our services, including our website, DSHub, DSEditor, and DSPlayer. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect or receive various types of information, including:</p>
          <ul>
            <li><strong>Contact information</strong> (name, email address)</li>
            <li><strong>Login credentials</strong> (including Google login details)</li>
            <li><strong>Device identifiers</strong> and usage information</li>
            <li><strong>Uploaded media</strong> (images, videos, and files)</li>
            <li><strong>Customer support interactions</strong></li>
            <li><strong>Cookies</strong> and analytics data</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our services.</li>
            <li>To respond to your requests and provide customer support.</li>
            <li>To send important updates, alerts, and notifications.</li>
            <li>To analyze usage trends and enhance user experience.</li>
            <li>To ensure system security and prevent misuse.</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to gather usage data and enhance functionality. Cookies help us understand how users interact with our platform and allow us to personalize content and ads. You can choose to disable cookies via your browser settings, though some features may not function properly.
          </p>

          <h2>Payments and Subscriptions</h2>
          <p>
            We use <strong>Stripe</strong> as our payment processor. Your billing details are processed securely by Stripe and are subject to their privacy policy. We do not store or access your full payment details.
          </p>

          <h2>Newsletter and Marketing Communications</h2>
          <p>
            You may opt in to receive feature updates, announcements, or offers. You can unsubscribe at any time via the link in the email or by contacting <a href="mailto:support@digitalsigns.ai" className="text-[#2B7CD3] font-bold">support@digitalsigns.ai</a>.
          </p>

          <h2>Third-Party Services</h2>
          <p>We utilize several third-party services to operate effectively, including:</p>
          <ul>
            <li><strong>Google Tag Manager:</strong> for analytics and site optimization.</li>
            <li><strong>Google Login:</strong> for secure authentication.</li>
            <li><strong>AWS SES:</strong> for reliable email communication.</li>
            <li><strong>Customer support tools:</strong> to manage and respond to user inquiries.</li>
          </ul>

          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 my-12">
            <h2 className="mt-0">Third-Party Integrations</h2>
            <p>Our Service integrates with various third-party platforms to enhance Your digital signage experience. By using these integrations, You agree to the respective third-party terms and privacy policies:</p>

            <h3>YouTube Integration</h3>
            <p>
              Our Service uses YouTube API Services to allow You to display YouTube content on Your screens. By using this integration, You are agreeing to be bound by the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a> and the <a href="https://www.google.com/policies/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. We do not store Your YouTube credentials; all authentication is handled via OAuth.
            </p>

            <h3>Canva Integration</h3>
            <p>
              You may connect Your Canva account to import designs directly into {SITE_NAME}. This integration is subject to <a href="https://www.canva.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">Canva's Privacy Policy</a>. We only access the designs You explicitly choose to import.
            </p>

            <h3>Meta (Instagram & Facebook) Integration</h3>
            <p>
              To display Instagram or Facebook feeds, our Service utilizes Meta APIs. Your use of these features is governed by <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta's Privacy Policy</a>. We only collect public data or data You have authorized us to access via the Meta authentication flow for display purposes on Your signage.
            </p>
          </div>

          <h2>Data Retention</h2>
          <p>
            We retain personal data while your account is active or as needed for service delivery. You may request data deletion by emailing us at <a href="mailto:support@digitalsigns.ai" className="text-[#2B7CD3] font-bold">support@digitalsigns.ai</a>.
          </p>

          <h2>Account Deletion</h2>
          <p>Users can request account deletion via:</p>
          <ul>
            <li>In-app request (if available)</li>
            <li>Email: <a href="mailto:support@digitalsigns.ai" className="text-[#2B7CD3] font-bold">support@digitalsigns.ai</a></li>
            <li>Contact form on our website</li>
          </ul>
          <p>Once confirmed: All data will be permanently removed, and associated files will be scheduled for deletion.</p>

          <h2>Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your data. However, no system is entirely secure.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect their personal information.
          </p>

          <h2>Social Media</h2>
          <p>
            We may use social media plugins. Please review the third party's privacy policy before engaging with their content.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Restrict or object to processing (where applicable)</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates take effect immediately upon posting.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:support@digitalsigns.ai" className="text-[#2B7CD3] font-bold">support@digitalsigns.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}
