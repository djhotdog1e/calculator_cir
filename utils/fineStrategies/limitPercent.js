export const limitPercent = {
  key: 'limitPercent',
  label: 'Ограничение',
  dependsOn: ['debtAmount', 'debtLimitPercent'],
  calculate: ({ debtAmount, debtLimitPercent }) => {
    const total = (parseFloat(debtAmount) || 0) * ((parseFloat(debtLimitPercent) || 0)/100);
    return Math.round(total);
  },
};
