import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import axios, { AxiosError } from 'axios';

import { UploadedFile } from 'interfaces/file.interfaces';

import './FileUploader.scss';

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
          await axios.post('/files/upload', formData)
        ).data;
  
        setUploadedFile(uploadedFile);

        toast.success('File was successfully uploaded');
      } catch(err: unknown) {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message || 'Something went wrong, try again');
        } else {
          toast.error('Something went wrong, try again');
        }
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

        {file && <button type="submit">Upload file</button>}
      </form>
    </div> 
  );
}
