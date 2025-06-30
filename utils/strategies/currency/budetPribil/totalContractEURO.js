export const totalContractEURO = {
  key: 'totalContractEURO',
  label: 'Итог по договору в EURO',
  dependsOn: ['exchangeDiffEURO', 'totalCost'],
  calculate: ({ exchangeDiffEURO, totalCost }) => {
    const cost = (parseFloat(totalCost) || 0);
    const diff = (parseFloat(exchangeDiffEURO) || 0);
    return cost + diff;
  },
};