import { NextRequest, NextResponse } from "next/server";
import { sendToN8nWebhook, isValidPhone, isValidEmail, sanitizeInput } from "@/lib/api-helpers";
import { checkRateLimit, getClientIdentifier } from "@/lib/rate-limiter";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 lead creations per minute per IP
    const clientId = getClientIdentifier(request);
    const rateLimit = checkRateLimit(clientId, 5, 60000);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { 
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
          },
        }
      );
    }

    const body = await request.json();
    
    const {
      businessName,
      ownerName,
      phone,
      email,
      niche,
      painPoint,
      notes,
      timestamp,
    } = body;

    // Validate required fields
    if (!businessName || !ownerName || !phone || !email || !niche || !painPoint) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const n8nPayload = {
      businessName: sanitizeInput(businessName),
      ownerName: sanitizeInput(ownerName),
      phone: sanitizeInput(phone),
      email: sanitizeInput(email),
      niche: sanitizeInput(niche),
      painPoint: sanitizeInput(painPoint),
      notes: sanitizeInput(notes || ""),
      timestamp: timestamp || new Date().toISOString(),
      source: "live-demo-dashboard",
    };

    // Send to n8n webhook if configured
    const n8nWebhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
    await sendToN8nWebhook(n8nWebhookUrl, n8nPayload);

    return NextResponse.json({
      success: true,
      message: "Lead created successfully",
      lead: n8nPayload,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

