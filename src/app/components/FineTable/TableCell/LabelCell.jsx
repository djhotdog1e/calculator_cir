import React from "react";

export function LabelCell({ label, colSpan = 1 }) {
  return (
    <td 
      colSpan={colSpan} 
      className="border border-gray-300 px-4 py-2 bg-gray-100 font-medium"
    >
      {label}
    </td>
  );
}
