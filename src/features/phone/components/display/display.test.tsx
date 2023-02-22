import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import { Display } from "./display";

describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(
        <Provider store={store}>
          <Display></Display>
        </Provider>
      );
      const element = screen.getByRole("none");
      expect(element).toBeInTheDocument();
    });
  });
});
