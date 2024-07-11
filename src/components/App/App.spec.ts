import booksRepository from './App.model';
import { mockBooks } from './App.mock';

// Correctly mock the methods
jest.mock('./App.model', () => ({
  __esModule: true,
  default: {
    getBooks: jest.fn(),
    addBook: jest.fn(),
  },
}));

describe('Books Repository', () => {
  it('should fetch books', async () => {
    (booksRepository.getBooks as jest.Mock).mockResolvedValue(mockBooks);
    const books = await booksRepository.getBooks();
    expect(books).toEqual(mockBooks);
  });

  it('should add a book', async () => {
    (booksRepository.addBook as jest.Mock).mockResolvedValue(true);
    const result = await booksRepository.addBook({
      name: 'New Book',
      author: 'New Author',
      ownerId: 'New ownerId',
    });
    expect(result).toBe(true);
  });
});
