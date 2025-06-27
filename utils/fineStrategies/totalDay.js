export const totalDay = {
  key: 'totalDay',
  label: 'Итог',
  dependsOn: ['debtAmount', 'percentRate', 'qtDays'],
  calculate: ({ debtAmount, percentRate, qtDays }) => {
    const total = (parseFloat(debtAmount) || 0) * ((parseFloat(percentRate) || 0)/100) *(parseFloat(qtDays) || 0);
    return Math.round(total);
  },
};
