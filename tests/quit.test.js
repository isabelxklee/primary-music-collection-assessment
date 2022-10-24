import { quitApp } from "../bin/quit.js";

test("clears out albums", () => {
  expect(quitApp()).toBe([]);
});
