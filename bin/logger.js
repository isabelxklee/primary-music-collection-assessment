#!/usr/bin/env node
import { rl } from "../variables.js";
import { addAlbum } from "./add.js";
import { quitApp } from "./quit.js";
import { playAlbum } from "./play.js";
import { showAll, showAllByArtist } from "./show-all.js";
import { showUnplayed, showUnplayedByArtist } from "./show-unplayed.js";

const music = () => {
  const message = `
  🎵 Welcome to your music collection!
  🎵
  This app helps you keep track of the albums you've added and played.

  commands:
    music                       start the app
    add <album-title> <artist>  add a new album to your list (unplayed by default)
    play <album-title>          marks an album as "played"
    show all                    displays all the albums in the collection
    show all by <artist>        display all the albums by a given artist
    show unplayed               display all the unplayed albums in the collection
    show unplayed by <artist>   display all the unplayed albums by a given artist
    quit                        closes the program and your session
`;
  console.log(message);

  runCommands();
  return;
};

export var runCommands = async function () {
  const commandList = ["show", "play", "add", "quit"];
  const answer = await rl.question("What would you like to do? ");

  const commandPrefix = answer.split(" ")[0];
  const commandPrefixLong = answer.split(" ").slice(0, 3).join(" ");

  // if the first element in the answer isn't any of the command words
  // then display an error message

  if (commandList.indexOf(commandPrefix) === -1) {
    console.log("Please enter a valid command.");
    runCommands();
    return;
  }

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

  switch (commandPrefixLong) {
    case "show unplayed by":
      showUnplayedByArtist(answer);
      break;
    case "show all by":
      showAllByArtist(answer);
      break;
  }

  console.log("Please enter a valid command.");
  runCommands();

  return;
};

const start = () => {
  music();
  runCommands();
};

start();
