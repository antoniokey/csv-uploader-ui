import { FileData } from '../../../../interfaces/file.interfaces';

interface FileDataRowProps {
  data: FileData;
}

export default function FileDataRow({ data }: FileDataRowProps) {
  const {
    createdAt,
    updatedAt,
    fileId,
    id,
    ...fileData
  } = data;
  const values = Object.values(fileData);

  return (
    <tr className="file-data-table-body__row">
      {
        values.map((value: string | number, index: number) => (
          <td
            className="file-data-table-body__column"
            key={index}
          >
            {value}
          </td>
        ))
      }
    </tr>
  );
}
