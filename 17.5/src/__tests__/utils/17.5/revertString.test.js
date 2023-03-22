import { revertString } from "../../../utils/17.5/revertString.js";

xdescribe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("Привет")).toBe("тевирП"));
});
