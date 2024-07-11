// src/components/App/App.tsx
import React, { useEffect } from 'react';
import { useAppContext } from './App.context';
import './App.module.scss';

import BookList from '../BookList/BookList';

const App: React.FC = () => {
  const { list, loadBooks } = useAppContext();

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <div>
      <h1>Beti - Books Fast-Test Homework</h1>
      <h3>by: Maor Moyal</h3>
      <BookList list={list} />
      <p>Click on the button to add book</p>
      <button onClick={() => alert('TBD')}>Add</button>
    </div>
  );
};

export default App;
