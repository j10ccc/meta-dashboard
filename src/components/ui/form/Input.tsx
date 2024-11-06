import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

const Input = (props: InputProps) => {
  const { className, type = "text", label, ...htmlProps } = props;

  return (
    <div className={["my-4", className].join(" ")}>
      <div className="text-sm op-50">
        <label htmlFor={htmlProps.name}>{label || htmlProps.name }</label>
      </div>
      <div>
        <input
          className="box-border text-sm leading-1em w-full mt-1 bg-transparent pl-4 py-3 input-base border-base border-1"
          type={type}
          id={htmlProps.id || htmlProps.name}
          name={htmlProps.name}
          {...htmlProps}
        />
      </div>
    </div>
  );
};

export default Input;
