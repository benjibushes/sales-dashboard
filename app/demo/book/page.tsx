import { Metadata } from 'next';
import { demoContent } from '@/lib/demo-content';

export const metadata: Metadata = {
  title: 'Book a Call | Client Acquisition System',
  description: 'Schedule a 30-minute call to discuss your client acquisition system and see if it\'s the right fit.',
};

export default function BookPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Book Your Call
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Schedule a 30-minute call to discuss your business, your goals, and whether this system is the right fit.
          </p>
          <p className="text-gray-500">
            No pressure. No pitch. Just an honest conversation.
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              src={demoContent.calendlyUrl}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book a call"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Fallback Email */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Prefer Email?
            </h3>
            <p className="text-gray-600 mb-4">
              If the calendar doesn't work for you, send me an email directly and we'll find a time.
            </p>
            <a
              href={`mailto:${demoContent.email}`}
              className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Email Me →
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What to Expect on the Call
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-3">01</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Your Business</h3>
              <p className="text-gray-600 text-sm">
                We'll talk about your current lead flow, what's working, and what's not.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-3">02</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The System</h3>
              <p className="text-gray-600 text-sm">
                I'll explain exactly what we'd build, how it works, and what results to expect.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-3">03</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Next Steps</h3>
              <p className="text-gray-600 text-sm">
                If it's a fit, we'll outline next steps. If not, I'll point you in the right direction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

