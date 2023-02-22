import { screen, render } from "@testing-library/react";
import { Actions } from "./actions";
describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(<Actions></Actions>);
      const element = screen.getAllByRole("link");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
