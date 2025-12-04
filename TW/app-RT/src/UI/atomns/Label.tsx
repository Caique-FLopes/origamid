import React from "react";

type LabelProps = React.PropsWithChildren &
  React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className="text-gray-50 font-semibold" {...props}>
      {children}
    </label>
  );
};

export default Label;
