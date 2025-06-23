import { strategies } from "../../../../../utils/strategies/calc_strategies";


export default function ResultsSection({ results }) {
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2 text-black">Результаты</h2>
      <ul>
        {strategies.map(({ key, label }) => (
          <li key={key} className="text-black">
            {label}: <strong>{results[key]?.toFixed(2) || '—'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
