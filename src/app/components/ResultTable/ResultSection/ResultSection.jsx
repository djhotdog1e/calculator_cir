import React from 'react';

export default function ResultsSection({ results }) {
  const resultItems = [
    {
      key: 'total',
      label: 'Итого',
      value: results.total,
    },
    {
      key: 'totalUsdInvoice',
      label: 'Итого в USD (курс на дату выставления счета)',
      value: results.totalUsdInvoice,
    },
    {
      key: 'totalEuroInvoice',
      label: 'Итого в EURO (курс на дату выставления счета)',
      value: results.totalEuroInvoice,
    },
    {
      key: 'totalUsdPayment',
      label: 'Итого в USD (курс на дату платежа)',
      value: results.totalUsdPayment,
    },
    {
      key: 'totalEuroPayment',
      label: 'Итого в EURO (курс на дату платежа)',
      value: results.totalEuroPayment,
    }
  ];

  return (
    <div className="bg-green-100 p-6">
      {results.total === 0 && (
        <div className="mt-4 p-4 text-center">
          <p className="text-black">
            Заполните поля и нажмите "Рассчитать" для получения результатов
          </p>
        </div>
      )}
      <h2 className="text-xl font-medium mb-4 text-black">Результаты расчета</h2>
      <div className="space-y-1">
        {resultItems.map((item) => (
          <div
            key={item.key}
            className={`p-4 ${item.className}`}
          >
            <div className="flex items-center">
              <span className="text-md font-medium text-black">
                {item.label}
              </span>
              <span className="font-bold text-black ml-20">
                {item.value} {item.currency}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}