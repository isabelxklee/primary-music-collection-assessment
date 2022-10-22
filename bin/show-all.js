#!/usr/bin/env node
import { albums } from "../variables.js";
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
