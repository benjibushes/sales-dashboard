"use client";

import { LeadData } from "@/types";
import { getSystemStack } from "@/lib/systemStacks";

interface SystemStackDisplayProps {
  lead: LeadData;
}

export default function SystemStackDisplay({ lead }: SystemStackDisplayProps) {
  const systemStack = getSystemStack(lead.niche);

  const nicheLabels: Record<string, string> = {
    salon: "Salon / Hair Studio",
    medspa: "Med Spa / IV Therapy",
    gym: "Gym / Personal Trainer",
    realtor: "Realtor / Real Estate",
    restaurant: "Restaurant / Café",
    contractor: "Contractor / Home Services",
    stable: "Stable / Ranch",
    other: "Local Service Business",
  };

  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Your Custom System Stack</h2>
        <p className="text-gray-400 text-sm">
          Recommended for {nicheLabels[lead.niche]} businesses
        </p>
      </div>

      <div className="space-y-4">
        {systemStack.items.map((item, index) => (
          <div
            key={index}
            className="bg-charcoal-950 border border-charcoal-700 rounded-lg p-4 hover:border-gray-600 transition-all duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-charcoal-950 border border-charcoal-700 rounded-lg">
        <p className="text-sm text-gray-300">
          💡 <span className="font-semibold">This is just the start.</span> Every system is custom-built for your specific needs and goals.
        </p>
      </div>
    </div>
  );
}

