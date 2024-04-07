"use client";
import Button from "@/components/shared/Button";
import StartFreeTextfield from "@/components/shared/StartFreeTextfield";
import Textfield from "@/components/shared/Textfield";
import Image from "next/image";

const EverythingYouNeed = () => {
  return (
    <div className="flex relative pt-40">
      <div className="colored-bg-box"></div>
      <div className="flex-1">
        <h1 className="text-5xl max-w-22-char">
          Everything you need to run your business.
        </h1>
        <p className="mt-6">
          Bonsai’s all-in-one product suite with smart automation lets you focus
          on your passion, not your paperwork.
        </p>
        <StartFreeTextfield />
      </div>
      <div className="flex-1">
        <Image
          src="/assets/images/success.png"
          style={{ width: "100%" }}
          width={500}
          height={450}
          alt="success"
        />
      </div>
    </div>
  );
};

const MakeMore = () => {
  return (
    <div className="mt-40">
      <h1 className="text-center mb-4 text-3xl">Make more, manage less</h1>
      <p className="text-center mb-8">
        Bonsai integrates and automates every step of your business so it runs
        seamlessly - from proposal to tax season.
      </p>
      <div className="flex gap-16">
        <div className="flex-1 text-center">
          <h2 className="text-xl mb-8">Without Bonsai</h2>
          <Image
            src="/assets/images/documents.svg"
            style={{ width: "100%" }}
            width={400}
            height={400}
            alt="documents"
          />
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-xl mb-8">Without Bonsai</h2>
          <Image
            src="/assets/images/plan.svg"
            style={{ width: "100%" }}
            width={400}
            height={400}
            alt="plan"
          />
        </div>
      </div>
    </div>
  );
};

const WinMore = () => {
  return <div>WinMore</div>;
};

const Trusted = () => {
  return <div>Trusted</div>;
};

const Reviews = () => {
  return <div>Reviews</div>;
};

const StartFree = () => {
  return <div>StartFree</div>;
};

export default function Home() {
  return (
    <div className="container">
      <EverythingYouNeed />
      <MakeMore />
      <WinMore />
      <Trusted />
      <Reviews />
      <StartFree />
    </div>
  );
}
