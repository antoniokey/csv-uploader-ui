import './FileDataTableHeader.scss';

import { tableColumns } from '../../../constants/file-data.constants';

export default function FileDataTableHeader() {
  return (
    <thead className="file-data-table-header">
      <tr className="file-data-table-header__row">
        {
          tableColumns.map((tableColumn: string, index: number) => (
            <th
              className="file-data-table-header__column"
              key={index}>{tableColumn}
            </th>
          ))
        }
      </tr>
    </thead>
  );
}
