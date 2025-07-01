export const taxProfit25Nds20 = {
  key: 'taxProfit25Nds20',
  label: 'База прибыль',
  dependsOn: ['profitTaxBase', 'profitRate25',],
  calculate: ({ profitTaxBase, profitRate25 }) => {
    const tax = (parseFloat(profitTaxBase) || 0);
    const rate = (parseFloat(profitRate25) || 0);
    return tax * rate / 100;
  },
};