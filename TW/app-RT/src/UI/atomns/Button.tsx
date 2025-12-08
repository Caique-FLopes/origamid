import React from "react";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="border-2 border-sky-800 bg-sky-400 px-1 py-2 rounded-3xl shadow-inner shadow-sky-200 hover:bg-sky-300 hover:shadow-sky-50 hover:border-sky-400 disabled:bg-sky-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
