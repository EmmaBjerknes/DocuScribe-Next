export interface Document {
  id: number;
  title: string;
  content: string;
  date: string;
  isDeleted: string;
}

export interface createDocument {
  title: string;
  content: string;
  isDeleted: string;
}
