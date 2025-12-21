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
        subtitle={`Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
      />
      <div className="container">
        <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
          <h2>1. Introduction</h2>
          <p>
            Welcome to {SITE_NAME}! These terms and conditions outline the rules and regulations for the use of our website and services, located at {SITE_URL}. By accessing this website, we assume you accept these terms and conditions. Do not continue to use {SITE_NAME} if you do not agree to all of the terms and conditions stated on this page.
          </p>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, {SITE_NAME} and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>
          <h2>3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>publishing any Website material in any other media;</li>
            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>using this Website in any way that is or may be damaging to this Website;</li>
            <li>using this Website in any way that impacts user access to this Website;</li>
          </ul>
          <h2>4. Your Content</h2>
          <p>
            In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant {SITE_NAME} a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
          </p>
          <h2>5. No warranties</h2>
          <p>
            This Website is provided “as is,” with all faults, and {SITE_NAME} express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
          </p>
          <h2>6. Limitation of liability</h2>
          <p>
            In no event shall {SITE_NAME}, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
          </p>
        </div>
      </div>
    </div>
  );
}
