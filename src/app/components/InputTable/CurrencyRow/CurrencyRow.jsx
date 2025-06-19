import React from 'react';
import InputField from '@/app/components/InputTable/InputField/InputField';

export default function CurrencyRow({ 
  currency, 
  invoiceFieldName, 
  paymentFieldName, 
  invoiceValue, 
  paymentValue, 
  onChange 
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-2 mr-30">
      <span className="font-medium text-black text-md md:text-right text-left mr-1">
        {currency}
      </span>
      <InputField
        inputType="number"
        name={invoiceFieldName}
        value={invoiceValue}
        onChange={onChange}
        className="w-2/3 px-3 py-1 border border-gray-300 rounded-md text-md font-medium text-center focus:border-blue-500 focus:outline-none bg-white transition-colors ml-1"
      />
      <InputField
        inputType="number"
        name={paymentFieldName}
        value={paymentValue}
        onChange={onChange}
        className="w-2/3 px-3 py-1 border border-gray-300 rounded-md text-md font-medium text-center focus:border-blue-500 focus:outline-none bg-white transition-colors ml-12"
      />
    </div>
  );
}