export const getRows = (values) => [
    { id: 'buy', label: 'Закуп', value: values.buy },
    { id: 'nds20', label: 'НДС 20%', value: 0,  strategies: 
        {
            'НДС 20%': 'ndsBuy20', 
            'УСН ДР 7% (НДС 20%)': 'ndsBuy20',
        }
    },
    { id: 'markupVal', label: 'Наценка', value: values.markup, strategies:
        {
            'Какая будет прибыль': 'markupVal',
            'Прямой расчет': 'markupVal'
        }
    },
    { id: 'sale', label: 'Продажа', value: values.sale, strategies:
        {
            'За сколько продавать': 'saleFields'
        } 
    },
    { id: 'ndsSale', label: 'НДС с продаж', value: 0, strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'ndsSale',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'ndsSale',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'ndsSale',
            'СиР|За сколько продавать|НДС 20%': 'ndsSaleZaSkolko',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'ndsSaleZaSkolko',

        }
    },
    { id: 'profitTaxBase', label: 'База прибыль', value: 0, strategies: 
        {
            'СиР|Какая будет прибыль|НДС 20%': 'profitTaxBase',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'profitTaxBaseNdsBuy0',
            'СиР|За сколько продавать|НДС 20%': 'profitTaxBaseZaSkolko',
            'СиР|Какая будет прибыль|НДС 0%': 'profit'
        } 
    },
    { id: 'profitRate', label: 'Ставка, прибыль %', strategies:
        {
            'НДС 20%': 'profitRate25',
            'НДС 20% Закуп НДС 0%': 'profitRate25',
            'НДС 0%': 'profitRate25',
            'УСН ДР 7% (НДС 20%)': 'profitRate7',
            'УСН ДР 7% (НДС 0,5,7%)': 'profitRate7',
            'УСН 6% НДС 0,5,7%': 'profitRate6',
            'УСН 6% (НДС 0,5,7%)': 'profitRate6',
        }
    },
    { id: 'ndsToPay', label: 'НДС к уплате', value: 0, strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'nds20ToPay',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'ndsSale',
            'СиР|Какая будет прибыль|УСН 6% НДС 0,5,7%': 'ndsToPay',
            'СиР|За сколько продавать|НДС 20%': 'nds20ToPayZaSkolko',
            'СиР|За сколько продавать|УСН 6% НДС 0,5,7%': 'ndsToPayZaSkolko',
            'СиР|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'ndsToPayZaSkolko',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'ndsToPay',
            'СиР ПТЗ (УСН 6%)|За сколько продавать|УСН 6% (НДС 0,5,7%)': 'ndsToPayZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 0,5,7%)': 'ndsToPay',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'ndsToPayZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'nds20ToPay',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'nds20ToPayZaSkolko',
        }
    },
    { id: 'taxProfit', label: 'Налог на прибыль', strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'taxProfit25Nds20',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'taxProfit25Nds20Buy0',
            'СиР|Какая будет прибыль|УСН 6% НДС 0,5,7%': 'taxProfit6Usn6',
            'СиР|Какая будет прибыль|НДС 0%': 'taxProfit25Nds0',
            'СиР|За сколько продавать|НДС 20%': 'taxProfit25Nds20ZaSkolko',
            'СиР|За сколько продавать|УСН 6% НДС 0,5,7%': 'taxProfit6Usn6ZaSkolko',
            'СиР|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'taxProfit7Usn7ZaSkolko',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'taxProfit6Usn6',
            'СиР ПТЗ (УСН 6%)|За сколько продавать|УСН 6% (НДС 0,5,7%)': 'taxProfit6Usn6ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 0,5,7%)': 'taxProfit7Usn7',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'taxProfit7Usn7ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'taxProfit7Usn7Nds20',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'taxProfit7Usn7Nds20ZaSkolko',
        }
     },
    { id: 'totalTax', label: 'Всего налогов', strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'totalTaxNds20',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'totalTaxNds20Buy0',
            'СиР|Какая будет прибыль|УСН 6% НДС 0,5,7%': 'totalTaxUsn6',
            'СиР|Какая будет прибыль|НДС 0%': 'totalTaxNds0',
            'СиР|За сколько продавать|НДС 20%': 'totalTaxNds20ZaSkolko',
            'СиР|За сколько продавать|УСН 6% НДС 0,5,7%': 'totalTaxUsn6ZaSkolko',
            'СиР|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'totalTaxUsn7ZaSkolko',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'totalTaxUsn6',
            'СиР ПТЗ (УСН 6%)|За сколько продавать|УСН 6% (НДС 0,5,7%)': 'totalTaxUsn6ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 0,5,7%)': 'totalTaxUsn7',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'totalTaxUsn7ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'totalTaxUsn7Nds20',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'totalTaxUsn7Nds20ZaSkolko',
        }
    },
    { id: 'profit', label: 'Прибыль', strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'profitNds20',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'profitNds20Buy0',
            'СиР|Какая будет прибыль|УСН 6% НДС 0,5,7%': 'profitUsn6',
            'СиР|Какая будет прибыль|НДС 0%': 'profitNds0',
            'СиР|За сколько продавать|НДС 20%': 'profitNds20ZaSkolko',
            'СиР|За сколько продавать|УСН 6% НДС 0,5,7%': 'profitUsn6ZaSkolko',
            'СиР|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'profitUsn7ZaSkolko',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'profitUsn6',
            'СиР ПТЗ (УСН 6%)|За сколько продавать|УСН 6% (НДС 0,5,7%)': 'profitUsn6ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 0,5,7%)': 'profitUsn7',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'profitUsn7ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'profitUsn7Nds20',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'profitUsn7Nds20ZaSkolko',
        }
    },
    { id: 'percentProfit', label: '% прибыли', strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'percentProfitNds20',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'percentProfitNds20Buy0',
            'СиР|Какая будет прибыль|УСН 6% НДС 0,5,7%': 'percentProfitUsn6',
            'СиР|Какая будет прибыль|НДС 0%': 'percentProfitNds0',
            'СиР|За сколько продавать|НДС 20%': 'percentProfitNds20ZaSkolko',
            'СиР|За сколько продавать|УСН 6% НДС 0,5,7%': 'percentProfitUsn6ZaSkolko',
            'СиР|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'percentProfitUsn7ZaSkolko',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'percentProfitUsn6',
            'СиР ПТЗ (УСН 6%)|За сколько продавать|УСН 6% (НДС 0,5,7%)': 'percentProfitUsn6ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 0,5,7%)': 'percentProfitUsn7',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'percentProfitUsn7ZaSkolko',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'percentProfitUsn7Nds20',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'percentProfitUsn7Nds20ZaSkolko',
        }
    },
    { id: 'totalCost', label: 'Итого цена Договора с учетом потери стоимости', strategies:
        {
            'Какая будет прибыль': 'totalCost',
            'Прямой расчет': 'totalCost',
            'За сколько продавать': 'totalCostZaSkolko'
        }
    },
    { id: 'totalCostAdvancePercent', label: 'Итого цена Договора с учетом потери стоимости при авансировании, %', strategies:
        {
            'Какая будет прибыль': 'totalCostAdvancePercent',
            'Прямой расчет': 'totalCostAdvancePercent',
            'За сколько продавать': 'totalCostAdvancePercentZaSkolko'
        }
    },
    { id: 'totalCostAdvanceAmount', label: 'Итого цена Договора с учетом потери стоимости при авансировании, сумма', strategies:
        {
            'Какая будет прибыль': 'totalCostAdvanceAmount',
            'Прямой расчет': 'totalCostAdvanceAmount',
            'За сколько продавать': 'totalCostAdvanceAmountZaSkolko'
        }
    },
    { id: 'contractPriceUSD', label: 'Цена Договора в USD', strategies:
        {
            'Какая будет прибыль': 'contractPriceUSD',
            'Прямой расчет': 'contractPriceUSD',
            'За сколько продавать': 'contractPriceUSDZaSkolko'
        }
    },
    { id: 'contractPriceEURO', label: 'Цена Договора в EURO', strategies:
        {
            'Какая будет прибыль': 'contractPriceEURO',
            'Прямой расчет': 'contractPriceEURO',
            'За сколько продавать': 'contractPriceEUROZaSkolko'
        }
    },
    { id: 'exchangeDiffUSD', label: 'Курсовая разница в USD', strategies:
        {
            'Какая будет прибыль': 'exchangeDiffUSD',
            'Прямой расчет': 'exchangeDiffUSD',
            'За сколько продавать': 'exchangeDiffUSDZaSkolko'
        }
    },
    { id: 'exchangeDiffEURO', label: 'Курсовая разница в EURO', strategies:
        {
            'Какая будет прибыль': 'exchangeDiffEURO',
            'Прямой расчет': 'exchangeDiffEURO',
            'За сколько продавать': 'exchangeDiffEUROZaSkolko'
        }
    },
    { id: 'totalContractUSD', label: 'Итог по договору в USD', strategies:
        {
            'Какая будет прибыль': 'totalContractUSD',
            'Прямой расчет': 'totalContractUSD',
            'За сколько продавать': 'totalContractUSDZaSkolko'
        }
    },
    { id: 'totalContractEURO', label: 'Итог по договору в EURO', strategies:
        {
            'Какая будет прибыль': 'totalContractEURO',
            'Прямой расчет': 'totalContractEURO',
            'За сколько продавать': 'totalContractEUROZaSkolko'
        }
    }
];