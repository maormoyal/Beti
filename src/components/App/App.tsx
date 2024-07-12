// src/components/App/App.tsx
import React, { useEffect } from 'react';
import { useAppContext } from './App.context';
import './App.module.scss';

import BookList from '../BookList/BooksList';
import AddBook from '../AddBook/AddBook';

const App: React.FC = () => {
  const { list, loadBooks } = useAppContext();

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <>
      <h1>Beti - Books Fast-Test Homework</h1>
      <h3>by: Maor Moyal</h3>
      <BookList list={list} />
      <AddBook />
    </>
  );
};

export default App;
