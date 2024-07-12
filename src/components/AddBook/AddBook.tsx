import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Book } from '../App/App.type';
import { useAppContext } from '../App/App.context';
import styles from './AddBook.module.scss';

const AddBook: React.FC = () => {
  const { addBook } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookOwner, setBookOwner] = useState('');

  const handleAddBook = () => {
    const newBook: Book = {
      id: Math.random() * 10000,
      name: bookName,
      author: bookAuthor,
      ownerId: bookOwner,
    };
    console.log(newBook);
    // addBook(newBook);
  };

  return (
    <>
      <p>Click on the button to add new book</p>
      <button onClick={() => setShowModal(true)}>Add</button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form className={styles.addBook}>
          <h2>Add Book</h2>
          <input
            type='text'
            placeholder='Book Name'
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Author'
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
          <input
            type='text'
            placeholder='Owner'
            value={bookOwner}
            onChange={(e) => setBookOwner(e.target.value)}
          />
          <button onClick={handleAddBook}>Add Book</button>
        </form>
      </Modal>
    </>
  );
};

export default AddBook;
