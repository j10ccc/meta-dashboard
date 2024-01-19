import type { FormHTMLAttributes, ReactNode } from "react";

interface FormProps<DataType> extends FormHTMLAttributes<HTMLFormElement> {
  onFinish: (value: DataType) => void;
  children: ReactNode;
}

function Form<DataType>(props: FormProps<DataType>) {
  const { children, onFinish, ...htmlProps } = props;

  function handleSubmit(e: any) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.target)) as DataType;
    onFinish(raw);
  };

  return (
    <form { ...htmlProps } onSubmit={handleSubmit}>
      { children }
    </form>
  );
};

export default Form;