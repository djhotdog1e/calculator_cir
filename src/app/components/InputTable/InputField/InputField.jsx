import React from 'react';

export default function InputField({ inputType, name, value, onChange, options, className, ...props }) {
  if (inputType === "radio" && options) {
    return (
      <div className="flex gap-0 items-center ml-28">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-0.5 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="appearance-none w-4 h-4 border-2 ml-3 border-gray-400 rounded-full bg-white cursor-pointer
               transition-colors duration-200 checked:border-gray-500 checked:bg-blue-500 checked:bg checked:bg-center checked:bg-no-repeat"
            />
            <span className=" text-md font-medium text-black">{option.label}</span>
          </label>
        ))}
      </div>
    );
  }

  return (
    <input
      type={inputType}
      name={name}
      value={value}
      onChange={onChange}
      className={`py-1 border border-gray-300 rounded-md text-base font-medium bg-white transition-colors duration-200 focus:border:outline-none
      hover:border-gray-400 ${className || ''}`}
      {...props}
    />
  );
}
