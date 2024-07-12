import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '../App/App.context';
import Header from './Header';
import { mockBooks } from '../App/App.mock';
import { AppContextProps } from '../App/App.type';

const mockValue: AppContextProps = {
  list: mockBooks,
  loadBooks: jest.fn(),
  toggleBooks: true,
  setToggleBooks: jest.fn(),
  privateBookCount: 1,
};

describe('Header Component', () => {
  it('should render the header with the correct title', () => {
    render(
      <AppContext.Provider value={mockValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Books Fast-Test Homework'
    );
  });

  it('should show private book count in the header when toggleBooks is true', () => {
    render(
      <AppContext.Provider value={mockValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(screen.getByText('Your books: 1')).toBeInTheDocument();
  });
});
