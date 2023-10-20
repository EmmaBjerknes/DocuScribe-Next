export interface Document{
    id: number,
    title: string,
    content: string,
    bgColor: string,
    textColor: string,
    date: string,
    isDeleted: string,
}

export interface createDocument {
    title: string;
    content: string;
    bgColor: string;
    textColor: string;
    isDeleted: string;
  }