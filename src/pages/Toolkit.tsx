import { useState } from 'react';
import Checkbox from '../components/checkbox';
import Input from '../components/input';
import Slider from '../components/slider';
import useInput from '../hooks/useInput';

export default function Toolkit() {
  function ColorBox({ colorClass }: { colorClass: string }) {
    return <div className={`w-32 h-32 m-4 ${colorClass}`}></div>;
  }

  const primaryColors = ['bg-primary-light', 'bg-primary', 'bg-primary-dark'];

  const secondaryColors = ['bg-secondary-light', 'bg-secondary', 'bg-secondary-dark'];

  const semanticColors = ['bg-success', 'bg-warning'];

  const primaryColorBoxes = primaryColors.map((colorClass) => (
    <ColorBox key={colorClass} colorClass={colorClass} />
  ));

  const secondaryColorBoxes = secondaryColors.map((colorClass) => (
    <ColorBox key={colorClass} colorClass={colorClass} />
  ));

  const semanticColorBoxes = semanticColors.map((colorClass) => (
    <ColorBox key={colorClass} colorClass={colorClass} />
  ));

  const neutralColors = [
    'bg-neutral-50',
    'bg-neutral-100',
    'bg-neutral-200',
    'bg-neutral-300',
    'bg-neutral-400',
    'bg-neutral-500',
    'bg-neutral-600',
    'bg-neutral-700',
    'bg-neutral-800',
    'bg-neutral-900',
  ];

  const neutralColorBoxes = neutralColors.map((colorClass) => (
    <ColorBox key={colorClass} colorClass={colorClass} />
  ));

  const buttonVariants = [
    'btn-primary',
    'btn-secondary',
    'btn-ghost',
    'btn-success',
    'btn-warning',
    'btn-danger',
  ];

  const buttonBoxes = buttonVariants.map((variant) => (
    <div key={variant} className="column gap-5">
      <h3>
        {variant.replace('btn-', '').charAt(0).toUpperCase() + variant.replace('btn-', '').slice(1)}
      </h3>
      <div className="row gap-2">
        <button className={`btn ${variant}`}>Active</button>
        <button className={`btn ${variant}`} disabled>
          Disabled
        </button>
      </div>
    </div>
  ));

  const okInput = useInput('', checkOKInput);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const isValid = checkOKInput(okInput.value);
    okInput.setIsValid(isValid);

    if (!isValid) {
      return;
    }
  }

  function checkOKInput(value: unknown) {
    return (value as string) === 'OK';
  }

  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="column gap-20 p-20">
      {/* Typography Section */}
      <div className="card column w-full gap-10">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut blanditiis labore
          soluta ipsum, iusto cumque iste tenetur dolorum eos ea repellendus eius quas? Libero
          perferendis distinctio optio qui. Magni?
        </p>
      </div>

      {/* Colors Section */}
      <div className="column w-full gap-5">
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="card column gap-5">
            <h2>Primary Colors</h2>
            <div className="row">{primaryColorBoxes}</div>
          </div>
          <div className="card column gap-5">
            <h2>Secondary Colors</h2>
            <div className="row">{secondaryColorBoxes}</div>
          </div>
          <div className="card column gap-5">
            <h2>Semantic Colors</h2>
            <div className="row">{semanticColorBoxes}</div>
          </div>
        </div>
        <div className="card column w-full gap-5">
          <h2>Neutral shades</h2>
          <div className="row">{neutralColorBoxes}</div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="card column w-full gap-10">
        <h1>Buttons</h1>
        <div className="row gap-10">{buttonBoxes}</div>
      </div>

      {/* Form elements */}
      <div className="card w-full">
        <h1 className="text-center">Form Elements</h1>
        <form className="flex flex-col gap-10 mt-5" onSubmit={handleSubmit}>
          <Input
            label="Input label"
            id="ok-input"
            isValid={okInput.isValid}
            error="Input is only valid if it is 'OK'"
            type="text"
            placeholder="Type OK to be valid"
            value={okInput.value as string}
            onChange={okInput.onChange}
          />

          <div className="flex gap-5">
            <Checkbox id="option1" label="Option 1" value={'option1'} />
            <Checkbox id="option2" label="Option 2" value={'option2'} />
            <Checkbox id="option3" label="Option 3" value={'option3'} />
          </div>

          <Slider
            label="Example Slider"
            id="slider"
            value={sliderValue}
            min={0}
            max={100}
            step={1}
            unit="%"
            displayMax={true}
            onChange={(e) => setSliderValue(Number(e.currentTarget.value))}
          />
        </form>
      </div>
    </div>
  );
}
