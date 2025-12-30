import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BenBuildsBiz | Business Systems, Fitness, and Discipline",
    template: "%s | BenBuildsBiz",
  },
  description: "I build businesses, bodies, and brands that can handle pressure. Web systems, real work, and discipline for people who actually want to win.",
  keywords: ["business automation", "fitness coaching", "web development", "discipline", "ultramarathons", "sobriety"],
  authors: [{ name: "Ben" }],
  creator: "Ben",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benbuildsbiz.com",
    siteName: "BenBuildsBiz",
    title: "BenBuildsBiz | Business Systems, Fitness, and Discipline",
    description: "Building businesses, bodies, and brands that can handle pressure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BenBuildsBiz",
    description: "Building businesses, bodies, and brands that can handle pressure.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

