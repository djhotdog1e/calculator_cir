import TableCell from './TableCell';
import rowStyles from './TableRow.module.css';
import shared from '@/app/styles/shared.module.css';

export default function TableRow({ row, values, onChange }) {
  return (
    <div className={rowStyles.row}>
      {row.map((cell, idx) => (
        <TableCell
          key={idx}
          cell={cell}
          value={values[cell.name]}
          onChange={onChange}
        />
      ))}
    </div>
  );
}