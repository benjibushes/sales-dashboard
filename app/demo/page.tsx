"use client";

import { useState } from "react";
import { LeadData } from "@/types";
import LeadIntakeForm from "@/components/LeadIntakeForm";
import DemoPanel from "@/components/DemoPanel";
import SystemStackDisplay from "@/components/SystemStackDisplay";
import VisualExplainer from "@/components/VisualExplainer";
import StickyFooter from "@/components/StickyFooter";
import Link from "next/link";

export default function DemoPage() {
  const [currentLead, setCurrentLead] = useState<LeadData | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const handleLeadCreated = (lead: LeadData) => {
    setCurrentLead(lead);
    setShowDemo(true);
    
    // Scroll to demo panel smoothly
    setTimeout(() => {
      document.getElementById("demo-panel")?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  const handleReset = () => {
    setCurrentLead(null);
    setShowDemo(false);
    // Don't auto-scroll - let user stay where they are
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="border-b border-charcoal-800 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            BenBuildsBiz
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex gap-6">
              <Link href="/demo" className="text-sm text-white font-semibold">
                Demo
              </Link>
              <Link href="/workwithben" className="text-sm text-gray-400 hover:text-white transition-colors">
                Work With Ben
              </Link>
            </nav>
            {currentLead && (
              <span className="text-sm text-gray-400">
                Lead: {currentLead.businessName}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          {!showDemo && (
            <div className="text-center space-y-3 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's Build Your System
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Enter your info below and I'll show you exactly how automation can transform your business
              </p>
            </div>
          )}

          {/* Visual Explainer - Always Visible */}
          <VisualExplainer />

          {/* Lead Intake Form */}
          {!showDemo && (
            <div className="max-w-2xl mx-auto">
              <LeadIntakeForm onLeadCreated={handleLeadCreated} />
            </div>
          )}

          {/* Demo Content - Shows After Lead Creation */}
          {showDemo && currentLead && (
            <>
              {/* Success Message */}
              <div className="bg-green-900/20 border border-green-700 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">✓</div>
                <h2 className="text-2xl font-bold mb-2">Lead Created!</h2>
                <p className="text-gray-300">
                  You're all set, {currentLead.ownerName}. Here's what I'm recommending for {currentLead.businessName}.
                </p>
              </div>

              {/* System Stack */}
              <SystemStackDisplay lead={currentLead} />

              {/* Demo Panel */}
              <div id="demo-panel">
                <DemoPanel lead={currentLead} />
              </div>

              {/* Call to Action */}
              <div className="card text-center bg-white text-black">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6 text-gray-700">
                  BenBuildsBiz creates custom automation systems that save you time and bring you more customers.
                </p>
                <div className="space-y-3">
                  <p className="text-xl font-semibold">Let's talk about your business.</p>
                  <p className="text-gray-600">We'll create a custom plan tailored exactly to your needs.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Sticky Footer */}
      {showDemo && <StickyFooter onReset={handleReset} />}
    </div>
  );
}

