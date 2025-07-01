import React from "react";

export function SectionCell({ label, colSpan = 1, bgColor = "bg-purple-200" }) {
  return (
    <td 
      colSpan={colSpan} 
      className={`border border-gray-300 px-4 py-2 ${bgColor} font-medium text-center`}
    >
      {label}
    </td>
  );
}
