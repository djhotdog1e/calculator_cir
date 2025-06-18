"use client";

import { useState } from "react";
import TableForm from "./components/InputTable/TableForm";

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
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <TableForm 
        values={values} 
        onChange={handleChange} 
      />
    </div>
  );
}
