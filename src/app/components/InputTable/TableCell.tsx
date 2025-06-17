import InputField from './InputField'

export default function TableCell({ cell, value, onChange }) {
  return (
    <div className="table-cell">
      <label>{cell.label}</label>
      <InputField
        type={cell.type}
        name={cell.name}
        value={value}
        onChange={onChange}
        {...cell.props}
      />
    </div>
  );
}