import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      name="select"
      id="select"
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option disabled value="">
        Selecione
      </option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
