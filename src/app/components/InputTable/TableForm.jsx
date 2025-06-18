import React from 'react';
import InputField from './InputField';
import formStyles from './TableForm.module.css';
import shared from '@/app/styles/shared.module.css';

export default function TableForm({ fields, values, onChange }) {
  return (
    <div className={`${formStyles.form} ${shared.shadow}`}>
      <div className={formStyles.twoColumnGrid}>
        <div className={formStyles.formRow}>
          <label className={shared.label}>Закуп</label>
          <InputField
            inputType="number"
            name="buy"
            value={values.buy}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Сумма кредита</label>
          <InputField
            inputType="number"
            name="creditAmount"
            value={values.creditAmount}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Продажа</label>
          <InputField
            inputType="number"
            name="sale"
            value={values.sale}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>% по кредиту</label>
          <InputField
            inputType="number"
            name="creditPercent"
            value={values.creditPercent}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Дни отсрочки</label>
          <InputField
            inputType="number"
            name="delayDays"
            value={values.delayDays}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Дней кредита</label>
          <InputField
            inputType="number"
            name="creditDays"
            value={values.creditDays}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Наценка, процент</label>
          <InputField
            inputType="number"
            name="markup"
            value={values.markup}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Авансирование в %</label>
          <InputField
            inputType="number"
            name="advancePercent"
            value={values.advancePercent}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Инфляция</label>
          <InputField
            inputType="number"
            name="inflation"
            value={values.inflation}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.formRow}>
          <label className={shared.label}>Авансирование в сумме</label>
          <InputField
            inputType="number"
            name="advanceAmount"
            value={values.advanceAmount}
            onChange={onChange}
            className={shared.input}
          />
        </div>
      </div>
      
      <div className={formStyles.ndsSection}>
        <label className={shared.label}>Значение НДС</label>
        <InputField
          inputType="radio"
          name="nds"
          value={values.nds}
          onChange={onChange}
          options={[
            { value: "0", label: "0%" },
            { value: "5", label: "5%" },
            { value: "7", label: "7%" }
          ]}
        />
      </div>
      
      <div className={formStyles.currencySection}>
        <div className={formStyles.currencyHeader}>
          <span>Продажа в валюте</span>
          <span>Курс на дату выставления счета</span>
          <span>Курс на дату платежа</span>
        </div>
        
        <div className={formStyles.currencyRow}>
          <span className={formStyles.currencyLabel}>USD</span>
          <InputField
            inputType="number"
            name="usdInvoice"
            value={values.usdInvoice}
            onChange={onChange}
            className={shared.input}
          />
          <InputField
            inputType="number"
            name="usdPayment"
            value={values.usdPayment}
            onChange={onChange}
            className={shared.input}
          />
        </div>
        
        <div className={formStyles.currencyRow}>
          <span className={formStyles.currencyLabel}>EURO</span>
          <InputField
            inputType="number"
            name="euroInvoice"
            value={values.euroInvoice}
            onChange={onChange}
            className={shared.input}
          />
          <InputField
            inputType="number"
            name="euroPayment"
            value={values.euroPayment}
            onChange={onChange}
            className={shared.input}
          />
        </div>
      </div>
    </div>
  );
}
