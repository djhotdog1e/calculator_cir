export const totalContractUSD = {
  key: 'totalContractUSD',
  label: 'Итог по договору в USD',
  dependsOn: ['exchangeDiffUSD', 'totalCost'],
  calculate: ({ exchangeDiffUSD, totalCost }) => {
    const cost = (parseFloat(totalCost) || 0);
    const diff = (parseFloat(exchangeDiffUSD) || 0);
    return cost + diff;
  },
};