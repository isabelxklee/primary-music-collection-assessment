import { showAll } from "../bin/show-all.js";
import { jest } from "@jest/globals";
import { toBeArray } from "jest-extended";

test("shows all existing albums", () => {
  expect(showAll()).toBeArray();
});
