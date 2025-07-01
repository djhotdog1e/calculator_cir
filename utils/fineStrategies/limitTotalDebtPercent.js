export const limitTotalDebtPercent = {
  key: 'limitTotalDebtPercent',
  label: 'Долг + Нейстойка',
  dependsOn: ['debtAmount', 'totalDay', 'limitPercent'],
  calculate: ({ debtAmount, totalDay, limitPercent }) => {
    const sum = (parseFloat(debtAmount) || 0);
    const totalDebt = (parseFloat(totalDay) || 0);
    const limit = (parseFloat(limitPercent) || 0);
    if (limit > totalDebt)
        return sum + totalDebt;
    else
        return sum + limit;
  },
};
