import React, { useEffect } from 'react';
import { useAppContext } from './App.context';

import BookList from '../BookList/BooksList';
import Header from '../Header/Header';

const App: React.FC = () => {
  const { list, loadBooks, setToggleBooks, toggleBooks } = useAppContext();

  useEffect(() => {
    loadBooks('/');
  }, [loadBooks]);

  const handleSwitch = () => {
    loadBooks(toggleBooks ? '/' : '/private');
    setToggleBooks(!toggleBooks);
  };

  return (
    <>
      <Header />
      <button onClick={handleSwitch}>
        {toggleBooks ? 'Show All books' : 'Show Private books'}
      </button>
      <BookList list={list} />
      <button onClick={() => alert('TBD')}>Add Book</button>
    </>
  );
};

export default App;
