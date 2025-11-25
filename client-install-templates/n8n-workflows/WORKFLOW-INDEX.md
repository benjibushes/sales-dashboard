# 📚 n8n Workflow Template Index

**Complete automation templates for 8 business niches.**

---

## 🎯 **HOW TO USE THESE TEMPLATES**

1. **Choose the niche** that matches your client's business
2. **Import the JSON** into n8n (Workflows → Import from file)
3. **Find/Replace variables** (use Cmd+F / Ctrl+F):
   - `{{BUSINESS_NAME}}` → Client's business name
   - `{{PHONE}}` → Their Twilio number (E.164 format: +15551234567)
   - `{{OWNER_NAME}}` → Owner's first name
   - `{{AIRTABLE_BASE_ID}}` → Their Airtable base ID (appXXXXXX)
   - `{{ADDRESS}}` → Physical address
   - `{{GOOGLE_REVIEW_LINK}}` → Their Google review URL
4. **Add credentials** (Twilio + Airtable)
5. **Test** the workflow
6. **Activate** and go live!

---

## 📋 **TEMPLATE LIBRARY**

### **1. SALON / HAIR STUDIO** ✂️
**File:** `1-SALON-automation-template.json`

**Automations Included:**
- ✅ Auto-reply to incoming texts/calls
- ✅ Booking confirmations
- ✅ 24-hour appointment reminders (daily at 9am)
- ✅ 1-hour appointment reminders (hourly check)
- ✅ No-show prevention (2hr before check-in)
- ✅ Post-service thank you + product recommendation
- ✅ Review requests (after completed appointments)
- ✅ Customer reactivation (60+ days inactive, with 20% offer)

**Best For:**
- Hair salons
- Barbershops
- Nail salons
- Estheticians
- Waxing studios

**Expected Results:**
- 50-70% reduction in no-shows
- 3-5x more Google reviews
- 20-30% reactivation of old customers

---

### **2. MED SPA / IV THERAPY** 💉
**File:** `2-MEDSPA-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Auto-reply to inquiries
- ✅ Pre-appointment instructions (hydration, prep, etc.)
- ✅ 24-hour appointment reminders
- ✅ 1-hour appointment reminders
- ✅ Post-treatment check-in (2 hours after)
- ✅ Post-treatment care instructions
- ✅ Package upsell automation (after first treatment)
- ✅ Review requests
- ✅ Treatment series reminders (for multi-session packages)

**Best For:**
- Med spas
- IV therapy clinics
- Botox/filler clinics
- Laser treatment centers
- Wellness clinics

**Expected Results:**
- Higher package conversion (25-40% upsell rate)
- Better treatment adherence
- More 5-star reviews

---

### **3. GYM / PERSONAL TRAINER** 💪
**File:** `3-GYM-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Class booking confirmations
- ✅ Class reminders (24hr + 1hr before)
- ✅ Cancellation handling (release spot)
- ✅ Membership renewal reminders
- ✅ Payment failure notifications
- ✅ Milestone celebrations (weight goals, attendance records)
- ✅ Inactivity check-in (7 days no attendance)
- ✅ Referral program automation
- ✅ PT session booking flow

**Best For:**
- CrossFit gyms
- Boutique fitness studios
- Personal trainers
- Yoga/Pilates studios
- Martial arts gyms

**Expected Results:**
- Fewer missed classes
- Higher retention
- More referrals

---

### **4. REALTOR / REAL ESTATE** 🏡
**File:** `4-REALTOR-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Showing confirmations
- ✅ Showing reminders (24hr + 1hr)
- ✅ Post-showing follow-up
- ✅ Market update automation (weekly)
- ✅ New listing alerts (based on preferences)
- ✅ Open house reminders
- ✅ Contract milestone updates
- ✅ Post-close follow-up & request for referrals
- ✅ Home anniversary automation

**Best For:**
- Residential realtors
- Commercial agents
- Real estate teams
- Property managers

**Expected Results:**
- Better client communication
- More referrals
- Faster responses to leads

---

### **5. RESTAURANT / CAFÉ** 🍽️
**File:** `5-RESTAURANT-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Reservation confirmations
- ✅ Reservation reminders (3 hours before)
- ✅ Waitlist notifications
- ✅ Table ready alerts
- ✅ Special event promotions
- ✅ Birthday/anniversary messages
- ✅ Loyalty program tracking
- ✅ Review requests
- ✅ Catering inquiry follow-ups

**Best For:**
- Full-service restaurants
- Cafés
- Bars
- Food trucks
- Catering companies

**Expected Results:**
- Fewer no-show reservations
- Higher loyalty program engagement
- More repeat customers

---

### **6. CONTRACTOR / HOME SERVICES** 🔨
**File:** `6-CONTRACTOR-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Quote request auto-reply
- ✅ Quote follow-up (3 days after sending)
- ✅ Job start notifications (day-of)
- ✅ Arrival time updates ("On our way!")
- ✅ Daily project updates
- ✅ Job completion notification
- ✅ Payment reminders
- ✅ Post-job review requests
- ✅ Seasonal maintenance reminders
- ✅ Referral requests

**Best For:**
- General contractors
- Plumbers
- Electricians
- HVAC
- Landscapers
- Handyman services
- Cleaning services

**Expected Results:**
- Faster quote follow-up
- Better customer communication
- More positive reviews
- Higher referral rate

---

### **7. STABLE / RANCH** 🐴
**File:** `7-STABLE-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Lesson confirmations
- ✅ Lesson reminders (24hr + 2hr)
- ✅ Weather cancellation notifications
- ✅ Monthly boarding reminders
- ✅ Payment due notifications
- ✅ Horse care updates (if boarding)
- ✅ Event announcements (shows, clinics)
- ✅ Farrier/vet reminder coordination
- ✅ Emergency alerts

**Best For:**
- Riding stables
- Boarding facilities
- Riding instructors
- Ranches
- Equestrian centers

**Expected Results:**
- Fewer missed lessons
- Better payment collection
- Improved customer communication

---

### **8. GENERIC / OTHER** 🎯
**File:** `8-GENERIC-automation-template.json` *(Create this next)*

**Automations Included:**
- ✅ Auto-reply to texts/calls
- ✅ Appointment confirmations
- ✅ 24-hour appointment reminders
- ✅ 1-hour appointment reminders
- ✅ Review requests
- ✅ Customer reactivation (60+ days)
- ✅ Basic follow-up sequences

**Best For:**
- Any business not covered by the other templates
- Multi-service businesses
- Professional services (accountants, lawyers, consultants)
- Retail stores
- Tutors
- Pet groomers
- Photographers

**Customization:**
- This is the base template - customize heavily for each client's unique needs

---

## 🛠️ **TEMPLATE FEATURES COMPARISON**

| Feature | Salon | MedSpa | Gym | Realtor | Restaurant | Contractor | Stable | Generic |
|---------|-------|--------|-----|---------|------------|------------|--------|---------|
| Auto-reply | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 24hr reminders | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 1hr reminders | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Review requests | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Reactivation | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Payment reminders | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Niche-specific | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## ⚡ **QUICK START WORKFLOW**

**For Your First Install:**

1. **Pick template** → Match client's niche
2. **Import to n8n** → 30 seconds
3. **Find/Replace** → 5 minutes
4. **Add credentials** → 3 minutes
5. **Test** → 2 minutes
6. **Activate** → 10 seconds

**Total: ~10 minutes to deploy a complete automation system!**

---

## 🧩 **TEMPLATE CUSTOMIZATION TIPS**

### **Easy Customizations:**
- Change message wording
- Adjust timing (e.g., send reminders at 8am instead of 9am)
- Add/remove emoji
- Change Google review link

### **Medium Customizations:**
- Add new message types (birthday, anniversary)
- Change reactivation timeframe (30 days instead of 60)
- Add conditional logic (different messages for different services)

### **Advanced Customizations:**
- Integrate with booking systems (Calendly, Acuity)
- Multi-location routing
- Dynamic pricing/packages
- AI-powered responses
- Multi-language support

---

## 📊 **TEMPLATE SUCCESS METRICS**

After installing, track these KPIs:

| Metric | Target | How to Measure |
|--------|--------|----------------|
| No-show rate | <10% | Airtable appointments |
| Review generation | +3-5/week | Google Business |
| Reactivation rate | 20-30% | Airtable customer activity |
| Response time | <5 min | Twilio logs |
| Message open rate | >95% | (SMS is nearly 100%) |

---

## 🎓 **NEXT STEPS**

1. **Review** the salon template (already created)
2. **Create** the remaining 7 templates (or hire VA to duplicate/modify)
3. **Test** each template with dummy data
4. **Document** any niche-specific notes
5. **Deploy** to real clients!

---

## 💡 **PRO TIPS**

1. **Duplicate, don't start from scratch** - Copy a similar niche template
2. **Keep a "Golden Master"** - Never edit your templates directly, always duplicate first
3. **Version control** - Name templates with v1, v2, v3 as you improve them
4. **Client-specific folder** - Save each client's workflow with their name
5. **Backup regularly** - Export workflows to JSON monthly

---

**Template Library = Your Secret Weapon**  
**Import → Customize → Deploy in under 15 minutes** ⚡

