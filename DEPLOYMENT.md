# 🚀 Deployment Guide

Complete guide for deploying Ben's Live Demo Sales Dashboard to production.

## Recommended: Vercel Deployment

Vercel is the easiest and fastest way to deploy Next.js applications.

### Method 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Sales Dashboard"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**

In Vercel dashboard, add these environment variables:

```
N8N_LEAD_WEBHOOK_URL=https://your-n8n-instance.com/webhook/lead
N8N_DEMO_WEBHOOK_URL=https://your-n8n-instance.com/webhook/demo
```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts to set up environment variables
```

## Custom Domain Setup

### In Vercel Dashboard:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `demo.benbuildsbiz.com`)
4. Update your DNS records as instructed
5. SSL certificate will be automatically provisioned

### Recommended Domain Structure:

- `demo.benbuildsbiz.com` - Production dashboard
- `demo-staging.benbuildsbiz.com` - Staging/testing

## n8n Webhook Setup

### Create Lead Capture Workflow

1. **Create new workflow in n8n**

2. **Add Webhook node**
   - Method: POST
   - Path: `/webhook/lead`
   - Response Mode: Last Node

3. **Add processing nodes**:
   - **Airtable**: Add record to Leads table
   - **HTTP Request**: Send notification to Slack/Discord
   - **Set**: Tag lead with source
   - **Gmail/Email**: Send notification to Ben

4. **Test the webhook**:
```bash
curl -X POST https://your-n8n-instance.com/webhook/lead \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Test Business",
    "ownerName": "John Doe",
    "phone": "555-0100",
    "email": "john@test.com",
    "niche": "salon",
    "painPoint": "no-shows"
  }'
```

5. **Save webhook URL** and add to Vercel environment variables

### Create Demo Action Workflow

1. **Create new workflow in n8n**

2. **Add Webhook node**
   - Method: POST
   - Path: `/webhook/demo`

3. **Add Switch node** to route by `demoType`:
   - `auto-reply-sms` → Send SMS via Twilio
   - `missed-call-automation` → Trigger demo sequence
   - `review-request` → Send review SMS
   - `booking-flow` → Send booking link
   - `crm-pipeline` → Log action
   - `follow-up-sequence` → Start automation

4. **Test each demo type**

5. **Save webhook URL** and add to Vercel

## Environment Variables Reference

### Required for Production:

```env
N8N_LEAD_WEBHOOK_URL=https://n8n.yoursite.com/webhook/lead
N8N_DEMO_WEBHOOK_URL=https://n8n.yoursite.com/webhook/demo
```

### Optional (for future features):

```env
NEXT_PUBLIC_ANALYTICS_ID=<your-analytics-id>
NEXT_PUBLIC_AIRTABLE_EMBED_ID=<for-live-crm-view>
```

## Production Checklist

Before going live, verify:

- [ ] All environment variables are set in Vercel
- [ ] n8n webhooks are working and tested
- [ ] Lead creation flow works end-to-end
- [ ] All 6 demo buttons trigger correctly
- [ ] Mobile experience is smooth (test on real device)
- [ ] Custom domain is configured (if using)
- [ ] SSL certificate is active
- [ ] Analytics are tracking (if added)
- [ ] Error logging is configured

## Performance Optimization

Your app is already optimized, but here are additional tips:

### 1. Enable Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Add Speed Insights

```bash
npm install @vercel/speed-insights
```

### 3. Configure Caching

Already configured in `next.config.mjs`, but you can add:

```javascript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
};
```

## Monitoring & Maintenance

### Check Webhook Delivery

Monitor n8n execution logs to ensure:
- Leads are being captured
- Demo actions are triggering
- No failed webhooks

### Monitor Vercel Logs

```bash
vercel logs <deployment-url>
```

Or check in Vercel dashboard under "Functions" → "Logs"

### Update Deployment

Push to GitHub main branch - Vercel will auto-deploy:

```bash
git add .
git commit -m "Update system stacks"
git push origin main
```

## Rollback

If something breaks:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." → "Promote to Production"

## Alternative Deployment Options

### Netlify

```bash
npm run build
# Deploy the .next folder to Netlify
```

### Self-Hosted (VPS)

```bash
npm run build
npm run start
# Use PM2 or similar to keep running
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Support

If you encounter deployment issues:
1. Check Vercel build logs
2. Verify environment variables
3. Test n8n webhooks independently
4. Check this guide's troubleshooting section

---

**Ready to deploy?** Follow the Vercel + GitHub method for the smoothest experience.

