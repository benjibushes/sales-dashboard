import { NextRequest, NextResponse } from "next/server";
import { sendToN8nWebhook, isValidPhone, isValidEmail } from "@/lib/api-helpers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lead, actionName } = body;

    // Validate required fields
    if (!lead || !lead.phone || !lead.email) {
      return NextResponse.json(
        { error: "Phone and email are required" },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(lead.phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(lead.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare payload for n8n
    const n8nPayload = {
      leadId: lead.email,
      phone: lead.phone,
      email: lead.email,
      businessName: lead.businessName || "",
      ownerName: lead.ownerName || "",
      niche: lead.niche || "",
      painPoint: lead.painPoint || "",
      notes: lead.notes || "",
      actionName: actionName || "payment-link",
      timestamp: new Date().toISOString(),
      demoType: "payment-link",
      amount: {
        setup: 2500,
        monthly: 300,
      },
    };

    // Send to n8n webhook with 15-second timeout
    const n8nWebhookUrl = process.env.N8N_PAYMENT_WEBHOOK_URL;
    const result = await sendToN8nWebhook(n8nWebhookUrl, n8nPayload, 15000);

    if (!result.success) {
      console.error("n8n webhook failed:", result.error);
      return NextResponse.json(
        { error: "Failed to send payment link", details: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment link sent successfully",
      action: "payment-link",
    });
  } catch (error) {
    console.error("Error sending payment link:", error);
    return NextResponse.json(
      {
        error: "Failed to send payment link",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

