#!/usr/bin/env node
import { rl } from "../variables.js";
import { showAll } from "./show-all.js";
import { music } from "./index.js";
import { addAlbum } from "./add.js";

export const runCommands = async () => {
  const answer = await rl.question("Please enter a command: ");

  console.log(`answer: ${answer}`);

  const command = answer.split(" ")[0];

  switch (answer) {
    case "show all":
      showAll();
      break;
    case "music":
      music();
      break;
  }

  switch (command) {
    case "add":
      addAlbum(answer);
      break;
  }

  // rl.close();
};
