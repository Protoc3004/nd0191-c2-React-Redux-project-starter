import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Login from "../components/Login";

const mockStore = configureStore([]);

const renderWithRedux = (
  ui,
  { initialState, store = mockStore(initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe("Login", () => {
  it("will match Snapshot", () => {
    const { container } = renderWithRedux(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      {
        initialState: {
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
        },
      }
    );

    expect(container).toMatchSnapshot();
  });
});
