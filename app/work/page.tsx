import React from 'react';
import { Metadata } from 'next';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import BusinessApplicationForm from '@/components/BusinessApplicationForm';
import StickyBookButton from '@/components/StickyBookButton';
import QuickBookModal from '@/components/QuickBookModal';

export const metadata: Metadata = {
  title: 'Work With Me',
  description: 'I help service businesses get more customers with simple, reliable digital systems.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <StickyBookButton text="Apply Now" />
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-5xl space-y-12">
            <div className="accent-box">// BUSINESS SYSTEMS</div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase">
              I help service businesses get more customers with simple, reliable digital systems.
            </h1>
            <p className="text-xl md:text-2xl text-ash font-bold max-w-3xl">
              No bloat. No hype. Just systems that actually work.
            </p>
            
            {/* Social Proof Banner */}
            <div className="flex flex-wrap gap-8 py-6 border-y-4 border-steel">
              <div>
                <p className="text-3xl font-black">+20%</p>
                <p className="text-xs uppercase tracking-widest font-black text-ash">Revenue Increase</p>
              </div>
              <div>
                <p className="text-3xl font-black">Week 1</p>
                <p className="text-xs uppercase tracking-widest font-black text-ash">Time to Results</p>
              </div>
              <div>
                <p className="text-3xl font-black">$12K</p>
                <p className="text-xs uppercase tracking-widest font-black text-ash">Added Monthly</p>
              </div>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-ash mb-4">
                CHOOSE YOUR PATH:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuickBookModal 
                  formType="business"
                  calendlyUrl="https://calendly.com/benibeauchman/30min"
                  triggerText="Quick Book (30 sec) →"
                />
                <Button 
                  href="#application-form"
                  variant="secondary"
                >
                  Full Application (3 min)
                </Button>
              </div>
              <p className="text-smoke text-xs mt-4 font-medium">
                Quick Book = 3 fields + instant calendar. Full Application = detailed info for better prep.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="mb-20">
            <div className="accent-box mb-4">// WHAT YOU GET</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
              What I Build
            </h2>
            <p className="text-xl text-ash font-bold mt-6">Digital systems that get you customers and save you time.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              title="Websites & Landing Pages"
              description="Fast, mobile-friendly sites that turn visitors into customers. Built to convert, not just look pretty."
            />
            
            <FeatureCard
              title="Booking & Lead Flows"
              description="Let customers book appointments and request quotes 24/7, automatically synced to your calendar."
            />
            
            <FeatureCard
              title="Follow-up Automation"
              description="Instant responses to new leads. Automatic appointment reminders. Review requests that actually get sent."
            />
            
            <FeatureCard
              title="Ongoing Improvements"
              description="Systems that evolve with your business. No set-it-and-forget-it. I build for the long term."
            />
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="mb-16">
            <div className="accent-box mb-4">// BEFORE & AFTER</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight max-w-4xl">
              Your Day-To-Day Reality
            </h2>
            <p className="text-xl text-ash font-bold mt-6">This is what changes when your systems actually work.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="border-4 border-steel p-10 space-y-8">
              <div>
                <h3 className="text-3xl font-black uppercase mb-6 text-smoke">Before Ben</h3>
                <p className="text-ash font-medium mb-8">The daily chaos you're living right now.</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-steel pl-6">
                  <p className="text-pure-white font-bold mb-2">→ 3am Lead Comes In</p>
                  <p className="text-ash text-sm font-medium">
                    You see it Tuesday morning when you finally check email. They already hired someone else who responded in 5 minutes.
                  </p>
                </div>
                
                <div className="border-l-4 border-steel pl-6">
                  <p className="text-pure-white font-bold mb-2">→ Client Wants to Reschedule</p>
                  <p className="text-ash text-sm font-medium">
                    Seven emails back and forth trying to find a time. Takes 3 days. They get frustrated and cancel.
                  </p>
                </div>
                
                <div className="border-l-4 border-steel pl-6">
                  <p className="text-pure-white font-bold mb-2">→ Past Clients Forget You Exist</p>
                  <p className="text-ash text-sm font-medium">
                    No follow-ups. No check-ins. No referrals. You're out of sight, out of mind. Money left on the table.
                  </p>
                </div>
                
                <div className="border-l-4 border-steel pl-6">
                  <p className="text-pure-white font-bold mb-2">→ You're Drowning in Busy Work</p>
                  <p className="text-ash text-sm font-medium">
                    Responding to messages, sending reminders, chasing payments. That's 10+ hours a week you can't bill for.
                  </p>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="border-4 border-pure-white p-10 space-y-8 bg-midnight">
              <div>
                <h3 className="text-3xl font-black uppercase mb-6">After Ben</h3>
                <p className="text-ash font-medium mb-8">What happens when systems run themselves.</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pure-white pl-6">
                  <p className="text-pure-white font-bold mb-2">✓ 3am Lead Gets Instant Response</p>
                  <p className="text-ash text-sm font-medium">
                    Automated reply in 60 seconds. Booking link. Follow-up sequence. By morning, they've scheduled a call. You didn't lift a finger.
                  </p>
                </div>
                
                <div className="border-l-4 border-pure-white pl-6">
                  <p className="text-pure-white font-bold mb-2">✓ One-Click Rescheduling</p>
                  <p className="text-ash text-sm font-medium">
                    Client clicks a link, picks a new time, done. Calendar updates automatically. Zero back-and-forth. Takes 30 seconds.
                  </p>
                </div>
                
                <div className="border-l-4 border-pure-white pl-6">
                  <p className="text-pure-white font-bold mb-2">✓ Past Clients Stay Connected</p>
                  <p className="text-ash text-sm font-medium">
                    Quarterly "thinking of you" emails go out automatically. Review requests after jobs. Referrals flow in passively.
                  </p>
                </div>
                
                <div className="border-l-4 border-pure-white pl-6">
                  <p className="text-pure-white font-bold mb-2">✓ You're Free to Do Real Work</p>
                  <p className="text-ash text-sm font-medium">
                    Systems handle the grunt work. You show up for calls and client delivery. That's it. 10+ hours back in your week.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button 
              href="#application-form"
              variant="primary"
            >
              See If We're a Fit →
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="mb-20">
            <div className="accent-box mb-4">// CASE STUDIES</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
              Real Clients, Real Numbers
            </h2>
            <p className="text-xl text-ash font-bold mt-6">Here's exactly what we built and what happened.</p>
          </div>
          
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="border-4 border-steel p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="text-5xl font-black mb-6 text-smoke">01</div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-6">Service Business: Lost Lead Recovery</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">THE SITUATION</h4>
                      <p className="text-ash font-medium">
                        Local service business getting 20-30 leads per week. Owner was in the field all day. 
                        By the time he responded to inquiries (usually next day), 40% had already hired competitors.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">THE PROBLEM</h4>
                      <p className="text-ash font-medium">
                        No follow-up system. Manual responses. Leads coming in at all hours getting no response 
                        until business hours. Money bleeding out daily.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">WHAT WE BUILT</h4>
                      <ul className="space-y-3 text-ash font-medium">
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Instant automated response (under 60 seconds, 24/7)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>3-day follow-up email sequence with booking link</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>SMS notification for hot leads</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Calendar sync so customers book directly</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-t-4 border-steel pt-6">
                      <h4 className="text-xs uppercase tracking-widest font-black mb-4 text-pure-white">THE RESULT</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-4xl font-black mb-2">20%</p>
                          <p className="text-xs uppercase tracking-widest font-black text-ash">Revenue increase</p>
                        </div>
                        <div>
                          <p className="text-4xl font-black mb-2">Week 1</p>
                          <p className="text-xs uppercase tracking-widest font-black text-ash">Time to results</p>
                        </div>
                      </div>
                      <p className="text-ash text-sm font-medium mt-6">
                        That's an extra $12K in monthly revenue from leads that were already coming in. 
                        Zero new marketing spend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="border-4 border-steel p-10 md:p-16 bg-charcoal">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="text-5xl font-black mb-6 text-smoke">02</div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-6">Coaching Business: Conversion Optimization</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">THE SITUATION</h4>
                      <p className="text-ash font-medium">
                        Online coaching business spending $3K/month on ads. Getting traffic but conversions were 
                        terrible. Landing page was confusing. Offer wasn't clear. Money going down the drain.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">THE PROBLEM</h4>
                      <p className="text-ash font-medium">
                        Too many options. Unclear value proposition. Multi-step booking process losing people. 
                        Traffic was good—conversion was broken.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">WHAT WE BUILT</h4>
                      <ul className="space-y-3 text-ash font-medium">
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Rewrote offer to focus on one clear outcome</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Simplified landing page—one path, one CTA</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>A/B tested two variations for 2 weeks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Optimized booking flow (3 steps → 1 step)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-t-4 border-steel pt-6">
                      <h4 className="text-xs uppercase tracking-widest font-black mb-4 text-pure-white">THE RESULT</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-4xl font-black mb-2">36%</p>
                          <p className="text-xs uppercase tracking-widest font-black text-ash">Conversion boost</p>
                        </div>
                        <div>
                          <p className="text-4xl font-black mb-2">Same $</p>
                          <p className="text-xs uppercase tracking-widest font-black text-ash">Ad spend</p>
                        </div>
                      </div>
                      <p className="text-ash text-sm font-medium mt-6">
                        Same traffic. Better system. 36% more clients from the same ad budget. 
                        That's how you scale without burning cash.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 - Your Own Brand */}
            <div className="border-4 border-steel p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="text-5xl font-black mb-6 text-smoke">03</div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-6">My Own Brand: Buyhalfcow</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">THE SITUATION</h4>
                      <p className="text-ash font-medium">
                        Had an idea for a brand. Zero followers. Zero audience. Zero traction. 
                        Wanted to prove I could build demand from scratch.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">THE CHALLENGE</h4>
                      <p className="text-ash font-medium">
                        How do you go from nothing to something people actually care about? 
                        No paid ads. No existing audience. Just work.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">WHAT I DID</h4>
                      <ul className="space-y-3 text-ash font-medium">
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Built in public—posted daily, shared the process</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Created real value, not just promotional content</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Launched limited merch drop to test demand</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-pure-white font-black">→</span>
                          <span>Focused on community, not just followers</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-t-4 border-steel pt-6">
                      <h4 className="text-xs uppercase tracking-widest font-black mb-4 text-pure-white">THE RESULT</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-4xl font-black mb-2">7K</p>
                          <p className="text-xs uppercase tracking-widest font-black text-ash">Followers</p>
                        </div>
                        <div>
                          <p className="text-4xl font-black mb-2">26 Days</p>
                          <p className="text-xs uppercase tracking-widest font-black text-ash">From zero</p>
                        </div>
                      </div>
                      <p className="text-ash text-sm font-medium mt-6">
                        Sold out first merch drop. Proved I can build demand and community from nothing. 
                        That's the same skill I use to grow your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
                Ready to fix your systems?
              </h2>
              <p className="text-xl text-ash font-bold">
                Fill out the application below. I'll review and reach out within 24 hours if it's a fit.
              </p>
            </div>
            <BusinessApplicationForm 
              title="Apply for Business Automation"
              subtitle="Takes 3 minutes. I review every application personally."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
