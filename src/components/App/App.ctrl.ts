import { Book } from './App.type';
import ApiGateway from '../../shared/ApiGateway';

class AppController {
  private static instance: AppController;
  private httpGateway: ApiGateway;

  private constructor() {
    this.httpGateway = new ApiGateway();
  }

  static getInstance(): AppController {
    if (!AppController.instance) {
      AppController.instance = new AppController();
    }
    return AppController.instance;
  }

  async getBooks(path: string): Promise<Book[]> {
    const booksDto = await this.httpGateway.get(path);
    return booksDto;
  }

  async addBook({ name, author, ownerId }: Book): Promise<boolean> {
    const bookAddDto = await this.httpGateway.post('/books', {
      name,
      author,
      ownerId,
    });
    return bookAddDto && bookAddDto.status === 'ok' ? true : false;
  }
}

export default AppController;
