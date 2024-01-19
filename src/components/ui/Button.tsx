import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: ReactNode;
  border?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, block = false, border = true, children } = props;

  return (
    <button
      className={
        [
          "bg-transparent px-4 py-2 hover:bg-gray-100 transition cursor-pointer",
          block && "block",
          border && " border-base border",
          className
        ].join(" ")
      }>
      { children }
    </button>
  );
};

export default Button;