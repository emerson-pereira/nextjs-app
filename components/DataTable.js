import Image from "next/image";
import Checkbox from "@/components/Checkbox";

function DeleteRowButton({ onClick }) {
  return (
    <button type="button" className="btn" onClick={onClick}>
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

export default function DataTable({
  headers,
  rows,
  selectable,
  deleteAction,
  className,
  onRowSelect,
  onRowSelectAll,
  onRowDelete
}) {
  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>
          {selectable && (
            <th scope="col">
              {/* TODO: Add auto select logic */}
              <Checkbox
                id="row-header-checkbox"
                onChange={(value) => onRowSelectAll(value)}
              />
            </th>
          )}
          {headers.map((header) => (
            <th
              className="text-secondary fw-light"
              scope="col"
              key={header}
            >
              {header}
            </th>
          ))}
          {deleteAction && <th scope="col" />}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {selectable && (
              <td key={`row-${rowIndex}-data-checkbox`}>
                <Checkbox
                  id={`row-${rowIndex}-checkbox`}
                  onChange={(value) => onRowSelect(rowIndex, value)}
                />
              </td>
            )}
            {row?.map((data, dataIndex) => (
              <td className="text-body" key={`row-${rowIndex}-data-${dataIndex}`}>
                {data}
              </td>
            ))}
            {deleteAction && (
              <td key={`row-${rowIndex}-data-delete`}>
                <DeleteRowButton onClick={() => onRowDelete(rowIndex)} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}