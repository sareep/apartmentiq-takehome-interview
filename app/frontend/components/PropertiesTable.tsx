import type { Property } from "./App";

interface Props {
  properties: Property[];
}

const HEADERS = ["Property", "Address", "Year Built", "Website"];

export default function PropertiesTable(props: Props) {
  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          {HEADERS.map((h) => (
            <th scope="col" className="px-6 py-3">
              {h}
            </th>
          ))}
        </thead>
        <tbody>
          {props.properties.map((p) => (
            <tr key={p.id} className="bg-white border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {p.name}
              </th>
              <td className="px-6 py-4">{p.address}</td>
              <td className="px-6 py-4">{p.year_built}</td>
              <td className="px-6 py-4">
                <a href={p.website_url} className="text-blue-500">{p.website_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
