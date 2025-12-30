interface PhaseCardProps {
  phase: string;
  title: string;
  deliverables: string[];
}

export default function PhaseCard({ phase, title, deliverables }: PhaseCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8">
      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
        {phase}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {deliverables.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
            <span className="text-gray-400 mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


