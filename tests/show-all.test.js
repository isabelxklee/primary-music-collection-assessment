import { showAll } from "../bin/show-all.js";
import { toBeArray } from "jest-extended";

test("shows all existing albums", () => {
  const data = showAll();
  expect(data).toBeArray();
});
