import { Clock } from 'lucide-react';

interface CreditBadgeProps {
  credits: number;
  variant?: 'default' | 'compact';
}

export function CreditBadge({ credits, variant = 'default' }: CreditBadgeProps) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-1.5 bg-[var(--skillswap-teal)] text-white px-3 py-1.5 rounded-full">
        <Clock className="w-3.5 h-3.5" />
        <span className="text-sm">{credits}h</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--skillswap-teal)] to-[var(--skillswap-teal-light)] text-white px-4 py-2.5 rounded-xl shadow-sm">
      <Clock className="w-5 h-5" />
      <div className="flex flex-col">
        <span className="text-xs opacity-90">Time Balance</span>
        <span className="text-lg leading-none">{credits} hours</span>
      </div>
    </div>
  );
}
