import React from 'react';
import InputField from '@/app/components/InputTable/InputField/InputField';

export default function FormRow({ label, inputType = "number", name, value, onChange, options }) {
  return (
    <div className="flex items-center justify-between py-1">
      <label className="w-2/3 font-medium text-black text-md text-left pr-2 whitespace-nowrap">
        {label}
      </label>
      <InputField
        inputType={inputType}
        name={name}
        value={value}
        onChange={onChange}
        className="w-35 py-1 border border-gray-300 rounded text-md font-medium bg-white 
        transition-colors focus:border-blue-500 focus:outline-none text-center"
        options={options}
      />
    </div>
  );
}