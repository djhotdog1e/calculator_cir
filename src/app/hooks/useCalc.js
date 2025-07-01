import { useState, useMemo } from 'react';
import { calculateResults } from '../../../utils/calculations';

const defaultValues = {
  buy: '1200000',
  creditAmount: '100000',
  sale: '1550000',
  creditPercent: '17',
  delayDays: '100',
  creditDays: '30',
  markup: '30',
  advancePercent: '5',
  inflation: '18',
  advanceAmount: '20',
  nds: '5',
  usdInvoice: '80',
  usdPayment: '82',
  euroInvoice: '75',
  euroPayment: '89',
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
