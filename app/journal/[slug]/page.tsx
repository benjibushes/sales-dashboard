import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/Button';

// This is a placeholder structure. In production, you'd read from MDX files or a CMS
const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  'why-i-build-in-public': {
    title: 'Why I Build in Public',
    date: 'December 20, 2024',
    readTime: '5 min read',
    content: `
Most people hide their work until it's perfect. They work in private, polish everything, and only share the finished product. I used to do that too. But I think it's a mistake.

## Building in Public Makes You Better

When you build in public, you're accountable to more than yourself. You can't quietly quit. You can't hide behind perfectionism. You have to ship, iterate, and improve-because people are watching.

That pressure is a feature, not a bug. It forces you to show up consistently. To finish things. To put work out into the world even when it's not perfect.

## You Learn Faster

Building in public means you get feedback early. Real feedback from real people-not just your own head telling you something needs to be perfect before you ship it.

You find out what resonates. What people actually care about. What's valuable versus what you *think* is valuable. And you adjust.

## It Builds Trust

People don't trust polished perfection anymore. They trust authenticity. They trust the journey. When you build in public, people see the work. They see the struggle. They see you figuring it out.

That's more valuable than a perfectly polished final product that appeared out of nowhere.

## The Risk Is Overstated

"But what if people steal my idea?" Cool. Let them try. Ideas are cheap. Execution is everything. And if you're building in public, you're ahead because you're actually doing the work while they're still thinking about it.

"But what if I fail publicly?" Good. Fail fast. Learn. Adjust. Build again. That's how you get better.

## How I'm Doing It

This site. This journal. The Odds philosophy. I'm building all of it in public. Sharing the process. The wins. The mistakes. The pivots.

Because I'd rather build something real with people following along than hide until it's "perfect" and never ship.

If you're building something, consider doing it in public. It's uncomfortable. But that's the point.

Build in public. Ship fast. Iterate. Repeat.
    `
  },
  'systems-over-motivation': {
    title: 'Systems Over Motivation',
    date: 'December 15, 2024',
    readTime: '6 min read',
    content: `
Motivation is a lie.

Not because it doesn't exist-it does. But because it's unreliable. It comes and goes like the weather. You feel motivated on Monday, lazy by Wednesday, and burnt out by Friday.

If you're relying on motivation to build your business, your body, or your life-you're going to fail.

## Motivation Fades. Systems Don't.

The difference between people who talk and people who build isn't motivation. It's systems.

Systems are the boring, repeatable processes that work whether you feel like it or not. They're the structure that keeps you moving forward when motivation disappears.

You don't *feel* like training? Your system says you train at 6 AM. So you train.

You don't *feel* like following up with leads? Your automation system does it for you.

You don't *feel* like writing? Your content system says you write 500 words every morning. So you write.

## How to Build Systems That Last

**1. Start small.** Don't build a complex system that requires willpower to maintain. Start with one simple habit. One repeatable process. Build from there.

**2. Remove decisions.** Every decision is a point of failure. Your system should tell you exactly what to do and when to do it. No thinking required.

**3. Make it easy to start.** The hardest part is starting. Make the first step so easy you can't say no. Gym clothes laid out the night before. Calendar link ready to send. First sentence of your post already written.

**4. Track it.** You can't improve what you don't measure. Track your system. Did you do the thing? Check the box. Don't break the chain.

## Systems in Business

Your business shouldn't depend on your motivation to respond to leads, follow up with customers, or book appointments.

Build systems:
- Auto-reply to new leads in seconds
- Automated appointment reminders
- Review request sequences that run on autopilot
- Booking flows that work 24/7

Your business should run even when you don't feel like it. That's what systems do.

## Systems in Fitness

You don't need motivation to train. You need a system.

A training plan that tells you exactly what to do. A calendar that blocks out training time. A habit of showing up at the same time every day.

Discipline isn't about feeling motivated. It's about having a system and following it.

## Systems in Life

Everything compounds. Your business systems. Your training systems. Your content systems. Your sleep systems.

People who win long-term aren't more motivated. They just have better systems.

Build systems. Show up. Let the work compound.
    `
  },
  'the-odds-mindset': {
    title: 'The Odds Mindset',
    date: 'December 10, 2024',
    readTime: '4 min read',
    content: `
We are here to laugh at the odds-and build lives worth living.

That's the core of the Odds philosophy. Not a slogan. Not a tagline. A way of thinking.

## What Odds Means

**Odds** is for the people who choose the hard path because it's the right one.

Who build instead of consume. Who do uncomfortable things because comfort breeds weakness. Who value grit, authenticity, and long-term thinking in a world obsessed with hacks and shortcuts.

It's not about toxic positivity or grinding yourself into dust. It's about building something real. A life that can handle pressure. A body that can carry the load. A mind that doesn't quit when things get hard.

## The Four Pillars

**1. Grit Over Comfort**

Do the hard thing. Not because it's glamorous, but because it builds you. Comfort is the enemy of growth. We choose hard over easy, every time.

**2. Build Over Consume**

Stop consuming content. Start building things. Real businesses. Real skills. Real strength. The world doesn't need more consumers-it needs more builders.

**3. Authentic Over Perfect**

No corporate speak. No guru personas. Just real people doing real work. We value honesty, rawness, and authenticity over polished perfection.

**4. Long-Term Over Hype**

We're not here for the quick win. We're building for decades. Slow growth. Sustainable discipline. Long-term thinking in a short-term world.

## Who This Is For

You might be one of us if:
- You're tired of fake guru culture and empty motivation
- You'd rather do hard work than search for shortcuts
- You value discipline, grit, and authentic masculinity
- You're building something real-business, body, life
- You're okay being uncomfortable if it makes you better

## What's Next

Right now, Odds is a philosophy. A way of thinking and building. But it's growing into something bigger-a community of people who do hard things and laugh at the odds.

Apparel coming soon. Events coming soon. A real community of builders, not consumers.

If this resonates, stick around. Follow the journal. Build with us.

Laugh at the odds. Build something real.
    `
  }
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = posts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  // Get all post slugs for prev/next navigation
  const postSlugs = Object.keys(posts);
  const currentIndex = postSlugs.indexOf(params.slug);
  const prevSlug = currentIndex > 0 ? postSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < postSlugs.length - 1 ? postSlugs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            <Link 
              href="/journal" 
              className="text-orange-600 hover:text-orange-600/80 font-semibold inline-flex items-center"
            >
              ← Back to Journal
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                
                // Handle bullet points
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="space-y-2 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          <span className="text-gray-500">{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Handle bold text
                if (paragraph.startsWith('**')) {
                  const text = paragraph.replace(/\*\*/g, '');
                  return (
                    <p key={index} className="text-lg text-gray-500 leading-relaxed my-6">
                      <strong className="text-stone-100 font-semibold">{text}</strong>
                    </p>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p key={index} className="text-lg text-gray-500 leading-relaxed my-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Post Navigation */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              {prevSlug ? (
                <Link 
                  href={`/journal/${prevSlug}`}
                  className="text-orange-600 hover:text-orange-600/80 font-semibold inline-flex items-center"
                >
                  ← Previous Post
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextSlug ? (
                <Link 
                  href={`/journal/${nextSlug}`}
                  className="text-orange-600 hover:text-orange-600/80 font-semibold inline-flex items-center"
                >
                  Next Post →
                </Link>
              ) : (
                <div></div>
              )}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="secondary" href="/journal">
                View All Posts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all posts
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

