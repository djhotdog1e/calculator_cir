export const taxProfit7Usn7Nds20ZaSkolko = {
  key: 'taxProfit7Usn7Nds20ZaSkolko',
  label: 'База прибыль',
  dependsOn: ['buy', 'saleFields', 'profitRate7', 'nds20ToPayZaSkolko'],
  calculate: ({ buy, saleFields, profitRate7, nds20ToPayZaSkolko }) => {
    const tax = (parseFloat(saleFields) || 0) - (parseFloat(buy) || 0) - (parseFloat(nds20ToPayZaSkolko) || 0);
    const rate = (parseFloat(profitRate7) || 0);
    return tax * rate / 100;
  },
};