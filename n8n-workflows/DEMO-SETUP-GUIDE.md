# 🎯 Demo Workflows Setup Guide

**Quick setup guide for the live demo workflows**

---

## 📋 **WORKFLOWS INCLUDED**

1. **demo-actions-workflow.json** - Powers in-person demo actions
2. **lead-capture-workflow.json** - Captures leads from the dashboard

---

## 🔧 **SETUP INSTRUCTIONS**

### **Step 1: Import Workflows**

1. Open n8n
2. Go to **Workflows** → **Import from file**
3. Import both JSON files

---

### **Step 2: Configure Credentials**

Both workflows need 3 credentials. Follow these steps:

#### **A. Twilio Credentials**

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "Twilio"
3. Enter:
   - **Account SID**: From [Twilio Console](https://console.twilio.com)
   - **Auth Token**: From Twilio Console
4. **Test** the connection
5. **Save** as "Twilio - Demo Account"

#### **B. Airtable Credentials**

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "Airtable"
3. Choose **"Airtable Personal Access Token"** (not API Key)
4. Enter:
   - **Access Token**: From [Airtable Account](https://airtable.com/create/tokens)
     - Click "Create new token"
     - Scopes: `data.records:read`, `data.records:write`
     - Add your base
     - Copy token
5. **Save** as "Airtable - BenBuildsBiz CRM"

#### **C. SMTP Credentials (Email)**

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for "SMTP"
3. Enter:
   - **User**: Your email (e.g., ben@benbuildsbiz.com)
   - **Password**: Your email password or app password
   - **Host**: 
     - Gmail: `smtp.gmail.com`
     - Outlook: `smtp-mail.outlook.com`
     - Other: Check your provider
   - **Port**: `587` (TLS) or `465` (SSL)
   - **Secure**: Enable TLS
4. **Test** the connection
5. **Save** as "SMTP - Ben's Email"

---

### **Step 3: Update Workflow Nodes**

Now we need to connect the credentials to the workflow nodes.

#### **In demo-actions-workflow.json:**

1. Open the workflow
2. Find these nodes and assign credentials:

**All Twilio SMS nodes** (6 total):
- Auto-Reply SMS Demo
- Missed Call Demo
- Review Request Demo
- Booking Flow Demo
- Follow-Up Sequence Demo

For each:
- Click the node
- Find "Credentials" dropdown
- Select: **"Twilio - Demo Account"**
- Also update **"From Phone Number"**: Your Twilio number (e.g., +15551234567)

**Airtable node:**
- "Log Demo Action to Airtable"
- Click node
- Credentials: **"Airtable - BenBuildsBiz CRM"**
- Base ID: Replace `YOUR_AIRTABLE_BASE_ID` with your base (starts with `app...`)

**Email node:**
- "Notify Ben (Email)"
- Click node
- Credentials: **"SMTP - Ben's Email"**
- Update "From Email": Your email
- Update "To Email": Your email

#### **In lead-capture-workflow.json:**

1. Open the workflow
2. Update these nodes:

**Airtable node:**
- "Save to Airtable - Leads"
- Credentials: **"Airtable - BenBuildsBiz CRM"**
- Base ID: Replace `YOUR_AIRTABLE_BASE_ID`

**Slack notification** (Optional):
- "Notify Ben on Slack"
- URL: Replace with your Slack webhook URL
- Or disable this node if not using Slack

**Email nodes:**
- "Send Follow-Up Email (HOT)"
- Credentials: **"SMTP - Ben's Email"**
- Update sender email

**SMS node:**
- "Send SMS (HOT Lead)"
- Credentials: **"Twilio - Demo Account"**
- Update phone number

---

### **Step 4: Test the Workflows**

#### **Test demo-actions-workflow:**

1. **Activate** the workflow
2. Copy the webhook URL (click on "Webhook - Demo Action" node)
3. Test with curl or Postman:

```bash
curl -X POST https://your-n8n-url/webhook/demo \
  -H "Content-Type: application/json" \
  -d '{
    "demoType": "auto-reply-sms",
    "phone": "+15551234567",
    "ownerName": "Test Owner",
    "businessName": "Test Business",
    "actionName": "Auto-Reply Demo",
    "niche": "salon",
    "timestamp": "2025-11-22T12:00:00Z"
  }'
```

4. Check:
   - ✅ SMS received on test phone
   - ✅ Email notification sent
   - ✅ Record logged in Airtable

#### **Test lead-capture-workflow:**

1. **Activate** the workflow
2. Copy the webhook URL
3. Test with curl:

```bash
curl -X POST https://your-n8n-url/webhook/lead \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2025-11-22T12:00:00Z",
    "businessName": "Test Salon",
    "ownerName": "Jane Doe",
    "phone": "+15551234567",
    "email": "jane@testsalon.com",
    "niche": "salon",
    "painPoint": "missed-calls",
    "notes": "Interested in auto-reply system"
  }'
```

4. Check:
   - ✅ Lead saved in Airtable
   - ✅ Slack notification (if enabled)
   - ✅ Email sent to lead
   - ✅ SMS sent to lead

---

### **Step 5: Connect to Your Dashboard**

Update your dashboard to call these webhooks:

**For demo actions:**
```javascript
const triggerDemo = async (demoType, leadData) => {
  await fetch('https://your-n8n-url/webhook/demo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      demoType: demoType, // 'auto-reply-sms', 'missed-call', 'review-request', etc.
      phone: leadData.phone,
      ownerName: leadData.ownerName,
      businessName: leadData.businessName,
      actionName: leadData.actionName,
      niche: leadData.niche,
      timestamp: new Date().toISOString()
    })
  });
};
```

**For lead capture:**
```javascript
const captureLead = async (formData) => {
  await fetch('https://your-n8n-url/webhook/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      businessName: formData.businessName,
      ownerName: formData.ownerName,
      phone: formData.phone,
      email: formData.email,
      niche: formData.niche,
      painPoint: formData.painPoint,
      notes: formData.notes
    })
  });
};
```

---

## 🔒 **SECURITY BEST PRACTICES**

1. **Never commit credentials** to Git
2. **Use environment variables** in production:
   - Set up n8n environment variables
   - Reference with `$env.TWILIO_ACCOUNT_SID`
3. **Rotate tokens** quarterly
4. **Enable webhook authentication** (n8n Pro feature)
5. **Use IP whitelisting** if possible

---

## 📊 **AIRTABLE STRUCTURE**

### **Table: Leads**
Required fields:
- Timestamp (Date)
- Business Name (Single line text)
- Owner Name (Single line text)
- Phone (Phone number)
- Email (Email)
- Niche (Single select)
- Pain Point (Single line text)
- Notes (Long text)
- Lead Score (Single line text: HOT/WARM/COLD)
- Urgency (Number)
- Follow Up Date (Date)
- Source (Single line text)
- Status (Single select: New/Contacted/Demo Scheduled/Demo Completed/Converted/Lost)
- Demo Count (Number)

### **Table: Demo Actions**
Required fields:
- Timestamp (Date)
- Business Name (Single line text)
- Owner Name (Single line text)
- Phone (Phone number)
- Demo Type (Single line text)
- Action Name (Single line text)
- Niche (Single line text)
- Status (Single select)
- Engagement Score (Number)

---

## 🐛 **TROUBLESHOOTING**

### **SMS not sending:**
- ✅ Check Twilio credentials are correct
- ✅ Verify phone numbers are in E.164 format (+15551234567)
- ✅ Check Twilio account balance
- ✅ Verify phone number is verified (trial accounts)

### **Email not sending:**
- ✅ Check SMTP credentials
- ✅ Use app password, not regular password (Gmail)
- ✅ Enable "Less secure apps" or use OAuth (Gmail)
- ✅ Check spam folder

### **Airtable not saving:**
- ✅ Verify token has write permissions
- ✅ Check base ID is correct (starts with `app`)
- ✅ Ensure table names match exactly
- ✅ Verify all required fields exist

### **Webhook not triggering:**
- ✅ Workflow must be **activated**
- ✅ Check URL is correct (copy from n8n)
- ✅ Verify JSON payload structure
- ✅ Check n8n execution logs

---

## 📞 **SUPPORT**

If you encounter issues:

1. Check n8n execution logs: **Workflows** → **Executions**
2. Test each node individually using "Execute node"
3. Verify all credentials are active
4. Check this guide's troubleshooting section

---

## ✅ **QUICK CHECKLIST**

Before going live:

- [ ] Twilio credentials configured
- [ ] Airtable credentials configured
- [ ] SMTP credentials configured
- [ ] All phone numbers updated to YOUR Twilio number
- [ ] All email addresses updated to YOUR email
- [ ] Base ID updated to YOUR Airtable base
- [ ] Tested demo-actions-workflow with real phone
- [ ] Tested lead-capture-workflow with real email
- [ ] Workflows activated
- [ ] Dashboard connected to webhooks

---

**You're ready to demo! 🚀**

