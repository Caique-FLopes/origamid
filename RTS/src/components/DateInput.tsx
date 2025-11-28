import React from "react";

interface IDateInput extends React.ComponentProps<"input"> {
  label: string;
  id: string;
}

const DateInput = ({ label, id, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} type="date" id={id} {...props} />
    </div>
  );
};

export default DateInput;

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  ...generalStyle,
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
};

const inputStyle: React.CSSProperties = {
  ...generalStyle,
  border: "none",
  fontFamily: "monospace",
};
