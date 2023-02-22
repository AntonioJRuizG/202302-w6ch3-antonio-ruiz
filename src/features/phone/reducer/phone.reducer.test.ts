import { addCreator, deleteCreator } from "./phone.action.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given a reducer", () => {
  describe("When addCreator is called with initialState", () => {
    test("Then the reducer add a number", () => {
      const result = phoneReducer("123", addCreator("4"));
      expect(result).toBe("1234");
    });
  });
  describe("When deleteCreator is called", () => {
    test("Then the reducer should return a empty string", () => {
      const result = phoneReducer("123", deleteCreator());
      expect(result).toBe("");
    });
  });
});
