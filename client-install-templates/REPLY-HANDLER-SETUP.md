# 🎯 Reply Handler Setup - Complete Guide

**How to make "Reply BOOK" actually work in your workflows**

---

## 🏗️ **OPTION A: Centralized Reply Handler (RECOMMENDED)**

### **What You Install:**

1. **Main workflow** (SALON, MEDSPA, GYM, etc.) - Sends automated messages
2. **MODULE-04-reply-handler.json** - Catches and handles ALL customer replies

### **How They Work Together:**

```
Customer Journey Example:

Day 1:
  → Salon Workflow sends: "Thanks for texting! Reply BOOK to schedule."
  ← Customer replies: "BOOK"
  → Reply Handler catches it
  → Reply Handler responds: "Perfect! What service? Or call: (555) 123-4567"
  → Logs conversation to Airtable

Day 2:
  → Salon Workflow sends: "Reminder: Appointment tomorrow at 2pm. Reply CONFIRM"
  ← Customer replies: "CONFIRM"
  → Reply Handler catches it
  → Reply Handler responds: "Great! You're confirmed. See you soon!"
  → Logs confirmation to Airtable
```

### **Installation Steps:**

#### **Step 1: Import Both Workflows**

```bash
# In n8n:
1. Import 1-SALON-automation-template.json
2. Import MODULE-04-reply-handler.json
```

#### **Step 2: Configure Twilio Phone Number**

This is the KEY step that makes it work:

```
Go to Twilio Console:
  → Phone Numbers
  → Click your number
  → Messaging Configuration:
  
  ┌─────────────────────────────────────────────┐
  │ A MESSAGE COMES IN                          │
  │                                             │
  │ Webhook: [Paste Reply Handler URL]         │
  │ https://your-n8n.com/webhook/incoming-reply│
  │                                             │
  │ HTTP POST  ✓                                │
  └─────────────────────────────────────────────┘
  
  Save ✓
```

**IMPORTANT:** Your Twilio number points to ONE webhook for incoming messages. That webhook is the Reply Handler.

#### **Step 3: Activate Both Workflows**

```bash
n8n:
  ✓ Activate "{{BUSINESS_NAME}} - Salon Automation"
  ✓ Activate "Reply Handler - Keyword Detection"
```

#### **Step 4: Test End-to-End**

```
Test 1: Auto-reply works
  → Text your Twilio number: "Hi, I need a haircut"
  → Should get: Initial auto-reply from Salon Workflow
  → Should also trigger Reply Handler
  → Reply Handler responds with booking info

Test 2: Keyword detection works
  → Text your Twilio number: "BOOK"
  → Reply Handler should respond: "Perfect! What service..."
  → Should log to Airtable Conversations table

Test 3: Appointment reminder flow
  → Manually trigger 24hr reminder node in Salon Workflow
  → Should send: "Reply CONFIRM to confirm"
  → Text back: "CONFIRM"
  → Reply Handler should respond: "Great! You're confirmed"
  → Should log to Airtable
```

---

## 📋 **WHAT EACH WORKFLOW DOES**

### **Main Workflow (SALON/MEDSPA/GYM/etc.)**

**Responsibilities:**
- ✅ Sends scheduled messages (reminders, reviews, reactivation)
- ✅ Handles initial contact (first text/call)
- ✅ Logs appointments to Airtable
- ✅ Manages customer lifecycle

**What it DOESN'T do:**
- ❌ Does NOT handle customer replies to its messages
- ❌ Does NOT process keywords
- ❌ Does NOT have ongoing conversation logic

### **Reply Handler (MODULE-04)**

**Responsibilities:**
- ✅ Catches ALL incoming customer messages
- ✅ Detects keywords (BOOK, CONFIRM, CANCEL, etc.)
- ✅ Sends appropriate auto-responses
- ✅ Logs conversations to Airtable
- ✅ Notifies owner when human response needed

**What it DOESN'T do:**
- ❌ Does NOT send scheduled messages
- ❌ Does NOT manage appointment lifecycle
- ❌ Does NOT replace the main workflow

---

## 🔧 **TECHNICAL DETAILS**

### **Webhook Configuration:**

You need **2 webhooks per client:**

#### **Webhook 1: Initial Contact Handler**
```
Purpose: Catches first-time messages from new customers
URL: https://your-n8n.com/webhook/incoming-salon
Used by: Salon Workflow (first node)
Triggered by: Manual testing or Facebook/Google Ads integration
```

**Note:** This webhook is typically NOT connected to Twilio directly. It's used for:
- Lead capture forms
- Facebook Messenger integration
- Google Ads click-to-text
- Your live demo dashboard

#### **Webhook 2: Reply Handler** (MAIN ONE)
```
Purpose: Catches ALL replies to your automated messages
URL: https://your-n8n.com/webhook/incoming-reply
Used by: Reply Handler Workflow
Triggered by: Twilio (when customer replies to any message)
Connected to: Your Twilio phone number
```

**This is the one you configure in Twilio Console.**

---

## 🎯 **COMPLETE CLIENT SETUP CHECKLIST**

For each new client:

### **Pre-Setup:**
- [ ] Client has Twilio account + phone number
- [ ] Client has Airtable account
- [ ] You have their credentials

### **n8n Setup:**
- [ ] Import main workflow (SALON, MEDSPA, etc.)
- [ ] Import MODULE-04-reply-handler.json
- [ ] Replace all {{VARIABLES}} in main workflow
- [ ] Add Twilio credentials to both workflows
- [ ] Add Airtable credentials to both workflows
- [ ] Copy Reply Handler webhook URL

### **Twilio Configuration:**
- [ ] Log into client's Twilio Console
- [ ] Go to Phone Numbers → Their number
- [ ] Messaging → "A message comes in"
- [ ] Paste Reply Handler webhook URL
- [ ] Save

### **Airtable Configuration:**
- [ ] Create main tables (Customers, Appointments, etc.)
- [ ] Create "Conversations" table with fields:
  - Phone (Phone number)
  - Timestamp (Date)
  - Incoming Message (Long text)
  - Intent Detected (Single select)
  - Auto Response (Long text)
  - Needs Human (Checkbox)

### **Testing:**
- [ ] Text client's number with "Hi"
- [ ] Verify auto-reply received
- [ ] Text "BOOK" - verify keyword response
- [ ] Text random question - verify fallback response
- [ ] Check Airtable - verify all logged
- [ ] Verify owner notification works

### **Activation:**
- [ ] Activate main workflow
- [ ] Activate reply handler
- [ ] Monitor first 24 hours
- [ ] Train client on Airtable dashboard

---

## 💡 **ARCHITECTURE BENEFITS**

### **Why Centralized Reply Handler?**

✅ **One place to update keywords**
- Add new keywords in one workflow
- Affects all clients instantly
- No need to update 5 different workflows

✅ **Consistent customer experience**
- Same reply logic across all messages
- Whether it's a reminder, review request, or reactivation

✅ **Easier to maintain**
- Bug fixes in one place
- Improvements benefit all workflows
- Less code duplication

✅ **Cleaner architecture**
- Main workflows focus on outbound automation
- Reply handler focuses on inbound conversation
- Separation of concerns

✅ **Scales better**
- Add AI later (just upgrade reply handler)
- Add new keywords (just update reply handler)
- Add new clients (just clone and configure)

---

## 🚨 **COMMON MISTAKES TO AVOID**

### **Mistake #1: Not configuring Twilio webhook**
❌ Import workflows but forget to update Twilio
✅ Always configure Twilio to point to Reply Handler

### **Mistake #2: Activating main workflow only**
❌ Salon workflow active, reply handler inactive
✅ Both must be active for complete functionality

### **Mistake #3: Using wrong webhook URL**
❌ Point Twilio to main workflow webhook
✅ Point Twilio to Reply Handler webhook (`/incoming-reply`)

### **Mistake #4: Forgetting Conversations table**
❌ Reply handler tries to log, table doesn't exist
✅ Create Conversations table before testing

### **Mistake #5: Not testing end-to-end**
❌ Test workflows individually
✅ Test full customer journey (send reminder → reply → log)

---

## 📊 **WHAT GETS LOGGED WHERE**

### **Airtable: Customers Table**
```
Logged by: Main Workflow
Contains: Customer info, visit history, status
Updated when: New customer, appointment booked, visit completed
```

### **Airtable: Appointments Table**
```
Logged by: Main Workflow
Contains: Appointment details, reminders sent, confirmations
Updated when: Appointment created, reminder sent, completed
```

### **Airtable: Conversations Table**
```
Logged by: Reply Handler
Contains: All incoming messages, intents, responses
Updated when: Customer replies to any message
```

This separation keeps your data organized and makes reporting easy.

---

## 🔄 **MESSAGE FLOW DIAGRAMS**

### **Scenario 1: First Contact**

```
1. Customer texts: "Hi, I need a haircut"
   ↓
2. Twilio receives message
   ↓
3. Twilio webhook → Reply Handler
   ↓
4. Reply Handler detects: No keyword (general inquiry)
   ↓
5. Reply Handler responds: "Thanks! We'll respond within 30 min"
   ↓
6. Reply Handler logs to Conversations table
   ↓
7. Reply Handler emails/texts owner: "New message needs response"
   ↓
8. Owner follows up personally
```

### **Scenario 2: Appointment Reminder Flow**

```
Day Before Appointment:
1. Salon Workflow triggers: "Daily 9am - Check Appointments"
   ↓
2. Gets tomorrow's appointments from Airtable
   ↓
3. Sends SMS: "Reminder tomorrow 2pm. Reply CONFIRM"
   ↓
4. Logs "24hr Reminder Sent = TRUE" in Airtable
   
Customer Response:
5. Customer replies: "CONFIRM"
   ↓
6. Twilio webhook → Reply Handler
   ↓
7. Reply Handler detects: "CONFIRM" keyword
   ↓
8. Reply Handler responds: "Great! You're confirmed. See you soon!"
   ↓
9. Reply Handler logs confirmation to Conversations table
   ↓
10. Done! Customer confirmed, all logged
```

### **Scenario 3: Reactivation Campaign**

```
Monthly Reactivation:
1. Salon Workflow triggers: "Monthly - Customer Reactivation"
   ↓
2. Gets inactive customers (60+ days)
   ↓
3. Sends SMS: "Miss you! 20% off if you book. Reply BOOK"
   ↓
4. Logs "Reactivation Sent = TRUE" in Airtable

Customer Response:
5. Customer replies: "BOOK"
   ↓
6. Twilio webhook → Reply Handler
   ↓
7. Reply Handler detects: "BOOK" keyword
   ↓
8. Reply Handler responds: "Perfect! What service? Or call: (555) 123-4567"
   ↓
9. Reply Handler logs to Conversations
   ↓
10. Reply Handler emails owner: "Inactive customer wants to book!"
   ↓
11. Owner calls customer to schedule
```

---

## 🎯 **CUSTOMIZATION OPTIONS**

### **Adding New Keywords**

Edit Reply Handler → "Detect Intent from Keywords" node:

```javascript
// Add to the JavaScript code:

else if (['HOURS', 'OPEN', 'TIME', 'SCHEDULE'].some(word => body.includes(word))) {
  intent = 'hours';
  response = `We're open:\nMon-Fri: 9am-7pm\nSat: 10am-6pm\nSun: Closed`;
}
```

### **Niche-Specific Keywords**

For a restaurant:
```javascript
else if (['MENU', 'FOOD', 'SPECIALS'].some(word => body.includes(word))) {
  intent = 'menu';
  response = `Check out our menu: {{$env.MENU_URL}}\n\nToday's special: {{$env.DAILY_SPECIAL}}`;
}
```

For a gym:
```javascript
else if (['CLASS', 'SCHEDULE', 'TIMES'].some(word => body.includes(word))) {
  intent = 'schedule';
  response = `Class schedule: {{$env.SCHEDULE_URL}}\n\nNext class: CrossFit at 6pm!`;
}
```

### **Multi-Language Support**

```javascript
// Detect Spanish keywords
else if (['RESERVAR', 'AGENDAR', 'CITA'].some(word => body.includes(word))) {
  intent = 'booking';
  response = `¡Perfecto! ¿Qué servicio necesita?\n\nO llámenos: {{$env.BUSINESS_PHONE}}`;
}
```

---

## 📈 **MONITORING & OPTIMIZATION**

### **Week 1: Monitor Conversations Table**

Review what customers are saying:
```sql
SELECT "Incoming Message", "Intent Detected", COUNT(*)
FROM Conversations
WHERE "Needs Human" = TRUE
GROUP BY "Incoming Message", "Intent Detected"
ORDER BY COUNT(*) DESC
```

Find common unhandled messages and add keywords.

### **Week 2-4: Improve Responses**

Track which auto-responses lead to bookings:
```sql
SELECT "Intent Detected", COUNT(*) as Conversions
FROM Conversations
LEFT JOIN Appointments ON Conversations.Phone = Appointments.Phone
WHERE Appointments.Status = 'Booked'
GROUP BY "Intent Detected"
```

Optimize responses that convert best.

### **Month 2+: Consider AI Upgrade**

If you have 100+ logged conversations:
- Train AI on successful conversation patterns
- Deploy AI reply handler
- See AI-INTEGRATION-GUIDE.md

---

## ✅ **SUCCESS CRITERIA**

Your reply handler is working correctly when:

- ✅ Customer texts "BOOK" → Gets booking response
- ✅ Customer texts "CONFIRM" → Gets confirmation response
- ✅ Customer texts random question → Gets "We'll respond" + owner is notified
- ✅ All conversations logged to Airtable
- ✅ No customer messages go unanswered
- ✅ Owner receives alerts for messages needing human response

---

## 🆘 **TROUBLESHOOTING**

### **Problem: Customer replies but nothing happens**

**Check:**
1. Is Reply Handler workflow activated?
2. Is Twilio webhook configured correctly?
3. Copy webhook URL from Reply Handler → Compare to Twilio config
4. Check n8n execution logs for errors

### **Problem: Auto-reply sends but keyword not detected**

**Check:**
1. Customer's exact text (case matters for some keywords)
2. Reply Handler code - are keywords uppercase?
3. Add logging to see what `body` variable contains

### **Problem: Owner not getting notifications**

**Check:**
1. Email credentials configured?
2. SMS node has correct owner phone?
3. Check "Needs Human Response?" node logic
4. Test with message that should trigger (random question)

---

## 📞 **NEXT STEPS**

1. **Read this guide** (you're doing it!)
2. **Test in your dev environment** (30 min)
3. **Deploy to beta client** (1 client first)
4. **Monitor for 1 week** (check Conversations table daily)
5. **Optimize keywords** (add common customer phrases)
6. **Scale to all clients** (clone setup process)

---

**You now have a complete, end-to-end system that actually fulfills the "Reply BOOK" promise!** 🚀



