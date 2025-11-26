import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Header */}
      <header className="border-b border-charcoal-800 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/demo" className="text-xl font-bold hover:text-gray-300 transition-colors">
            ← Back to Demo
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: November 26, 2025</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="leading-relaxed">
              BenBuildsBiz ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our demo dashboard and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Information You Provide</h3>
                <p className="leading-relaxed mb-2">When you use our demo dashboard, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Business name and contact information</li>
                  <li>Owner name and email address</li>
                  <li>Phone number</li>
                  <li>Business niche and pain points</li>
                  <li>Notes and preferences</li>
                  <li>Payment information (processed securely through Stripe)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Automatically Collected Information</h3>
                <p className="leading-relaxed mb-2">We may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide and demonstrate our automation services</li>
              <li>Process payments and fulfill service agreements</li>
              <li>Send demo SMS messages to showcase our automation capabilities</li>
              <li>Communicate with you about our services</li>
              <li>Improve our demo dashboard and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-2">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Service Providers:</strong> Third-party services like Stripe (payments), Airtable (data storage), n8n (automation), and Twilio (SMS) that help us operate our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="leading-relaxed mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. SMS Communications</h2>
            <p className="leading-relaxed">
              By providing your phone number and using our demo features, you consent to receive SMS messages demonstrating our automation capabilities. These are demonstration messages only and you will not be enrolled in any ongoing SMS campaigns without explicit consent. Standard message and data rates may apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Demo data may be retained for business development and improvement purposes unless you request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our dashboard may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are intended for business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-charcoal-900 border border-charcoal-800 rounded-lg">
              <p className="font-semibold">BenBuildsBiz</p>
              <p>Email: ben@benbuildsbiz.com</p>
              <p>Location: Scottsdale, AZ</p>
            </div>
          </section>

          <section className="border-t border-charcoal-800 pt-8 mt-12">
            <p className="text-sm text-gray-500 italic">
              This privacy policy is designed to comply with general privacy best practices and applicable laws. 
              For specific legal advice regarding your privacy rights, please consult with a qualified attorney.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/demo" className="btn-primary inline-block">
            ← Back to Demo
          </Link>
        </div>
      </main>
    </div>
  );
}

