export default function VisualExplainer() {
  const steps = [
    { label: "Customer", icon: "👤" },
    { label: "Inquiry", icon: "💬" },
    { label: "Auto Text", icon: "📱" },
    { label: "Booking", icon: "📅" },
    { label: "Reminder", icon: "🔔" },
    { label: "Service", icon: "✨" },
    { label: "Review", icon: "⭐" },
    { label: "Repeat", icon: "🔄" },
  ];

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
      
      <div className="relative">
        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-12 h-12 bg-charcoal-950 border border-charcoal-700 rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="font-medium">{step.label}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="text-gray-600 text-xl">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-charcoal-950 border border-charcoal-700 rounded-full flex items-center justify-center text-3xl hover:border-white transition-all duration-200">
                    {step.icon}
                  </div>
                  <div className="text-sm font-medium text-center">{step.label}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-gray-600 text-2xl mx-2">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Every step runs automatically. You focus on your business, the system handles the rest.
        </p>
      </div>
    </div>
  );
}

