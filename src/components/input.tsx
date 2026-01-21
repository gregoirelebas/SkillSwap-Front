import '../styles/input.css';

import React from 'react';

interface InputProps {
  label?: string;
  isValid: boolean;
  error?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function Input({ label, isValid, error, inputProps }: InputProps) {
  return (
    <div className="w-full column">
      {label && (
        <label htmlFor={inputProps.id} className="input-label">
          {label}
        </label>
      )}
      <input className={`input ${isValid ? '' : 'input-invalid'}`} {...inputProps} />
      {!isValid && <span className="input-error">{error}</span>}
    </div>
  );
}
