export const totalCostAdvancePercent = {
  key: 'totalCostAdvancePercent',
  label: 'Итого цена договора с учетом потери стоимости при авансировании, %',
  dependsOn: ['sale', 'creditAmount', 'creditPercent', 'creditDays', 'inflation', 'delayDays', 'advancePercent'],
  calculate: ({ sale, creditAmount, creditPercent, creditDays, inflation, delayDays, advancePercent}) => {
    const sale1 = parseFloat(sale || 0);
    const creditAmount1 = parseFloat(creditAmount || 0);
    const creditPercent1 = parseFloat(creditPercent || 0);
    const creditDays1 = parseFloat(creditDays || 0);
    const inflation1 = parseFloat(inflation || 0);
    const delayDays1 = parseFloat(delayDays || 0);
    const advancePercent1 = parseFloat(advancePercent || 0);
    
    const creditPercent1Day = creditPercent1 / 365;
    const percentSum = creditAmount1 * creditPercent1Day / 100 * creditDays1;
    
    const inflation1Day = inflation1 / 365;
    const val1 = sale1 - (sale1 * advancePercent1 / 100);

    return (val1 * inflation1Day / 100 * delayDays1) + sale1 + percentSum;
  },
};
