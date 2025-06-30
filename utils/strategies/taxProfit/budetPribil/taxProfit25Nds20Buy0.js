export const taxProfit25Nds20Buy0 = {
  key: 'taxProfit25Nds20Buy0',
  label: 'База прибыль',
  dependsOn: ['profitTaxBaseNdsBuy0', 'profitRate25',],
  calculate: ({ profitTaxBaseNdsBuy0, profitRate25 }) => {
    const tax = (parseFloat(profitTaxBaseNdsBuy0) || 0);
    const rate = (parseFloat(profitRate25) || 0);
    return tax * rate / 100;
  },
};