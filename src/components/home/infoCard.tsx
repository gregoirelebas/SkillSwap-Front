import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InfoCardProps {
  icon: IconDefinition;
  title: string;
  value: string;
  bgColor: string;
  textColor: string;
}

export default function InfoCard({ icon, title, value, bgColor, textColor }: InfoCardProps) {
  return (
    <div className="card flex gap-4 p-4 ">
      <div className={`column p-4 ${bgColor} rounded-xl`}>
        <FontAwesomeIcon icon={icon} className={`text-xl ${textColor}`} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl">{title}</span>
        <span className="text-sm text-neutral-600">{value}</span>
      </div>
    </div>
  );
}
