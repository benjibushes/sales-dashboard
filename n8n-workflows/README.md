# n8n Workflow Configurations

This directory contains templates and documentation for setting up n8n workflows that integrate with the Sales Dashboard.

## Required Workflows

### 1. Lead Capture Workflow

**Purpose**: Process new leads from the dashboard

**Webhook Path**: `/webhook/lead`

**Incoming Payload**:
```json
{
  "businessName": "Main Street Salon",
  "ownerName": "Sarah Johnson",
  "phone": "(555) 123-4567",
  "email": "sarah@business.com",
  "niche": "salon",
  "painPoint": "no-shows",
  "notes": "Optional notes",
  "timestamp": "2025-11-17T10:30:00.000Z",
  "source": "live-demo-dashboard"
}
```

**Recommended Nodes**:

1. **Webhook** (Trigger)
   - Method: POST
   - Path: /webhook/lead

2. **Airtable / Google Sheets**
   - Add new row with lead data
   - Include timestamp and source

3. **Slack / Discord / Email**
   - Send notification to Ben
   - Include all lead details
   - Add quick action links

4. **HTTP Request** (Optional)
   - Send to CRM (HubSpot, Pipedrive, etc.)
   - Add tags based on niche

5. **Set** (Optional)
   - Enrich data
   - Calculate lead score
   - Set follow-up date

---

### 2. Demo Actions Workflow

**Purpose**: Handle demo button triggers

**Webhook Path**: `/webhook/demo`

**Incoming Payload**:
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

**Recommended Flow**:

1. **Webhook** (Trigger)

2. **Switch** (Route by demoType)
   - Case: `auto-reply-sms`
   - Case: `missed-call-automation`
   - Case: `review-request`
   - Case: `booking-flow`
   - Case: `crm-pipeline`
   - Case: `follow-up-sequence`

3. **Per Demo Type**:

   **For SMS demos** (auto-reply, missed-call, review-request, follow-up):
   - **Twilio / Vonage / MessageBird**
   - Send demo SMS to lead's phone
   - Use niche-specific message templates

   **For booking-flow**:
   - **HTTP Request**
   - Send booking page link via SMS/Email
   - Log action in Airtable

   **For crm-pipeline**:
   - **Airtable / Notion**
   - Add lead to demo pipeline
   - Show visual confirmation

4. **Logging** (All paths)
   - Log demo action to tracking sheet
   - Update lead record with demo status

---

## Message Templates

### Auto-Reply SMS Demo

```
Hi {{ownerName}}! 👋

This is Ben - thanks for chatting with me at {{businessName}}!

This is an example of an instant auto-reply text your customers would receive.

I'll follow up with you shortly. In the meantime, here's what I can build for your business: [link]

- Ben
```

### Missed-Call Automation Demo

```
Hi {{ownerName}},

You just saw what happens when someone calls and you can't answer - they get an instant text like this!

No more lost leads. Every missed call = automatic follow-up.

Let's get this set up for {{businessName}}!

- Ben
```

### Review Request Demo

```
Hi {{ownerName}}! 

If you were a happy customer of {{businessName}}, you'd be getting this automated review request right now.

Takes 10 seconds. Gets you more 5-star reviews. Runs automatically.

Want this for your business?

[Review Link]
```

### Booking Flow Demo

```
Hi {{ownerName}}!

Click here to see how easy it is for your customers to book:

[Booking Page Link]

24/7 booking. No more phone tag. Let's set this up for {{businessName}}.

- Ben
```

### Follow-Up Sequence Demo

```
Hi {{ownerName}},

This is message #1 in an automated follow-up sequence.

Your leads would get:
• Day 1: Intro message
• Day 3: Value reminder  
• Day 7: Special offer
• Day 14: Last chance

All automatic. Zero effort.

Want this for {{businessName}}?

- Ben
```

---

## Setup Instructions

### 1. Create n8n Account

- Sign up at [n8n.io](https://n8n.io) (cloud)
- Or self-host on your VPS

### 2. Import Workflow Templates

Import the pre-built workflow JSON files from this directory into n8n:
- `lead-capture-workflow.json` - Handles new leads with auto-scoring & follow-up
- `demo-actions-workflow.json` - Powers all 6 demo buttons with SMS automation

**See SETUP_GUIDE.md for detailed step-by-step instructions!**

### 3. Configure Credentials

Add credentials for:
- Twilio (for SMS)
- Airtable / Google Sheets (for data storage)
- Slack / Discord (for notifications)
- Email service (for notifications)

### 4. Test Each Workflow

Use the "Execute Workflow" button in n8n to test with sample data.

### 5. Get Webhook URLs

Copy the webhook URLs from n8n and add them to your dashboard's `.env.local`:

```env
N8N_LEAD_WEBHOOK_URL=https://your-instance.app.n8n.cloud/webhook/abc123
N8N_DEMO_WEBHOOK_URL=https://your-instance.app.n8n.cloud/webhook/def456
```

---

## Niche-Specific Customization

You can create different automation branches based on the `niche` field:

```
Switch on {{niche}}:
  - salon → Send salon-specific message
  - medspa → Send medspa-specific message
  - gym → Send gym-specific message
  - etc.
```

This allows you to tailor the demo experience to each business type.

---

## Troubleshooting

### Webhook not receiving data
- Check n8n webhook is "waiting for webhook call"
- Verify webhook URL is correct in dashboard
- Test with curl or Postman

### SMS not sending
- Check Twilio credentials
- Verify phone number format
- Check Twilio balance

### Data not saving to Airtable
- Verify Airtable base ID and table name
- Check field mappings
- Ensure API key is valid

---

## Future Enhancements

- [ ] Add lead scoring logic
- [ ] Create multi-step nurture sequences
- [ ] Integrate with calendar for booking
- [ ] Add AI-powered response suggestions
- [ ] Create analytics dashboard in n8n

---

**Need help?** Check n8n's documentation or community forum.

