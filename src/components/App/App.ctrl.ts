// src/components/App/App.controller.ts
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

  async getBooks(): Promise<Book[]> {
    const booksDto = await this.httpGateway.get('/');
    return booksDto;
  }

  async addBook({ id, name, author, ownerId }: Book): Promise<boolean> {
    debugger;
    const bookAddDto = await this.httpGateway.post('/', {
      id,
      name,
      author,
      ownerId,
    });
    return bookAddDto && bookAddDto.status === 'ok' ? true : false;
  }
}

export default AppController;
