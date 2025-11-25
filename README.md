# 🚀 Ben's Live Demo Sales Dashboard

A mobile-first, **in-person sales tool** for demonstrating custom automation systems to potential clients. Built with Next.js, TypeScript, and TailwindCSS.

## 📋 Overview

This dashboard enables Ben to:
- **Explain services in under 30 seconds** with clear, minimalist UI
- **Capture lead information instantly** during in-person meetings
- **Trigger live demo actions** (SMS, booking flows, CRM examples)
- **Display niche-specific system recommendations** based on business type
- **Automatically sync leads** to backend (n8n + Airtable/CRM)

## ✨ Features

### 1. Home Page (`/`)
- Clean hero section with value proposition
- Single CTA button: "Start Live Demo"
- 30-second clarity threshold

### 2. Demo Dashboard (`/demo`)
- **Lead Intake Form**: Captures business info (name, phone, email, niche, pain points)
- **Visual Explainer**: Shows customer journey flow
- **Demo Action Panel**: 6 interactive buttons that trigger real automations:
  - Send Auto-Reply SMS
  - Trigger Missed-Call Automation
  - Send Review Request
  - Show Booking Flow
  - Display CRM Pipeline
  - Start Follow-Up Sequence
- **System Stack Display**: Niche-specific automation recommendations
- **Sticky Footer**: Quick reset and CTA bar

### 3. Niche Support
Pre-configured system stacks for:
- Salon / Hair Studio
- Med Spa / IV Therapy
- Gym / Personal Trainer
- Realtor / Real Estate
- Restaurant / Café
- Contractor / Home Services
- Stable / Ranch
- Other Local Services

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel (recommended)
- **Backend Integration**: n8n webhooks

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd "Sales Dashboard and Demo BenBuildBiz"
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your n8n webhook URLs:

```env
N8N_LEAD_WEBHOOK_URL=https://your-n8n-instance.com/webhook/lead
N8N_DEMO_WEBHOOK_URL=https://your-n8n-instance.com/webhook/demo
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `N8N_LEAD_WEBHOOK_URL`
   - `N8N_DEMO_WEBHOOK_URL`
4. Deploy!

Vercel will automatically detect Next.js and configure everything.

## 🔗 n8n Integration

### Lead Creation Webhook

**Endpoint**: `N8N_LEAD_WEBHOOK_URL`

**Payload**:
```json
{
  "businessName": "Main Street Salon",
  "ownerName": "Sarah Johnson",
  "phone": "(555) 123-4567",
  "email": "sarah@business.com",
  "niche": "salon",
  "painPoint": "no-shows",
  "notes": "Interested in booking automation",
  "timestamp": "2025-11-17T10:30:00.000Z",
  "source": "live-demo-dashboard"
}
```

### Demo Action Webhook

**Endpoint**: `N8N_DEMO_WEBHOOK_URL`

**Payload**:
```json
{
  "leadId": "sarah@business.com",
  "phone": "(555) 123-4567",
  "email": "sarah@business.com",
  "businessName": "Main Street Salon",
  "ownerName": "Sarah Johnson",
  "niche": "salon",
  "actionName": "sendAutoReply",
  "demoType": "auto-reply-sms",
  "timestamp": "2025-11-17T10:32:00.000Z"
}
```

### Recommended n8n Workflows

1. **Lead Capture Flow**
   - Receive webhook → Add to Airtable → Send notification to Ben → Tag in CRM

2. **Demo Action Flow**
   - Receive webhook → Route by `demoType` → Trigger appropriate automation (SMS, email, etc.)

## 📱 Mobile-First Design

The entire dashboard is optimized for mobile use:
- Touch-friendly buttons
- Responsive layouts
- Fast load times
- Minimal data usage
- Works on spotty connections

## 🎨 Design System

### Colors
- **Background**: Pure black (`#000000`)
- **Cards**: Charcoal (`#1a1a1a`, `#333333`)
- **Borders**: Dark gray (`#4d4d4d`)
- **Text**: White with gray variants
- **Accents**: White buttons, green success states

### Typography
- Clean, readable fonts
- Hierarchy: Bold headings, regular body text
- Mobile-optimized sizes

## 📂 Project Structure

```
Sales Dashboard and Demo BenBuildBiz/
├── app/
│   ├── api/
│   │   ├── lead/
│   │   │   └── create/
│   │   │       └── route.ts          # Lead creation endpoint
│   │   └── demo/
│   │       ├── sendAutoReply/
│   │       ├── sendMissedCall/
│   │       ├── sendReviewRequest/
│   │       ├── showBookingFlow/
│   │       ├── showPipeline/
│   │       └── sendFollowUp/
│   ├── demo/
│   │   └── page.tsx                  # Main demo dashboard
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles
├── components/
│   ├── LeadIntakeForm.tsx           # Lead capture form
│   ├── DemoPanel.tsx                # Demo action buttons
│   ├── SystemStackDisplay.tsx       # Niche-specific recommendations
│   ├── VisualExplainer.tsx          # Customer journey visualization
│   └── StickyFooter.tsx             # Bottom CTA bar
├── lib/
│   └── systemStacks.ts              # Niche system configurations
├── types/
│   └── index.ts                     # TypeScript types
├── public/                          # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Business Niches

Edit `lib/systemStacks.ts` to add new niche configurations:

```typescript
export const systemStacks: Record<BusinessNiche, SystemStack> = {
  // ... existing niches
  newNiche: {
    niche: "newNiche",
    items: [
      {
        name: "System Name",
        description: "What it does",
      },
      // ... more items
    ],
  },
};
```

Then update `types/index.ts` to include the new niche type.

## 🎯 Usage Tips

### During In-Person Demos

1. **Start with the visual explainer** - Show the customer journey
2. **Fill out the form together** - Get their info while explaining each field
3. **Click "Create Lead"** - Show them they're now in the system
4. **Review the system stack** - Walk through each recommended automation
5. **Trigger demo actions** - Let them experience the automation live
6. **Close with the CTA** - Get their commitment

### Best Practices

- Keep phone charged and ready
- Have backup internet (hotspot)
- Pre-load the page before entering business
- Practice the 30-second pitch
- Follow up within 24 hours

## 🚧 Future Enhancements (V2+)

- [ ] Client portal for purchased systems
- [ ] AI-generated custom proposals
- [ ] Pre-built landing pages per niche
- [ ] Live CRM snapshot integration
- [ ] White-label version
- [ ] Subscription SaaS model
- [ ] Analytics dashboard
- [ ] A/B testing for pitches

## 📄 License

Private - Internal Use Only

## 👤 Author

Ben - BenBuildBiz

---

**Ready to demo?** Start the dev server and navigate to `/demo` 🎯

