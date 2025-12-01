"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-charcoal-800 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            BenBuildsBiz
          </Link>
          <nav className="flex gap-6">
            <Link href="/demo" className="text-sm text-gray-400 hover:text-white transition-colors">
              Demo
            </Link>
            <Link href="/workwithben" className="text-sm text-gray-400 hover:text-white transition-colors">
              Work With Ben
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              Automation for Growing Businesses
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Stop Losing Customers to
              <span className="text-blue-500"> Slow Responses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Custom automation systems that respond instantly, book appointments 24/7, and bring you more customers while you focus on your business.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-charcoal-900 rounded-xl border border-charcoal-800 hover:border-blue-600/50 transition-colors">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Instant Response</h3>
              <p className="text-gray-400 text-sm">
                Reply to every customer message in seconds, even while you sleep
              </p>
            </div>
            <div className="p-6 bg-charcoal-900 rounded-xl border border-charcoal-800 hover:border-blue-600/50 transition-colors">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-lg font-semibold mb-2">24/7 Booking</h3>
              <p className="text-gray-400 text-sm">
                Customers can book appointments anytime without waiting for you
              </p>
            </div>
            <div className="p-6 bg-charcoal-900 rounded-xl border border-charcoal-800 hover:border-blue-600/50 transition-colors">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Smart Follow-up</h3>
              <p className="text-gray-400 text-sm">
                Automatic review requests and follow-ups that bring customers back
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link 
              href="/demo"
              className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Try Interactive Demo
            </Link>
            <Link 
              href="/workwithben"
              className="px-10 py-4 bg-charcoal-800 hover:bg-charcoal-700 border border-charcoal-700 rounded-lg font-medium transition-colors w-full sm:w-auto"
            >
              Chat with Ben
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-gray-500">
              See exactly how it works for your business in 30 seconds
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Setup in days, not months</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-charcoal-800 mt-12">
            <Link 
              href="/privacy" 
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link 
              href="/terms" 
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

