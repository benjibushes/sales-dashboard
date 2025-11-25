"use client";

import { useState } from "react";
import { LeadData, DemoActionStatus } from "@/types";
import confetti from "canvas-confetti";
import Toast from "./Toast";

interface DemoPanelProps {
  lead: LeadData;
}

interface DemoButton {
  id: string;
  label: string;
  description: string;
  icon: string;
  endpoint: string;
}

const demoButtons: DemoButton[] = [
  {
    id: "auto-reply",
    label: "Send Auto-Reply SMS",
    description: "Instant text response demo",
    icon: "💬",
    endpoint: "/api/demo/sendAutoReply",
  },
  {
    id: "missed-call",
    label: "Missed-Call Automation",
    description: "Auto-text when you miss a call",
    icon: "📞",
    endpoint: "/api/demo/sendMissedCall",
  },
  {
    id: "review-request",
    label: "Review Request",
    description: "Automatic 5-star ask",
    icon: "⭐",
    endpoint: "/api/demo/sendReviewRequest",
  },
  {
    id: "booking-flow",
    label: "Booking Flow",
    description: "24/7 appointment scheduling",
    icon: "📅",
    endpoint: "/api/demo/showBookingFlow",
  },
  {
    id: "crm-pipeline",
    label: "CRM Pipeline",
    description: "Track every lead",
    icon: "📊",
    endpoint: "/api/demo/showPipeline",
  },
  {
    id: "follow-up",
    label: "Follow-Up Sequence",
    description: "Never forget a lead",
    icon: "🔄",
    endpoint: "/api/demo/sendFollowUp",
  },
];

const paymentButton: DemoButton = {
  id: "payment-link",
  label: "Send Payment Link → $2,500 + $300/mo",
  description: "Close the deal with instant payment link",
  icon: "💳",
  endpoint: "/api/payment/send-link",
};

export default function DemoPanel({ lead }: DemoPanelProps) {
  const allButtons = [...demoButtons, paymentButton];
  const [buttonStates, setButtonStates] = useState<Record<string, DemoActionStatus>>(
    allButtons.reduce((acc, btn) => ({ ...acc, [btn.id]: "idle" }), {})
  );
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleDemoAction = async (button: DemoButton) => {
    setButtonStates((prev) => ({ ...prev, [button.id]: "loading" }));

    try {
      // Add timeout to fetch call
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(button.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead,
          actionName: button.id,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Demo action failed");
      }

      setButtonStates((prev) => ({ ...prev, [button.id]: "success" }));
      
      // Special handling for payment link button
      if (button.id === "payment-link") {
        // Trigger confetti burst
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10b981", "#34d399", "#6ee7b7"],
        });
        
        // Show toast notification
        setToastMessage("Payment link sent! They'll get it in seconds.");
        setShowToast(true);
        
        // Hide toast after 3 seconds
        setTimeout(() => setShowToast(false), 3000);
      }
      
      // Reset to idle after 3 seconds for payment button, 2 seconds for others
      const resetDelay = button.id === "payment-link" ? 3000 : 2000;
      const resetTimeoutId = setTimeout(() => {
        setButtonStates((prev) => ({ ...prev, [button.id]: "idle" }));
      }, resetDelay);

      // Cleanup function stored in a ref would be better, but this is acceptable
      return () => clearTimeout(resetTimeoutId);
    } catch (error) {
      console.error(error);
      setButtonStates((prev) => ({ ...prev, [button.id]: "error" }));
      
      // Reset to idle after 2 seconds
      setTimeout(() => {
        setButtonStates((prev) => ({ ...prev, [button.id]: "idle" }));
      }, 2000);
    }
  };

  const getButtonClass = (buttonId: string) => {
    const status = buttonStates[buttonId];
    const isPaymentButton = buttonId === "payment-link";
    const baseClass = isPaymentButton 
      ? "btn-demo w-full text-left relative overflow-hidden !border-green-500 !bg-green-600/20 hover:!bg-green-600/30 !py-6"
      : "btn-demo w-full text-left relative overflow-hidden";
    
    if (status === "loading") return `${baseClass} opacity-75 cursor-wait`;
    if (status === "success") return `${baseClass} !border-green-500 !bg-green-600/40 animate-pulse-success`;
    if (status === "error") return `${baseClass} !border-red-500 !bg-red-900/30`;
    
    return baseClass;
  };

  const getButtonContent = (button: DemoButton) => {
    const status = buttonStates[button.id];
    const isPaymentButton = button.id === "payment-link";
    
    if (status === "loading") return isPaymentButton ? "Sending link..." : "Sending...";
    if (status === "success") return isPaymentButton ? "✓ Payment Link Sent!" : "✓ Sent!";
    if (status === "error") return "✗ Failed";
    
    return button.label;
  };

  return (
    <>
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">Live Demo Actions</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Click any button to trigger a real automation for {lead.ownerName}
        </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {demoButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleDemoAction(button)}
            disabled={buttonStates[button.id] === "loading"}
            className={getButtonClass(button.id)}
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl">{button.icon}</span>
              <div className="flex-1">
                <div className="font-semibold">{getButtonContent(button)}</div>
                <div className="text-xs text-gray-400 mt-1">{button.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Payment Link Button - Full Width at Bottom */}
      <button
        onClick={() => handleDemoAction(paymentButton)}
        disabled={buttonStates[paymentButton.id] === "loading"}
        className={getButtonClass(paymentButton.id)}
      >
        <div className="flex items-center justify-center space-x-3">
          <span className="text-3xl">{paymentButton.icon}</span>
          <div className="flex-1 text-center">
            <div className="font-bold text-lg">{getButtonContent(paymentButton)}</div>
            <div className="text-xs text-gray-300 mt-1">{paymentButton.description}</div>
          </div>
        </div>
      </button>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
          duration={3000}
        />
      )}
    </>
  );
}

