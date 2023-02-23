import { configureStore } from "@reduxjs/toolkit";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import { phoneReducer } from "../../reducer/phone.reducer";
import { Keyboard } from "./keyboard";

const mockStore = configureStore({
  reducer: {
    phone: phoneReducer,
  },
  preloadedState: {
    phone: "",
  },
});

describe("Given App component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <Keyboard></Keyboard>
      </Provider>
    );
  });
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      const element = screen.getAllByRole("listitem");
      expect(element[0]).toBeInTheDocument();
    });
    test("Then the button 1 should dispatch addCreator('1')", () => {
      const keyOne = screen.getAllByRole("button");
      userEvent.click(keyOne[2]);
      console.log(keyOne[1]);
      const result = mockStore.getState().phone;
      expect(result).toBe("1");
    });
  });
});
