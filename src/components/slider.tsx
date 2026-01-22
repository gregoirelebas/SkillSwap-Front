import { type HTMLAttributes } from 'react';

interface SliderProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  displayMax: boolean;
}

export default function Slider({
  label,
  value,
  min,
  max,
  unit,
  displayMax,
  ...props
}: SliderProps) {
  function getPercentage(value: number, max: number) {
    return (value / max) * 100;
  }

  return (
    <div className="relative column gap-4">
      <div className="w-full flex justify-between items-center">
        <label htmlFor={props.id}>{label}</label>
        <span className="text-primary">
          {value}
          {displayMax ? `/${max}` : ''} {unit}
        </span>
      </div>
      <div className="w-full flex relative">
        <input
          type="range"
          className="w-full h-3 appearance-none rounded-md cursor-pointer bg-neutral-300
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-6
        [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded [&::-webkit-slider-thumb]:cursor-pointer
        [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:rounded [&::-moz-range-thumb]:cursor-pointer
        "
          value={value}
          {...props}
        />
        <div
          className={'h-3 absolute rounded-md bg-black pointer-events-none'}
          style={{ width: `${getPercentage(Number(value), max)}%` }}></div>
      </div>
      <div className="w-full flex justify-between">
        <span className="text-sm text-neutral-500">
          {min} {unit}
        </span>
        <span className="text-sm text-neutral-500">
          {max} {unit}
        </span>
      </div>
    </div>
  );
}
