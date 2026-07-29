
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-lg px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary" &&
"bg-[#2A9D8F] text-white hover:bg-[#217E73]",
        variant === "outline" &&
"border border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;