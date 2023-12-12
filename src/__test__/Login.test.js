import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import thunk from "redux-thunk";
import { within } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../components/Login";

const mockStore = configureStore([thunk]);

describe("<Login />", () => {
  let store, Component;

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
        johndoe: {
          id: "johndoe",
          name: "John Doe",
        },
      },
    });
  });

  it("will match Snapshot", () => {
    Component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(Component).toMatchSnapshot();
  });

  it("select a user", () => {
    const { getById } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    Component = getById("Check Component");
    const selectOptions = within(Component).getAllByRole("option");
    const option = selectOptions[1];

    fireEvent.click(option);
    expect(option.getAttribute("aria-selected")).toBe("true");
  });
});
