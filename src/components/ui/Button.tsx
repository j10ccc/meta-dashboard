import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: ReactNode;
  border?: boolean;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    block = false,
    border = true,
    loading = true,
    disabled = false,
    children
  } = props;

  return (
    <button
      className={
        [
          "bg-transparent px-4 py-2 hover:bg-gray-100 transition",
          block && "block",
          border && " border-base border",
          disabled && "op-60",
          className
        ].join(" ")
      }
      disabled={disabled}
    >
      <div className="flex gap-1">
        <span>{ children }</span>
        { loading && <div className="i-svg-spinners-90-ring-with-bg" /> }
      </div>
    </button>
  );
};

export default Button;