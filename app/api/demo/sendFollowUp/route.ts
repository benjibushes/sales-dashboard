import { NextRequest, NextResponse } from "next/server";
import { sendToN8nWebhook } from "@/lib/api-helpers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lead, actionName } = body;

    if (!lead || !lead.phone) {
      return NextResponse.json(
        { error: "Lead data is required" },
        { status: 400 }
      );
    }

    const n8nPayload = {
      leadId: lead.email,
      phone: lead.phone,
      email: lead.email,
      businessName: lead.businessName,
      ownerName: lead.ownerName,
      niche: lead.niche,
      actionName: actionName || "sendFollowUp",
      timestamp: new Date().toISOString(),
      demoType: "follow-up-sequence",
    };

    const n8nWebhookUrl = process.env.N8N_DEMO_WEBHOOK_URL;
    await sendToN8nWebhook(n8nWebhookUrl, n8nPayload);

    return NextResponse.json({
      success: true,
      message: "Follow-up sequence demo triggered",
      action: "sendFollowUp",
    });
  } catch (error) {
    console.error("Error triggering demo action:", error);
    return NextResponse.json(
      { error: "Failed to trigger demo action" },
      { status: 500 }
    );
  }
}

