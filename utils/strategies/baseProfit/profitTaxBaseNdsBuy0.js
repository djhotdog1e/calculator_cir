// для ндс закупа 0
export const profitTaxBaseNdsBuy0 = {
  key: 'profitTaxBaseNdsBuy0',
  label: 'База налога на прибыль',
  dependsOn: ['sale', 'buy'],
  calculate: ({ sale, buy }) => {
    const profitSale = (parseFloat(sale) || 0);
    const profitBuy = (parseFloat(buy) || 0);
    return (profitSale - (profitSale*20/120)) - profitBuy;
  },
};