import React from 'react';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - North Face Bold */}
      <section className="section-padding border-b-4 border-steel relative">
        <div className="container-custom">
          <div className="max-w-6xl space-y-16 stagger-children">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] uppercase text-glow-hover">
                I build businesses, bodies, and brands that can handle{' '}
                <span className="inline-block border-4 border-pure-white px-4 py-2 hover-scale cursor-pointer">pressure</span>.
              </h1>
              <p className="text-xl md:text-2xl text-ash font-bold max-w-3xl">
                Web systems, real work, and discipline for people who actually want to win.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary" href="/work">
                Work With Me
              </Button>
              <Button variant="secondary" href="/fitness">
                Fitness Coaching
              </Button>
            </div>
            
            <div className="divider progress-bar" />
            
            <p className="text-smoke text-xs uppercase tracking-widest font-black">
              Always Moving → Building for the long haul
            </p>
          </div>
        </div>
      </section>

      {/* What I Actually Do - 3 Pillars */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="mb-20">
            <div className="accent-box mb-4">// 03 PILLARS</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight max-w-4xl">
              What I Actually Do
            </h2>
            <p className="text-xl text-ash font-bold mt-6">Three pillars. One focused approach to building things that last.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            <FeatureCard
              title="Business Systems"
              description="Simple, reliable digital systems that get you more customers and less chaos."
              bullets={[
                'Never lose a 3am lead again—automated response in 60 seconds',
                'Turn 40% of ghost leads into booked calls with follow-up sequences',
                'Calendar fills while you sleep—no more phone tag',
                'Built with proven tools that actually work'
              ]}
              ctaText="Work With Me"
              ctaHref="/work"
            />
            
            <FeatureCard
              title="Fitness & Discipline"
              description="Build a body and mind capable of handling what life throws at you."
              bullets={[
                'Train like you are running 50 miles—build real capability',
                '1:1 coaching that holds you accountable when motivation fades',
                'Systems that make discipline automatic, not a daily struggle',
                'No quick fixes—built for the long haul'
              ]}
              ctaText="Fitness Coaching"
              ctaHref="/fitness"
            />
            
            <FeatureCard
              title="Odds Lifestyle"
              description="A philosophy for people who do hard things and laugh at the odds."
              bullets={[
                'Choose hard over easy—on purpose',
                'Build things that matter instead of consuming content',
                'Real masculinity: grit, discipline, and showing up',
                'Play the long game while everyone chases shortcuts'
              ]}
              ctaText="Explore Odds"
              ctaHref="/odds"
            />
          </div>
        </div>
      </section>

      {/* Proof & Credibility - Outcome-Focused Case Studies */}
      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="mb-20">
            <div className="accent-box mb-4">// PROOF</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight max-w-5xl">
              Real problems. Real solutions. Real results.
            </h2>
            <p className="text-xl text-ash font-bold mt-6">Here is what happens when you fix what is actually broken.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
              <div className="text-6xl font-black mb-6 text-smoke">01</div>
              <h3 className="text-2xl font-black uppercase mb-4">Lost Lead Recovery</h3>
              <div className="space-y-4 text-ash font-medium text-sm mb-6">
                <p className="text-pure-white font-bold">THE PROBLEM:</p>
                <p>40% of leads never got followed up. They would inquire at 2am, business owner would see it Tuesday, lead already hired someone else.</p>
                <p className="text-pure-white font-bold mt-4">THE FIX:</p>
                <p>Automated instant response + 3-day follow-up sequence + booking link.</p>
              </div>
              <div className="border-t-4 border-steel pt-6">
                <p className="text-4xl font-black mb-2">20%</p>
                <p className="text-xs uppercase tracking-widest font-black">Revenue increase in week 1</p>
              </div>
            </div>
            
            <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
              <div className="text-6xl font-black mb-6 text-smoke">02</div>
              <h3 className="text-2xl font-black uppercase mb-4">Conversion Optimization</h3>
              <div className="space-y-4 text-ash font-medium text-sm mb-6">
                <p className="text-pure-white font-bold">THE PROBLEM:</p>
                <p>Coaching business running ads to a confusing offer. Traffic was good, conversions were terrible.</p>
                <p className="text-pure-white font-bold mt-4">THE FIX:</p>
                <p>Rewrote offer, simplified booking flow, A/B tested landing page.</p>
              </div>
              <div className="border-t-4 border-steel pt-6">
                <p className="text-4xl font-black mb-2">36%</p>
                <p className="text-xs uppercase tracking-widest font-black">Conversion increase, same traffic</p>
              </div>
            </div>
            
            <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
              <div className="text-6xl font-black mb-6 text-smoke">03</div>
              <h3 className="text-2xl font-black uppercase mb-4">Brand From Zero</h3>
              <div className="space-y-4 text-ash font-medium text-sm mb-6">
                <p className="text-pure-white font-bold">THE PROBLEM:</p>
                <p>Had an idea for Buyhalfcow brand. Zero followers. Zero traction. Nobody knew it existed.</p>
                <p className="text-pure-white font-bold mt-4">THE FIX:</p>
                <p>Built in public. Posted daily. Created real value. Launched merch drop.</p>
              </div>
              <div className="border-t-4 border-steel pt-6">
                <p className="text-4xl font-black mb-2">7K</p>
                <p className="text-xs uppercase tracking-widest font-black">Followers in 26 days, sold out merch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="accent-box mb-6">// BUILT IN MONTANA</div>
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
                  Always on the move.
                </h2>
                <p className="text-lg text-ash font-medium mb-8 leading-relaxed">
                  I am a builder who values discipline, authenticity, and doing hard things that matter. 
                  I help service businesses fix their systems, train people who want real discipline, 
                  and build things worth building.
                </p>
                <p className="text-ash font-bold uppercase text-xs tracking-widest mb-8">
                  No guru nonsense. No corporate speak. Just work.
                </p>
                <Button variant="secondary" href="/about">
                  My Story
                </Button>
              </div>
              
              <div className="border-4 border-steel p-12 space-y-6">
                <div className="border-b-4 border-steel pb-6">
                  <h4 className="font-black uppercase text-xs tracking-widest mb-3">Values</h4>
                  <ul className="space-y-2 text-ash font-medium text-sm">
                    <li>→ Authenticity over polish</li>
                    <li>→ Long-term thinking</li>
                    <li>→ Grit over comfort</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-3">Approach</h4>
                  <ul className="space-y-2 text-ash font-medium text-sm">
                    <li>→ Build over consume</li>
                    <li>→ Discipline over motivation</li>
                    <li>→ Real work over hacks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-20 flex-wrap gap-8">
            <div>
              <div className="accent-box mb-4">// JOURNAL</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
                Recent Thoughts
              </h2>
            </div>
            <Link 
              href="/journal" 
              className="text-pure-white hover:text-smoke font-black uppercase text-xs tracking-widest border-b-2 border-pure-white pb-1"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PostCard
              title="Why I Build in Public"
              excerpt="Most people hide their work until it's perfect. I think that's a mistake. Here's why building in public makes you better, faster."
              date="Dec 20, 2024"
              readTime="5 min read"
              slug="why-i-build-in-public"
            />
            <PostCard
              title="Systems Over Motivation"
              excerpt="Motivation is a lie. It comes and goes like the weather. Systems are what separate people who talk from people who build."
              date="Dec 15, 2024"
              readTime="6 min read"
              slug="systems-over-motivation"
            />
            <PostCard
              title="The Odds Mindset"
              excerpt="We're here to laugh at the odds and build lives worth living. Not to play it safe, follow formulas, or wait for permission."
              date="Dec 10, 2024"
              readTime="4 min read"
              slug="the-odds-mindset"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
              Fix the part that is holding everything else back.
            </h2>
            <p className="text-xl text-ash font-bold">
              Whether it is your business systems or your discipline-start here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button variant="primary" href="/work">
                Fix my business
              </Button>
              <Button variant="secondary" href="/fitness">
                Fix my discipline
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
