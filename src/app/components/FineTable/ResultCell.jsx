import React from "react";

export default function ResultCell({ value, className = "", colSpan = 1 }) {
  return (
    <td 
      colSpan={colSpan} 
      className={`border border-gray-300 px-4 py-2 bg-gray-200 text-right font-mono ${className}`}
    >
      {value !== undefined && value !== null && value !== "" && !isNaN(value) ? value : ""}
    </td>
  );
}