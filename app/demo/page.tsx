import Link from 'next/link';
import { demoContent } from '@/lib/demo-content';
import SystemCard from '@/components/demo/SystemCard';
import PhaseCard from '@/components/demo/PhaseCard';
import MetricCard from '@/components/demo/MetricCard';

export default function DemoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Optimized for Zoom */}
      <section className="py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8">
              {demoContent.hero.headline}
            </h1>
            <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed mb-8 lg:mb-12">
              {demoContent.hero.subheadline}
            </p>
            <p className="text-base lg:text-xl text-gray-500">
              Let me walk you through how this system works end-to-end.
            </p>
          </div>
        </div>
      </section>

      {/* The System Section with Figma Embed */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
            {demoContent.system.title}
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 lg:mb-12 max-w-4xl">
            {demoContent.system.description}
          </p>
          
          {/* Figma Embed - Interactive Diagram - Hidden on mobile */}
          <div className="hidden md:block bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={demoContent.system.figmaEmbedUrl}
                allowFullScreen
                loading="lazy"
                title="System Diagram"
              />
            </div>
          </div>
          
          {/* Mobile: Link to open Figma in new tab */}
          <div className="md:hidden bg-white border-2 border-gray-300 rounded-xl p-8 text-center">
            <p className="text-gray-600 mb-4">Interactive diagram available on desktop or:</p>
            <a
              href={demoContent.system.figmaEmbedUrl.replace('embed.figma.com', 'www.figma.com')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Open Full Diagram →
            </a>
          </div>
        </div>
      </section>

      {/* What I Set Up Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            What I Set Up
          </h2>
          <p className="text-base lg:text-xl text-gray-600 mb-10 lg:mb-16 max-w-3xl">
            Every system includes these 6 core components, customized for your business and market.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            60-Day Launch Plan
          </h2>
          <p className="text-base lg:text-xl text-gray-600 mb-10 lg:mb-16 max-w-3xl">
            We move fast. Here's how we go from zero to a fully operational client acquisition system in 60 days.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
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
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            What We Measure
          </h2>
          <p className="text-base lg:text-xl text-gray-600 mb-10 lg:mb-16 max-w-3xl">
            Every metric tracked, reported weekly, and optimized monthly. No guessing—just data.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            How I Work
          </h2>
          <p className="text-base lg:text-xl text-gray-600 mb-10 lg:mb-16 max-w-3xl">
            Transparent process, clear expectations, and consistent communication.
          </p>

          {/* Engagement Structure */}
          <div className="mb-12 lg:mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">
              {demoContent.process.engagement.title}
            </h3>
            <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10">
              {demoContent.process.engagement.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {demoContent.process.engagement.structure.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                    {item.title}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Check-ins and Reporting */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-16">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                {demoContent.process.checkIns.title}
              </h3>
              <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
                {demoContent.process.checkIns.description}
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6">
                <ul className="space-y-2 lg:space-y-3">
                  {demoContent.process.checkIns.cadence.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm lg:text-base text-gray-600">
                      <span className="text-gray-400 mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                {demoContent.process.reporting.title}
              </h3>
              <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
                {demoContent.process.reporting.description}
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6">
                <ul className="space-y-2 lg:space-y-3">
                  {demoContent.process.reporting.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm lg:text-base text-gray-600">
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
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
              {demoContent.process.expectations.title}
            </h3>
            <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10">
              For this to work, I need a few things from you. These aren't negotiable—they're what make successful projects successful.
            </p>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {demoContent.process.expectations.items.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6">
                  <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 lg:mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Diagrams Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            How the System Works
          </h2>
          <p className="text-base lg:text-xl text-gray-600 mb-10 lg:mb-16 max-w-3xl">
            <span className="hidden md:inline">Click and drag to explore each diagram. Pan, zoom, and see how every piece connects.</span>
            <span className="md:hidden">Detailed interactive diagrams available on desktop, or open each link below to view full-screen.</span>
          </p>
          
          <div className="space-y-8 lg:space-y-16">
            {demoContent.systemDiagrams.map((diagram, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">
                  {diagram.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
                  {diagram.description}
                </p>
                
                {/* Desktop: Show iframe */}
                <div className="hidden md:block bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      className="absolute top-0 left-0 w-full h-full"
                      src={diagram.figmaUrl}
                      allowFullScreen
                      loading="lazy"
                      title={diagram.title}
                    />
                  </div>
                </div>
                
                {/* Mobile: Show link to open in new tab */}
                <div className="md:hidden bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-center">
                  <a
                    href={diagram.figmaUrl.replace('embed.figma.com', 'www.figma.com')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    View {diagram.title} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
            Ready to Launch Your System?
          </h2>
          <p className="text-lg lg:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed">
            Let's schedule a follow-up call to discuss your specific business and next steps.
          </p>
          <Link
            href="/demo/book"
            className="inline-block px-8 lg:px-10 py-4 lg:py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg lg:text-xl"
          >
            Book Your Follow-Up Call →
          </Link>
          <p className="text-gray-400 mt-6 lg:mt-8 text-sm lg:text-lg">
            No pressure. No pitch. Just an honest conversation about whether this fits your business.
          </p>
        </div>
      </section>
    </div>
  );
}
