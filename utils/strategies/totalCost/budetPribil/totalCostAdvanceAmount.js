export const totalCostAdvanceAmount = {
  key: 'totalCostAdvanceAmount',
  label: 'Итого цена договора с учетом потери стоимости при авансировании, сумма',
  dependsOn: ['sale', 'creditAmount', 'creditPercent', 'creditDays', 'inflation', 'delayDays', 'advanceAmount'],
  calculate: ({ sale, creditAmount, creditPercent, creditDays, inflation, delayDays, advanceAmount}) => {
    const sale1 = parseFloat(sale || 0);
    const creditAmount1 = parseFloat(creditAmount || 0);
    const creditPercent1 = parseFloat(creditPercent || 0);
    const creditDays1 = parseFloat(creditDays || 0);
    const inflation1 = parseFloat(inflation || 0);
    const delayDays1 = parseFloat(delayDays || 0);
    const advanceAmount1 = parseFloat(advanceAmount || 0);
    
    const creditPercent1Day = creditPercent1 / 365;
    const percentSum = creditAmount1 * creditPercent1Day / 100 * creditDays1;
    
    const inflation1Day = inflation1 / 365;
    const val1 = sale1 - advanceAmount1;

    return (val1 * inflation1Day / 100 * delayDays1) + val1 + advanceAmount1 + percentSum;
  },
};
