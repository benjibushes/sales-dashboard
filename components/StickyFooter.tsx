"use client";

interface StickyFooterProps {
  onReset: () => void;
}

export default function StickyFooter({ onReset }: StickyFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal-950 border-t border-charcoal-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-300">
            Want this for your business? Let's talk.
          </p>
        </div>
        <button
          onClick={onReset}
          className="btn-secondary px-6 py-2 text-sm"
        >
          Start Fresh Lead
        </button>
      </div>
    </div>
  );
}

