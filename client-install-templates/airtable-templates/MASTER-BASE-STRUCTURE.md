# 📊 Master Airtable Base Structure

**Duplicate this structure for every client installation.**

---

## 🎯 BASE NAME CONVENTION

```
[Business Name] - CRM & Automation Hub
```

Example: `Sarah's Salon - CRM & Automation Hub`

---

## 📋 TABLE 1: **Customers**

### **Fields:**

| Field Name | Type | Configuration | Purpose |
|------------|------|---------------|---------|
| **Name** | Single line text | Primary field | Customer full name |
| **Phone** | Phone number | Format: (555) 123-4567 | Contact phone |
| **Email** | Email | - | Contact email |
| **Status** | Single select | Options below | Lead pipeline stage |
| **First Contact** | Date/Time | Include time | When they first reached out |
| **Last Contact** | Date/Time | Include time | Most recent interaction |
| **Last Visit** | Date | - | Last appointment/purchase |
| **Total Visits** | Number | - | Lifetime visit count |
| **Lifetime Value** | Currency | $ format | Total revenue from customer |
| **Source** | Single select | Options below | How they found you |
| **Notes** | Long text | - | Internal notes |
| **Tags** | Multiple select | Custom per business | Segments/categories |
| **Appointments** | Link to Appointments | - | Related appointments |
| **Messages** | Link to Messages | - | SMS history |
| **Reactivation Sent** | Checkbox | - | Winback campaign tracker |

### **Status Options:**
- 🆕 New Lead
- 💬 Contacted
- 📅 Scheduled
- ✅ Active Customer
- ⭐ VIP Customer
- 😴 Inactive
- ❌ Lost

### **Source Options:**
- 🔍 Google Search
- 👥 Referral
- 📱 Social Media
- 🌐 Website
- 🚶 Walk-in
- 📞 Phone Call
- 💬 Text Message
- 🎯 Advertising

---

## 📅 TABLE 2: **Appointments**

### **Fields:**

| Field Name | Type | Configuration | Purpose |
|------------|------|---------------|---------|
| **Appointment ID** | Autonumber | Primary field | Unique identifier |
| **Customer** | Link to Customers | Single link | Who is the appointment for |
| **Customer Name** | Lookup | From Customers → Name | Display name |
| **Phone** | Lookup | From Customers → Phone | Contact for reminders |
| **Date** | Date | - | Appointment date |
| **Time** | Single line text | e.g., "2:00 PM" | Appointment time |
| **DateTime** | Formula | See below | Combined for comparisons |
| **Service** | Single select | Custom per business | What service |
| **Duration** | Duration | Format: h:mm | How long |
| **Staff** | Single select | Add staff names | Who's performing service |
| **Status** | Single select | Options below | Current status |
| **Notes** | Long text | - | Special requests |
| **Price** | Currency | $ format | Service cost |
| **Paid** | Checkbox | - | Payment received? |
| **24hr Reminder Sent** | Checkbox | - | Automation tracker |
| **1hr Reminder Sent** | Checkbox | - | Automation tracker |
| **Review Requested** | Checkbox | - | Automation tracker |
| **Created** | Created time | Include time | When booked |

### **Status Options:**
- 📋 Scheduled
- ✅ Confirmed
- ⏰ In Progress
- ✔️ Completed
- ❌ Cancelled
- 👻 No-Show

### **DateTime Formula:**
```
DATETIME_PARSE(
  CONCATENATE(
    DATETIME_FORMAT({Date}, 'YYYY-MM-DD'),
    ' ',
    {Time}
  ),
  'YYYY-MM-DD h:mm A'
)
```

---

## 💬 TABLE 3: **Messages**

### **Fields:**

| Field Name | Type | Configuration | Purpose |
|------------|------|---------------|---------|
| **Message ID** | Autonumber | Primary field | Unique ID |
| **Customer** | Link to Customers | Single link | Who sent/received |
| **Phone** | Lookup | From Customers | Phone number |
| **Direction** | Single select | Inbound/Outbound | Who sent it |
| **Message** | Long text | - | Message content |
| **Timestamp** | Date/Time | Include time | When sent |
| **Type** | Single select | Options below | Message category |
| **Status** | Single select | Delivered/Failed | Delivery status |
| **Campaign** | Single select | Optional | If part of campaign |

### **Direction Options:**
- ⬇️ Inbound (from customer)
- ⬆️ Outbound (to customer)

### **Type Options:**
- 🤖 Auto-Reply
- 📞 Missed Call
- ⏰ Reminder
- ⭐ Review Request
- 📢 Promotion
- 💬 Manual
- 🔄 Reactivation

---

## 📊 TABLE 4: **Automation Log**

### **Fields:**

| Field Name | Type | Configuration | Purpose |
|------------|------|---------------|---------|
| **Log ID** | Autonumber | Primary field | Unique ID |
| **Automation Name** | Single line text | - | Which workflow ran |
| **Customer** | Link to Customers | Optional | Related customer |
| **Timestamp** | Date/Time | Include time | When it ran |
| **Status** | Single select | Success/Failed | Did it work? |
| **Details** | Long text | - | What happened |
| **Error** | Long text | - | If failed, why |

---

## 📈 TABLE 5: **Analytics** (Optional - Pro/Premium)

### **Fields:**

| Field Name | Type | Configuration | Purpose |
|------------|------|---------------|---------|
| **Date** | Date | Primary field | Tracking date |
| **New Leads** | Number | - | Leads acquired today |
| **Appointments Booked** | Number | - | Scheduled today |
| **Appointments Completed** | Number | - | Completed today |
| **No-Shows** | Number | - | No-shows today |
| **Revenue** | Currency | $ format | Money made today |
| **Messages Sent** | Number | - | Outbound SMS count |
| **Reviews Received** | Number | - | Google reviews |

---

## 🎨 VIEWS TO CREATE

### **Customers Table:**
1. **📊 All Customers** (Grid) - Default view
2. **🆕 New Leads** (Filter: Status = New Lead)
3. **⭐ VIP Customers** (Filter: Status = VIP)
4. **😴 Inactive** (Filter: Last Visit > 60 days ago)
5. **📱 By Source** (Group by: Source)

### **Appointments Table:**
1. **📅 Calendar View** (By Date field)
2. **📋 Today** (Filter: Date = Today)
3. **⏰ This Week** (Filter: Date is within next 7 days)
4. **✅ Completed** (Filter: Status = Completed)
5. **👥 By Staff** (Group by: Staff)
6. **⏳ Upcoming** (Filter: Date is after today, sorted by Date)

### **Messages Table:**
1. **💬 All Messages** (Grid, sorted by Timestamp desc)
2. **📱 Recent** (Filter: Timestamp is within 7 days)
3. **🤖 Automated** (Filter: Type ≠ Manual)
4. **⬇️ Inbound** (Filter: Direction = Inbound)

---

## 🎯 AUTOMATION SETUP (Airtable Automations - Optional)

### **Automation 1: Mark Customer as Active**
**Trigger:** When appointment status = Completed  
**Action:** Update linked customer → Status = Active Customer

### **Automation 2: Increment Visit Count**
**Trigger:** When appointment status = Completed  
**Action:** Update linked customer → Total Visits +1

### **Automation 3: Update Last Visit**
**Trigger:** When appointment status = Completed  
**Action:** Update linked customer → Last Visit = Appointment Date

### **Automation 4: Slack Notification for New Lead**
**Trigger:** When customer record created  
**Action:** Send Slack message with customer details

---

## 🚀 QUICK SETUP PROCESS

### **Step 1: Duplicate Master Base** (2 min)
1. Go to your "Master Client Base Template"
2. Click "..." → Duplicate base
3. Rename to "[Client Name] - CRM"

### **Step 2: Customize Fields** (3 min)
1. **Customers → Tags:** Add client-specific tags
2. **Appointments → Service:** Add their services
3. **Appointments → Staff:** Add their staff names

### **Step 3: Share with Client** (1 min)
1. Click "Share" button
2. Create shareable link (Comment or Edit access)
3. Copy link and send to client

### **Step 4: Get Base ID for n8n** (1 min)
1. URL looks like: `airtable.com/appXXXXXXXXX/...`
2. Copy the `appXXXXXXXXX` part
3. This is your Base ID for n8n workflows

---

## 📱 CLIENT ACCESS OPTIONS

### **Option 1: View-Only** (Most Common)
- Client can see data but not edit
- Good for viewing appointments/customers
- No risk of accidental changes

### **Option 2: Edit Access** (If Client Manages Own Data)
- Client can add/edit records
- Give them training on what to touch
- Lock critical automation fields

### **Option 3: Airtable Interfaces** (Premium)
- Create custom dashboard for client
- Only show what they need
- Simplified, beautiful UI

---

## 💡 PRO TIPS

1. **Use Consistent Naming:** Always format business names the same way
2. **Set Up Sample Data:** Add 2-3 fake customers/appointments for testing
3. **Lock Important Fields:** Prevent client from breaking automation fields
4. **Document Custom Fields:** If you add fields, note them for support
5. **Regular Backups:** Duplicate base monthly as backup

---

## 🎓 CLIENT TRAINING POINTS

**Show Them How To:**
1. ✅ View today's appointments (Calendar View)
2. ✅ See all customers (Customers table)
3. ✅ Check message history (Messages table)
4. ✅ Add a customer manually (New record button)
5. ✅ Update appointment status (Change dropdown)
6. ❌ DON'T touch automation checkboxes
7. ❌ DON'T delete fields
8. ❌ DON'T share access with others (security)

---

## 📊 EXAMPLE DATA (For Testing)

### **Sample Customer:**
```
Name: Test Customer
Phone: (555) 555-5555
Email: test@example.com
Status: New Lead
First Contact: [Today's date]
Source: Walk-in
```

### **Sample Appointment:**
```
Customer: [Link to Test Customer]
Date: [Tomorrow]
Time: 2:00 PM
Service: Haircut
Duration: 1:00
Status: Scheduled
Price: $50
```

---

## 🔧 TROUBLESHOOTING

### **Phone Numbers Not Matching:**
- Format all as: (555) 123-4567
- Include area code
- Use consistent formatting

### **Reminders Not Sending:**
- Check DateTime formula is correct
- Verify 24hr/1hr checkboxes are FALSE
- Ensure appointment is "Scheduled" status

### **Customer Not Linking to Appointment:**
- Make sure customer exists first
- Use link field, not text field
- Check spelling of customer name

---

**Base setup time: ~7 minutes per client**  
**Template reuse = Massive time savings ⚡**

