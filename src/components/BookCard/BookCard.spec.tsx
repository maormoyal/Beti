import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookCard from './BookCard';
import { Book } from '../App/App.type';

const mockBook: Book = {
  id: 1,
  name: 'Book One',
  author: 'Author One',
  ownerId: 'Owner One',
};

describe('BookCard', () => {
  it('renders book details', () => {
    render(<BookCard book={mockBook} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Book One'
    );
    expect(screen.getByText('Author: Author One')).toBeInTheDocument();
    expect(screen.getByText('Owner: Owner One')).toBeInTheDocument();
  });
});
