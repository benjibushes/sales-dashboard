#!/bin/bash

# Test the chat API to make sure it's properly forwarding n8n responses
# Run this while your dev server is running

echo "Testing Chat API..."
echo "==================="
echo ""

curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Im a contractor who has too many missed calls","sessionId":"test1"}' \
  -w "\n\nStatus Code: %{http_code}\n" \
  -s

echo ""
echo "==================="
echo "Check the output above:"
echo "- Should see Ben-style response (NOT your input message)"
echo "- Status code should be 200 (if n8n is configured)"
echo ""
echo "Also check your terminal where dev server is running for:"
echo "'N8N RESPONSE:' debug log"

