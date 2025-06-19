import React from 'react';
import CurrencyRow from '@/app/components/InputTable/CurrencyRow/CurrencyRow.jsx';

export default function CurrencySection({ values, onChange }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium text-black text-base mb-4 mr-30">
        <span className="md:text-right text-left">Продажа в валюте</span>
        <span className="text-left md:text-center">Курс на дату выставления счета</span>
        <span className="text-left md:text-center">Курс на дату платежа</span>
      </div>

      <CurrencyRow
        currency="USD"
        invoiceFieldName="usdInvoice"
        paymentFieldName="usdPayment"
        invoiceValue={values.usdInvoice}
        paymentValue={values.usdPayment}
        onChange={onChange}
      />

      <CurrencyRow
        currency="EURO"
        invoiceFieldName="euroInvoice"
        paymentFieldName="euroPayment"
        invoiceValue={values.euroInvoice}
        paymentValue={values.euroPayment}
        onChange={onChange}
      />
    </div>
  );
}