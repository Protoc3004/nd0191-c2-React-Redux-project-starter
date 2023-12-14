import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../components/Login";
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);
let store;

describe("Login", () => {

  beforeEach(() => {
    store = mockStore({
      users: {
        sarahedo: {
          id: "sarahedo",
          name: "Sarah Edo",
        },
        tylermcginnis: {
          id: "tylermcginnis",
          name: "Tyler McGinnis",
        },
        zoshikanlu: {
          id: "zoshikanlu",
          name: "Zenobia Oshikanlu",
        },
      },
    });
  });

  it("will match Snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
