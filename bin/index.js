#!/usr/bin/env node
import { runCommands } from "./logger.js";

export const music = () => {
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
};

music();
