import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';

import axios from 'axios';

import './FileUploader.scss';

import { UploadedFile } from '../../interfaces/file.interfaces';

interface FileUploaderProps {
  setUploadedFile: Dispatch<SetStateAction<UploadedFile | undefined>>;
}

export default function FileUploader({ setUploadedFile }: FileUploaderProps) {
  const [file, setFile] = useState<File>();

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();

      formData.append('file', file);

      try {
        const uploadedFile: UploadedFile = (
          await axios.post(`${process.env.REACT_APP_API_URL}/files/upload`, formData)
        ).data;
  
        setUploadedFile(uploadedFile);
      } catch(err: any) {
        console.log(err.response.data.message)
      }
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFile(
      e.target.files
        ? e.target.files[0]
        : undefined
    );

  return (
    <div className="file-uploader">
      <form
        className="file-uploader__form"
        onSubmit={onFormSubmit}
      >
        <input
          type="file"
          accept='.csv'
          placeholder="Select .csv file"
          onChange={onInputChange}
        />

        {
          file && (
            <button type="submit">
              Upload file
            </button>
          )
        }
      </form>
    </div> 
  );
}
