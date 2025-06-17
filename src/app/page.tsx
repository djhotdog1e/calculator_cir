"use client";
import { useState } from "react";
import TableForm from "./components/InputTable/TableForm";

const fields = [
  [
    { label: "Закуп", name: "buy", inputType: "number" },
    { label: "Сумма кредита", name: "creditAmount", inputType: "number" },
  ],
  [
    { label: "Продажа", name: "sale", inputType: "number" },
    { label: "% по кредиту", name: "creditPercent", inputType: "number" },
  ],
  [
    { label: "Дни отсрочки", name: "delayDays", inputType: "number" },
    { label: "Дней кредита", name: "creditDays", inputType: "number" },
  ],
  [
    { label: "Наценка, процент", name: "markup", inputType: "number" },
    { label: "Авансирование в %", name: "advancePercent", inputType: "number" },
  ],
  [
    { label: "Инфляция", name: "inflation", inputType: "number" },
    { label: "Авансирование в сумме", name: "advanceAmount", inputType: "number" },
  ],
  [
    { label: "Значение НДС", name: "nds", inputType: "radio", options: [
      { value: "0", label: "0%" },
      { value: "5", label: "5%" },
      { value: "7", label: "7%" },
    ]},
  ],
  [
    { label: "USD курс на дату счета", name: "usdInvoice", inputType: "number" },
    { label: "USD курс на дату платежа", name: "usdPayment", inputType: "number" },
  ],
  [
    { label: "EURO курс на дату счета", name: "euroInvoice", inputType: "number" },
    { label: "EURO курс на дату платежа", name: "euroPayment", inputType: "number" },
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
    const { name, value, inputType} = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: inputType === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  return (
    <main>
      <TableForm
        fields={fields}
        values={values}
        onChange={handleChange}
      />
    </main>
  );
}
