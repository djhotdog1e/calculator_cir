import React from 'react';
import TableForm from './InputTable/TableForm/TableForm';
//import ResultForm from './ResultTable/ResultForm/ResultForm';
import ResultForm from './ResultTable2/ResultTableTabulator';
//import ResultForm from './ResultTable2/ResultTableTanStack';
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
