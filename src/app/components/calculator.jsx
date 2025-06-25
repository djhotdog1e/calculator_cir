import React from 'react';
import TableForm from './InputTable/TableForm/TableForm';
import ResultForm from './ResultTable/ResultForm/ResultForm';
import { useCalculator } from '../hooks/useCalc';

export default function Calculator() {
  const { values, handleChange, results, reset } = useCalculator();

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl font-normal mb-6 text-black text-center max-w-130 mx-auto">Чтобы получить расчет цены договора, укажите исходные данные ниже:</h1>

      <TableForm values={values} onChange={handleChange} />

      <button
        className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        onClick={reset}
      >
        Сбросить
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Результаты расчета</h2>
        <ResultForm 
          results={results} 
          values={values} 
        />
      </div>
    </div>
  );
}
