"use client";

import { useState } from "react";
import TableForm from "./components/InputTable/TableForm/TableForm";

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

export default function Page() {
  const [values, setValues] = useState(initialValues);

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
    </div>
  );
}
