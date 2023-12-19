import { FileData } from 'interfaces/file.interfaces';

export const tableDataKeys: string[] = [
  'dataId',
  'userName',
  'firstName',
  'lastName',
  'city',
  'address',
  'zip',
  'creditCardCode',
  'cvv',
  'name',
  'date',
];

interface FileDataRowProps {
  data: FileData;
}

export default function FileDataRow({ data }: FileDataRowProps) {
  return (
    <tr className="file-data-table-body__row">
      {
        tableDataKeys.map(tableDataKey => (
          <td
            className="file-data-table-body__column"
            key={tableDataKey}
          >
            {data[tableDataKey as keyof typeof data]}
          </td>
        ))
      }
    </tr>
  );
}
