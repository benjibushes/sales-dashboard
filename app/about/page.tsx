import React from 'react';
import { Metadata } from 'next';
import Button from '@/components/Button';
import StatsGrid from '@/components/StatsGrid';

export const metadata: Metadata = {
  title: 'About',
  description: 'From rock bottom to ultramarathons. From addiction to building businesses. Always moving. Always building. This is how I learned that nobody is coming to save me.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl space-y-8">
            <div className="accent-box animate-fade-in-up">// THE REAL STORY</div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] uppercase animate-fade-in-up delay-100">
              I&apos;m Ben.
            </h1>
            <p className="text-xl text-ash font-medium max-w-3xl animate-fade-in-up delay-200">
              5 years sober. 6 ultramarathons. Multiple businesses built. Always moving. Always building. I died before I learned that nobody was coming to save me.
            </p>
          </div>
        </div>
      </section>

      {/* The Bottom */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 animate-fade-in-up">The Bottom</h2>
            <div className="space-y-6 text-lg text-ash font-medium leading-relaxed animate-fade-in-up delay-100">
              <p>
                I literally died. Not metaphorically. Actually died.
              </p>
              <p>
                Eight days into a binge, I met the devil. I am not being poetic. When you push your body that far, when you are that close to the edge, you see things. You feel things. The darkness is real. And it almost took me.
              </p>
              <p>
                I woke up in a hospital bed, tubes in my arms, nurses looking at me like they had seen a ghost. Because they had. I was not supposed to make it.
              </p>
              <p>
                That is when it hit me: <span className="text-pure-white font-black">Nobody was coming to save me.</span>
              </p>
              <p>
                Not my family. Not my friends. Not God. Not some intervention or program or twelve steps. If I was going to survive, if I was going to live, I had to do it myself. I had to build discipline where there was none. I had to choose hard over easy, every single day, forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Rebuild */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 animate-fade-in-up">The Rebuild</h2>
            <div className="space-y-6 text-lg text-ash font-medium leading-relaxed animate-fade-in-up delay-100">
              <p>
                Five years sober now. Not because I went to meetings. Not because I had a sponsor. Because I built systems. Because I chose discipline over motivation. Because I made it impossible to fail.
              </p>
              <p>
                I was fat. Out of shape. Weak. So I started running. Then I kept running. Then I ran ultramarathons. Six of them. 50 miles through mountains, alone with my thoughts, proving to myself that I could handle hard things.
              </p>
              <p>
                I competed in weightlifting competitions. Not because I wanted to win. Because I needed to test myself. Because I needed to know that the person I was building could handle pressure.
              </p>
              <p>
                Every race. Every lift. Every morning I showed up when I did not feel like it. That was me rebuilding trust with myself. Proving I was not that person anymore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Proof - Stats */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="accent-box mb-4">// THE NUMBERS</div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
                Proof I Can Build
              </h2>
              <p className="text-lg text-ash font-medium">
                Anyone can talk. Here is what I actually did.
              </p>
            </div>
            
            <StatsGrid 
              stats={[
                { number: '5', label: 'Years Sober', sublabel: 'And Counting' },
                { number: '6', label: 'Ultramarathons', sublabel: 'Completed' },
                { number: '20%', label: 'Revenue Increase', sublabel: 'In One Week' },
                { number: '36%', label: 'Conversion Boost', sublabel: 'Client Result' },
              ]}
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* Building Businesses */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">Building Buyhalfcow From Zero</h2>
              <div className="space-y-6 text-lg text-ash font-medium leading-relaxed">
                <p>
                  I built a brand called Buyhalfcow from scratch. Zero followers to 7,000 in 26 days. Not with ads. Not with tricks. With real content, real value, and real work.
                </p>
                <p className="text-pure-white font-bold">
                  Here's exactly what I did:
                </p>
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black text-xl">→</span>
                    <span><span className="font-bold text-pure-white">Built in public.</span> Posted daily about the process. No secrets. No manufactured scarcity. Just transparency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black text-xl">→</span>
                    <span><span className="font-bold text-pure-white">Created real value.</span> Shared tactical insights, not motivational fluff. People followed because they learned something.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black text-xl">→</span>
                    <span><span className="font-bold text-pure-white">Tested demand early.</span> Launched limited merch drop before I had "enough" followers. Sold out. Proved the concept.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black text-xl">→</span>
                    <span><span className="font-bold text-pure-white">Focused on community, not vanity metrics.</span> Engaged with every comment. Built relationships. Treated it like a real business.</span>
                  </li>
                </ul>
                <p>
                  That taught me everything I know about building brands, creating demand, and executing fast. It also proved that I could build something people actually wanted—from nothing.
                </p>
                <div className="border-4 border-steel p-8 mt-8">
                  <p className="text-pure-white font-black uppercase text-xs tracking-widest mb-4">WHY THIS MATTERS TO YOU</p>
                  <p className="text-ash font-medium">
                    The same skills that grow a brand from zero grow your business. Creating demand. Building trust. 
                    Converting attention into revenue. That's what I bring when I work on your systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-100">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">Fixing Broken Business Systems</h2>
              <div className="space-y-8 text-lg text-ash font-medium leading-relaxed">
                <div>
                  <h3 className="text-2xl font-black uppercase mb-4 text-pure-white">Service Business: Lost Lead Recovery</h3>
                  <p className="mb-4">
                    One client was bleeding revenue. Systems were broken. Follow-ups were not happening. Leads were falling through cracks.
                  </p>
                  <p className="mb-4">
                    <span className="font-bold text-pure-white">The exact problem:</span> 40% of leads never got a response. By the time the owner saw inquiries, prospects had already hired competitors. That's money walking out the door daily.
                  </p>
                  <p className="mb-4">
                    <span className="font-bold text-pure-white">What I built:</span> Automated instant response system. 3-day follow-up email sequence. SMS alerts for hot leads. Calendar booking integration.
                  </p>
                  <p className="mb-6">
                    <span className="font-bold text-pure-white">The result:</span> Revenue increased <span className="text-pure-white font-black">20% in one week</span>. That's an extra $12K per month from leads that were already coming in. Zero new marketing spend.
                  </p>
                </div>
                
                <div className="border-t-4 border-steel pt-8">
                  <h3 className="text-2xl font-black uppercase mb-4 text-pure-white">Coaching Business: Conversion Optimization</h3>
                  <p className="mb-4">
                    Another client was running ads with a terrible offer. Getting traffic but conversions were brutal.
                  </p>
                  <p className="mb-4">
                    <span className="font-bold text-pure-white">The exact problem:</span> Landing page was confusing. Offer wasn't clear. Booking process had too many steps. Traffic was good—conversion was broken.
                  </p>
                  <p className="mb-4">
                    <span className="font-bold text-pure-white">What I did:</span> Audited the entire funnel. Rewrote the offer to focus on one clear outcome. Simplified landing page. A/B tested two variations. Optimized booking flow from 3 steps to 1.
                  </p>
                  <p className="mb-6">
                    <span className="font-bold text-pure-white">The result:</span> Conversions went up <span className="text-pure-white font-black">36%</span>. Same traffic. Same ad spend. Better systems. That's how you scale without burning cash.
                  </p>
                </div>
                
                <div className="border-4 border-steel p-8 mt-8">
                  <p className="text-pure-white font-black uppercase text-xs tracking-widest mb-4">THE PATTERN</p>
                  <p className="text-ash font-medium">
                    I find what's broken. I fix it. I measure the result. No fluff. No theory. No six-month roadmaps. 
                    Just fast, focused execution on what actually moves the needle. That's what I do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now: Always Moving */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">Now: Always Moving</h2>
            <div className="space-y-6 text-lg text-ash font-medium leading-relaxed">
              <p>
                I do not stay in one place. I am always moving. Always on a new adventure. Still running. Still lifting. Still finding the next challenge. Because the day I stop testing myself is the day I start sliding backward.
              </p>
              <p>
                I help service businesses fix their broken systems. I train people who want to build real discipline. I am building the Odds philosophy for people who refuse to play it safe.
              </p>
              <p>
                Montana taught me grit. Rock bottom taught me that nobody is coming to save you. The last five years taught me that discipline beats motivation every single time. Movement keeps me sharp.
              </p>
              <p className="text-pure-white font-black text-xl pt-4">
                That is what I bring to everything I build. That is what I bring to everyone I work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Stand For */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
                What I Stand For
              </h2>
              <p className="text-lg text-ash font-medium">No corporate speak. Just truth.</p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Nobody is coming to save you',
                  description: 'The sooner you accept this, the sooner you can start building.'
                },
                {
                  title: 'Discipline over motivation',
                  description: 'Motivation fades. Discipline compounds. Systems beat feelings.'
                },
                {
                  title: 'Do hard things',
                  description: 'Comfort breeds weakness. Challenge builds character.'
                },
                {
                  title: 'Build over consume',
                  description: 'Stop reading about it. Stop watching videos. Start building.'
                },
                {
                  title: 'Proof over promises',
                  description: 'Show me what you built. Numbers do not lie. Results speak.'
                },
                {
                  title: 'Long-term over hype',
                  description: 'I am building for decades. Quick wins fade. Discipline lasts.'
                }
              ].map((value, index) => (
                <div key={index} className="border-4 border-steel p-6 md:p-8 flex items-start gap-6 hover:border-pure-white transition-all hover-lift">
                  <span className="text-pure-white text-2xl font-black mt-1">→</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase mb-2">{value.title}</h3>
                    <p className="text-ash font-medium">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              Ready to do the work?
            </h2>
            <p className="text-lg text-ash font-medium">
              I only work with people who are serious. No hand-holding. No excuses. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 animate-fade-in-up delay-200">
              <Button variant="primary" href="/work">
                Fix My Business
              </Button>
              <Button variant="secondary" href="/fitness">
                Build Discipline
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
