import React from 'react';
import TableForm from './InputTable/TableForm/TableForm';
import ResultsSection from './ResultTable/ResultSection/ResultSection';
import { useCalculator } from '../hooks/useCalc';

export default function Calculator() {
  const { values, handleChange, results, reset } = useCalculator();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black">Бухгалтерский калькулятор</h1>

      <TableForm values={values} onChange={handleChange} />

      <button
        className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        onClick={reset}
      >
        Сбросить
      </button>

      <ResultsSection results={results} />
    </div>
  );
}
