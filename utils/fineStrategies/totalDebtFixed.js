export const totalDebtFixed = {
  key: 'totalDebtFixed',
  label: 'Итог',
  dependsOn: ['debtAmount', 'fixedRate', 'qtDays'],
  calculate: ({ debtAmount, fixedRate, qtDays }) => {
    const total = (parseFloat(debtAmount) || 0) + ((parseFloat(fixedRate) || 0) *(parseFloat(qtDays) || 0));
    return total;
  },
};
