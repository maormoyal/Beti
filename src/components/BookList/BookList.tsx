import React from 'react';
import styles from './BookList.module.scss';
import BookCard from '../BookCard/BookCard';
import { BookListProps } from './BookList.type';

const BookList: React.FC<BookListProps> = ({ list }) => {
  return (
    <div className={styles.bookList}>
      {list.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
