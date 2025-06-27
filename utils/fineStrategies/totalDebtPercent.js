export const totalDebtPercent = {
  key: 'totalDebtPercent',
  label: 'Долг + Нейстойка',
  dependsOn: ['debtAmount', 'totalDay'],
  calculate: ({ debtAmount, totalDay }) => {
    const total = (parseFloat(debtAmount) || 0) + ((parseFloat(totalDay) || 0));
    return total;
  },
};
