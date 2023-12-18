export interface UploadedFile {
  id: number;
  name: string;
  fileData: FileData[];
  createdAt: string;
  updatedAt: string;
}

export interface FileData {
  id: number;
  fileId: number;
  dataId: number,
  userName: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  zip: number;
  creditCardCode: number;
  cvv: number;
  name: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}
