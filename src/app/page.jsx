"use client";

import { useState } from "react";
import TableForm from "./components/InputTable/TableForm/TableForm";
import ResultsSection from "./components/ResultTable/ResultSection/ResultSection";
import { calculateResults } from "./components/ResultTable/ResultSection/Calculation";

const initialValues = {
  buy: 0,
  creditAmount: 0,
  sale: 0,
  creditPercent: 0,
  delayDays: 0,
  creditDays: 0,
  markup: 0,
  advancePercent: 0,
  inflation: 0,
  advanceAmount: 0,
  nds: "0",
  usdInvoice: 0,
  usdPayment: 0,
  euroInvoice: 0,
  euroPayment: 0,
};

const initialResults = {
  total: 0,
  totalUsdInvoice: 0,
  totalEuroInvoice: 0,
  totalUsdPayment: 0,
  totalEuroPayment: 0,
};

export default function Page() {
  const [values, setValues] = useState(initialValues);
  const [results, setResults] = useState(initialResults);
  
  const handleCalculate = () => {
    setResults(calculateResults(values));
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Чтобы получить расчет цены договора, укажите исходные данные ниже:
        </h1>
        <TableForm 
          values={values} 
          onChange={handleChange} 
        />
      </div>
      <div className="flex justify-end items-center max-w-4/5">
        <button onClick={handleCalculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Рассчитать
        </button>
      </div>
      <div>
        <ResultsSection results={results} />
      </div>
    </div>
  );
}
