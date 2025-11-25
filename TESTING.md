# 🧪 Testing Guide

Complete testing procedures for Ben's Live Demo Sales Dashboard.

## Pre-Launch Testing Checklist

### 1. Local Development Testing

#### Home Page (`/`)
- [ ] Page loads without errors
- [ ] Hero text is visible and readable
- [ ] "Start Live Demo" button is clickable
- [ ] Button navigates to `/demo`
- [ ] Responsive on mobile (test different screen sizes)

#### Demo Page (`/demo`)
- [ ] Page loads with visual explainer
- [ ] Form fields all render correctly
- [ ] All dropdown options are present
- [ ] Form validation works (try submitting empty)

#### Lead Creation
- [ ] Fill out complete form
- [ ] Click "Create Lead + Load Demo"
- [ ] Success message appears
- [ ] Page scrolls to demo panel
- [ ] System stack displays with correct niche
- [ ] Demo panel with 6 buttons appears

#### Demo Actions
Test each button individually:
- [ ] Send Auto-Reply SMS
- [ ] Trigger Missed-Call Automation
- [ ] Send Review Request
- [ ] Show Booking Flow
- [ ] Show CRM Pipeline
- [ ] Start Follow-Up Sequence

For each button:
- [ ] Button shows loading state
- [ ] Button shows success (green checkmark)
- [ ] Button resets after 2 seconds
- [ ] No console errors

#### Sticky Footer
- [ ] Footer appears after lead creation
- [ ] "Start Fresh Lead" button works
- [ ] Page resets to form
- [ ] Scroll back to top

### 2. Mobile Device Testing

#### Devices to Test
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Various screen sizes (responsive.design)

#### Mobile-Specific Checks
- [ ] Text is readable without zooming
- [ ] Buttons are easy to tap (not too small)
- [ ] Form inputs are easy to fill
- [ ] No horizontal scrolling
- [ ] Keyboard doesn't break layout
- [ ] Demo buttons work with touch

### 3. Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 4. Network Conditions

Test with:
- [ ] Fast WiFi (home/office)
- [ ] Slow 3G (throttle in DevTools)
- [ ] Offline mode (graceful errors)
- [ ] Flaky connection (intermittent)

### 5. n8n Integration Testing

#### Lead Webhook
```bash
# Test lead webhook directly
curl -X POST https://your-n8n-instance.com/webhook/lead \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Test Salon",
    "ownerName": "Test User",
    "phone": "555-0100",
    "email": "test@example.com",
    "niche": "salon",
    "painPoint": "no-shows",
    "timestamp": "2025-11-17T10:00:00Z",
    "source": "live-demo-dashboard"
  }'
```

Expected result:
- [ ] Webhook receives data
- [ ] Data appears in Airtable/Sheets
- [ ] Notification sent to Ben
- [ ] No errors in n8n logs

#### Demo Webhook
```bash
# Test demo webhook directly
curl -X POST https://your-n8n-instance.com/webhook/demo \
  -H "Content-Type: application/json" \
  -d '{
    "leadId": "test@example.com",
    "phone": "555-0100",
    "email": "test@example.com",
    "businessName": "Test Salon",
    "ownerName": "Test User",
    "niche": "salon",
    "actionName": "sendAutoReply",
    "demoType": "auto-reply-sms",
    "timestamp": "2025-11-17T10:00:00Z"
  }'
```

Expected result:
- [ ] Webhook receives data
- [ ] Action is routed correctly based on demoType
- [ ] SMS/Email is sent (if configured)
- [ ] Action is logged

### 6. End-to-End Testing

#### Complete Demo Flow
1. [ ] Start on home page
2. [ ] Click "Start Live Demo"
3. [ ] Fill out form with real test data
4. [ ] Submit form
5. [ ] Verify lead appears in Airtable/Sheets
6. [ ] Click all 6 demo buttons
7. [ ] Verify each action triggers correctly
8. [ ] Check n8n execution logs
9. [ ] Verify SMS/emails received (if configured)
10. [ ] Click "Start Fresh Lead"
11. [ ] Verify form resets

#### Real-World Scenario Test
With an actual potential client:
- [ ] Open app on phone
- [ ] Show home page (30-second pitch)
- [ ] Fill form together with client
- [ ] Show system stack recommendations
- [ ] Trigger 2-3 demo actions
- [ ] Client receives demo messages
- [ ] Close with CTA
- [ ] Follow up within 24 hours

## 🐛 Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: API routes returning 404
**Solution**:
- Check file structure in `app/api/`
- Restart dev server
- Clear Next.js cache: `rm -rf .next`

### Issue: Environment variables not working
**Solution**:
- Check `.env.local` exists
- Verify variable names match exactly
- Restart dev server after changes
- For Vercel: check environment variables in dashboard

### Issue: Webhook not receiving data
**Solution**:
- Test webhook URL directly with curl
- Check n8n workflow is active
- Verify webhook URL in environment variables
- Check n8n logs for errors

### Issue: Styles not applying
**Solution**:
```bash
npm run build
# Check for any build errors
# If none, styles should work in dev
```

### Issue: Form not submitting
**Solution**:
- Check browser console for errors
- Verify all required fields have values
- Check network tab for API call
- Ensure n8n webhook is accessible

## 📊 Performance Testing

### Lighthouse Audit
```bash
# Build production version
npm run build
npm run start

# Open in Chrome
# DevTools → Lighthouse → Run audit
```

Target scores:
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 90+

### Load Testing
Use [WebPageTest](https://www.webpagetest.org/) to test:
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Total Blocking Time < 300ms

## 🔍 QA Checklist

### Visual Design
- [ ] All text is readable
- [ ] Colors match design system
- [ ] Spacing is consistent
- [ ] Buttons have hover states
- [ ] Forms have focus states
- [ ] Success/error states are clear

### Functionality
- [ ] All forms work
- [ ] All buttons work
- [ ] All links work
- [ ] Navigation works
- [ ] Animations are smooth
- [ ] Loading states appear

### Content
- [ ] No typos
- [ ] Business terms are correct
- [ ] Phone numbers format correctly
- [ ] Email addresses validate
- [ ] Dropdown options make sense

### Data Integrity
- [ ] Form data is captured correctly
- [ ] Lead data matches what was entered
- [ ] Timestamps are accurate
- [ ] Niche selection works
- [ ] All optional fields handled properly

## 🚀 Pre-Deployment Checklist

- [ ] All tests pass
- [ ] No console errors
- [ ] No linter errors
- [ ] Environment variables configured
- [ ] n8n webhooks tested
- [ ] Mobile experience verified
- [ ] Production build succeeds
- [ ] Lighthouse scores meet targets

## 📱 Field Testing

### Before Going Live
1. Test at home with WiFi
2. Test outside with mobile data
3. Test in actual business (with permission)
4. Get feedback from 2-3 people

### During First Week
- [ ] Test in 3+ real demos
- [ ] Collect feedback from clients
- [ ] Monitor n8n execution logs
- [ ] Check Vercel analytics
- [ ] Fix any bugs immediately

## 🔄 Ongoing Testing

### Weekly
- [ ] Test one complete demo flow
- [ ] Check n8n webhook success rate
- [ ] Review any error logs
- [ ] Test on different devices

### Monthly
- [ ] Run full Lighthouse audit
- [ ] Test all demo actions
- [ ] Review and update system stacks
- [ ] Check for dependency updates

## 📝 Bug Reporting Template

When you find a bug, document:

```markdown
**Bug Title**: Short description

**Severity**: Critical / High / Medium / Low

**Steps to Reproduce**:
1. Go to...
2. Click on...
3. Enter...
4. See error

**Expected Behavior**: What should happen

**Actual Behavior**: What actually happened

**Screenshots**: (if applicable)

**Environment**:
- Device: iPhone 13 / Desktop
- Browser: Safari 16.2
- OS: iOS 16.1
- Network: WiFi / 4G
```

## ✅ Final Sign-Off

Before deploying to production:

- [ ] All critical tests pass
- [ ] Mobile experience is smooth
- [ ] n8n integration works end-to-end
- [ ] No blocking bugs
- [ ] Performance is acceptable
- [ ] Code is documented
- [ ] Environment variables are set
- [ ] Backup plan in place

---

**Ready to test?** Start with the local development checklist and work your way down.

**Found a bug?** Fix it before deploying to production.

**All tests passed?** You're ready to deploy! 🚀

