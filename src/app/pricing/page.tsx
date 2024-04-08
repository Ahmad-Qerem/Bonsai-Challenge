import Button from "@/components/shared/Button";
import Image from "next/image";

const AddsOn = () => {
  const addsOnItems = [
    {
      title: "Collaborators",
      description:
        "Invite other users to specific projects for limited access and functionality.",
      price: "Free",
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
    <div>
      <h1>Super charge your work with add-ons</h1>
      <div>
        {addsOnItems.map((item, index) => {
          return (
            <div key={`add-on-${index}`}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.withLearnMore && (
                  <div>
                    <span>learn more</span>
                    <Image src="" alt="" />{" "}
                  </div>
                )}
              </div>
              <div></div>
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
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-4xl text-primary">Frequently Asked Questions</h1>
      {questions.map((item) => {
        return (
          <>
            <h2>{item.Q}</h2>
            <p>{item.A}</p>
          </>
        );
      })}
    </div>
  );
};

const Pricing = () => {
  return (
    <div>
      <AddsOn />
      <StartFree />
      <FQA />
    </div>
  );
};

export default Pricing;
