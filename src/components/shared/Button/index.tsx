// components/Button.tsx
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  ...props
}) => {
  let buttonClasses = "uppercase text-sm font-bold  border rounded px-6 py-2 ";
  let textClasses = "";
  let hoverClasses = "";
  switch (variant) {
    case "outlined":
      buttonClasses +=
        "border-primary text-primary hover:bg-primary hover:text-white";
      textClasses = "text-primary";
      hoverClasses = "hover:bg-primary hover:text-white";
      break;
    case "filled":
      buttonClasses += "bg-primary text-white hover:bg-primary-dark";
      textClasses = "text-white";
      hoverClasses = "hover:bg-primary-dark";
      break;
    default:
      break;
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
