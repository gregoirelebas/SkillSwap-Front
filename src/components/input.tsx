import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isValid: boolean;
  error?: string;
}

export default function Input({ label, isValid, error, ...props }: InputProps) {
  return (
    <div className="w-full column">
      {label && (
        <label htmlFor={props.id} className="w-full mb-4 pl-1 font-normal">
          {label}
        </label>
      )}
      <input
        className={`w-full p-3 bg-neutral-50 border ${isValid ? 'border-neutral-200' : 'border-danger'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
        {...props}
      />
      {!isValid && <span className="w-full mt-1 pl-3 text-danger">{error}</span>}
    </div>
  );
}
