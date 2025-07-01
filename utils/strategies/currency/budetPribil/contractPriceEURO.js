export const contractPriceEURO = {
  key: 'contractPriceEURO',
  label: 'Цена договора в EURO',
  dependsOn: ['euroInvoice', 'totalCost'],
  calculate: ({ euroInvoice, totalCost }) => {
    const cost = (parseFloat(totalCost) || 0);
    const curr = (parseFloat(euroInvoice) || 0);
    return cost/curr;
  },
};