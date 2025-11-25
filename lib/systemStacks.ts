import { BusinessNiche, SystemStack } from "@/types";

export const systemStacks: Record<BusinessNiche, SystemStack> = {
  salon: {
    niche: "salon",
    items: [
      {
        name: "New Customer Funnel",
        description: "Automated intake and welcome sequence for first-time clients",
      },
      {
        name: "Automated Booking System",
        description: "24/7 online booking with instant confirmations",
      },
      {
        name: "No-Show SMS Prevention",
        description: "Smart reminders that reduce no-shows by 80%",
      },
      {
        name: "Review + Referral Engine",
        description: "Automatic review requests after appointments",
      },
      {
        name: "Customer Reactivation",
        description: "Win back clients who haven't visited in 60+ days",
      },
    ],
  },
  medspa: {
    niche: "medspa",
    items: [
      {
        name: "Medical Intake Automation",
        description: "Digital forms sent before appointment",
      },
      {
        name: "Consultation Booking Flow",
        description: "Qualification questions + instant booking",
      },
      {
        name: "Treatment Follow-Up Sequence",
        description: "Post-treatment check-ins and care instructions",
      },
      {
        name: "Package Upsell System",
        description: "Automated offers for treatment packages",
      },
      {
        name: "Review Collection System",
        description: "Get more 5-star reviews automatically",
      },
    ],
  },
  gym: {
    niche: "gym",
    items: [
      {
        name: "Lead Magnet Funnel",
        description: "Free trial → automated follow-up sequence",
      },
      {
        name: "Class Booking + Waitlist",
        description: "Full automation for class management",
      },
      {
        name: "Membership Renewal Reminders",
        description: "Never lose a member to an expired card",
      },
      {
        name: "Check-In Milestone Messages",
        description: "Celebrate member progress automatically",
      },
      {
        name: "Referral Reward System",
        description: "Turn members into your sales team",
      },
    ],
  },
  realtor: {
    niche: "realtor",
    items: [
      {
        name: "Buyer/Seller Lead Capture",
        description: "Instant response to new inquiries",
      },
      {
        name: "Showing Appointment Scheduler",
        description: "Let clients book showings 24/7",
      },
      {
        name: "Market Update Drip Campaign",
        description: "Stay top-of-mind with your database",
      },
      {
        name: "Post-Close Follow-Up",
        description: "Build relationships for referrals and repeat business",
      },
      {
        name: "CRM Pipeline Automation",
        description: "Track every lead from inquiry to close",
      },
    ],
  },
  restaurant: {
    niche: "restaurant",
    items: [
      {
        name: "Reservation System",
        description: "Online booking with automatic confirmations",
      },
      {
        name: "Waitlist Text Notifications",
        description: "SMS when table is ready",
      },
      {
        name: "Special Events Promotion",
        description: "Automated campaigns for events and specials",
      },
      {
        name: "Review Request System",
        description: "Get more reviews on Google and Yelp",
      },
      {
        name: "Loyalty Program Automation",
        description: "Reward repeat customers automatically",
      },
    ],
  },
  contractor: {
    niche: "contractor",
    items: [
      {
        name: "Instant Quote Request Response",
        description: "Never miss a lead with auto-reply",
      },
      {
        name: "Appointment Scheduling",
        description: "Let clients book estimates instantly",
      },
      {
        name: "Job Status Updates",
        description: "Automated updates throughout the project",
      },
      {
        name: "Payment Reminder System",
        description: "Get paid faster with automated reminders",
      },
      {
        name: "Review Collection Engine",
        description: "Build reputation with automatic review requests",
      },
    ],
  },
  stable: {
    niche: "stable",
    items: [
      {
        name: "Boarding Inquiry Automation",
        description: "Instant response to new boarding inquiries",
      },
      {
        name: "Lesson Booking System",
        description: "Online scheduling for riding lessons",
      },
      {
        name: "Monthly Payment Reminders",
        description: "Automated billing reminders for boarders",
      },
      {
        name: "Event Registration System",
        description: "Automated sign-ups for shows and events",
      },
      {
        name: "Customer Communication Hub",
        description: "Keep clients updated on their horses",
      },
    ],
  },
  other: {
    niche: "other",
    items: [
      {
        name: "Lead Response Automation",
        description: "Respond to inquiries instantly, 24/7",
      },
      {
        name: "Appointment Booking System",
        description: "Let customers book online anytime",
      },
      {
        name: "Follow-Up Sequence",
        description: "Never forget to follow up with a lead",
      },
      {
        name: "Review Request System",
        description: "Build your reputation automatically",
      },
      {
        name: "Customer Retention Campaign",
        description: "Keep customers coming back",
      },
    ],
  },
};

export function getSystemStack(niche: BusinessNiche): SystemStack {
  return systemStacks[niche];
}

