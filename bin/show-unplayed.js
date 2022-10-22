#!/usr/bin/env node
import { albums } from "../variables.js";
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

  results.length > 0
    ? resultsMessage
    : console.log(
        "All your albums have already been played - there aren't any unplayed albums."
      );

  runCommands();
};

export const showUnplayedByArtist = (answer) => {
  let arr = answer.split(" ");
  arr.splice(0, 3);
  const artist = arr.join(" ");

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
};
