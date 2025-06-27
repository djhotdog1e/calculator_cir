export const getRows = (values) => [
    { id: 'buy', label: 'Закуп', value: values.buy },
    { id: 'nds20', label: 'НДС 20%', value: 0,  strategies: 
        {
            'НДС 20%': 'ndsBuy20', 
            'УСН ДР 7% (НДС 20%)': 'ndsBuy20',
        }
    },
    { id: 'markup', label: 'Наценка', value: values.markup, strategies:
        {
            'Какая будет прибыль': 'markup',
            'Прямой расчет': 'markup'
        }
    },
    { id: 'sale', label: 'Продажа', value: values.sale, strategies:
        {
            'За сколько продавать': 'saleFields'
        } 
    },
    { id: 'saleNds', label: 'НДС с продаж', value: 0, strategies:
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
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'nds20ToPay',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'ndsSale',
            'СиР|За сколько продавать|НДС 20%': 'nds20ToPayZaSkolko',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'nds20ToPayZaSkolko',
            'СиР|Какая будет прибыль|УСН 6% НДС 0,5,7%': 'ndsToPay',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'ndsToPay',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 0,5,7%)': 'ndsToPay',
            'СиР|За сколько продавать|УСН 6% НДС 0,5,7%': 'ndsToPayZaSkolko',
            'СиР|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'ndsToPayZaSkolko',
            'СиР ПТЗ (УСН 6%)|За сколько продавать|УСН 6% (НДС 0,5,7%)': 'ndsToPayZaSkolko',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 0,5,7%)': 'ndsToPayZaSkolko',
        }
    },
    { id: 'profitTax', label: 'Налог на прибыль', strategy: '' },
    { id: 'totalTax', label: 'Всего налогов', strategy: '' },
    { id: 'profit', label: 'Прибыль', strategy: '' },
    { id: 'profitPercent', label: '% прибыли', strategy: '' },
    { id: 'totalCostWithLoss', label: 'Итого цена Договора с учетом потери стоимости', strategy: '' },
    { id: 'totalCostWithLossAndAdvancePercent', label: 'Итого цена Договора с учетом потери стоимости при авансировании, %', strategy: '' },
    { id: 'totalCostWithLossAndAdvanceAmount', label: 'Итого цена Договора с учетом потери стоимости при авансировании, сумма', strategy: '' },
    { id: 'contractPriceUSD', label: 'Цена Договора в USD', strategy: '' },
    { id: 'contractPriceEURO', label: 'Цена Договора в EURO', strategy: '' },
    { id: 'exchangeDiffUSD', label: 'Курсовая разница в USD', strategy: '' },
    { id: 'exchangeDiffEURO', label: 'Курсовая разница в EURO', strategy: '' },
    { id: 'totalContractUSD', label: 'Итог по договору в USD', strategy: '' },
    { id: 'totalContractEURO', label: 'Итог по договору в EURO', strategy: '' }
];