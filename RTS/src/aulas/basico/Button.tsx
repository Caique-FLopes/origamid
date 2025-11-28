import React, { type JSX } from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

export const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  };

  return (
    <button style={{ fontSize: tamanho }} {...props} onClick={handleClick}>
      {children}
    </button>
  );
};
