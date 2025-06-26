// для за сколько продавать и ндс 20%

export const profitTaxBaseZaSkolko = {
  key: 'profitTaxBaseZaSkolko',
  label: 'База налога на прибыль',
  dependsOn: ['buy', 'markup'],
  calculate: ({buy, markup}) => {
    const profitBuy = (parseFloat(buy) || 0);
    const profitMarkup = (parseFloat(markup) || 0);
    const profitSale = profitBuy*(1+profitMarkup/100)
    return (profitSale - (profitSale*20/120)) - (profitBuy - (profitBuy*20/120));
  },
};