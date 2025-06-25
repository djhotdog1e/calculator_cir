export const ndsSale = {
  key: 'ndsSale',
  label: 'НДС с продаж',
  dependsOn: ['sale'],
  calculate: ({ sale }) => {
    const saleNds = (parseFloat(sale) || 0);
    
    return saleNds * 20 / 120;
  },
};