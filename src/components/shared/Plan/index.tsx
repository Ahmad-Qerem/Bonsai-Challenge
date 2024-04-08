import Image from "next/image";

interface Plan {
  title: string;
  description: string;
  price: number;
  period: string;
  billedYearly: boolean;
  mostPopular: boolean;
  features: string[];
}

const Plan = ({ data }: { data: Plan }) => {
  return (
    <div className="plan-wrapper col-span-3 md:col-span-1 md:w-full">
      {data.mostPopular && <div className="most-popular">most popular</div>}
      <h2 className="text-dark text-xl font-bold">{data.title}</h2>
      <p className="text-sm text-stone-600 mb-5" style={{maxWidth:"200px"}}>{data.description}</p>
      <div className="text-5xl font-bold flex items-start gap-3 pb-2 pricing-items">
        <span className="text-3xl font-medium">$</span>
        {data.price}
        <span className="uppercase text-2xl font-light text-stone-600 self-end">
          /{data.period}
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-10 ">
        {data.features.map((item, key) => {
          return (
            <div key={`feature-${key}`} className="flex gap-2 items-center">
              <Image
                src="/assets/images/check.svg"
                width={12}
                height={12}
                alt="check mark"
              />
              <span className="text-dark">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
