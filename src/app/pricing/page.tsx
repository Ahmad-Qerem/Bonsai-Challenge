"use client";
import Button from "@/components/shared/Button";
import PeriodSelector from "@/components/shared/PeriodSelector";
import PlanComponent from "@/components/shared/Plan";
import Image from "next/image";
import { useState } from "react";

interface Plan {
  title: string;
  description: string;
  price: number;
  period: string;
  billedYearly: boolean;
  mostPopular: boolean;
  features: string[];
}

const PlanAndPricing = () => {
  const plans: Plan[] = [
    {
      title: "Starter",
      description: "Ideal for freelancers and contractors just starting out.",
      price: 24,
      period: "month",
      billedYearly: false,
      mostPopular: false,
      features: [
        "All Templates",
        "Unlimited Clients & Projects",
        "Invoicing & Payments",
        "Proposals & Contracts",
        "Tasks & Time Tracking",
        "Client CRM",
        "Expense Tracking",
        "Up to 5 Project Collaborators",
      ],
    },
    {
      title: "Professional",
      description: "Everything a growing independent business needs to thrive.",
      price: 39,
      period: "month",
      billedYearly: false,
      mostPopular: true,
      features: [
        "Everything in Starter plus",
        "Custom Branding",
        "Forms & Questionnaires",
        "Workflow Automations",
        "Client Portal",
        "QuickBooks Integration",
        "Calendly Integration",
        "Zapier Integration",
        "Up to 15 Project Collaborators",
      ],
    },
    {
      title: "Business",
      description: "The perfect package for small businesses and agencies.",
      price: 79,
      period: "month",
      billedYearly: false,
      mostPopular: false,
      features: [
        "Everything in Starter and Professional plus",
        "Subcontractor Management",
        "Hiring Agreement Templates (1099 contracts)",
        "Subcontractor Onboarding",
        "Talent Pool",
        "3 Team Seats (additional seats $9/month)",
        "Accountant Access",
        "Connect Multiple Bank Accounts",
        "Unlimited Subcontractors",
        "Unlimited Project Collaborators",
      ],
    },
  ];
  const [plan, setPlan] = useState<boolean>(true);

  const handlePeriodSelected = (plan: boolean) => {
    setPlan(plan);
  };

  return (
    <div className="container flex flex-col justify-center items-center pt-40 z-10">
      <div
        className="flex justify-center gap-10 items-center mb-10"
        style={{ maxWidth: "550px",zIndex:10 }}
      >
        <h1 className="text-4xl">Plans & Pricing</h1>
        <PeriodSelector value={plan} onToggle={handlePeriodSelected} />
      </div>

      <div className="grid grid-cols-3 gap-5 mb-16">
        {plans.map((item, index) => {
          return <PlanComponent data={item} key={`plan-${index}`} />;
        })}
      </div>
    </div>
  );
};

const AddsOn = () => {
  const addsOnItems = [
    {
      title: "Collaborators",
      description:
        "Invite other users to specific projects for limited access and functionality.",
      price: "free",
      period: "",
      withLearnMore: false,
    },
    {
      title: "Partners",
      description:
        "Invite other users for full account access and company management.",
      price: "9",
      period: "month",
      withLearnMore: false,
    },
    {
      title: "Bonsai Tax",
      description:
        "Track expenses, identify write-offs, and estimate quarterly taxes easily.",
      price: "10",
      period: "month",
      withLearnMore: true,
      link: "#",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center text-2xl font-semibold mb-8">
        Super charge your work with add-ons
      </h1>
      <div className="flex flex-col gap-3">
        {addsOnItems.map((item, index) => {
          return (
            <div key={`add-on-${index}`} className="AddsOn-wrapper">
              <div>
                <h3 className="text-dark text-xl font-bold">{item.title}</h3>
                <p className="text-stone-500">{item.description}</p>
                {item.withLearnMore && (
                  <div className="group uppercase text-sm text-primary flex gap-1 cursor-pointer mt-2">
                    <span>learn more</span>
                    <Image
                      src="/assets/images/rightArrow.svg"
                      width={6}
                      height={20}
                      alt=""
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
              <div className="text-4xl font-bold">
                <div className="flex justify-center flex-col items-center">
                  {item.price == "free" ? (
                    "Free"
                  ) : (
                    <>
                      <span>${item.price}</span>
                      <span className="text-dark uppercase text-sm">
                        /{item.period}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StartFree = () => {
  return (
    <div className="container">
      <div className="start-free-wrapper">
        <h1 className="text-5xl leading-relaxed">
          It’s <span className="text-primary">your</span> business.
          <br /> We’re here to help it grow.
        </h1>
        <Button>Start Free</Button>
      </div>
    </div>
  );
};

const FQA = () => {
  const [activeAccordions, setActiveAccordions] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setActiveAccordions((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  const questions = [
    {
      Q: "How does the free trial work?",
      A: "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
    },
    {
      Q: "Can I change plans anytime?",
      A: 'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".',
    },
    {
      Q: "How do I pause my Bonsai subscription?",
      A: "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.",
    },
    {
      Q: "What is your refund policy?",
      A: "If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.",
    },
  ];

  return (
    <div className="container pb-36">
      <h1 className="text-2xl font-bold mb-5 text-primary text-center">
        Frequently Asked Questions
      </h1>
      {questions.map((item, index) => (
        <div key={`Q-${index}`} className="text-left mb-5 ">
          <h2
            onClick={() => handleClick(index)}
            className="text-xl text-dark font-bold hover:text-primary hover:cursor-pointer flex justify-between"
          >
            <span>{item.Q}</span>
            <Image
              src="/assets/images/dropdown-trigger.svg"
              width={20}
              height={20}
              alt="dropdown trigger"
            />
          </h2>
          <p
            className={`${
              activeAccordions.includes(index) ? "visible" : "hidden"
            }`}
            style={{ maxWidth: "760px" }}
          >
            {item.A}
          </p>
        </div>
      ))}
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="colored-bg-box "></div>

      <PlanAndPricing />
      <AddsOn />
      <StartFree />
      <FQA />
    </div>
  );
};

export default Pricing;
