# ⚡ RAPID SETUP GUIDE

**Complete client installation in under 2 hours using this step-by-step guide.**

---

## 🎯 **PREPARATION** (Before You Arrive)

### **Day Before Install:**

1. **Gather Client Info** (via email/text):
```
Hi {{CLIENT_NAME}}!

Excited for tomorrow! Quick info I need:

📱 Business phone: _______________
✉️ Email: _______________________
🏢 Business address: ____________
⏰ Business hours: ______________
👥 Staff names: _________________
📋 Services offered: ____________
⭐ Google review link: __________

See you tomorrow at {{TIME}}!
- Ben
```

2. **Prepare Your Laptop:**
- [ ] Charge to 100%
- [ ] Download niche template from `/n8n-workflows/`
- [ ] Open Twilio dashboard
- [ ] Open n8n dashboard
- [ ] Open Airtable
- [ ] Have hotspot ready (backup internet)

3. **Print Materials:**
- [ ] 2-Hour Checklist
- [ ] Quick Reference Card (blank)
- [ ] Invoice/receipt

---

## ⚡ **THE 2-HOUR PROCESS**

### **HOUR 1: BUILD THE INFRASTRUCTURE**

---

#### **STEP 1: Twilio Setup** (10 minutes)

**Minute 0:00 - Create Subaccount**
```
1. Go to: console.twilio.com
2. Click: Account → Subaccounts
3. Click: Create new subaccount
4. Name: "[Client Business Name]"
5. Click: Create
```

**Minute 0:02 - Buy Phone Number**
```
1. In the subaccount → Phone Numbers → Buy a number
2. Search by area code: [Client's local area code]
3. Filter: SMS Capable + Voice Capable
4. Buy a local number ($1/month)
5. Copy the phone number
```

**Minute 0:05 - Configure Number**
```
1. Go to: Phone Numbers → Manage → Active Numbers
2. Click: The number you just bought
3. Scroll to "Messaging Configuration"
4. A message comes in: [Leave blank for now - will update from n8n]
5. Scroll to "Voice Configuration"
6. A call comes in: [Leave blank for now]
7. Click: Save
```

**Minute 0:08 - Get Credentials**
```
1. Go to: Account → Account Info (in the subaccount)
2. Copy: Account SID
3. Copy: Auth Token
4. Paste both into your notes app (you'll need for n8n)
```

✅ **Checkpoint:** Twilio number bought & credentials saved

---

#### **STEP 2: Airtable Setup** (5 minutes)

**Minute 0:10 - Duplicate Master Base**
```
1. Go to: airtable.com
2. Find: "Master Client Base Template"
3. Click: ... (three dots)
4. Click: Duplicate base
5. Rename: "{{BUSINESS_NAME}} - CRM"
6. Click: into the new base
```

**Minute 0:12 - Customize Fields**
```
1. Click: "Customers" table
2. Click: "Tags" field → Edit
3. Add tags: VIP, Regular, New, etc.

4. Click: "Appointments" table
5. Click: "Service" field → Edit
6. Add services: [from client info sheet]
7. Click: "Staff" field → Edit
8. Add staff names: [from client info sheet]
```

**Minute 0:14 - Get Base ID & Share**
```
1. Copy URL: airtable.com/appXXXXXXXXX/...
2. The "appXXXXXXXXX" part = Base ID (save this)
3. Click: Share (top right)
4. Toggle: "Create a shareable link"
5. Set to: "Editor" (if client will add appointments)
6. Copy link (you'll give to client at end)
```

✅ **Checkpoint:** Airtable base created & customized

---

#### **STEP 3: n8n Workflow Setup** (30 minutes)

**Minute 0:15 - Import Template**
```
1. Go to: your n8n instance (app.n8n.cloud)
2. Click: Workflows → Add workflow
3. Click: Import from file
4. Select: The niche template JSON (e.g., 1-SALON-automation-template.json)
5. Rename: "{{BUSINESS_NAME}} - Automations"
```

**Minute 0:18 - Add Twilio Credentials**
```
1. Click: Any Twilio node in the workflow
2. Click: Credential for Twilio
3. Click: "+ Create New"
4. Name: "{{BUSINESS_NAME}} - Twilio"
5. Paste: Account SID (from Step 1)
6. Paste: Auth Token (from Step 1)
7. Click: Save
8. Select this credential in the node
```

**Minute 0:22 - Add Airtable Credentials**
```
1. Click: Any Airtable node
2. Click: Credential for Airtable
3. Click: "+ Create New"
4. Name: "{{BUSINESS_NAME}} - Airtable"
5. Go to: airtable.com/account → Generate API key
6. Copy API key
7. Paste into n8n credential
8. Click: Save
```

**Minute 0:25 - Find/Replace Variables**
```
Use n8n's search (Cmd+F / Ctrl+F) to find and replace:

FIND                    REPLACE WITH
{{BUSINESS_NAME}}       → "Sarah's Salon"
{{PHONE}}               → "+15551234567"  (E.164 format)
{{OWNER_NAME}}          → "Sarah"
{{AIRTABLE_BASE_ID}}    → "appXXXXXXXXX"  (from Step 2)
{{ADDRESS}}             → "123 Main St, City, State"
{{GOOGLE_REVIEW_LINK}}  → (their Google review link)

💡 Pro tip: Use Find All → Select all instances → Replace all
```

**Minute 0:35 - Configure Webhook Node**
```
1. Find: "Incoming SMS/Call" webhook node
2. Click: it
3. Copy: The webhook URL (looks like: https://your-instance.app.n8n.cloud/webhook/abc123)
4. Save this URL
```

**Minute 0:37 - Connect Webhook to Twilio**
```
1. Go back to: Twilio console
2. Go to: Phone Numbers → Active Numbers → [The number]
3. Scroll to: "Messaging Configuration"
4. A message comes in → Webhook
5. Paste: The n8n webhook URL
6. HTTP Method: POST
7. Scroll to: "Voice Configuration"
8. A call comes in → Webhook
9. Paste: Same n8n webhook URL (or different if you made separate call flow)
10. Click: Save
```

**Minute 0:40 - Test the Workflow**
```
1. In n8n: Click "Execute Workflow" (to activate it)
2. From YOUR phone: Text the client's new Twilio number
3. Check: Did you get an auto-reply? ✅
4. Check: Did it log to Airtable "Customers" table? ✅
5. If not: Debug (check credentials, webhook URL, etc.)
```

**Minute 0:43 - Activate Workflow**
```
1. Toggle: "Active" switch (top right of workflow)
2. Status should show: "Active"
```

✅ **Checkpoint:** n8n workflow is LIVE and tested

---

#### **STEP 4: Final Infrastructure Checks** (5 minutes)

**Minute 0:45 - End-to-End Test**
```
Test 1: Incoming Text
  → Text the number
  → Should get auto-reply
  → Should log in Airtable

Test 2: Appointment Reminder (Manual Trigger)
  → In Airtable: Add a test appointment for tomorrow
  → In n8n: Manually execute the "24hr reminder" flow
  → Should send reminder SMS
  → Check: "Reminder Sent" checkbox = TRUE

Test 3: Review Request (Manual Trigger)
  → In Airtable: Mark test appointment as "Completed"
  → In n8n: Manually execute "review request" flow
  → Should send review request SMS
```

**Minute 0:50 - Document Everything**
```
In a Google Doc or note:

Client: {{BUSINESS_NAME}}
Twilio Number: {{PHONE}}
Twilio Account SID: {{SID}}
Twilio Auth Token: {{TOKEN}}
Airtable Base ID: {{BASE_ID}}
Airtable Link: {{LINK}}
n8n Workflow: {{WORKFLOW_NAME}}

Save this - you'll need it for support
```

✅ **Checkpoint:** HOUR 1 COMPLETE - Infrastructure is built and tested

---

### **HOUR 2: TRAINING & GO LIVE**

---

#### **STEP 5: Client Training** (30 minutes)

**Minute 1:00 - Introduction (5 min)**
```
"Okay! Everything is set up and working. Let me show you how it works."

[Open Airtable on their computer or yours (screen share)]
```

**Minute 1:05 - Airtable Walkthrough (15 min)**

**Part 1: Customers Table (5 min)**
```
"This is your customer database. Every person who texts or calls gets added here automatically.

Let me show you how to add someone manually:
1. Click the + button
2. Add Name, Phone, Email
3. Save

That's it! Now they're in your system."

[Have them add a test customer]
```

**Part 2: Appointments Table (8 min)**
```
"This is where all your appointments live. Let's book one:

1. Click + button
2. Customer: Select the test customer we just added
3. Date: Pick tomorrow
4. Time: 2:00 PM
5. Service: Haircut
6. Status: Scheduled
7. Save

Watch what happens..."

[Show them the automation]

"In about 2 seconds... check your phone."

[They should receive a booking confirmation text]

"That's the auto-confirmation. Tomorrow at 9am, they'll get a 24-hour reminder. And 1 hour before, they'll get another reminder."

[Show them the Messages table]

"See? It logged the message here automatically. You can see every text that goes out."
```

**Part 3: Calendar View (2 min)**
```
"Want to see it as a calendar?

Click: Appointments → Calendar view

This shows all appointments visually. You can drag and drop to reschedule (if using that feature)."
```

**Minute 1:20 - What's Automated (5 min)**
```
"Here's what happens automatically - you don't have to do anything:

1. Someone texts/calls → Auto-reply
2. Appointment tomorrow → 24hr reminder at 9am
3. Appointment in 1 hour → 1hr reminder
4. Appointment completed → Review request 2hrs later
5. Customer inactive 60+ days → Reactivation message

All automatic. All logged. All in this dashboard."

[Show them the automation checkboxes]

"See these? 'Reminder Sent', 'Review Requested', etc. Don't uncheck these - they prevent duplicate messages. The system manages these."
```

**Minute 1:25 - Q&A (5 min)**
```
Common Questions:

Q: "Can I edit the messages?"
A: "Yes! Just text me what you want changed and I'll update them."

Q: "What if I want to add more staff?"
A: "Just add them to the Staff field in Appointments table."

Q: "Can I see who hasn't booked in a while?"
A: "Yep! Click Customers → Inactive view. Shows everyone 60+ days."

Q: "What if something breaks?"
A: "Text me immediately. I'll fix it ASAP."
```

✅ **Checkpoint:** Client understands the basics

---

#### **STEP 6: Go Live!** (10 minutes)

**Minute 1:30 - Remove Test Data**
```
1. Delete test customer
2. Delete test appointment
3. Clear test messages (or leave for reference)
```

**Minute 1:32 - Live Test with Real Customer**
```
"Do you have a customer you can text right now? Let's send them a real message."

[Client texts a customer from the Twilio number]

"Now it's live! Your system is working."
```

**Minute 1:35 - Give Client Access**
```
1. Send Airtable link via email/text
2. Show them how to bookmark it
3. Have them log in on their phone
4. Add it to their home screen (if on mobile)
```

**Minute 1:38 - Handoff Materials**
```
Give them:
  □ Printed Quick Reference Card
  □ Your business card
  □ Airtable link (sent via text)
  □ Your phone number (for support)
```

✅ **Checkpoint:** System is LIVE with real customer

---

#### **STEP 7: Payment & Wrap-Up** (10 minutes)

**Minute 1:40 - Send Invoice**
```
1. Open: Stripe/Square/Venmo
2. Send invoice for: Final balance
3. Client pays on the spot
4. Send receipt via email
```

**Minute 1:45 - Final Instructions**
```
"You're all set! Here's what happens next:

1. I'll check in with you in 7 days - just a quick text
2. In 30 days, we'll review your results
3. If you need anything before then, text me anytime

Questions before I go?"
```

**Minute 1:50 - Set Follow-Up Reminders**
```
In YOUR calendar:
  □ Day 7: "Check in with {{CLIENT_NAME}}"
  □ Day 30: "{{CLIENT_NAME}} - 30-day review & testimonial"
  □ Day 60: "{{CLIENT_NAME}} - Ask for referrals"
```

**Minute 1:52 - Update YOUR Airtable**
```
In your "Client Tracker" base:
  □ Status: LIVE
  □ Install Date: [Today]
  □ Package: [Basic/Pro/Premium]
  □ Revenue: $[Amount]
  □ Notes: [Any special requests]
```

**Minute 1:55 - Final Thank You**
```
"Thanks for trusting me with your business! This is going to save you so much time and bring in more customers. I'm excited to see your results!"

[Shake hands, leave]
```

✅ **Checkpoint:** INSTALLATION COMPLETE!

---

## 🚨 **TROUBLESHOOTING GUIDE**

### **Issue: Running Behind Schedule**

**At 30 minutes:**
- Should have: Twilio + Airtable created
- If not: Skip some customizations, do them later

**At 60 minutes:**
- Should have: n8n workflow imported and configured
- If not: Import only the BASIC workflow (auto-reply + reminders), skip advanced features

**At 90 minutes:**
- Should have: Testing complete, starting training
- If not: Do shorter training, send video later

### **Issue: Client Doesn't Have Info Ready**

**Missing Google review link:**
- Skip review requests for now, add later
- Or create one on the spot: business.google.com

**Missing business hours:**
- Use generic: "Mon-Fri 9am-6pm, Sat 9am-2pm"
- Update later

**Missing staff names:**
- Use "Staff Member 1", "Staff Member 2"
- They can rename in Airtable later

### **Issue: Technical Problems**

**Twilio webhook not working:**
1. Check webhook URL is correct (copy/paste again)
2. Verify n8n workflow is Active
3. Check Twilio number is connected to messaging service
4. Try a different number

**Airtable not logging:**
1. Check Airtable credential is correct
2. Verify Base ID is right
3. Check table names match exactly (case-sensitive)
4. Re-save credential

**SMS not sending:**
1. Check Twilio balance (add $20 if needed)
2. Verify phone number format: +15551234567 (E.164)
3. Check number is SMS-capable
4. Try sending manual test from Twilio console

---

## ⚡ **SPEED HACKS**

### **Use Shortcuts:**
- Create Chrome bookmark folder with: Twilio, n8n, Airtable
- Save client info template in TextExpander/Alfred
- Have phone number formatter ready

### **Pre-populate Data:**
- Before arriving, create Airtable base with their business name
- Pre-fill common services if you know their niche
- Have Twilio subaccount created (just need to buy number)

### **Batch Similar Installs:**
- Do 2-3 salons in one day (reuse similar setup)
- Duplicate the previous client's workflow (faster than template)
- Get in a rhythm

### **Record Everything Once:**
- Record a generic training video (reuse for all clients)
- Print 20 quick reference cards at once
- Create email templates for follow-ups

---

## 📊 **TIME TRACKING**

**Target Times:**
- Twilio: 10 min
- Airtable: 5 min
- n8n: 30 min
- Testing: 5 min
- Training: 30 min
- Go Live: 10 min
- Payment: 10 min
- Buffer: 20 min
**Total: 2:00**

**If You're Crushing It:**
- Hour 1: 45 min (15 min ahead)
- Hour 2: 45 min (15 min ahead)
- Done in 1:30!

---

## ✅ **SUCCESS CHECKLIST**

Before you leave, confirm:

**Technical:**
- [ ] Incoming SMS auto-replies
- [ ] Appointment reminders scheduled
- [ ] Messages log to Airtable
- [ ] Customers save to Airtable
- [ ] Client can log into Airtable

**Business:**
- [ ] Final payment received
- [ ] Invoice sent
- [ ] Client has your contact info
- [ ] 7-day check-in scheduled
- [ ] Client is HAPPY

---

**2-Hour Install = $500-2000 per client**  
**Master this process = $20k-40k/week** 🚀

