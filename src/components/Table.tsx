import { TableItem } from "../type/data";

interface TableProps {
  postcode: string;
  tableData: TableItem[];
}
const Table: React.FC<TableProps> = ({ postcode, tableData }) => {
  return (
    <>
      {tableData && (
        <div className="sm:flex-auto my-4 flex space-x-2">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Postcode: {postcode}
          </h1>
          {tableData.length === 0 && (
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              This area has no crime date from March 2021
            </h1>
          )}
        </div>
      )}
      {tableData.length > 0 && (
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Street Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Outcome Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableData.map((item) => (
                    <tr
                      key={item.category}
                      className="divide-x divide-gray-200"
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {item.month}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {item.location.street.name}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        {item.outcome_status === null
                          ? "no outcome"
                          : item.outcome_status.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
