import { quitApp } from "../bin/quit.js";
import { jest } from "@jest/globals";
import { toBeArray } from "jest-extended";

test("removes all albums from the database", () => {
  expect(quitApp()).toBeArray();
});

test("log a goodbye message to the console", () => {
  console.log = jest.fn();
  quitApp();
  expect(console.log.mock.calls[0][0]).toBe("Bye!");
});
