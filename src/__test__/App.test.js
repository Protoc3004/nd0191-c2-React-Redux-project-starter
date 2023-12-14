import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../components/App';

jest.mock('../services/actions/shared', () => ({
  handleInitialData: jest.fn(),
}));

const mockStore = configureStore([]);

describe('App Component', () => {
  it('renders Login component when authedUser is null', () => {
    const store = mockStore({ authedUser: null });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders Login component when authedUser is undefined', () => {
    const store = mockStore({ authedUser: undefined });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders Home component when authedUser is valid', async () => {
    const store = mockStore({ authedUser: 'tylermcginnis' });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

});
