# Chat Integration Setup Guide

## Overview
The `/workwithben` page includes a real-time chat interface that integrates with your n8n workflow to handle customer conversations.

## Features
- Real-time chat interface
- Message history with timestamps
- Session management for conversation tracking
- Loading states and error handling
- Responsive design with sticky chat positioning

## Setup Instructions

### 1. Create n8n Workflow

Create a new n8n workflow with a webhook trigger that:

1. **Webhook Trigger Node**
   - Method: POST
   - Response Mode: Last Node
   - Expected payload:
     ```json
     {
       "message": "Customer's message text",
       "sessionId": "unique_session_identifier",
       "timestamp": "ISO timestamp"
     }
     ```

2. **Process Message**
   - Add your business logic (AI, routing, database, etc.)
   - Store conversation history
   - Generate appropriate responses

3. **Response Node**
   - Return JSON with:
     ```json
     {
       "response": "Your response message to the customer",
       "sessionId": "same_session_id"
     }
     ```

### 2. Configure Environment Variable

Add your n8n webhook URL to your `.env.local` file:

```bash
N8N_CHAT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chat
```

### 3. Test the Integration

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/workwithben`

3. Send a test message in the chat

4. Check your n8n workflow execution to confirm it received the message

## n8n Workflow Example

Here's a basic workflow structure:

```
Webhook Trigger
    ↓
[Optional] Store in Database
    ↓
[Optional] AI Processing (ChatGPT/Claude)
    ↓
[Optional] Send Email Notification
    ↓
Respond Node (return response to chat)
```

## Customization

### Update Welcome Message

Edit the welcome message in `/app/workwithben/page.tsx`:

```tsx
<ChatBox 
  welcomeMessage="Your custom welcome message here!"
/>
```

### Add Additional Fields

To send more data to n8n, modify `/app/api/chat/route.ts`:

```typescript
body: JSON.stringify({
  message,
  sessionId: sessionId || `session_${Date.now()}`,
  timestamp: new Date().toISOString(),
  // Add your custom fields here
  userAgent: request.headers.get("user-agent"),
  referrer: request.headers.get("referer"),
}),
```

## Troubleshooting

### Chat not sending messages
- Check that `N8N_CHAT_WEBHOOK_URL` is set in `.env.local`
- Verify your n8n webhook is active and accessible
- Check browser console for error messages

### Messages not receiving responses
- Verify your n8n workflow is returning JSON with a `response` field
- Check n8n workflow execution logs
- Ensure webhook response mode is set to "Last Node"

### Session management issues
- Each chat session generates a unique `sessionId`
- Session IDs are stored in component state (resets on page refresh)
- For persistent sessions, add localStorage or database storage

## API Endpoint

The chat uses the `/api/chat` endpoint which:
- Accepts POST requests with `message` and `sessionId`
- Forwards to n8n webhook
- Returns response to the chat UI
- Handles errors gracefully

## Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent abuse
2. **Input Validation**: Add validation for message content
3. **Authentication**: Consider adding user authentication for production
4. **CORS**: Configure CORS if needed for your n8n instance

## Next Steps

- Add conversation history storage
- Implement user authentication
- Add typing indicators
- Enable file attachments
- Add emoji support
- Implement read receipts

