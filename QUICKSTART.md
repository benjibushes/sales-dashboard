# ⚡ Quick Start Guide

Get your sales dashboard running in 3 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

```bash
cp env.example .env.local
```

Edit `.env.local` and add your n8n webhook URLs:

```env
N8N_LEAD_WEBHOOK_URL=https://your-n8n-instance.com/webhook/lead
N8N_DEMO_WEBHOOK_URL=https://your-n8n-instance.com/webhook/demo
```

> **Note**: The app will work without these URLs configured, but leads and demo actions won't be sent to n8n.

## Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 4: Test the Flow

1. Click **"Start Live Demo"** on the home page
2. Fill out the lead intake form
3. Click **"Create Lead + Load Demo"**
4. Test the demo action buttons
5. See the niche-specific system stack recommendations

## 📱 Mobile Testing

Open the dev server URL on your phone to test the mobile experience:
- Use your local network IP (e.g., `http://192.168.1.100:3000`)
- Or use ngrok for external testing

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import in Vercel dashboard.

## 🔧 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Webhook not working
- Check that your n8n instance is accessible
- Verify the webhook URLs are correct
- Check n8n logs for incoming requests

### Styling issues
```bash
npm run build
# Check for any build errors
```

## 📝 Next Steps

1. Customize system stacks in `lib/systemStacks.ts`
2. Set up your n8n workflows
3. Test with real leads
4. Deploy to production
5. Add custom domain in Vercel

---

**Need help?** Check the full [README.md](./README.md) for detailed documentation.

