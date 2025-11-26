import Link from "next/link";

export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-400 mb-8">Last updated: November 26, 2025</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the BenBuildsBiz demo dashboard and services ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Services</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                BenBuildsBiz provides custom automation solutions for small businesses, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>SMS automation and customer communication systems</li>
                <li>AI-powered response systems</li>
                <li>Appointment booking and reminder automation</li>
                <li>Review request automation</li>
                <li>Lead nurture and follow-up sequences</li>
                <li>Custom workflow development and integration</li>
              </ul>
              <p className="leading-relaxed mt-4">
                The demo dashboard is provided to showcase our capabilities and collect information for potential service agreements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Service Tiers and Pricing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Full Stack Package</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>One-time setup fee: $2,500</li>
                  <li>Monthly maintenance: $300</li>
                  <li>Includes new dedicated Twilio phone number</li>
                  <li>Complete automation system setup</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Hybrid Stack Package</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>One-time setup fee: $2,500</li>
                  <li>Monthly maintenance: $250</li>
                  <li>Uses your existing Twilio phone number</li>
                  <li>Automation system integration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">SMS Brain Only Package</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>One-time setup fee: $1,500</li>
                  <li>Monthly maintenance: $200</li>
                  <li>AI SMS automation only</li>
                  <li>Plugs into existing systems</li>
                </ul>
              </div>

              <p className="leading-relaxed mt-4 text-sm text-gray-400">
                All prices are in USD. Additional services such as landing pages, ad management, and custom builds are priced separately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment Terms</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Payment is processed securely through Stripe. By making a payment, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pay all applicable fees and charges</li>
                <li>Provide accurate payment information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Pay monthly maintenance fees on time</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Setup fees are non-refundable once work has begun. Monthly maintenance fees are billed in advance and are non-refundable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Service Delivery and Timeline</h2>
            <p className="leading-relaxed">
              Upon payment confirmation, we will begin setup of your automation system. Typical implementation timeline is 7-14 business days, though this may vary based on complexity and third-party integrations required. We will communicate expected timelines during the onboarding process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Third-Party Services</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Our services integrate with third-party platforms including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Twilio (SMS and voice services)</li>
                <li>OpenAI (AI capabilities)</li>
                <li>Airtable (data management)</li>
                <li>n8n (workflow automation)</li>
                <li>Stripe (payment processing)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You are responsible for any accounts, fees, or compliance requirements associated with these third-party services. We are not liable for changes to third-party service pricing, availability, or functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Client Responsibilities</h2>
            <p className="leading-relaxed mb-2">As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide accurate business information and credentials</li>
              <li>Maintain active accounts with required third-party services</li>
              <li>Comply with all applicable laws and regulations, including SMS marketing laws (TCPA, CAN-SPAM, etc.)</li>
              <li>Obtain proper consent from customers before sending automated messages</li>
              <li>Review and approve automated message content</li>
              <li>Pay all fees on time</li>
              <li>Notify us of any issues or changes promptly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. SMS Compliance</h2>
            <p className="leading-relaxed">
              You are solely responsible for compliance with SMS marketing laws including TCPA (Telephone Consumer Protection Act), CAN-SPAM Act, and other applicable regulations. You must:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Obtain proper consent before sending SMS messages</li>
              <li>Provide clear opt-out instructions</li>
              <li>Honor opt-out requests promptly</li>
              <li>Maintain records of consent</li>
            </ul>
            <p className="leading-relaxed mt-4">
              BenBuildsBiz is not responsible for your SMS compliance. You agree to indemnify us against any claims arising from your SMS practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Intellectual Property</h2>
            <p className="leading-relaxed">
              All workflows, code, designs, and systems developed by BenBuildsBiz remain our intellectual property. Upon payment, you receive a non-exclusive license to use the automation systems for your business. You may not resell, redistribute, or claim ownership of our work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Warranties and Disclaimers</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Our services are provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Specific results or ROI from automation systems</li>
                <li>Uninterrupted or error-free service</li>
                <li>Compatibility with all third-party services</li>
                <li>That automation will eliminate all manual work</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We will make commercially reasonable efforts to maintain and support your systems, but cannot guarantee 100% uptime or perfect functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, BenBuildsBiz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, or lost data arising from your use of our services. Our total liability shall not exceed the amount you paid for services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Termination</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Either party may terminate the service agreement with 30 days written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You remain responsible for all fees incurred through the termination date</li>
                <li>We will provide export of your data in a reasonable format</li>
                <li>Access to automation systems will be discontinued</li>
                <li>No refunds will be provided for prepaid services</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to terminate services immediately for breach of these Terms, non-payment, or illegal use.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Modifications to Services and Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify our services, pricing, and these Terms at any time. We will provide reasonable notice of material changes. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">14. Governing Law and Disputes</h2>
            <p className="leading-relaxed">
              These Terms are governed by the laws of the State of Arizona, USA. Any disputes shall be resolved in the courts of Maricopa County, Arizona. You agree to first attempt to resolve any disputes through good-faith negotiation before pursuing legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">15. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">16. Entire Agreement</h2>
            <p className="leading-relaxed">
              These Terms, together with our Privacy Policy and any service agreement, constitute the entire agreement between you and BenBuildsBiz regarding our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">17. Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-charcoal-900 border border-charcoal-800 rounded-lg">
              <p className="font-semibold">BenBuildsBiz</p>
              <p>Email: ben@benbuildsbiz.com</p>
              <p>Location: Scottsdale, AZ</p>
            </div>
          </section>

          <section className="border-t border-charcoal-800 pt-8 mt-12">
            <p className="text-sm text-gray-500 italic">
              By using our demo dashboard or purchasing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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

