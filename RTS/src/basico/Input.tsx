import React from "react";

type InputProps = React.ComponentProps<"input"> & { label: string; id: string };

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
};
