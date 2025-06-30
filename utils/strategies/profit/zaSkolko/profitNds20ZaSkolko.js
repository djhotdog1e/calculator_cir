export const profitNds20ZaSkolko = {
  key: 'profitNds20ZaSkolko',
  label: 'Прибыль',
  dependsOn: ['buy', 'saleFields', 'totalTaxNds20ZaSkolko'],
  calculate: ({ buy, saleFields , totalTaxNds20ZaSkolko }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(saleFields) || 0);
    const tax = (parseFloat(totalTaxNds20ZaSkolko) || 0);
    return sale1 - buy1 - tax;
  },
};