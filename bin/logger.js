#!/usr/bin/env node
import { albums, rl } from "../variables.js";

export const runCommands = async () => {
  const answer = await rl.question("Please enter a command: ");

  console.log(`answer: ${answer}`);

  // rl.close();
};
