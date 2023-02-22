import { screen, render } from "@testing-library/react";
import { Info } from "./info";
describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(<Info></Info>);
      const element = screen.getByRole("none");
      expect(element).toBeInTheDocument();
    });
  });
});
