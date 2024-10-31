export default function DataTable({ headers, rows, className }) {
  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>
          {headers.map((header) => (
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
        {rows?.map((row) => (
          <tr key={row.toString()}>
            {row?.map((data) => (
              <td className="text-body" key={data}>
                {data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}