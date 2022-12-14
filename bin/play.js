#!/usr/bin/env node
import { albums, stringToArray } from "../variables.js";
import { runCommands } from "./logger.js";

export const playAlbum = (answer) => {
  let arr = stringToArray(answer);
  const albumTitle = arr[1];
  let message = "";

  if (albumTitle === undefined) {
    console.log("Please enter a valid album title and artist name.");
    runCommands();
    return;
  }

  let result = albums.find((album) => {
    return album.title.toLowerCase() === albumTitle.toLowerCase();
  });

  // format the album to look like the following:
  // You're listening to "Licensed to Ill"

  // display error message if this album doesn't exist
  if (result && result.played === false) {
    message = `You're listening to "${result.title}"`;
    // change play status
    result.played = true;
  } else if (result && result.played === true) {
    message = "This album has already been played.";
  } else {
    message = "Oops! That album doesn't exist.";
  }

  console.log(message);
  runCommands();
  return message;
};
