import { FileData } from 'interfaces/file.interfaces';

import './FileDataTable.scss';

import FileDataTableHeader from './FileDataTableHeader/FileDataTableHeader';
import FileDataTableBody from './FIleDataTableBody/FileDataTableBody';

interface FileDataTableProps {
  fileData: FileData[];
}

export default function FileDataTable({ fileData }: FileDataTableProps) {
  return (
    <table className="file-data-table">
      <FileDataTableHeader />
      <FileDataTableBody fileData={fileData} />
    </table>
  );
}
