"use client";
import Button from "@/components/shared/Button";
import StartFreeTextfield from "@/components/shared/StartFreeTextfield";
import Tabs from "@/components/shared/Tabs";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const EverythingYouNeed = () => {
  return (
    <div className="container flex relative pt-40">
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
    <div className="make-more-wrapper">
      <Image
        src="/assets/images/shape2.svg"
        width={400}
        height={500}
        alt="shape"
        className="absolute top-0 -z-10"
      />
      <div className="container">
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
    </div>
  );
};

const Benefits = () => {
  const benefitItem = (title: string, image: string) => {
    return (
      <div className="flex p-2 justify-between">
        <div className="flex gap-3">
          <Image src={image} width={24} height={15} alt={`item ${title}`} />
          <span>{title}</span>
        </div>
        <Image
          src="/assets/images/rightArrow.svg"
          className="rightArrow"
          width={8}
          height={8}
          alt="right arrow"
        />
      </div>
    );
  };

  const benefitContent = (
    title: string,
    description: string,
    linkTitle: string,
    linkRef: string,
    image: string
  ) => {
    return (
      <div>
        <h1 className="text-4xl">{title}</h1>
        <p className="text-2xl" style={{ maxWidth: "350px" }}>
          {description}
        </p>
        <Link
          href={linkRef}
          className="flex gap-3 mt-3 uppercase text-primary font-bold"
        >
          <span>{linkTitle}</span>
          <Image
            src="/assets/images/linkArrow.svg"
            width={20}
            height={15}
            alt="link arrow"
          />
        </Link>
        <div className="flex justify-end">
          <Image src={image} width={550} height={400} alt={`image ${title}`} />
        </div>
      </div>
    );
  };

  const benefits = [
    {
      link: benefitItem("Proposals", "/assets/images/benefit1.svg"),
      content: benefitContent(
        "Win More Work",
        "With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.",
        "Explore Proposals",
        "#",
        "/assets/images/proposalsImage.png"
      ),
    },
    {
      link: benefitItem("Contracts", "/assets/images/benefit2.svg"),
      content: benefitContent(
        "Protect Your Business",
        "Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.",
        "Explore Contracts",
        "#",
        "/assets/images/contractsImage.svg"
      ),
    },
    {
      link: benefitItem("Client CRM", "/assets/images/benefit3.svg"),
      content: benefitContent(
        "Stay Organized",
        "Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.",
        "Explore Projects",
        "#",
        "/assets/images/projectsImage.svg"
      ),
    },
  ];
  return (
    <div className="mt-40 relative">
      <div className="colored-bg-box-2"></div>
      <Tabs items={benefits} />
    </div>
  );
};

const Trusted = () => {
  const trustCard = (
    image: string,
    title: string,
    description: string,
    index: number
  ) => {
    return (
      <div
        key={`trusted-card-${index}`}
        style={{ minWidth: "400px", paddingLeft: "100px" }}
      >
        <Image
          src={image}
          width={84}
          height={84}
          alt={`image ${title}`}
          className="mb-6"
        />
        <h2 className="font-bold text-xl mb-4">{title}</h2>
        <p style={{ maxWidth: "280px" }}>{description}</p>
      </div>
    );
  };

  const trustedItems = [
    {
      image: "/assets/images/shapes.svg",
      title: "Built for All Work Types",
      description:
        "We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.",
    },
    {
      image: "/assets/images/world.svg",
      title: "Built for Global Businesses",
      description:
        "Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.",
    },
  ];
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl mb-6" style={{ maxWidth: "640px" }}>
          Trusted by 500K+ self-employed workers and small businesses
        </h1>
        <p className="text-center text-2xl" style={{ maxWidth: "640px" }}>
          Whether you’re just getting started or your business is booming,
          Bonsai has you covered.
        </p>
      </div>
      <div className="flex gap-8 justify-center mt-20">
        {trustedItems.map((item, index) => {
          return trustCard(item.image, item.title, item.description, index);
        })}
      </div>
    </div>
  );
};

const Reviews = () => {
  interface User {
    name: string;
    pic: string;
    role: string;
    comment: string;
  }
  const comment = (user: User) => {
    return (
      <div className="review-wrapper text-xl">
        <div className="user-image-wrapper">
          <Image
            src={user.pic}
            width={160}
            height={200}
            alt="user pic"
            className="user-pic"
          />
          <Image
            src="/assets/images/comma.svg"
            width={48}
            height={36}
            alt="comma"
            className="comma"
          />
        </div>
        <p className="mb-8" >{user.comment}</p>
        <h3 className="font-bold">{user.name}</h3>
        <span className="font-light text-stone-400">{user.role}</span>
      </div>
    );
  };

  const commentsGroup1: User[] = [
    {
      name: "David Mihm",
      pic: "/assets/images/user1.jpeg",
      role: "Founder of TidingsCo",
      comment:
        "\"For all my Freelancer / Small Agency followers, I wish I’d discovered @bonsaiinc long ago - great templated contract\"",
    },
    {
      name: "David Urbinati",
      pic: "/assets/images/user2.jpeg",
      role: "Motion design / animation",
      comment:
        "\"@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and accessible when i have questions.\"",
    },
  ];

  const commentsGroup2: User[] = [
    {
      name: "Nathanael Smith",
      pic: "/assets/images/user3.jpeg",
      role: "Product Design",
      comment:
        "\"Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time.\"",
    },
    {
      name: "Jon Gold",
      pic: "/assets/images/user4.jpeg",
      role: "Designer and engineer",
      comment:
        "\"Wow, @bonsaiinc's contracts are completely wonderful. If you freelance you have to check it out. Really lovely experience. h/t @hemeon\"",
    },
  ];
  return (
    <div className="mt-16">
      <h1 className="text-center text-4xl">Don't just take it from us.</h1>
      <Carousel>
        <div className="flex justify-center mt-20 gap-6">
          {commentsGroup1.map((user) => {
            return comment(user);
          })}
        </div>
        <div className="flex justify-center mt-20 gap-6">
          {commentsGroup2.map((user) => {
            return comment(user);
          })}
        </div>
      </Carousel>
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

export default function Home() {
  return (
    <div>
      <EverythingYouNeed />
      <MakeMore />
      <Benefits />
      <Trusted />
      <Reviews />
      <StartFree />
    </div>
  );
}
