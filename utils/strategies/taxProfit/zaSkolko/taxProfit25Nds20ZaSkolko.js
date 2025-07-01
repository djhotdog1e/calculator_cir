export const taxProfit25Nds20ZaSkolko = {
  key: 'taxProfit25Nds20ZaSkolko',
  label: 'База прибыль',
  dependsOn: ['profitTaxBaseZaSkolko', 'profitRate25',],
  calculate: ({ profitTaxBaseZaSkolko, profitRate25 }) => {
    const tax = (parseFloat(profitTaxBaseZaSkolko) || 0);
    const rate = (parseFloat(profitRate25) || 0);
    return tax * rate / 100;
  },
};