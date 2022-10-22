#!/usr/bin/env node
import { rl } from "../variables.js";
import { showAll } from "./show-all.js";
import { music } from "./index.js";

export const runCommands = async () => {
  const answer = await rl.question("Please enter a command: ");

  console.log(`answer: ${answer}`);

  switch (answer) {
    case "show all":
      showAll();
      break;
    case "music":
      music();
      break;
  }

  // rl.close();
};
