// src/components/App/App.model.ts
import AppController from './App.ctrl';
import { Book } from './App.type';

class BooksRepository {
  private static instance: BooksRepository;
  private controller: AppController;

  private constructor() {
    this.controller = AppController.getInstance();
  }

  static getInstance(): BooksRepository {
    if (!BooksRepository.instance) {
      BooksRepository.instance = new BooksRepository();
    }
    return BooksRepository.instance;
  }

  async getBooks(): Promise<Book[]> {
    return this.controller.getBooks();
  }

  async addBook({ name, author, ownerId }: Book): Promise<boolean> {
    return this.controller.addBook({ name, author, ownerId });
  }
}

const booksRepository = BooksRepository.getInstance();
export default booksRepository;
