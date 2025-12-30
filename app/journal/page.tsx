import React from 'react';
import { Metadata } from 'next';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Thoughts on building businesses, discipline, and doing hard things. Raw, unfiltered, and always real.',
};

const posts = [
  {
    title: 'Why I Build in Public',
    excerpt: 'Most people hide their work until it is perfect. I think that is a mistake. Here is why building in public makes you better, faster, and more accountable to the work.',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    slug: 'why-i-build-in-public'
  },
  {
    title: 'Systems Over Motivation',
    excerpt: 'Motivation is a lie. It comes and goes like the weather. Systems are what separate people who talk from people who build. Here is how to build systems that last.',
    date: 'Dec 15, 2024',
    readTime: '6 min read',
    slug: 'systems-over-motivation'
  },
  {
    title: 'The Odds Mindset',
    excerpt: 'We are here to laugh at the odds and build lives worth living. Not to play it safe, follow formulas, or wait for permission. This is what Odds means to me.',
    date: 'Dec 10, 2024',
    readTime: '4 min read',
    slug: 'the-odds-mindset'
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding border-b-4 border-steel">
        <div className="container-custom">
          <div className="max-w-5xl space-y-12">
            <div className="accent-box">// JOURNAL</div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] uppercase">
              Journal
            </h1>
            <p className="text-xl md:text-2xl text-ash font-bold max-w-3xl">
              Thoughts on building businesses, discipline, and doing hard things.
              <br className="hidden md:block" />
              Raw, unfiltered, and always real.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-4 border-steel bg-charcoal">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-smoke text-sm uppercase tracking-widest font-black">
              More posts coming soon - Building in public means you see the journey as it happens
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
