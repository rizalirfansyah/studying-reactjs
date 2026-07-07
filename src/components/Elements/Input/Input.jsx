import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-800 placeholder: opacity-80"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
