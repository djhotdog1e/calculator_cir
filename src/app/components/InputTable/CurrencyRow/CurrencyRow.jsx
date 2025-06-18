import React from 'react';
import InputField from '@/app/components/InputTable/InputField/InputField';
import styles from './CurrencyRow.module.css';
import shared from '@/app/styles/shared.module.css';

export default function CurrencyRow({ 
  currency, 
  invoiceFieldName, 
  paymentFieldName, 
  invoiceValue, 
  paymentValue, 
  onChange 
}) {
  return (
    <div className={styles.currencyRow}>
      <span className={styles.currencyLabel}>{currency}</span>
      <InputField
        inputType="number"
        name={invoiceFieldName}
        value={invoiceValue}
        onChange={onChange}
        className={shared.input}
      />
      <InputField
        inputType="number"
        name={paymentFieldName}
        value={paymentValue}
        onChange={onChange}
        className={shared.input}
      />
    </div>
  );
}