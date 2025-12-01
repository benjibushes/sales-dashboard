"use client";

import Link from "next/link";
import ChatBox from "@/components/ChatBox";

export default function WorkWithBenPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-charcoal-800 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            BenBuildsBiz
          </Link>
          <nav className="flex gap-6">
            <Link href="/workwithben" className="text-sm text-white font-semibold">
              Work With Ben
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's Build Something Amazing
              </h1>
              <p className="text-xl text-gray-400">
                Ready to automate your business and get more customers? Let's chat about what you need.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Custom Solutions</h3>
                  <p className="text-gray-400">Built specifically for your business needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fast Setup</h3>
                  <p className="text-gray-400">Get up and running quickly with proven systems</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">ROI Focused</h3>
                  <p className="text-gray-400">Systems that pay for themselves with new revenue</p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3 border-t border-charcoal-800">
              <h3 className="font-semibold">What You'll Get:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Automated customer communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  24/7 booking and scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Follow-up and review systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  CRM and pipeline management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Payment processing integration
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Chat */}
          <div className="sticky top-8">
            <ChatBox 
              welcomeMessage="Hey! I'm Ben 👋

I help businesses like yours automate the boring stuff so you can focus on what you do best.

What kind of business are you running? Let's see how I can help!"
            />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-charcoal-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

