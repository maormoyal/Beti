import React from 'react';
import styles from './BooksList.module.scss';
import BookCard from '../BookCard/BookCard';
import { BooksListProps } from './BooksList.type';

const BooksList: React.FC<BooksListProps> = ({ list }) => {
  return (
    <div className={styles.bookList}>
      {list.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
