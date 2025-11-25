# ⏱️ 2-HOUR INSTALLATION CHECKLIST

**Print this. Check boxes. Stay on time. Get paid.**

---

## 📋 CLIENT INFO

```
Client Name: _________________________
Business Name: _______________________
Phone: _______________________________
Email: _______________________________
Niche: _______________________________
Package: ☐ Basic  ☐ Pro  ☐ Premium
Install Date: ________________________
Start Time: __________________________
```

---

## ✅ PRE-INSTALL (Before Arrival)

**Completed Before You Show Up:**

- [ ] **Deposit received** ($500-2000)
- [ ] **Gathered business info** (name, phone, hours)
- [ ] **Selected niche template** (from n8n-workflows/)
- [ ] **Verified phone number available** (can port or get new)
- [ ] **Brought laptop** + charger + hotspot backup

**Time Estimate:** 5 min prep

---

## 🏗️ HOUR 1: INFRASTRUCTURE (60 Minutes)

### **Minutes 0-15: Create Accounts**

- [ ] **0:00** - Open Twilio dashboard
- [ ] **0:02** - Create subaccount for client
- [ ] **0:05** - Buy phone number or start port request
- [ ] **0:08** - Copy Account SID + Auth Token
- [ ] **0:10** - Open Airtable
- [ ] **0:11** - Duplicate "Master Client Base" template
- [ ] **0:13** - Rename to "[Business Name] CRM"
- [ ] **0:14** - Get Base ID + share link
- [ ] **0:15** - ✅ CHECKPOINT: Accounts created

---

### **Minutes 15-35: Configure Twilio**

- [ ] **0:15** - Open Twilio Messaging Service
- [ ] **0:17** - Add client phone number to service
- [ ] **0:19** - Set business hours (e.g., Mon-Fri 9am-6pm)
- [ ] **0:21** - Configure auto-reply for after-hours
- [ ] **0:23** - Upload SMS templates for their niche
- [ ] **0:28** - Configure webhook URLs (will update from n8n)
- [ ] **0:30** - Test by texting the number
- [ ] **0:32** - Verify auto-reply works
- [ ] **0:35** - ✅ CHECKPOINT: Twilio configured

---

### **Minutes 35-55: Configure n8n**

- [ ] **0:35** - Open n8n dashboard
- [ ] **0:36** - Go to niche template folder
- [ ] **0:37** - Click "Import Workflow"
- [ ] **0:38** - Import main automation workflow
- [ ] **0:40** - Rename to "[Client Name] - Automations"
- [ ] **0:42** - Find/Replace in workflow:
  - `{{BUSINESS_NAME}}` → "Their Business"
  - `{{PHONE}}` → "(555) 123-4567"
  - `{{EMAIL}}` → "client@email.com"
  - `{{OWNER_NAME}}` → "Owner Name"
- [ ] **0:45** - Add Twilio credentials (from step above)
- [ ] **0:47** - Add Airtable credentials (from step above)
- [ ] **0:49** - Copy webhook URLs from workflow
- [ ] **0:50** - Paste webhook URLs into Twilio
- [ ] **0:52** - Activate workflow in n8n
- [ ] **0:54** - Test webhook with manual trigger
- [ ] **0:55** - ✅ CHECKPOINT: n8n configured

---

### **Minutes 55-60: Airtable Setup**

- [ ] **0:55** - Open client's Airtable base
- [ ] **0:56** - Update business info in settings
- [ ] **0:57** - Configure views (Kanban, Calendar)
- [ ] **0:58** - Set up automations (if Pro/Premium)
- [ ] **0:59** - Share base with client (view-only)
- [ ] **1:00** - ✅ CHECKPOINT: HOUR 1 COMPLETE

---

## ✅ HOUR 2: TESTING & TRAINING (60 Minutes)

### **Minutes 60-75: System Testing**

- [ ] **1:00** - Call client's business number
- [ ] **1:02** - Verify auto-reply SMS received
- [ ] **1:04** - Send test booking via SMS
- [ ] **1:06** - Verify confirmation SMS
- [ ] **1:08** - Check Airtable - appointment should appear
- [ ] **1:10** - Wait for reminder test (or trigger manually)
- [ ] **1:12** - Verify 24-hour reminder sends
- [ ] **1:13** - Complete test appointment
- [ ] **1:14** - Verify review request sends
- [ ] **1:15** - ✅ CHECKPOINT: All tests passed

---

### **Minutes 75-105: Client Training**

- [ ] **1:15** - Start screen share or in-person demo
- [ ] **1:16** - **Show Airtable Dashboard (10 min)**
  - [ ] How to view customers
  - [ ] How to see appointments
  - [ ] How to check message history
  - [ ] How to add customer manually
  
- [ ] **1:26** - **Demonstrate Each Automation (10 min)**
  - [ ] Auto-reply to missed calls
  - [ ] Booking confirmations
  - [ ] Appointment reminders
  - [ ] Review requests
  - [ ] Any custom flows
  
- [ ] **1:36** - **How to Customize (5 min)**
  - [ ] Show where to edit message templates
  - [ ] How to adjust timing
  - [ ] How to turn flows on/off
  
- [ ] **1:41** - **Q&A (4 min)**
  - [ ] Answer their questions
  - [ ] Address concerns
  - [ ] Confirm they understand
  
- [ ] **1:45** - ✅ CHECKPOINT: Training complete

---

### **Minutes 105-120: Go Live & Wrap Up**

- [ ] **1:45** - Send client training materials:
  - [ ] Pre-recorded training video link
  - [ ] PDF quick reference guide
  - [ ] Login credentials (Airtable, Twilio dashboard)
  - [ ] Your contact info for support
  
- [ ] **1:50** - **Flip the switch - GO LIVE!**
  - [ ] Activate all workflows
  - [ ] Remove "Test" label
  - [ ] System is officially running
  
- [ ] **1:52** - Send real test message to client
- [ ] **1:54** - Client confirms they received it
- [ ] **1:55** - **Collect final payment**
  - [ ] Send Stripe invoice link
  - [ ] Or accept Venmo/Cash
  - [ ] Confirm payment received
  
- [ ] **1:58** - Set calendar reminder:
  - [ ] 7-day check-in
  - [ ] 30-day optimization call
  - [ ] 60-day testimonial request
  
- [ ] **1:59** - Update YOUR Airtable:
  - [ ] Client status → "LIVE"
  - [ ] Add to active clients
  - [ ] Note any special requests
  
- [ ] **2:00** - ✅ INSTALLATION COMPLETE!

---

## 📊 POST-INSTALL

**Send Within 24 Hours:**

- [ ] Welcome email with all links
- [ ] Invoice/receipt for records
- [ ] Add to monthly support list (if applicable)

**Follow-Up Schedule:**

- [ ] **Day 7:** "How's it going?" check-in
- [ ] **Day 14:** Quick optimization review
- [ ] **Day 30:** Request testimonial
- [ ] **Day 60:** Ask for referrals

---

## 🚨 TROUBLESHOOTING

### **If Behind Schedule:**

**At 30 min:** Should have accounts created  
**At 60 min:** Should have infrastructure done  
**At 90 min:** Should have tested everything  

**If you're behind:**
- Skip optional features
- Test fewer workflows (test critical ones only)
- Shorten training (send video instead)
- Extend by 30 min max

### **Common Issues:**

**Phone number port takes too long:**
- Use temporary Twilio number
- Port in background, switch later

**Client wants custom features:**
- Note them for post-install
- Don't add during 2-hour install
- Upsell as "premium customization"

**Testing fails:**
- Check webhook URLs are correct
- Verify credentials are active
- Restart n8n workflow
- Check Twilio balance

**Client confused during training:**
- Send video, schedule follow-up call
- Keep moving forward
- Better to go live than delay

---

## 💰 PAYMENT CONFIRMATION

```
Package: $_________
Deposit: $_________
Balance Due: $_________
Payment Method: _________
Payment Received: ☐ Yes  ☐ No
Receipt Sent: ☐ Yes  ☐ No
```

---

## 📝 NOTES

```
Special requests:
_____________________________________________
_____________________________________________

Issues encountered:
_____________________________________________
_____________________________________________

Follow-up needed:
_____________________________________________
_____________________________________________

Referrals mentioned:
_____________________________________________
_____________________________________________
```

---

## ✅ FINAL SIGN-OFF

```
Client Name: ___________________________
Client Signature: ______________________
Date: __________________________________

System Status: ☐ LIVE ☐ PENDING ☐ ISSUES

Next Action: ___________________________
Due Date: ______________________________
```

---

## 🎯 SUCCESS METRICS

**Your Goal Per Install:**
- ✅ Complete in 2 hours or less
- ✅ All automations working
- ✅ Client trained and confident
- ✅ Final payment received
- ✅ Client happy (testimonial-worthy)

**If all checked = Perfect install! 🎉**

---

**Total Time: 2:00**  
**Status: COMPLETE ✅**  
**Next Install: [Time]**

