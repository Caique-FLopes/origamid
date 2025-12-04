import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className="border border-gray-500 text-gray-200 px-2.5 py-2  rounded-3xl"
      {...props}
    />
  );
};

export default Input;
