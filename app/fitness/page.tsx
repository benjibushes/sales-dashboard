import React from 'react';
import { Metadata } from 'next';
import Button from '@/components/Button';
import FitnessApplicationForm from '@/components/FitnessApplicationForm';
import StickyBookButton from '@/components/StickyBookButton';
import QuickBookModal from '@/components/QuickBookModal';

export const metadata: Metadata = {
  title: 'Fitness Coaching',
  description: 'Build a disciplined, capable body. 1:1 training for professionals who value discipline over aesthetics.',
};

export default function FitnessPage() {
  return (
    <div className="min-h-screen">
      <StickyBookButton text="Apply for Coaching" />
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-5xl space-y-12">
            <div className="accent-box">// FITNESS & DISCIPLINE</div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase">
              Build a disciplined, capable body
            </h1>
            <p className="text-xl md:text-2xl text-ash font-bold max-w-3xl">
              No gimmicks. No quick fixes. Just real training for people who do hard things.
            </p>
            
            {/* Social Proof Banner */}
            <div className="flex flex-wrap gap-8 py-6 border-y-4 border-steel">
              <div>
                <p className="text-3xl font-black">6</p>
                <p className="text-xs uppercase tracking-widest font-black text-ash">Ultramarathons</p>
              </div>
              <div>
                <p className="text-3xl font-black">5 Years</p>
                <p className="text-xs uppercase tracking-widest font-black text-ash">Sober</p>
              </div>
              <div>
                <p className="text-3xl font-black">50 Miles</p>
                <p className="text-xs uppercase tracking-widest font-black text-ash">Through Mountains</p>
              </div>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-ash mb-4">
                CHOOSE YOUR PATH:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuickBookModal 
                  formType="fitness"
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
                Quick Book = 3 fields + instant calendar. Full Application = detailed questions for better fit assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="accent-box mb-4">// PROOF</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">What I've Actually Done</h2>
              <p className="text-xl text-ash font-bold mt-6">
                I don't coach theory. I coach what I've tested on myself.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="border-4 border-steel p-8 hover:border-pure-white transition-colors">
                <p className="text-5xl font-black mb-4">6</p>
                <p className="text-lg font-black uppercase mb-2">Ultramarathons</p>
                <p className="text-ash text-sm font-medium">50 miles through mountains. Alone with my thoughts. Six times. That builds mental toughness you can't fake.</p>
              </div>
              
              <div className="border-4 border-steel p-8 hover:border-pure-white transition-colors">
                <p className="text-5xl font-black mb-4">5</p>
                <p className="text-lg font-black uppercase mb-2">Years Sober</p>
                <p className="text-ash text-sm font-medium">Not with meetings or sponsors. With discipline systems that work when motivation is gone. Every. Single. Day.</p>
              </div>
              
              <div className="border-4 border-steel p-8 hover:border-pure-white transition-colors">
                <p className="text-5xl font-black mb-4">Multiple</p>
                <p className="text-lg font-black uppercase mb-2">Competitions</p>
                <p className="text-ash text-sm font-medium">Weightlifting. Not for trophies. To test myself. To prove the person I'm building can handle pressure.</p>
              </div>
            </div>

            <div className="border-4 border-pure-white p-10 md:p-16 mb-16">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-6">Training Philosophy</h3>
              <p className="text-xl text-ash font-medium leading-relaxed mb-8">
                Fitness is not about looking good in photos. It's about building a body and mind capable of handling what life throws at you. That takes discipline, not motivation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">CAPABILITY OVER AESTHETICS</h4>
                  <p className="text-ash text-sm font-medium">
                    Can you run 10 miles? Lift heavy things? Function at 4am? That matters more than abs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">SYSTEMS OVER MOTIVATION</h4>
                  <p className="text-ash text-sm font-medium">
                    You won't always feel like training. We build habits that work when you don't want to show up.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black mb-3 text-pure-white">DECADES, NOT WEEKS</h4>
                  <p className="text-ash text-sm font-medium">
                    This isn't a 12-week transformation. This is building strength and resilience for the long haul.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button 
                href="#application-form"
                variant="primary"
              >
                Apply for Coaching →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="accent-box mb-4">// WHAT YOU GET</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">The Outcome You're Building</h2>
              <p className="text-xl text-ash font-bold mt-6">
                This is what changes when you train with discipline, not motivation.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4">→ You Show Up When You Don't Want To</h3>
                <p className="text-ash font-medium leading-relaxed">
                  No more "I'll start Monday." No more skipping workouts because you're tired. You build the discipline to show up regardless of how you feel. That's the real transformation.
                </p>
              </div>
              
              <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4">→ Your Body Handles Real Stress</h3>
                <p className="text-ash font-medium leading-relaxed">
                  Long days don't wreck you. Carrying heavy things doesn't hurt you. You can push hard when it matters. Your body becomes a tool, not a limitation.
                </p>
              </div>
              
              <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4">→ You Prove to Yourself You Can Do Hard Things</h3>
                <p className="text-ash font-medium leading-relaxed">
                  Every workout you finish is proof. Proof you can be trusted. Proof you can handle pressure. Proof you're building someone capable. That confidence carries into everything else.
                </p>
              </div>
              
              <div className="border-4 border-steel p-10 hover:border-pure-white transition-colors">
                <h3 className="text-2xl font-black uppercase mb-4">→ You Build Trust With Yourself</h3>
                <p className="text-ash font-medium leading-relaxed">
                  You say you'll train, you train. You say you'll hit a goal, you hit it. You stop breaking promises to yourself. That's how you rebuild from rock bottom. That's how you become reliable.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button 
                href="#application-form"
                variant="primary"
              >
                See If You're Ready →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="accent-box mb-4">// WHO THIS IS FOR</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">Is This For You?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-4 border-pure-white p-10">
                <h3 className="text-2xl font-black uppercase mb-6 text-pure-white">✓ This Is For You If:</h3>
                <ul className="space-y-4 text-ash font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black">→</span>
                    <span>You want to build real capability, not just look good</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black">→</span>
                    <span>You value discipline over motivation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black">→</span>
                    <span>You're ready to do the work, even when it's hard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black">→</span>
                    <span>You want coaching that tells you the truth, not what you want to hear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pure-white font-black">→</span>
                    <span>You're building for decades, not weeks</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-4 border-steel p-10">
                <h3 className="text-2xl font-black uppercase mb-6 text-smoke">✗ This Is NOT For You If:</h3>
                <ul className="space-y-4 text-ash font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-smoke font-black">→</span>
                    <span>You want a quick-fix transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-smoke font-black">→</span>
                    <span>You need constant motivation and hand-holding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-smoke font-black">→</span>
                    <span>You're looking for trendy workouts or biohacks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-smoke font-black">→</span>
                    <span>You want someone to coddle you and make excuses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-smoke font-black">→</span>
                    <span>You're not serious about doing hard things</span>
                  </li>
                </ul>
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
                Ready to build real discipline?
              </h2>
              <p className="text-xl text-ash font-bold mb-4">
                Apply for 1:1 coaching. Limited spots available.
              </p>
              <p className="text-ash font-medium">
                Not for everyone. I only work with people who are serious.
              </p>
            </div>
            <FitnessApplicationForm 
              title="Apply for Fitness Coaching"
              subtitle="Be honest with your answers. I'll reach out within 24-48 hours if you're a fit."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
