export const totalContractEUROZaSkolko = {
  key: 'totalContractEUROZaSkolko',
  label: 'Итог по договору в EURO',
  dependsOn: ['exchangeDiffEUROZaSkolko', 'totalCostZaSkolko'],
  calculate: ({ exchangeDiffEUROZaSkolko, totalCostZaSkolko }) => {
    const cost = (parseFloat(totalCostZaSkolko) || 0);
    const diff = (parseFloat(exchangeDiffEUROZaSkolko) || 0);
    return cost + diff;
  },
};