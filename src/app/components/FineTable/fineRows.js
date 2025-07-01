export const fineRows = [
  [
    { type: "label", label: "Сумма закупки по инвойсу:", colSpan: 1 },
    { type: "input", field: "debtAmount", colSpan: 1 },
    { type: "empty", colSpan: 1 },
    { type: "empty", colSpan: 1 }
  ],
  [
    { type: "label", label: "Дата", colSpan: 1 },
    { type: "input-date", label: "Начало", field: "startDate", colSpan: 1 },
    { type: "input-date", label: "Конец", field: "endDate", colSpan: 1 },
    { type: "empty", colSpan: 1 }
  ],
  [
    { type: "label", label: "Кол-во дней", colSpan: 1 },
    { type: "empty", colSpan: 1 },
    { type: "result", strategy: "qtDays", colSpan: 1 },
    { type: "empty", colSpan: 1 }
  ],

  [
    { type: "section", label: "Ставка, в процентах в день", colSpan: 4},
  ],
  [
    { type: "empty", colSpan: 1 },
    { type: "label", label: "Ставка, %", colSpan: 1 },
    { type: "label", label: "Итог", colSpan: 1 },
    { type: "label", label: "Долг + Неустойка", colSpan: 1 },
  ],
  [
    { type: "empty", colSpan: 1 },
    { type: "input", field: "percentRate", colSpan: 1 },
    { type: "result", strategy: "totalDay", colSpan: 1 },
    { type: "result", strategy: "totalDebtPercent", colSpan: 1 },
  ],

  [
    { type: "label", label: "Ограничение долга", colSpan: 1 },
    { type: "label", label: "Ставка, %", colSpan: 1 },
    { type: "label", label: "Ограничение", colSpan: 1 },
    { type: "label", label: "Долг + неустойка", colSpan: 1 },
  ],
  [
    { type: "label", label: "В процентах от суммы долга", colSpan: 1 },
    { type: "input", field: "debtLimitPercent", colSpan: 1 },
    { type: "result", strategy: "limitPercent", colSpan: 1 },
    { type: "result", strategy: "limitTotalDebtPercent", colSpan: 1 },
  ],

  [
    { type: "label", label: "В твёрдой сумме", colSpan: 1 },
    { type: "empty", colSpan: 1 },
    { type: "input", field: "fixedTotalPercent", colSpan: 1 },
    { type: "result", strategy: "fixedLimitPercent", colSpan: 1 },
  ],

  [
    { type: "section", label: "Ставка, в твёрдой сумме, в день", colSpan: 4},
  ],
  [
    { type: "empty", colSpan: 1 },
    { type: "label", label: "Ставка", colSpan: 1 },
    { type: "label", label: "Итог", colSpan: 1 },
    { type: "label", label: "Долг + Неустойка", colSpan: 1 },
  ],
  [
    { type: "empty", colSpan: 1 },
    { type: "input", field: "fixedRate", colSpan: 1 },
    { type: "result", strategy: "totalDayFixed", colSpan: 1 },
    { type: "result", strategy: "totalDebtFixed", colSpan: 1 },
  ],

  [
    { type: "label", label: "Ограничение долга", colSpan: 1 },
    { type: "label", label: "Ставка", colSpan: 1 },
    { type: "label", label: "Ограничение", colSpan: 1 },
    { type: "label", label: "Долг + неустойка", colSpan: 1 },
  ],
  [
    { type: "label", label: "В процентах от суммы долга", colSpan: 1 },
    { type: "input", field: "fixedDebtLimitPercent", colSpan: 1 },
    { type: "result", strategy: "limitFixed", colSpan: 1 },
    { type: "result", strategy: "limitTotalDebtFixed", colSpan: 1 },
  ],

  [
    { type: "label", label: "В твёрдой сумме", colSpan: 1 },
    { type: "empty", colSpan: 1 },
    { type: "input", field: "fixedTotalFixed", colSpan: 1 },
    { type: "result", strategy: "fixedLimitFixed", colSpan: 1 },
  ],
];
