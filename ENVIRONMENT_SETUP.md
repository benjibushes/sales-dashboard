# 🔧 Environment Variables Setup

**Configuration guide for your demo dashboard**

---

## 📋 **Required Environment Variables**

Create a `.env.local` file in the root directory with these variables:

### **n8n Webhook URLs** (Primary Method - Recommended)

```bash
# Main demo actions webhook
N8N_DEMO_WEBHOOK_URL=https://your-n8n-instance.com/webhook/demo

# Payment link webhook (NEW - for payment button)
N8N_PAYMENT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/payment-link

# Lead capture webhook
N8N_LEAD_WEBHOOK_URL=https://your-n8n-instance.com/webhook/lead
```

---

## 🎯 **Quick Setup Guide**

### **Step 1: Create `.env.local`**

```bash
# In your project root:
touch .env.local
```

### **Step 2: Add Your n8n Webhook URLs**

1. Import workflows from `/n8n-workflows/` into your n8n instance
2. Get webhook URLs from each workflow's webhook node
3. Paste them into `.env.local`

**Example `.env.local`:**
```bash
N8N_DEMO_WEBHOOK_URL=https://my-n8n.app/webhook/demo
N8N_PAYMENT_WEBHOOK_URL=https://my-n8n.app/webhook/payment-link
N8N_LEAD_WEBHOOK_URL=https://my-n8n.app/webhook/lead
```

### **Step 3: Test**

```bash
npm run dev
# Click demo buttons - should trigger n8n workflows
```

---

## 🔐 **Optional: Direct Integration Variables**

If you want to bypass n8n and send directly from Next.js:

```bash
# Twilio (for SMS)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+15551234567

# Airtable (for logging)
AIRTABLE_TOKEN=your_personal_access_token
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX

# Payment link
PAYMENT_LINK=https://buy.stripe.com/your-payment-link
```

**Note:** Using n8n webhooks is cleaner and more maintainable.

---

## 🆕 **New: Payment Link Webhook**

The payment button (`Send Payment Link → $2,500 + $300/mo`) requires:

### **Environment Variable:**
```bash
N8N_PAYMENT_WEBHOOK_URL=https://your-n8n.com/webhook/payment-link
```

### **What it sends:**
```json
{
  "leadId": "prospect@email.com",
  "phone": "+15551234567",
  "email": "prospect@email.com",
  "businessName": "Luxe Hair Studio",
  "ownerName": "Sarah",
  "niche": "salon",
  "painPoint": "missed-calls",
  "notes": "Interested in automation",
  "actionName": "payment-link",
  "timestamp": "2025-11-23T12:00:00.000Z",
  "demoType": "payment-link",
  "amount": {
    "setup": 2500,
    "monthly": 300
  }
}
```

### **Create the n8n Workflow:**

1. Create new workflow in n8n
2. Add webhook trigger:
   - Method: POST
   - Path: `payment-link`
3. Add SMS node (Twilio):
   - To: `{{ $json.phone }}`
   - Message: Your payment link template
4. Add Airtable node (optional):
   - Log payment link sent
5. Activate workflow
6. Copy webhook URL to `.env.local`

---

## ✅ **Validation**

The API route validates:
- ✅ Phone number is present and valid format
- ✅ Email is present and valid format
- ✅ 15-second timeout on webhook calls
- ✅ Proper error handling and logging

Invalid requests return `400 Bad Request` with error details.

---

## 🏗️ **Architecture**

```
Dashboard Button Click
        ↓
Next.js API Route
(/api/payment/send-link/route.ts)
        ↓
Validates phone & email
        ↓
Calls n8n webhook
(15-second timeout)
        ↓
n8n Workflow
        ↓
├─→ Send SMS (Twilio)
├─→ Send Email (optional)
└─→ Log to Airtable
        ↓
Return success to dashboard
        ↓
Show confetti + toast 🎉
```

---

## 🐛 **Troubleshooting**

### **Error: "Webhook not configured"**
- Add `N8N_PAYMENT_WEBHOOK_URL` to `.env.local`
- Restart dev server: `npm run dev`

### **Error: "Failed to send payment link"**
- Check n8n workflow is activated
- Verify webhook URL is correct
- Check n8n execution logs for errors

### **Error: "Invalid phone number format"**
- Phone must be 10-15 digits
- Can include +, -, (, ), spaces
- Example valid: `+1 (555) 123-4567`

### **Error: "Invalid email format"**
- Must be valid email: `user@domain.com`

### **Webhook timeout (15 seconds)**
- Check n8n instance is running
- Check network connection
- Simplify n8n workflow if taking too long

---

## 📝 **Complete `.env.local` Template**

```bash
# ============================================
# BenBuildsBiz Demo Dashboard
# ============================================

# n8n Webhooks (REQUIRED)
N8N_DEMO_WEBHOOK_URL=https://your-n8n.com/webhook/demo
N8N_PAYMENT_WEBHOOK_URL=https://your-n8n.com/webhook/payment-link
N8N_LEAD_WEBHOOK_URL=https://your-n8n.com/webhook/lead

# Optional: Direct Integration
# TWILIO_ACCOUNT_SID=
# TWILIO_AUTH_TOKEN=
# TWILIO_PHONE_NUMBER=
# AIRTABLE_TOKEN=
# AIRTABLE_BASE_ID=
# PAYMENT_LINK=
```

---

## 🚀 **Next Steps**

1. ✅ Create `.env.local` with n8n webhook URLs
2. ✅ Create payment link workflow in n8n
3. ✅ Test payment button in dashboard
4. ✅ Verify confetti + toast appear on success
5. ✅ Check prospect receives payment link SMS

---

**Ready to close deals!** 🎉💳



