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

  return (
    <div className="flex flex-col gap-20 p-20">
      {/* Typography Section */}
      <div className="card column gap-10">
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
      <div className="column gap-5">
        <div className="grid grid-cols-3 gap-10">
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
        <div className="card column gap-5">
          <h2>Neutral shades</h2>
          <div className="row">{neutralColorBoxes}</div>
        </div>
      </div>
    </div>
  );
}
