interface TimeBarChartProps {
  data: { label: string; value: number; maxValue?: number }[];
}

export function TimeBarChart({ data }: TimeBarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.maxValue || d.value));

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const percentage = (item.value / maxValue) * 100;

        return (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--skillswap-neutral-700)]">{item.label}</span>
              <span className="text-[var(--skillswap-neutral-900)]">{item.value}h</span>
            </div>
            <div className="h-2 bg-[var(--skillswap-neutral-100)] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--skillswap-teal)] to-[var(--skillswap-teal-light)] rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
