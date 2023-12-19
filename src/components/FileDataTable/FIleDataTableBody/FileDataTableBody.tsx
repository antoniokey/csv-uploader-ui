import { FileData } from 'interfaces/file.interfaces';

import FileDataRow from './FileDataRow/FileDataRow';

interface FileDataTableBodyProps {
  fileData: FileData[];
}

export default function FileDataTableBody({ fileData }: FileDataTableBodyProps) {
  return (
    <tbody className="file-data-table-body">
      {
        fileData.map(fileDataItem => (
          <FileDataRow
            key={fileDataItem.id}
            data={fileDataItem}
          />
        ))
      }
    </tbody>
  );
}
