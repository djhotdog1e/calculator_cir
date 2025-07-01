export const totalCostZaSkolko = {
  key: 'totalCostZaSkolko',
  label: 'Итого цена договора с учетом потери стоимости',
  dependsOn: ['saleFields', 'creditAmount', 'creditPercent', 'creditDays', 'inflation', 'delayDays'],
  calculate: ({ saleFields, creditAmount, creditPercent, creditDays, inflation, delayDays }) => {
    const sale1 = parseFloat(saleFields || 0);
    const creditAmount1 = parseFloat(creditAmount || 0);
    const creditPercent1 = parseFloat(creditPercent || 0);
    const creditDays1 = parseFloat(creditDays || 0);
    const inflation1 = parseFloat(inflation || 0);
    const delayDays1 = parseFloat(delayDays || 0);
    
    const creditPercent1Day = creditPercent1 / 365;
    const percentSum = creditAmount1 * creditPercent1Day / 100 * creditDays1;
    
    const inflation1Day = inflation1 / 365;
    const payment = sale1 - (sale1 - (sale1 * inflation1Day / 100) * delayDays1);

    return payment + sale1 + percentSum;
  },
};
