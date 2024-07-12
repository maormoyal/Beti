import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BooksList from './BooksList';
import { Book } from '../App/App.type';

const mockBooks: Book[] = [
  { id: 1, name: 'Book One', author: 'Author One', ownerId: 'Owner One' },
  { id: 2, name: 'Book Two', author: 'Author Two', ownerId: 'Owner Two' },
];

describe('BookList', () => {
  it('renders a list of books', () => {
    render(<BooksList list={mockBooks} />);
    const bookElements = screen.getAllByRole('heading', { level: 2 });
    expect(bookElements).toHaveLength(mockBooks.length);
    expect(bookElements[0]).toHaveTextContent('Book One');
    expect(bookElements[1]).toHaveTextContent('Book Two');
  });

  it('renders no books when the list is empty', () => {
    render(<BooksList list={[]} />);
    const bookElements = screen.queryAllByRole('heading', { level: 2 });
    expect(bookElements).toHaveLength(0);
  });
});
