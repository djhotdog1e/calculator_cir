// для какая будет прибыль и прямой расчет и ндс 20%

export const profitTaxBase = {
  key: 'profitTaxBase',
  label: 'База налога на прибыль',
  dependsOn: ['sale', 'buy'],
  calculate: ({ sale, buy }) => {
    const profitSale = (parseFloat(sale) || 0);
    const profitBuy = (parseFloat(buy) || 0);
    return (profitSale - (profitSale*20/120)) - (profitBuy - (profitBuy*20/120));
  },
};