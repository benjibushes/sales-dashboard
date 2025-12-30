import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="border-4 border-steel p-16 md:p-24">
            <div className="text-9xl font-black mb-8">404</div>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-ash font-medium mb-12">
              This page does not exist. Either you typed the wrong URL, or I have not built it yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" href="/">
                Go Home
              </Button>
              <Button variant="secondary" href="/journal">
                Read the Journal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

