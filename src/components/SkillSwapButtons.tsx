import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function SkillSwapButton({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'px-6 py-2.5 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-[var(--skillswap-teal)] text-white hover:bg-[var(--skillswap-teal-dark)] active:scale-95 shadow-sm hover:shadow-md disabled:hover:bg-[var(--skillswap-teal)] disabled:hover:shadow-sm',
    secondary:
      'bg-[var(--skillswap-orange)] text-white hover:bg-[var(--skillswap-orange-dark)] active:scale-95 shadow-sm hover:shadow-md disabled:hover:bg-[var(--skillswap-orange)] disabled:hover:shadow-sm',
    ghost:
      'bg-transparent text-[var(--skillswap-teal)] border border-[var(--skillswap-neutral-300)] hover:bg-[var(--skillswap-neutral-50)] hover:border-[var(--skillswap-teal)] active:scale-95 disabled:hover:bg-transparent disabled:hover:border-[var(--skillswap-neutral-300)]',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
