import { useState } from 'react';

import './App.scss';

import FileDataTable from './components/FileDataTable/FileDataTable';
import FileUploader from './components/FileUploader/FileUploader';
import { UploadedFile } from './interfaces/file.interfaces';

function App() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile>();

  return (
    <div className="app">
      <div className="app__header">
        CSV Uploader
      </div>

      <FileUploader setUploadedFile={setUploadedFile} />
      
      {
        uploadedFile && (
          <FileDataTable fileData={uploadedFile?.fileData || []} />
        )
      }
    </div>
  );
}

export default App;
