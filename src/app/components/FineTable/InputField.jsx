import React from "react";

export default function InputField({ 
  value, 
  onChange, 
  name, 
  placeholder, 
  type = "number", 
  className = "" 
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`py-1 border border-gray-200 rounded-md text-base text-black font-medium bg-gray-100 transition-colors duration-200 focus:border:outline-none
      hover: ${className}`}
    />
  );
}
