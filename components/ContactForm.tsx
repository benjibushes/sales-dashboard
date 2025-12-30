"use client";

import React, { useState } from 'react';
import Button from './Button';

interface ContactFormProps {
  formType?: 'business' | 'fitness' | 'general';
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ formType = 'general', title, subtitle }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Get the correct Formspree endpoint based on form type
      const formEndpoints = {
        business: 'https://formspree.io/f/xykyklwq',
        fitness: 'https://formspree.io/f/xzdbdyrn',
        general: 'https://formspree.io/f/xykyklpq', // Discovery call
      };

      const response = await fetch(formEndpoints[formType], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="border-4 border-steel p-10 md:p-16 bg-charcoal">
      {title && <h3 className="text-3xl font-black uppercase mb-4">{title}</h3>}
      {subtitle && <p className="text-ash font-medium mb-8">{subtitle}</p>}
      
      {status === 'success' ? (
        <div className="border-4 border-pure-white p-12 text-center">
          <div className="text-6xl mb-6">✓</div>
          <h4 className="text-2xl font-black uppercase mb-4">Message Sent</h4>
          <p className="text-ash font-medium mb-8">
            I'll get back to you within 24-48 hours. Check your email for confirmation.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-pure-white font-black uppercase text-xs tracking-widest border-b-2 border-pure-white pb-1"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest font-black mb-3">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest font-black mb-3">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-black mb-3">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="(555) 123-4567"
            />
          </div>

          {formType === 'business' && (
            <div>
              <label htmlFor="business" className="block text-xs uppercase tracking-widest font-black mb-3">
                Business Name
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="input-field"
                placeholder="Your Business"
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest font-black mb-3">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="textarea-field"
              placeholder={
                formType === 'fitness'
                  ? 'Tell me about your fitness goals and current situation...'
                  : 'What are you looking to build or fix?'
              }
            />
          </div>

          {status === 'error' && (
            <div className="border-4 border-smoke p-6">
              <p className="text-smoke font-bold uppercase text-xs tracking-widest">
                Something went wrong. Please try again or email me directly.
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>

          <p className="text-xs text-smoke uppercase tracking-widest font-black text-center">
            I respond to every real inquiry within 24-48 hours
          </p>
        </form>
      )}
    </div>
  );
}

