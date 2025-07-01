export const contractPriceUSDZaSkolko = {
  key: 'contractPriceUSDZaSkolko',
  label: 'Цена договора в USD',
  dependsOn: ['usdInvoice', 'totalCostZaSkolko'],
  calculate: ({ usdInvoice, totalCostZaSkolko }) => {
    const cost = (parseFloat(totalCostZaSkolko) || 0);
    const curr = (parseFloat(usdInvoice) || 0);
    return cost/curr;
  },
};