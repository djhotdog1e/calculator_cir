export const limitTotalDebtFixed = {
  key: 'limitTotalDebtFixed',
  label: 'Долг + Неустойка',
  dependsOn: ['debtAmount', 'totalDayFixed', 'limitFixed'],
  calculate: ({ debtAmount, totalDayFixed, limitFixed }) => {
    const sum = (parseFloat(debtAmount) || 0);
    const totalDebt = (parseFloat(totalDayFixed) || 0);
    const limit = (parseFloat(limitFixed) || 0);
    if (limit > totalDebt)
        return sum + totalDebt;
    else
        return sum + limit;
  },
};
