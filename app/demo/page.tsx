import Link from 'next/link';
import { demoContent } from '@/lib/demo-content';
import SystemCard from '@/components/demo/SystemCard';
import PhaseCard from '@/components/demo/PhaseCard';
import MetricCard from '@/components/demo/MetricCard';

export default function DemoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Optimized for Zoom */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8">
              {demoContent.hero.headline}
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-12">
              {demoContent.hero.subheadline}
            </p>
            <p className="text-xl text-gray-500">
              Let me walk you through how this system works end-to-end.
            </p>
          </div>
        </div>
      </section>

      {/* The System Section with Figma Embed */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            {demoContent.system.title}
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl">
            {demoContent.system.description}
          </p>
          
          {/* Figma Embed - Interactive Diagram */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="100%"
              height="600"
              src={demoContent.system.figmaEmbedUrl}
              allowFullScreen
              className="w-full rounded-lg"
              title="System Diagram"
            />
          </div>
        </div>
      </section>

      {/* What I Set Up Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What I Set Up
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every system includes these 6 core components, customized for your business and market.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoContent.whatISetUp.map((item, index) => (
              <SystemCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 60-Day Launch Plan Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            60-Day Launch Plan
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            We move fast. Here's how we go from zero to a fully operational client acquisition system in 60 days.
          </p>
          
          <div className="grid md:grid-cols-3 gap-10">
            {demoContent.sixtyDayPlan.map((phase, index) => (
              <PhaseCard
                key={index}
                phase={phase.phase}
                title={phase.title}
                deliverables={phase.deliverables}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We Measure Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We Measure
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every metric tracked, reported weekly, and optimized monthly. No guessing—just data.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoContent.metrics.map((metric, index) => (
              <MetricCard
                key={index}
                name={metric.name}
                definition={metric.definition}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How I Work
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Transparent process, clear expectations, and consistent communication.
          </p>

          {/* Engagement Structure */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {demoContent.process.engagement.title}
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              {demoContent.process.engagement.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {demoContent.process.engagement.structure.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Check-ins and Reporting */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {demoContent.process.checkIns.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {demoContent.process.checkIns.description}
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3">
                  {demoContent.process.checkIns.cadence.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-gray-400 mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {demoContent.process.reporting.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {demoContent.process.reporting.description}
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3">
                  {demoContent.process.reporting.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-gray-400 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Expectations */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {demoContent.process.expectations.title}
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              For this to work, I need a few things from you. These aren't negotiable—they're what make successful projects successful.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {demoContent.process.expectations.items.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Diagrams Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How the System Works
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Click and drag to explore each diagram. Pan, zoom, and see how every piece connects.
          </p>
          
          <div className="space-y-16">
            {demoContent.systemDiagrams.map((diagram, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {diagram.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {diagram.description}
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="100%"
                    height="600"
                    src={diagram.figmaUrl}
                    allowFullScreen
                    className="w-full"
                    title={diagram.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Launch Your System?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Let's schedule a follow-up call to discuss your specific business and next steps.
          </p>
          <Link
            href="/demo/book"
            className="inline-block px-10 py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-xl"
          >
            Book Your Follow-Up Call →
          </Link>
          <p className="text-gray-400 mt-8 text-lg">
            No pressure. No pitch. Just an honest conversation about whether this fits your business.
          </p>
        </div>
      </section>
    </div>
  );
}
