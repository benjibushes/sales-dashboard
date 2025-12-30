"use client";

import Link from 'next/link';

export default function DemoNav() {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/demo" 
            className="font-bold text-xl text-gray-900 hover:text-gray-600 transition-colors"
          >
            Client Acquisition System
          </Link>
          
          <Link
            href="/demo/book"
            className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
