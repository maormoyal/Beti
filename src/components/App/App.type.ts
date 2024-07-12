export interface Book {
  id?: number;
  author: string;
  name: string;
  ownerId: string;
}

export interface AppContextProps {
  list: Book[];
  loadBooks: (path: string) => void;
  setToggleBooks: (toggle: boolean) => void;
  toggleBooks: boolean;
  privateBookCount: number;
}
