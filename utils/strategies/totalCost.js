export const totalCost = {
  key: 'totalCost',
  label: 'Полная стоимость с НДС',
  dependsOn: ['buy', 'creditAmount', 'sale', 'nds'],
  calculate: ({ buy, creditAmount, sale, nds }) => {
    const ndsPercent = parseFloat(nds || 0);
    const total =
      (parseFloat(buy) || 0) +
      (parseFloat(creditAmount) || 0) +
      (parseFloat(sale) || 0);

    return total * (1 + ndsPercent / 100);
  },
};
