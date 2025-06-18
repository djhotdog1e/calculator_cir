import React from 'react';
import InputField from '@/app/components/InputTable/InputField/InputField';
import styles from './NdsSection.module.css';
import shared from '@/app/styles/shared.module.css';

export default function NdsSection({ value, onChange }) {
  const ndsOptions = [
    { value: "0", label: "0%" },
    { value: "5", label: "5%" },
    { value: "7", label: "7%" }
  ];

  return (
    <div className={styles.ndsSection}>
      <label className={shared.label}>Значение НДС</label>
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