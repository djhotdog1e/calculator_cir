import React from 'react';
import CurrencyRow from '@/app/components/InputTable/CurrencyRow/CurrencyRow.jsx';
import styles from './CurrencySection.module.css';

export default function CurrencySection({ values, onChange }) {
  return (
    <div className={styles.currencySection}>
      <div className={styles.currencyHeader}>
        <span>Продажа в валюте</span>
        <span>Курс на дату выставления счета</span>
        <span>Курс на дату платежа</span>
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