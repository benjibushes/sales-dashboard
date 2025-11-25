# 🚀 n8n Workflow Setup Guide

## Quick Setup (5 Minutes)

### Step 1: Import Workflows

1. Open n8n (https://app.n8n.cloud or your self-hosted instance)
2. Click **"Workflows"** → **"Import from File"**
3. Import both JSON files:
   - `lead-capture-workflow.json`
   - `demo-actions-workflow.json`

### Step 2: Configure Credentials

You need to set up 3 integrations:

#### 🔐 1. Twilio (for SMS) - **REQUIRED**

1. Sign up at [twilio.com](https://www.twilio.com)
2. Get a phone number
3. Copy your **Account SID** and **Auth Token**
4. In n8n: **Settings** → **Credentials** → **Add Credential** → **Twilio**
5. Enter your credentials

**💰 Cost**: ~$1/month + $0.0075 per SMS

---

#### 📊 2. Airtable (for CRM) - **REQUIRED**

**Why Airtable?** More professional, better views, built-in automations!

1. Sign up at [airtable.com](https://airtable.com) (free for 1,200 records)
2. Create a base called **"BenBuildsBiz CRM"**
3. Create two tables:
   - **Leads** - All your leads
   - **Demo Actions** - Track demo engagement

4. Get your **Personal Access Token**:
   - Profile icon → Developer hub → Create token
   - Add scopes: `data.records:read` + `data.records:write`
   - Grant access to your base

5. In n8n: **Settings** → **Credentials** → **Airtable Personal Access Token**
6. Paste your token
7. Update workflows with your Base ID

**📖 Full setup guide**: See `AIRTABLE_SETUP.md` for detailed table structure and views!

---

#### 💬 3. Slack (for notifications) - **OPTIONAL but RECOMMENDED**

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Create new app → "Incoming Webhooks"
3. Activate and add to your workspace
4. Copy webhook URL
5. Replace `YOUR/SLACK/WEBHOOK` in Lead Capture workflow

**Alternative**: Use email notifications instead (already configured)

---

#### 📧 4. Email (SMTP) - **OPTIONAL**

1. Use Gmail, Outlook, or any SMTP provider
2. In n8n: **Settings** → **Credentials** → **Add Credential** → **SMTP**
3. Enter your email credentials
4. Replace `ben@benbuildsbiz.com` with your email

---

### Step 3: Activate Webhooks

1. Open **Lead Capture Workflow**
2. Click on the **Webhook** node
3. Click **"Execute Node"** to activate
4. **Copy the webhook URL** (looks like: `https://your-n8n.app.n8n.cloud/webhook/abc123`)
5. Add to your `.env.local`:
   ```
   N8N_LEAD_WEBHOOK_URL=https://your-n8n.app.n8n.cloud/webhook/abc123
   ```

6. Repeat for **Demo Actions Workflow**:
   ```
   N8N_DEMO_WEBHOOK_URL=https://your-n8n.app.n8n.cloud/webhook/def456
   ```

7. **Activate both workflows** (toggle switch in top right)

---

## 🎯 Conversion Optimizations Built-In

### Lead Scoring System
- **HOT leads** (missed-calls, no-shows) get instant SMS + email
- **WARM leads** get email follow-up
- Urgency scoring (1-10) for prioritization

### Automatic Follow-Up
- HOT leads: SMS + Email within 60 seconds
- Follow-up date automatically set for +1 day
- Slack notifications with quick action buttons

### Demo Message Optimization
Each SMS is crafted for maximum engagement:
- ✅ Personalized with business name
- ✅ Shows immediate value
- ✅ Creates FOMO (fear of missing out)
- ✅ Clear call-to-action
- ✅ Professional branding

### Data Tracking
- Every lead saved to Google Sheets
- Every demo action logged
- Lead scores calculated automatically
- Easy to export for analysis

---

## 📱 SMS Message Templates

### Why These Work:

1. **Personalization** - Uses their name and business name
2. **Social Proof** - "I've helped dozens of [niche] businesses"
3. **Instant Gratification** - "This is what you just experienced"
4. **FOMO** - "No more lost leads"
5. **Clear CTA** - "Want this for your business?"

### Customization Tips:

**Make it YOUR voice:**
- Replace "Ben" with your name
- Add your personality
- Include your actual phone number
- Add links to your examples/portfolio

**Optimize for your niche:**
- Test different messages
- Track response rates in Google Sheets
- A/B test with different CTAs

---

## 🧪 Testing Your Workflows

### Test Lead Capture:
```bash
curl -X POST https://your-n8n-webhook-url/webhook/lead \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Test Salon",
    "ownerName": "Your Name",
    "phone": "YOUR_PHONE_NUMBER",
    "email": "your@email.com",
    "niche": "salon",
    "painPoint": "missed-calls",
    "notes": "Test lead",
    "timestamp": "2025-11-22T10:00:00Z"
  }'
```

You should receive:
- ✅ SMS to your phone
- ✅ Email to your inbox
- ✅ Slack notification
- ✅ New row in Google Sheets

### Test Demo Actions:
```bash
curl -X POST https://your-n8n-webhook-url/webhook/demo \
  -H "Content-Type: application/json" \
  -d '{
    "leadId": "test@email.com",
    "phone": "YOUR_PHONE_NUMBER",
    "email": "your@email.com",
    "businessName": "Test Business",
    "ownerName": "Your Name",
    "niche": "salon",
    "actionName": "sendAutoReply",
    "demoType": "auto-reply-sms",
    "timestamp": "2025-11-22T10:00:00Z"
  }'
```

You should receive:
- ✅ Demo SMS
- ✅ Email notification to you
- ✅ Action logged in Google Sheets

---

## 💰 Estimated Costs

| Service | Cost | Required? |
|---------|------|-----------|
| **Twilio** | $1/mo + $0.0075/SMS | ✅ Yes |
| **n8n Cloud** | Free tier or $20/mo | ✅ Yes |
| **Airtable** | Free (1,200 records) or $10/mo | ✅ Yes |
| **Slack** | Free | Optional |
| **Email (Gmail)** | Free | Optional |

**Total**: ~$1-30/month depending on usage
**Recommended**: Start free, upgrade Airtable to Plus ($10/mo) when you hit 1,200 records

---

## 🎨 Customization Ideas

### Add More Integrations:
- **Airtable** instead of Google Sheets (more powerful)
- **HubSpot/Salesforce** for enterprise CRM
- **Calendly** for automatic booking
- **Zapier** as backup automation
- **Discord** instead of Slack

### Advanced Features:
- **AI Responses** - Use ChatGPT to personalize messages
- **Lead Scoring ML** - Predict conversion probability
- **A/B Testing** - Test different messages
- **Multi-Channel** - Add WhatsApp, Facebook Messenger
- **Voice Calls** - Automatic voice drops via Twilio

### Conversion Optimizations:
- **Urgency Timers** - "Limited spots this week"
- **Social Proof** - "Join 50+ businesses"
- **Video Messages** - Send Loom videos
- **Case Studies** - Auto-send success stories
- **Pricing Options** - Send custom proposals

---

## 🔧 Troubleshooting

### SMS Not Sending?
- Check Twilio balance
- Verify phone number format
- Check Twilio logs in dashboard
- Ensure number is not on DNC list

### Webhook Not Receiving Data?
- Click "Execute Node" on webhook
- Check webhook URL in `.env.local`
- Test with curl command above
- Check n8n execution logs

### Airtable Not Updating?
- Verify Base ID is correct
- Check Personal Access Token is valid
- Ensure token has correct scopes
- Verify table and field names match exactly
- Check Airtable API status

### No Notifications?
- Verify Slack webhook URL
- Check email SMTP settings
- Test each node individually
- Check n8n error logs

---

## 📊 Success Metrics to Track

In your Google Sheets, calculate:

1. **Lead → Demo Rate** (how many try demos)
2. **Demo → Call Rate** (how many reply to SMS)
3. **Call → Close Rate** (how many become customers)
4. **Response Time** (how fast you follow up)
5. **Best Performing Demos** (which get most engagement)

---

## 🎯 Pro Tips for Maximum Conversion

1. **Respond Within 5 Minutes** - Speed matters!
2. **Personalize Everything** - Use their business name
3. **Show, Don't Tell** - Live demos > descriptions
4. **Follow Up 3-5 Times** - Most sales need 5+ touches
5. **Track Everything** - Data drives decisions

---

## 🚀 Ready to Go Live?

1. ✅ Import both workflows
2. ✅ Configure Twilio credentials
3. ✅ Set up Google Sheets
4. ✅ Add webhook URLs to `.env.local`
5. ✅ Test with your own phone
6. ✅ Activate workflows
7. ✅ Start demoing! 

**Need help?** The workflows have comments on each node explaining what it does.

---

**Built for BenBuildsBiz** 🚀
Optimized for maximum conversion and minimal setup time.

