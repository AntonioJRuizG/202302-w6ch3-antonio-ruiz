import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import { Keyboard } from "./keyboard";
describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(
        <Provider store={store}>
          <Keyboard></Keyboard>
        </Provider>
      );
      const element = screen.getAllByRole("listitem");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
