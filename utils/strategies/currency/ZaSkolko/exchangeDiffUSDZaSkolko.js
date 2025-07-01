export const exchangeDiffUSDZaSkolko = {
  key: 'exchangeDiffUSDZaSkolko',
  label: 'Курсовая разница в USD',
  dependsOn: ['usdInvoice', 'usdPayment', 'contractPriceUSDZaSkolko'],
  calculate: ({ usdInvoice, usdPayment, contractPriceUSDZaSkolko }) => {
    const cost = (parseFloat(contractPriceUSDZaSkolko) || 0);
    const curr = (parseFloat(usdInvoice) || 0);
    const currPay = (parseFloat(usdPayment) || 0);
    return cost * currPay - cost * curr;
  },
};