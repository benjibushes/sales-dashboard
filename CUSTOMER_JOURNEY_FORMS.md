# Customer Journey Forms - Complete Setup

## ✅ What Was Built

Two separate qualification forms that pre-qualify leads **before** they get to you:

1. **Business Application Form** (`/work` page)
2. **Fitness Application Form** (`/fitness` page)

Both journeys are now completely separate with their own qualification logic.

---

## 🎯 Business Application Form

### Location
- **Page:** `/work` 
- **Component:** `components/BusinessApplicationForm.tsx`
- **Formspree Endpoint:** `xykyklwq`

### Form Fields

**Basic Info:**
- Name *
- Business Name *
- Email *
- Phone *

**Qualification Questions:**
- **Business Type** (dropdown)
  - Contractor (HVAC, Plumber, Electrician)
  - Salon/Spa
  - Gym/Fitness Studio
  - Coaching/Consulting
  - Auto Repair/Detailing
  - Other Service Business

- **Leads Per Month** (dropdown)
  - 0-10 leads
  - 10-30 leads
  - 30-50 leads
  - 50+ leads

- **Monthly Revenue** (dropdown)
  - $0-10K
  - $10-30K
  - $30-50K
  - $50K+

- **Biggest Challenge** (radio buttons)
  - Leads contact me when I'm on jobs/unavailable
  - No follow-up system, leads go cold
  - No online booking, too much back-and-forth
  - Website doesn't convert visitors
  - All of the above

- **Situation** (textarea) - Open text to describe their problem
- **How Did You Hear** (optional dropdown)

### Qualification Logic

**QUALIFIED if:**
- Leads per month: 10+ 
- Monthly revenue: $10K+

**UNQUALIFIED if:**
- Leads per month: 0-10
- Monthly revenue: $0-10K

### Success States

**Qualified Applicants See:**
```
✓ Application Received

Thanks for applying. I'll review your info and respond within 24 hours.

WHAT HAPPENS NEXT:
→ I'll review your business situation
→ If it's a fit, I'll send a calendar link for a discovery call
→ On the call, we'll discuss your specific challenges
→ No pressure, no sales pitch—just an honest conversation

Check your email for confirmation.
```

**Unqualified Applicants See:**
```
Thanks for Your Interest

Based on your current lead volume and revenue, you might not be 
at the stage where automation makes financial sense yet.

Focus on getting to 10+ leads per month first—then automation 
will give you serious ROI.

Want to stay in touch? Join my newsletter for tips on growing 
your service business.
```

---

## 💪 Fitness Application Form

### Location
- **Page:** `/fitness`
- **Component:** `components/FitnessApplicationForm.tsx`
- **Formspree Endpoint:** `xzdbdyrn`

### Form Fields

**Basic Info:**
- Name *
- Email *
- Phone *

**Qualification Questions:**
- **Fitness Level** (dropdown)
  - Beginner (not training at all)
  - Intermediate (training 1-2x/week inconsistently)
  - Advanced (training 3-4x/week but need structure)

- **Goals** (checkboxes - multiple select)
  - Build real strength and capability
  - Train for a specific event (ultra, competition)
  - Rebuild discipline and consistency
  - Recover from burnout/addiction
  - General fitness and health

- **What's Stopping You** (dropdown)
  - Lack of plan/structure
  - No accountability
  - Don't know where to start
  - Keep starting and quitting
  - All of the above

- **Commitment Level** (1-10 dropdown)
  - 10 - I'll do whatever it takes
  - 9 - Very serious
  - 8 - Serious
  - 7 - Committed but cautious
  - 6 - Interested
  - 5 - Just looking
  - 1-4 - Not sure yet

- **Why Now? What Changed?** (textarea) - Critical qualifier
- **Budget** (dropdown)
  - Yes, if it's the right fit ($300-500/month)
  - Need to know more first
  - No, that's too much

- **Additional Info** (optional textarea) - Injuries, constraints, etc.

### Qualification Logic

**QUALIFIED if:**
- Commitment level: 7-10
- Budget: "Yes, if it's the right fit"

**UNQUALIFIED if:**
- Commitment level: <7
- Budget: "No, that's too much"

### Success States

**Qualified Applicants See:**
```
✓ Application Received

I review every application personally. I'll reach out within 
24-48 hours if you're a fit.

WHAT HAPPENS NEXT:
→ I'll review your commitment level and goals
→ If we're a fit, I'll send a calendar link for an intro call
→ On the call, we'll discuss your situation
→ This isn't for everyone—I only work with people who are serious

Check your email for confirmation.
```

**Unqualified Applicants See:**
```
Not The Right Fit (Yet)

Based on your responses, I don't think coaching is the right 
move right now.

[If commitment <7]:
Your commitment level suggests you're not quite ready. That's 
fine—come back when you're serious about doing the work.

[If budget is no]:
Coaching is an investment. If budget is the issue, focus on 
getting that sorted first. Then reach out.

Want the free playbook instead? It'll give you the framework 
to start building discipline on your own.

[Button: Get Free Playbook]
```

---

## 📊 What Data You Receive

### Business Applicants (via Formspree)

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "businessName": "Smith Services LLC",
  "businessType": "contractor",
  "leadsPerMonth": "30-50",
  "monthlyRevenue": "$30-50K",
  "biggestChallenge": "no-followup",
  "situation": "We're getting leads but 40% fall through...",
  "howDidYouHear": "google",
  "formType": "business",
  "qualified": true,
  "timestamp": "2024-12-26T..."
}
```

### Fitness Applicants (via Formspree)

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "fitnessLevel": "intermediate",
  "goals": "strength, discipline",
  "stoppingFactor": "no-accountability",
  "commitmentLevel": "9",
  "whyNow": "Hit rock bottom, need to change...",
  "budgetOk": "yes",
  "additionalInfo": "Old shoulder injury...",
  "formType": "fitness",
  "qualified": true,
  "timestamp": "2024-12-26T..."
}
```

---

## 🤖 n8n Integration (Next Step)

When you connect Formspree → n8n, you can route based on:

### Business Leads
```
IF qualified = true AND monthlyRevenue = "$50K+":
  → Send SMS to you immediately (HOT LEAD)
  → Send instant email with calendar link
  → Add to "Hot Leads" list

ELSE IF qualified = true:
  → Send instant email response
  → Add to "Warm Leads" list
  → Start 3-day follow-up sequence

ELSE IF qualified = false:
  → Add to newsletter list
  → Send nurture content
```

### Fitness Leads
```
IF qualified = true AND commitmentLevel >= 9:
  → Send SMS to you (HOT LEAD)
  → Send calendar link immediately
  → Add to "Hot Coaching Leads"

ELSE IF qualified = true:
  → Send "I'll review" email
  → Add to "Qualified Applicants" list
  → You manually approve/reach out

ELSE IF qualified = false:
  → Redirect to free playbook opt-in
  → Add to nurture list
```

---

## ✅ Benefits of This Setup

### Before (Generic Contact Form)
❌ Everyone fills out same form  
❌ You have no context before calls  
❌ Wasted time on unqualified leads  
❌ No filtering of budget/commitment  
❌ Manual qualification on every call  

### After (Qualification Forms)
✅ Separate journeys for each service  
✅ Pre-qualified before you talk to them  
✅ You know their situation before the call  
✅ Automatic filtering of tire-kickers  
✅ Show up prepared with context  
✅ Higher close rate on calls  

---

## 🧪 Testing Checklist

### Test Business Form
- [ ] Go to `/work` page
- [ ] Fill out form with qualified data (10+ leads, $10K+ revenue)
- [ ] Submit and verify success message
- [ ] Check Formspree dashboard for submission
- [ ] Test with unqualified data (0-10 leads, $0-10K)
- [ ] Verify unqualified message shows

### Test Fitness Form
- [ ] Go to `/fitness` page
- [ ] Fill out with qualified data (commitment 7+, budget yes)
- [ ] Submit and verify success message
- [ ] Check Formspree dashboard
- [ ] Test with unqualified (commitment <7 or budget no)
- [ ] Verify unqualified message shows

---

## 📋 Next Steps

1. **Test both forms** (submit test applications)
2. **Check Formspree** (verify data is coming through)
3. **Connect to n8n** (set up webhooks from Formspree)
4. **Build automation** (instant response + routing logic)
5. **Start selling** (send traffic to /work or /fitness)

---

## 🎯 The Customer Journeys

### Business Journey
```
Google/Ad/Referral 
  ↓
Land on /work page
  ↓
See case studies (proof)
  ↓
Fill out application form
  ↓
Qualified? ✓
  ↓
Instant email: "Got it, reviewing..."
  ↓
n8n sends calendar link
  ↓
Discovery call
  ↓
Close
```

### Fitness Journey
```
Google/Ad/Referral
  ↓
Land on /fitness page
  ↓
See proof (ultramarathons, 5 years sober)
  ↓
Take self-assessment (realize need)
  ↓
Fill out application
  ↓
Qualified? ✓
  ↓
Instant email: "Reviewing application..."
  ↓
You approve → Send calendar link
  ↓
Intro call
  ↓
Close
```

---

**Your forms now qualify leads automatically. You only talk to serious people who can afford your services.** ✅



