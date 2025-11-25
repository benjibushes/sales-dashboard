"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose?: () => void;
  duration?: number;
}

export default function Toast({ message, type = "info", onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (onClose && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [onClose, duration]);

  const bgColor = {
    success: "bg-green-900/90 border-green-700",
    error: "bg-red-900/90 border-red-700",
    info: "bg-charcoal-900/90 border-charcoal-700",
  }[type];

  const icon = {
    success: "✓",
    error: "✗",
    info: "ℹ",
  }[type];

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className={`${bgColor} border rounded-lg px-6 py-4 shadow-lg flex items-center space-x-3 min-w-[300px]`}>
        <span className="text-2xl">{icon}</span>
        <span className="text-white font-medium">{message}</span>
      </div>
    </div>
  );
}

