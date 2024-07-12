import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import booksRepository from './App.model';
import { mockBooks } from './App.mock';
import { AppProvider } from './App.context';
import App from './App';

jest.mock('./App.model', () => ({
  __esModule: true,
  default: {
    getBooks: jest.fn(),
    addBook: jest.fn(),
  },
}));

beforeAll(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

describe('App Component', () => {
  beforeEach(() => {
    (booksRepository.getBooks as jest.Mock).mockResolvedValue(mockBooks);
  });

  it('should fetch and display books', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    expect(await screen.findAllByRole('heading', { level: 2 })).toHaveLength(
      mockBooks.length
    );
  });

  it('should toggle between all books and private books', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    // Initial load should be all books
    expect(await screen.findAllByRole('heading', { level: 2 })).toHaveLength(
      mockBooks.length
    );

    // Mock response for private books
    const mockPrivateBooks = mockBooks.slice(0, 1);
    (booksRepository.getBooks as jest.Mock).mockResolvedValueOnce(
      mockPrivateBooks
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Show Private books'));
    });

    // Wait for private books to load
    expect(await screen.findAllByRole('heading', { level: 2 })).toHaveLength(
      mockPrivateBooks.length
    );

    // Check the header for private book count
    expect(screen.getByText('Your books: 1')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText('Show All books'));
    });

    // Wait for all books to load
    expect(await screen.findAllByRole('heading', { level: 2 })).toHaveLength(
      mockBooks.length
    );
  });

  it('should add a book when "Add Book" button is clicked', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    (booksRepository.addBook as jest.Mock).mockResolvedValue(true);

    fireEvent.click(screen.getByText('Add Book'));
  });
});
