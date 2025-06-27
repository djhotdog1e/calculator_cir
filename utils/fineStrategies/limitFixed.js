export const limitFixed = {
  key: 'limitFixed',
  label: 'Ограничение',
  dependsOn: ['debtAmount', 'fixedDebtLimitPercent'],
  calculate: ({ debtAmount, fixedDebtLimitPercent }) => {
    const total = (parseFloat(debtAmount) || 0) * ((parseFloat(fixedDebtLimitPercent) || 0)/100);
    return Math.round(total);
  },
};
