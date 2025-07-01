import { useState, useMemo } from 'react';
import { calculateFineResults } from '../../../utils/fineCalculations';

const defaultValues = {
  debtAmount: '',
  startDate: '',
  endDate: '',
  percentRate: '',
  debtLimitPercent: '',
  fixedTotalPercent: '',
  fixedDebtLimitPercent: '',
  fixedRate: '',
  fixedTotalFixed: ''
};

export const useFineCalculator = () => {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const results = useMemo(() => calculateFineResults(values), [values]);

  return {
    values,
    handleChange,
    results,
    reset: () => setValues(defaultValues),
  };
};
