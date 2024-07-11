// src/components/BookCard/BookCard.tsx
import React from 'react';
import styles from './BookCard.module.scss';
import { BookCardProps } from './BookCard.type';

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className={styles.bookCard}>
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <span>Owner: {book.ownerId}</span>
    </div>
  );
};

export default BookCard;
