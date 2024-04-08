"use client";
import Button from "@/components/shared/Button";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define your submenu components
const ProductSubmenu = () => {
  return <div>Product Submenu</div>;
};

const TemplatesSubmenu = () => {
  return <div>Templates Submenu</div>;
};

const Navbar = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const navItems = [
    {
      title: "Product",
      link: "#",
      submenu: () => <ProductSubmenu />,
    },
    {
      title: "Templates",
      link: "#",
      submenu: () => <TemplatesSubmenu />,
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Reviews",
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="container flex justify-between p-3 sticky top-0 ">
        <Logo />
        <nav className="flex justify-end items-baseline text-dark ">
          <ul className="flex justify-center gap-6 font-light px-16 ">
            {navItems.map((item, index) => {
              return (
                <li
                  key={`navLink-${index}`}
                  className="relative inline-block"
                  onMouseEnter={() => setActiveMenuIndex(index)}
                  onMouseLeave={() => setActiveMenuIndex(null)}
                >
                  <Link href={item.link} className="flex justify-center gap-2">
                    <span>{item.title}</span>
                    {item.submenu && (
                      <Image
                        src="/assets/images/dropdown-trigger.svg"
                        width={10}
                        height={10}
                        alt="dropdown-trigger"
                      />
                    )}
                  </Link>
                  {item.submenu && activeMenuIndex === index && (
                    <div className="absolute bg-white w-48 py-2 rounded shadow-lg">
                      {item.submenu()}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              onClick={() => console.log("Button clicked")}
            >
              Log In
            </Button>
            <Button onClick={() => console.log("Button clicked")}>
              Start Free
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
