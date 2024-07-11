// src/components/App/App.type.ts
export interface Book {
  id?: number;
  author: string;
  name: string;
  ownerId: string;
}

export interface AppContextProps {
  list: Book[];
  loadBooks: () => void;
}
