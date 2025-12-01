"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ben";
  timestamp: Date;
}

interface ChatBoxProps {
  welcomeMessage?: string;
}

export default function ChatBox({ welcomeMessage = "Hi! I'm Ben. How can I help you today?" }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: welcomeMessage,
      sender: "ben",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentMessageRef = useRef("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Store the message text before clearing input
    const messageText = inputValue.trim();
    currentMessageRef.current = messageText;

    // Add user message to chat
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          sessionId,
        }),
      });

      const data = await response.json();

      // Debug log to see what the API returns
      console.log("API Response:", data);
      console.log("Response status:", response.status);
      console.log("Response OK:", response.ok);

      // Check if we got a valid response
      if (data.response) {
        // CRITICAL: Use data.response (from n8n), NOT the original message
        const benMessage: Message = {
          id: `ben_${Date.now()}`,
          text: data.response, // This should be Ben's AI response
          sender: "ben",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, benMessage]);
      } else {
        // If no response field, show error
        console.error("No response field in data:", data);
        throw new Error(data.error || "No response from Ben");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "ben",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-charcoal-900 rounded-xl border border-charcoal-800 shadow-xl">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-charcoal-800 bg-charcoal-950 rounded-t-xl">
        <h3 className="text-lg font-semibold">Chat with Ben</h3>
        <p className="text-sm text-gray-400">Usually responds instantly</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-charcoal-800 text-gray-100"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              <p className="text-xs mt-1 opacity-60">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-charcoal-800 rounded-2xl px-4 py-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-charcoal-800 bg-charcoal-950 rounded-b-xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 disabled:opacity-50"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

