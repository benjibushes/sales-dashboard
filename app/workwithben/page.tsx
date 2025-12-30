import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your business needs or fitness coaching.',
};

export default function WorkWithBenPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-5xl space-y-12">
            <div className="accent-box">// CONTACT</div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] uppercase">
              Let&apos;s Talk
            </h1>
            <p className="text-xl md:text-2xl text-ash font-bold max-w-3xl">
              Ready to fix your systems or build real discipline? Pick your path below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="accent-box mb-4">// CHOOSE YOUR PATH</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">What Do You Need Help With?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Business Path */}
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors bg-midnight">
                  <div className="accent-box mb-6">// BUSINESS</div>
                  <h3 className="text-3xl font-black uppercase mb-4">Business Systems</h3>
                  <p className="text-ash font-medium mb-6 leading-relaxed">
                    Get more customers with automated follow-up, booking, and lead response systems.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-pure-white font-black">→</span>
                      <span className="text-ash text-sm font-medium">Never lose a 3am lead again</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-pure-white font-black">→</span>
                      <span className="text-ash text-sm font-medium">Turn 40% of ghost leads into calls</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-pure-white font-black">→</span>
                      <span className="text-ash text-sm font-medium">Calendar fills while you sleep</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      href="/work"
                      variant="primary"
                      className="w-full"
                    >
                      Apply for Business Systems →
                    </Button>
                    <p className="text-xs text-center text-smoke uppercase tracking-widest">
                      Quick book or full application
                    </p>
                  </div>
                </div>

                {/* Fitness Path */}
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors bg-midnight">
                  <div className="accent-box mb-6">// FITNESS</div>
                  <h3 className="text-3xl font-black uppercase mb-4">Fitness Coaching</h3>
                  <p className="text-ash font-medium mb-6 leading-relaxed">
                    Build real discipline and capability with 1:1 training for people who do hard things.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-pure-white font-black">→</span>
                      <span className="text-ash text-sm font-medium">Show up when you don't want to</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-pure-white font-black">→</span>
                      <span className="text-ash text-sm font-medium">Build trust with yourself</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-pure-white font-black">→</span>
                      <span className="text-ash text-sm font-medium">Prove you can do hard things</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      href="/fitness"
                      variant="primary"
                      className="w-full"
                    >
                      Apply for Fitness Coaching →
                    </Button>
                    <p className="text-xs text-center text-smoke uppercase tracking-widest">
                      Quick book or full application
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Inquiry Section */}
            <div className="mb-16">
              <div className="border-t-4 border-steel pt-16">
                <div className="text-center mb-12">
                  <div className="accent-box mb-4 inline-block">// GENERAL INQUIRY</div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">Not Sure? Just Have a Question?</h3>
                  <p className="text-ash font-medium max-w-2xl mx-auto">
                    Fill out this form or email me directly. I respond to every real inquiry within 24-48 hours.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="border-4 border-steel p-8">
                    <h4 className="text-xs uppercase tracking-widest font-black mb-4">DIRECT EMAIL</h4>
                    <a 
                      href="mailto:ben@benbuildsbiz.com" 
                      className="text-pure-white hover:text-smoke font-black uppercase text-lg tracking-wider block mb-4"
                    >
                      ben@benbuildsbiz.com
                    </a>
                    <p className="text-ash text-sm font-medium">
                      Best for: Specific questions, partnership inquiries, or if you just want to say hi.
                    </p>
                  </div>
                  
                  <div className="border-4 border-steel p-8">
                    <h4 className="text-xs uppercase tracking-widest font-black mb-4">DISCOVERY CALL</h4>
                    <p className="text-pure-white font-bold mb-4">
                      15-20 minutes. No pitch.
                    </p>
                    <p className="text-ash text-sm font-medium">
                      Use the form below to schedule a quick call. We'll figure out if I can help and what the next steps are.
                    </p>
                  </div>
                </div>
                
                <div id="discovery-form" className="scroll-mt-24">
                  <ContactForm formType="general" />
                </div>
              </div>
            </div>
            
            {/* What Happens Next */}
            <div className="border-4 border-pure-white p-10 md:p-16">
              <h3 className="text-2xl font-black uppercase mb-8 text-center">What Happens Next</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-black mb-4 text-smoke">01</div>
                  <h4 className="text-sm font-black uppercase mb-3">You Reach Out</h4>
                  <p className="text-ash text-sm font-medium">
                    Pick a path above or fill out the general form. Tell me what you need.
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl font-black mb-4 text-smoke">02</div>
                  <h4 className="text-sm font-black uppercase mb-3">We Talk</h4>
                  <p className="text-ash text-sm font-medium">
                    I respond within 24-48 hours. We schedule a call. No sales pitch—just an honest conversation.
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl font-black mb-4 text-smoke">03</div>
                  <h4 className="text-sm font-black uppercase mb-3">We Build or We Don't</h4>
                  <p className="text-ash text-sm font-medium">
                    If it's a fit, we work together. If not, I'll tell you. I only take on work where I can deliver results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
