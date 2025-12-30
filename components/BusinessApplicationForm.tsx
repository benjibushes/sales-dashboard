"use client";

import React, { useState } from 'react';
import Button from './Button';

interface BusinessApplicationFormProps {
  title?: string;
  subtitle?: string;
}

export default function BusinessApplicationForm({ title, subtitle }: BusinessApplicationFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'unqualified'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    leadsPerMonth: '',
    biggestChallenge: '',
    monthlyRevenue: '',
    message: '',
    howDidYouHear: ''
  });

  const formspreeEndpoint = 'https://formspree.io/f/xykyklwq'; // Business Formspree ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Basic qualification logic
    const isQualified = formData.monthlyRevenue !== '$0-10K' && formData.leadsPerMonth !== '0-10';

    if (!isQualified) {
      setStatus('unqualified');
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'business',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '', email: '', phone: '', businessName: '', businessType: '',
          leadsPerMonth: '', biggestChallenge: '', monthlyRevenue: '', message: '', howDidYouHear: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const renderFormContent = () => {
    if (status === 'success') {
      return (
        <div className="border-4 border-pure-white p-12 bg-midnight text-center">
          <div className="text-6xl mb-6">✓</div>
          <h4 className="text-2xl font-black uppercase mb-4">Application Received!</h4>
          <p className="text-ash font-medium mb-6">
            Thanks for applying! Let's get you on the calendar.
          </p>
          
          <div className="border-4 border-steel p-8 mb-8 bg-charcoal">
            <p className="text-pure-white font-black uppercase text-sm tracking-widest mb-4">
              📅 BOOK YOUR DISCOVERY CALL NOW:
            </p>
            <a
              href="https://calendly.com/benibeauchman/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary px-12 py-4 text-lg mb-4"
            >
              Choose Your Time →
            </a>
            <p className="text-ash text-sm">
              15 minutes. No pitch. Just an honest conversation.
            </p>
          </div>
          
          <div className="border-t-4 border-steel pt-6">
            <p className="text-xs uppercase tracking-widest font-black mb-3 text-smoke">
              PREFER TO WAIT?
            </p>
            <p className="text-ash text-sm">
              I'll also email you within 24-48 hours. But spots fill fast—booking now guarantees your slot.
            </p>
          </div>
          
          <Button
            onClick={() => setStatus('idle')}
            variant="secondary"
            className="mt-6"
          >
            Submit Another Application
          </Button>
        </div>
      );
    }

    if (status === 'unqualified') {
      return (
        <div className="border-4 border-smoke p-12 text-center">
          <div className="text-6xl mb-6">⚠️</div>
          <h4 className="text-2xl font-black uppercase mb-4">Not a Current Fit</h4>
          <p className="text-ash font-medium mb-8">
            Based on your answers, it seems my services might not be the best fit for your current stage. 
            I typically work with businesses generating over $10K/month and 10+ leads. 
            Feel free to reach out again when your business grows!
          </p>
          <Button
            onClick={() => setStatus('idle')}
            variant="secondary"
          >
            Try Again
          </Button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest font-black mb-3">
            Your Name *
          </label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="John Smith" />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-widest font-black mb-3">
            Email *
          </label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="john@example.com" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-black mb-3">
            Phone (Optional)
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="(555) 123-4567" />
        </div>

        <div>
          <label htmlFor="businessName" className="block text-xs uppercase tracking-widest font-black mb-3">
            Business Name *
          </label>
          <input type="text" id="businessName" name="businessName" required value={formData.businessName} onChange={handleChange} className="input-field" placeholder="Your Business" />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-xs uppercase tracking-widest font-black mb-3">
            What type of business? *
          </label>
          <select id="businessType" name="businessType" required value={formData.businessType} onChange={handleChange} className="input-field">
            <option value="">Select one</option>
            <option value="contractor">Contractor (HVAC, Plumber, Electrician)</option>
            <option value="salon">Salon/Spa</option>
            <option value="gym">Gym/Fitness Studio</option>
            <option value="coaching">Coaching/Consulting</option>
            <option value="otherService">Other Service Business</option>
          </select>
        </div>

        <div>
          <label htmlFor="leadsPerMonth" className="block text-xs uppercase tracking-widest font-black mb-3">
            How many leads do you get per month? *
          </label>
          <select id="leadsPerMonth" name="leadsPerMonth" required value={formData.leadsPerMonth} onChange={handleChange} className="input-field">
            <option value="">Select one</option>
            <option value="0-10">0-10</option>
            <option value="10-30">10-30</option>
            <option value="30-50">30-50</option>
            <option value="50+">50+</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-black mb-3">
            What's your biggest challenge? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="biggestChallenge" value="leads_unavailable" checked={formData.biggestChallenge === 'leads_unavailable'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" required />
              <span className="ml-2">Leads contact me when I'm on jobs/unavailable</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="biggestChallenge" value="no_followup" checked={formData.biggestChallenge === 'no_followup'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">No follow-up system, leads go cold</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="biggestChallenge" value="no_online_booking" checked={formData.biggestChallenge === 'no_online_booking'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">No online booking, too much back-and-forth</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="biggestChallenge" value="website_not_convert" checked={formData.biggestChallenge === 'website_not_convert'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Website doesn't convert visitors</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="biggestChallenge" value="all_of_the_above" checked={formData.biggestChallenge === 'all_of_the_above'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">All of the above</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="monthlyRevenue" className="block text-xs uppercase tracking-widest font-black mb-3">
            Estimated monthly revenue? *
          </label>
          <select id="monthlyRevenue" name="monthlyRevenue" required value={formData.monthlyRevenue} onChange={handleChange} className="input-field">
            <option value="">Select one</option>
            <option value="$0-10K">$0-10K</option>
            <option value="$10-30K">$10-30K</option>
            <option value="$30-50K">$30-50K</option>
            <option value="$50K+">$50K+</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs uppercase tracking-widest font-black mb-3">
            Tell me more about your situation: *
          </label>
          <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="textarea-field" placeholder="What are you looking to build or fix?"></textarea>
        </div>

        <div>
          <label htmlFor="howDidYouHear" className="block text-xs uppercase tracking-widest font-black mb-3">
            How did you hear about me? (Optional)
          </label>
          <select id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className="input-field">
            <option value="">Select one</option>
            <option value="google">Google search</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>

        {status === 'error' && (
          <div className="border-4 border-smoke p-6">
            <p className="text-smoke font-bold uppercase text-xs tracking-widest">
              Something went wrong. Please try again or email me directly.
            </p>
          </div>
        )}

        <Button type="submit" variant="primary" className="w-full">
          {status === 'loading' ? 'Sending...' : 'Apply for Business Systems'}
        </Button>

        <p className="text-xs text-smoke uppercase tracking-widest font-black text-center">
          I respond to every real inquiry within 24-48 hours
        </p>
      </form>
    );
  };

  return (
    <div id="application-form" className="border-4 border-steel p-10 md:p-16 bg-charcoal scroll-mt-24">
      {title && <h3 className="text-3xl font-black uppercase mb-4">{title}</h3>}
      {subtitle && <p className="text-ash font-medium mb-8">{subtitle}</p>}
      {renderFormContent()}
    </div>
  );
}

