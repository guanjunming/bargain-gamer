import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { name, label, styles, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-gray-300">
        {label}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        className={`${
          styles || ""
        }w-full rounded-sm px-2 py-1 text-white bg-gray-700 shadow-sm focus:outline-none`}
        {...props}
        required
      />
    </div>
  );
});

export default Input;
