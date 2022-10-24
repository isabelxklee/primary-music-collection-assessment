import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const rl = readline.createInterface({ input, output });

export let albums = [];

export const stringToArray = (answer) => {
  return answer.split(/["'`]/g);
};
