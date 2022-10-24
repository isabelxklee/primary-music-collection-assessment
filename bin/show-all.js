#!/usr/bin/env node
import { albums, stringToArray } from "../variables.js";
import { runCommands } from "./logger.js";

export const showAll = () => {
  let results = albums.map((album) => {
    console.log(
      `"${album.title}" by ${album.artist} (${
        album.played ? "played" : "unplayed"
      })`
    );
  });

  albums.length > 0
    ? results
    : console.log(
        "Oops! There aren't any albums yet. Try adding a new album with the `add <album> <artist>` command."
      );

  runCommands();
};

export const showAllByArtist = (answer) => {
  let arr = stringToArray(answer);

  const artist = arr[1];

  // filter albums by artist and unplayed status
  let results = albums.filter((album) => {
    return (
      album.artist.toLowerCase().replace(/"/g, "") ===
      artist.toLowerCase().replace(/"/g, "")
    );
  });

  // format each album to look like the following:
  // "Pauls Boutique" by Beastie Boys

  let resultsMessage = results.map((album) => {
    console.log(
      `"${album.title}" by ${album.artist} (${
        album.played ? "played" : "unplayed"
      })`
    );
  });

  results.length > 0
    ? resultsMessage
    : console.log("Oops! There aren't any albums by this artist yet.");

  runCommands();
};
