export const taxProfit25Nds20 = {
  key: 'taxProfit25Nds20',
  label: 'Наценка',
  dependsOn: ['profitTaxBase', 'profitRate25',],
  calculate: ({ profitTaxBase, profitRate25 }) => {
    const tax = (parseFloat(profitTaxBase) || 1);
    const rate = (parseFloat(profitRate25) || 1);
    return tax * rate / 100;
  },
};