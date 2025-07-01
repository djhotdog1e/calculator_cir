export const totalContractUSDZaSkolko = {
  key: 'totalContractUSDZaSkolko',
  label: 'Итог по договору в USD',
  dependsOn: ['exchangeDiffUSDZaSkolko', 'totalCostZaSkolko'],
  calculate: ({ exchangeDiffUSDZaSkolko, totalCostZaSkolko }) => {
    const cost = (parseFloat(totalCostZaSkolko) || 0);
    const diff = (parseFloat(exchangeDiffUSDZaSkolko) || 0);
    return cost + diff;
  },
};