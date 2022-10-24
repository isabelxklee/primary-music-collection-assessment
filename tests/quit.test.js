import { quitApp } from "../bin/quit.js";
import { toBeArray } from "jest-extended";

test("clears out albums", () => {
  expect(quitApp()).toBeArray();
});
