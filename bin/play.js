#!/usr/bin/env node
import { albums } from "../variables.js";
import { runCommands } from "./logger.js";

export const findAlbum = (answer) => {
  const split = answer.split(/"/g);

  const albumTitle = split[1];
  const artist = split[3];

  let result = albums.find((album) => {
    return album.title.toLowerCase() === albumTitle.toLowerCase();
  });

  // format the album to look like the following:
  // You're listening to "Licensed to Ill"

  // display error message if this album doesn't exist
  if (result) {
    console.log(`You're listening to "${result.title}"`);

    // change play status
    result.played = true;
    db.write();
  } else {
    console.log("Oops! That album doesn't exist.");
  }
};
