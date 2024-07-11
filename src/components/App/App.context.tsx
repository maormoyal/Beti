// src/components/App/App.context.ts
import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
} from 'react';
import { Book, AppContextProps } from './App.type';
import booksRepository from './App.model';

// Define the props for the AppProvider component
interface AppProviderProps {
  children: ReactNode;
}

// Create the AppContext with a default value of undefined
const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [list, setList] = useState<Book[]>([]);

  const loadBooks = useCallback(async () => {
    const books = await booksRepository.getBooks();
    setList(books);
  }, []);

  return (
    <AppContext.Provider value={{ list, loadBooks }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
