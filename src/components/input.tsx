import type { InputHTMLAttributes } from 'react';

interface InputProps {
  label?: string;
  isValid: boolean;
  error?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export default function Input({ label, isValid, error, inputProps }: InputProps) {
  return (
    <div className="w-full column">
      {label && (
        <label htmlFor={inputProps.id} className="w-full mb-4 pl-1 font-normal">
          {label}
        </label>
      )}
      <input
        className={`w-full p-3 bg-neutral-50 border ${isValid ? 'border-neutral-200' : 'border-danger'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
        {...inputProps}
      />
      {!isValid && <span className="w-full mt-1 pl-3 text-danger">{error}</span>}
    </div>
  );
}
