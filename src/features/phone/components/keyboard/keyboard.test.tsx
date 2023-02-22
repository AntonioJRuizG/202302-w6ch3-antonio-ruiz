import { screen, render } from "@testing-library/react";
import { Keyboard } from "./keyboard";
describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(<Keyboard></Keyboard>);
      const element = screen.getAllByRole("listitem");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
