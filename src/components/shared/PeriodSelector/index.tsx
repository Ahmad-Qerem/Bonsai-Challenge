import Image from "next/image";

interface PeriodSelectorProps {
  value: boolean;
  onToggle: (plan: boolean) => void;
}

const PeriodSelector = ({ value = true, onToggle }: PeriodSelectorProps) => {
  return (
    <div className="flex justify-center items-center gap-6 relative">
      <span className={`uppercase ${value ? "text-slate-400" : ""}`}>
        monthly
      </span>
      <input
        type="checkbox"
        className="toggle toggle-lg  [--tglbg:#00a37e] bg-white hover:bg-white border-none "
        onChange={(e) => onToggle(e.target.checked)}
        checked={value}
      />
      <span className={`uppercase ${!value ? "text-slate-400" : ""}`}>
        yearly
      </span>
      <Image
        src="/assets/images/freeMonths.svg"
        width={130}
        height={100}
        sizes=""
        alt="free 2 months"
        className="free-months"
      />
    </div>
  );
};

export default PeriodSelector;
