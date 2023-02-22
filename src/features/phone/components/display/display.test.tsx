import { screen, render } from "@testing-library/react";
import { Display } from "./display";

describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(<Display></Display>);
      const element = screen.getByRole("none");
      expect(element).toBeInTheDocument();
    });
  });
});
