import { render } from "@testing-library/react";
import { Actions } from "../../../features/phone/components/actions/actions";
import { Display } from "../../../features/phone/components/display/display";
import { Info } from "../../../features/phone/components/info/info";
import { Keyboard } from "../../../features/phone/components/keyboard/keyboard";

import App from "./App";
// import { store } from "../../store/store";

jest.mock("../../../features/phone/components/actions/actions");
jest.mock("../../../features/phone/components/display/display");
jest.mock("../../../features/phone/components/info/info");
jest.mock("../../../features/phone/components/keyboard/keyboard");

describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Info, Keyboard, Display and Actions components", () => {
      render(<App />);
      expect(Info).toHaveBeenCalled();
      expect(Keyboard).toHaveBeenCalled();
      expect(Display).toBeCalled();
      expect(Actions).toBeCalled();
    });
  });
});
