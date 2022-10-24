#!/usr/bin/env node
import { albums, stringToArray } from "../variables.js";
import { runCommands } from "./logger.js";

export const addAlbum = (answer) => {
  let arr = stringToArray(answer);

  const albumTitle = arr[1];
  const artist = arr[3];

  // check for valid # of arguments
  if (arr.length > 5) {
    console.log("Please enter a valid album title and artist.");
    runCommands();
    return;
  }

  let results = albums.filter((album) => {
    return album.title.toLowerCase() === albumTitle.toLowerCase();
  });

  // check for duplicate album titles
  if (results.length > 0) {
    console.log(
      "Error: this album title already exists in the database. Please try adding a different album!"
    );
    runCommands();
    return;
  } else {
    // otherwise, push the album data to the db
    albums.push({
      title: albumTitle,
      artist: artist,
      played: false,
    });

    // display added album back to user
    console.log(`Added "${albumTitle}" by ${artist}`);
  }

  runCommands();
};
