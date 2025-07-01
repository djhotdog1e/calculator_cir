export const fixedLimitPercent = {
  key: 'fixedLimitPercent',
  label: 'Долг + Нейстойка',
  dependsOn: ['debtAmount', 'fixedTotalPercent'],
  calculate: ({ debtAmount, fixedTotalPercent }) => {
    const total = (parseFloat(debtAmount) || 0) + ((parseFloat(fixedTotalPercent) || 0));
    return total;
  },
};
