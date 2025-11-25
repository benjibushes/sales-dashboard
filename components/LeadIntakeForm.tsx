"use client";

import { useState, FormEvent } from "react";
import { LeadData, BusinessNiche, PainPoint } from "@/types";
import { formatPhoneInput } from "@/lib/formatters";

interface LeadIntakeFormProps {
  onLeadCreated: (lead: LeadData) => void;
}

export default function LeadIntakeForm({ onLeadCreated }: LeadIntakeFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    niche: "other",
    painPoint: "other",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch("/api/lead/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to create lead");
      }

      await response.json();
      onLeadCreated(formData);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setError("Request timed out. Please check your connection and try again.");
      } else {
        setError("Failed to create lead. Please try again.");
      }
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">Quick Lead Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium mb-2 text-gray-300">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            required
            className="input-field"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="e.g., Main Street Salon"
          />
        </div>

        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium mb-2 text-gray-300">
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            required
            className="input-field"
            value={formData.ownerName}
            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
            placeholder="e.g., Sarah Johnson"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="input-field"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhoneInput(e.target.value) })}
            placeholder="e.g., (555) 123-4567"
            maxLength={14}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="input-field"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g., sarah@business.com"
          />
        </div>

        <div>
          <label htmlFor="niche" className="block text-sm font-medium mb-2 text-gray-300">
            Business Type
          </label>
          <select
            id="niche"
            required
            className="input-field"
            value={formData.niche}
            onChange={(e) => setFormData({ ...formData, niche: e.target.value as BusinessNiche })}
          >
            <option value="salon">Salon / Hair Studio</option>
            <option value="medspa">Med Spa / IV Therapy</option>
            <option value="gym">Gym / Personal Trainer</option>
            <option value="realtor">Realtor / Real Estate</option>
            <option value="restaurant">Restaurant / Café</option>
            <option value="contractor">Contractor / Home Services</option>
            <option value="stable">Stable / Ranch</option>
            <option value="other">Other Local Service</option>
          </select>
        </div>

        <div>
          <label htmlFor="painPoint" className="block text-sm font-medium mb-2 text-gray-300">
            Main Challenge
          </label>
          <select
            id="painPoint"
            required
            className="input-field"
            value={formData.painPoint}
            onChange={(e) => setFormData({ ...formData, painPoint: e.target.value as PainPoint })}
          >
            <option value="no-shows">Too many no-shows</option>
            <option value="manual-booking">Manual booking is time-consuming</option>
            <option value="missed-calls">Missing calls = losing money</option>
            <option value="no-reviews">Need more reviews</option>
            <option value="inconsistent-follow-up">Forgetting to follow up</option>
            <option value="manual-reminders">Sending reminders manually</option>
            <option value="customer-retention">Hard to keep customers coming back</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-2 text-gray-300">
            Quick Notes (Optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            className="input-field"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Any specific details..."
          />
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Creating Lead..." : "Create Lead + Load Demo"}
        </button>
      </form>
    </div>
  );
}

