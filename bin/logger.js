#!/usr/bin/env node
import { rl } from "../variables.js";
import { showAll } from "./show-all.js";
import { music } from "./index.js";
import { addAlbum } from "./add.js";
import { quitApp } from "./quit.js";
import { playAlbum } from "./play.js";

export const runCommands = async () => {
  const answer = await rl.question("Please enter a command: ");

  const command = answer.split(" ")[0];

  switch (answer) {
    case "show all":
      showAll();
      break;
    case "music":
      music();
      break;
    case "quit":
      quitApp();
      break;
  }

  switch (command) {
    case "add":
      addAlbum(answer);
      break;
    case "play":
      playAlbum();
      break;
  }

  // rl.close();
};
