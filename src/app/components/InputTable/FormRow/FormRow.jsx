import React from 'react';
import InputField from '@/app/components/InputTable/InputField/InputField';
import styles from './FormRow.module.css';
import shared from '@/app/styles/shared.module.css';

export default function FormRow({ label, inputType = "number", name, value, onChange, options }) {
  return (
    <div className={styles.formRow}>
      <label className={shared.label}>{label}</label>
      <InputField
        inputType={inputType}
        name={name}
        value={value}
        onChange={onChange}
        className={shared.input}
        options={options}
      />
    </div>
  );
}