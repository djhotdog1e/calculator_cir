//для ндс 0, 5 , 7

export const ndsToPay = {
  key: 'ndsToPay',
  label: 'НДС к уплате',
  dependsOn: ['sale', 'nds'],
  calculate: ({ sale, nds }) => {
    const saleNdsPay = (parseFloat(sale) || 0);
    const valNds = (parseFloat(nds || 0));
    return saleNdsPay * valNds / 100;
  },
};