"use client";
import Image from "next/image";
import { useState } from "react";

interface Link {
  title: string;
  link: string;
  submenu?: Link[];
}

interface FooterMenuProps {
  title?: String;
  items: Link[];
}

const FooterMenu: React.FC<FooterMenuProps> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handelItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    e.preventDefault();
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {title && <h3>{title}</h3>}
      <ul>
        {items.map((item, index) => {
          return (
            <li key={`link-${index}`}>
              <a
                href={item.link}
                className="flex space-justify-content-between gap-2"
                onClick={(e) => handelItemClick(e, index)}
              >
                <span>{item.title}</span>
                {item.submenu && (
                  <Image
                    src="/assets/images/dropdown-trigger.svg"
                    width={15}
                    height={15}
                    alt="dropdown-trigger"
                  />
                )}
              </a>
              {item.submenu && openIndex === index && (
                <ul>
                  {item.submenu.map((subitem, subitemIndex) => {
                    return (
                      <li key={`subitem-${subitemIndex}`}>
                        <a href={subitem.link}>{subitem.title}</a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
