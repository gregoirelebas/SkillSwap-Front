import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faClock, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../input';
import useInput from '../../hooks/useInput';
import InfoCard from './infoCard';

export default function Header() {
  const searchInput = useInput('');

  const checkmarkTexts = ['No money needed', 'Learn from experts', 'Fair exchange'];
  const checkmarks = checkmarkTexts.map((text) => (
    <div key={text} className="row gap-2">
      <FontAwesomeIcon icon={faCheckCircle} className="text-success-light" />
      <span>{text}</span>
    </div>
  ));

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Implement search functionality here

    alert('Searching for: ' + searchInput.value);
  }
  return (
    <div className="grid grid-cols-2 items-center gap-16 mt-20 px-80 py-16 bg-primary">
      <div className="h-full flex flex-col justify-between gap-8 text-white flex-1">
        <div className="w-max px-4 py-2 rounded-full bg-white/20">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          <span>Join 10,000+ skill swappers worldwide</span>
        </div>
        <div className="flex flex-col gap-4 text-5xl font-medium">
          <span>Share Skills,</span>
          <span className="text-secondary">Swap Time,</span>
          <span>Grow Together</span>
        </div>
        <p className="text-xl">
          Learn anything from anyone, teach what you love, and build a community where time is the
          only currency.
        </p>
        <form
          className="row gap-2 bg-white text-black p-2 rounded-2xl"
          onSubmit={handleSearchSubmit}>
          <Input
            type="text"
            value={String(searchInput.value)}
            placeholder="Search skills..."
            isValid={searchInput.isValid}
            onChange={searchInput.onChange}
          />
          <button type="submit" className="btn btn-primary" onClick={handleSearchSubmit}>
            Search
          </button>
        </form>
        <div className="flex gap-4">{checkmarks}</div>
      </div>
      <div className="relative border-8 border-white/20 rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njg3NTk0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Home header illustration"
          className="rounded-2xl"
        />
        <div className="w-max absolute -bottom-10 -left-10">
          <InfoCard
            icon={faUserGroup}
            title="10K+"
            value="Active Users"
            bgColor="bg-secondary/10"
            textColor="text-secondary"
          />
        </div>
        <div className="w-max absolute -top-10 -right-10">
          <InfoCard
            icon={faClock}
            title="50K+"
            value="Hours Swapped"
            bgColor="bg-primary/10"
            textColor="text-primary"
          />
        </div>
      </div>
    </div>
  );
}
