import InputField from './InputField'
import cellStyles from './TableCell.module.css';
import shared from '@/app/styles/shared.module.css';

export default function TableCell({ cell, value, onChange }) {
  return (
    <div className={cellStyles.cell}>
      <label className={shared.label}>{cell.label}</label>
      <InputField
        inputType={cell.inputType}
        name={cell.name}
        value={value}
        onChange={onChange}
        options={cell.options}
        {...cell.props}
      />
    </div>
  );
}