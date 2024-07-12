import ApiGateway from './ApiGateway';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('ApiGateway', () => {
  let apiGateway: ApiGateway;

  beforeEach(() => {
    apiGateway = new ApiGateway();
    fetchMock.resetMocks();
  });

  it('should make a GET request and return the response data', async () => {
    const mockData = { data: 'test' };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const response = await apiGateway.get('/test-path');
    expect(response).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://tdd.demo.reaktivate.com/v1/books/maor/test-path'
    );
  });

  it('should make a POST request and return the response data', async () => {
    const mockData = { data: 'test' };
    const payload = { key: 'value' };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const response = await apiGateway.post('/test-path', payload);
    expect(response).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://tdd.demo.reaktivate.com/v1/books/maor/test-path',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
  });

  it('should handle errors for GET requests', async () => {
    fetchMock.mockRejectOnce(new Error('Something went wrong'));

    try {
      await apiGateway.get('/test-error-path');
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual('Something went wrong');
      }
    }
    expect(fetchMock).toHaveBeenCalledWith(
      'https://tdd.demo.reaktivate.com/v1/books/maor/test-error-path'
    );
  });

  it('should handle errors for POST requests', async () => {
    const payload = { key: 'value' };
    fetchMock.mockRejectOnce(new Error('Something went wrong'));

    try {
      await apiGateway.post('/test-error-path', payload);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual('Something went wrong');
      }
    }
    expect(fetchMock).toHaveBeenCalledWith(
      'https://tdd.demo.reaktivate.com/v1/books/maor/test-error-path',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
  });
});
