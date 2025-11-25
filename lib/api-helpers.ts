/**
 * Utility functions for API routes
 */

/**
 * Safely send data to n8n webhook with timeout and error handling
 */
export async function sendToN8nWebhook(
  webhookUrl: string | undefined,
  payload: Record<string, any>,
  timeoutMs: number = 10000
): Promise<{ success: boolean; error?: string }> {
  if (!webhookUrl) {
    console.warn("n8n webhook URL not configured");
    return { success: false, error: "Webhook not configured" };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error("n8n webhook failed:", errorText);
      return { success: false, error: errorText };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("n8n webhook timeout");
      return { success: false, error: "Webhook timeout" };
    }
    console.error("n8n webhook error:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Validate phone number format (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "");
  // Must have 10-15 digits (handles US and international)
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Validate email format (basic validation)
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize user input to prevent injection attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, 1000); // Limit length
}

