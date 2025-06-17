import TableCell from './TableCell';

export default function TableRow({ row, values, onChange }) {
  return (
    <div className="table-row">
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