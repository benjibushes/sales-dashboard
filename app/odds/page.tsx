import React from 'react';
import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Odds',
  description: 'We are here to laugh at the odds and build lives worth living. A philosophy for people who do hard things.',
};

export default function OddsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-6xl space-y-16">
            <div className="accent-box">// THE ODDS PHILOSOPHY</div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] uppercase">
              We are here to laugh at the odds and build lives worth living.
            </h1>
            <p className="text-xl md:text-2xl text-ash font-bold max-w-4xl">
              A philosophy for people who do hard things. No gurus. No shortcuts. Just grit.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20">
              <div className="accent-box mb-4">// PHILOSOPHY</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
                What Odds Means
              </h2>
              <p className="text-xl text-ash font-bold mt-6">It's not a brand. It's a way of moving through the world.</p>
            </div>
            
            <div className="space-y-8 mb-16">
              <div className="border-4 border-steel p-10 md:p-16">
                <p className="text-xl text-ash font-medium leading-relaxed mb-6">
                  Odds is for the people who choose the hard path because it's the right one. Who build instead of consume. 
                  Who do uncomfortable things because comfort breeds weakness.
                </p>
                <p className="text-xl text-ash font-medium leading-relaxed">
                  It's not about being reckless. It's about being deliberate. Choosing challenge. Laughing when everyone else 
                  says it's impossible. Building when it would be easier to quit.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-4xl font-black uppercase mb-10">What Living The Odds Actually Looks Like</h3>
              
              <div className="space-y-6">
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                  <h4 className="text-2xl font-black uppercase mb-4 text-pure-white">→ You Choose Hard Over Easy</h4>
                  <p className="text-ash font-medium leading-relaxed">
                    When everyone takes the shortcut, you take the long road. Not because you're masochistic. 
                    Because you know the hard path builds something the easy path never will. Character. Capability. Trust with yourself.
                  </p>
                </div>
                
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                  <h4 className="text-2xl font-black uppercase mb-4 text-pure-white">→ You Build More Than You Consume</h4>
                  <p className="text-ash font-medium leading-relaxed">
                    You're not watching endless videos on "how to build." You're building. Creating. Testing. Shipping. 
                    The world doesn't need more consumers. It needs more builders. You're one of them.
                  </p>
                </div>
                
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                  <h4 className="text-2xl font-black uppercase mb-4 text-pure-white">→ You Embrace Authentic Masculinity</h4>
                  <p className="text-ash font-medium leading-relaxed">
                    Not toxic. Not performative. Real masculinity: discipline, responsibility, protecting what matters, 
                    building instead of destroying. Showing up. Doing hard things. Being someone who can be counted on.
                  </p>
                </div>
                
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                  <h4 className="text-2xl font-black uppercase mb-4 text-pure-white">→ You Play the Long Game</h4>
                  <p className="text-ash font-medium leading-relaxed">
                    Everyone wants quick wins. You're building for decades. You understand that real success compounds slowly. 
                    You don't chase hacks. You build systems that last. You're patient and relentless at the same time.
                  </p>
                </div>
                
                <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                  <h4 className="text-2xl font-black uppercase mb-4 text-pure-white">→ You Laugh When Others Doubt</h4>
                  <p className="text-ash font-medium leading-relaxed">
                    "That's impossible." "You can't do that." "The odds are against you." Good. You don't argue. 
                    You smile, get back to work, and prove them wrong with results. Not words. Results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="accent-box mb-4">// EXAMPLES</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                This Is What It Looks Like In Practice
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-4 border-steel p-10">
                <div className="text-5xl font-black mb-4 text-smoke">→</div>
                <h3 className="text-xl font-black uppercase mb-4">Running Ultramarathons</h3>
                <p className="text-ash font-medium leading-relaxed">
                  50 miles through mountains. Alone with your thoughts. Nobody's watching. Nobody cares. 
                  You do it anyway because it proves you can handle hard things.
                </p>
              </div>
              
              <div className="border-4 border-steel p-10">
                <div className="text-5xl font-black mb-4 text-smoke">→</div>
                <h3 className="text-xl font-black uppercase mb-4">Building From Zero</h3>
                <p className="text-ash font-medium leading-relaxed">
                  Starting a brand with zero followers. Launching a business with no "proven model." 
                  Creating when you don't know if it'll work. That's living the odds.
                </p>
              </div>
              
              <div className="border-4 border-steel p-10">
                <div className="text-5xl font-black mb-4 text-smoke">→</div>
                <h3 className="text-xl font-black uppercase mb-4">Five Years Sober</h3>
                <p className="text-ash font-medium leading-relaxed">
                  Rebuilding from rock bottom. Choosing discipline over escape. Day after day. 
                  Year after year. No shortcuts. Just work.
                </p>
              </div>
              
              <div className="border-4 border-steel p-10">
                <div className="text-5xl font-black mb-4 text-smoke">→</div>
                <h3 className="text-xl font-black uppercase mb-4">Always Moving</h3>
                <p className="text-ash font-medium leading-relaxed">
                  Never settling. Always on the next adventure. Not running from something. 
                  Running toward what's next. Because staying comfortable is how you die slowly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-tight">
              Laugh at the odds. Build something real.
            </h2>
            <p className="text-xl text-ash font-bold max-w-2xl mx-auto">
              This is for the people who refuse to play it safe. Who choose the hard path. Who build lives worth living.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button variant="primary" href="/about">
                Read My Story
              </Button>
              <Button variant="secondary" href="/journal">
                Read The Journal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
