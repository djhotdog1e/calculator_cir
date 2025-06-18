import React from 'react';
import inputStyles from './InputField.module.css';
import shared from '@/app/styles/shared.module.css';

export default function InputField({ inputType, name, value, onChange, options, className, ...props }) {
  if (inputType === "radio" && options) {
    return (
      <div className={inputStyles.radioGroup}>
        {options.map((option) => (
          <label key={option.value} className={inputStyles.radioLabel}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <span className={inputStyles.radioText}>{option.label}</span>
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
      className={className || shared.input}
      {...props}
    />
  );
}
