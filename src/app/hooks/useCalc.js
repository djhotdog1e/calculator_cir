import { useState, useMemo } from 'react';
import { calculateResults } from '../../../utils/calculations';

const defaultValues = {
  buy: '',
  creditAmount: '',
  sale: '',
  creditPercent: '',
  delayDays: '',
  creditDays: '',
  markup: '',
  advancePercent: '',
  inflation: '',
  advanceAmount: '',
  nds: '0',
  usdInvoice: '',
  usdPayment: '',
  euroInvoice: '',
  euroPayment: '',
};

export const useCalculator = () => {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const results = useMemo(() => calculateResults(values), [values]);

  return {
    values,
    handleChange,
    results,
    reset: () => setValues(defaultValues),
  };
};
