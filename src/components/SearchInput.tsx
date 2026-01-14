import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({ placeholder = 'Search...', value, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--skillswap-neutral-400)]" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-[var(--skillswap-neutral-50)] border border-[var(--skillswap-neutral-200)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--skillswap-teal)] focus:border-transparent transition-all"
      />
    </div>
  );
}
