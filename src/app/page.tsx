"use client";
import { useState } from "react";
import TableForm from "./components/InputTable/TableForm";

const fields = [
  [
    { label: "Закуп", name: "buy", type: "number" },
    { label: "Сумма кредита", name: "creditAmount", type: "number" },
  ],
  [
    { label: "Продажа", name: "sale", type: "number" },
    { label: "% по кредиту", name: "creditPercent", type: "number" },
  ],
  [
    { label: "Дни отсрочки", name: "delayDays", type: "number" },
    { label: "Дней кредита", name: "creditDays", type: "number" },
  ],
  [
    { label: "Наценка, процент", name: "markup", type: "number" },
    { label: "Авансирование в %", name: "advancePercent", type: "number" },
  ],
  [
    { label: "Инфляция", name: "inflation", type: "number" },
    { label: "Авансирование в сумме", name: "advanceAmount", type: "number" },
  ],
  [
    { label: "Значение НДС", name: "nds", type: "radio", options: [
      { value: "0", label: "0%" },
      { value: "5", label: "5%" },
      { value: "7", label: "7%" },
    ]},
  ],
  [
    { label: "USD курс на дату счета", name: "usdInvoice", type: "number" },
    { label: "USD курс на дату платежа", name: "usdPayment", type: "number" },
  ],
  [
    { label: "EURO курс на дату счета", name: "euroInvoice", type: "number" },
    { label: "EURO курс на дату платежа", name: "euroPayment", type: "number" },
  ],
];

const initialValues = {
  buy: "",
  creditAmount: "",
  sale: "",
  creditPercent: "",
  delayDays: "",
  creditDays: "",
  markup: "",
  advancePercent: "",
  inflation: "",
  advanceAmount: "",
  nds: "0",
  usdInvoice: "",
  usdPayment: "",
  euroInvoice: "",
  euroPayment: "",
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
    <main>
      <h1>Расчет цены договора</h1>
      <TableForm
        fields={fields}
        values={values}
        onChange={handleChange}
      />
    </main>
  );
}
