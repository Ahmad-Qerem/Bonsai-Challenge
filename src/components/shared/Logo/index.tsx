"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
const Logo = () => {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <Link href="/">
      <Image
        src="/assets/images/bonsaiLogo.svg"
        alt="Logo"
        width={width < 1024 ? "100" : "150"}
        height={width < 1024 ? "20" : "30"}
        className="relative"
      />
    </Link>
  );
};

export default Logo;
