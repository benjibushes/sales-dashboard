"use client";

import React, { useState } from 'react';
import Button from './Button';

interface FitnessApplicationFormProps {
  title?: string;
  subtitle?: string;
}

export default function FitnessApplicationForm({ title, subtitle }: FitnessApplicationFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'unqualified'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessLevel: '',
    goals: [] as string[],
    stoppingFactor: '',
    commitmentLevel: '',
    whyNow: '',
    budgetOk: '',
  });

  const formspreeEndpoint = 'https://formspree.io/f/xzdbdyrn'; // Fitness Formspree ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Qualification logic
    const isQualified = parseInt(formData.commitmentLevel) >= 7 && formData.budgetOk === 'yes';

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
          formType: 'fitness',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '', email: '', phone: '', fitnessLevel: '', goals: [],
          stoppingFactor: '', commitmentLevel: '', whyNow: '', budgetOk: ''
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      goals: checked
        ? [...prev.goals, value]
        : prev.goals.filter(goal => goal !== value)
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
              📅 BOOK YOUR INTRO CALL NOW:
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
              20 minutes. No fluff. Just real talk about your goals.
            </p>
          </div>
          
          <div className="border-t-4 border-steel pt-6">
            <p className="text-xs uppercase tracking-widest font-black mb-3 text-smoke">
              PREFER TO WAIT?
            </p>
            <p className="text-ash text-sm">
              I'll also review your application and email you within 24-48 hours. But spots are limited—booking now locks in your time.
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
            My coaching is for those truly committed to building discipline. 
            Based on your answers, it seems this might not be the right time. 
            Keep working on it, and feel free to apply again when you're ready!
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
          <label htmlFor="fitnessLevel" className="block text-xs uppercase tracking-widest font-black mb-3">
            Current fitness level: *
          </label>
          <select id="fitnessLevel" name="fitnessLevel" required value={formData.fitnessLevel} onChange={handleChange} className="input-field">
            <option value="">Select one</option>
            <option value="beginner">Beginner (not training at all)</option>
            <option value="intermediate">Intermediate (training 1-2x/week inconsistently)</option>
            <option value="advanced">Advanced (training 3-4x/week but need structure)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-black mb-3">
            What's your goal? * (Select all that apply)
          </label>
          <div className="space-y-2">
            <label className="flex items-center text-ash font-medium">
              <input type="checkbox" name="goals" value="strength" checked={formData.goals.includes('strength')} onChange={handleCheckboxChange} className="form-checkbox text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Build real strength and capability</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="checkbox" name="goals" value="event" checked={formData.goals.includes('event')} onChange={handleCheckboxChange} className="form-checkbox text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Train for a specific event (ultra, competition)</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="checkbox" name="goals" value="discipline" checked={formData.goals.includes('discipline')} onChange={handleCheckboxChange} className="form-checkbox text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Rebuild discipline and consistency</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="checkbox" name="goals" value="recovery" checked={formData.goals.includes('recovery')} onChange={handleCheckboxChange} className="form-checkbox text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Recover from burnout/addiction</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="checkbox" name="goals" value="general" checked={formData.goals.includes('general')} onChange={handleCheckboxChange} className="form-checkbox text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">General fitness and health</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-black mb-3">
            What's actually stopping you? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="stoppingFactor" value="no_plan" checked={formData.stoppingFactor === 'no_plan'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" required />
              <span className="ml-2">Lack of plan/structure</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="stoppingFactor" value="no_accountability" checked={formData.stoppingFactor === 'no_accountability'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">No accountability</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="stoppingFactor" value="dont_know_where_to_start" checked={formData.stoppingFactor === 'dont_know_where_to_start'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Don't know where to start</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="stoppingFactor" value="start_and_quit" checked={formData.stoppingFactor === 'start_and_quit'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Keep starting and quitting</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="stoppingFactor" value="all_of_the_above" checked={formData.stoppingFactor === 'all_of_the_above'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">All of the above</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="commitmentLevel" className="block text-xs uppercase tracking-widest font-black mb-3">
            Rate your commitment (1-10): *
          </label>
          <input type="range" id="commitmentLevel" name="commitmentLevel" min="1" max="10" required value={formData.commitmentLevel} onChange={handleChange} className="w-full h-2 bg-steel rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between text-xs text-ash mt-2">
            <span>1 (Low)</span>
            <span className="text-pure-white font-black">{formData.commitmentLevel || '5'}</span>
            <span>10 (High)</span>
          </div>
        </div>

        <div>
          <label htmlFor="whyNow" className="block text-xs uppercase tracking-widest font-black mb-3">
            Why now? What changed? *
          </label>
          <textarea id="whyNow" name="whyNow" required value={formData.whyNow} onChange={handleChange} rows={4} className="textarea-field" placeholder="Tell me what's driving you..."></textarea>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-black mb-3">
            Are you willing to invest $XXX/month in coaching? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="budgetOk" value="yes" checked={formData.budgetOk === 'yes'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" required />
              <span className="ml-2">Yes, if it's the right fit</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="budgetOk" value="need_more_info" checked={formData.budgetOk === 'need_more_info'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">Need to know more first</span>
            </label>
            <label className="flex items-center text-ash font-medium">
              <input type="radio" name="budgetOk" value="no" checked={formData.budgetOk === 'no'} onChange={handleRadioChange} className="form-radio text-pure-white bg-charcoal border-steel focus:ring-pure-white" />
              <span className="ml-2">No, that's too much</span>
            </label>
          </div>
        </div>

        {status === 'error' && (
          <div className="border-4 border-smoke p-6">
            <p className="text-smoke font-bold uppercase text-xs tracking-widest">
              Something went wrong. Please try again or email me directly.
            </p>
          </div>
        )}

        <Button type="submit" variant="primary" className="w-full">
          {status === 'loading' ? 'Sending...' : 'Apply for Fitness Coaching'}
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

