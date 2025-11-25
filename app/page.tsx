"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            BenBuildsBiz
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto">
            Custom automation systems that bring you more customers while you focus on your business.
          </p>
        </div>

        {/* Value Prop */}
        <div className="space-y-3 text-gray-300">
          <p className="text-lg">
            ✓ Automated booking & follow-ups
          </p>
          <p className="text-lg">
            ✓ Instant customer communication
          </p>
          <p className="text-lg">
            ✓ Review requests & referral systems
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link 
            href="/demo"
            className="btn-primary inline-block text-lg px-10 py-4 shadow-lg hover:shadow-xl"
          >
            Start Live Demo
          </Link>
        </div>

        {/* Subtext */}
        <p className="text-sm text-gray-500 pt-4">
          See exactly how it works for your business in 30 seconds
        </p>
      </div>
    </main>
  );
}

