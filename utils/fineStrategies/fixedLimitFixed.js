export const fixedLimitFixed = {
  key: 'fixedLimitFixed',
  label: 'Долг + Нейстойка',
  dependsOn: ['debtAmount', 'fixedTotalFixed'],
  calculate: ({ debtAmount, fixedTotalFixed }) => {
    const total = (parseFloat(debtAmount) || 0) + ((parseFloat(fixedTotalFixed) || 0));
    return total;
  },
};
