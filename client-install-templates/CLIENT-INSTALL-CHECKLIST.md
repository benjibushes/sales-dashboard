# ✅ Client Install Checklist - What You Actually Do

**Quick reference: What to install for each new client**

---

## 🎯 **WHAT YOU INSTALL (2 Workflows Per Client)**

### **Package: Salon Automation System**

```
Install These Files:
├── 1-SALON-automation-template.json        ← Main automation
└── MODULE-04-reply-handler.json            ← Reply handler
```

### **Package: Med Spa Automation System**

```
Install These Files:
├── 2-MEDSPA-automation-template.json       ← Main automation
└── MODULE-04-reply-handler.json            ← Reply handler
```

### **Package: Gym Automation System**

```
Install These Files:
├── 3-GYM-automation-template.json          ← Main automation
└── MODULE-04-reply-handler.json            ← Reply handler
```

### **Package: Realtor System**

```
Install These Files:
├── 4-REALTOR-ai-ready-template.json        ← Main automation
└── MODULE-04-reply-handler.json            ← Reply handler
```

### **Package: Restaurant Automation System**

```
Install These Files:
├── 5-RESTAURANT-automation-template.json   ← Main automation
└── MODULE-04-reply-handler.json            ← Reply handler
```

---

## 📋 **15-MINUTE INSTALL PROCESS**

### **Step 1: Import Workflows (2 min)**

```bash
n8n Dashboard:
1. Workflows → Import from file
2. Select: 1-SALON-automation-template.json
3. Import

4. Workflows → Import from file
5. Select: MODULE-04-reply-handler.json
6. Import

✓ You now have 2 workflows imported
```

### **Step 2: Configure Main Workflow (5 min)**

```bash
Open: "{{BUSINESS_NAME}} - Salon Automation"

Find and Replace (Cmd+F):
- {{BUSINESS_NAME}} → "Luxe Hair Studio"
- {{OWNER_NAME}} → "Sarah"
- {{PHONE}} → "+15551234567"
- {{AIRTABLE_BASE_ID}} → "appABC123DEF456"
- {{ADDRESS}} → "123 Main St, City, State"
- {{GOOGLE_REVIEW_LINK}} → "https://g.page/r/..."

Add Credentials:
- All Twilio nodes → Select "Twilio - Client Account"
- All Airtable nodes → Select "Airtable - Client Base"

✓ Main workflow configured
```

### **Step 3: Configure Reply Handler (3 min)**

```bash
Open: "Reply Handler - Keyword Detection"

Add Credentials:
- Twilio nodes → Select "Twilio - Client Account"
- Airtable node → Select "Airtable - Client Base"
- Email node → Select "SMTP - Client Email"

Set Environment Variables (or find/replace):
- {{$env.BUSINESS_PHONE}} → "+15551234567"
- {{$env.BUSINESS_EMAIL}} → "contact@luxehair.com"
- {{$env.OWNER_EMAIL}} → "sarah@luxehair.com"
- {{$env.OWNER_PERSONAL_PHONE}} → "+15559876543"
- {{$env.WEBSITE_URL}} → "https://luxehair.com"
- {{$env.ADDRESS}} → "123 Main St, City, State"
- {{$env.AIRTABLE_BASE_ID}} → "appABC123DEF456"

✓ Reply handler configured
```

### **Step 4: Configure Twilio Webhook (2 min)**

```bash
1. Copy Reply Handler webhook URL from n8n:
   Click "Incoming Reply/Message" node
   Copy: https://your-n8n.com/webhook/incoming-reply

2. Go to Twilio Console:
   → Phone Numbers
   → Click client's number
   → Messaging → "A message comes in"
   → Paste webhook URL
   → Save

✓ Twilio configured
```

### **Step 5: Create Airtable Tables (3 min)**

```bash
Client's Airtable Base:

Table 1: "Customers"
- Phone (Phone number)
- Name (Single line text)
- First Contact (Date)
- Last Message (Long text)
- Status (Single select: New Lead, Active, Inactive)
- Source (Single line text)
- Last Visit (Date)
- Visit Count (Number)

Table 2: "Appointments"
- Phone (Phone number)
- Customer Name (Single line text)
- Date (Date)
- Time (Single line text)
- Service (Single line text)
- Status (Single select: Booked, Completed, Cancelled)
- 24hr Reminder Sent (Checkbox)
- 1hr Reminder Sent (Checkbox)
- Review Requested (Checkbox)

Table 3: "Conversations"
- Phone (Phone number)
- Timestamp (Date)
- Incoming Message (Long text)
- Intent Detected (Single select: booking, confirm, cancel, hours, services, help, human_needed)
- Auto Response (Long text)
- Needs Human (Checkbox)

✓ Airtable configured
```

### **Step 6: Test (2 min)**

```bash
Test 1: Send text to client's number
→ Text: "Hi, I need a haircut"
→ Should receive: Auto-reply from Salon Workflow
✓

Test 2: Reply with keyword
→ Text: "BOOK"
→ Should receive: "Perfect! What service..."
✓

Test 3: Check Airtable
→ Open Conversations table
→ Should see both messages logged
✓

✓ Installation complete!
```

### **Step 7: Activate Both Workflows**

```bash
n8n Dashboard:
1. Open "{{BUSINESS_NAME}} - Salon Automation"
   → Click "Active" toggle → ✓ Green

2. Open "Reply Handler - Keyword Detection"
   → Click "Active" toggle → ✓ Green

✓ System live!
```

---

## 🎯 **WHAT EACH WORKFLOW DOES**

### **Main Workflow (SALON/MEDSPA/GYM/etc.)**

**Sends automated messages:**
- ✅ Auto-reply to first contact
- ✅ 24-hour appointment reminders (daily at 9am)
- ✅ 1-hour appointment reminders (hourly check)
- ✅ Review requests (after completed appointments)
- ✅ Reactivation offers (monthly for 60+ day inactive)

**Triggered by:**
- Cron schedules (time-based automation)
- Manual execution (for testing)

**Does NOT:**
- ❌ Handle customer replies to these messages
- ❌ Process keywords like BOOK or CONFIRM

### **Reply Handler (MODULE-04)**

**Handles customer replies:**
- ✅ Detects keywords (BOOK, CONFIRM, CANCEL, HOURS, MENU, HELP)
- ✅ Sends smart auto-responses
- ✅ Logs all conversations to Airtable
- ✅ Notifies owner for complex questions

**Triggered by:**
- Any message sent to the Twilio number
- Customer replies to automated messages
- New customer inquiries

**Does NOT:**
- ❌ Send scheduled reminders
- ❌ Manage appointment lifecycle

---

## 🔄 **HOW THEY WORK TOGETHER**

### **Example: Appointment Reminder Flow**

```
Day Before Appointment:

1. Main Workflow (9am trigger):
   ✓ "Daily 9am - Check Appointments" node runs
   ✓ Gets tomorrow's appointments from Airtable
   ✓ Sends SMS: "Hi Sarah! Reminder: appointment tomorrow at 2pm. Reply CONFIRM"
   ✓ Logs "24hr Reminder Sent = TRUE" in Airtable
   ✓ Main workflow done

Customer Responds:

2. Reply Handler (immediately when customer replies):
   ✓ Twilio receives "CONFIRM" from customer
   ✓ Twilio webhook triggers Reply Handler
   ✓ Reply Handler detects "CONFIRM" keyword
   ✓ Reply Handler responds: "Great! You're confirmed. See you soon! 👍"
   ✓ Reply Handler logs to Conversations table
   ✓ Reply Handler done

Result: Customer confirmed, all logged, fully automated!
```

### **Example: Reactivation Flow**

```
Monthly Reactivation:

1. Main Workflow (1st of month, 10am):
   ✓ "Monthly - Customer Reactivation" node runs
   ✓ Gets inactive customers (60+ days)
   ✓ Sends SMS: "Hi! We miss you! 20% off if you book this week. Reply BOOK"
   ✓ Logs "Reactivation Sent = TRUE"
   ✓ Main workflow done

Customer Responds:

2. Reply Handler (when customer replies):
   ✓ Twilio receives "BOOK" from customer
   ✓ Twilio webhook triggers Reply Handler
   ✓ Reply Handler detects "BOOK" keyword
   ✓ Reply Handler responds: "Perfect! What service? Or call: (555) 123-4567"
   ✓ Reply Handler emails owner: "🔥 Inactive customer wants to book!"
   ✓ Reply Handler logs to Conversations
   ✓ Owner follows up to schedule

Result: Reactivated customer, owner notified, ready to book!
```

---

## 📊 **SYSTEM DIAGRAM**

```
                    TWILIO PHONE NUMBER
                    +1 (555) 123-4567
                            |
                +-----------+-----------+
                |                       |
            OUTBOUND                INBOUND
        (Automated Messages)    (Customer Replies)
                |                       |
                |                       |
        MAIN WORKFLOW           REPLY HANDLER
                |                       |
    +-----------+-----------+          |
    |           |           |          |
    v           v           v          v
Reminders   Reviews   Reactivation   Keyword
  (cron)     (cron)     (cron)       Detection
                                         |
                                         v
                                    Auto-Response
                                         |
                                         v
                                    Log to Airtable
                                         |
                                         v
                                  Notify if Needed
```

---

## 💰 **PRICING PACKAGES**

### **Basic Package: $500**
- Main workflow (1 niche)
- Reply handler
- 1 hour setup + testing
- Basic customization
- Includes: Auto-reply, reminders, review requests

### **Pro Package: $800**
- Main workflow (1 niche)
- Reply handler
- 2 hours setup + customization
- Custom keywords for their niche
- Training session
- Includes: Everything + reactivation

### **Enterprise Package: $1,200**
- Main workflow (1 niche)
- Reply handler with advanced logic
- 3 hours setup + customization
- Custom Airtable views/automations
- Multi-location support
- Training + 30-day support
- Includes: Everything + advanced features

---

## 🚨 **COMMON CLIENT QUESTIONS**

### **Q: Do I need both workflows?**
**A:** YES. Main workflow sends scheduled messages. Reply handler processes customer replies. You need both for "Reply BOOK" to actually work.

### **Q: Can I use one reply handler for multiple locations?**
**A:** No. Each Twilio number needs its own reply handler because Twilio can only webhook to one URL per number.

### **Q: What if customer replies with something not in keywords?**
**A:** Reply handler sends: "Thanks! Someone will respond shortly" and emails/texts you to follow up.

### **Q: Can I customize the keyword responses?**
**A:** Yes! Edit the Reply Handler → "Detect Intent from Keywords" node → Modify the JavaScript responses.

### **Q: How much does this cost to run?**
**A:** Per client: ~$40-90/month (Twilio $20-40, Airtable $20, n8n $20-30). No per-message charges.

### **Q: Can I add AI later?**
**A:** Yes! Just upgrade the Reply Handler to use OpenAI. Main workflow stays the same. See AI-INTEGRATION-GUIDE.md.

---

## ✅ **POST-INSTALL CHECKLIST**

Before marking client as "live":

- [ ] Both workflows imported
- [ ] All variables replaced (no {{PLACEHOLDERS}} left)
- [ ] Credentials added to all nodes
- [ ] Twilio webhook configured
- [ ] Airtable tables created with correct fields
- [ ] Test: Send message → Receive auto-reply
- [ ] Test: Reply "BOOK" → Receive booking response
- [ ] Test: Reply random → Receive fallback + owner notified
- [ ] Check Airtable → All messages logged
- [ ] Both workflows activated (green toggle)
- [ ] Client trained on Airtable dashboard
- [ ] Client knows how to respond to "Needs Human" alerts

---

## 🎯 **SUCCESS METRICS TO TRACK**

After 30 days, report to client:

### **Automation Metrics:**
- Total messages sent (reminders, reviews, reactivation)
- Response rate (% who reply to messages)
- Keyword detection rate (% handled automatically)
- Human escalations (% needing manual response)

### **Business Impact:**
- Appointments confirmed via text
- No-show reduction (before/after %)
- New reviews generated
- Reactivated customers
- Time saved (hours per week)

### **Sample Report:**
```
Month 1 Results - Luxe Hair Studio

📤 Messages Sent: 847
  • Reminders: 342
  • Review requests: 187
  • Reactivation: 52
  • Auto-replies: 266

📥 Customer Replies: 234
  • CONFIRM: 87 (37%)
  • BOOK: 23 (10%)
  • CANCEL/RESCHEDULE: 12 (5%)
  • Questions (auto-handled): 89 (38%)
  • Human needed: 23 (10%)

📊 Business Impact:
  • No-shows reduced: 68% → 15% (78% improvement!)
  • New reviews: 14 (was 2/month)
  • Reactivated customers: 8 (was 0/month)
  • Time saved: ~12 hours/week

💰 ROI: $2,400 saved in no-shows + $1,200 from reactivated customers = $3,600 vs $500 setup cost
```

---

## 📞 **SUPPORT**

If installation issues:

1. Check REPLY-HANDLER-SETUP.md (detailed guide)
2. Check WORKFLOW-VALIDATION-REPORT.md (known issues)
3. Test each workflow individually
4. Check n8n execution logs
5. Verify Twilio webhook is correct URL

---

**YOU HAVE EVERYTHING YOU NEED TO DEPLOY COMPLETE, END-TO-END AUTOMATION SYSTEMS!** 🚀

**Each client gets:**
- ✅ Automated scheduled messages
- ✅ Interactive reply handling
- ✅ Complete conversation logging
- ✅ Human escalation when needed
- ✅ Professional, consistent experience

**Total install time: 15 minutes per client**



