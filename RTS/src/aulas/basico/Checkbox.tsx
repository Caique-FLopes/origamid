import React from "react";

export const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState<boolean>(false);

  return (
    <label
      style={{
        padding: "1rem",
        border: "2px solid",
        borderColor: value ? "#8d2" : "#f70",
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
      {label}
    </label>
  );
};
