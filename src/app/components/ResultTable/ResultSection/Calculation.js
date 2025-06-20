export const calculateResults = (values) => {
  const fieldsToSum = ['buy', 'creditAmount', 'sale', 'creditPercent', 'delayDays', 
    'creditDays', 'markup', 'advancePercent', 'inflation', 'advanceAmount'];
  
  const ndsPercent = parseInt(values.nds || 0);
  
  const total = fieldsToSum.reduce((sum, field) => {
    return sum + (Number(values[field]) || 0) * (1 + ndsPercent / 100);
  }, 0);

  const usdInvoiceRate = Number(values.usdInvoice) || 1;
  const usdPaymentRate = Number(values.usdPayment) || 1;
  const euroInvoiceRate = Number(values.euroInvoice) || 1;
  const euroPaymentRate = Number(values.euroPayment) || 1;

  return {
    total: total,
    totalUsdInvoice: total / usdInvoiceRate,
    totalEuroInvoice: total / euroInvoiceRate,
    totalUsdPayment: total / usdPaymentRate,
    totalEuroPayment: total / euroPaymentRate,
  };
};