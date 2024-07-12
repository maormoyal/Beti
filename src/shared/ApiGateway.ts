export default class ApiGateway {
  private API_BASE = 'https://tdd.demo.reaktivate.com/v1/books/maor';

  get = async (path: string) => {
    const response = await fetch(`${this.API_BASE}${path}`);
    const dto = await response.json();
    return dto;
  };

  post = async (path: string, payload: any) => {
    const response = await fetch(`${this.API_BASE}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const dto = await response.json();
    return dto;
  };
}
