import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const pageTitle = `GDPR Overview | ${SITE_NAME}`;
const pageDescription = `Learn how ${SITE_NAME} ensures GDPR compliance and protects your data while using our digital signage CMS.`;
const pageUrl = `${SITE_URL}/gdpr/`;

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

export default function GDPRPage() {
    return (
        <div className="pb-16 sm:pb-24">
            <PageHeader
                title="GDPR Overview"
                subtitle="How we protect your data and privacy"
            />
            <div className="container">
                <div className="prose prose-lg max-w-4xl mx-auto text-foreground/80">
                    <h2>Our Commitment to GDPR</h2>
                    <p>
                        The General Data Protection Regulation (GDPR) is a comprehensive data protection law in the European Union that sets a high standard for data privacy. At {SITE_NAME}, we are committed to being fully GDPR compliant and helping our customers fulfill their own GDPR requirements.
                    </p>

                    <h2>Data We Collect</h2>
                    <p>
                        As a digital signage CMS, we collect minimal personal data necessary to provide our service, including:
                    </p>
                    <ul>
                        <li>Account information (Name, Email, Password)</li>
                        <li>Billing information (if applicable)</li>
                        <li>Usage data for service optimization</li>
                        <li>Media content uploaded for display on your screens</li>
                    </ul>

                    <h2>How We Protect Your Data</h2>
                    <p>
                        We implement robust security measures to ensure the safety of your data:
                    </p>
                    <ul>
                        <li><strong>Encryption:</strong> All data is encrypted in transit and at rest.</li>
                        <li><strong>Access Control:</strong> Strict access controls are in place for our internal systems.</li>
                        <li><strong>Data Residency:</strong> We use secure cloud infrastructure with data centers that follow industry-standard compliance protocols.</li>
                    </ul>

                    <h2>Your Rights Under GDPR</h2>
                    <p>You have the following rights regarding your personal data:</p>
                    <ul>
                        <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
                        <li><strong>Right to Rectification:</strong> You can ask us to correct any inaccurate data.</li>
                        <li><strong>Right to Erasure:</strong> You can request that we delete your personal data.</li>
                        <li><strong>Right to Portability:</strong> You can request to receive your data in a structured, commonly used format.</li>
                    </ul>

                    <h2>Digital Signage Specifics</h2>
                    <p>
                        If you use our platform to display content that includes personal data (e.g., social media feeds or employee birthdays), you act as the data controller, and {SITE_NAME} acts as the data processor. We ensure that our processing activities are transparent and secure.
                    </p>

                    <h3>Third-Party Data Processors</h3>
                    <p>
                        To provide specific features, we utilize the following third-party processors who may process data on our behalf:
                    </p>
                    <ul>
                        <li><strong>Google/YouTube:</strong> For video integration via YouTube API Services.</li>
                        <li><strong>Canva:</strong> For design integration and import services.</li>
                        <li><strong>Meta (Facebook/Instagram):</strong> For social media feed integrations.</li>
                    </ul>
                    <p>
                        Each of these processors is vetted for GDPR compliance and data processing agreements are in place where required.
                    </p>

                    <h2>Contact Our DPO</h2>
                    <p>
                        If you have any questions regarding our data protection practices or wish to exercise your rights, please contact our Data Protection Officer at <a href="mailto:support@digtialsigns.ai" className="text-[#2B7CD3] font-bold">support@digtialsigns.ai</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
