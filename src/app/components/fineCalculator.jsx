import React from 'react';
import FineTable from './FineTable/FineTable';
import { useFineCalculator } from '../hooks/useFineCalc';

export default function FineCalculator() {
  const { values, handleChange, results, reset } = useFineCalculator();
  return (
    <div className="p-8 min-h-screen">
        <FineTable 
          values={values} 
          onChange={handleChange} 
          results={results} 
        />
        <button
            className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            onClick={reset}
        >
            Сбросить
        </button>
    </div>
  );
}
