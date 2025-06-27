import React from "react";
import InputField from "./InputField";
import ResultCell from "./ResultCell";
import { SectionCell } from "./TableCell/SectionCell";
import { InputCell } from "./TableCell/InputCell";
import { LabelCell } from "./TableCell/LabelCell";
import { fineRows } from "./fineRows";

export default function FineTable({ values, results, onChange }) {
  return (
    <div className="overflow-x-auto max-w-300 mx-auto py-1">
      <table className="w-full rounded-lg shadow-md border border-gray-300">
        <tbody>
          {fineRows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cIdx) => {
                switch (cell.type) {
                  case "section":
                    return (
                      <SectionCell
                        key={cIdx}
                        label={cell.label}
                        colSpan={cell.colSpan}
                        bgColor={cell.bg || "bg-purple-200"}
                      />
                    );

                  case "label":
                    return (
                      <LabelCell
                        key={cIdx}
                        label={cell.label}
                        colSpan={cell.colSpan}
                      />
                    );

                  case "input":
                    return (
                      <InputCell key={cIdx} colSpan={cell.colSpan}>
                        <InputField
                          value={values[cell.field] || ""}
                          onChange={onChange}
                          name={cell.field}
                          className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </InputCell>
                    );

                case "input-date":
                return (
                    <InputCell key={cIdx} colSpan={cell.colSpan}>
                    <label className="block text-xs text-black mb-1">
                        {cell.label}
                    </label>
                    <InputField
                        value={values[cell.field] || ""}
                        onChange={onChange}
                        name={cell.field}
                        type="date"
                        className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </InputCell>
                );


                  case "result":
                    return (
                      <ResultCell
                        key={cIdx}
                        value={results[cell.strategy]}
                        colSpan={cell.colSpan}
                      />
                    );
                  case "empty":
                    return (<td key={cIdx} colSpan={cell.colSpan} className="border border-gray-300 px-4 py-2 bg-gray-100"></td>);

                  default:
                    return null;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}