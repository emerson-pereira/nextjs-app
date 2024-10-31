import Image from "next/image";
import { useMemo } from "react";

function DeleteRowButton() {
  return (
    <button type="button" className="btn">
      <Image
        className="me-2"
        src="/trash-bin.svg"
        width={30}
        height={30}
        alt="Delete"
      />
    </button>
  )
}

export default function DataTable({ headers, rows, deleteAction, className }) {
  const headersComputed = useMemo(() => {
    if (!deleteAction) return headers;
    return [...headers, ''];
  }, [headers, deleteAction]);

  const rowsComputed = useMemo(() => {
    if (!deleteAction) return rows;
    return rows.map((row) => [...row, { deleteAction: true }]);
  }, [rows, deleteAction]);

  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>
          {headersComputed.map((header) => (
            <th
              className="text-secondary fw-light"
              scope="col"
              key={header}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsComputed?.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {row?.map((data) => {
              return (
                <td className="text-body" key={data}>
                  {data.deleteAction ? <DeleteRowButton /> : data}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}