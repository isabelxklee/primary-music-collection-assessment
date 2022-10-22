#!/usr/bin/env node
import { albums } from "../variables.js";
import { runCommands } from "./logger.js";

export const addAlbum = (answer) => {
  const split = answer.split(/"/g);

  const albumTitle = split[1];
  const artist = split[3];

  let results = albums.filter((album) => {
    return album.title.toLowerCase() === albumTitle.toLowerCase();
  });

  // if the results array's length is longer than 0
  // that means that we have a duplicate
  // display error message to user
  if (results.length > 0) {
    console.log(
      "Error: this album title already exists in the database. Please try adding a different album!"
    );
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
