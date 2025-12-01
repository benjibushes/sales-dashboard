// /app/api/chat/route.ts
export async function POST(request: Request) {
  const { message, sessionId } = await request.json();

  if (!process.env.N8N_CHAT_WEBHOOK_URL) {
    console.error("N8N_CHAT_WEBHOOK_URL is not set");
    return Response.json(
      { response: "Chat system is not configured yet.", sessionId },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(process.env.N8N_CHAT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        sessionId: sessionId || `session_${Date.now()}`,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error(`n8n webhook failed: ${res.statusText}`);
    }

    const data = await res.json();

    // Debug log to see what n8n is returning
    console.log("N8N RESPONSE:", JSON.stringify(data, null, 2));
    console.log("Response type:", typeof data);
    console.log("Response keys:", Object.keys(data));

    // Check if n8n is returning the webhook request instead of a response
    if (data.body && data.headers && data.webhookUrl) {
      console.error("⚠️  n8n IS RETURNING THE WEBHOOK REQUEST, NOT A RESPONSE!");
      console.error("⚠️  Add a 'Respond to Webhook' node as the last node in your workflow!");
      return Response.json({
        response: "Hey! Your n8n workflow needs a 'Respond to Webhook' node at the end to send me back. Right now it's just echoing your message. Check the server logs for details!",
        sessionId,
      });
    }

    // Handle different n8n response formats
    let responseText = data.response || data.message || data.output || data.text;
    
    // If n8n returns an array, get the first item
    if (Array.isArray(data) && data.length > 0) {
      responseText = data[0].response || data[0].message || data[0].output || data[0].text;
    }

    if (!responseText) {
      console.error("No valid response field found in n8n data:", data);
      responseText = "I received your message but couldn't find a 'response' field from n8n. Check your workflow's last node!";
    }

    return Response.json({
      response: responseText,
      sessionId: data.sessionId || sessionId,
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { 
        response: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sessionId 
      },
      { status: 500 }
    );
  }
}

