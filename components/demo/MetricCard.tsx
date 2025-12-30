interface MetricCardProps {
  name: string;
  definition: string;
  description: string;
}

export default function MetricCard({ name, definition, description }: MetricCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="font-bold text-2xl text-gray-900 mb-1">{name}</div>
      <div className="text-sm font-medium text-gray-500 mb-3">{definition}</div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

