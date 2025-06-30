export const exchangeDiffEUROZaSkolko = {
  key: 'exchangeDiffEUROZaSkolko',
  label: 'Курсовая разница в EURO',
  dependsOn: ['euroInvoice', 'euroPayment', 'contractPriceEUROZaSkolko'],
  calculate: ({ euroInvoice, euroPayment, contractPriceEUROZaSkolko }) => {
    const cost = (parseFloat(contractPriceEUROZaSkolko) || 0);
    const curr = (parseFloat(euroInvoice) || 0);
    const currPay = (parseFloat(euroPayment) || 0);
    return cost * currPay - cost * curr;
  },
};