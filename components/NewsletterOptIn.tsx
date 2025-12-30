"use client";

import React, { useState } from 'react';

interface NewsletterOptInProps {
  variant?: 'inline' | 'block';
  placeholder?: string;
}

export default function NewsletterOptIn({ variant = 'block', placeholder = 'Your email' }: NewsletterOptInProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using business form for newsletter signups
      const response = await fetch('https://formspree.io/f/xykyklwq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          list: 'newsletter',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border-4 border-pure-white p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-sm font-black uppercase tracking-widest">
          You're in. Check your email.
        </p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="input-field flex-1"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : 'Join'}
        </button>
      </form>
    );
  }

  return (
    <div className="border-4 border-steel p-10 md:p-12">
      <h3 className="text-2xl font-black uppercase mb-4">Stay Updated</h3>
      <p className="text-ash font-medium mb-8">
        Join the list. Get real insights on building businesses, discipline, and doing hard things. No spam. No BS.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="input-field"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full"
        >
          {status === 'loading' ? 'Joining...' : 'Join Newsletter'}
        </button>
        {status === 'error' && (
          <p className="text-smoke text-xs uppercase tracking-widest font-black">
            Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
}

