import React from "react";

export const Input = ({ name, value, onChange, placeholder, required }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  );
};
