import React from 'react';
import InputField from '@/app/components/InputTable/InputField/InputField';


export default function NdsSection({ value, onChange }) {
  const ndsOptions = [
    { value: "0", label: "0%" },
    { value: "5", label: "5%" },
    { value: "7", label: "7%" }
  ];

  return (
    <div className="flex items-center justify-start mb-8 mr-90">
      <label className="font-medium text-black ml-2 min-w-[14%]">Значение НДС</label>
      <InputField
        inputType="radio"
        name="nds"
        value={value}
        onChange={onChange}
        options={ndsOptions}
      />
    </div>
  );
}