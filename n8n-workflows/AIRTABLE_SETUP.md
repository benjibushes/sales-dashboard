# 🎯 Airtable CRM Setup Guide

## Why Airtable?

✅ **More Professional** than Google Sheets  
✅ **Better Views** - Kanban, Calendar, Gallery  
✅ **Automations** built-in  
✅ **Linked Records** for relationships  
✅ **Custom Fields** - Checkboxes, dropdowns, ratings  
✅ **API Access** for advanced integrations  
✅ **Mobile App** - manage leads on the go  

---

## Step 1: Create Your Airtable Base (5 minutes)

### 1.1 Sign Up
- Go to [airtable.com](https://airtable.com)
- Sign up for **free account** (1,200 records free)
- Or use **Plus plan** ($10/user/month) for unlimited records

### 1.2 Create Base
1. Click **"Add a base"**
2. Choose **"Start from scratch"**
3. Name it: **"BenBuildsBiz CRM"**

---

## Step 2: Create Tables

### Table 1: **Leads**

Create these fields (columns):

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Business Name** | Single line text | Primary field |
| **Owner Name** | Single line text | Contact name |
| **Phone** | Phone number | Format: (555) 123-4567 |
| **Email** | Email | Auto-validates |
| **Niche** | Single select | Options: Salon, Med Spa, Gym, etc. |
| **Pain Point** | Single select | Options: No-shows, Missed calls, etc. |
| **Notes** | Long text | Demo notes |
| **Lead Score** | Single select | Options: HOT 🔥, WARM ⚡, COLD ❄️ |
| **Urgency** | Number | Scale 1-10 |
| **Follow Up Date** | Date | When to follow up |
| **Source** | Single line text | "Live Demo Dashboard" |
| **Status** | Single select | Options: New, Contacted, Demo, Proposal, Won, Lost |
| **Demo Count** | Number | Tracks engagement |
| **Timestamp** | Date & time | When lead was created |
| **Demo Actions** | Link to another record | Links to Demo Actions table |

### Single Select Options:

**Niche:**
- 🎨 Salon / Hair Studio
- 💉 Med Spa / IV Therapy
- 💪 Gym / Personal Trainer
- 🏡 Realtor / Real Estate
- 🍽️ Restaurant / Café
- 🔨 Contractor / Home Services
- 🐴 Stable / Ranch
- 📦 Other Local Service

**Pain Point:**
- 😤 Too many no-shows
- 📞 Missing calls = losing money
- ⏰ Manual booking is time-consuming
- ⭐ Need more reviews
- 🔄 Forgetting to follow up
- 📬 Sending reminders manually
- 💔 Hard to keep customers coming back
- 🤷 Other

**Status:**
- 🆕 New (default)
- 📞 Contacted
- 🎯 Demo Scheduled
- 📄 Proposal Sent
- 💰 Won
- ❌ Lost

---

### Table 2: **Demo Actions**

Create these fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Demo Type** | Single line text | Primary field |
| **Business Name** | Single line text | Which business |
| **Owner Name** | Single line text | Contact name |
| **Phone** | Phone number | Contact phone |
| **Action Name** | Single line text | Button clicked |
| **Niche** | Single select | Same as Leads |
| **Status** | Single select | "Completed" |
| **Engagement Score** | Number | 1-10 rating |
| **Timestamp** | Date & time | When demo was triggered |
| **Lead** | Link to another record | Links back to Leads table |

---

## Step 3: Create Views

### In **Leads** Table:

#### View 1: **All Leads** (Default)
- Shows all leads
- Sort by: Timestamp (newest first)

#### View 2: **HOT Leads 🔥**
- Filter: Lead Score = "HOT 🔥"
- Sort by: Urgency (highest first)
- This is your priority list!

#### View 3: **Follow Up Today**
- Filter: Follow Up Date = Today
- Sort by: Lead Score
- Your daily to-do list

#### View 4: **Kanban Board**
- Group by: Status
- Drag & drop leads between stages
- Visual sales pipeline!

#### View 5: **By Niche**
- Group by: Niche
- See which industries you're winning

---

## Step 4: Get Your API Credentials

### 4.1 Create Personal Access Token

1. Click your **profile icon** (top right)
2. Click **"Developer hub"**
3. Click **"Create new token"**
4. Name it: **"BenBuildsBiz Dashboard"**
5. Add scopes:
   - ✅ `data.records:read`
   - ✅ `data.records:write`
   - ✅ `schema.bases:read`
6. Add access to your base: **"BenBuildsBiz CRM"**
7. Click **"Create token"**
8. **Copy the token** (you'll only see it once!)

### 4.2 Get Your Base ID

1. Go to [airtable.com/api](https://airtable.com/api)
2. Click on **"BenBuildsBiz CRM"**
3. Your Base ID is in the URL or at the top
4. Looks like: `appXXXXXXXXXXXXXX`

---

## Step 5: Connect to n8n

### 5.1 Add Airtable Credentials in n8n

1. Open n8n
2. Go to **Settings** → **Credentials**
3. Click **"Add Credential"**
4. Search for **"Airtable"**
5. Choose **"Airtable Personal Access Token"**
6. Paste your token
7. Click **"Save"**

### 5.2 Update Workflows

1. Open **Lead Capture Workflow**
2. Click on **"Save to Airtable"** node
3. Select your Airtable credentials
4. Choose Base: **"BenBuildsBiz CRM"**
5. Choose Table: **"Leads"**
6. Field mappings should auto-populate
7. Test the node (Execute Node button)

8. Repeat for **Demo Actions Workflow**

---

## Step 6: Set Up Automations (Optional but Powerful!)

Airtable has built-in automations you can use:

### Automation 1: Move to "Contacted" Status
- **Trigger**: When "Demo Count" > 0
- **Action**: Update Status to "Contacted"

### Automation 2: Reminder for Follow-Ups
- **Trigger**: When "Follow Up Date" = Today
- **Action**: Send email reminder to yourself

### Automation 3: Update Lead Score
- **Trigger**: When "Demo Count" > 3
- **Action**: Change Lead Score to "HOT 🔥"

### Automation 4: Slack Alert for HOT Leads
- **Trigger**: When Lead Score changes to "HOT 🔥"
- **Action**: Send Slack message

---

## Step 7: Create Dashboard Views

### Mobile App Setup
1. Download **Airtable app** (iOS/Android)
2. Open your base
3. Pin **"HOT Leads 🔥"** view
4. Now you can manage leads on the go!

### Desktop Shortcuts
- Bookmark: `https://airtable.com/[YOUR_BASE_ID]/[VIEW_ID]`
- Add to Chrome for one-click access

---

## 💎 Pro Airtable Features

### Linked Records
Link Demo Actions back to Leads:
- See all demos per lead in one place
- Track engagement history
- Calculate conversion rates

### Rollup Fields
Create calculated fields:
- **Total Demos**: Count of linked demo actions
- **Last Demo Date**: Max of demo timestamps
- **Days Since Demo**: Formula field

### Formula Fields
Examples:
```
# Days Until Follow Up
DATETIME_DIFF({Follow Up Date}, TODAY(), 'days')

# Full Contact
{Owner Name} & " at " & {Business Name}

# Lead Quality Score
IF({Lead Score} = "HOT 🔥", 10, 
   IF({Lead Score} = "WARM ⚡", 5, 1))
```

### Interfaces
Create custom dashboards:
- Lead pipeline overview
- Demo statistics
- Conversion funnel
- Revenue tracking

---

## 📊 Recommended Base Structure

```
BenBuildsBiz CRM (Base)
├── Leads (Table)
│   ├── All Leads (View)
│   ├── HOT Leads 🔥 (View)
│   ├── Follow Up Today (View)
│   ├── Pipeline Kanban (View)
│   └── By Niche (View)
├── Demo Actions (Table)
│   ├── All Actions (View)
│   ├── By Demo Type (View)
│   └── Engagement Report (View)
├── Won Deals (Table) - Optional
│   └── Revenue tracking
└── Follow-Up Templates (Table) - Optional
    └── Message templates by niche
```

---

## 🎨 Color Coding Recommendations

**Lead Score Colors:**
- HOT 🔥 → Red
- WARM ⚡ → Orange
- COLD ❄️ → Blue

**Status Colors:**
- New → Blue
- Contacted → Yellow
- Demo Scheduled → Orange
- Proposal Sent → Purple
- Won → Green
- Lost → Gray

---

## 💰 Airtable Pricing

| Plan | Price | Records | Features |
|------|-------|---------|----------|
| **Free** | $0 | 1,200 | Perfect for starting |
| **Plus** | $10/user/mo | Unlimited | Automations, 5GB storage |
| **Pro** | $20/user/mo | Unlimited | Advanced features, 20GB |
| **Enterprise** | Custom | Unlimited | SSO, admin panel |

**Recommendation**: Start with **Free**, upgrade to **Plus** ($10/mo) when you hit 1,200 records.

---

## 🔧 Troubleshooting

### "Invalid API Key"
- Regenerate token in Airtable
- Make sure scopes include read/write
- Check base access is granted

### Fields Not Mapping
- Field names must match EXACTLY
- Check field types (text vs select)
- Create missing fields in Airtable

### Can't Find Base
- Make sure you're logged into correct account
- Check base isn't in trash
- Verify API token has base access

---

## 🚀 Quick Setup Checklist

- [ ] Create Airtable account
- [ ] Create "BenBuildsBiz CRM" base
- [ ] Create "Leads" table with all fields
- [ ] Create "Demo Actions" table with all fields
- [ ] Set up views (HOT Leads, Kanban, etc.)
- [ ] Get Personal Access Token
- [ ] Get Base ID
- [ ] Add credentials to n8n
- [ ] Update both workflows
- [ ] Test with sample lead
- [ ] Verify data appears in Airtable

---

## 🎯 Success Metrics to Track in Airtable

Create these views/reports:

1. **Conversion Rate**
   - New → Won (by week/month)

2. **Response Time**
   - Time from lead to first contact

3. **Demo Effectiveness**
   - Which demos lead to most conversions

4. **Niche Performance**
   - Which industries convert best

5. **Lead Source ROI**
   - Dashboard vs other sources

---

## 📱 Mobile Workflow

With Airtable mobile app:
1. Get lead alert on phone
2. Open Airtable app
3. View HOT Leads
4. Click phone number to call
5. Add notes right in the app
6. Update status on the spot

**Pro tip**: Use Siri Shortcuts to create leads from your phone!

---

## 🔥 Power User Tips

1. **Share Views**: Share "HOT Leads" URL with team
2. **Export Data**: Use for reporting/analysis
3. **Zapier Integration**: Connect to 5,000+ apps
4. **Calendar Sync**: Sync Follow Up Dates to Google Calendar
5. **Forms**: Create intake forms that add to Airtable
6. **Extensions**: Add charts, calendars, maps

---

**Ready to level up?** Airtable makes you look incredibly professional to clients! 🚀

**Questions?** Everything is documented in n8n workflow comments.

