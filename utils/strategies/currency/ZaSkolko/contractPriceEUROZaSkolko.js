export const contractPriceEUROZaSkolko = {
  key: 'contractPriceEUROZaSkolko',
  label: 'Цена договора в EURO',
  dependsOn: ['euroInvoice', 'totalCostZaSkolko'],
  calculate: ({ euroInvoice, totalCostZaSkolko }) => {
    const cost = (parseFloat(totalCostZaSkolko) || 0);
    const curr = (parseFloat(euroInvoice) || 0);
    return cost/curr;
  },
};