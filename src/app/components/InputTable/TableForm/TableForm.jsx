import React from 'react';
import FormRow from '@/app/components/InputTable/FormRow/FormRow.jsx';
import NdsSection from '@/app/components/InputTable/NdsSection/NdsSection.jsx';
import CurrencySection from '@/app/components/InputTable/CurrencySection/CurrencySection.jsx';

export default function TableForm({ values, onChange }) {
    const formFields = [
        {name: 'buy', label: 'Закуп'},
        {name: 'creditAmount', label: 'Сумма кредита'},
        {name: 'sale', label: 'Продажа'},
        {name: 'creditPercent', label: '% кредита'},
        {name: 'delayDays', label: 'Дни отсрочки'},
        {name: 'creditDays', label: 'Дни кредита'},
        {name: 'markup', label: 'Наценка, %'},
        {name: 'advancePercent', label: 'Авансирование в %'},
        {name: 'inflation', label: 'Инфляция'},
        {name: 'advanceAmount', label: 'Авансирование в сумме'}
    ];

    return (
        <form className="block p-8 bg-gray-300 rounded-lg shadow-md m-5 max-w-5xl mx-auto font-sans">
          <div className="grid grid-cols-2 gap-2 gap-x-8 mb-8 mr-40">
              {formFields.map((field) => (
              <FormRow
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  value={values[field.name]}
                  onChange={onChange}
              />
              ))}
          </div>

          <NdsSection 
              value={values.nds} 
              onChange={onChange} 
          />

          <CurrencySection 
              values={values} 
              onChange={onChange} 
          />
        </form>
    );
}