import './FileDataTableHeader.scss';

const tableHeaderColumns: string[] = [
  'Id',
  'UserName',
  'FirstName',
  'LastName',
  'City',
  'Address',
  'Zip',
  'Credit Card Code',
  'CVV',
  'Name',
  'Date',
];

export default function FileDataTableHeader() {
  return (
    <thead className="file-data-table-header">
      <tr className="file-data-table-header__row">
        {
          tableHeaderColumns.map(tableHeaderColumn => (
            <th
              className="file-data-table-header__column"
              key={tableHeaderColumn}
            >
              {tableHeaderColumn}
            </th>
          ))
        }
      </tr>
    </thead>
  );
}
