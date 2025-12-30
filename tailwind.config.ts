import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean Black & White System
        'true-black': '#000000',
        'off-black': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'steel': '#2A2A2A',
        'concrete': '#3A3A3A',
        'smoke': '#666666',
        'ash': '#999999',
        'silver': '#CCCCCC',
        'off-white': '#F5F5F0',
        'cream': '#FAFAF5',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      maxWidth: {
        'container': '1280px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
export default config;

