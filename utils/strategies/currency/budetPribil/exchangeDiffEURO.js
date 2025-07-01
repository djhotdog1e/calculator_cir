export const exchangeDiffEURO = {
  key: 'exchangeDiffEURO',
  label: 'Курсовая разница в EURO',
  dependsOn: ['euroInvoice', 'euroPayment', 'contractPriceEURO'],
  calculate: ({ euroInvoice, euroPayment, contractPriceEURO }) => {
    const cost = (parseFloat(contractPriceEURO) || 0);
    const curr = (parseFloat(euroInvoice) || 0);
    const currPay = (parseFloat(euroPayment) || 0);
    return cost * currPay - cost * curr;
  },
};