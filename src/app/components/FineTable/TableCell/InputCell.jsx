import React from "react";

export function InputCell({ children, colSpan = 1 }) {
  return (
    <td 
      colSpan={colSpan} 
      className="border border-gray-300 px-4 py-2 bg-white"
    >
      {children}
    </td>
  );
}
