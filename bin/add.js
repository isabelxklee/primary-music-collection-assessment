#!/usr/bin/env node
import { albums, stringToArray } from "../variables.js";
import { runCommands } from "./logger.js";

export const addAlbum = (answer) => {
  let message = "";
  let arr = stringToArray(answer);

  const albumTitle = arr[1];
  const artist = arr[3];

  // check for valid inputs
  if (albumTitle === undefined || artist === undefined) {
    message = "Please enter a valid album title and artist name.";

    console.log(message);
    runCommands();
    return message;
  }

  let results = albums.filter((album) => {
    return album.title.toLowerCase() === albumTitle.toLowerCase();
  });

  // check for duplicate album titles
  if (results.length > 0) {
    message =
      "Error: this album title already exists in the database. Please try adding a different album!";

    console.log(message);
    runCommands();
    return message;
  } else {
    // otherwise, push the album data to the db
    albums.push({
      title: albumTitle,
      artist: artist,
      played: false,
    });

    // display added album back to user
    message = `Added "${albumTitle}" by ${artist}`;
  }

  console.log(message);
  runCommands();
  return message;
};
