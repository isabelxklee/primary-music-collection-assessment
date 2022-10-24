#!/usr/bin/env node
import { albums, stringToArray } from "../variables.js";
import { runCommands } from "./logger.js";

export const showUnplayed = () => {
  // filter for unplayed albums
  let results = albums.filter((album) => {
    return album.played === false;
  });

  // format each album to look like the following:
  // "Ride the Lightning" by Metallica
  let resultsMessage = results.map((album) =>
    console.log(`"${album.title}" by ${album.artist}`)
  );

  if (albums.length < 1) {
    console.log("There aren't any unplayed albums to see here.");
  } else if (results.length > 0) {
    resultsMessage;
  } else {
    console.log(
      "All your albums have already been played - there aren't any unplayed albums."
    );
  }

  runCommands();
  return results;
};

export const showUnplayedByArtist = (answer) => {
  let arr = stringToArray(answer);

  const artist = arr[1];

  if (artist === undefined) {
    console.log("Please enter a valid artist name.");
    runCommands();
    return;
  }

  // filter albums by artist and unplayed status
  let results = albums.filter((album) => {
    return (
      album.artist.toLowerCase().replace(/"/g, "") ===
        artist.toLowerCase().replace(/"/g, "") && album.played === false
    );
  });

  // format each album to look like the following:
  // "Pauls Boutique" by Beastie Boys

  let resultsMessage = results.map((album) => {
    console.log(`"${album.title}" by ${album.artist}`);
  });

  results.length > 0
    ? resultsMessage
    : console.log("Oops! There aren't any unplayed albums by this artist yet.");

  runCommands();
  return results;
};
