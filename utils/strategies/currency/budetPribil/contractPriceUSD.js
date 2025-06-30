export const contractPriceUSD = {
  key: 'contractPriceUSD',
  label: 'Цена договора в USD',
  dependsOn: ['usdInvoice', 'totalCost'],
  calculate: ({ usdInvoice, totalCost }) => {
    const cost = (parseFloat(totalCost) || 0);
    const curr = (parseFloat(usdInvoice) || 0);
    return cost/curr;
  },
};