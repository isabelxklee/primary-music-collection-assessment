#!/usr/bin/env node
import { rl } from "../variables.js";
import { music } from "./index.js";
import { addAlbum } from "./add.js";
import { quitApp } from "./quit.js";
import { playAlbum } from "./play.js";
import { showAll, showAllByArtist } from "./show-all.js";
import { showUnplayed, showUnplayedByArtist } from "./show-unplayed.js";

export const runCommands = async () => {
  const answer = await rl.question("Please enter a command: ");

  console.dir(answer);

  const commandPrefix = answer.split(" ")[0];
  // const command2 = answer.split(" ").slice(0, 3).join(" ");

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
    case "show unplayed":
      showUnplayed();
      break;
  }

  switch (commandPrefix) {
    case "add":
      addAlbum(answer);
      break;
    case "play":
      playAlbum(answer);
      break;
  }

  // switch (command2) {
  //   case "show unplayed by":
  //     showUnplayedByArtist(answer);
  //     break;
  //   case "show all by":
  //     showAllByArtist(answer);
  //     break;
  // }
};
