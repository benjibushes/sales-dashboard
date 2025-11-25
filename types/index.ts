export type BusinessNiche =
  | "salon"
  | "medspa"
  | "gym"
  | "realtor"
  | "restaurant"
  | "contractor"
  | "stable"
  | "other";

export type PainPoint =
  | "no-shows"
  | "manual-booking"
  | "missed-calls"
  | "no-reviews"
  | "inconsistent-follow-up"
  | "manual-reminders"
  | "customer-retention"
  | "other";

export interface LeadData {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  niche: BusinessNiche;
  painPoint: PainPoint;
  notes?: string;
  timestamp?: string;
}

export interface DemoAction {
  id: string;
  name: string;
  description: string;
  icon: string;
  apiEndpoint: string;
}

export interface SystemStackItem {
  name: string;
  description: string;
}

export interface SystemStack {
  niche: BusinessNiche;
  items: SystemStackItem[];
}

export type DemoActionStatus = "idle" | "loading" | "success" | "error";

