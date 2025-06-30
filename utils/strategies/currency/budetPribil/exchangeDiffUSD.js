export const exchangeDiffUSD = {
  key: 'exchangeDiffUSD',
  label: 'Курсовая разница в USD',
  dependsOn: ['usdInvoice', 'usdPayment', 'contractPriceUSD'],
  calculate: ({ usdInvoice, usdPayment, contractPriceUSD }) => {
    const cost = (parseFloat(contractPriceUSD) || 0);
    const curr = (parseFloat(usdInvoice) || 0);
    const currPay = (parseFloat(usdPayment) || 0);
    return cost * currPay - cost * curr;
  },
};