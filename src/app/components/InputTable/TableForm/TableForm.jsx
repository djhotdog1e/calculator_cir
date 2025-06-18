import React from 'react';
import FormRow from '@/app/components/InputTable/FormRow/FormRow.jsx';
import NdsSection from '@/app/components/InputTable/NdsSection/NdsSection.jsx';
import CurrencySection from '@/app/components/InputTable/CurrencySection/CurrencySection.jsx';
import styles from './TableForm.module.css';
import shared from '@/app/styles/shared.module.css';


export default function TableForm({ fields, values, onChange }) {
  return (
    <div className={`${styles.form} ${shared.shadow}`}>
      <div className={styles.twoColumnGrid}>
        <FormRow
          label="Закуп"
          name="buy"
          value={values.buy}
          onChange={onChange}
        />

        <FormRow
          label="Сумма кредита"
          name="creditAmount"
          value={values.creditAmount}
          onChange={onChange}
        />

        <FormRow
          label="Продажа"
          name="sale"
          value={values.sale}
          onChange={onChange}
        />

        <FormRow
          label="% по кредиту"
          name="creditPercent"
          value={values.creditPercent}
          onChange={onChange}
        />

        <FormRow
          label="Дни отсрочки"
          name="delayDays"
          value={values.delayDays}
          onChange={onChange}
        />

        <FormRow
          label="Дней кредита"
          name="creditDays"
          value={values.creditDays}
          onChange={onChange}
        />

        <FormRow
          label="Наценка, процент"
          name="markup"
          value={values.markup}
          onChange={onChange}
        />

        <FormRow
          label="Авансирование в %"
          name="advancePercent"
          value={values.advancePercent}
          onChange={onChange}
        />

        <FormRow
          label="Инфляция"
          name="inflation"
          value={values.inflation}
          onChange={onChange}
        />

        <FormRow
          label="Авансирование в сумме"
          name="advanceAmount"
          value={values.advanceAmount}
          onChange={onChange}
        />
      </div>

      <NdsSection
        value={values.nds}
        onChange={onChange}
      />

      <CurrencySection
        values={values}
        onChange={onChange}
      />
    </div>
  );
}