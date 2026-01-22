import type { HTMLAttributes } from 'react';

interface SliderProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  displayMax: boolean;
}

export default function Slider({ label, value, max, unit, displayMax, ...props }: SliderProps) {
  return (
    <div className="column gap-4">
      <div className="w-full flex justify-between items-center">
        <label htmlFor={props.id}>{label}</label>
        <span>
          {value}
          {displayMax ? `/${max}` : ''} {unit}
        </span>
      </div>
      <input
        type="range"
        className="w-full h-4 rounded-md appearance-none bg-black cursor-pointer accent-white hover:accent-neutral-300"
        {...props}
      />
    </div>
  );
}
