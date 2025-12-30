import type { Metadata } from 'next';
import DemoNav from '@/components/demo/DemoNav';
import StickyCTA from '@/components/demo/StickyCTA';

export const metadata: Metadata = {
  title: 'Client Acquisition System | BenBuildsBiz',
  description: 'Launch your complete client acquisition system in 60 days. Website, Meta ads, lead capture, and automated follow-up for service businesses.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <DemoNav />
      <main>{children}</main>
      <StickyCTA />
    </div>
  );
}


