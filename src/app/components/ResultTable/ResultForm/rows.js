export const getRows = (values) => [
    { id: 'buy', label: 'Закуп', value: values.buy },
    { id: 'nds20', label: 'НДС 20%',  strategies: 
        {
            'СиР|Какая будет прибыль|НДС 20%': 'ndsBuy20', 
            'СиР|За сколько продавать|НДС 20%': 'ndsBuy20',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'ndsBuy20',
            'ИП ДР 7%|За сколько продавать|УСН ДР 7% (НДС 20%)': 'ndsBuy20'
        }
    },
    { id: 'markup', label: 'Наценка', strategies:
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
    { id: 'saleNds', label: 'НДС с продаж', strategies:
        {
            'СиР|Какая будет прибыль|НДС 20%': 'ndsSale',
            'СиР|Какая будет прибыль|НДС 20% Закуп НДС 0%': 'ndsSale',
            'СиР ПТЗ (УСН 6%)|Прямой расчет|УСН 6% (НДС 0,5,7%)': 'ndsSale',
            'ИП ДР 7%|Прямой расчет|УСН ДР 7% (НДС 20%)': 'ndsSale'
        }
    },
    { id: 'profitTaxBase', label: 'База налога на прибыль', strategy: '' },
    { id: 'profitRate', label: 'Ставка, прибыль %', strategy: '' },
    { id: 'ndsToPay', label: 'НДС к уплате', strategy: '' },
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